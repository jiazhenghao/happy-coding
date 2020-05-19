自适应：自己根据屏幕宽度的改变而改变（典型的写法不需要 media 判断，直接让每个元素通过相对的宽度，比如百分比、vh、em 等来改变容器的大小，文字的大小）

响应式：根据设备的不同而展示不同的效果（典型的写法就是通过 media 判断，在不同的设备、分辨率下展示不同的页面效果）

Can you explain the difference between coding a website to be responsive versus using a mobile-first strategy?

```
@media (min-width: 601px) {
  .my-class {
    font-size: 24px;
  }
}
@media (max-width: 600px) {
  .my-class {
    font-size: 12px;
  }
}
```

mobile-first

```
.my-class {
  font-size: 12px;
}

@media (min-width: 600px) {
  .my-class {
    font-size: 24px;
  }
}
```
