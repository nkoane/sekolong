document.addEventListener("DOMContentLoaded", function () {
  const canvas = document.querySelector("canvas");
  const ctx = canvas.getContext("2d");

  let x = 0;
  let y = 0;
  let vx = 0;
  let vy = 0;
  let width = canvas.width;
  let height = canvas.height;

  function draw() {
    ctx.clearRect(0, 0, width, height);
    // fill with random colour
    ctx.fillStyle = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
    //ctx.fillStyle = "#00FFFF";
    // add a circle
    ctx.beginPath();
    ctx.arc(x, y, 5, 0, Math.PI * 2);
    ctx.fill();

    //ctx.fillRect(x, y, 10, 10);
    vx += 0.1;
    vy += 0.1;
    x += vx;
    y += vy;
    if (x > width || x < 0) {
      vx = -vx;
    }
    if (y > height || y < 0) {
      vy = -vy;
    }
    requestAnimationFrame(draw);
  }
  draw();
});
