# Boot Camp 02 - Building Consistent Multi-Page Layouts

In this session, I am training you to think like a front-end developer who
cares about structure, readability, and user flow.

We are using a small gallery project to practice four fundamentals:

1. HTML page structure
2. CSS layout and visual behavior
3. Navigation between pages
4. Consistency across the whole experience

## Learning Goals

By the end of this exercise, you should be able to:

- Build clean HTML documents with meaningful sections
- Reuse shared CSS rules across multiple pages
- Create predictable navigation with links and thumbnails
- Keep repeated UI blocks visually and structurally consistent

## What We Built

- `index.html`: the root page with a grid gallery of images
- `one.html` and `two.html`: detail pages for selected gallery items
- `main.css`: shared styles for layout, typography, and image states
- `main.js`: placeholder for future interactive behavior

## Lecture Notes

### 1) HTML: Structure before style

Treat HTML as the skeleton of your interface.

- Every page follows the same document setup: `doctype`, `head`, and `body`
- Content is grouped under a `main` container for semantic clarity
- Repeated blocks (logo, heading, text, gallery/thumbnails) stay in the same
  order across pages

Key principle: if your structure is stable, styling and maintenance become
easier.

### 2) CSS: One source of layout truth

The `main.css` file controls shared presentation.

- Grid layout defines how sections are placed
- Reusable selectors keep spacing and typography aligned
- Thumbnail and gallery image states (grayscale/hover/selected) create clear
  visual feedback

Key principle: avoid page-specific style duplication when one shared rule can
solve it.

### 3) Navigation: Help users move without thinking

Navigation is implemented with anchor links between pages.

- Root gallery links users from `index.html` to detail pages
- Thumbnail lists on detail pages support quick switching
- The logo links back to the home page for a reliable exit route

Key principle: every page should make the next action obvious.

### 4) Consistency: Design a pattern, then repeat it

Consistency is not boring; it is what makes interfaces usable.

- Same layout grid across pages
- Same text hierarchy (`h1`, paragraph flow)
- Same image behavior and spacing rhythm
- Same navigation zones in familiar positions

Key principle: users should learn the layout once and reuse that knowledge
everywhere.

## Practice Tasks for Learners

1. Add `three.html`, `four.html`, and `five.html` using the same structure.
2. Keep the selected thumbnail state accurate on each page.
3. Add short, unique copy on each detail page without breaking layout
   consistency.
4. Move repeated page sections into a reusable pattern you can replicate
   quickly.

## Common Mistakes to Avoid

- Changing layout structure per page without a reason
- Inconsistent link paths between pages
- Mixing inline styles with shared stylesheet rules
- Breaking visual rhythm with random spacing values

## Next Step

In the next lecture, we can use `main.js` to add progressive enhancement:

- keyboard-friendly thumbnail navigation
- active state updates from URL or click events
- small interactions while preserving the existing HTML/CSS foundation
