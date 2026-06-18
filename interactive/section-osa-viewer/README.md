# OptimalSlope OSA Section Viewer (switchable overlays)

This viewer shows a single section geometry from `input.json`, and lets you switch between two different OSA overlay DXF files.

## Files

- `index.html` - interactive viewer
- `input.json` - shared section geometry
- `triangle_1.dxf` - OSA overlay option 1
- `triangle_2.dxf` - OSA overlay option 2

## How it works

The geology/topography/crest come from `input.json`.

The OSA overlay is switched using the two buttons at the top:

- **OSA option 1**
- **OSA option 2**

Each option loads a different DXF file, so you can compare two different Min/Max OSA search regions while keeping the same section geometry.

## Replacing the files

If you want to use your own data, keep the filenames the same:

```text
input.json
triangle_1.dxf
triangle_2.dxf
```

## Embedding

Place this folder at:

```text
manual/interactive/section-osa-viewer/
```

Then embed it using:

```html
<iframe
  src="../interactive/section-osa-viewer/?v=2"
  title="OSA search region viewer"
  loading="lazy">
</iframe>
```

## Local testing

Because the viewer loads files using `fetch()`, test it using a local web server:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000/section-osa-viewer/
```
