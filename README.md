# scrollAnimation.js
A JavaScript plugin that can animate on scroll.

## What is scrollAnimation.js?

scrollAniation.js is a JavaScript plugin to animate element on scroll creted by [ChalanaN]. It dosen't matter if you are a beginner. You can add a class to an element if it's in view or at a exact height from view. And you can animate an element complied with the page scroll with unlimited properties.

## Installation

Add scrollAnimation.js to your project by adding any of these script tag to the end of your file's body
```sh
<script src="https://code.chalanan.tk/scrollAnimation.js/scrollAnimation.js"></script>
```
```sh
<script src="https://code.chalanan.tk/scrollAnimation.js/scrollAnimation.min.js"></script>
```

## How to use?

Usage of scrollAnimation.js is very simple. It's usage is different depending on what benifit you get from this.

### Usage for adding the `after` class to an element

To use scrollAnimation.js to add a class of `after` to an element if it's in view or at a exact height from view is very simple. All you need to do is add the class of `animate` to the element and add these 4 attributes to the element.

| Attribute | Description |
| ------ | ------ |
| `data-animate-on=""` | Required. Specifies at what point the element needs to add the class. The valid values are `top-[the value from the top of view]`(add class at the top of view), `bottom-[the value from the bottom of view]`(add class at the bottom of view), `center-[the value from the center of view]`(add class at the center of view) and `view-[the value from the bottom and top of view]`(add class on enter the view) |
| `data-animate-repeat=""` | Optional. Specifies if the animation needs to be repeat (that means remove the class `after` from the element). Valid values are `yes` or `no`. Default value is `no`. |
| `data-animate-time=""` | Optional. Specifies the transition property of the element. |

### Usage for animating an element complied with the page scroll

To use scrollAnimate.js complied with page scroll add the class of `scrollAnimate` to the element you want to animate. Then add these attributes to the element.

| Attribute | Description |
| ------ | ------ |
| `data-animate-from=""` | Required. Specifies at what point the animation needs to start. The values are `top-[the value from the top of view]`, `center-[the value from the center of view]` and `bottom-[the value from the bottom of view]` |
| `data-animate-to=""` | Required. Specifies at what point the animation needs to end. The values are `top-[the value from the top of view]`, `center-[the value from the center of view]` and `bottom-[the value from the bottom of view]` |
| `data-animate-from-style=""` | Required. Specifies from what style the animation needs to start. Write this in css. |
| `data-animate-to-style=""` | Required. Specifies to what style the animation needs to end. Write this in css. |
| `data-animate-style=""` | Optional. Put additional stylings to this. Since the style attribute is overridden by this plugin you can add your styles here. |

#### Some things important

- **The properties in both  `data-animate-from-style` and  `data-animate-to-style` must be in same order**
- **The units in a property of both  `data-animate-from-style` and  `data-animate-to-style` must be the same**
- **Put `,` to separate things inside brackets and don't put spaces inside brackets**

[ChalanaN]: <https://chalanan.tk>
