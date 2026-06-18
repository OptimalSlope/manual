# OptimalSlope OSA Section Viewer

This folder contains a standalone interactive viewer for an OptimalSlope section, bench lines, and the Min/Max OSA triangle.

## Files

- `index.html` - interactive viewer
- `input.json` - section geometry and geological layers
- `triangle.dxf` - bench lines and OSA triangle geometry

## Replace the data

To use a different section, replace these two files but keep the filenames the same:

```text
input.json
triangle.dxf
```

The viewer expects the JSON and DXF to be in the same coordinate system.

## DXF assumptions

The included example DXF uses:

- `Layer_0` for horizontal bench lines
- `Layer_1` for the OSA triangle boundary

The viewer also falls back to DXF colour matching if these layer names are not present.

## Embedding in the manual

Place this folder at:

```text
manual/interactive/section-osa-viewer/
```

Then embed it into `assets/preview_interactive.html` with:

```html
<section class="section result-plot-section" id="osa-plot">
  <div class="section-head">
    <div>
      <div class="section-kicker">Section interpretation</div>
      <h2>OSA triangle section plot</h2>
      <p>Inspect the section geometry, bench lines, crest location and Min/Max OSA triangle in an interactive viewer.</p>
    </div>
  </div>

  <div class="result-plot-frame">
    <iframe
      src="../interactive/section-osa-viewer/?v=1"
      title="OSA triangle section plot"
      loading="lazy">
    </iframe>
  </div>
</section>
```

Add this to the navigation:

```html
<a href="#osa-plot">OSA plot</a>
```

## Local testing

Because the viewer uses `fetch()` to load `input.json` and `triangle.dxf`, test it using a local web server:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000/section-osa-viewer/
```
