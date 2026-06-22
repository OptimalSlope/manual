---
layout: home
title: Overview
permalink: /
---

<style>
.os-home-page {
  --blue: #0a4e76;
  --blue2: #0f6e9f;
  --orange: #f16b21;
  --orange2: #ff8a3d;
  --ink: #14202b;
  --muted: #617180;
  --line: rgba(20, 35, 50, 0.12);
  --soft: #f7fafc;
  --shadow: 0 14px 34px rgba(20, 35, 50, 0.10);
  --shadow2: 0 22px 58px rgba(10, 78, 118, 0.18);
}

.os-home-page * {
  box-sizing: border-box;
}

.os-home-hero {
  position: relative;
  overflow: hidden;
  margin: 0 0 28px;
  padding: 42px;
  border-radius: 30px;
  background:
    radial-gradient(circle at 88% 10%, rgba(241, 107, 33, 0.32), transparent 30%),
    linear-gradient(135deg, #062f50, var(--blue), var(--blue2));
  color: white;
  box-shadow: var(--shadow2);
}

.os-home-hero::after {
  content: "OptimalSlope";
  position: absolute;
  right: -34px;
  top: 50%;
  transform: translateY(-50%) rotate(-6deg);
  font-size: clamp(72px, 12vw, 170px);
  font-weight: 1000;
  letter-spacing: -0.06em;
  color: rgba(255, 255, 255, 0.08);
  pointer-events: none;
  white-space: nowrap;
}

.os-home-hero .kicker,
.os-home-hero-title,
.os-home-hero p,
.os-home-actions {
  position: relative;
  z-index: 1;
}

.os-home-hero .kicker {
  color: #ffd9c4;
  font-size: 12px;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.os-home-hero-title {
  margin: 10px 0 12px;
  color: white;
  font-size: clamp(42px, 6vw, 76px);
  font-weight: 900;
  line-height: 0.95;
  letter-spacing: -0.06em;
}

.os-home-hero p {
  max-width: 850px;
  margin: 0;
  color: rgba(255, 255, 255, 0.86);
  font-size: 19px;
  line-height: 1.5;
}

.os-home-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 24px;
}

.os-home-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 42px;
  padding: 10px 16px;
  border-radius: 999px;
  text-decoration: none;
  font-weight: 900;
  transition: transform 180ms ease, box-shadow 180ms ease, background 180ms ease;
}

.os-home-button.primary {
  background: var(--orange);
  color: white;
  box-shadow: 0 10px 24px rgba(241, 107, 33, 0.28);
}

.os-home-button.secondary {
  background: rgba(255, 255, 255, 0.12);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.26);
}

.os-home-button:hover {
  transform: translateY(-2px);
  text-decoration: none;
}

.os-home-logo-card {
  display: grid;
  grid-template-columns: 110px 1fr;
  gap: 18px;
  align-items: center;
  margin: 0 0 28px;
  padding: 20px;
  border: 1px solid var(--line);
  border-radius: 22px;
  background:
    radial-gradient(circle at 100% 0%, rgba(241, 107, 33, 0.08), transparent 34%),
    linear-gradient(180deg, #ffffff, #f7fafc);
  box-shadow: var(--shadow);
}

.os-home-logo-card img {
  width: 96px;
  max-width: 100%;
}

.os-home-logo-card strong {
  display: block;
  margin-bottom: 6px;
  color: var(--blue);
  font-size: 20px;
}

.os-home-logo-card p {
  margin: 0;
  color: var(--muted);
  line-height: 1.5;
}

.os-home-nav {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
  gap: 14px;
  margin: 0 0 30px;
}

.os-home-nav a {
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

.os-home-nav a:hover {
  transform: translateY(-3px);
  border-color: rgba(241, 107, 33, 0.36);
  box-shadow: 0 18px 42px rgba(20, 35, 50, 0.14);
  text-decoration: none;
}

.os-home-nav .icon {
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

.os-home-nav strong {
  display: block;
  margin-bottom: 6px;
  color: var(--blue);
  font-size: 17px;
}

.os-home-nav span {
  display: block;
  color: var(--muted);
  font-size: 14px;
  line-height: 1.4;
}

.os-home-section {
  margin: 32px 0;
  border: 1px solid var(--line);
  border-radius: 26px;
  background: white;
  box-shadow: var(--shadow);
  overflow: hidden;
}

.os-home-section-head {
  padding: 24px 28px 18px;
  border-bottom: 1px solid rgba(20, 35, 50, 0.08);
  background:
    radial-gradient(circle at 96% 0%, rgba(241, 107, 33, 0.12), transparent 28%),
    radial-gradient(circle at 0% 0%, rgba(10, 78, 118, 0.11), transparent 34%),
    linear-gradient(180deg, #ffffff, #f6fafc);
}

.os-home-section-head .label {
  color: var(--orange);
  font-weight: 1000;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-size: 12px;
}

.os-home-section-head h2 {
  margin: 8px 0 8px;
  color: var(--ink);
  font-size: clamp(26px, 3vw, 40px);
  line-height: 1.05;
  letter-spacing: -0.04em;
  scroll-margin-top: 90px;
}

.os-home-section-head p {
  margin: 0;
  max-width: 900px;
  color: var(--muted);
  line-height: 1.5;
}

.os-home-section-body {
  padding: 24px 28px 30px;
}

.os-stage-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(210px, 1fr));
  gap: 14px;
  margin: 18px 0;
}

.os-stage {
  padding: 18px;
  border: 1px solid var(--line);
  border-radius: 18px;
  background: linear-gradient(180deg, #ffffff, #f8fbfd);
  box-shadow: 0 8px 22px rgba(20, 35, 50, 0.06);
}

.os-stage .stage-number {
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

.os-stage strong {
  display: block;
  margin-bottom: 7px;
  color: var(--blue);
  font-size: 17px;
}

.os-stage p {
  margin: 0;
  color: var(--muted);
  line-height: 1.45;
}

.os-feature-panel {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 22px;
  margin: 22px 0 4px;
  padding: 24px;
  overflow: hidden;
  border: 1px solid rgba(10, 78, 118, 0.18);
  border-radius: 22px;
  background:
    radial-gradient(circle at 96% 0%, rgba(241, 107, 33, 0.08), transparent 30%),
    linear-gradient(180deg, #ffffff, #f7fafc);
  box-shadow: 0 12px 30px rgba(20, 35, 50, 0.08);
}

.os-feature-panel::after {
  content: "Workflow";
  position: absolute;
  right: 18px;
  bottom: -10px;
  color: rgba(10, 78, 118, 0.06);
  font-size: 64px;
  font-weight: 1000;
  letter-spacing: -0.06em;
  pointer-events: none;
  z-index: 0;
}

.os-feature-text {
  position: relative;
  z-index: 2;
}

.os-feature-text strong {
  display: block;
  margin-bottom: 6px;
  color: var(--blue);
  font-size: 22px;
  line-height: 1.15;
}

.os-feature-text span {
  display: block;
  max-width: 620px;
  color: var(--muted);
  line-height: 1.45;
}

.os-feature-button {
  position: relative;
  z-index: 2;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 46px;
  padding: 12px 18px;
  border-radius: 999px;
  background: linear-gradient(135deg, #063d5e, var(--blue)) !important;
  color: #ffffff !important;
  text-decoration: none !important;
  font-weight: 1000;
  white-space: nowrap;
  border: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow: 0 10px 22px rgba(6, 47, 80, 0.30);
  transition: transform 180ms ease, box-shadow 180ms ease, background 180ms ease;
}

.os-feature-button::after {
  content: "→";
  margin-left: 8px;
  font-size: 18px;
  line-height: 1;
}

.os-feature-button:hover {
  transform: translateY(-2px);
  background: linear-gradient(135deg, #052f49, #0a4e76) !important;
  box-shadow: 0 14px 30px rgba(6, 47, 80, 0.34);
}

.os-include-frame {
  margin: 20px 0;
  padding: 14px;
  border: 1px solid var(--line);
  border-radius: 18px;
  background: #f8fbfd;
  box-shadow: 0 8px 22px rgba(20, 35, 50, 0.06);
}

.os-home-note {
  margin: 18px 0;
  padding: 16px 18px;
  border: 1px solid rgba(241, 107, 33, 0.28);
  border-radius: 16px;
  background: #fff7f1;
  line-height: 1.5;
}

.os-home-note strong {
  color: var(--blue);
}

@media (max-width: 850px) {
  .os-home-logo-card,
  .os-stage-grid {
    grid-template-columns: 1fr;
  }

  .os-feature-panel {
    align-items: flex-start;
    flex-direction: column;
  }

  .os-feature-button {
    width: 100%;
  }
}

@media (max-width: 650px) {
  .os-home-hero {
    padding: 28px;
  }

  .os-home-section-body {
    padding: 20px;
  }
}
</style>

<div class="os-home-page" markdown="1">

<section class="os-home-hero" markdown="0">
<div class="kicker">Slope Optimiser user manual</div>
<div class="os-home-hero-title">Slope Optimiser Manual</div>
<p>Learn how to prepare data, manage projects, define slope simulation properties, run simulations, and export results from the OptimalSlope CAD interface.</p>
<div class="os-home-actions">
<a class="os-home-button primary" href="https://optimalslope.com/files/OptimalSlope_Latest.zip/">Download OptimalSlope</a>
<a class="os-home-button secondary" href="{{ '/pages/Tutorials/Workflow/' | relative_url }}">Simulation Workflow</a>
<a class="os-home-button secondary" href="{{ '/conference/' | relative_url }}" target="_blank" rel="noopener">60th US Rock Mechanics / Geomechanics Symposium Demo</a>
</div>
</section>

<div class="os-home-logo-card" markdown="0">
<img src="https://optimalslope.com/images/path9338.png" alt="OptimalSlope logo">
<div>
<strong>Slope Optimiser documentation</strong>
<p>This manual explains the main workflows for using the Slope Optimiser CAD graphical interface.</p>
</div>
</div>



<section class="os-home-section" id="introduction" markdown="1">
<div class="os-home-section-head" markdown="0">
<div class="label">Introduction</div>
<h2 id="introduction">Introduction</h2>
<p>OptimalSlope helps evaluate slope geometry, generate simulation inputs, run cloud simulations, and export optimized slope profiles.</p>
</div>
<div class="os-home-section-body" markdown="1">

This is the user manual of the [Slope Optimiser](https://optimalslope.com/files/OptimalSlope_Latest.zip/) CAD graphical interface.

Use the sections below to move through the typical workflow: prepare data, create or import project geometry, define properties, run simulations, review outputs, and export results for downstream analysis.

<div class="os-feature-panel" markdown="0">
<div class="os-feature-text">
<strong>Slope Optimiser Interactive Workflow</strong>
<span>Open the full interactive workflow preview in a new tab.</span>
</div>
<div style="display:flex;gap:10px;flex-wrap:wrap;position:relative;z-index:2;">
<a class="os-feature-button" href="assets/preview_interactive.html" target="_blank" rel="noopener">View workflow</a>
<a class="os-feature-button" href="{{ '/conference/' | relative_url }}" target="_blank" rel="noopener">Conference demo</a>
</div>
</div>

<div class="os-home-note" markdown="1">
<strong>Recommended starting point</strong><br>
Start with the Data Preparation page if you are working with new 3D stratigraphy or imported section files. Clean input geometry improves slicing, material assignment, and simulation reliability.
</div>

</div>
</section>

<div class="os-home-nav" markdown="0">
<a href="pages/Data%20Suitability/7-data/">
<span class="icon">1</span>
<strong>Prepare Data</strong>
<span>Check geometry quality, DXF exports, section wires, gaps, overlaps, and layer organisation.</span>
</a>

<a href="pages/project-management/1-project-management/">
<span class="icon">2</span>
<strong>Manage Projects</strong>
<span>Create, save, import, slice, trim, and export project data.</span>
</a>

<a href="pages/properties/6-properties/">
<span class="icon">3</span>
<strong>Define Properties</strong>
<span>Set bench, rock, section, fault, and water table inputs for simulations.</span>
</a>

<a href="pages/Tutorials/Workflow/">
<span class="icon">4</span>
<strong>Run Workflow</strong>
<span>Follow the simulation workflow from importing sections to exporting results.</span>
</a>

<a href="pages/controls/1-interface/">
<span class="icon">5</span>
<strong>Use Controls</strong>
<span>Navigate the visualiser, change views, adjust object style, and manage selected items.</span>
</a>
</div>

{% comment %}
<section class="os-home-section" id="workflow" markdown="1">
<div class="os-home-section-head" markdown="0">
<div class="label">Typical workflow</div>
<h2 id="workflow">Workflow</h2>
<p>The workflow moves from input data and model preparation to problem definition, simulation, and output generation.</p>
</div>
<div class="os-home-section-body" markdown="1">

<div class="os-stage-grid" markdown="0">
<div class="os-stage">
<span class="stage-number">1</span>
<strong>Input Stage</strong>
<p>Import 3D rock models, section files, and phreatic or boundary surfaces.</p>
</div>

<div class="os-stage">
<span class="stage-number">2</span>
<strong>Problem Definition</strong>
<p>Define properties, generate cross-sections, and check geometry before simulation.</p>
</div>

<div class="os-stage">
<span class="stage-number">3</span>
<strong>Simulation and Output</strong>
<p>Run simulations, review logs and plots, export optimal slope profiles, and generate outputs.</p>
</div>
</div>

<div class="os-include-frame" markdown="1">
{% include workflow-example.html %}
</div>

</div>
</section>
{% endcomment %}

</div>
 