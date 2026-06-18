---
title: Controls
author: Dainius Jenkus
date: 2010-06-30
category: Controls
layout: post
---

### Visualisation Controls

<style>
.os-controls-page {
  --blue: #0a4e76;
  --blue2: #0f6e9f;
  --orange: #f16b21;
  --ink: #14202b;
  --muted: #617180;
  --line: rgba(20, 35, 50, 0.12);
  --shadow: 0 14px 34px rgba(20, 35, 50, 0.10);
  --shadow2: 0 22px 58px rgba(10, 78, 118, 0.18);
}

.os-controls-page * {
  box-sizing: border-box;
}

.os-controls-hero {
  position: relative;
  overflow: hidden;
  margin: 0 0 24px;
  padding: 34px;
  border-radius: 26px;
  background:
    radial-gradient(circle at 90% 10%, rgba(241, 107, 33, 0.30), transparent 30%),
    linear-gradient(135deg, #062f50, var(--blue), var(--blue2));
  color: white;
  box-shadow: var(--shadow2);
}

.os-controls-hero::after {
  content: "OptimalSlope";
  position: absolute;
  right: -30px;
  top: 50%;
  transform: translateY(-50%) rotate(-6deg);
  font-size: clamp(70px, 11vw, 150px);
  font-weight: 1000;
  letter-spacing: -0.06em;
  color: rgba(255, 255, 255, 0.08);
  pointer-events: none;
  white-space: nowrap;
}

.os-controls-hero .kicker,
.os-controls-hero .hero-title,
.os-controls-hero p {
  position: relative;
  z-index: 1;
}

.os-controls-hero .kicker {
  color: #ffd9c4;
  font-size: 12px;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.os-controls-hero .hero-title {
  margin: 8px 0 10px;
  color: white;
  font-size: clamp(38px, 5vw, 58px);
  font-weight: 900;
  line-height: 1;
  letter-spacing: -0.045em;
}

.os-controls-hero p {
  max-width: 780px;
  margin: 0;
  color: rgba(255,255,255,0.86);
  font-size: 17px;
  line-height: 1.5;
}

.os-controls-nav {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 0 0 22px;
  padding: 8px;
  border: 1px solid var(--line);
  border-radius: 999px;
  background: white;
  box-shadow: var(--shadow);
}

.os-controls-nav a {
  padding: 8px 14px;
  border-radius: 999px;
  color: var(--blue);
  text-decoration: none;
  font-weight: 900;
}

.os-controls-nav a:hover {
  background: #eef6fb;
  text-decoration: none;
}

.os-summary {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;
  margin: 0 0 26px;
}

.os-summary-card {
  padding: 18px;
  border: 1px solid var(--line);
  border-radius: 20px;
  background:
    radial-gradient(circle at 100% 0%, rgba(241, 107, 33, 0.08), transparent 35%),
    linear-gradient(180deg, #fff, #f7fafc);
  box-shadow: var(--shadow);
}

.os-summary-card .summary-title {
  display: block;
  margin-bottom: 6px;
  color: var(--blue);
  font-size: 17px;
  font-weight: 900;
}

.os-summary-card p {
  margin: 0;
  color: var(--muted);
  line-height: 1.45;
}

.os-section {
  margin: 28px 0;
  border: 1px solid var(--line);
  border-radius: 24px;
  background: white;
  box-shadow: var(--shadow);
  overflow: hidden;
}

.os-section-head {
  padding: 22px 26px;
  border-bottom: 1px solid rgba(20,35,50,0.08);
  background:
    radial-gradient(circle at 96% 0%, rgba(241,107,33,0.12), transparent 28%),
    linear-gradient(180deg, #fff, #f6fafc);
}

.os-section-head .label {
  color: var(--orange);
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-size: 12px;
}

.os-section-head h2 {
  margin: 7px 0;
  color: var(--ink);
  font-size: 32px;
  line-height: 1.1;
}

.os-section-head p {
  margin: 0;
  color: var(--muted);
  line-height: 1.45;
}

.os-section-body {
  padding: 22px 26px 26px;
}

.os-control-list {
  display: grid;
  gap: 12px;
}

.os-control {
  display: grid;
  grid-template-columns: 58px 1fr;
  gap: 15px;
  margin: 0;
  padding: 15px;
  border: 1px solid var(--line);
  border-radius: 18px;
  background: linear-gradient(180deg, #fff, #f8fbfd);
  transition: transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease;
}

.os-control:hover {
  transform: translateY(-2px);
  border-color: rgba(241, 107, 33, 0.34);
  box-shadow: 0 12px 28px rgba(20, 35, 50, 0.11);
}

.os-control img {
  width: 36px;
  height: 36px;
  object-fit: contain;
  padding: 8px;
  border-radius: 13px;
  background: #eef6fb;
  border: 1px solid rgba(10, 78, 118, 0.12);
}

.os-control .control-title {
  margin: 0 0 5px;
  color: var(--blue);
  font-size: 18px;
  font-weight: 900;
  line-height: 1.25;
}

.os-control p {
  margin: 0;
  color: var(--muted);
  line-height: 1.45;
}

.os-tip {
  margin-top: 8px !important;
  padding: 8px 10px;
  border-left: 4px solid var(--orange);
  border-radius: 10px;
  background: #fff7f1;
  color: #4d5965 !important;
  font-size: 14px;
}

@media (min-width: 1050px) {
  .os-control-list.two-column {
    grid-template-columns: repeat(2, minmax(260px, 1fr));
  }
}

@media (max-width: 800px) {
  .os-summary {
    grid-template-columns: 1fr;
  }

  .os-control {
    grid-template-columns: 1fr;
  }

  .os-controls-nav {
    border-radius: 18px;
  }
}
</style>

<div class="os-controls-page" markdown="0">

<section class="os-controls-hero">
<div class="kicker">Interface guide</div>
<div class="hero-title">Visualisation Controls</div>
<p>Use the visualisation controls to navigate the model, change the viewing direction, adjust object display styles, and manage selected slices or 3D models in the project.</p>
</section>

<nav class="os-controls-nav">
<a href="#slices-and-3d-models">Delete / Hide</a>
<a href="#fit-zoom-pan-flip-and-rotate">Position</a>
<a href="#wireframe-shading-colour-and-transparency">Style</a>
</nav>

<div class="os-summary">
<div class="os-summary-card">
<span class="summary-title">Manage Items</span>
<p>Hide selected shapes from the visualiser or delete selected items from the project.</p>
</div>

<div class="os-summary-card">
<span class="summary-title">Control Position</span>
<p>Fit, zoom, pan, rotate, or flip the model to a standard viewing direction.</p>
</div>

<div class="os-summary-card">
<span class="summary-title">Change Style</span>
<p>Display selected objects as wireframe or shaded geometry, and adjust colour or transparency.</p>
</div>
</div>

<section class="os-section" id="slices-and-3d-models">
<div class="os-section-head">
<div class="label">Delete / hide items</div>
<h2 id="slices-and-3d-models-heading">Slices and 3D Models</h2>
<p>These controls are used to hide selected shapes on the visualiser or delete selected items from the project.</p>
</div>
<div class="os-section-body">
<div class="os-control-list">

<div class="os-control">
<img src="https://OptimalSlope.github.io/manual/assets/control-icons/eye-off-custom.png" alt="Hide selected shape">
<div>
<div class="control-title">Hide Selected Shape</div>
<p>Hides the selected shape on the visualiser without deleting it from the project.</p>
</div>
</div>

<div class="os-control">
<img src="https://OptimalSlope.github.io/manual/assets/control-icons/delete-custom.png" alt="Delete selected item">
<div>
<div class="control-title">Delete Selected Item</div>
<p>Deletes the selected item from the project.</p>
<p class="os-tip">Use this carefully. Deleting an item removes it from the project structure.</p>
</div>
</div>

</div>
</div>
</section>

<section class="os-section" id="fit-zoom-pan-flip-and-rotate">
<div class="os-section-head">
<div class="label">Visualisation position</div>
<h2 id="fit-zoom-pan-flip-and-rotate-heading">Fit, Zoom, Pan, Flip and Rotate</h2>
<p>These controls are used to move around the visualiser and change the view direction.</p>
</div>
<div class="os-section-body">
<div class="os-control-list two-column">

<div class="os-control">
<img src="https://OptimalSlope.github.io/manual/assets/control-icons/fit-to-screen.png" alt="Fit visualiser content to screen">
<div>
<div class="control-title">Fit Visualiser Content to Screen</div>
<p>Fits the visualiser content to the available screen area.</p>
</div>
</div>

<div class="os-control">
<img src="https://OptimalSlope.github.io/manual/assets/control-icons/loupe-custom.png" alt="Dynamic zooming">
<div>
<div class="control-title">Dynamic Zooming</div>
<p>Press the left mouse button, then move the pointer left or right to zoom in or out.</p>
<p class="os-tip">Alternatively, use the <code>Ctrl</code> button on the keyboard.</p>
</div>
</div>

<div class="os-control">
<img src="https://OptimalSlope.github.io/manual/assets/control-icons/pan-custom.png" alt="Dynamic panning">
<div>
<div class="control-title">Dynamic Panning</div>
<p>Press the left mouse button, then move the pointer to pan around the visualiser.</p>
<p class="os-tip">Alternatively, use the middle mouse button.</p>
</div>
</div>

<div class="os-control">
<img src="https://OptimalSlope.github.io/manual/assets/control-icons/flip-to-front-custom.png" alt="Flip shape to front">
<div>
<div class="control-title">Flip Shape to Front</div>
<p>Changes the visualiser to the front viewing direction.</p>
</div>
</div>

<div class="os-control">
<img src="https://OptimalSlope.github.io/manual/assets/control-icons/flip-to-back-custom.png" alt="Flip shape to back">
<div>
<div class="control-title">Flip Shape to Back</div>
<p>Changes the visualiser to the back viewing direction.</p>
</div>
</div>

<div class="os-control">
<img src="https://OptimalSlope.github.io/manual/assets/control-icons/border-top-variant-custom.png" alt="Flip shape to top">
<div>
<div class="control-title">Flip Shape to Top</div>
<p>Changes the visualiser to the top viewing direction.</p>
</div>
</div>

<div class="os-control">
<img src="https://OptimalSlope.github.io/manual/assets/control-icons/border-bottom-variant-custom.png" alt="Flip shape to bottom">
<div>
<div class="control-title">Flip Shape to Bottom</div>
<p>Changes the visualiser to the bottom viewing direction.</p>
</div>
</div>

<div class="os-control">
<img src="https://OptimalSlope.github.io/manual/assets/control-icons/border-left-variant-custom.png" alt="Flip shape to left">
<div>
<div class="control-title">Flip Shape to Left</div>
<p>Changes the visualiser to the left viewing direction.</p>
</div>
</div>

<div class="os-control">
<img src="https://OptimalSlope.github.io/manual/assets/control-icons/border-right-variant-custom.png" alt="Flip shape to right">
<div>
<div class="control-title">Flip Shape to Right</div>
<p>Changes the visualiser to the right viewing direction.</p>
</div>
</div>

<div class="os-control">
<img src="https://OptimalSlope.github.io/manual/assets/control-icons/rotate-360-custom.png" alt="Dynamic rotation">
<div>
<div class="control-title">Dynamic Rotation</div>
<p>Press the left mouse button, then move the pointer to rotate the view.</p>
<p class="os-tip">Alternatively, use the <code>Space</code> button on the keyboard.</p>
</div>
</div>

</div>
</div>
</section>

<section class="os-section" id="wireframe-shading-colour-and-transparency">
<div class="os-section-head">
<div class="label">Visualisation style</div>
<h2 id="wireframe-shading-colour-and-transparency-heading">Wireframe, Shading, Colour and Transparency</h2>
<p>These controls change the appearance of selected objects in the visualiser.</p>
</div>
<div class="os-section-body">
<div class="os-control-list two-column">

<div class="os-control">
<img src="https://OptimalSlope.github.io/manual/assets/control-icons/panorama-fisheye-custom.png" alt="Display selected as wireframe">
<div>
<div class="control-title">Display Selected as Wireframe</div>
<p>Displays the selected object as wireframe geometry.</p>
</div>
</div>

<div class="os-control">
<img src="https://OptimalSlope.github.io/manual/assets/control-icons/circle-custom.png" alt="Display selected with shading">
<div>
<div class="control-title">Display Selected with Shading</div>
<p>Displays the selected object with shaded solid geometry.</p>
</div>
</div>

<div class="os-control">
<img src="https://OptimalSlope.github.io/manual/assets/control-icons/palette-custom.png" alt="Change colour">
<div>
<div class="control-title">Change Colour</div>
<p>Changes the display colour of the selected object.</p>
</div>
</div>

<div class="os-control">
<img src="https://OptimalSlope.github.io/manual/assets/control-icons/texture-box-custom.png" alt="Change transparency">
<div>
<div class="control-title">Change Transparency</div>
<p>Adjusts the transparency of the selected object.</p>
</div>
</div>

<div class="os-control">
<img src="https://OptimalSlope.github.io/manual/assets/control-icons/eye-off-custom.png" alt="Hide selected shape">
<div>
<div class="control-title">Hide Selected Shape</div>
<p>Hides the selected shape on the visualiser.</p>
</div>
</div>

<div class="os-control">
<img src="https://OptimalSlope.github.io/manual/assets/control-icons/delete-custom.png" alt="Delete selected item">
<div>
<div class="control-title">Delete Selected Item</div>
<p>Deletes the selected item from the project.</p>
</div>
</div>

</div>

<p class="os-tip">Use transparency together with wireframe display when checking internal stratigraphy, overlapping geometry, fault surfaces, or trimmed cross-section boundaries.</p>

</div>
</section>

</div>
