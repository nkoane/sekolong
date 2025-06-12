document.addEventListener('DOMContentLoaded', function () {
  const ball = document.getElementById('ball');
  document.addEventListener('mousemove', (event) => {
    ball.style.left = `${event.clientX}px`;
    ball.style.top = `${event.clientY}px`;
  });
});
