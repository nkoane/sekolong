# Boot Camp 00: Random Image Loader

This beginner project displays a large image and replaces it with a new random
image when clicked.

## What this code does

- `index.html` shows an image inside `<main>`.
- `main.js`:
  - sets an initial image from `picsum.photos` when the page loads,
  - listens for image clicks,
  - shows a local spinner GIF immediately,
  - then swaps to a newly generated random image URL.
- `main.css` centers the image card and adds hover feedback.

## Why this is useful

This teaches core front-end skills:

- selecting elements from the DOM,
- handling events,
- updating attributes (`img.src`),
- giving users feedback during loading.

## Files in this folder

- `index.html` – page and image container.
- `main.js` – random image behavior.
- `main.css` – layout and styles.
- `images/` – local assets (`spinner.gif`, sample guava images).

## Practice idea

Show a caption with the random seed number after each click.
