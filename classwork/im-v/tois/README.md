# L:GHT HOUSE

This is a simple web project that demonstrates how to toggle between light and dark mode using two buttons: one for dark mode and one for light mode.

## Features

- **Light/Dark Mode Toggle:** Switch between light and dark themes using dedicated buttons.
- **Smooth Transition:** The background color transitions smoothly when toggling modes.
- **Minimal Setup:** No dependencies or frameworks required.

## Files

- [`index.html`](index.html): The main HTML file containing the two toggle buttons.
- [`main.css`](main.css): Contains styles for light and dark modes.
- [`main.js`](main.js): Handles the button click events to toggle the dark mode.

## How It Works

1. The page loads in light mode by default.
2. There are two buttons: "Dark Mode" and "Light Mode".
3. Clicking the "Dark Mode" button adds the `dark` class to the `<body>`, switching to dark mode.
4. Clicking the "Light Mode" button removes the `dark` class from the `<body>`, switching to light mode.
5. The CSS changes the background and text color based on whether the `dark` class is present.

## Usage

1. **Clone or download this repository.**
2. Open [`index.html`](index.html) in your web browser.
3. Click the "Dark Mode" button to enable dark mode, or the "Light Mode" button to return to light mode.

## Customization

- Edit the content inside the `<main>` tag in [`index.html`](index.html) to display your own message or UI.
- Adjust colors in [`main.css`](main.css) to fit your preferences.

## Example

![Demo screenshot](https://user-images.githubusercontent.com/your-demo-image.png) <!-- Replace with your own screenshot if desired -->

## Example HTML

```html
<button id="darkBtn">Dark Mode</button> <button id="lightBtn">Light Mode</button>
```

---

Feel free to use or modify this project for your own needs!
