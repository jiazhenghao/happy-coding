### What's the difference between "resetting" and "normalizing" CSS? Which would you choose, and why?

- **Resetting** - Resetting is meant to strip all default browser styling on elements. For e.g. `margin`s, `padding`s, `font-size`s of all elements are reset to be the same. You will have to redeclare styling for common typographic elements.
- **Normalizing** - Normalizing preserves useful default styles rather than "unstyling" everything. It also corrects bugs for common browser dependencies.

I would choose resetting when I have a very customized or unconventional site design such that I need to do a lot of my own styling and do not need any default styling to be preserved.

###### References

- https://stackoverflow.com/questions/6887336/what-is-the-difference-between-normalize-css-and-reset-css

https://meyerweb.com/eric/tools/css/reset/
