function changeBgColour(colour) {
  const square = document.querySelector("main div.square");
  square.style.backgroundColor = colour;
}

const colourSelector = document.querySelector(
  'main form input[type="color"]#colourSelector',
);

colourSelector.addEventListener("input", function () {
  changeBgColour(colourSelector.value);
});

const toggleModeSelector = document.querySelector(
  'main form input[type="checkbox"]#toggleModeSelector',
);

toggleModeSelector.addEventListener("change", function () {
  console.log(toggleModeSelector.checked);

  if (toggleModeSelector.checked === true) {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }
});
