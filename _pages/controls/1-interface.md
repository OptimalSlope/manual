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
}

.os-controls-page * {
  box-sizing: border-box;
}

.os-hero {
  position: relative;
  overflow: hidden;
  margin: 0 0 24px;
  padding: 34px;
  border-radius: 26px;
  background:
    radial-gradient(circle at 90% 10%, rgba(241,107,33,0.36), transparent 28%),
    linear-gradient(135deg, #062f50, var(--blue), var(--blue2));
  color: white;
  box-shadow: var(--shadow);
}

.os-hero::after {
  content: "Controls";
  position: absolute;
  right: -10px;
  top: 50%;
  transform: translateY(-50%) rotate(-6deg);
  font-size: 120px;
  font-weight: 900;
  color: rgba(255,255,255,0.10);
  pointer-events: none;
}

.os-hero h2 {
  position: relative;
  margin: 8px 0 10px;
  color: white;
  font-size: 44px;
  line-height: 1;
}

.os-hero p {
  position: relative;
  max-width: 760px;
  margin: 0;
  color: rgba(255,255,255,0.86);
  font-size: 17px;
  line-height: 1.5;
}

.os-kicker {
  position: relative;
  color: #ffd9c4;
  font-size: 12px;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.os-nav {
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

.os-nav a {
  padding: 8px 14px;
  border-radius: 999px;
  color: var(--blue);
  text-decoration: none;
  font-weight: 900;
}

.os-nav a:hover {
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
  background: linear-gradient(180deg, #fff, #f7fafc);
  box-shadow: var(--shadow);
}

.os-summary-card b {
  display: block;
  margin-bottom: 6px;
  color: var(--blue);
  font-size: 17px;
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
}

.os-section-head p {
  margin: 0;
  color: var(--muted);
  line-height: 1.45;
}

.os-section-body {
  padding: 22px 26px 26px;
}

.os-control {
  display: grid;
  grid-template-columns: 58px 1fr;
  gap: 15px;
  margin: 0 0 12px;
  padding: 15px;
  border: 1px solid var(--line);
  border-radius: 18px;
  background: linear-gradient(180deg, #fff, #f8fbfd);
}

.os-control img {
  max-width: 34px;
  max-height: 34px;
  padding: 8px;
  border-radius: 13px;
  background: #eef6fb;
}

.os-control h3 {
  margin: 0 0 5px;
  color: var(--blue);
  font-size: 18px;
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
  font-size: 14px;
}

@media (max-width: 800px) {
  .os-summary {
    grid-template-columns: 1fr;
  }

  .os-control {
    grid-template-columns: 1fr;
  }
}
</style>

<div class="os-controls-page" markdown="0">

<section class="os-hero">
<div class="os-kicker">Interface guide</div>
<h2>Visualisation Controls</h2>
<p>Use the visualisation controls to navigate the model, change the viewing direction, adjust object display styles, and manage selected slices or 3D models in the project.</p>
</section>

<nav class="os-nav">
<a href="#delete-hide-items">Delete / Hide</a>
<a href="#visualisation-position">Position</a>
<a href="#visualisation-style">Style</a>
</nav>

<div class="os-summary">
<div class="os-summary-card">
<b>Manage Items</b>
<p>Hide selected shapes from the visualiser or delete selected items from the project.</p>
</div>
<div class="os-summary-card">
<b>Control Position</b>
<p>Fit, zoom, pan, rotate, or flip the model to a standard viewing direction.</p>
</div>
<div class="os-summary-card">
<b>Change Style</b>
<p>Display selected objects as wireframe or shaded geometry, and adjust colour or transparency.</p>
</div>
</div>

<section class="os-section" id="delete-hide-items">
<div class="os-section-head">
<div class="label">Delete / hide items</div>
<h2>Slices and 3D Models</h2>
<p>These controls are used to hide selected shapes on the visualiser or delete selected items from the project.</p>
</div>
<div class="os-section-body">

<div class="os-control">
<img src="https://OptimalSlope.github.io/manual/assets/control-icons/eye-off-custom.png" alt="Hide selected shape">
<div>
<h3>Hide Selected Shape</h3>
<p>Hides the selected shape on the visualiser without deleting it from the project.</p>
</div>
</div>

<div class="os-control">
<img src="https://OptimalSlope.github.io/manual/assets/control-icons/delete-custom.png" alt="Delete selected item">
<div>
<h3>Delete Selected Item</h3>
<p>Deletes the selected item from the project.</p>
<p class="os-tip">Use this carefully. Deleting an item removes it from the project structure.</p>
</div>
</div>

</div>
</section>

<section class="os-section" id="visualisation-position">
<div class="os-section-head">
<div class="label">Visualisation position</div>
<h2>Fit, Zoom, Pan, Flip and Rotate</h2>
<p>These controls are used to move around the visualiser and change the view direction.</p>
</div>
<div class="os-section-body">

<div class="os-control">
<img src="https://OptimalSlope.github.io/manual/assets/control-icons/fit-to-screen.png" alt="Fit visualiser content to screen">
<div>
<h3>Fit Visualiser Content to Screen</h3>
<p>Fits the visualiser content to the available screen area.</p>
</div>
</div>

<div class="os-control">
<img src="https://OptimalSlope.github.io/manual/assets/control-icons/loupe-custom.png" alt="Dynamic zooming">
<div>
<h3>Dynamic Zooming</h3>
<p>Press the left mouse button, then move the pointer left or right to zoom in or out.</p>
<p class="os-tip">Alternatively, use the <code>Ctrl</code> button on the keyboard.</p>
</div>
</div>

<div class="os-control">
<img src="https://OptimalSlope.github.io/manual/assets/control-icons/pan-custom.png" alt="Dynamic panning">
<div>
<h3>Dynamic Panning</h3>
<p>Press the left mouse button, then move the pointer to pan around the visualiser.</p>
<p class="os-tip">Alternatively, use the middle mouse button.</p>
</div>
</div>

<div class="os-control">
<img src="https://OptimalSlope.github.io/manual/assets/control-icons/flip-to-front-custom.png" alt="Flip shape to front">
<div>
<h3>Flip Shape to Front</h3>
<p>Changes the visualiser to the front viewing direction.</p>
</div>
</div>

<div class="os-control">
<img src="https://OptimalSlope.github.io/manual/assets/control-icons/flip-to-back-custom.png" alt="Flip shape to back">
<div>
<h3>Flip Shape to Back</h3>
<p>Changes the visualiser to the back viewing direction.</p>
</div>
</div>

<div class="os-control">
<img src="https://OptimalSlope.github.io/manual/assets/control-icons/border-top-variant-custom.png" alt="Flip shape to top">
<div>
<h3>Flip Shape to Top</h3>
<p>Changes the visualiser to the top viewing direction.</p>
</div>
</div>

<div class="os-control">
<img src="https://OptimalSlope.github.io/manual/assets/control-icons/border-bottom-variant-custom.png" alt="Flip shape to bottom">
<div>
<h3>Flip Shape to Bottom</h3>
<p>Changes the visualiser to the bottom viewing direction.</p>
</div>
</div>

<div class="os-control">
<img src="https://OptimalSlope.github.io/manual/assets/control-icons/border-left-variant-custom.png" alt="Flip shape to left">
<div>
<h3>Flip Shape to Left</h3>
<p>Changes the visualiser to the left viewing direction.</p>
</div>
</div>

<div class="os-control">
<img src="https://OptimalSlope.github.io/manual/assets/control-icons/border-right-variant-custom.png" alt="Flip shape to right">
<div>
<h3>Flip Shape to Right</h3>
<p>Changes the visualiser to the right viewing direction.</p>
</div>
</div>

<div class="os-control">
<img src="https://OptimalSlope.github.io/manual/assets/control-icons/rotate-360-custom.png" alt="Dynamic rotation">
<div>
<h3>Dynamic Rotation</h3>
<p>Press the left mouse button, then move the pointer to rotate the view.</p>
<p class="os-tip">Alternatively, use the <code>Space</code> button on the keyboard.</p>
</div>
</div>

</div>
</section>

<section class="os-section" id="visualisation-style">
<div class="os-section-head">
<div class="label">Visualisation style</div>
<h2>Wireframe, Shading, Colour and Transparency</h2>
<p>These controls change the appearance of selected objects in the visualiser.</p>
</div>
<div class="os-section-body">

<div class="os-control">
<img src="https://OptimalSlope.github.io/manual/assets/control-icons/panorama-fisheye-custom.png" alt="Display selected as wireframe">
<div>
<h3>Display Selected as Wireframe</h3>
<p>Displays the selected object as wireframe geometry.</p>
</div>
</div>

<div class="os-control">
<img src="https://OptimalSlope.github.io/manual/assets/control-icons/circle-custom.png" alt="Display selected with shading">
<div>
<h3>Display Selected with Shading</h3>
<p>Displays the selected object with shaded solid geometry.</p>
</div>
</div>

<div class="os-control">
<img src="https://OptimalSlope.github.io/manual/assets/control-icons/palette-custom.png" alt="Change colour">
<div>
<h3>Change Colour</h3>
<p>Changes the display colour of the selected object.</p>
</div>
</div>

<div class="os-control">
<img src="https://OptimalSlope.github.io/manual/assets/control-icons/texture-box-custom.png" alt="Change transparency">
<div>
<h3>Change Transparency</h3>
<p>Adjusts the transparency of the selected object.</p>
</div>
</div>

<div class="os-control">
<img src="https://OptimalSlope.github.io/manual/assets/control-icons/eye-off-custom.png" alt="Hide selected shape">
<div>
<h3>Hide Selected Shape</h3>
<p>Hides the selected shape on the visualiser.</p>
</div>
</div>

<div class="os-control">
<img src="https://OptimalSlope.github.io/manual/assets/control-icons/delete-custom.png" alt="Delete selected item">
<div>
<h3>Delete Selected Item</h3>
<p>Deletes the selected item from the project.</p>
</div>
</div>

<p class="os-tip">Use transparency together with wireframe display when checking internal stratigraphy, overlapping geometry, fault surfaces, or trimmed cross-section boundaries.</p>

</div>
</section>

</div>

