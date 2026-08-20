---
title: Properties
author: Dainius Jenkus
date: 2010-06-30
category: Properties
layout: post
nav_order: 40
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
<p>Reference guide for slope anchors, bench and rock inputs, loads, faults, roads, and groundwater settings used to define simulations.</p>
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
<span>Define the slope anchor, slope geometry, target FoS, loads, roads, and water-pressure method.</span>
</a>

<a href="#transfer-section-properties">
<span class="icon">5</span>
<strong>Transfer Properties</strong>
<span>Reuse section settings and mapped layer properties on another section.</span>
</a>

<a href="#faults">
<span class="icon">6</span>
<strong>Faults</strong>
<span>Add fault polylines, define fault segmentation, and assign material properties.</span>
</a>

<a href="#water-table">
<span class="icon">7</span>
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

When working with **3D rock models**, if a bench height is defined, it is automatically **inherited by the section** from its parent shape during the slicing operation. This ensures consistency between the 3D model and the generated section geometry. If required, the section's bench height can be edited later.

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

Bench-compatible slope height is the maximum slope height that allows a whole number of benches without exceeding the total slope height.

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
Bench and rock properties can be set for individual 3D stratigraphic models. If sections are generated using the slicing tool, they automatically inherit these properties. If sections are imported directly, properties can be set manually for each layer in a particular section.
</div>

</div>
</section>

<section class="os-props-section" id="general-section-properties" markdown="1">
<div class="os-props-section-head" markdown="0">
<div class="label">Section-level inputs</div>
<h2 id="general-section-properties">General Section Properties</h2>
<p>General section properties define the fixed slope endpoint, slope geometry, target factor of safety, loads, and road inputs.</p>
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
<td>Slope Anchor</td>
<td>-</td>
<td>Selects the fixed endpoint used to define the slope: <strong>Crest</strong> or <strong>Toe</strong>.</td>
</tr>
<tr>
<td>Crest Position</td>
<td>m</td>
<td>Local horizontal crest coordinate. Available when <strong>Crest</strong> is the active slope anchor.</td>
</tr>
<tr>
<td>Toe Position</td>
<td>m</td>
<td>Local horizontal toe coordinate. Available when <strong>Toe</strong> is the active slope anchor.</td>
</tr>
<tr>
<td>Toe Elevation</td>
<td>m</td>
<td>Vertical toe coordinate. It can be entered or selected in the visualiser after the toe position is defined.</td>
</tr>
<tr>
<td>Slope Height</td>
<td>m</td>
<td>Target slope height in crest-anchor mode. In toe-anchor mode, slope height is calculated from the selected toe and section geometry.</td>
</tr>
<tr>
<td>Target FoS</td>
<td>-</td>
<td>Target factor of safety.</td>
</tr>
<tr>
<td>Failure Direction</td>
<td>-</td>
<td>Defines whether failure and slope generation proceed from right to left or left to right.</td>
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

<div class="os-subtitle">Choosing the Slope Anchor</div>

The **Slope Anchor** is the fixed endpoint used to generate the candidate slope geometry.

- Select **Crest** when the upper endpoint is fixed by topography, a pit limit, or the planned crest alignment. Define the crest position and target slope height.
- Select **Toe** when the lower endpoint is fixed by the pit floor, haul road, excavation boundary, or another design constraint. Define the toe horizontal position and elevation; the slope height and bench-compatible height are calculated automatically.
- The property panel displays the resolved global coordinates and the estimated minimum and maximum OSA for the active anchor.

Choose the anchor based on which endpoint must remain fixed, then set **Failure Direction** separately to match the slope orientation.

The animation below shows how changing the anchor keeps either the crest or toe fixed and updates the related slope values.

{% include expandable-animation.html
   src="/assets/tutorial/slope-anchor.gif"
   title="Choosing a Crest or Toe anchor"
   alt="Switching between Crest and Toe slope anchors and reviewing the recalculated slope height and OSA range"
%}

The toe must lie inside the section, at or below the topography, and above the section floor. Toe elevations are resolved to the whole-unit elevation used by the solver. If a new value is invalid, review the message in the interface and adjust the toe position or elevation.

<div class="os-note" markdown="1">
<strong>Water-table update required:</strong> Changing the active anchor or toe geometry can invalidate an existing water table. If the application removes the water table, redraw or re-import it after the slope geometry is finalised.
</div>

<div class="os-subtitle">How should I choose the crest point?</div>

The **crest point** defines the uppermost starting location of the slope in the model. Its position directly affects how the slope geometry is generated during optimisation.

If the crest is placed **too close to the outer edge** of the section or terrain, the calculated slope, based on the **initial maximum overall slope angle**, may project outward beyond the existing ground surface. In this case, parts of the slope will extend into **open space**, effectively creating geometry that intersects “thin air.” This can lead to unrealistic results and may cause instability or inaccuracies in subsequent simulations.

To avoid this, position the crest point **further inland**, so that:

- the entire slope profile remains within the defined ground surface,
- the slope toe and face are generated against actual material, not empty space,
- the optimisation process has valid geometry to work with in all iterations.

When the crest point is set correctly, the section preview shows the preliminary **minimum** and **maximum Overall Slope Angle (OSA)** limits. These are indicated by the **green triangular search region**. This triangle represents the area where the simulation will search for the optimal slope profile shape.

The preliminary OSA limits are calculated from the selected crest point and the section properties. If the crest point and properties result in a very narrow difference between the minimum and maximum OSA, the simulation has only a limited search range. In this case, the optimiser will not be able to explore many possible slope profiles, which may reduce the quality or usefulness of the optimisation result.

A wider, realistic OSA search range gives the optimiser more flexibility to investigate alternative slope shapes while remaining within the valid section geometry.

<div class="os-recommendation" markdown="1">
<strong>Practical tips</strong>

- Position the crest point slightly further inside the section boundary than you think is necessary.
- Check that the green triangular search region remains within the available ground/material area.
- Avoid crest point positions that create a very narrow minimum-to-maximum OSA range.
- If the green triangle is too narrow or extends outside the model, adjust the crest point or review the section properties before running the simulation.
</div>

<div class="os-subtitle">Section Loads</div>

Loads are defined under **Optional Properties > Loads** and placed directly on the section topography.

<table class="os-props-table">
<thead>
<tr>
<th>Load type</th>
<th>Selection</th>
<th>Magnitude</th>
</tr>
</thead>
<tbody>
<tr>
<td>Line</td>
<td>Select one point on the topography.</td>
<td>Enter one magnitude greater than zero.</td>
</tr>
<tr>
<td>Distributed — Uniform</td>
<td>Select the left and right endpoints of the loaded interval.</td>
<td>Enter one magnitude greater than zero.</td>
</tr>
<tr>
<td>Distributed — Linear</td>
<td>Select the left and right endpoints of the loaded interval.</td>
<td>Enter left and right magnitudes. Both must be non-negative and at least one must be greater than zero.</td>
</tr>
</tbody>
</table>

To add a load:

1. Choose **Line** or **Distributed**. For a distributed load, also choose **Uniform** or **Linear**.
2. Enter the required magnitude value or values.
3. Click **Select** and choose the point or interval on the section topography. The pointer snaps to valid topography positions.
4. Review the new entry in the load table.

Loads may not overlap. If the selected location overlaps another load, the existing load is highlighted and the new load is not accepted. Select a different position or delete the conflicting entry. Use **Cancel** to leave selection mode and **Delete** to remove the selected load.

The animation below demonstrates a line load, a distributed linear load with different endpoint magnitudes, and a distributed uniform load with one fixed magnitude. It also shows the warning displayed when a new load overlaps an existing load.

{% include expandable-animation.html
   src="/assets/tutorial/distributed-loads.gif"
   title="Adding section loads"
   alt="Adding line, distributed linear, and distributed uniform loads and responding to an overlapping-load warning"
%}

Roads remain separate optional inputs and are defined using their width and vertical position.

</div>
</section>

<section class="os-props-section" id="transfer-section-properties" markdown="1">
<div class="os-props-section-head" markdown="0">
<div class="label">Reuse a section setup</div>
<h2 id="transfer-section-properties">Transfer Section Properties</h2>
<p>Copy reusable settings and mapped layer properties from an existing section to another section in the same project.</p>
</div>
<div class="os-props-section-body" markdown="1">

Open **Tools > Settings > Transfer Section Properties**, select the newly imported or receiving cross-section, and click **Transfer Section Properties**. In the transfer window, select the source section and choose what to copy:

The animation below shows properties being transferred from an existing section to a receiving section with different geometry. The receiving section gains the selected reusable properties while retaining its own geometry.

{% include expandable-animation.html
   src="/assets/tutorial/property-transfer.gif"
   title="Transferring properties between sections"
   alt="Selecting a receiving section, reviewing layer mappings, transferring section properties, and confirming that the receiving geometry remains unchanged"
%}

- **Section settings** — target FoS, bench and strength-model definitions, water-pressure option, and maximum fault segment length.
- **Entity types** — rock material, fault/joint, or piezometric-line classification.
- **Layer properties** — defined material, strength, and bench-property values.

The layer table automatically includes unique exact-name matches. Review every mapping, manually select a source layer where required, and clear **Include** for layers that should remain unchanged. A source layer can be mapped only once. Blank numerical fields in the source do not overwrite defined values in the receiving section.

<div class="os-note" markdown="1">
<strong>Not transferred:</strong> Crest and toe coordinates, slope height, water-line points, roads, loads, simulation folders, plot data, simulation results, and result logs remain tied to their original geometry or simulation. The receiving section keeps its own geometry-dependent data. If it already has results, they are retained but marked as out of date after transferred properties change the setup.
</div>

Properties cannot be transferred while the receiving section has an active or submitted simulation. Use **Fetch results** or stop the simulation first.

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
2. In the **Properties** panel, open **Optional Properties > Faults**.
3. Click **Add** to import the fault DXF file.
4. Assign the fault properties in the fault layer properties.
</div>
</div>

<div class="os-subtitle">Fault Settings</div>

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
<td>Controls how imported fault polylines are segmented for analysis. Higher values create fewer segments and allow faster computation, while lower values create more segments and provide a more detailed representation of the fault geometry. The default value is <code>20 m</code>.</td>
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
<p>Creates fewer fault segments, which can reduce computation time and make the simulation faster. The fault geometry may be represented in a simplified form.</p>
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

`Cross-section > Optional Properties > Water`

<div class="os-subtitle">Water Pressure Method</div>

Select the pressure method that matches the analysis assumptions:

- **Inclination-corrected** accounts for the gradient of the phreatic line: `u = γw hw cos² α`.
- **Hydrostatic** applies no inclination correction: `u = γw hw`.

Here, `γw` is the unit weight of water, `hw` is the water head, and `α` is the inclination of the water-table segment. Confirm the selected method before running the simulation, particularly when the piezometric line is steep.

Hydraulic conductivity is not currently available as an editable interface input.

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
2. In the visualiser, select the slope toe on the lowest bench line to add the first water table point.
3. Move upwards through the section, selecting one water table point on each required bench line.
4. To close the piezometric line, hover over the section boundary on the left or right side, depending on the section orientation. When a valid boundary point is detected, a red circle is displayed around it. Select the highlighted point to add the final boundary point.
5. Press **Enter** to confirm, or press **Esc** to cancel.

If a water table was previously imported from a DXF file, the application asks which water table to use for the simulation. Select **Yes** to use the manually drawn points instead, or **No** to keep the imported water table.

The animation below shows the complete drawing workflow, from selecting the first point at the toe to confirming the final point at the section boundary.

{% include expandable-animation.html
   src="/assets/tutorial/water-table-drawing.gif"
   title="Drawing a water table"
   alt="Drawing water-table points from the slope toe to the section boundary and choosing between the manually drawn and imported water tables"
%}

<div class="os-note" markdown="1">
<strong>Notes</strong>

- Define the water table from the slope toe upwards, beginning on the lowest bench line.
- Only one water table point is allowed per bench.
- The water table should be defined so that it follows the expected groundwater conditions for the selected cross-section.
</div>

</div>
</section>


<section class="os-props-section" id="related-help" markdown="1">
<div class="os-props-section-head" markdown="0">
<div class="label">Related help</div>
<h2 id="related-help">Related help</h2>
<p>Use these pages for the recommended first workflow, common issue checks, and terminology.</p>
</div>
<div class="os-props-section-body" markdown="1">

- [Quick Start]({{ '/pages/quick-start/' | relative_url }}) — shortest route through the first simulation workflow.
- [Help and Solutions]({{ '/pages/troubleshooting/' | relative_url }}) — common geometry, OSA search region, simulation, and export checks.
- [Glossary]({{ '/pages/glossary/' | relative_url }}) — definitions of common OptimalSlope terms.

</div>
</section>

</div>
