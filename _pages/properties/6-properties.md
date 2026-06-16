---
title: Properties
author: Dainius Jenkus
date: 2010-06-30
category: Properties
layout: post
---

**Description**

The following is a list and description of properties used when defining a simulation.

#### Defining Bench Height

At this stage, a **fixed bench height** is used for each rock or section layer.  

When working with **3D rock models**, if a bench height is defined, it is automatically **inherited by the section** from a its parent shape during the slicing operation. This ensures consistency between the 3D model and the generated section geometry. If required, section bench height can be directly edited later.

By default, bench height is set by **specifying a bench height** for either:
- A **section**, or
- A **3D rock model (stratighraphy)**.

Alternatively, in the **section properties**, the bench height can be **estimated** by specifying:
- The **number of benches**, and the **slope height**.  

The software will calculate the corresponding bench height automatically.

**Example:**  
If slope height = 120 m and number of benches = 12 → bench height = 10 m.




### Bench Properties

---

| Name                                            | Measurement type   | Info                                                                                             |
|-------------------------------------------------|--------------------|--------------------------------------------------------------------------------------------------|
| Unit Weight                                     | kN/m³              | Unit Weight in kN/m³                                                                             |
| Bench Face Angle                                | Degrees            | Bench Face Inclination                                                                           |
| Min Berm Width                                  | m                  | Minimum Berm width                                                                               |
| Number of benches                               | -                  | A number of benches, set only if **Bench defined by** = "No. of benches"                                    |
| Bench Height                                    | m                  | The height of bench                                                                              |

### Rock Properties

---

Hoek-Brown or Mohr-Coulomb properties are set depending on the strength model of the material type.

**Hoek-Brown Strength Model**

| Name                                            | Measurement type   | Info                                                                                             |
|-------------------------------------------------|--------------------|--------------------------------------------------------------------------------------------------|
| σ_ci                                            | MPa                | Unconfined Compressive Strength of the intact rock                                               |
| Geological Strength Index                       | -                  | Geological Strength Index for the rock mass                                                      |
| Intact rock m_i value                           | -                  | Value ruling the Hoek-Brown curvature                                                            |
| σ3_max                                          | MPa                | Minor principal stress averaged along the likely slope failure surface (if unavailable set "-1") |
| Disturbance Factor                              | -                  | Factor accounting for rock mass strength reduction due to stress relaxation and blasting         |

**Mohr-Coulomb Strength Model**

| Name                                            | Measurement type   | Info                                                                                             |
|-------------------------------------------------|--------------------|--------------------------------------------------------------------------------------------------|
| Friction Angle                                  | Degrees            | Angle of shearing resistance (also known as Internal Friction) of the rock mass                  |
| Cohesion                                        | kPa                | kPA Cohesion                                                                                     |

### General Section Properties

---

 




| Name                                            | Measurement type   | Info                                                                                             |
|-------------------------------------------------|--------------------|--------------------------------------------------------------------------------------------------|
| Horizontal Crest Position                       | m                  | Defines a local horizontal crest position (X_section) within a cross-section                     |
| Slope Height                                    | m                  | The height of a slope                                                                            |
| Target FoS                                      | -                  | Target factor of safety                                                                          |
| Side of slope                                   | -                  | Defines if a slope is on the "left" or "right"                                                   |
| Surcharge magnitude                             | kN/m²              | Unit weight of the Distributed Surcharge                                                         |
| Surcharge inclination (α)                       | Degrees            | Inclination of the triangular component of distributed surcharge                                 |
| Surcharge from slope crest                      | m                  | Distance of surcharge from the slope crest                                                       |
| Road width                                      | m                  | A width of a road                                                                                |
| Road Vertical Position (Z)                      | m                  | Road Z position coordinate                                                                       |



***Notes***

* Bench properties and rock properties can be set for individual 3D stratigraphy. If sections are generated using our slicing tool, sections automatically inherit these properties. If sections are imported directly, properties can be set for each layer manually for a particular section.

#### How should I choose the crest point?

The **crest point** defines the uppermost starting location of the slope in the model. Its position directly affects how the slope geometry is generated during optimisation.

If the crest is placed **too close to the outer edge** of the section or terrain, the calculated slope (based on the **initial maximum overall slope angle**) may project outward beyond the existing ground surface. In this case, parts of the slope will extend into **open space** — effectively creating a geometry that intersects “thin air.” This can lead to unrealistic results and may cause instability or inaccuracies in subsequent simulations.

To avoid this, position the crest point **further inland**, so that:

- The entire slope profile remains within the defined ground surface.
- The slope toe and face are generated against actual material, not empty space.
- The optimisation process has valid geometry to work with in all iterations.

When the crest point is set correctly, the section preview shows the preliminary **minimum** and **maximum Overall Slope Angle (OSA)** limits. These are indicated by the **green triangular search region**. This triangle represents the area where the simulation will search for the optimal slope profile shape.

The preliminary OSA limits are calculated from the selected crest point and the section properties. If the crest point and properties result in a very narrow difference between the minimum and maximum OSA, the simulation has only a limited search range. In this case, the optimiser will not be able to explore many possible slope profiles, which may reduce the quality or usefulness of the optimisation result.

A wider and realistic OSA search range gives the optimiser more flexibility to investigate alternative slope shapes while still remaining within the valid section geometry.

**Practical Tips:**

- Position the crest point slightly further inside the section boundary than you think is necessary.
- Check that the green triangular search region remains within the available ground/material area.
- Avoid crest point positions that create a very narrow minimum-to-maximum OSA range.
- If the green triangle is too narrow or extends outside the model, adjust the crest point or review the section properties before running the simulation.

---
 





#### What is bench-compatible slope height?
Bench-compatible slope height is the maximum slope height that allows an integer number of benches without exceeding the total slope height.


**Example:**  
- Slope height = 385 m, bench height = 10 m → bench-compatible slope height = 380 m.  
- Adding another full bench would exceed the defined slope height.

The properties below are set at a level of selected section.

---

### Faults

Faults represent discontinuities or fractures within the geological model that can influence rock mass behaviour, stability, and stress distribution.

In OptimalSlope, faults are defined as **open polylines** and can be added to a section in two different ways.

##### 1. Assigning Faults in an Imported Section

If your section already contains fault geometry within a DXF file:

1. Import the DXF file as a regular section.
2. In the **Explorer** menu, locate and select the specific layer containing the fault geometry.
3. Tick the option **This entity is a fault/joint (open polyline)** to classify it as a fault within the section.
4. Assign the fault properties shown in the table below.

##### 2. Importing Faults as a Separate DXF

If your faults are stored in a dedicated DXF file:

1. In the **Explorer** menu, select the target section where you want to add the fault.
2. In the **Properties View** panel on the right, open **Optional Properties** and find the **Faults** option.
3. Click **Add** to import the fault DXF file.
4. The imported fault will be incorporated into the existing section.
5. Assign the fault properties in the layer properties of the fault.
---
##### Faults Optional Properties

The **Maximum Fault Segment Length** parameter is defined under the section **Optional Properties > Faults**.

| Name | Measurement Type | Description |
|------|------------------|-------------|
| Maximum Fault Segment Length | m | Controls how imported fault polylines are segmented for analysis. Higher values create fewer segments and faster computation, while lower values create more segments and provide a more detailed representation of the fault geometry. Default value is `20 m`. |

---

##### Fault Layer Properties

The following properties are assigned to the imported fault or joint polyline layer.

| Name | Measurement Type | Description |
|------|------------------|-------------|
| Friction Angle | Degrees | The angle of shearing resistance, also known as internal friction, of the fault material. |
| Cohesion | kPa | The cohesive strength of the fault material, measured in kilopascals. |


--- 
##### Fault Segment Length

The **Maximum fault segment length** parameter controls how imported fault polylines are divided into smaller segments for analysis.

##### The effect on computational speed

A higher value creates fewer fault segments, which can reduce computation time and make the simulation faster. However, the fault geometry may be represented in a more simplified way.

A lower value creates more fault segments, which can provide a more detailed and precise representation of the fault geometry. However, this increases computational effort and may make the simulation slower.

Use a segment length that is appropriate for the scale and complexity of the fault geometry. For simple or long faults, the default value of **20 m** is usually a good starting point. For highly curved, short, or complex fault geometries, a smaller value may be useful.

--- 
##### Fault Practical Tips

Faults should be defined where they are expected to have a meaningful influence on the slope. For example, a fault crossing the slope face, slope toe, or potential failure region may significantly affect the optimisation result.

When defining faults, make sure that:

- The fault geometry is correctly positioned relative to the section.
- The fault intersects the relevant part of the slope model if it is expected to influence the result.
- Fault material properties are representative of the expected geological conditions.
- The fault is included only where it is geologically justified.

 
When testing fault sensitivity, duplicate the section and create separate scenarios with different fault positions, orientations, or material properties. This allows you to compare the influence of faults without changing the original section setup.

---

 
#### Water Table

The water table, also referred to as the **piezometric line**, can be defined for a selected cross-section under:

`Cross-section > Optional Properties > Water Table`

{% include watertableUI.html %}

*The water table is displayed as a blue polyline in the section visualiser.*

##### Water Table Interface

| Column | Description |
|:-:|:-|
| Index | Point index, starting from `1` at the slope toe and continuing to `N` at the last boundary point. |
| Vertical Position (Z) | Z coordinate of the corresponding bench line where the point is located. This value is fixed to the bench Z position. |
| X | Horizontal coordinate of the water table point. This value is editable. |

##### Defining the Water Table

To define the water table:

1. Click **Draw**.
2. In the visualiser, hover over the desired bench line and select a point.
3. Continue selecting points along the required bench lines.
4. Close the piezometric line by selecting the final point on the boundary.
5. Press **Enter** to confirm, or press **Esc** to cancel.

##### Notes

- The first point at the slope toe is assigned automatically.
- Only one water table point is allowed per bench.
- The water table should be defined so that it follows the expected groundwater conditions for the selected cross-section.

---
 


 