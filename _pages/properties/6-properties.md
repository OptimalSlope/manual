---
title: Properties
author: Dainius Jenkus
date: 2010-06-30
category: Properties
layout: post
---

**Description**

The following is a list and description of properties used when defining a simulation.

### Bench Properties

---

| Name                                            | Measurement type   | Info                                                                                             |
|-------------------------------------------------|--------------------|--------------------------------------------------------------------------------------------------|
| Unit Weight                                     | kN/m³              | Unit Weight in kN/m³                                                                             |
| Bench Face Angle                                | Degrees            | Bench Face Inclination                                                                           |
| Min Berm Width                                  | m                  | Minimum Berm width                                                                               |
| Number of benches                               | -                  | A number of benches, set only if BenchDef = "NumberOfBenches"                                    |
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