// ======================================
// PROJECT AURORA
// Milestone 1.1
// ======================================

// Mouse Glow Effect

const glow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", (e) => {

    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";

});


// ======================================
// Glass Navbar on Scroll
// ======================================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {

        navbar.style.background = "rgba(9,16,28,.75)";
        navbar.style.backdropFilter = "blur(16px)";
        navbar.style.border = "1px solid rgba(255,255,255,.08)";
        navbar.style.borderRadius = "18px";
        navbar.style.padding = "16px 25px";
        navbar.style.transition = ".35s";

    }

    else {

        navbar.style.background = "transparent";
        navbar.style.backdropFilter = "none";
        navbar.style.border = "none";
        navbar.style.padding = "20px 0";

    }

});


// ======================================
// Hero Fade Animation
// ======================================

window.addEventListener("load", () => {

    document.body.style.opacity = "1";

});


// ======================================
// Smooth Button Hover Animation
// ======================================

const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.style.transform = "translateY(-4px)";

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform = "translateY(0px)";

    });

});
