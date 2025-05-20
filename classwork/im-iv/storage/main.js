document.addEventListener('DOMContentLoaded', () => {
  if (window.localStorage.getItem('theme') === 'dark') {
    document.querySelector('body').classList.add('dark');
  }

  document.querySelector('a.dark').addEventListener('click', () => {
    document.querySelector('body').classList.add('dark');
    window.localStorage.setItem('theme', 'dark');
  });

  document.querySelector('a.light').addEventListener('click', () => {
    document.querySelector('body').classList.remove('dark');
    window.localStorage.setItem('theme', 'light');
  });
});
