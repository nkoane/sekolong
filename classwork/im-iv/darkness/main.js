const switchButton = document.querySelector('button#switch');
switchButton.onclick = () => {
  const isDarkModeOn = document.querySelector('body').classList.toggle('darkmode');
  if (isDarkModeOn === true) {
    switchButton.textContent = 'light';
  } else {
    switchButton.textContent = 'dark';
  }
};
