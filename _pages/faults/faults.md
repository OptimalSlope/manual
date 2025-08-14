---
title: Faults
author: Dainius Jenkus
date: 2010-06-30
category: Faults
layout: post
---


Faults represent discontinuities or fractures within the geological model that can influence rock mass behavior, stability, and stress distribution. In the software, faults are defined as open polylines and can be imported into a section in two different ways:

#### 1. Assigning Faults in an Imported Section
If your section already contains fault geometry within a DXF file:
1. Import the DXF file as a regular section.
2. In the **Explorer** menu, locate and select the specific layer containing the fault geometry.
3. Tick the option "**This entity is a fault/joint (open polyline)**" to classify it as a fault within the section.
4. **Assign the fault properties** shown in the table below.

#### 2. Importing Faults as a Separate DXF
If your faults are stored in a dedicated DXF file:
1. In the **Explorer** menu, select the target section where you want to add the fault.
2. In the **Properties View** panel on the right, open **Optional Properties** and find the **Faults** option.
3. Click **Add** to import the fault DXF file.
4. The imported fault will be incorporated into your existing section.
5. **Assign the fault properties** shown in the table below.

---

**Fault Properties**

| Name           | Measurement Type | Description                                                                 |
|----------------|------------------|-----------------------------------------------------------------------------|
| Friction Angle | Degrees          | The angle of shearing resistance (also known as internal friction) of the rock mass. |
| Cohesion       | kPa              | The cohesive strength of the rock mass, measured in kilopascals.            |

---

