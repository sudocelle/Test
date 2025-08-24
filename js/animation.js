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

// 3. Flip Animation (Card flip demo)
function flipDemo() {
  const card = document.getElementById('flip-card');
  if (!card || !window.Flip) return;
  card.addEventListener('click', () => {
    const state = Flip.getState(card);
    card.classList.toggle('flipped');
    Flip.from(state, {
      duration: 1,
      ease: 'power1.inOut',
      absolute: true
    });
  });
}
window.addEventListener('DOMContentLoaded', flipDemo);

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

// 6. cloneNode + GSAP Animation (Duplicate and animate)
function cloneAndAnimate() {
  const main = document.querySelector('main');
  if (!main) return;
  const clone = main.cloneNode(true);
  clone.style.position = 'absolute';
  clone.style.top = '60%';
  clone.style.left = '10%';
  clone.style.opacity = '0';
  document.body.appendChild(clone);
  gsap.to(clone, { opacity: 1, y: -30, duration: 1, delay: 1 });
}
window.addEventListener('DOMContentLoaded', cloneAndAnimate);
