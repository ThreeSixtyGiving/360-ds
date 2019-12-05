This is the draft of an internal Grid system, to be nested in the main content area of the Layout Module.

It has two variants:

`.grid.grid--two-columns`
This renders a two column layout in the section.

`.grid.grid--three-columns`
This renders a three column layout in the section.

In both layout variants, we can use the following classes in the child elements to control column span

```
.grid__1
.grid__2   # Spans 2 columns
.grid__3   # Spans 3 columns
.grid__all # Spans all columns
```