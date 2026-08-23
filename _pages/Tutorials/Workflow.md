---
title: Simulation Workflow
author: Dainius Jenkus
date: 2010-06-30
category: Tutorials
layout: post
nav_order: 30
---

<style>
.os-workflow-page {
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

.os-workflow-page * {
  box-sizing: border-box;
}

.os-workflow-hero {
  position: relative;
  overflow: hidden;
  margin: 0 0 26px;
  padding: 38px;
  border-radius: 28px;
  background:
    radial-gradient(circle at 88% 10%, rgba(241, 107, 33, 0.36), transparent 30%),
    linear-gradient(135deg, #062f50, var(--blue), var(--blue2));
  color: white;
  box-shadow: var(--shadow2);
}

.os-workflow-hero::after {
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

.os-workflow-hero .kicker {
  position: relative;
  z-index: 1;
  color: #ffd9c4;
  font-size: 12px;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.os-workflow-hero h1 {
  position: relative;
  z-index: 1;
  margin: 10px 0 12px;
  color: white;
  font-size: clamp(38px, 5vw, 64px);
  line-height: 0.98;
  letter-spacing: -0.055em;
}

.os-workflow-hero p {
  position: relative;
  z-index: 1;
  max-width: 820px;
  margin: 0;
  color: rgba(255, 255, 255, 0.86);
  font-size: 18px;
  line-height: 1.5;
}

.os-workflow-nav {
  display: grid;
  grid-template-columns: repeat(3, minmax(180px, 1fr));
  gap: 14px;
  margin: 0 0 30px;
}

.os-workflow-nav a {
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

.os-workflow-nav a:hover {
  transform: translateY(-3px);
  border-color: rgba(241, 107, 33, 0.36);
  box-shadow: 0 18px 42px rgba(20, 35, 50, 0.14);
  text-decoration: none;
}

.os-workflow-nav .step {
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

.os-workflow-nav strong {
  display: block;
  margin-bottom: 6px;
  color: var(--blue);
  font-size: 17px;
}

.os-workflow-nav span {
  display: block;
  color: var(--muted);
  font-size: 14px;
  line-height: 1.4;
}

.os-workflow-step {
  margin: 32px 0;
  border: 1px solid var(--line);
  border-radius: 26px;
  background: white;
  box-shadow: var(--shadow);
  overflow: hidden;
}

.os-workflow-step-head {
  padding: 24px 28px 18px;
  border-bottom: 1px solid rgba(20, 35, 50, 0.08);
  background:
    radial-gradient(circle at 96% 0%, rgba(241, 107, 33, 0.12), transparent 28%),
    radial-gradient(circle at 0% 0%, rgba(10, 78, 118, 0.11), transparent 34%),
    linear-gradient(180deg, #ffffff, #f6fafc);
}

.os-workflow-step-head .label {
  color: var(--orange);
  font-weight: 1000;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-size: 12px;
}

.os-workflow-step-head h2 {
  margin: 8px 0 8px;
  color: var(--ink);
  font-size: clamp(26px, 3vw, 40px);
  line-height: 1.05;
  letter-spacing: -0.04em;
}

.os-workflow-step-head p {
  margin: 0;
  max-width: 880px;
  color: var(--muted);
  line-height: 1.5;
}

.os-workflow-step-body {
  padding: 24px 28px 30px;
}

.os-workflow-page video,
.os-workflow-page img {
  max-width: 100%;
  border-radius: 18px;
  box-shadow: 0 14px 34px rgba(20, 35, 50, 0.13);
}

.os-workflow-page video {
  background: #0f1720;
}

.os-workflow-image-pair {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px;
  align-items: start;
  margin: 22px 0;
}

.os-workflow-image-pair figure {
  margin: 0;
  text-align: center;
}

.os-workflow-image-pair img {
  display: block;
  width: 100%;
  height: auto;
}

.os-workflow-image-pair figcaption {
  margin-top: 9px;
  color: var(--muted);
  font-size: 13px;
  line-height: 1.4;
}

.os-workflow-page p[align="center"] {
  margin: 22px 0;
}

.os-workflow-page h3,
.os-workflow-page h4,
.os-workflow-page h5 {
  color: var(--blue);
}

.os-workflow-page ul,
.os-workflow-page ol {
  line-height: 1.55;
}

.os-note,
.os-warning {
  margin: 18px 0;
  padding: 16px 18px;
  border-radius: 16px;
  line-height: 1.5;
}

.os-note {
  border: 1px solid rgba(241, 107, 33, 0.28);
  background: #fff7f1;
}

.os-warning {
  border: 1px solid rgba(197, 73, 50, 0.28);
  background: #fff3f0;
}

.os-note strong,
.os-warning strong {
  color: var(--blue);
}

.os-checklist {
  display: grid;
  gap: 10px;
  margin: 18px 0;
}

.os-check {
  padding: 13px 15px;
  border: 1px solid var(--line);
  border-radius: 14px;
  background: linear-gradient(180deg, #ffffff, #f8fbfd);
}

.os-check strong {
  color: var(--blue);
}


.os-field-table {
  width: 100%;
  border-collapse: collapse;
  margin: 16px 0 22px;
  overflow: hidden;
  border: 1px solid var(--line);
  border-radius: 16px;
  box-shadow: 0 8px 22px rgba(20, 35, 50, 0.06);
}

.os-field-table th,
.os-field-table td {
  padding: 12px 14px;
  border-bottom: 1px solid rgba(20, 35, 50, 0.08);
  text-align: left;
  vertical-align: top;
}

.os-field-table th {
  color: var(--blue);
  background: #f0f6fa;
  font-weight: 1000;
}

.os-field-table tr:last-child td {
  border-bottom: 0;
}

@media (max-width: 900px) {
  .os-workflow-nav {
    grid-template-columns: repeat(2, minmax(180px, 1fr));
  }
}

@media (max-width: 650px) {
  .os-workflow-hero {
    padding: 28px;
  }

  .os-workflow-nav {
    grid-template-columns: 1fr;
  }

  .os-workflow-step-body {
    padding: 20px;
  }

  .os-workflow-image-pair {
    grid-template-columns: 1fr;
  }
}
</style>

<div class="os-workflow-page" markdown="1">

<section class="os-workflow-hero" markdown="0">
<div class="kicker">Simulation Workflow Tutorial</div>
<p>Follow the complete Slope Optimiser workflow, from importing a section and defining properties to running simulations, reviewing results, exporting profiles, and preparing downstream models.</p>
</section>

 

<div class="os-workflow-nav" markdown="0">
<a href="#importing-sections"><span class="step">1</span><strong>Import Sections</strong><span>Start from DXF sections or slice sections from 3D stratigraphy.</span></a>
<a href="#defining-properties"><span class="step">2</span><strong>Define Properties</strong><span>Assign bench, rock, general, and optional simulation properties.</span></a>
<a href="#running-simulations"><span class="step">3</span><strong>Run Simulations</strong><span>Configure cloud simulation inputs and check geometry before running.</span></a>
<a href="#exporting-output-profile-to-dxf"><span class="step">4</span><strong>Export DXF</strong><span>Export the optimised output profile for external workflows.</span></a>
<a href="#importing-output-into-rockscience-rs2"><span class="step">5</span><strong>Import into RS2</strong><span>Prepare the exported profile for Rocscience RS2 stability analysis.</span></a>
<a href="#exporting-the-section-block-model"><span class="step">6</span><strong>Export Block Model</strong><span>Create a section block model from 3D stratigraphy and optimised slope angles.</span></a>
<a href="#import-block-model-into-datamine"><span class="step">7</span><strong>Import Block Model into Datamine</strong><span>Import the exported block model CSV and combine slope-angle data.</span></a>
</div>

Follow these steps to configure a selected section in Slope Optimiser and run a simulation:

<section class="os-workflow-step" id="importing-sections" markdown="1">
<div class="os-workflow-step-head" markdown="0">
<div class="label">Step 1</div>
<h2 id="importing-sections">Importing Sections</h2>
<p>Start by importing an existing DXF section or creating sections from a 3D stratigraphy model using the slicing tool.</p>
</div>
<div class="os-workflow-step-body" markdown="1">

<p align="center">
  <video controls width="100%" preload="metadata">
    <source src="{{ '/assets/videos/tutorials/Importing-Sections.mp4' | relative_url }}" type="video/mp4">
    Your browser does not support the video tag.
  </video>
</p>

We recommend importing sections directly if they are already defined in DXF files. This straightforward method avoids importing large 3D model files solely to create sections.

In Slope Optimiser, you have two methods available for defining cross-sections:

#### Importing 3D Solid/Wireframe and Making Sections
You can import a 3D solid or wireframe (`File -> Import Stratigraphy -> DXF`) and then use the slicing tool to create a section. For more information, refer to [Creating Sections]({{ '/pages/project/3-project-management/#creating-sections' | relative_url }}).

In the current slicing tool, click **Select visible models**, choose the **XY**, **XZ**, or **YZ** plane, and position the live clipping plane. Drag the arrow handle to move the plane. For a vertical plane, drag the circular rotation handle to rotate the plane and change its azimuth. Review the live clipped preview before clicking **Slice**.

#### Directly Importing DXF Section File
Alternatively, you can directly import a DXF section file using the pathway: `File -> Import Section -> DXF`. 
#### Use Quality Input Data
Ensure your DXF model data meets general quality standards to obtain reliable simulation results. For guidance on preparing and checking data, refer to [Data Preparation]({{ '/pages/Data%20Suitability/7-data/' | relative_url }}).

---

</div>
</section>

<section class="os-workflow-step" id="defining-properties" markdown="1">
<div class="os-workflow-step-head" markdown="0">
<div class="label">Step 2</div>
<h2 id="defining-properties">Defining Properties</h2>
<p>Define bench, rock, general, and optional properties before running a simulation.</p>
</div>
<div class="os-workflow-step-body" markdown="1">

<p align="center">
  <video controls width="100%" preload="metadata">
    <source src="{{ '/assets/videos/tutorials/Simulation-Inputs.mp4' | relative_url }}" type="video/mp4">
    Your browser does not support the video tag.
  </video>
</p>

#### Define Bench Properties
Specify properties for benches if your cross-section includes them:
- **Unit Weight**: Weight of material per cubic metre.
- **Bench Face Angle**: Inclination angle of bench faces.
- **Min Berm Width**: Minimum width of berms between benches.
- **Number of Benches**: Total number of benches.
- **Bench Height**: Height of each bench.

#### Set Rock Properties
Choose between Hoek-Brown and Mohr-Coulomb models and set properties like:
- **Strength characteristics**.
- **Friction parameters**.

<p align="center">
  <img src="https://OptimalSlope.github.io/manual/assets/tutorial/layer_properties.png" alt="Layer properties"/>
</p>

Rock properties are set separately for each section layer. Alternatively, if 3D models are used to generate sections, properties can be defined initially at the 3D model level. Sections created using the slicing tool automatically inherit these properties from their parent 3D models.

#### General Section Properties
Set general properties for the section:
- **Slope Anchor**: Choose whether the crest or toe is the fixed endpoint of the design.
- **Crest anchor**: Define the crest position and target slope height.
- **Toe anchor**: Define the toe horizontal position and elevation. The software calculates the slope height and bench-compatible height.
- **Target FoS (Factor of Safety)**.
- **Failure Direction**: Select right-to-left or left-to-right slope generation.

<div class="os-workflow-image-pair">
  <figure>
    <img src="{{ '/assets/tutorial/general_properties.png' | relative_url }}" alt="Section properties and Crest slope-anchor settings"/>
    <figcaption>Section properties and slope anchor</figcaption>
  </figure>
  <figure>
    <img src="{{ '/assets/tutorial/general_properties_slope.png' | relative_url }}" alt="Failure direction and slope-geometry settings"/>
    <figcaption>Failure direction and slope geometry</figcaption>
  </figure>
</div>

The bench, rock, and general properties described above must be provided before running a simulation. The optional properties listed below can be added if required.






#### Optional Properties
- **Water**: Water-table location and pressure method, if applicable.
- **Water Pressure**: Use hydrostatic pressure or apply the phreatic-line inclination correction.
- **Loads**: Add line loads or uniform/linear distributed loads by selecting their positions on the section topography.
- **Roads**: Presence and properties of roads on or near the slope.
- **Tension Crack Properties**: Characteristics of any tension cracks.
- **Faults**: Geometry and material properties of faults, if applicable. For detailed information, refer to [Faults]({{ '/pages/properties/6-properties/#faults' | relative_url }}).

<p align="center">
  <img src="{{ '/assets/tutorial/optional_properties.png' | relative_url }}" alt="Optional Properties card with expandable Tension Crack, Faults, Loads, Roads, and Water sections"/>
</p>

Ensure that all values accurately reflect the physical and mechanical characteristics of the materials and the specific cross-section.

For detailed guidance, refer to [Properties]({{ '/pages/properties/6-properties/' | relative_url }}).

---

</div>
</section>

<section class="os-workflow-step" id="running-simulations" markdown="1">
<div class="os-workflow-step-head" markdown="0">
<div class="label">Step 3</div>
<h2 id="running-simulations">Running Simulations</h2>

{% include looping-video.html
   src="/assets/videos/animations/profile-on-rockface.mp4"
   poster="/assets/videos/animations/profile-on-rockface.jpg"
   title="An optimised profile over a real rock cutting"
   caption="The stepped blue line is the bench geometry the simulation produces; the orange segments mark the local face angles." %}
<p>Configure results storage, the user profile, input checks, and the cloud simulation process.</p>
</div>
<div class="os-workflow-step-body" markdown="1">

**Overview**

Slope Optimiser runs computationally intensive simulations in the cloud to avoid overloading local resources or affecting the performance of the user's computer.

After the simulation problem has been defined with the required inputs, use the simulation window to run the analysis and obtain results.


<p align="center">
  <video controls width="100%" preload="metadata">
    <source src="{{ '/assets/videos/tutorials/Running-Simulation.mp4' | relative_url }}" type="video/mp4">
    Your browser does not support the video tag.
  </video>
</p>

**Configuring the user profile**
* To run simulations in the cloud, configure the user profile under **Tools > Settings > Account**.



After the input data is defined, simulations can be started in the simulation window. Follow these steps before starting a simulation:
1. **Select a section of interest**. Select any section with the required properties.
2. **Choose the results location**:
   - **Automatic** creates a section simulation folder beside the saved project when the simulation starts.
   - **Custom** uses a folder selected by the user.
   Automatic storage requires the project to be saved as a `.cbf` file first. Custom folder names may contain only letters, numbers, hyphens, and underscores.
3. **Make sure the user profile is configured**. When running a simulation for the first time, go to `Tools -> Settings -> Account`, enter the provided credentials, and click **Configure**. This ensures that the simulation can run in the cloud.

<p align="center">
  <img src="https://OptimalSlope.github.io/manual/assets/tutorial/profile_setup.png" alt="Profile setup"/>
</p>



#### Common Simulation Input Checks

Before submitting a simulation, Slope Optimiser opens the **Simulation Check** panel when required inputs need attention. Each issue includes a description and a **Fix** button. Selecting **Fix** opens the relevant section or layer in the **Properties** panel and highlights the field that needs input. After correcting the values, click **Check Again**.

The structured check covers:

- the active crest or toe anchor and its coordinates;
- slope height where crest-anchor mode is used;
- target FoS and bench definition;
- required bench and rock properties;
- the selected strength model and its required parameters;
- cohesion and friction angle for fault layers;
- load positions, magnitudes, endpoints, and overlapping loads.

Geometry and groundwater checks that require native model processing or a user decision can still appear later while the simulation input is generated. Review those messages before choosing whether to continue.

#### Section Geometry Checks: Gaps and Overlaps

Before running a simulation, Slope Optimiser analyses the input section geometry and checks for common geometry inconsistencies, including **gaps** and **overlaps**.

<p align="center">
  <img src="https://OptimalSlope.github.io/manual/assets/docs_images/gap_overlap_warning.png" alt="Invalid section geometry warning"/>
</p>

- **Gaps** are undefined regions between section boundaries or layer wires where material cannot be assigned clearly.
- **Overlaps** are conflicting regions where two or more material areas occupy the same space.

Small isolated gaps may not significantly affect the simulation result, especially if they occur away from the expected failure region. However, larger gaps or frequent gaps throughout the section can reduce the reliability of the model and may lead to less meaningful results.

Overlaps should be reviewed carefully, especially when they are easily visible in the section geometry. Overlapping regions can affect the material order assignment and may influence how the software estimates the failure mechanism.

To view detected gap and overlap markers, open the **Visualiser**. Gap markers are shown in red, while overlap markers are shown in blue.

<p align="center">
  <img src="https://OptimalSlope.github.io/manual/assets/docs_images/gap_overlap_visual.png" alt="Gaps and overlaps shown in the visualiser"/>
</p>

##### Geometry Review Checklist

Before proceeding with a simulation, check the following:

- **Review detected markers**
  - Open the Visualiser to inspect red and blue markers.
  - Red markers indicate detected gap points.
  - Blue markers indicate detected overlap points.

- **Check the size and frequency of gaps**
  - Small, isolated gaps may be acceptable in some cases.
  - Large or repeated gaps should be repaired before running the simulation.
  - Pay particular attention to gaps near the slope face, slope toe, crest, or expected failure region.

- **Check visible overlaps**
  - Review any overlaps that are clearly visible in the geometry.
  - Correct overlaps where material boundaries cross or conflict.
  - Make sure overlapping layers do not create ambiguous material regions.

- **Check imported DXF quality**
  - Ensure section boundaries are clean and continuous.
  - Remove duplicate or unnecessary lines where possible.
  - Avoid very small disconnected segments or sliver regions.
  - Confirm that layer wires represent the intended geological structure.

- **Decide whether to continue**
  - If only a few minor markers are detected and they are away from the critical region, it may be reasonable to continue.
  - If many markers are detected, or if the issues are near the slope profile or likely failure zone, repair the geometry first.

**Recommendation:**  
For reliable simulation results, review and repair significant gaps and visible overlaps before proceeding. Clean section geometry improves material assignment and gives the optimiser a more reliable basis for estimating the optimal slope profile.

#### Slope Anchor and OSA Search Region

<figure class="os-svg-figure">
  <img src="{{ '/assets/docs_images/slope-anchor-modes.svg' | relative_url }}"
       alt="Crest anchor fixes the upper endpoint and uses a target slope height; toe anchor fixes the lower endpoint and calculates the slope height. In both, the minimum and maximum OSA bound a green search region the optimiser explores.">
  <figcaption>The active slope anchor decides which endpoint is fixed and how the slope height is obtained.</figcaption>
</figure>

#### How should I choose the crest point?

In **Crest** anchor mode, the crest point defines the uppermost starting location of the slope. Its position and the target slope height directly affect how the slope geometry is generated during optimisation.

If the crest is placed **too close to the outer edge** of the section or terrain, the calculated slope (based on the **initial maximum overall slope angle**) may project outward beyond the existing ground surface. In this case, parts of the slope will extend into **open space** — effectively creating geometry that intersects “thin air.” This can lead to unrealistic results and may cause instability or inaccuracies in subsequent simulations.

To avoid this, position the crest point **further inland**, so that:

- The entire slope profile remains within the defined ground surface.
- The slope toe and face are generated against actual material, not empty space.
- The optimisation process has valid geometry to work with in all iterations.

When the crest point is set correctly, the section preview shows the preliminary **minimum** and **maximum Overall Slope Angle (OSA)** limits. These are indicated by the **green triangular search region**. This triangle represents the area where the simulation will search for the optimal slope profile shape (see picture below).

<p align="center">
  <img src="https://OptimalSlope.github.io/manual/assets/docs_images/min_max_osa.png" alt="Profile setup"/>
</p>

The preliminary OSA limits are calculated from the active slope anchor and the section properties. If the anchor and properties result in a very narrow difference between the minimum and maximum OSA, the simulation has only a limited search range. In this case, the optimiser will not be able to explore many possible slope profiles, which may reduce the quality or usefulness of the optimisation result.

<p align="center">
  <img src="https://OptimalSlope.github.io/manual/assets/docs_images/min_max_limited.png" alt="Profile setup"/>
</p>

A wider, realistic OSA search range gives the optimiser more flexibility to investigate alternative slope shapes while remaining within the valid section geometry.

**Practical Tips:**

- Position the crest point slightly further inside the section boundary than you think is necessary.
- Check that the green triangular search region remains within the available ground/material area.
- Avoid crest point positions that create a very narrow minimum-to-maximum OSA range.
- If the green triangle is too narrow or extends outside the model, adjust the crest point or review the section properties before running the simulation.

#### How should I define a toe anchor?

Use **Toe** anchor mode when the lower endpoint of the design is known. Enter or select both the toe horizontal position and its elevation. The application calculates the slope height and bench-compatible height from the resolved toe.

The toe must remain inside the section, at or below the topography, and above the section floor. Review the estimated OSA range after every toe adjustment. Changing the toe may invalidate the existing water table; redraw or re-import it if the application removes it.


#### Starting Simulations 

1. Switch to the **Simulation** tab at the bottom of the interface.
2. Under **Cross-sections**, select the desired cross-section.
3. Select **Automatic** or **Custom** under **Simulation results location**. If using **Custom**, click **Select folder**.
4. Click **Start**.
5. Resolve any items listed under **Simulation Check**, then click **Check Again**.
6. When the check passes, click **Start** again to begin submission.
7. Continue through any geometry or groundwater warnings shown while the input is generated.
8. Enter the configured username when requested.
9. Use **Fetch results** to download completed results or view the progress of a running simulation.

#### Monitoring Node Status and Output

The **Simulation Output** area displays a **Node status** summary when node information is available. Open the panel to review whether individual nodes are preparing, queued, running, complete, or failed.

- Select a node to display that node's output in the log area.
- Click **Show main output** to return to the main simulation output.
- Keep **Follow output** selected to scroll automatically as new log lines arrive. Clear it when reviewing an earlier part of the log.
- Use the search field and **Next**, or press **Enter**, to move through matching log entries.
- Click **Copy** to copy the displayed output.

#### Creating Different Scenarios  

To test different design or material scenarios for the same cross-section, right-click the section in the project tree and select **Duplicate**. This creates an independent copy of the selected section, allowing you to modify simulation inputs without changing the original section.

<p align="center">
  <img src="https://OptimalSlope.github.io/manual/assets/docs_images/dublicate_section.png" alt="Duplicate section"/>
</p>

Typical scenario changes may include:

- **Slope geometry** — adjust the slope profile, crest position, or slope height.
- **Bench settings** — test different bench heights, berm widths, or bench face angles.
- **Material properties** — compare different rock strength parameters or material models.
- **Faults** — evaluate the influence of different fault positions, orientations, or fault material properties.
- **Water table** — evaluate dry, wet, or alternative groundwater conditions.
- **Loads or roads** — assess line loads, distributed loads, or alternative road positions.

When running simulations for duplicated sections, make sure each scenario has either:

- **A unique section name**, for example:
  - `Section_1_BaseCase`
  - `Section_1_WetCondition`
  - `Section_1_LowStrength`

or:

- **A different results folder** for each scenario.

This helps avoid conflicts between simulation outputs, logs, and exported result files. 
**Note:** When rerunning a section with corrected parameters, select **Yes** to overwrite the existing input data when starting the simulation.

#### Transferring Properties to Another Section

To reuse an existing setup on a newly imported section, open **Tools > Settings > Transfer Section Properties**. Select the section that should receive the properties, click **Transfer Section Properties**, and then choose the source section.

Review the property groups and layer mapping before confirming the transfer. Layers with the same name are matched automatically; unmatched layers can be mapped manually or excluded. Geometry-dependent data, including crest and toe coordinates, slope height, water-line points, roads, loads, simulation folders, plots, results, and result logs, is not transferred.

The receiving section must not have an active or submitted simulation. Fetch or stop that simulation before transferring properties.




#### Results

Slope Optimiser returns an interactive **Output Plot** showing the estimated optimal slope profile. In the legend, the green result line is labelled **Optimal profile for mine planning**. The plot toolbar can be used to:

- fit the view to the plot data using the first button on the left;
- show or hide the legend;
- choose individual visible plot items or select **Show all**;
- switch the embedded 2D plot between light and dark backgrounds;
- copy the plot to the clipboard;
- save the plot as a PNG or SVG image;
- open a detached plot window.

Detached plot windows are static snapshots and can be kept open side by side to compare cross-sections. From a detached window, the same cross-section can be opened in another window. Legend visibility, plot-item visibility, fit, copy, and save controls remain available.

The estimated profile coordinates and angles are also displayed in the logs, and the results folder contains the generated plots and optimal-profile data. Under **Output Tools**, use **Create cross-section from output** to add the optimised result as a new section in the project.



#### An example of input and output slope profile

{% include input_output.drawio.html %}

#### An example of 2D output slope profile

{% include output_2d.drawio.html %}

 


- **Note:** Results in the 2D plot are always shown as if the slope is on the right side and are mirrored if the slope is on the left. When exporting the output profile to DXF or visualising it in 3D, the resulting slope profile is shown in its original position.


</div>
</section>

<section class="os-workflow-step" id="exporting-output-profile-to-dxf" markdown="1">
<div class="os-workflow-step-head" markdown="0">
<div class="label">Step 4</div>
<h2 id="exporting-output-profile-to-dxf">Exporting Output Profile to DXF</h2>
<p>Export the optimised slope profile using global or local coordinate options.</p>
</div>
<div class="os-workflow-step-body" markdown="1">

Simulation results are shown in the 2D plot window and recorded in the logs. The estimated slope profile can be exported to DXF and later imported into other software.


<p align="center">
  <img src="https://OptimalSlope.github.io/manual/assets/tutorial/export.png" alt="Export output"/>
</p>

- Navigate to the tools section in the simulation window (`Export output profile to DXF`).
- Select one of the export configurations:
    - `Global` - the exported profile coordinates use the original global coordinate system. This is useful when the result is visualised relative to the original section or 3D models.
    - `Local XZ` - the exported profile coordinates are aligned with the XZ plane (the Y coordinate is fixed).
    - `Local XY` - exported coordinates are flattened, i.e., the section is on the XY plane and is horizontal (Z coordinate is fixed). This option is useful when exporting to software such as Rocscience RS2.


</div>
</section>

<section class="os-workflow-step" id="importing-output-into-rockscience-rs2" markdown="1">
<div class="os-workflow-step-head" markdown="0">
<div class="label">Step 5</div>
<h2 id="importing-output-into-rockscience-rs2">Importing Output into Rocscience RS2</h2>
<p>Import the exported DXF profile into RS2 and complete the external boundary definition manually.</p>
</div>
<div class="os-workflow-step-body" markdown="1">

Since results from Slope Optimiser may be used in RS2 for stability analysis, this step explains how to import Slope Optimiser output. Several steps are required to import an output profile DXF file into RS2.
##### Step 1: Export output profile to DXF from our software
 - **Export the output profile as DXF** (as explained in Step 4) using the `Local XY` export method. This is required because RS2 expects a 2D section, so the coordinates are flattened to place the section horizontally on the XY plane.

<!-- ##### Step 2: Modify the DXF File in AutoCAD
- **Open the DXF file in AutoCAD.**
- **Convert Block References**: Use the `EXPLODE` command to convert all block references into simpler entities. This is crucial as RS2 cannot handle block references in the DXF.
- **Save the File**: After exploding the blocks, save the file again as an ASCII DXF 2000 format. -->

**Note**: Other software such as Rhino can be used to achieve this operation.
##### Step 2: Import into RS2
- **Import the DXF File**: Open RS2 and import the modified DXF file.
- **Set Boundary Types**: RS2 assigns Boundary Types based on layer names. Ensure your layer names match the expected Boundary Types in RS2. If a layer name does not match, it will be set to 'Not Assigned'.
- **Define the model**: For a slope model, set the boundary type to 'Material'. Note that the 'External' role should not be used for the top and bottom portions of the slope, which should be defined by two different polylines. RS2 expects the external boundary to define the complete outer model boundary.

At the moment, Slope Optimiser does not export the complete RS2 external boundary by default. The external boundary must be added or drawn manually in RS2 after importing the DXF.

By following these steps, you can successfully prepare and import a DXF file into RS2, ensuring that all elements are correctly interpreted by the software.


</div>
</section>

<section class="os-workflow-step" id="exporting-the-section-block-model" markdown="1">
<div class="os-workflow-step-head" markdown="0">
<div class="label">Step 6</div>
<h2 id="exporting-the-section-block-model">Exporting the Section Block Model</h2>
<p>Export a block model for sections associated with 3D stratigraphy using optimised slope angles.</p>
</div>
<div class="os-workflow-step-body" markdown="1">

If the project contains 3D stratigraphy, the section block model can be exported from the simulation window using the **Export block model** tool.

<p align="center">
  <img src="https://OptimalSlope.github.io/manual/assets/docs_images/block_model_export.png" alt="Export output"/>
</p>

This export creates a block model for the selected section using the optimised slope angles from the simulation result. The exported model can be used for further visualisation, checking, or downstream modelling workflows.

Before exporting, define the block dimensions:

- **dX** — block size in the X direction.
- **dY** — block size in the Y direction.
- **dZ** — block size in the Z direction.

This feature is available when the section is generated from, or associated with, a 3D stratigraphy model. If the project only contains an imported 2D section without 3D stratigraphy, there is no 3D block model available to export.

Choose block dimensions that are appropriate for the scale of the model. Smaller block sizes provide a more detailed representation but may produce larger output files, while larger block sizes reduce file size but give a coarser model.
</div>
</section>


<section class="os-workflow-step" id="import-block-model-into-datamine" markdown="1">
<div class="os-workflow-step-head" markdown="0">
<div class="label">Step 7</div>
<h2 id="import-block-model-into-datamine">Import Block Model into Datamine</h2>
<p>Import the block model CSV exported from OptimalSlope into Datamine, assign the correct block model fields, and combine the slope-angle output with the original block model.</p>
</div>
<div class="os-workflow-step-body" markdown="1">

This step explains how to import an OptimalSlope block model export into Datamine. The workflow is split into two parts:

- Import the main block geometry and save it with a clear base-model name, for example `Block_Model_XYZ`.
- Import the OptimalSlope slope-angle output, save it with a clear slope-model name, and combine it with the original model using `ADDMOD`.

<div class="os-callout os-callout--important" markdown="1">
The CSV should contain the block dimensions, block centre coordinates, and any extra attributes such as density, grade, rock type, lithology, or slope angle.
</div>

#### 1. Import an external block model file

In Datamine, select the option to import an **External** file.

<p align="center">
  <img src="{{ '/assets/datamine-import/datamine-import-step-01.png' | relative_url }}" alt="Datamine external file import option">
</p>

In the **Data Import** window:

1. Select **Text** as the driver category.
2. Select **Block Model** as the data type.
3. Click **OK**.

<p align="center">
  <img src="{{ '/assets/datamine-import/datamine-import-step-02.png' | relative_url }}" alt="Datamine data import dialog for text block model">
</p>

#### 2. Specify model parameters

Specify the block model parameters:

- **Model Origin** — enter the X, Y, and Z origin values.
- **Block Size** — enter the X, Y, and Z block dimensions.
- **Number of Blocks** — enter the number of blocks in X, Y, and Z.

<p align="center">
  <img src="{{ '/assets/datamine-import/datamine-import-step-03.png' | relative_url }}" alt="Datamine specify model parameters dialog">
</p>

Click **OK** to start the import wizard.

#### 3. Configure the text wizard

In **Text Wizard 1 of 3**:

1. Set **Data Type** to **Delimited**.
2. Set **Header Row** to `1`.
3. Check that the preview shows the expected CSV columns.
4. Click **Next**.

<p align="center">
  <img src="{{ '/assets/datamine-import/datamine-import-step-04.png' | relative_url }}" alt="Datamine text wizard data type and header row settings">
</p>

In **Text Wizard 2 of 3**:

1. Select **Comma** as the delimiter.
2. Confirm that each CSV field is separated into its own column.
3. Click **Next**.

<p align="center">
  <img src="{{ '/assets/datamine-import/datamine-import-step-05.png' | relative_url }}" alt="Datamine text wizard CSV delimiter settings">
</p>

#### 4. Assign Datamine field types

In **Text Wizard 3 of 3**, assign the field type for each imported column.

Use the following mapping for the main block model:

<table class="os-field-table">
<thead>
<tr><th>CSV field</th><th>Datamine field type</th><th>Data type</th><th>Purpose</th></tr>
</thead>
<tbody>
<tr><td><code>X_dim</code></td><td><code>XINC</code></td><td>Numeric</td><td>Block size in the X direction.</td></tr>
<tr><td><code>Y_dim</code></td><td><code>YINC</code></td><td>Numeric</td><td>Block size in the Y direction.</td></tr>
<tr><td><code>Z_dim</code></td><td><code>ZINC</code></td><td>Numeric</td><td>Block size in the Z direction.</td></tr>
<tr><td><code>X_coord</code></td><td><code>X</code></td><td>Numeric</td><td>Block centre X coordinate.</td></tr>
<tr><td><code>Y_coord</code></td><td><code>Y</code></td><td>Numeric</td><td>Block centre Y coordinate.</td></tr>
<tr><td><code>Z_coord</code></td><td><code>Z</code></td><td>Numeric</td><td>Block centre Z coordinate.</td></tr>
</tbody>
</table>

Additional fields may include:

- **Density**
- **Grades**
- **Rock Type**
- **Lithology**
- Other project-specific attributes

<p align="center">
  <img src="{{ '/assets/datamine-import/datamine-import-step-06.png' | relative_url }}" alt="Datamine text wizard field type assignment">
</p>

Click **Finish**. The block model should be displayed in Datamine.

<p align="center">
  <img src="{{ '/assets/datamine-import/datamine-import-step-07.png' | relative_url }}" alt="Imported block model displayed in Datamine">
</p>

Save the imported Datamine block model with a clear name. In this tutorial, the suggested example name is:

```text
Block_Model_XYZ
```

You may use another valid Datamine file name, as long as you can clearly identify it later as the base block model.

#### 5. Import the OptimalSlope slope-angle model

Repeat the import workflow for the model that contains the OptimalSlope slope-angle output.

When assigning fields, map the coordinate and block-size fields as before. The slope-angle field should be imported as:

<table class="os-field-table">
<thead>
<tr><th>Field</th><th>Datamine field type</th><th>Data type</th></tr>
</thead>
<tbody>
<tr><td><code>slope_angle</code></td><td>Attribute</td><td>Numeric</td></tr>
</tbody>
</table>

Save this imported model with a clear name. In this tutorial, the suggested example name is:

```text
Block_Model_Slope
```

You may use another valid Datamine file name, as long as you can clearly identify it later as the slope-angle model.

#### 6. Combine the two block models

Run the Datamine function:

```text
ADDMOD
```

Use `ADDMOD` to add the slope-angle model to the base block model, then save the output as a new Datamine block model file. In this example, `Block_Model_Slope` is added to `Block_Model_XYZ`, but the exact file names can be changed.

<div class="os-callout os-callout--tip" markdown="1">
The names `Block_Model_XYZ` and `Block_Model_Slope` are examples only. Datamine does not require these exact names. Use consistent, recognisable names so the correct base model and slope-angle model are selected in `ADDMOD`.
</div>

The final output should combine:

- the original block model fields;
- the OptimalSlope slope-angle data;
- any other attributes imported from the CSV file.

<div class="os-callout os-callout--warning" markdown="1">
After combining the models, check that all relevant blocks have a slope-angle value assigned.
</div>

</div>
</section>



<section class="os-workflow-step" id="related-pages" markdown="1">
<div class="os-workflow-step-head" markdown="0">
<div class="label">Related help</div>
<h2 id="related-pages">Related pages</h2>
<p>Use these pages to start faster, understand common terms, or troubleshoot issues found during the workflow.</p>
</div>
<div class="os-workflow-step-body" markdown="1">

<div class="os-checklist" markdown="0">
<div class="os-check"><strong><a href="{{ '/pages/quick-start/' | relative_url }}">Quick Start</a></strong><br>Run through the shortest route from prepared data to simulation results.</div>
<div class="os-check"><strong><a href="{{ '/pages/troubleshooting/' | relative_url }}">Help and Solutions</a></strong><br>Review common problems with geometry, OSA search region, simulation setup, and exports.</div>
<div class="os-check"><strong><a href="{{ '/pages/glossary/' | relative_url }}">Glossary</a></strong><br>Review key OptimalSlope, slope design, simulation, and export terms.</div>
</div>

</div>
</section>

</div>
