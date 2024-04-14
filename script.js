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
