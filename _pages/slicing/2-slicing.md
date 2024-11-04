---
title: Sections
author: Dainius Jenkus
date: 2010-06-30
category: Slicing
layout: post
---

### Creating Sections
---

**Description**

The Slicing tool creates cross-sections through selected shape(s) using cutting planes (XY, XZ or YZ). Cross-sections can be made in parallel to the cutting planes with respect to a global  plane position coordinate (m).

 Vertical planes (XZ, YZ) provides an ability to make vertical cross-sections at different angles by specifiying the azimuth angle (°).

|Symbol|Action|
|:-:|:-:|
![enter image description here](https://OptimalSlope.github.io/manual/assets/control-icons/content-cut-custom.png)| Opens a slicing tool for making cross-sections.|


> ##### TIP
>
> * Cross-sections automatically inherit properties from their 3D parent stratigraphy. If not entered, properties can be later entered manually either at 3D model or individual slice level.
> * It is advised to define bench properties and strength model before producing cross-sections.
>
{: .block-tip }

**Usage**

1. Select a shape or multiple shapes.
2. Press the slicing button on the toolbar or right-click on a shape and select cross-section.
3. Define the cutting plane (XY, XZ or YZ).
4. Specify the position of the cutting plane.
5. If required, provide the azimuth (**when working with vertical planes**).
6. Click `Slice` button.
 

**Slicing tool**
{% include slicing.html %}
<p>&nbsp;</p>
**Cross-section example**
{% include slice.html %}

### Trimming Sections To Boundary Surface
---

Boundary surfaces are imported and utilized to create a trimmed version of a section, accurately reflecting the existing pushback of an open pit mine. This process is particularly valuable when only the original model of stratigraphy is available, as it allows for adjustments that align with the current state of the mine. Applying trimming at the section level enables faster operations by reducing the need for complex modifications to the entire 3D model. This targeted approach ensures that cross-sections more precisely represent real-world conditions, facilitating better planning, analysis, and decision-making for ongoing mining activities.

**Usage**

1. Select a required cross-section on the left-panel menu.
2. Make sure boundary surface is already imported to your project.
3. In the right-panel menu find and click `Trim Slice` button.


 ---