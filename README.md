# scrollAnimation.js
A JavaScript plugin that can animate on scroll

## What is scrollAnimation.js?

scrollAniation.js is a JavaScript plugin to animate element on scroll creted by [ChalanaN]. It dosen't matter if you are a beginner. You can add a class to an element if it's in view or at a exact height from view. And you can animate an element complied with the page scroll.

## Installation

Add scrollAnimation.js to your project by adding this script tag to the end of your file's body
```sh
<script src="https://chalanan.tk/scrollAnimation.js"></script>
```

## How to use?

Tsage of scrollAnimation.js is very simple. It's usage is different depending on what benifit you get from this.

### Usage for adding the `after` class to an element

To use scrollAnimation.js to add a class of `after` to an element if it's in view or at a exact height from view is very simple. All you need to do is add the class of `animate` to the element and add these 4 attributes to the element.

| Attribute | Description |
| ------ | ------ |
| `data-animate-on=""` | Required. Specifies at what point the element needs to add the class. The valid values are `top`(add class at the top of view), `bottom`(add class at the bottom of view) and `view`(add class at the top of view) |
| `data-animate-on-n=""` | Optional. Specifies the height from the `data-animate-on` attribute value (if you are using the value `view` this is the height from both sides of view) |
| `data-animate-repeat=""` | Optional. Specifies if the animation needs to be repeat (that means remove the class `after` from the element). Valid values are `yes` or `no`. Default value is `no`. |
| `data-animate-time=""` | Optional. Specifies the transition property of the element. Default value is `0.35s` |

### Usage for animating an element complied with the page scroll

To use scrollAnimate.js complied with page scroll add the class of `scrollAnimate` to the element you want to animate. Then add these attributes to the element.

| Attribute | Description |
| ------ | ------ |
| `data-animate-from=""` | Required. Specifies at what point the animation needs to start. The values are `top-the value from the top of view`, `center-the value from the center of view` and `bottom-the value from the bottom of view` |

[ChalanaN]: <https://chalanan.tk>
