"use strict";

document.addEventListener("DOMContentLoaded", (event) => {
	const desktopSize = 700;
	const menuDesktop = document.querySelectorAll(".desktopOnly");
	const menuPhone = document.querySelector(".phoneOnly");
	const menuElementsDesktop = document.querySelectorAll(".arrow");
	const floatingMenu = document.querySelectorAll(".floating-menu");

	function screenWidth() {
		if (window.innerWidth >= desktopSize) {
			menuDesktop.forEach((element) => {
				element.classList.remove("hidden");
			});
			menuPhone.classList.add("hidden");
		}

		if (window.innerWidth < desktopSize) {
			menuPhone.classList.remove("hidden");
			menuDesktop.forEach((element) => {
				element.classList.add("hidden");
			});
		}
	}

	function showSubMenu() {
		const submenu = this.querySelector(".floating-menu");
		submenu.classList.remove("hidden");
	}

	function hideSubMenu() {
		const submenu = this.querySelector(".floating-menu");
		submenu.classList.add("hidden");
	}

	menuElementsDesktop.forEach((element) => {
		element.addEventListener("mouseover", showSubMenu);
		element.addEventListener("mouseout", hideSubMenu);
	});
	window.addEventListener("resize", screenWidth);
});
