---
title: Cross-section Generation
author: Dainius Jenkus
date: 2010-06-30
category: Slicing
layout: post
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

 ---
