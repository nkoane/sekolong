document.addEventListener("DOMContentLoaded", () => {
  const slideshow = document.querySelector("main ol");
  document.addEventListener("keyup", (event) => {
    if (event.code === "Space") {
      slideshow.appendChild(slideshow.firstElementChild);
    }
  });
});
