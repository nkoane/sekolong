/*
setInterval(() => {
	document.querySelector("div.box").style.left = Math.random() * 500 + "px";
	document.querySelector("div.box").style.top = Math.random() * 500 + "px";
}, 250);
*/

document.addEventListener("click", (ev) => {
  document.querySelector("div.box").style.left = ev.clientX + "px";
  document.querySelector("div.box").style.top = ev.clientY + "px";
});
