---
title: Simulation Workflow
author: Dainius Jenkus
date: 2010-06-30
category: Tutorials
layout: post
---

## Simulation Workflow

Follow these steps to configure properties for a selected section in OptimalSlope to run a simulation:

### 1. Importing Sections

<p align="center">
  <video controls width="100%" preload="metadata">
    <source src="https://optimalslope.github.io/manual/assets/videos/tutorials/Importing-Sections.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
</p>

It is recommended to directly import sections if you already have them defined in DXF files. This method is straightforward and speeds up the process without the need to import often large 3D model files to make sections.

In OptimalSlope, you have two methods available for defining cross-sections:

#### Importing 3D Solid/Wireframe and Making Sections
You can import a 3D solid or wireframe (`File -> Import Stratigraphy -> DXF`) and then use our slicing tool to create a section. For more information on slicing, refer to the [Slicing](https://optimalslope.github.io/manual/pages/slicing/2-slicing/).

#### Directly Importing DXF Section File
Alternatively, you can directly import a DXF section file using the pathway: `File -> Import Section -> DXF`. 
#### Use Quality Input Data
Ensure your DXF model data meets general quality standards to ensure the best simulation results. For guidelines on data preparation and ensuring quality, refer to the [Data Preparation](https://optimalslope.github.io/manual/pages/Data%20Suitability/7-data/).

---
### 2. Defining Properties

<p align="center">
  <video controls width="100%" preload="metadata">
    <source src="https://optimalslope.github.io/manual/assets/videos/tutorials/Simulation-Inputs.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
</p>

#### Define Bench Properties
Specify properties for benches if your cross-section includes them:
- **Unit Weight**: Weight of material per cubic meter.
- **Bench Face Angle**: Inclination angle of bench faces.
- **Min Berm Width**: Minimum width of berms between benches.
- **Number of Benches**: Total benches count.
- **Bench Height**: Height of each bench.

#### Set Rock Properties
Choose between Hoek-Brown and Mohr-Coulomb models and set properties like:
- **Strength characteristics**.
- **Friction parameters**.

<p align="center">
  <img src="https://OptimalSlope.github.io/manual/assets/tutorial/layer_properties.png" alt="Layer properties"/>
</p>

Section rock properties are set for each section layer separately. Alternatively, if 3D models are used to generate sections, properties can be provided at the 3D level initially. When making a section using our slicing tool, they are automatically inherited from parent 3D models.

#### General Section Properties
Set general properties for the section:
- **Horizontal Crest Position**: Position of the crest relative to the section origin.
- **Slope Height**: Total height of the slope.
- **Target FoS (Factor of Safety)**.

<p align="center">
  <img src="https://OptimalSlope.github.io/manual/assets/tutorial/general_properties.png" alt="General properties"/>
</p>

The above properties (bench, rock, and general properties) must be provided to run simulations. Optional properties below can be added if needed.






#### Optional Properties
- **Water Table**: Location and properties of the water table, if applicable.
- **Surcharge**: Additional loads like magnitude and inclination, if applicable.
- **Roads**: Presence and properties of roads on or near the slope.
- **Tension Crack Properties**: Characteristics of any tension cracks.
-  **Faults**: Geometry and material properties of faults, if applicable. For detailed information on faults, refer to the [OptimalSlope Manual on Faults](https://optimalslope.github.io/manual/pages/properties/6-properties/#Faults).

Ensure all values are accurate and reflect the physical/mechanical characteristics of your material and cross-section specifics.

For detailed guidance, refer to the [OptimalSlope Manual on Properties](https://optimalslope.github.io/manual/pages/properties/6-properties/).

---
### 3. Running Simulations

**Overview**

OptimalSlope runs simulations on the cloud to avoid maxing out local resources and affecting the performance of user's machine due to the nature of computationally heavy simulations.

After the problem of simulation is formulated with required inputs, the simulation window is used to run simulations and obtain the results.


<p align="center">
  <video controls width="100%" preload="metadata">
    <source src="https://optimalslope.github.io/manual/assets/videos/tutorials/Running-Simulation.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
</p>

**Configuring user profile**
* To run simulations on the cloud, the user profile is configured under **Tools > Settings > Account**.



After the input data is defined, simulations can be started in the simulation window. Here are the steps to perform before starting a simulation:
1. **Select a section of interest**. Any section with prescribed properties.
2. **Set a simulation folder**. This informs where to write simulation results and logs.
3. **Make sure user's profile is configured**. When running a simulation for the first time, go to `Tools -> Settings -> Account` and enter provided credential information, click `Configure`. This ensures that your simulation can run on the cloud.

<p align="center">
  <img src="https://OptimalSlope.github.io/manual/assets/tutorial/profile_setup.png" alt="Profile setup"/>
</p>



#### Common Simulation Input Checks

Before running a simulation, OptimalSlope automatically checks the input data for common issues that may require manual review. These checks help identify potential problems in the section geometry, section properties, and optimisation search region before the simulation is started.

If an issue is detected, a warning message is displayed to inform the user what was found and whether the data should be reviewed before continuing. Some warnings may not prevent the simulation from running, but they indicate that the input data should be checked carefully because it may affect the reliability or usefulness of the results.

#### Section Geometry Checks: Gaps and Overlaps

#### Section Geometry Checks: Gaps and Overlaps

Before running a simulation, OptimalSlope analyses the input section geometry and checks for common geometry inconsistencies, including **gaps** and **overlaps**.

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

#### Crest Point and OSA Search Region Checks

#### How should I choose the crest point?

The **crest point** defines the uppermost starting location of the slope in the model. Its position directly affects how the slope geometry is generated during optimisation.

If the crest is placed **too close to the outer edge** of the section or terrain, the calculated slope (based on the **initial maximum overall slope angle**) may project outward beyond the existing ground surface. In this case, parts of the slope will extend into **open space** — effectively creating a geometry that intersects “thin air.” This can lead to unrealistic results and may cause instability or inaccuracies in subsequent simulations.

To avoid this, position the crest point **further inland**, so that:

- The entire slope profile remains within the defined ground surface.
- The slope toe and face are generated against actual material, not empty space.
- The optimisation process has valid geometry to work with in all iterations.

When the crest point is set correctly, the section preview shows the preliminary **minimum** and **maximum Overall Slope Angle (OSA)** limits. These are indicated by the **green triangular search region**. This triangle represents the area where the simulation will search for the optimal slope profile shape (see picture below).

<p align="center">
  <img src="https://OptimalSlope.github.io/manual/assets/docs_images/min_max_osa.png" alt="Profile setup"/>
</p>

The preliminary OSA limits are calculated from the selected crest point and the section properties. If the crest point and properties result in a very narrow difference between the minimum and maximum OSA, the simulation has only a limited search range. In this case, the optimiser will not be able to explore many possible slope profiles, which may reduce the quality or usefulness of the optimisation result.

<p align="center">
  <img src="https://OptimalSlope.github.io/manual/assets/docs_images/max_osa_limited_space.png" alt="Profile setup"/>
</p>

A wider and realistic OSA search range gives the optimiser more flexibility to investigate alternative slope shapes while still remaining within the valid section geometry.

**Practical Tips:**

- Position the crest point slightly further inside the section boundary than you think is necessary.
- Check that the green triangular search region remains within the available ground/material area.
- Avoid crest point positions that create a very narrow minimum-to-maximum OSA range.
- If the green triangle is too narrow or extends outside the model, adjust the crest point or review the section properties before running the simulation.


#### Starting Simulations 

1. Switch to **Simulation** tab at the botton of the interface.
2. Under **Cross-sections**, select the desirable cross-section.
3. Specify simulation folder.
4. **To start a simulation**, click **Start** button and then enter the configured username.
5. The **Fetch results** button is used to download the results and/or see the progress when simulations are running.

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
- **Surcharge or roads** — assess the influence of additional loads or road positions.

When running simulations for duplicated sections, make sure each scenario has either:

- **A unique section name**, for example:
  - `Section_1_BaseCase`
  - `Section_1_WetCondition`
  - `Section_1_LowStrength`

or:

- **A different results folder** for each scenario.

This helps avoid conflicts between simulation outputs, logs, and exported result files. 
**Note**: when requiring to re-run the same section more than once, e.g., with corrected parameters, select **Yes** to overwrite the existing input data when starting a simulation.




#### Results
* OptimalSlope returns results in a form a plot, which displays estimated optimal profile of a slope.
* The estimated angles and profile coordinates and angles are displayed in the logs.
* The results folder also contains plots and obtained optimal profile data.



#### An example of input and output slope profile

{% include input_output.drawio.html %}

#### An example of 2D output slope profile

{% include output_2d.drawio.html %}

 


- **Note:** results in the 2D plot is always shown as slope is on the right side (mirrored if it is on the left side). When exporting output profile to DXF or visualising in 3D, a produced slope profile is shown in the original position.

### 4. Exporting Output Profile to DXF

<!-- <p align="center">
  <video controls width="100%" preload="metadata">
    <source src="https://optimalslope.github.io/manual/assets/videos/tutorials/workflow/4-exporting-output-profile-to-dxf.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
</p> -->

The obtained results of a simulation are shown in 2D plot window and also displayed in the form of logs. The estimated shape of the slope profile can be exported to DXF and later imported to other software.


<p align="center">
  <img src="https://OptimalSlope.github.io/manual/assets/tutorial/export.png" alt="Export output"/>
</p>

- Navigate to the tools section in the simulation window (`Export output profile to DXF`).
- Select one of the export configurations:
    - `Global` - exported coordinates of profile are in the original global coordinate system. Useful when the result is visualized with respect to the original section or 3D models.
    - `Local XZ` - exported coordinates of profile are aligned to the XZ plane (Y coordinate is fixed).
    - `Local XY` - exported coordinates are flattened, i.e., the section is on the XY plane and is horizontal (Z coordinate is fixed). Useful when exporting to software like Rockscience RS2.

### 5. Importing Output into Rockscience RS2

 

Since results from OptimalSlope may be used in RS2 for stability analysis, this step explains how to import output from our software. There are several steps required to import an output profile DXF file into RS2.
##### Step 1: Export output profile to DXF from our software
 - **Export output profile as DXF** (as explained in step 4) using the `Local XY` export method. This is required as RS2 expects a 2D section, so coordinates are flattened to have a horizontal section on the XY plane.
<!-- ##### Step 2: Modify the DXF File in AutoCAD
- **Open the DXF file in AutoCAD.**
- **Convert Block References**: Use the `EXPLODE` command to convert all block references into simpler entities. This is crucial as RS2 cannot handle block references in the DXF.
- **Save the File**: After exploding the blocks, save the file again as an ASCII DXF 2000 format. -->
**Note**: Other software such as Rhino can be used to achieve such operation.
##### Step 2: Import into RS2
- **Import the DXF File**: Open RS2 and import the modified DXF file.
- **Set Boundary Types**: RS2 assigns Boundary Types based on layer names. Ensure your layer names match the expected Boundary Types in RS2. If a layer name does not match, it will be set to 'Not Assigned'.
- **Defining the Model**: For a slope model, set the boundary type as 'Material'. Note that the 'External' role should not be used for the top and bottom portions of the slope, which should be defined by two different polylines. RS2 expects the external boundary to define the complete outer model boundary.

At the moment, OptimalSlope does not export the complete RS2 external boundary by default. The external boundary must be added or drawn manually in RS2 after importing the DXF.

By following these steps, you can successfully prepare and import a DXF file into RS2, ensuring that all elements are correctly interpreted by the software.

### 6. Exporting the Section Block Model

If the project contains 3D stratigraphy, the section block model can be exported from the simulation window using the **Export block model** tool.

<p align="center">
  <img src="https://OptimalSlope.github.io/manual/assets/docs_images/block_model_export.png" alt="Export output"/>
</p>

This export creates a block model for the selected section using the optimized slope angles from the simulation result. The exported model can be used for further visualisation, checking, or downstream modelling workflows.

Before exporting, define the block dimensions:

- **dX** — block size in the X direction.
- **dY** — block size in the Y direction.
- **dZ** — block size in the Z direction.

This feature is available when the section is generated from, or associated with, a 3D stratigraphy model. If the project only contains an imported 2D section without 3D stratigraphy, there is no 3D block model available to export.

Choose block dimensions that are appropriate for the scale of the model. Smaller block sizes provide a more detailed representation but may produce larger output files, while larger block sizes reduce file size but give a coarser model.