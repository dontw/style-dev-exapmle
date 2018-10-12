# Utility

## Borders

### Add Borders

添加邊框

<div class="p-3 border text-center">
  <div class="testing-inline-block border"></div>
  <div class="testing-inline-block border-top"></div>
  <div class="testing-inline-block border-right"></div>
  <div class="testing-inline-block border-bottom"></div>
  <div class="testing-inline-block border-left mr-0"></div>
</div>

```html
  <div class="border"></div>
  <div class="border-top"></div>
  <div class="border-right"></div>
  <div class="border-bottom"></div>
  <div class="border-left"></div>
```

### Remove Borders

刪除邊框

<div class="p-3 border text-center">
  <div class="testing-inline-block--border border-0"></div>
  <div class="testing-inline-block--border border-top-0"></div>
  <div class="testing-inline-block--border border-right-0"></div>
  <div class="testing-inline-block--border border-bottom-0"></div>
  <div class="testing-inline-block--border border-left-0"></div>
</div>

```html
  <div class="border-0"></div>
  <div class="border-top-0"></div>
  <div class="border-right-0"></div>
  <div class="border-bottom-0"></div>
  <div class="border-left-0"></div>
```

### Color Borders

彩色邊框

<div class="p-3 border text-center">
  <div class="testing-inline-block border border-primary"></div>
  <div class="testing-inline-block border border-secondary"></div>
  <div class="testing-inline-block border border-success"></div>
  <div class="testing-inline-block border border-danger"></div>
  <div class="testing-inline-block border border-warning"></div>
  <div class="testing-inline-block border border-info"></div>
  <div class="testing-inline-block border border-light"></div>
  <div class="testing-inline-block border border-dark"></div>
  <div class="testing-inline-block border border-white"></div>
</div>

```html
<div class="border-primary"></div>
<div class="border-secondary"></div>
<div class="border-success"></div>
<div class="border-danger"></div>
<div class="border-warning"></div>
<div class="border-info"></div>
<div class="border-light"></div>
<div class="border-dark"></div>
<div class="border-white"></div>
```

### Border Radius

圓角

<div class="p-3 border text-center">
  <div class="testing-inline-block border border-primary rounded"></div>
  <div class="testing-inline-block border border-primary rounded-top"></div>
  <div class="testing-inline-block border border-primary rounded-right"></div>
  <div class="testing-inline-block border border-primary rounded-bottom"></div>
  <div class="testing-inline-block border border-primary rounded-left"></div>
  <div class="testing-inline-block border border-primary rounded-circle"></div>
  <div class="testing-inline-block border border-primary rounded-0"></div>
</div>

```html
  <div class="rounded"></div>
  <div class="rounded-top"></div>
  <div class="rounded-right"></div>
  <div class="rounded-bottom"></div>
  <div class="rounded-left"></div>
  <div class="rounded-circle"></div>
  <div class="rounded-0"></div>
```

## Clearfix

清除浮動

```html
<div class="clearfix">...</div>
```

```scss
.element {
  @include clearfix;
}
```

下面的例子顯示了如何使用清除浮動。不使用清除浮動，外層 div 將不會包覆按鈕而導致跑版。

<div class="p-3 border text-center">
  <div class="bg-primary clearfix">
    <button type="button" class="btn btn-secondary float-left">Example Button floated left</button>
    <button type="button" class="btn btn-secondary float-right">Example Button floated right</button>
  </div>
</div>

```html
<div class="bg-info clearfix"><!-- 父層clearfix -->
  <button type="button" class="btn btn-secondary float-left">Example Button floated left</button><!-- 子層有float -->
  <button type="button" class="btn btn-secondary float-right">Example Button floated right</button><!-- 子層有float -->
</div>
```

## Close Icon

<div class="p-3 border clearfix mt-3">
  按鈕在右邊喔----->
  <button type="button" class="close" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</div>

```html
<button type="button" class="close" aria-label="Close">
  <span aria-hidden="true">&times;</span>
</button>
```

## Colors

### Text Colors

<div class="p-3 border">
  <p class="text-primary">.text-primary</p>
  <p class="text-secondary">.text-secondary</p>
  <p class="text-success">.text-success</p>
  <p class="text-danger">.text-danger</p>
  <p class="text-warning">.text-warning</p>
  <p class="text-info">.text-info</p>
  <p class="text-light bg-dark">.text-light</p>
  <p class="text-dark">.text-dark</p>
  <p class="text-muted">.text-muted</p>
  <p class="text-white bg-dark">.text-white</p>
</div>

```html
<p class="text-primary">.text-primary</p>
<p class="text-secondary">.text-secondary</p>
<p class="text-success">.text-success</p>
<p class="text-danger">.text-danger</p>
<p class="text-warning">.text-warning</p>
<p class="text-info">.text-info</p>
<p class="text-light">.text-light</p>
<p class="text-dark">.text-dark</p>
<p class="text-muted">.text-muted</p>
<p class="text-white">.text-white</p>
```

### Link Colors

連結會有 hover 及 focus 狀態 ( hover & focus 顏色會變暗，但 muted 和 white 不會 )

<div class="p-3 border">
  <p><a href="#" class="text-primary">Primary link</a></p>
  <p><a href="#" class="text-secondary">Secondary link</a></p>
  <p><a href="#" class="text-success">Success link</a></p>
  <p><a href="#" class="text-danger">Danger link</a></p>
  <p><a href="#" class="text-warning">Warning link</a></p>
  <p><a href="#" class="text-info">Info link</a></p>
  <p><a href="#" class="text-light bg-dark">Light link</a></p>
  <p><a href="#" class="text-dark">Dark link</a></p>
  <p><a href="#" class="text-muted">Muted link</a></p>
  <p><a href="#" class="text-white bg-dark">White link</a></p>
</div>

```html
  <p><a href="#" class="text-primary">Primary link</a></p>
  <p><a href="#" class="text-secondary">Secondary link</a></p>
  <p><a href="#" class="text-success">Success link</a></p>
  <p><a href="#" class="text-danger">Danger link</a></p>
  <p><a href="#" class="text-warning">Warning link</a></p>
  <p><a href="#" class="text-info">Info link</a></p>
  <p><a href="#" class="text-light">Light link</a></p>
  <p><a href="#" class="text-dark">Dark link</a></p>
  <p><a href="#" class="text-muted">Muted link</a></p>
  <p><a href="#" class="text-white">White link</a></p>
```

### Background Color

背景色

<div class="p-3 border">
  <div class="p-3 mb-2 bg-primary">primary</div>
  <div class="p-3 mb-2 bg-secondary">secondary</div>
  <div class="p-3 mb-2 bg-success text-white">success</div>
  <div class="p-3 mb-2 bg-danger text-white">danger</div>
  <div class="p-3 mb-2 bg-warning">warning</div>
  <div class="p-3 mb-2 bg-info text-white">info</div>
  <div class="p-3 mb-2 bg-light text-dark">light</div>
  <div class="p-3 mb-2 bg-dark text-white">dark</div>
  <div class="p-3 mb-2 bg-white text-dark">white</div>
</div>

```html
<div class="bg-primary">primary</div>
<div class="bg-secondary">secondary</div>
<div class="bg-success">success</div>
<div class="bg-danger">danger</div>
<div class="bg-warning">warning</div>
<div class="bg-info">info</div>
<div class="bg-light">light</div>
<div class="bg-dark">dark</div>
<div class="bg-white">white</div>
```

### Background Gradient Color

當 $enable-gradients 設置為 true 時，您將可以使用 .bg-gradient- 的通用類別。 預設情況下，$enable-gradients 是停用的

<div class="p-3 border">
  <div class="p-3 mb-2 bg-gradient-primary text-white">.bg-primary</div>
  <div class="p-3 mb-2 bg-gradient-secondary text-white">.bg-gradient-secondary</div>
  <div class="p-3 mb-2 bg-gradient-success text-white">.bg-gradient-success</div>
  <div class="p-3 mb-2 bg-gradient-danger text-white">.bg-gradient-danger</div>
  <div class="p-3 mb-2 bg-gradient-warning text-dark">.bg-gradient-warning</div>
  <div class="p-3 mb-2 bg-gradient-info text-white">.bg-gradient-info</div>
  <div class="p-3 mb-2 bg-gradient-light text-dark">.bg-gradient-light</div>
  <div class="p-3 mb-2 bg-gradient-dark text-white">.bg-gradient-dark</div>
</div>

```html
  <div class="bg-gradient-primary">.bg-primary</div>
  <div class="bg-gradient-secondary">.bg-gradient-secondary</div>
  <div class="bg-gradient-success">.bg-gradient-success</div>
  <div class="bg-gradient-danger">.bg-gradient-danger</div>
  <div class="bg-gradient-warning">.bg-gradient-warning</div>
  <div class="bg-gradient-info">.bg-gradient-info</div>
  <div class="bg-gradient-ligh">.bg-gradient-light</div>
  <div class="bg-gradient-dark">.bg-gradient-dark</div>
```

## Display

### 用法

新增 class 至指定元素中

- `.d-{value}` for xs
- `.d-{breakpoint}-{value}`

breakpoint 的值如下：

- sm
- md
- lg
- xl
- print(列印模式)

value 的值如下：

- none
- inline
- inline-block
- block
- table
- table-cell
- table-row
- flex
- inline-flex

## Embeds

內嵌

### 關於

將這些規則直接應用到 `<iframe>, <embed>, <video>, 和 <object>`元素；當需要這些樣式對應屬性時可加入 .embed-responsive-item。

小技巧 你不需要將 frameborder="0" 加在你的`<iframe>`中，因為我們已經為你覆蓋了該屬性。

<div class="p-3 border">
  <div class="embed-responsive embed-responsive-16by9">
    <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/WdQnEHuFdkw" allowfullscreen></iframe>
  </div>
</div>

### 長寬比

通過修改 Class 可以自訂高寬比。

```html
<!-- 21:9 aspect ratio -->
<div class="embed-responsive embed-responsive-21by9">
  <iframe class="embed-responsive-item" src="..."></iframe>
</div>

<!-- 16:9 aspect ratio -->
<div class="embed-responsive embed-responsive-16by9">
  <iframe class="embed-responsive-item" src="..."></iframe>
</div>

<!-- 4:3 aspect ratio -->
<div class="embed-responsive embed-responsive-4by3">
  <iframe class="embed-responsive-item" src="..."></iframe>
</div>

<!-- 1:1 aspect ratio -->
<div class="embed-responsive embed-responsive-1by1">
  <iframe class="embed-responsive-item" src="..."></iframe>
</div>
```

## Flex

[Bootstrap Flex](https://bootstrap.hexschool.com/docs/4.1/utilities/flex/)

## Float

### 用法

新增 class 至 指定元素中

- `.float-{value}`
- `.float-{breakpoint}-{value}`

breakpoint 的值如下：

- sm
- md
- lg
- xl
- print(列印模式)

value 的值如下：

- left
- right
- none

### Classes

```html
<div class="float-left">Float left on all viewport sizes</div><br>
<div class="float-right">Float right on all viewport sizes</div><br>
<div class="float-none">Don't float on all viewport sizes</div>
```

### Mixin

```scss
.elementHere {
  @include float-left;
}
.another-element {
  @include float-right;
}
.one-more {
  @include float-none;
}
```

### RWD

```html
<div class="float-sm-left">Float left on viewports sized SM (small) or wider</div><br>
<div class="float-md-left">Float left on viewports sized MD (medium) or wider</div><br>
<div class="float-lg-left">Float left on viewports sized LG (large) or wider</div><br>
<div class="float-xl-left">Float left on viewports sized XL (extra-large) or wider</div><br>
```

## Position

### 通用屬性

```html
<div class="position-static">...</div>
<div class="position-relative">...</div>
<div class="position-absolute">...</div>
<div class="position-fixed">...</div>
<div class="position-sticky">...</div>
```

### 固定在頂部

```html
<div class="fixed-top">...</div>
```

### 固定在底部

```html
<div class="fixed-bottom">...</div>
```

### 貼齊在頂端(Sticy Top)

```html
<div class="sticky-top">...</div>
```

## Shadows

陰影

<div class="p-3 border">
  <div class="shadow-none p-3 mb-5 bg-light rounded">No shadow</div>
  <div class="shadow-sm p-3 mb-5 bg-white rounded">Small shadow</div>
  <div class="shadow p-3 mb-5 bg-white rounded">Regular shadow</div>
  <div class="shadow-lg p-3 mb-5 bg-white rounded">Larger shadow</div>
</div>

```html
<div class="shadow-none">No shadow</div>
<div class="shadow-sm">Small shadow</div>
<div class="shadow">Regular shadow</div>
<div class="shadow-lg">Larger shadow</div>
```

## Sizing

尺寸
