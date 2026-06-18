---
title: Properties
author: Dainius Jenkus
date: 2010-06-30
category: Properties
layout: post
---

<style>
.os-props-page {
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

.os-props-page * {
  box-sizing: border-box;
}

.os-props-hero {
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

.os-props-hero::after {
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

.os-props-hero .kicker,
.os-props-hero-title,
.os-props-hero p {
  position: relative;
  z-index: 1;
}

.os-props-hero .kicker {
  color: #ffd9c4;
  font-size: 12px;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.os-props-hero-title {
  margin: 10px 0 12px;
  color: white;
  font-size: clamp(38px, 5vw, 64px);
  font-weight: 900;
  line-height: 0.98;
  letter-spacing: -0.055em;
}

.os-props-hero p {
  max-width: 840px;
  margin: 0;
  color: rgba(255, 255, 255, 0.86);
  font-size: 18px;
  line-height: 1.5;
}

.os-props-nav {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
  gap: 14px;
  margin: 0 0 30px;
}

.os-props-nav a {
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

.os-props-nav a:hover {
  transform: translateY(-3px);
  border-color: rgba(241, 107, 33, 0.36);
  box-shadow: 0 18px 42px rgba(20, 35, 50, 0.14);
  text-decoration: none;
}

.os-props-nav .icon {
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

.os-props-nav strong {
  display: block;
  margin-bottom: 6px;
  color: var(--blue);
  font-size: 17px;
}

.os-props-nav span {
  display: block;
  color: var(--muted);
  font-size: 14px;
  line-height: 1.4;
}

.os-props-section {
  margin: 32px 0;
  border: 1px solid var(--line);
  border-radius: 26px;
  background: white;
  box-shadow: var(--shadow);
  overflow: hidden;
}

.os-props-section-head {
  padding: 24px 28px 18px;
  border-bottom: 1px solid rgba(20, 35, 50, 0.08);
  background:
    radial-gradient(circle at 96% 0%, rgba(241, 107, 33, 0.12), transparent 28%),
    radial-gradient(circle at 0% 0%, rgba(10, 78, 118, 0.11), transparent 34%),
    linear-gradient(180deg, #ffffff, #f6fafc);
}

.os-props-section-head .label {
  color: var(--orange);
  font-weight: 1000;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-size: 12px;
}

.os-props-section-head h2 {
  margin: 8px 0 8px;
  color: var(--ink);
  font-size: clamp(26px, 3vw, 40px);
  line-height: 1.05;
  letter-spacing: -0.04em;
  scroll-margin-top: 90px;
}

.os-props-section-head p {
  margin: 0;
  max-width: 900px;
  color: var(--muted);
  line-height: 1.5;
}

.os-props-section-body {
  padding: 24px 28px 30px;
}

.os-props-page p,
.os-props-page li {
  line-height: 1.58;
}

.os-subtitle {
  margin: 24px 0 10px;
  color: var(--blue);
  font-size: 20px;
  font-weight: 900;
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

.os-card-grid {
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

.os-props-table {
  width: 100%;
  border-collapse: collapse;
  margin: 18px 0;
  overflow: hidden;
  border-radius: 16px;
  box-shadow: 0 8px 22px rgba(20, 35, 50, 0.06);
}

.os-props-table th,
.os-props-table td {
  padding: 12px 14px;
  border-bottom: 1px solid rgba(20, 35, 50, 0.09);
  text-align: left;
  vertical-align: top;
}

.os-props-table th {
  background: #eef6fb;
  color: var(--blue);
  font-weight: 900;
}

.os-props-table tr:last-child td {
  border-bottom: none;
}

.os-props-table td:first-child {
  font-weight: 900;
  color: var(--blue);
}

.os-props-page code {
  color: var(--blue);
  background: #eef6fb;
  border: 1px solid rgba(10, 78, 118, 0.12);
  border-radius: 6px;
  padding: 1px 6px;
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

@media (max-width: 850px) {
  .os-card-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 650px) {
  .os-props-hero {
    padding: 28px;
  }

  .os-props-section-body {
    padding: 20px;
  }

  .os-props-table {
    font-size: 14px;
  }
}
</style>

<div class="os-props-page" markdown="1">

<section class="os-props-hero" markdown="0">
<div class="kicker">Simulation input reference</div>
<div class="os-props-hero-title">Properties</div>
<p>Reference guide for bench, rock, section, fault, and water table properties used when defining inputs of simulations.</p>
</section>

<div class="os-props-nav" markdown="0">
<a href="#defining-bench-height">
<span class="icon">1</span>
<strong>Bench Height</strong>
<span>Understand fixed and estimated bench height definitions.</span>
</a>

<a href="#bench-properties">
<span class="icon">2</span>
<strong>Bench Properties</strong>
<span>Review unit weight, bench face angle, berm width, and bench count.</span>
</a>

<a href="#rock-properties">
<span class="icon">3</span>
<strong>Rock Properties</strong>
<span>Set Hoek-Brown or Mohr-Coulomb strength parameters.</span>
</a>

<a href="#general-section-properties">
<span class="icon">4</span>
<strong>Section Properties</strong>
<span>Define crest position, slope height, target FoS, surcharge, and road inputs.</span>
</a>

<a href="#faults">
<span class="icon">5</span>
<strong>Faults</strong>
<span>Add fault polylines, define fault segmentation, and assign material properties.</span>
</a>

<a href="#water-table">
<span class="icon">6</span>
<strong>Water Table</strong>
<span>Define the piezometric line for selected cross-sections.</span>
</a>
</div>

<section class="os-props-section" id="defining-bench-height" markdown="1">
<div class="os-props-section-head" markdown="0">
<div class="label">Bench geometry</div>
<h2 id="defining-bench-height">Defining Bench Height</h2>
<p>Bench height can be fixed for a section or inherited from a parent 3D rock model during slicing.</p>
</div>
<div class="os-props-section-body" markdown="1">

At this stage, a **fixed bench height** is used for each rock or section layer.

When working with **3D rock models**, if a bench height is defined, it is automatically **inherited by the section** from its parent shape during the slicing operation. This ensures consistency between the 3D model and the generated section geometry. If required, section bench height can be directly edited later.

By default, bench height is set by **specifying a bench height** for either:

- a **section**, or
- a **3D rock model (stratigraphy)**.

Alternatively, in the **section properties**, the bench height can be **estimated** by specifying:

- the **number of benches**, and
- the **slope height**.

The software will calculate the corresponding bench height automatically.

<div class="os-note" markdown="1">
<strong>Example</strong><br>
If slope height = 120 m and number of benches = 12, then bench height = 10 m.
</div>

<div class="os-subtitle">Bench-compatible slope height</div>

Bench-compatible slope height is the maximum slope height that allows an integer number of benches without exceeding the total slope height.

<div class="os-note" markdown="1">
<strong>Example</strong><br>
Slope height = 385 m and bench height = 10 m gives a bench-compatible slope height of 380 m. Adding another full bench would exceed the defined slope height.
</div>

</div>
</section>

<section class="os-props-section" id="bench-properties" markdown="1">
<div class="os-props-section-head" markdown="0">
<div class="label">Bench input table</div>
<h2 id="bench-properties">Bench Properties</h2>
<p>Bench properties describe the basic geometry and unit weight used for bench generation.</p>
</div>
<div class="os-props-section-body" markdown="1">

<table class="os-props-table">
<thead>
<tr>
<th>Name</th>
<th>Measurement type</th>
<th>Info</th>
</tr>
</thead>
<tbody>
<tr>
<td>Unit Weight</td>
<td>kN/m³</td>
<td>Unit weight in kN/m³.</td>
</tr>
<tr>
<td>Bench Face Angle</td>
<td>Degrees</td>
<td>Bench face inclination.</td>
</tr>
<tr>
<td>Min Berm Width</td>
<td>m</td>
<td>Minimum berm width.</td>
</tr>
<tr>
<td>Number of benches</td>
<td>-</td>
<td>Number of benches, set only if <strong>Bench defined by</strong> = <strong>No. of benches</strong>.</td>
</tr>
<tr>
<td>Bench Height</td>
<td>m</td>
<td>The height of each bench.</td>
</tr>
</tbody>
</table>

</div>
</section>

<section class="os-props-section" id="rock-properties" markdown="1">
<div class="os-props-section-head" markdown="0">
<div class="label">Material strength</div>
<h2 id="rock-properties">Rock Properties</h2>
<p>Rock strength properties are set according to the selected strength model.</p>
</div>
<div class="os-props-section-body" markdown="1">

Hoek-Brown or Mohr-Coulomb properties are set depending on the strength model of the material type.

<div class="os-subtitle">Hoek-Brown Strength Model</div>

<table class="os-props-table">
<thead>
<tr>
<th>Name</th>
<th>Measurement type</th>
<th>Info</th>
</tr>
</thead>
<tbody>
<tr>
<td>σ_ci</td>
<td>MPa</td>
<td>Unconfined compressive strength of the intact rock.</td>
</tr>
<tr>
<td>Geological Strength Index</td>
<td>-</td>
<td>Geological Strength Index for the rock mass.</td>
</tr>
<tr>
<td>Intact rock m_i value</td>
<td>-</td>
<td>Value controlling the Hoek-Brown curvature.</td>
</tr>
<tr>
<td>σ3_max</td>
<td>MPa</td>
<td>Minor principal stress averaged along the likely slope failure surface. If unavailable, set to <code>-1</code>.</td>
</tr>
<tr>
<td>Disturbance Factor</td>
<td>-</td>
<td>Factor accounting for rock mass strength reduction due to stress relaxation and blasting.</td>
</tr>
</tbody>
</table>

<div class="os-subtitle">Mohr-Coulomb Strength Model</div>

<table class="os-props-table">
<thead>
<tr>
<th>Name</th>
<th>Measurement type</th>
<th>Info</th>
</tr>
</thead>
<tbody>
<tr>
<td>Friction Angle</td>
<td>Degrees</td>
<td>Angle of shearing resistance, also known as internal friction, of the rock mass.</td>
</tr>
<tr>
<td>Cohesion</td>
<td>kPa</td>
<td>Cohesion of the rock mass.</td>
</tr>
</tbody>
</table>

<div class="os-tip" markdown="1">
<strong>Note</strong><br>
Bench properties and rock properties can be set for individual 3D stratigraphy. If sections are generated using the slicing tool, sections automatically inherit these properties. If sections are imported directly, properties can be set manually for each layer in a particular section.
</div>

</div>
</section>

<section class="os-props-section" id="general-section-properties" markdown="1">
<div class="os-props-section-head" markdown="0">
<div class="label">Section-level inputs</div>
<h2 id="general-section-properties">General Section Properties</h2>
<p>General section properties define the slope geometry, target factor of safety, surcharge, and road inputs.</p>
</div>
<div class="os-props-section-body" markdown="1">

<table class="os-props-table">
<thead>
<tr>
<th>Name</th>
<th>Measurement type</th>
<th>Info</th>
</tr>
</thead>
<tbody>
<tr>
<td>Horizontal Crest Position</td>
<td>m</td>
<td>Defines a local horizontal crest position, X_section, within a cross-section.</td>
</tr>
<tr>
<td>Slope Height</td>
<td>m</td>
<td>The height of the slope.</td>
</tr>
<tr>
<td>Target FoS</td>
<td>-</td>
<td>Target factor of safety.</td>
</tr>
<tr>
<td>Side of slope</td>
<td>-</td>
<td>Defines whether the slope is on the left or right side.</td>
</tr>
<tr>
<td>Surcharge magnitude</td>
<td>kN/m²</td>
<td>Unit weight of the distributed surcharge.</td>
</tr>
<tr>
<td>Surcharge inclination (α)</td>
<td>Degrees</td>
<td>Inclination of the triangular component of distributed surcharge.</td>
</tr>
<tr>
<td>Surcharge from slope crest</td>
<td>m</td>
<td>Distance of surcharge from the slope crest.</td>
</tr>
<tr>
<td>Road width</td>
<td>m</td>
<td>Width of a road.</td>
</tr>
<tr>
<td>Road Vertical Position (Z)</td>
<td>m</td>
<td>Road Z position coordinate.</td>
</tr>
</tbody>
</table>

<div class="os-subtitle">How should I choose the crest point?</div>

The **crest point** defines the uppermost starting location of the slope in the model. Its position directly affects how the slope geometry is generated during optimisation.

If the crest is placed **too close to the outer edge** of the section or terrain, the calculated slope, based on the **initial maximum overall slope angle**, may project outward beyond the existing ground surface. In this case, parts of the slope will extend into **open space**, effectively creating a geometry that intersects “thin air.” This can lead to unrealistic results and may cause instability or inaccuracies in subsequent simulations.

To avoid this, position the crest point **further inland**, so that:

- the entire slope profile remains within the defined ground surface,
- the slope toe and face are generated against actual material, not empty space,
- the optimisation process has valid geometry to work with in all iterations.

When the crest point is set correctly, the section preview shows the preliminary **minimum** and **maximum Overall Slope Angle (OSA)** limits. These are indicated by the **green triangular search region**. This triangle represents the area where the simulation will search for the optimal slope profile shape.

The preliminary OSA limits are calculated from the selected crest point and the section properties. If the crest point and properties result in a very narrow difference between the minimum and maximum OSA, the simulation has only a limited search range. In this case, the optimiser will not be able to explore many possible slope profiles, which may reduce the quality or usefulness of the optimisation result.

A wider and realistic OSA search range gives the optimiser more flexibility to investigate alternative slope shapes while still remaining within the valid section geometry.

<div class="os-recommendation" markdown="1">
<strong>Practical tips</strong>

- Position the crest point slightly further inside the section boundary than you think is necessary.
- Check that the green triangular search region remains within the available ground/material area.
- Avoid crest point positions that create a very narrow minimum-to-maximum OSA range.
- If the green triangle is too narrow or extends outside the model, adjust the crest point or review the section properties before running the simulation.
</div>

</div>
</section>

<section class="os-props-section" id="faults" markdown="1">
<div class="os-props-section-head" markdown="0">
<div class="label">Discontinuities</div>
<h2 id="faults">Faults</h2>
<p>Faults represent discontinuities or fractures that can influence rock mass behaviour, stability, and stress distribution.</p>
</div>
<div class="os-props-section-body" markdown="1">

Faults represent discontinuities or fractures within the geological model that can influence rock mass behaviour, stability, and stress distribution.

In the Slope Optimiser, faults are defined as **open polylines** and can be added to a section in two different ways.

<div class="os-card-grid" markdown="1">
<div class="os-card" markdown="1">
<strong>Assign faults in an imported section</strong>

1. Import the DXF file as a regular section.
2. In the **Explorer** menu, locate and select the layer containing the fault geometry.
3. Tick **This entity is a fault/joint (open polyline)**.
4. Assign the fault properties shown below.
</div>

<div class="os-card" markdown="1">
<strong>Import faults as a separate DXF</strong>

1. In the **Explorer** menu, select the target section.
2. In the **Properties View** panel, open **Optional Properties > Faults**.
3. Click **Add** to import the fault DXF file.
4. Assign the fault properties in the fault layer properties.
</div>
</div>

<div class="os-subtitle">Faults Optional Properties</div>

The **Maximum Fault Segment Length** parameter is defined under **Optional Properties > Faults**.

<table class="os-props-table">
<thead>
<tr>
<th>Name</th>
<th>Measurement type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>Maximum Fault Segment Length</td>
<td>m</td>
<td>Controls how imported fault polylines are segmented for analysis. Higher values create fewer segments and faster computation, while lower values create more segments and provide a more detailed representation of the fault geometry. Default value is <code>20 m</code>.</td>
</tr>
</tbody>
</table>

<div class="os-subtitle">Fault Layer Properties</div>

The following properties are assigned to the imported fault or joint polyline layer.

<table class="os-props-table">
<thead>
<tr>
<th>Name</th>
<th>Measurement type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>Friction Angle</td>
<td>Degrees</td>
<td>The angle of shearing resistance, also known as internal friction, of the fault material.</td>
</tr>
<tr>
<td>Cohesion</td>
<td>kPa</td>
<td>The cohesive strength of the fault material, measured in kilopascals.</td>
</tr>
</tbody>
</table>

<div class="os-subtitle">Fault Segment Length</div>

The **Maximum fault segment length** parameter controls how imported fault polylines are divided into smaller segments for analysis.

<div class="os-card-grid" markdown="0">
<div class="os-card">
<strong>Higher value</strong>
<p>Creates fewer fault segments, which can reduce computation time and make the simulation faster. The fault geometry may be represented in a more simplified way.</p>
</div>

<div class="os-card">
<strong>Lower value</strong>
<p>Creates more fault segments, providing a more detailed fault representation. This increases computational effort and may make the simulation slower.</p>
</div>
</div>

Use a segment length that is appropriate for the scale and complexity of the fault geometry. For simple or long faults, the default value of **20 m** is usually a good starting point. For highly curved, short, or complex fault geometries, a smaller value may be useful.

<div class="os-recommendation" markdown="1">
<strong>Fault practical tips</strong>

Faults should be defined where they are expected to have a meaningful influence on the slope, such as where a fault crosses the slope face, slope toe, or potential failure region.

When defining faults, make sure that:

- the fault geometry is correctly positioned relative to the section,
- the fault intersects the relevant part of the slope model if it is expected to influence the result,
- fault material properties are representative of the expected geological conditions,
- the fault is included only where it is geologically justified.

When testing fault sensitivity, duplicate the section and create separate scenarios with different fault positions, orientations, or material properties.
</div>

</div>
</section>

<section class="os-props-section" id="water-table" markdown="1">
<div class="os-props-section-head" markdown="0">
<div class="label">Groundwater</div>
<h2 id="water-table">Water Table</h2>
<p>The water table, also referred to as the piezometric line, can be defined for a selected cross-section.</p>
</div>
<div class="os-props-section-body" markdown="1">

The water table, also referred to as the **piezometric line**, can be defined for a selected cross-section under:

`Cross-section > Optional Properties > Water Table`

<div class="os-include-frame" markdown="1">
{% include watertableUI.html %}
</div>

*The water table is displayed as a blue polyline in the section visualiser.*

<div class="os-subtitle">Water Table Interface</div>

<table class="os-props-table">
<thead>
<tr>
<th>Column</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>Index</td>
<td>Point index, starting from <code>1</code> at the slope toe and continuing to <code>N</code> at the last boundary point.</td>
</tr>
<tr>
<td>Vertical Position (Z)</td>
<td>Z coordinate of the corresponding bench line where the point is located. This value is fixed to the bench Z position.</td>
</tr>
<tr>
<td>X</td>
<td>Horizontal coordinate of the water table point. This value is editable.</td>
</tr>
</tbody>
</table>

<div class="os-subtitle">Defining the Water Table</div>

To define the water table:

1. Click **Draw**.
2. In the visualiser, hover over the desired bench line and select a point.
3. Continue selecting points along the required bench lines.
4. Close the piezometric line by selecting the final point on the boundary.
5. Press **Enter** to confirm, or press **Esc** to cancel.

<div class="os-note" markdown="1">
<strong>Notes</strong>

- The first point at the slope toe is assigned automatically.
- Only one water table point is allowed per bench.
- The water table should be defined so that it follows the expected groundwater conditions for the selected cross-section.
</div>

</div>
</section>

</div>
