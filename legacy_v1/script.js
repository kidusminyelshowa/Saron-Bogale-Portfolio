// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

/**
 * Initialize animations after the loader is complete
 */
function initMainAnimations() {
    // Simple, confident entrance for the Hero
    gsap.from(".hero-content", {
        y: 30,
        opacity: 0,
        duration: 1.5,
        ease: "power3.out"
    });

    // Staggered reveal for Narrative rows
    const rows = gsap.utils.toArray(".narrative-row");
    rows.forEach((row) => {
        gsap.from(row, {
            y: 50,
            opacity: 0,
            duration: 1.2,
            ease: "power2.out",
            scrollTrigger: {
                trigger: row,
                start: "top 85%",
                toggleActions: "play none none none" // No reverse to keep it minimal
            }
        });
    });
}

// Attach to global scope
window.initMainAnimations = initMainAnimations;
