---
title: Data Preparation
author: Dainius Jenkus
date: 2010-06-30
category: Data
layout: post
---

<style>
.os-data-page {
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

.os-data-page * {
  box-sizing: border-box;
}

.os-data-hero {
  position: relative;
  overflow: hidden;
  margin: 0 0 26px;
  padding: 38px;
  border-radius: 28px;
  background:
    radial-gradient(circle at 88% 10%, rgba(241, 107, 33, 0.30), transparent 30%),
    linear-gradient(135deg, #062f50, var(--blue), var(--blue2));
  color: white;
  box-shadow: var(--shadow2);
}

.os-data-hero::after {
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

.os-data-hero .kicker,
.os-data-hero h1,
.os-data-hero p {
  position: relative;
  z-index: 1;
}

.os-data-hero .kicker {
  color: #ffd9c4;
  font-size: 12px;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.os-data-hero h1 {
  margin: 10px 0 12px;
  color: white;
  font-size: clamp(38px, 5vw, 64px);
  line-height: 0.98;
  letter-spacing: -0.055em;
}

.os-data-hero p {
  max-width: 840px;
  margin: 0;
  color: rgba(255, 255, 255, 0.86);
  font-size: 18px;
  line-height: 1.5;
}

.os-data-nav {
  display: grid;
  grid-template-columns: repeat(5, minmax(150px, 1fr));
  gap: 14px;
  margin: 0 0 30px;
}

.os-data-nav a {
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

.os-data-nav a:hover {
  transform: translateY(-3px);
  border-color: rgba(241, 107, 33, 0.36);
  box-shadow: 0 18px 42px rgba(20, 35, 50, 0.14);
  text-decoration: none;
}

.os-data-nav .icon {
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

.os-data-nav strong {
  display: block;
  margin-bottom: 6px;
  color: var(--blue);
  font-size: 17px;
}

.os-data-nav span {
  display: block;
  color: var(--muted);
  font-size: 14px;
  line-height: 1.4;
}

.os-data-section {
  margin: 32px 0;
  border: 1px solid var(--line);
  border-radius: 26px;
  background: white;
  box-shadow: var(--shadow);
  overflow: hidden;
}

.os-data-section-head {
  padding: 24px 28px 18px;
  border-bottom: 1px solid rgba(20, 35, 50, 0.08);
  background:
    radial-gradient(circle at 96% 0%, rgba(241, 107, 33, 0.12), transparent 28%),
    radial-gradient(circle at 0% 0%, rgba(10, 78, 118, 0.11), transparent 34%),
    linear-gradient(180deg, #ffffff, #f6fafc);
}

.os-data-section-head .label {
  color: var(--orange);
  font-weight: 1000;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-size: 12px;
}

.os-data-section-head h2 {
  margin: 8px 0 8px;
  color: var(--ink);
  font-size: clamp(26px, 3vw, 40px);
  line-height: 1.05;
  letter-spacing: -0.04em;
}

.os-data-section-head p {
  margin: 0;
  max-width: 900px;
  color: var(--muted);
  line-height: 1.5;
}

.os-data-section-body {
  padding: 24px 28px 30px;
}

.os-data-page p,
.os-data-page li {
  line-height: 1.58;
}

.os-data-page img {
  max-width: 100%;
  border-radius: 14px;
}

.os-subtitle {
  margin: 24px 0 10px;
  color: var(--blue);
  font-size: 20px;
  font-weight: 900;
}

.os-callout-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(240px, 1fr));
  gap: 14px;
  margin: 18px 0;
}

.os-card {
  padding: 16px 18px;
  border: 1px solid var(--line);
  border-radius: 18px;
  background:
    radial-gradient(circle at 100% 0%, rgba(241, 107, 33, 0.06), transparent 34%),
    linear-gradient(180deg, #ffffff, #f8fbfd);
  box-shadow: 0 8px 22px rgba(20, 35, 50, 0.06);
}

.os-card strong {
  display: block;
  margin-bottom: 7px;
  color: var(--blue);
  font-size: 17px;
}

.os-card p {
  margin: 0;
  color: var(--muted);
}

.os-note,
.os-tip,
.os-warning,
.os-recommendation {
  margin: 18px 0;
  padding: 16px 18px;
  border-radius: 16px;
  line-height: 1.5;
}

.os-note {
  border: 1px solid rgba(10, 78, 118, 0.18);
  background: #eef6fb;
}

.os-tip,
.os-recommendation {
  border: 1px solid rgba(241, 107, 33, 0.28);
  background: #fff7f1;
}

.os-warning {
  border: 1px solid rgba(197, 73, 50, 0.28);
  background: #fff3f0;
}

.os-note strong,
.os-tip strong,
.os-warning strong,
.os-recommendation strong {
  color: var(--blue);
}

.os-checklist {
  display: grid;
  gap: 12px;
  margin: 18px 0;
}

.os-check {
  padding: 15px 17px;
  border: 1px solid var(--line);
  border-radius: 16px;
  background: linear-gradient(180deg, #ffffff, #f8fbfd);
  box-shadow: 0 8px 22px rgba(20, 35, 50, 0.05);
}

.os-check strong {
  display: block;
  color: var(--blue);
  margin-bottom: 5px;
}

.os-include-frame {
  margin: 20px 0;
  padding: 14px;
  border: 1px solid var(--line);
  border-radius: 18px;
  background: #f8fbfd;
  box-shadow: 0 8px 22px rgba(20, 35, 50, 0.06);
}

.os-pill-row {
  display: flex;
  flex-wrap: wrap;
  gap: 9px;
  margin: 16px 0;
}

.os-pill {
  display: inline-flex;
  align-items: center;
  padding: 7px 11px;
  border-radius: 999px;
  background: #eef6fb;
  border: 1px solid rgba(10, 78, 118, 0.12);
  color: var(--blue);
  font-weight: 900;
  font-size: 14px;
}

.os-data-page code {
  color: var(--blue);
  background: #eef6fb;
  border: 1px solid rgba(10, 78, 118, 0.12);
  border-radius: 6px;
  padding: 1px 6px;
}


.os-data-section h2[id] {
  scroll-margin-top: 90px;
}

@media (max-width: 1100px) {
  .os-data-nav {
    grid-template-columns: repeat(3, minmax(170px, 1fr));
  }
}

@media (max-width: 850px) {
  .os-data-nav,
  .os-callout-grid {
    grid-template-columns: repeat(2, minmax(180px, 1fr));
  }
}

@media (max-width: 650px) {
  .os-data-hero {
    padding: 28px;
  }

  .os-data-nav,
  .os-callout-grid {
    grid-template-columns: 1fr;
  }

  .os-data-section-body {
    padding: 20px;
  }
}
</style>

<div class="os-data-page" markdown="1">

<section class="os-data-hero" markdown="0">
<div class="kicker">Input quality and geometry checks</div>
<h1>Data Preparation</h1>
<p>Prepare 3D stratigraphy and section data for reliable cross-section generation, material assignment, and simulation results in OptimalSlope.</p>
</section>

<div class="os-data-nav" markdown="0">
<a href="#preparing-model-files">
<span class="icon">1</span>
<strong>Model Files</strong>
<span>Understand why clean input data is important for simulation quality.</span>
</a>

<a href="#exporting-dxf-from-leapfrog">
<span class="icon">2</span>
<strong>Leapfrog DXF</strong>
<span>Use Polyface DXF export where possible for connected mesh geometry.</span>
</a>

<a href="#stratighraphy-preparation">
<span class="icon">3</span>
<strong>Stratigraphy</strong>
<span>Check closed meshes, gaps, tolerance settings, and model complexity.</span>
</a>

<a href="#section-preparation">
<span class="icon">4</span>
<strong>Sections</strong>
<span>Inspect wires for continuity, voids, overlaps, duplicates, and ordering.</span>
</a>

<a href="#model-organisation">
<span class="icon">5</span>
<strong>Organisation</strong>
<span>Use clear layer names and colours to keep model components manageable.</span>
</a>
</div>

<section class="os-data-section" id="preparing-model-files" markdown="1">
<div class="os-data-section-head" markdown="0">
<div class="label">Input data quality</div>
<h2 id="preparing-model-files">Preparing Model Files</h2>
<p>Good simulation results depend on clean, consistent 3D stratigraphy and section geometry.</p>
</div>
<div class="os-data-section-body" markdown="1">

The quality of simulation results is highly correlated to the quality of the provided 3D stratigraphy or section data. Ensuring that the models are topologically and geometrically consistent and correct allows OptimalSlope to make more accurate estimations during simulation.

<div class="os-callout-grid" markdown="0">
<div class="os-card">
<strong>Topology matters</strong>
<p>Closed, connected, and well-ordered geometry reduces the risk of gaps, overlaps, and invalid section wires.</p>
</div>

<div class="os-card">
<strong>Geometry matters</strong>
<p>Clean surfaces and sensible tolerances improve slicing, material assignment, and interpretation of simulation results.</p>
</div>
</div>

<div class="os-recommendation" markdown="1">
<strong>Recommendation</strong><br>
Before running simulations, visually inspect both the 3D model and any generated or imported sections. Repair significant gaps, overlaps, missing layers, and non-manifold geometry before proceeding.
</div>

</div>
</section>

<section class="os-data-section" id="exporting-dxf-from-leapfrog" markdown="1">
<div class="os-data-section-head" markdown="0">
<div class="label">Leapfrog export</div>
<h2 id="exporting-dxf-from-leapfrog">Exporting DXF from Leapfrog</h2>
<p>Use the most reliable DXF export option to preserve mesh connectivity for downstream processing.</p>
</div>
<div class="os-data-section-body" markdown="1">

<div class="os-subtitle">DXF Export Recommendation</div>

When exporting 3D meshes or model surfaces from Leapfrog, always use Polyfaces by selecting:

<div class="os-note" markdown="1">
<strong>Recommended option</strong><br>
`DXF Polyface Files (11/12 [AC1009]) (.dxf)`
</div>

This option exports geometry as a connected polyface mesh, preserving mesh connectivity and providing the most reliable results for downstream processing and cross-section generation. Using polyfaces minimises the need for post-processing and is the recommended export method.

<div class="os-subtitle">Note on Using 3D Faces</div>

DXF files exported using 3D Faces via:

<div class="os-warning" markdown="1">
<strong>Supported but less preferred option</strong><br>
`DXF Files (11/12 [AC1009]) (.dxf)`
</div>

are currently supported. However, this export method represents geometry as individual, unconnected faces, which requires additional processing before the data can be reliably used for cross-section generation.

Due to additional processing overhead and cleaner geometry requirements, exporting DXF files as Polyfaces is strongly recommended whenever possible.

</div>
</section>

<section class="os-data-section" id="stratighraphy-preparation" markdown="1">
<div class="os-data-section-head" markdown="0">
<div class="label">3D stratigraphy</div>
<h2 id="stratighraphy-preparation">Stratighraphy Preparation</h2>
<p>Prepare high-quality 3D DXF models for cross-section generation without gaps, overlaps, or invalid mesh geometry.</p>
</div>
<div class="os-data-section-body" markdown="1">

The following tips and examples can be used to prepare high-quality 3D DXF models for cross-section generation.

<div class="os-subtitle">Model Integrity and Clean Geometry</div>

<div class="os-checklist" markdown="0">
<div class="os-check">
<strong>Gaps in 3D models</strong>
<span>Models should form closed meshes. Shared layer boundaries should be closely aligned and joined without gaps.</span>
</div>

<div class="os-check">
<strong>Closed meshes</strong>
<span>Each 3D object should be a closed manifold mesh. Every edge should be shared by exactly two adjacent faces.</span>
</div>
</div>

Gaps between boundaries that are intended to connect can create holes or discontinuities. These issues can compromise the structural consistency and visual coherence of the model. Proper modelling practices, verification, and quality-control tools help maintain robust, gap-free meshes.

<div class="os-include-frame" markdown="1">
{% include open_solids.drawio.html %}
</div>

The example above shows an open solid, which should be fixed to avoid disruptions and open wires when generating sections.

<div class="os-subtitle">Precision and Tolerance Settings</div>

<div class="os-checklist" markdown="0">
<div class="os-check">
<strong>Tolerance settings</strong>
<span>Use a reasonable tolerance, typically around 0.001-0.01 mm, to avoid tiny gaps that can lead to misalignments.</span>
</div>

<div class="os-check">
<strong>Export precision</strong>
<span>Set high precision for curves and surfaces during DXF export to retain detail and reduce approximation errors.</span>
</div>
</div>

Precision settings should be selected according to the complexity and size of the model. Highly complex models should either be simplified, for example by reducing the mesh, or sections should be imported directly into the project.

<div class="os-subtitle">Simplified Geometry for Complex Models</div>

<div class="os-checklist" markdown="0">
<div class="os-check">
<strong>Avoid excessive complexity</strong>
<span>Highly detailed or overly complex models can be problematic during cross-section generation using the slicing tool.</span>
</div>

<div class="os-check">
<strong>Limit model size</strong>
<span>Very large 3D model files, especially files over 1 GB, can cause performance issues, long processing times, and sharing difficulties.</span>
</div>
</div>

Use simplifications where possible without compromising the required geological or engineering detail.

</div>
</section>

<section class="os-data-section" id="section-preparation" markdown="1">
<div class="os-data-section-head" markdown="0">
<div class="label">Section quality</div>
<h2 id="section-preparation">Section Preparation</h2>
<p>Good quality section wires are essential for accurate and reliable simulations.</p>
</div>
<div class="os-data-section-body" markdown="1">

Good quality section wires are essential inputs for simulations. Section wires can either be imported directly from external software or generated using the in-house slicing tool. A thorough visual inspection of selected section wires or surfaces is important before proceeding with more complex and time-intensive simulations.

<div class="os-subtitle">Section Geometry Checklist</div>

<div class="os-checklist" markdown="0">
<div class="os-check">
<strong>Wire continuity</strong>
<span>Ensure that all edges are connected to avoid gaps within wires.</span>
</div>

<div class="os-check">
<strong>Voids or missing layers</strong>
<span>Ensure that adjacent layers are well aligned and that shared boundaries are joined without creating undesirable voids between layers.</span>
</div>

<div class="os-check">
<strong>Overlapping layers</strong>
<span>Ensure that sections used for simulations do not have layers that overlap each other.</span>
</div>

<div class="os-check">
<strong>Duplicate vertices or edges</strong>
<span>Remove duplicate vertices or edges that may cause self-intersecting surfaces or invalid wires.</span>
</div>

<div class="os-check">
<strong>Sequential edge ordering</strong>
<span>Out-of-order edges or vertex points can lead to inaccurate shape representations in local 2D coordinates.</span>
</div>
</div>

Small voids may be acceptable, but large voids create undefined space between layers. Undefined regions cannot be assigned to a specific material during the simulation and can affect the final result.

<div class="os-include-frame" markdown="1">
{% include voids.drawio.html %}
</div>

The example above shows missing layers, which introduce incomplete section regions by creating voids.

<div class="os-include-frame" markdown="1">
{% include overlapping.drawio.html %}
</div>

The example above shows layer overlapping introduced due to coarse-grained mesh precision.

<div class="os-subtitle">Advice on Sections Imported from Third-Party Software</div>

When generating cross-sections using tools such as Leapfrog, AutoCAD, Rhino, or other reputable CAD software, the likelihood of poor-quality sections is reduced if the 3D model itself follows high-quality standards.

The reliability of imported sections depends on the initial 3D model quality. A well-constructed model with properly aligned vertices, closed and manifold surfaces, and consistent geometry helps avoid gaps, overlaps, and distorted profiles in generated sections.

<div class="os-tip" markdown="1">
<strong>Best practice</strong><br>
Maintain strict quality control over the 3D model before generating sections. Clean source geometry usually leads to cleaner and more accurate cross-sections.
</div>

</div>
</section>

<section class="os-data-section" id="model-organisation" markdown="1">
<div class="os-data-section-head" markdown="0">
<div class="label">Layer management</div>
<h2 id="model-organisation">Model Organisation</h2>
<p>Use clear layer names and colours so model components can be managed and inspected efficiently.</p>
</div>
<div class="os-data-section-body" markdown="1">

Use layers and set their names when generating DXF files to separate different model components or regions. This makes it easier to control visibility and extract sections accurately.

<div class="os-pill-row" markdown="0">
<span class="os-pill">Descriptive layer names</span>
<span class="os-pill">Consistent colours</span>
<span class="os-pill">Separate model regions</span>
<span class="os-pill">Clear visibility control</span>
</div>

Name layers descriptively to make model elements easier to manage during cross-section extraction.

<div class="os-recommendation" markdown="1">
<strong>Recommendation</strong><br>
Define names and colours of layers in the modelling software before exporting DXF files. This reduces manual clean-up in OptimalSlope and improves traceability during section generation.
</div>

</div>
</section>

</div>
