This is a minimalist accordion component, with some accessibility best practices applied.

To work, the `.accordian__trigger` element needs to be placed inside the `.accordian` wrapper.

```
.accordion
  # This is wrapper element, and it receives the class toggle
  .accordion__trigger
  # This is the trigger for opening and closing of this accordion
  # It should be placed outside os .accordion__extra tag

  .accordion__extra + [aria-hidden]
  # This is the element that gets toggled (hides and shows).
  # We use max-height and overflow-hidden to make the transitions possible without further use of Javascript.
```