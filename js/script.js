"use strict";

document.addEventListener("DOMContentLoaded", (event) => {
	const desktopSize = 700;
	const menuDesktop = document.querySelectorAll(".desktopOnly");
	const menuPhone = document.querySelector(".phoneOnly");
	const dropdownPhone = document.getElementById("dropdownPhone");
	const phoneButtons = document.querySelectorAll(".phoneButton");

	function screenWidth() {
		if (window.innerWidth >= desktopSize) {
			menuDesktop.forEach((element) => {
				element.classList.remove("hidden");
			});
			menuPhone.classList.add("hidden");
			dropdownPhone.style.display = "none";
		}

		if (window.innerWidth < desktopSize) {
			menuPhone.classList.remove("hidden");
			menuDesktop.forEach((element) => {
				element.classList.add("hidden");
			});
		}
	}

	function dropdown(e) {
		const isDropdownButton = e.target.matches("[data-dropdown-button]");
		if (!isDropdownButton && e.target.closest("[data-dropdown]") != null) return;

		let currentDropdown;
		if (isDropdownButton) {
			currentDropdown = e.target.closest("[data-dropdown]");
			currentDropdown.classList.toggle("active");
		}

		document.querySelectorAll("[data-dropdown].active").forEach((dropdown) => {
			if (dropdown === currentDropdown) return;
			dropdown.classList.remove("active");
		});
	}

	function dropdownPhoneVersion(e) {
		if (dropdownPhone.style.display === "none" || dropdownPhone.style.display === "") {
			dropdownPhone.style.display = "flex";

			setTimeout(function () {
				dropdownPhone.style.opacity = "1";
				dropdownPhone.style.transform = "translateY(0%)";
				menuPhone.style.backgroundImage = "url(../images/icon-close.svg)";
			}, 150);
			e.stopPropagation();
			document.addEventListener("click", verifyDropdownPhone);
		} else {
			closePhoneDropdown();
		}
	}

	function verifyDropdownPhone(e) {
		if (!dropdownPhone.contains(e.target) && e.target !== menuPhone) {
			closePhoneDropdown();
			document.removeEventListener("click", verifyDropdownPhone);
		}
	}

	function closePhoneDropdown() {
		dropdownPhone.style.opacity = "0";
		dropdownPhone.style.transform = "translateY(100%)";
		menuPhone.style.backgroundImage = "url(../images/icon-hamburger.svg)";
		setTimeout(function () {
			dropdownPhone.style.display = "none";
		}, 300);
	}

	function phoneMenuDropdown(e) {
		const isDropdownButton = e.target.matches("[data-dropdown-button-phone]");
		if (!isDropdownButton && !e.target.closest(".subdivPhone")) {
			document.querySelectorAll(".subdivPhone").forEach((dropdown) => {
				dropdown.style.display = "none";
			});
			return;
		}

		const currentDropdown = e.target.nextElementSibling;

		document.querySelectorAll(".subdivPhone").forEach((dropdown) => {
			if (dropdown !== currentDropdown) {
				dropdown.style.display = "none";
			}
		});

		currentDropdown.style.display = currentDropdown.style.display === "flex" ? "none" : "flex";
	}

	menuPhone.addEventListener("click", dropdownPhoneVersion);
	document.addEventListener("click", dropdown);
	document.addEventListener("click", phoneMenuDropdown);
	window.addEventListener("resize", screenWidth);
});
