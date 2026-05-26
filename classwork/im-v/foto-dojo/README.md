# MOO DOO: Foto Dojo Project

**Welcome, students!** This README explains the code in the current project directory. It is intended to help you understand the structure and functionality of the codebase.

---

## Purpose
The project dynamically displays photographic imagery fetched from an external API. It combines HTML, CSS, and JavaScript. The end result is an interactive web application with:
- A visually centered layout.
- Animated background transitions.
- Links to image sources.

### Philosophy
The name "MOO DOO" along with "skin+diamond" is an abstract concept. It reflects the play of contrast (light and dark, motion and stillness, image and metadata) expressed visually.

---

### Code Overview

#### 1. **`index.html`: Structural Skeleton**
This file defines the structure of the HTML document.

**Key Points:**
- Links the *CSS* (`main.css`) for style.
- Links the *JavaScript* (`main.js`), ensuring it loads **deferred** (after the DOM content is ready).
- Contains a centered `<main>` container with an `<h1>` header.
- `<a>` tag in the `<h1>` dynamically updates to show the author of a fetched image.

```html
<title>MOO DOO</title>
<main>
  <h1><a href="#">skin+diamond</a></h1>
</main>
```
- **Interesting:** `images/flower.svg` is the favicon.

#### 2. **`main.css`: Styling the Display**
This file brings the layout and animations to life.

**Major Features:**
- **Grid layout:** The `<main>` and `<h1>` are centered both vertically and horizontally.
- **Pulsing animation (`@keyframes pulse`):** Provides an eye-catching background pulse effect.
  ```css
  @keyframes pulse {
      0%, 100% { background-color: #fff; }
      50% { background-color: #000; }
  }
  ```
- **Hovered styles:** When the user hovers over the link (`a` tag), the text color transitions, and the `saturate(0)` filter gives it a grayscale effect.

#### 3. **`main.js`: Adding Interactivity**
This file fetches a random image and dynamically updates the page.

**Key Functionalities:**
- **API Integration:** Fetches 100 images from the `https://picsum.photos` image service.
- **Dynamic Background:** A random image from the API populates the `<main>` container as a background.
- **Responsive Behavior:** Ensures the image adjusts dynamically when the browser resizes.
  ```javascript
  const setBackgroundImage = (dimensions) => {
    const backgroundUrl = `https://picsum.photos/id/${imgData.id}/${dimensions.width}/${dimensions.height}`;
    container.style.backgroundImage = `url(${backgroundUrl})`;
  };
  ```
- **Error Handling:** Displays a Sesotho alert (`Tsa'mo reka data!`) if the data fetch fails.

**Cool Concept:** Adapts the link `<a>` to reflect the image author's name and link.

### How the Code Interacts
1. **Rendering:** HTML is the structure. By itself, it is plain.
2. **Styling:** CSS adds the presentation (colors, layout, animations).
3. **Dynamics:** JavaScript fetches and updates content, turning the page into an interactive experience.

---

## Key Lessons
1. **Responsive Design Matters:** Ensuring the project looks good on different devices requires dynamic coding.
2. **API-driven Development:** Connecting to an external service like `picsum.photos` makes content fresh and interesting.
3. **Progressive Enhancement:** Even without JavaScript, the basic HTML/CSS layout is complete and meaningful.

---

Good luck exploring and extending the project!