export const exchange = (fig, src, caption) => {
  fig.querySelector('img').src = src;
  fig.querySelector('img').classList.remove('hide');
  fig.querySelector('figcaption').innerHTML = `&copy; ${caption}`;
  fig.classList.remove('loading');
};
