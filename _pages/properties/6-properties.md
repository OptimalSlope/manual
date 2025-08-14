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

#### How should I choose the crest point?

The **crest point** defines the uppermost starting location of the slope in the model. Its position directly affects how the slope geometry is generated during optimisation.

If the crest is placed **too close to the outer edge** of the section or terrain, the calculated slope (based on the **initial maximum overall slope angle**) may project outward beyond the existing ground surface. In this case, parts of the slope will extend into **open space** — effectively creating a geometry that intersects “thin air.” This can lead to unrealistic results and may cause instability or inaccuracies in subsequent simulations.

To avoid this, position the crest point **further inland**, so that:
- The entire slope profile remains within the defined ground surface.
- The slope toe and face are generated against actual material, not empty space.
- The optimisation process has valid geometry to work with in all iterations.

**Practical Tip:**  
When in doubt, position the crest point slightly further inside the section boundary than you think is necessary. This provides a safety margin for geometric calculations and prevents projection errors.

---

<!-- **Correct Example:**  
The crest is positioned well within the terrain boundary, ensuring the slope intersects only solid material.  
![Correct Crest Position](169dda39-0876-4b14-bf01-99cd0bab88ab.bmp)
{% include crest_example.html %}
**Incorrect Example:**  
The crest is placed too close to the edge, resulting in part of the slope extending into open space.  
![Incorrect Crest Position](incorrect_crest.bmp) -->


#### What is bench-compatible slope height?
Bench-compatible slope height is the maximum slope height that allows an integer number of benches without exceeding the total slope height.


**Example:**  
- Slope height = 385 m, bench height = 10 m → bench-compatible slope height = 380 m.  
- Adding another full bench would exceed the defined slope height.

The properties below are set at a level of selected section.



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

---