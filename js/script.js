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

	function showSubMenu(e) {
		const submenu = this.querySelector(".floating-menu");
		submenu.style.display = "flex";
		e.stopPropagation();
		submenu.addEventListener("click", hideSubMenu);
	}

	function hideSubMenu(e) {
		if (this.contains(e.target)) {
			this.style.display = "none";
		}
		this.removeEventListener("click", hideSubMenu);
	}

	menuElementsDesktop.forEach((element) => {
		element.addEventListener("click", showSubMenu);
	});
	window.addEventListener("resize", screenWidth);
});
