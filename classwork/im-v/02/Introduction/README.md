# Introduction to Web Development: HTML, CSS & JavaScript Working Together

## Purpose of This Exercise

This lesson demonstrates how the three fundamental technologies of web development—HTML, CSS, and JavaScript—work together to create interactive web experiences. Students will see how each technology plays a distinct role while collaborating to produce a complete, functional webpage.

## The Three Pillars of Web Development

### HTML (HyperText Markup Language)
**Definition**: HTML provides the structure and content of a webpage. It's the skeleton that defines what elements exist on the page.

**In this exercise** (`index.html`):
- Creates a `<div>` element with the ID "ball" (line 10)
- Links the CSS stylesheet (`main.css`) for styling (line 6)
- Includes the JavaScript file (`main.js`) for interactivity (line 11)

### CSS (Cascading Style Sheets)
**Definition**: CSS controls the visual presentation and layout of HTML elements. It's the styling and appearance layer.

**In this exercise** (`main.css`):
- Centers the content using CSS Grid (lines 4-7)
- Styles the ball element with a pink background (lines 10-14)
- Creates two keyframe animations:
  - `pulse`: Makes the background color fade between different shades of pink (lines 21-31)
  - `reduce`: Shrinks the full-screen element to a 50px circle (lines 33-43)
- Uses the `.loaded` class to trigger the reduction animation (lines 17-19)

### JavaScript
**Definition**: JavaScript adds interactivity and dynamic behavior to webpages. It's the brain that makes things happen in response to events.

**In this exercise** (`main.js`):
- Waits for the DOM to be fully loaded using the `DOMContentLoaded` event (line 1)
- Finds the ball element using `querySelector('div#ball')` (line 2)
- Adds the `loaded` class to trigger the CSS reduction animation (line 2)

## How They Work Together: Step-by-Step

1. **HTML Loads First**: The browser parses `index.html` and creates the DOM tree with the ball element
2. **CSS Applies Styling**: The browser applies the CSS rules, making the ball fill the screen with a pulsating pink animation
3. **JavaScript Executes**: Once the DOM is ready, JavaScript runs and adds the `loaded` class
4. **CSS Responds**: The CSS rule for `.loaded` kicks in, triggering the reduction animation that shrinks the ball to a small circle

## Key Learning Outcomes

After completing this exercise, students should understand:

- **Separation of Concerns**: Each technology has a specific responsibility
  - HTML = Structure/Content
  - CSS = Presentation/Styling  
  - JavaScript = Behavior/Interactivity

- **Collaboration**: The technologies depend on each other:
  - JavaScript can't style elements without CSS classes
  - CSS can't respond to user actions without JavaScript
  - Both need HTML elements to work with

- **Event-Driven Programming**: JavaScript responds to events (like `DOMContentLoaded`) to trigger changes

- **CSS Animations**: CSS can handle complex animations without JavaScript once triggered

## Technical Concepts Demonstrated

- DOM (Document Object Model) manipulation
- CSS class-based styling and animations
- Event handling in JavaScript
- CSS Grid for layout
- CSS keyframe animations
- Progressive enhancement (basic functionality works even without JavaScript)

## Running This Exercise

Simply open `index.html` in a web browser. You'll see:
1. Initially: A full-screen pulsating pink background
2. After a moment: The pink background shrinks to a small pink circle in the center

This visual progression clearly demonstrates how JavaScript can modify CSS classes to change the appearance of HTML elements over time.