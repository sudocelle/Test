// Sample GSAP Animations & Effects
// Make sure to include GSAP and plugins in your HTML via CDN
// Example:
// <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
// <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"></script>
// <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/Flip.min.js"></script>
// <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/TextPlugin.min.js"></script>
// <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/Draggable.min.js"></script>

// 1. Basic Fade In Animation
window.addEventListener('DOMContentLoaded', () => {
  gsap.from("header", { duration: 1, opacity: 0, y: -50, ease: "power2.out" });
});

// 2. ScrollTrigger Animation
if (window.ScrollTrigger) {
  gsap.to("main p", {
    scrollTrigger: {
      trigger: "main p",
      start: "top 80%",
      toggleActions: "play none none none"
    },
    x: 100,
    color: "#e91e63",
    duration: 1.5
  });
}


// 4. Draggable Animation (Make footer draggable)
if (window.Draggable) {
  Draggable.create("footer", {
    type: "x,y",
    edgeResistance: 0.65,
    bounds: "body",
    inertia: true
  });
}

// 5. TextPlugin Animation (Typewriter effect)
if (window.gsap && window.TextPlugin) {
  gsap.registerPlugin(TextPlugin);
  gsap.to("header h1", {
    duration: 2,
    text: "Welcome to Sudocelle 🚀",
    ease: "none"
  });
}

// 6. CloneNode + GSAP Animation (Hero Banner duplication and animation)
function heroBannerCloneAnimation() {
  const banner = document.getElementById('hero-banner');
  if (!banner) return;
  const clone = banner.cloneNode(true);
  clone.id = 'hero-banner-clone';
  clone.style.position = 'absolute';
  clone.style.top = '0';
  clone.style.left = '50%';
  clone.style.transform = 'translateX(-50%) scale(0.7)';
  clone.style.opacity = '0';
  clone.style.zIndex = '10';
  clone.style.pointerEvents = 'none';
  document.getElementById('hero-banner-section').appendChild(clone);
  gsap.to(clone, {
    opacity: 1,
    scale: 1,
    y: 40,
    duration: 1.2,
    ease: 'power2.out',
    delay: 0.5,
    onComplete: () => {
      gsap.to(clone, {
        y: 0,
        boxShadow: '0 8px 32px #b0bec5',
        duration: 0.8,
        ease: 'power1.inOut'
      });
    }
  });
}
window.addEventListener('DOMContentLoaded', heroBannerCloneAnimation);
