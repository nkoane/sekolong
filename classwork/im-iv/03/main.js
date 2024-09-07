document.addEventListener("DOMContentLoaded", () => {
  const links = Array.from(document.querySelectorAll("nav a"));
  for (const link of links) {
    link.addEventListener("click", () => {
      for (const a of links) a.classList.remove("selected");
      link.classList.add("selected");
    });
  }

  document.addEventListener("scroll", () => {});

  let trackIndex = 0;

  document.addEventListener("keyup", (event) => {
    console.log(`You pressed: ${event.key}`);
    if (event.key === "ArrowLeft") {
      if (trackIndex === 0) return;
      trackIndex++;
      window.location.href = links[trackIndex].href;
    } else if (event.key === "ArrowRight") {
      if (trackIndex === links.length - 1) return;
      trackIndex--;
      window.location.href = links[trackIndex].href;
    }
  });
});
