const slidesContainer = document.querySelector("main ol");

let isAnimating = false;

slidesContainer.addEventListener("click", (ev) => {
  const target = ev.target.closest("li");
  if (!target || !slidesContainer.contains(target) || isAnimating) return;

  isAnimating = true;

  // slide left by 1 viewport width using transform (GPU-accelerated)
  slidesContainer.style.transform = `translateX(-100vw)`;

  slidesContainer.addEventListener(
    "transitionend",
    () => {
      // move first slide to end for infinite loop
      slidesContainer.style.transition = "none";
      slidesContainer.style.transform = "none";
      slidesContainer.append(slidesContainer.firstElementChild);
      // force reflow before restoring transition
      void slidesContainer.offsetHeight;
      slidesContainer.style.transition = "";
      isAnimating = false;
    },
    { once: true },
  );
});

function add(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    alert("Both arguments must be numbers");
  }
  return a + b;
}
