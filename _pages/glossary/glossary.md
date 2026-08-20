---
title: Glossary
author: Dainius Jenkus
date: 2010-06-30
category: Reference
layout: post
permalink: /pages/glossary/
toc_h_min: 2
toc_h_max: 2
nav_order: 72
nav_parent: Help and Solutions
nav_position: bottom
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
<a href="#materials"><span class="icon">2</span><strong>Material Properties</strong><span>Strength models and the parameters used to describe rock and faults.</span></a>
<a href="#simulation"><span class="icon">3</span><strong>Simulation</strong><span>FoS, optimisation, OSA, loads, constraints and result profiles.</span></a>
<a href="#data"><span class="icon">4</span><strong>Data</strong><span>Geometry entities, file formats, model quality and downstream exports.</span></a>
</div>

<section class="os-guide-section" id="geometry" markdown="1">
<div class="os-guide-section-head" markdown="0">
<div class="label">Geometry</div>
<h2 id="geometry">Geometry terms</h2>
<p>Terms related to imported sections, slope shape, and design geometry.</p>
</div>
<div class="os-guide-section-body" markdown="1">

<div class="os-glossary-term" markdown="1">
<h3>Cross-section</h3>
A 2D representation of the geological model along a selected cutting plane. A cross-section may be imported directly or generated by slicing a 3D model and is the geometry used to define a simulation.
</div>

<div class="os-glossary-term" markdown="1">
<h3>Section layer</h3>
A geological or material region within a cross-section. Each section layer can have its own bench and strength properties.
</div>

<div class="os-glossary-term" markdown="1">
<h3>Slicing plane</h3>
The XY, XZ, or YZ plane used to intersect selected 3D geometry and generate a cross-section. The live clipping preview shows its current position; the visualiser arrow translates it and the ring rotates a vertical plane.
</div>

<div class="os-glossary-term" markdown="1">
<h3>Azimuth</h3>
The horizontal orientation angle of a vertical slicing plane. It allows XZ or YZ cross-sections to be created in different orientations through the model.
</div>

<div class="os-glossary-term" markdown="1">
<h3>Slope anchor</h3>
The fixed endpoint used to define the candidate slope geometry. The user can prescribe either the crest or the toe.
</div>

<div class="os-glossary-term" markdown="1">
<h3>Crest point</h3>
The upper starting location of the slope profile. In crest-anchor mode, its position and the target slope height define the slope geometry and affect the OSA search region.
</div>

<div class="os-glossary-term" markdown="1">
<h3>Toe</h3>
The lower end of the slope profile where the slope meets the lower ground or design boundary. In toe-anchor mode, its horizontal position and elevation are prescribed and slope height is calculated by the software.
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

<div class="os-glossary-term" markdown="1">
<h3>Slope height</h3>
The vertical height of the slope used when defining the section and bench arrangement. It is entered in crest-anchor mode and calculated from the section geometry in toe-anchor mode.
</div>

<div class="os-glossary-term" markdown="1">
<h3>Bench face angle</h3>
The inclination of an individual bench face, measured in degrees.
</div>

<div class="os-glossary-term" markdown="1">
<h3>Minimum berm width</h3>
The smallest permitted width of the platform between adjacent bench faces.
</div>

<div class="os-glossary-term" markdown="1">
<h3>Bench-compatible slope height</h3>
The greatest slope height that accommodates a whole number of benches without exceeding the defined total slope height.
</div>

<div class="os-glossary-term" markdown="1">
<h3>Boundary surface</h3>
A closed, continuous 3D surface used to trim a section to an excavation, pushback, pit, or other model limit.
</div>

<div class="os-glossary-term" markdown="1">
<h3>Water table (piezometric line)</h3>
The groundwater boundary defined for a cross-section. It is represented as a blue polyline in the section visualiser.
</div>

<div class="os-glossary-term" markdown="1">
<h3>Inclination-corrected water pressure</h3>
Water pressure calculated with a correction for the phreatic-line gradient: <code>u = γw hw cos² α</code>.
</div>

<div class="os-glossary-term" markdown="1">
<h3>Hydrostatic water pressure</h3>
Water pressure calculated without a phreatic-line inclination correction: <code>u = γw hw</code>.
</div>

<div class="os-glossary-term" markdown="1">
<h3>Fault or joint</h3>
A geological discontinuity or fracture that may influence rock-mass behaviour and slope stability. Faults are represented in Slope Optimiser as open polylines with assigned strength properties.
</div>

</div>
</section>

<section class="os-guide-section" id="materials" markdown="1">
<div class="os-guide-section-head" markdown="0">
<div class="label">Material properties</div>
<h2 id="materials">Material property terms</h2>
<p>Terms used to describe material weight, rock-mass strength, and fault strength.</p>
</div>
<div class="os-guide-section-body" markdown="1">

<div class="os-glossary-term" markdown="1">
<h3>Unit weight</h3>
The weight of material per unit volume, entered in kN/m³. It contributes to the gravitational loading of the slope.
</div>

<div class="os-glossary-term" markdown="1">
<h3>Strength model</h3>
A mathematical relationship used to describe how a material resists failure under stress. Slope Optimiser supports the Mohr-Coulomb and Hoek-Brown models for rock layers.
</div>

<div class="os-glossary-term" markdown="1">
<h3>Mohr-Coulomb model</h3>
A linear shear-strength model defined primarily by cohesion and friction angle.
</div>

<div class="os-glossary-term" markdown="1">
<h3>Hoek-Brown model</h3>
An empirical, non-linear strength criterion for rock masses. Its inputs describe intact-rock strength, rock-mass condition, material characteristics, confinement, and disturbance.
</div>

<div class="os-glossary-term" markdown="1">
<h3>Friction angle (φ)</h3>
The angle of shearing resistance, or internal friction, of rock or fault material. It is entered in degrees.
</div>

<div class="os-glossary-term" markdown="1">
<h3>Cohesion (c)</h3>
The component of shear strength that is independent of normal stress in the Mohr-Coulomb model. It is entered in kPa.
</div>

<div class="os-glossary-term" markdown="1">
<h3>Intact compressive strength (σ<sub>ci</sub>)</h3>
The unconfined compressive strength of intact rock, entered in MPa for the Hoek-Brown model.
</div>

<div class="os-glossary-term" markdown="1">
<h3>Geological Strength Index (GSI)</h3>
A value representing the geological structure and surface condition of a rock mass for use in the Hoek-Brown model.
</div>

<div class="os-glossary-term" markdown="1">
<h3>Intact-rock constant (m<sub>i</sub>)</h3>
A material constant for intact rock that controls the curvature of the Hoek-Brown strength relationship.
</div>

<div class="os-glossary-term" markdown="1">
<h3>Maximum minor principal stress (σ<sub>3 max</sub>)</h3>
The minor principal stress averaged along the likely slope failure surface. It is entered in MPa for the Hoek-Brown model; the manual specifies <code>-1</code> when it is unavailable.
</div>

<div class="os-glossary-term" markdown="1">
<h3>Disturbance factor (D)</h3>
A Hoek-Brown parameter that accounts for rock-mass strength reduction caused by effects such as blasting and stress relaxation.
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
<h3>Target FoS</h3>
The factor of safety specified as the stability objective for a simulation.
</div>

<div class="os-glossary-term" markdown="1">
<h3>OSA</h3>
Overall Slope Angle. In OptimalSlope, Min/Max OSA values define the search range used to explore possible slope profiles.
</div>

<div class="os-glossary-term" markdown="1">
<h3>Minimum and maximum OSA</h3>
The lower and upper overall slope-angle limits used to bound the slope geometries considered by the optimiser.
</div>

<div class="os-glossary-term" markdown="1">
<h3>OSA search region</h3>
The triangular region shown in the section preview where the optimiser searches for the optimal slope profile.
</div>

<div class="os-glossary-term" markdown="1">
<h3>Optimisation</h3>
The process of evaluating candidate slope geometries to identify a profile that meets the defined stability objective and design inputs.
</div>

<div class="os-glossary-term" markdown="1">
<h3>Optimised profile</h3>
The slope profile estimated by the optimiser after running the simulation and evaluating candidate geometries.
</div>

<div class="os-glossary-term" markdown="1">
<h3>Failure mechanism</h3>
The potential failure path or mechanism considered during slope stability analysis.
</div>

<div class="os-glossary-term" markdown="1">
<h3>Line load</h3>
A concentrated section load placed at one selected point on the topography. Its magnitude must be greater than zero.
</div>

<div class="os-glossary-term" markdown="1">
<h3>Distributed load</h3>
A load applied over an interval selected on the section topography. It may be uniform, with one magnitude, or linear, with separate left and right magnitudes.
</div>

<div class="os-glossary-term" markdown="1">
<h3>Road input</h3>
A section-level input that defines a road by its width and vertical position within the slope geometry.
</div>

<div class="os-glossary-term" markdown="1">
<h3>Maximum fault segment length</h3>
The maximum length used when dividing an imported fault polyline into analysis segments. Smaller values give a more detailed representation but require more computation; larger values simplify the fault and can run faster.
</div>

<div class="os-glossary-term" markdown="1">
<h3>Simulation input</h3>
The combined section geometry, material properties, bench properties, optional features, and optimisation settings submitted for analysis.
</div>

<div class="os-glossary-term" markdown="1">
<h3>Simulation Check</h3>
The pre-submission panel that lists incomplete or invalid section inputs. Its Fix action navigates to and highlights the affected property; Check Again repeats the validation after corrections.
</div>

<div class="os-glossary-term" markdown="1">
<h3>Simulation result</h3>
The output from a completed analysis, including the estimated optimal slope profile and associated result data or plots.
</div>

<div class="os-glossary-term" markdown="1">
<h3>Detached plot</h3>
A static Output Plot opened in a separate window so that multiple cross-section results can be kept visible and compared side by side.
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
A drawing exchange format used to import section geometry and stratigraphy into Slope Optimiser and to export slope profiles to other engineering tools.
</div>

<div class="os-glossary-term" markdown="1">
<h3>CBF</h3>
The binary file format used to save and reopen an entire Slope Optimiser project.
</div>

<div class="os-glossary-term" markdown="1">
<h3>Stratigraphy</h3>
The geological layer model used to define material regions and generate sections.
</div>

<div class="os-glossary-term" markdown="1">
<h3>Polyline</h3>
An ordered sequence of connected line segments defined by vertices. Polylines are the recommended geometry for water, section, and fault layers.
</div>

<div class="os-glossary-term" markdown="1">
<h3>Open polyline</h3>
A polyline whose first and last points are not joined. Faults and joints are imported as open polylines.
</div>

<div class="os-glossary-term" markdown="1">
<h3>Spline</h3>
A smooth mathematical curve defined by control points and interpolation. Splines add processing complexity and should not be used for water, section, or fault layers; converting them to polylines can introduce approximation errors.
</div>

<div class="os-glossary-term" markdown="1">
<h3>Wire</h3>
A connected sequence of edges used to represent a boundary in section geometry. Gaps, duplicate edges, or incorrect edge ordering can produce an invalid wire.
</div>

<div class="os-glossary-term" markdown="1">
<h3>Mesh</h3>
A 3D surface representation formed from connected faces, edges, and vertices.
</div>

<div class="os-glossary-term" markdown="1">
<h3>Closed manifold mesh</h3>
A watertight mesh in which every edge is shared by exactly two adjacent faces. Closed manifold geometry helps produce complete and reliable cross-sections.
</div>

<div class="os-glossary-term" markdown="1">
<h3>DXF Polyface</h3>
A connected mesh representation in a DXF file. It is the recommended Leapfrog DXF export option because it preserves mesh connectivity and generally requires less post-processing.
</div>

<div class="os-glossary-term" markdown="1">
<h3>DXF 3D Face</h3>
An individual face entity in a DXF file. A model exported as separate 3D Faces requires additional processing because the faces are not stored as one connected mesh.
</div>

<div class="os-glossary-term" markdown="1">
<h3>Block model</h3>
A 3D grid of blocks used to represent material, geometry, or simulation result attributes such as slope angle.
</div>

<div class="os-glossary-term" markdown="1">
<h3>JSON simulation export</h3>
A text-based export containing the properties and inputs associated with an individual section and its layers.
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
