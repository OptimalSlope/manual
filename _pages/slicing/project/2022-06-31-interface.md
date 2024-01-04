---
title: Interface
author: Tao He
date: 2010-06-30
category: Jekyll
layout: post
---




### Creating a project

<div class="table-wrapper" markdown="block">

|Symbol|Action|
|:-:|:-:|
![enter image description here](https://OptimalSlope.github.io/manual/assets/control-icons/create-project.png)| Creates an empty project.|


### Cross-Section
<div class="table-wrapper" markdown="block">

|Symbol|Action|
|:-:|:-:|
![enter image description here](https://OptimalSlope.github.io/manual/assets/control-icons/content-cut-custom.png)| Opens a slicing tool for making cross-sections.|


</div>

 
### Shape Controls
> ##### TIP
>
> Be sure that a 3d shape is selected in order to use the slicing tool.
{: .block-warning }


**Delete/hide items (slices, 3d models)**

<div class="table-wrapper" markdown="block">

|Symbol|Action|
|:-:|:-:|
|![enter image description here](https://OptimalSlope.github.io/manual/assets/control-icons/eye-off-custom.png)| Hide selected shape on the visualiser| 
|![enter image description here](https://OptimalSlope.github.io/manual/assets/control-icons/delete-custom.png)| Delete selected item from a project| 

</div>

**Shape Position**

<div class="table-wrapper" markdown="block">

|Symbol|Action|On the Visualiser|
|:-:|:-:|:-:|
|![enter image description here](https://OptimalSlope.github.io/manual/assets/control-icons/fit-to-screen.png)|Fit visualiser's content to screen||
|![enter image description here](https://OptimalSlope.github.io/manual/assets/control-icons/loupe-custom.png)| Dynamic zooming| Press the left mouse button, then move the pointer to left or right.|
|![enter image description here](https://OptimalSlope.github.io/manual/assets/control-icons/pan-custom.png)| Dynamic panning| Press the left mouse button, then move the pointer.|
|![enter image description here](https://OptimalSlope.github.io/manual/assets/control-icons/flip-to-front-custom.png)| Flip a shape to front| |
|![enter image description here](https://OptimalSlope.github.io/manual/assets/control-icons/flip-to-back-custom.png)| Flip a shape to back| |
|![enter image description here](https://OptimalSlope.github.io/manual/assets/control-icons/border-top-variant-custom.png)| Flip a shape to top| |
|![enter image description here](https://OptimalSlope.github.io/manual/assets/control-icons/border-bottom-variant-custom.png)| Flip a shape to bottom| | 
|![enter image description here](https://OptimalSlope.github.io/manual/assets/control-icons/border-left-variant-custom.png)| Flip a shape to left| |
|![enter image description here](https://OptimalSlope.github.io/manual/assets/control-icons/border-right-variant-custom.png)| Flip a shape to right| | 
|![enter image description here](https://OptimalSlope.github.io/manual/assets/control-icons/rotate-360-custom.png)| Dynamic rotation| |


</div>


**Shape Style**

<div class="table-wrapper" markdown="block">

|Symbol|Action|On the Visualiser|
|:-:|:-:|:-:|
|![enter image description here](https://OptimalSlope.github.io/manual/assets/control-icons/panorama-fisheye-custom.png)|Display selected as wireframe||
|![enter image description here](https://OptimalSlope.github.io/manual/assets/control-icons/circle-custom.png)| Display selected with shading||
|![enter image description here](https://OptimalSlope.github.io/manual/assets/control-icons/palette-custom.png)| Change color| |
|![enter image description here](https://OptimalSlope.github.io/manual/assets/control-icons/texture-box-custom.png)| Change transparency| |
|![enter image description here](https://OptimalSlope.github.io/manual/assets/control-icons/eye-off-custom.png)| Hide selected shape| |
|![enter image description here](https://OptimalSlope.github.io/manual/assets/control-icons/delete-custom.png)| Delete selected item| |



</div>



Using a `{: .block-tip}` attribute:

```markdown
> ##### TIP
>
> This guide is last tested with @napi-rs/canvas^0.1.20, so make sure you have
> this or a similar version after installation.
{: .block-tip }
```

> ##### TIP
>
> This guide is last tested with @napi-rs/canvas^0.1.20, so make sure you have
> this or a similar version after installation.
{: .block-tip }

### Warnings

Using a `{: .block-warning}` attribute:

```markdown
> ##### WARNING
>
> Be sure that you're familiar with things like async/await and object destructuring
> before continuing, as we'll be making use of features like these.
{: .block-warning }
```

> ##### WARNING
>
> Be sure that you're familiar with things like async/await and object destructuring
> before continuing, as we'll be making use of features like these.
{: .block-warning }

### Dangers

Using a `{: .block-danger}` attribute:

```markdown
> ##### DANGER
>
> You cannot delete an ephemeral message.
{: .block-danger }
```

> ##### DANGER
>
> You cannot delete an ephemeral message.
{: .block-danger }

[1]: https://discordjs.guide/popular-topics/canvas.html#setting-up-napi-rs-canvas
[2]: https://kramdown.gettalong.org/quickref.html#block-attributes
