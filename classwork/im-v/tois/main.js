document.querySelector('button.lightness').onclick = function () {
  document.querySelector('body').classList.remove('dark');
};

document.querySelector('button.darkness').onclick = function () {
  document.querySelector('body').classList.add('dark');
};
