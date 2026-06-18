---
title: Project Management
author: Dainius Jenkus
date: 2010-06-30
category: Project-management
layout: post
---

<style>
.os-pm-page {
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

.os-pm-page * {
  box-sizing: border-box;
}

.os-pm-hero {
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

.os-pm-hero::after {
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

.os-pm-hero .kicker,
.os-pm-hero-title,
.os-pm-hero p {
  position: relative;
  z-index: 1;
}

.os-pm-hero .kicker {
  color: #ffd9c4;
  font-size: 12px;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.os-pm-hero-title {
  position: relative;
  z-index: 1;
  margin: 10px 0 12px;
  color: white;
  font-size: clamp(38px, 5vw, 64px);
  font-weight: 900;
  line-height: 0.98;
  letter-spacing: -0.055em;
}

.os-pm-hero p {
  max-width: 820px;
  margin: 0;
  color: rgba(255, 255, 255, 0.86);
  font-size: 18px;
  line-height: 1.5;
}

.os-pm-nav {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
  gap: 14px;
  margin: 0 0 30px;
}

.os-pm-nav a {
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

.os-pm-nav a:hover {
  transform: translateY(-3px);
  border-color: rgba(241, 107, 33, 0.36);
  box-shadow: 0 18px 42px rgba(20, 35, 50, 0.14);
  text-decoration: none;
}

.os-pm-nav .icon {
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

.os-pm-nav strong {
  display: block;
  margin-bottom: 6px;
  color: var(--blue);
  font-size: 17px;
}

.os-pm-nav span {
  display: block;
  color: var(--muted);
  font-size: 14px;
  line-height: 1.4;
}

.os-pm-section {
  margin: 32px 0;
  border: 1px solid var(--line);
  border-radius: 26px;
  background: white;
  box-shadow: var(--shadow);
  overflow: hidden;
}

.os-pm-section-head {
  padding: 24px 28px 18px;
  border-bottom: 1px solid rgba(20, 35, 50, 0.08);
  background:
    radial-gradient(circle at 96% 0%, rgba(241, 107, 33, 0.12), transparent 28%),
    radial-gradient(circle at 0% 0%, rgba(10, 78, 118, 0.11), transparent 34%),
    linear-gradient(180deg, #ffffff, #f6fafc);
}

.os-pm-section-head .label {
  color: var(--orange);
  font-weight: 1000;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-size: 12px;
}

.os-pm-section-head h2 {
  margin: 8px 0 8px;
  color: var(--ink);
  font-size: clamp(26px, 3vw, 40px);
  line-height: 1.05;
  letter-spacing: -0.04em;
}

.os-pm-section-head p {
  margin: 0;
  max-width: 880px;
  color: var(--muted);
  line-height: 1.5;
}

.os-pm-section-body {
  padding: 24px 28px 30px;
}

.os-pm-page p,
.os-pm-page li {
  line-height: 1.55;
}

.os-pm-page img {
  max-width: 100%;
  border-radius: 14px;
}

.os-action-card {
  display: grid;
  grid-template-columns: 58px 1fr;
  gap: 15px;
  align-items: center;
  margin: 18px 0;
  padding: 15px;
  border: 1px solid var(--line);
  border-radius: 18px;
  background: linear-gradient(180deg, #ffffff, #f8fbfd);
  box-shadow: 0 8px 22px rgba(20, 35, 50, 0.06);
}

.os-action-card img {
  width: 38px;
  height: 38px;
  object-fit: contain;
  padding: 8px;
  border-radius: 13px;
  background: #eef6fb;
  border: 1px solid rgba(10, 78, 118, 0.12);
}

.os-action-card strong {
  display: block;
  color: var(--blue);
  font-size: 17px;
}

.os-action-card span {
  color: var(--muted);
}

.os-method-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(170px, 1fr));
  gap: 12px;
  margin: 18px 0;
}

.os-method {
  padding: 15px;
  border: 1px solid var(--line);
  border-radius: 16px;
  background: linear-gradient(180deg, #ffffff, #f8fbfd);
}

.os-method strong {
  display: block;
  color: var(--blue);
  margin-bottom: 5px;
}

.os-method code,
.os-pm-page code {
  color: var(--blue);
  background: #eef6fb;
  border: 1px solid rgba(10, 78, 118, 0.12);
  border-radius: 6px;
  padding: 1px 6px;
}

.os-note,
.os-tip,
.os-warning {
  margin: 18px 0;
  padding: 16px 18px;
  border-radius: 16px;
  line-height: 1.5;
}

.os-note {
  border: 1px solid rgba(10, 78, 118, 0.18);
  background: #eef6fb;
}

.os-tip {
  border: 1px solid rgba(241, 107, 33, 0.28);
  background: #fff7f1;
}

.os-warning {
  border: 1px solid rgba(197, 73, 50, 0.28);
  background: #fff3f0;
}

.os-note strong,
.os-tip strong,
.os-warning strong {
  color: var(--blue);
}

.os-format-table {
  width: 100%;
  border-collapse: collapse;
  margin: 18px 0;
  overflow: hidden;
  border-radius: 16px;
  box-shadow: 0 8px 22px rgba(20, 35, 50, 0.06);
}

.os-format-table th,
.os-format-table td {
  padding: 12px 14px;
  border-bottom: 1px solid rgba(20, 35, 50, 0.09);
  text-align: left;
}

.os-format-table th {
  background: #eef6fb;
  color: var(--blue);
  font-weight: 900;
}

.os-format-table tr:last-child td {
  border-bottom: none;
}

.os-format-table td:first-child {
  font-weight: 900;
  color: var(--blue);
}

.os-subtitle {
  margin: 22px 0 8px;
  color: var(--blue);
  font-size: 20px;
  font-weight: 900;
}

.os-include-frame {
  margin: 20px 0;
  padding: 14px;
  border: 1px solid var(--line);
  border-radius: 18px;
  background: #f8fbfd;
  box-shadow: 0 8px 22px rgba(20, 35, 50, 0.06);
}


.os-pm-section h2[id] {
  scroll-margin-top: 90px;
}

@media (max-width: 950px) {
  .os-method-grid {
    grid-template-columns: repeat(2, minmax(180px, 1fr));
  }
}

@media (max-width: 650px) {
  .os-pm-hero {
    padding: 28px;
  }

  .os-method-grid {
    grid-template-columns: 1fr;
  }

  .os-pm-section-body {
    padding: 20px;
  }

  .os-action-card {
    grid-template-columns: 1fr;
  }
}
</style>

<div class="os-pm-page" markdown="1">

<section class="os-pm-hero" markdown="0">
<div class="kicker">Project setup and data management</div>
<div class="os-pm-hero-title">Project Management</div>
<p>Create, save, load, import, slice, trim, and export project data in Slope Optimiser.</p>
</section>

<div class="os-pm-nav" markdown="0">
<a href="#creating-a-project">
<span class="icon">1</span>
<strong>Create Projects</strong>
<span>Start a new project using the menu, shortcut, or toolbar button.</span>
</a>

<a href="#savingloading-projects">
<span class="icon">2</span>
<strong>Save and Load</strong>
<span>Save project files and open existing Slope Optimiser's project data.</span>
</a>

<a href="#importing-data">
<span class="icon">3</span>
<strong>Import Data</strong>
<span>Import stratigraphy, sections, water surfaces, and boundary surfaces.</span>
</a>

<a href="#creating-sections">
<span class="icon">4</span>
<strong>Create Sections</strong>
<span>Generate cross-sections from selected 3D shapes using slicing.</span>
</a>

<a href="#trim-section-to-boundary-surface">
<span class="icon">5</span>
<strong>Trim Sections</strong>
<span>Use boundary surfaces to trim sections to excavation or pushback limits.</span>
</a>

<a href="#exporting-project-data">
<span class="icon">6</span>
<strong>Export Data</strong>
<span>Export shapes, project geometry, and cross-section simulation data.</span>
</a>
</div>

<section class="os-pm-section" id="creating-a-project" markdown="1">
<div class="os-pm-section-head" markdown="0">
<div class="label">Project creation</div>
<h2 id="creating-a-project">Creating a Project</h2>
<p>Create an empty OptimalSlope project before importing geometry or defining simulation properties.</p>
</div>
<div class="os-pm-section-body" markdown="1">

An empty project can be created using one of the following methods:

<div class="os-method-grid" markdown="0">
<div class="os-method">
<strong>Keyboard shortcut</strong>
<span>Press <code>Ctrl + N</code>.</span>
</div>

<div class="os-method">
<strong>File menu</strong>
<span>Open the file menu and click <strong>New</strong>.</span>
</div>

<div class="os-method">
<strong>Toolbar button</strong>
<span>Click the create project button.</span>
</div>
</div>

<div class="os-action-card" markdown="0">
<img src="https://OptimalSlope.github.io/manual/assets/control-icons/create-project.png" alt="Create project">
<div>
<strong>Create Empty Project</strong>
<span>Creates an empty project.</span>
</div>
</div>

</div>
</section>

<section class="os-pm-section" id="savingloading-projects" markdown="1">
<div class="os-pm-section-head" markdown="0">
<div class="label">Project files</div>
<h2 id="savingloading-projects">Saving and Loading Projects</h2>
<p>Save project data to disk and open existing OptimalSlope project files.</p>
</div>
<div class="os-pm-section-body" markdown="1">

<div class="os-subtitle">Saving options</div>

1. To save using a specified file name, open the file menu and select **Save as**.
2. To save updates to the current working project, open the file menu and select **Save**.

<div class="os-subtitle">Loading an existing project</div>

- An existing project in `.cbf` format is imported by clicking **Open Project** in the file menu.
- An import operation in progress is indicated by the loading symbol in the status bar.
- Loading larger files can take longer than a minute depending on the machine and project size.

<div class="os-note" markdown="1">
<strong>File format</strong><br>
OptimalSlope project data is stored in a binary format: `.cbf`.
</div>

</div>
</section>

<section class="os-pm-section" id="importing-data" markdown="1">
<div class="os-pm-section-head" markdown="0">
<div class="label">Import data</div>
<h2 id="importing-data">Importing Data</h2>
<p>Import 3D stratigraphy, section geometry, water surfaces, and boundary surfaces into the project.</p>
</div>
<div class="os-pm-section-body" markdown="1">

<div class="os-subtitle">Importing Stratigraphy</div>

Import 3D stratigraphies to the project from the file menu:

- Select **Import Stratigraphy > required file format**.

<div class="os-subtitle">Importing Section</div>

Sections generated using third-party software can be imported directly without requiring section generation through the slicing tool.

- Select **Import Section > required file format**.

<div class="os-subtitle">Importing Water Surface</div>

A water surface can be imported and used to generate a water table boundary when creating a section. It can be used as a reference boundary when drawing the water table.

- Select **Import Surface > Phreatic > required file format**.

<div class="os-subtitle">Importing Boundary Surface</div>

A pit boundary surface can be imported and used to generate a trimmed version of a section so that it reflects an existing pushback of an open pit mine.

- Select **Import Surface > Boundary > required file format**.

<div class="os-tip" markdown="1">
<strong>Tip</strong><br>
It is advised to define names and colours of layers while generating model files. Otherwise, naming and colouring of model layers can be manually set in the Slope Optimiser GUI.
</div>

<div class="os-subtitle">Supported import file formats</div>

<table class="os-format-table">
<thead>
<tr>
<th>Format</th>
<th>Description</th>
<th>File extension</th>
</tr>
</thead>
<tbody>
<tr>
<td>DXF</td>
<td>Autodesk drawing exchange format</td>
<td>.dxf</td>
</tr>
<tr>
<td>BREP</td>
<td>Open Cascade native format</td>
<td>.brep</td>
</tr>
<tr>
<td>IGES</td>
<td>Older solid-based format</td>
<td>.iges</td>
</tr>
<tr>
<td>STEP</td>
<td>Exchange format for engineering models</td>
<td>.step</td>
</tr>
</tbody>
</table>

</div>
</section>

<section class="os-pm-section" id="creating-sections" markdown="1">
<div class="os-pm-section-head" markdown="0">
<div class="label">Cross-sections</div>
<h2 id="creating-sections">Creating Sections</h2>
<p>Use the slicing tool to create cross-sections from selected 3D shapes or stratigraphy models.</p>
</div>
<div class="os-pm-section-body" markdown="1">

The **Slicing** tool is used to create cross-sections from selected 3D shapes or stratigraphy models. It creates sections by cutting the selected geometry with a defined cutting plane.

Cross-sections can be created using one of the following cutting planes:

- **XY**
- **XZ**
- **YZ**

The section location is controlled by the global plane position coordinate, in metres.

For vertical cutting planes, such as **XZ** and **YZ**, the slicing tool also supports defining an **azimuth angle**. This allows vertical cross-sections to be created at different orientations.

<div class="os-action-card" markdown="0">
<img src="https://OptimalSlope.github.io/manual/assets/control-icons/content-cut-custom.png" alt="Slicing tool">
<div>
<strong>Slicing Tool</strong>
<span>Opens the slicing tool for creating cross-sections.</span>
</div>
</div>

<div class="os-tip" markdown="1">
<strong>Tip</strong>

- Cross-sections automatically inherit properties from their 3D parent stratigraphy.
- If properties are not defined before slicing, they can be added later at either the 3D model level or the individual section level.
- It is recommended to define bench properties and the strength model before creating cross-sections.
</div>

<div class="os-subtitle">Usage</div>

To create a section:

1. Select one or more shapes in the project.
2. Click the **Slicing** button on the toolbar, or right-click the selected shape and choose the cross-section option.
3. Select the cutting plane: **XY**, **XZ**, or **YZ**.
4. Specify the position of the cutting plane.
5. If using a vertical plane, specify the azimuth angle if required.
6. Click **Slice**.

<div class="os-include-frame" markdown="1">
{% include slicing.html %}
</div>

<div class="os-subtitle">Cross-section example</div>

<div class="os-include-frame" markdown="1">
{% include slice.html %}
</div>

</div>
</section>

<section class="os-pm-section" id="trim-section-to-boundary-surface" markdown="1">
<div class="os-pm-section-head" markdown="0">
<div class="label">Boundary trimming</div>
<h2 id="trim-section-to-boundary-surface">Trim Section to Boundary Surface</h2>
<p>Use a boundary surface to constrain or trim a section so it reflects current or planned excavation limits.</p>
</div>
<div class="os-pm-section-body" markdown="1">

<div class="os-subtitle">Boundary Surface</div>

A **boundary surface** is a closed and continuous surface used to constrain or trim a section. In geological and mining workflows, a boundary surface may represent features such as:

- the edge of an open pit,
- a pushback surface,
- excavation limits,
- fault surfaces,
- model extents.

Boundary surfaces can be imported into the project and used to create a trimmed version of an existing section. This is useful when the original 3D stratigraphy model is available, but the section needs to reflect the current or planned excavation limits.

Trimming at the section level is often faster and simpler than modifying the entire 3D model. It allows the cross-section to better represent real-world mining conditions while keeping the workflow efficient.

<div class="os-subtitle">Example</div>

<div class="os-include-frame" markdown="1">
{% include boundary_surface.drawio.html %}
</div>

<div class="os-subtitle">Usage</div>

To trim a section using a boundary surface:

1. Select the required cross-section in the left project panel.
2. Make sure the boundary surface has already been imported into the project.
3. In the right properties panel, click **Trim Slice**.
4. Review the updated section geometry after trimming.

<div class="os-subtitle">Before Trimming</div>

<div class="os-include-frame" markdown="1">
{% include before_trimming.drawio.html %}
</div>

This example shows a section created from the original stratigraphy model.

<div class="os-subtitle">After Trimming</div>

<div class="os-include-frame" markdown="1">
{% include after_trimming.drawio.html %}
</div>

The resulting section is updated using the boundary surface, so the section better reflects the excavation or pushback limits.

</div>
</section>

<section class="os-pm-section" id="exporting-project-data" markdown="1">
<div class="os-pm-section-head" markdown="0">
<div class="label">Export data</div>
<h2 id="exporting-project-data">Exporting Project Data</h2>
<p>Export selected geometry or cross-section data for downstream modelling and simulation workflows.</p>
</div>
<div class="os-pm-section-body" markdown="1">

<div class="os-subtitle">Exporting 2D/3D shapes</div>

Selected shapes on the visualiser can be exported by clicking **Export** in the file menu.

<div class="os-subtitle">Supported export file formats</div>

<table class="os-format-table">
<thead>
<tr>
<th>Format</th>
<th>Description</th>
<th>File extension</th>
</tr>
</thead>
<tbody>
<tr>
<td>DXF</td>
<td>Autodesk drawing exchange format</td>
<td>.dxf</td>
</tr>
<tr>
<td>BREP</td>
<td>Open Cascade native format</td>
<td>.brep</td>
</tr>
<tr>
<td>IGES</td>
<td>Older solid-based format</td>
<td>.iges</td>
</tr>
<tr>
<td>STEP</td>
<td>Exchange format for engineering models</td>
<td>.step</td>
</tr>
<tr>
<td>STL</td>
<td>Stereolithography mesh</td>
<td>.stl</td>
</tr>
<tr>
<td>VRML</td>
<td>VRML Web 3D format</td>
<td>.vrml</td>
</tr>
<tr>
<td>IMAGE</td>
<td>Image format</td>
<td>.bmp</td>
</tr>
</tbody>
</table>

<div class="os-subtitle">Exporting cross-section data</div>

A project can contain multiple cross-sections. Each cross-section can be considered as an individual simulation project containing the properties required for the simulation.

Properties describing an individual slice and its layers can be exported in **JSON** format:

1. Select a cross-section.
2. In the **Property View** panel, select **Export** under the tools section.

</div>
</section>

</div>
