---
title: Interface
author: Tao He
date: 2010-06-30
category: Jekyll
layout: post
---


### Controls

**Creating Project**

> ##### Creating Project
>
> ![enter image description here](https://OptimalSlope.github.io/manual/assets/control-icons/create-project.png)




**Altering Shape View**

<div class="table-wrapper" markdown="block">

|Item|Action|Tip|
|:-:|:-:|:-:|
|![enter image description here](https://OptimalSlope.github.io/manual/assets/control-icons/fit-to-screen.png)|Fit visualiser's content to screen||
|![enter image description here](https://OptimalSlope.github.io/manual/assets/control-icons/loupe-custom.png)| Dynamic zooming| Press the left mouse button, then move the pointer to left or right.|
|![enter image description here](https://OptimalSlope.github.io/manual/assets/control-icons/pan-custom.png)| Dynamic panning| Press the left mouse button, then move the pointer.|


 




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
