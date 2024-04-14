# Frontend Mentor - Article preview component solution

This is a solution to the [Article preview component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/article-preview-component-dYBN_pYFT). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See the social media share links when they click the share icon

### Screenshot

article_preview_component_screenshot.png

### Links

- Solution URL: [Github respository files](https://github.com/EJMK18/FEM-article-preview-component)
- Live Site URL: [Article Preview Component Solution](https://ejmk18.github.io/FEM-article-preview-component/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- JavaScript

### What I learned

I learnt about the matchMedia method. The matchMedia method returns an object called, MediaQueryList. I used the "matches" and "onchange" properties of the object to define the styling of elements, and adding or removing of classes on elements. The "matches" property is set to true once the media query is active and false if not. I used this functionality to define how the button function should work on mobile views and desktop views. The "onchange" property executes the specified function once the "matches" property changes.

I am proud of the following JS code snippet:

```js
"use strict";

// DOM VARIABLES
const shareButton = document.getElementById("share-button");
const socialLinksContainer = document.getElementById("social-links");
const triangle = document.querySelector(".triangle");
const articleDetails = document.getElementById("article-details");
const articleDetailsClass = document.querySelector(".article-details");
const articleDetailsContainer = document.getElementById(
	"article-details-container"
);

const mediaQueryMob = window.matchMedia("(max-width: 37.5rem)");

shareButton.addEventListener("click", function (e) {
	const isExpanded = shareButton.getAttribute("aria-expanded");

	if (mediaQueryMob.matches === true) {
		if (isExpanded === "false") {
			shareButton.setAttribute("aria-expanded", "true");
			socialLinksContainer.classList.remove("hide");
			articleDetailsClass.classList.add("hide");
			articleDetailsContainer.style.background =
				"var(--neutral-dark-grayish-blue)";
		} else {
			shareButton.setAttribute("aria-expanded", "false");
			socialLinksContainer.classList.add("hide");
			articleDetailsClass.classList.remove("hide");
			articleDetailsContainer.style.background = "none";
		}
	} else {
		articleDetailsContainer.style.background = "none";
		articleDetailsClass.classList.remove("hide");

		if (isExpanded === "false") {
			shareButton.setAttribute("aria-expanded", "true");
			socialLinksContainer.classList.remove("hide");
			triangle.classList.remove("hide");
		} else {
			shareButton.setAttribute("aria-expanded", "false");
			socialLinksContainer.classList.add("hide");
			triangle.classList.add("hide");
		}
	}
});

mediaQueryMob.onchange = function (e) {
	const isExpanded = shareButton.getAttribute("aria-expanded");

	if (e.matches === true) {
		if (isExpanded === "true") {
			articleDetailsContainer.style.background =
				"var(--neutral-dark-grayish-blue)";
			articleDetailsClass.classList.add("hide");
		}
	} else {
		articleDetailsContainer.style.background = "none";
		articleDetailsClass.classList.remove("hide");
		triangle.classList.add("hide");
	}
};
```

### Continued development

After spending quite a bit of time researching the solution I implemented, I definitely need to improve on my JS skills.

### Useful resources

- [MDN - Window: MediaQueryList](https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryList) - A MediaQueryList object is returned from the matchMedia method. I used the object to set certain styles to elements. Additionally, I was able to add and remove classes from elements where necessary.


## Author

- Frontend Mentor - [@EJMK18](https://www.frontendmentor.io/profile/EJMK18)
- Twitter - [@EJMK18](https://twitter.com/EJMK18)
