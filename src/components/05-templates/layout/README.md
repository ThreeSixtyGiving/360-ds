# Layout Component

This is just a structural component, and it should be invisible.

It offers two main options shown as variants.

`layout--single-column`
Single column layout, with a max-width of 960px, and centered content. 

`layout--narrow`
this is a variant for `layout--single-column` where the `max-width` is set to 700px; 

`layout--two-columns`
this variant features a sidebar on the left.


This is the high-level page layouts. Right now, it has two options.
This pattern is implemented using `css grid layout`.
We consider that all pages will have the three or four main layout pieces:
Header, Main Content, Footer and maybe a sidebar. 
With CSS Grid Layout, we make sure that both Header and footer will 
take up the necessary space, while the Main Content section will 
expand to fill in the extra space. The Footer should always be aligned to the bottom edge of the viewport.
