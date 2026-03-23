#!/usr/bin/env python3
import argparse
import json
from pathlib import Path

import numpy as np
from PIL import Image


def content_mask(gray):
    # True where pixel is not almost white
    return gray < 244


def trim_box(mask):
    ys, xs = np.where(mask)
    if len(xs) == 0 or len(ys) == 0:
        return None
    return int(xs.min()), int(ys.min()), int(xs.max()) + 1, int(ys.max()) + 1


def best_cut(mask, min_gap=18, min_side=180):
    h, w = mask.shape
    row_density = mask.mean(axis=1)
    col_density = mask.mean(axis=0)

    # Low-density whitespace runs
    row_whitespace = row_density < 0.012
    col_whitespace = col_density < 0.012

    def find_runs(arr):
        runs = []
        start = None
        for i, v in enumerate(arr):
            if v and start is None:
                start = i
            if not v and start is not None:
                runs.append((start, i))
                start = None
        if start is not None:
            runs.append((start, len(arr)))
        return runs

    row_runs = [r for r in find_runs(row_whitespace) if (r[1] - r[0]) >= min_gap]
    col_runs = [r for r in find_runs(col_whitespace) if (r[1] - r[0]) >= min_gap]

    # Also detect dark separator lines (table borders) that can split composites.
    row_dark = row_density > 0.34
    col_dark = col_density > 0.34
    row_dark_runs = [r for r in find_runs(row_dark) if 1 <= (r[1] - r[0]) <= 10]
    col_dark_runs = [r for r in find_runs(col_dark) if 1 <= (r[1] - r[0]) <= 10]

    candidates = []
    for a, b in row_runs:
        c = (a + b) // 2
        if c < min_side or (h - c) < min_side:
            continue
        score = (b - a) * 1.3 + (1.0 - row_density[c]) * 100
        candidates.append(("h", c, score))
    for a, b in col_runs:
        c = (a + b) // 2
        if c < min_side or (w - c) < min_side:
            continue
        score = (b - a) * 1.3 + (1.0 - col_density[c]) * 100
        candidates.append(("v", c, score))
    for a, b in row_dark_runs:
        c = (a + b) // 2
        if c < min_side or (h - c) < min_side:
            continue
        score = (b - a) * 0.8 + row_density[c] * 60
        candidates.append(("h", c, score))
    for a, b in col_dark_runs:
        c = (a + b) // 2
        if c < min_side or (w - c) < min_side:
            continue
        score = (b - a) * 0.8 + col_density[c] * 60
        candidates.append(("v", c, score))

    if not candidates:
        return None
    candidates.sort(key=lambda x: x[2], reverse=True)
    return candidates[0][0], candidates[0][1]


def split_recursive(image_arr, depth=0, max_depth=2):
    h, w, _ = image_arr.shape
    gray = np.dot(image_arr[..., :3], [0.299, 0.587, 0.114]).astype(np.uint8)
    mask = content_mask(gray)
    box = trim_box(mask)
    if box is None:
        return []
    x0, y0, x1, y1 = box
    cropped = image_arr[y0:y1, x0:x1]
    ch, cw, _ = cropped.shape
    if depth >= max_depth or cw < 360 or ch < 280:
        return [cropped]

    cgray = np.dot(cropped[..., :3], [0.299, 0.587, 0.114]).astype(np.uint8)
    cmask = content_mask(cgray)
    cut = best_cut(cmask)
    if not cut:
        return [cropped]

    orient, pos = cut
    parts = []
    if orient == "v":
        left = cropped[:, :pos]
        right = cropped[:, pos:]
        parts = [left, right]
    else:
        top = cropped[:pos, :]
        bottom = cropped[pos:, :]
        parts = [top, bottom]

    out = []
    for p in parts:
        ph, pw, _ = p.shape
        if ph < 220 or pw < 220:
            continue
        out.extend(split_recursive(p, depth + 1, max_depth=max_depth))
    return out if out else [cropped]


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--manifest", required=True)
    parser.add_argument("--out", required=True)
    parser.add_argument("--public-root", required=True)
    args = parser.parse_args()

    manifest_path = Path(args.manifest)
    out_path = Path(args.out)
    public_root = Path(args.public_root)

    rows = json.loads(manifest_path.read_text(encoding="utf-8"))
    new_rows = []
    split_count = 0

    for row in rows:
        abs_file = Path(row["file"])
        img = np.array(Image.open(abs_file).convert("RGB"))
        h, w, _ = img.shape
        is_large = (w * h) >= 380000 or w >= 900 or h >= 680
        if not is_large:
            rel = "/" + abs_file.relative_to(public_root).as_posix()
            new_rows.append(
                {
                    "id": f"{abs_file.stem}",
                    "page": row["page"],
                    "image": rel,
                    "width": w,
                    "height": h,
                    "file": str(abs_file),
                }
            )
            continue

        tiles = split_recursive(img, max_depth=2)
        if len(tiles) <= 1:
            rel = "/" + abs_file.relative_to(public_root).as_posix()
            new_rows.append(
                {
                    "id": f"{abs_file.stem}",
                    "page": row["page"],
                    "image": rel,
                    "width": w,
                    "height": h,
                    "file": str(abs_file),
                }
            )
            continue

        split_count += 1
        for i, tile in enumerate(tiles, start=1):
            th, tw, _ = tile.shape
            if th < 200 or tw < 200:
                continue
            out_file = abs_file.with_name(f"{abs_file.stem}-tile{i:02d}.png")
            Image.fromarray(tile).save(out_file, format="PNG", optimize=True)
            rel = "/" + out_file.relative_to(public_root).as_posix()
            new_rows.append(
                {
                    "id": f"{out_file.stem}",
                    "page": row["page"],
                    "image": rel,
                    "width": tw,
                    "height": th,
                    "file": str(out_file),
                    "parent_file": str(abs_file),
                }
            )

    out_path.write_text(json.dumps(new_rows, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"rows_in={len(rows)} rows_out={len(new_rows)} split_images={split_count}")
    print(f"out={out_path}")


if __name__ == "__main__":
    main()

