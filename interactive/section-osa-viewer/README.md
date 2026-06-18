# OptimalSlope OSA Section Viewer (switchable overlays)

This viewer uses one shared `input.json` for the section geometry and two DXF overlays:

- `triangle_1.dxf`
- `triangle_2.dxf`

## Important

The section geometry from `input.json` is mirrored horizontally in the viewer so it matches the DXF coordinate orientation. The DXF files themselves are not mirrored.

## Controls

- **OSA option 1 / OSA option 2** switches manually between the two DXF overlays.
- **Auto switch** cycles between the two overlays automatically.
- Zoom, pan and layer visibility controls remain available.

## Repo placement

Put this folder here:

```text
manual/interactive/section-osa-viewer/
```

The embedded page should use:

```html
<iframe
  src="../interactive/section-osa-viewer/?v=4"
  title="OSA search region viewer"
  loading="lazy">
</iframe>
```

## Local testing

Use a local web server because the viewer loads JSON/DXF files with `fetch()`:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000/section-osa-viewer/
```


## Demo mode control

This version also listens for parent-page demo commands using `postMessage`, so the main preview page can automatically switch between OSA option 1 and OSA option 2 during demo mode.
