### Describe `float`s and how they work.

Float is a CSS positioning property. Floated elements remain a part of the flow of the page, and will affect the positioning of other elements (e.g. text will flow around floated elements), unlike `position: absolute` elements, which are removed from the flow of the page.

The CSS `clear` property can be used to be positioned below `left`/`right`/`both` floated elements.

If a parent element contains nothing but floated elements, its height will be collapsed to nothing. It can be fixed by clearing the float after the floated elements in the container but before the close of the container.

The `.clearfix` hack uses a clever CSS [pseudo selector](#describe-pseudo-elements-and-discuss-what-they-are-used-for) (`:after`) to clear floats. Rather than setting the overflow on the parent, you apply an additional class `clearfix` to it. Then apply this CSS:

```css
.clearfix:after {
  content: " ";
  visibility: hidden;
  display: block;
  height: 0;
  clear: both;
}
```

Alternatively, give `overflow: auto` or `overflow: hidden` property to the parent element which will establish a new block formatting context inside the children and it will expand to contain its children.

###### References

- https://css-tricks.com/all-about-floats/

总结：
第一种，再加一个 div 子元素，css 加 clear both
第二种，在父 div 上加一个类：after， clear both
第三种，父 div 加 overflow：auto 或者 hidden
