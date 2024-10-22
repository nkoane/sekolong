document.addEventListener("DOMContentLoaded", () => {
  const slider = document.querySelector("section");

  function nextItem(slider) {
    const item = document.querySelector("section div:first-child");
    slider.append(item);
  }

  function previousItem(slider) {
    const item = document.querySelector("section div:last-child");
    slider.prepend(item);
  }

  document.getElementById("next").onclick = () => {
    nextItem(slider);
  };
  document.getElementById("previous").onclick = () => {
    previousItem(slider);
  };

  document.addEventListener("keyup", (e) => {
    if (e.key === "ArrowRight") {
      nextItem(slider);
    }

    if (e.key === "ArrowLeft") {
      previousItem(slider);
    }
  });
});
