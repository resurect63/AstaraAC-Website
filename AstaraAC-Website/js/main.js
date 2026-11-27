
/* ========================================
   ASTARAAC — MAIN JAVASCRIPT
   Created by Resurect
======================================== */

"use strict";

document.addEventListener("DOMContentLoaded", () => {

    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");

    if (!menuToggle || !navLinks) {
        return;
    }

    // Toggle mobile navigation
    function toggleMenu() {
        const isOpen = navLinks.classList.toggle("active");

        menuToggle.setAttribute(
            "aria-expanded",
            String(isOpen)
        );
    }

    // Close mobile navigation
    function closeMenu() {
        navLinks.classList.remove("active");

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );
    }

    // Menu button
    menuToggle.addEventListener("click", toggleMenu);

    // Close menu after clicking a navigation link
    navLinks.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", closeMenu);
    });

    // Close menu with Escape key
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            closeMenu();
        }
    });

    // Close menu when clicking outside
    document.addEventListener("click", (event) => {
        const clickedInsideMenu = navLinks.contains(event.target);
        const clickedToggle = menuToggle.contains(event.target);

        if (!clickedInsideMenu && !clickedToggle) {
            closeMenu();
        }
    });

    // Reset menu when switching to desktop layout
    window.addEventListener("resize", () => {
        if (window.innerWidth > 700) {
            closeMenu();
        }
    });

});
