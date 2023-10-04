# CSS Navigation

This is just to illustrated the pseudo-class `:target` and how it can be used to create a simple navigation system.

The code that does most of the work is this:

```css
main div#sectors section {
    display: none;

    &:target {
        display: grid;
    }
}
```

This works because the `<section>` elements are the children of the `<div id="sectors">` element. The `:target` pseudo-class is applied to the `<section>` elements, so when the URL changes to `#one` the `<section>` element with the `id="one"` is displayed.
