---
title: Glossary
author: Dainius Jenkus
date: 2010-06-30
category: Reference
layout: post
permalink: /pages/glossary/
---


<style>
.os-guide-page {
  --blue: #0a4e76;
  --blue2: #0f6e9f;
  --orange: #f16b21;
  --ink: #14202b;
  --muted: #617180;
  --line: rgba(20, 35, 50, 0.12);
  --shadow: 0 14px 34px rgba(20, 35, 50, 0.10);
  --shadow2: 0 22px 58px rgba(10, 78, 118, 0.18);
}

.os-guide-page * {
  box-sizing: border-box;
}

.os-guide-hero {
  position: relative;
  overflow: hidden;
  margin: 0 0 26px;
  padding: 38px;
  border-radius: 28px;
  background:
    radial-gradient(circle at 88% 10%, rgba(241, 107, 33, 0.34), transparent 30%),
    linear-gradient(135deg, #062f50, var(--blue), var(--blue2));
  color: white;
  box-shadow: var(--shadow2);
}

.os-guide-hero::after {
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
}

.os-guide-hero .kicker,
.os-guide-hero h1,
.os-guide-hero p {
  position: relative;
  z-index: 1;
}

.os-guide-hero .kicker {
  color: #ffd9c4;
  font-size: 12px;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.os-guide-hero h1 {
  margin: 10px 0 12px;
  color: white;
  font-size: clamp(38px, 5vw, 64px);
  line-height: 0.98;
  letter-spacing: -0.055em;
}

.os-guide-hero p {
  max-width: 860px;
  margin: 0;
  color: rgba(255, 255, 255, 0.86);
  font-size: 18px;
  line-height: 1.5;
}

.os-guide-nav {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
  gap: 14px;
  margin: 0 0 30px;
}

.os-guide-nav a {
  display: block;
  padding: 18px;
  border: 1px solid var(--line);
  border-radius: 20px;
  background:
    radial-gradient(circle at 100% 0%, rgba(241, 107, 33, 0.09), transparent 35%),
    linear-gradient(180deg, #ffffff, #f7fafc);
  color: var(--ink);
  text-decoration: none;
  box-shadow: var(--shadow);
  transition: transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease;
}

.os-guide-nav a:hover {
  transform: translateY(-3px);
  border-color: rgba(241, 107, 33, 0.36);
  box-shadow: 0 18px 42px rgba(20, 35, 50, 0.14);
  text-decoration: none;
}

.os-guide-nav .icon {
  display: inline-grid;
  place-items: center;
  width: 34px;
  height: 34px;
  margin-bottom: 10px;
  border-radius: 12px;
  background: linear-gradient(135deg, var(--blue), var(--blue2));
  color: white;
  font-weight: 1000;
}

.os-guide-nav strong {
  display: block;
  margin-bottom: 6px;
  color: var(--blue);
  font-size: 17px;
}

.os-guide-nav span {
  display: block;
  color: var(--muted);
  font-size: 14px;
  line-height: 1.4;
}

.os-guide-section {
  margin: 30px 0;
  border: 1px solid var(--line);
  border-radius: 24px;
  background: white;
  box-shadow: var(--shadow);
  overflow: hidden;
}

.os-guide-section-head {
  padding: 22px 26px 16px;
  border-bottom: 1px solid rgba(20, 35, 50, 0.08);
  background:
    radial-gradient(circle at 96% 0%, rgba(241, 107, 33, 0.12), transparent 28%),
    radial-gradient(circle at 0% 0%, rgba(10, 78, 118, 0.11), transparent 34%),
    linear-gradient(180deg, #ffffff, #f6fafc);
}

.os-guide-section-head .label {
  color: var(--orange);
  font-weight: 1000;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-size: 12px;
}

.os-guide-section-head h2 {
  margin: 8px 0 8px;
  color: var(--ink);
  font-size: clamp(25px, 3vw, 38px);
  line-height: 1.05;
  letter-spacing: -0.04em;
}

.os-guide-section-head p {
  margin: 0;
  color: var(--muted);
  line-height: 1.5;
}

.os-guide-section-body {
  padding: 22px 26px 28px;
}

.os-guide-page h3,
.os-guide-page h4 {
  color: var(--blue);
}

.os-guide-page ul,
.os-guide-page ol {
  line-height: 1.55;
}

.os-note,
.os-warning,
.os-tip {
  margin: 18px 0;
  padding: 16px 18px;
  border-radius: 16px;
  line-height: 1.5;
}

.os-note {
  border: 1px solid rgba(10, 78, 118, 0.18);
  background: #eef6fb;
}

.os-warning {
  border: 1px solid rgba(197, 73, 50, 0.28);
  background: #fff3f0;
}

.os-tip {
  border: 1px solid rgba(241, 107, 33, 0.28);
  background: #fff7f1;
}

.os-note strong,
.os-warning strong,
.os-tip strong {
  color: var(--blue);
}

.os-link-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  gap: 12px;
  margin: 18px 0;
}

.os-link-card {
  display: block;
  padding: 15px 16px;
  border: 1px solid var(--line);
  border-radius: 16px;
  background: linear-gradient(180deg, #ffffff, #f8fbfd);
  color: var(--ink);
  text-decoration: none;
}

.os-link-card:hover {
  text-decoration: none;
  border-color: rgba(241, 107, 33, 0.36);
  transform: translateY(-2px);
}

.os-link-card strong {
  display: block;
  color: var(--blue);
  margin-bottom: 4px;
}

.os-link-card span {
  display: block;
  color: var(--muted);
  font-size: 14px;
  line-height: 1.4;
}

.os-glossary-term {
  margin: 18px 0;
  padding: 16px 18px;
  border: 1px solid var(--line);
  border-radius: 16px;
  background: linear-gradient(180deg, #ffffff, #f8fbfd);
}

.os-glossary-term h3 {
  margin-top: 0;
}

@media (max-width: 650px) {
  .os-guide-hero {
    padding: 28px;
  }

  .os-guide-section-body {
    padding: 20px;
  }
}
</style>


<div class="os-guide-page" markdown="1">

<section class="os-guide-hero" markdown="0">
<div class="kicker">Reference</div>
<h1>Glossary</h1>
<p>Definitions of common OptimalSlope, slope design, and simulation terms used throughout the manual.</p>
</section>

<div class="os-guide-nav" markdown="0">
<a href="#geometry"><span class="icon">1</span><strong>Geometry</strong><span>Section, crest, toe, benches, berms and slope profiles.</span></a>
<a href="#simulation"><span class="icon">2</span><strong>Simulation</strong><span>FoS, optimisation, OSA, result profiles and warnings.</span></a>
<a href="#data"><span class="icon">3</span><strong>Data</strong><span>DXF, stratigraphy, block models and downstream exports.</span></a>
</div>

<section class="os-guide-section" id="geometry" markdown="1">
<div class="os-guide-section-head" markdown="0">
<div class="label">Geometry</div>
<h2 id="geometry">Geometry terms</h2>
<p>Terms related to imported sections, slope shape, and design geometry.</p>
</div>
<div class="os-guide-section-body" markdown="1">

<div class="os-glossary-term" markdown="1">
<h3>Crest point</h3>
The upper starting location of the slope profile. Its position affects the OSA search region and the generated slope geometry.
</div>

<div class="os-glossary-term" markdown="1">
<h3>Toe</h3>
The lower end of the slope profile where the slope meets the lower ground or design boundary.
</div>

<div class="os-glossary-term" markdown="1">
<h3>Bench</h3>
A stepped part of the slope geometry, usually defined by bench height, bench face angle, berm width, and number of benches.
</div>

<div class="os-glossary-term" markdown="1">
<h3>Berm</h3>
The horizontal or near-horizontal platform between bench faces.
</div>

<div class="os-glossary-term" markdown="1">
<h3>Slope profile</h3>
The 2D line or polyline representing the slope geometry being analysed or optimised.
</div>

</div>
</section>

<section class="os-guide-section" id="simulation" markdown="1">
<div class="os-guide-section-head" markdown="0">
<div class="label">Simulation</div>
<h2 id="simulation">Simulation terms</h2>
<p>Terms related to simulation inputs, optimisation, and results.</p>
</div>
<div class="os-guide-section-body" markdown="1">

<div class="os-glossary-term" markdown="1">
<h3>FoS</h3>
Factor of Safety. A measure used in slope stability analysis to compare resisting forces against driving forces.
</div>

<div class="os-glossary-term" markdown="1">
<h3>OSA</h3>
Overall Slope Angle. In OptimalSlope, Min/Max OSA values define the search range used to explore possible slope profiles.
</div>

<div class="os-glossary-term" markdown="1">
<h3>OSA search region</h3>
The triangular region shown in the section preview where the optimiser searches for the optimal slope profile.
</div>

<div class="os-glossary-term" markdown="1">
<h3>Optimized profile</h3>
The slope profile estimated by the optimiser after running the simulation and evaluating candidate geometries.
</div>

<div class="os-glossary-term" markdown="1">
<h3>Failure mechanism</h3>
The potential failure path or mechanism considered during slope stability analysis.
</div>

</div>
</section>

<section class="os-guide-section" id="data" markdown="1">
<div class="os-guide-section-head" markdown="0">
<div class="label">Data and export</div>
<h2 id="data">Data and export terms</h2>
<p>Terms related to input files, geometry models, and downstream workflows.</p>
</div>
<div class="os-guide-section-body" markdown="1">

<div class="os-glossary-term" markdown="1">
<h3>DXF</h3>
A drawing exchange format used to import section geometry, stratigraphy, and exported slope profiles into other engineering tools.
</div>

<div class="os-glossary-term" markdown="1">
<h3>Stratigraphy</h3>
The geological layer model used to define material regions and generate sections.
</div>

<div class="os-glossary-term" markdown="1">
<h3>Block model</h3>
A 3D grid of blocks used to represent material, geometry, or simulation result attributes such as slope angle.
</div>

<div class="os-glossary-term" markdown="1">
<h3>Local XY export</h3>
A DXF export option where the section is flattened onto the XY plane. This is useful for workflows that require 2D geometry, such as RS2.
</div>

<div class="os-glossary-term" markdown="1">
<h3>ADDMOD</h3>
A Datamine function used to combine model data, for example adding OptimalSlope slope-angle output to an existing block model.
</div>

</div>
</section>

</div>
