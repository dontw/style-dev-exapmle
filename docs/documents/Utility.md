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

::: tip
你不需要將 frameborder="0" 加在你的`<iframe>`中，因為我們已經為你覆蓋了該屬性。
:::

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

## Sizing\*

尺寸

### 用法

新增 class 至 指定元素中

- `.{sizing}-{value}`
- `.{sizing}-{breakpoint}-{value}`

sizing 的值如下：

- `w`:width
- `h`:height
- `max-w`: max-width
- `max-h`: max-height
- `min-w`: min-width
- `min-h`: min-height

breakpoint 的值如下：

- sm
- md
- lg
- xl

value 的值如下：

- 10, 15, 20 ... 100
- auto

<div class="p-3 border">
  <div class="w-10 p-1" style="background-color: #eee;">Width 10%</div>
  <div class="w-15 p-1" style="background-color: #eee;">Width 15%</div>
  <div class="w-20 p-1" style="background-color: #eee;">Width 20%</div>
  <div class="w-25 p-1" style="background-color: #eee;">Width 25%</div>
  <div class="w-30 p-1" style="background-color: #eee;">Width 30%</div>
  <div class="w-35 p-1" style="background-color: #eee;">Width 35%</div>
  <div class="w-40 p-1" style="background-color: #eee;">Width 40%</div>
  <div class="w-45 p-1" style="background-color: #eee;">Width 45%</div>
  <div class="w-50 p-1" style="background-color: #eee;">Width 50%</div>
  <div class="w-55 p-1" style="background-color: #eee;">Width 55%</div>
  <div class="w-60 p-1" style="background-color: #eee;">Width 60%</div>
  <div class="w-65 p-1" style="background-color: #eee;">Width 65%</div>
  <div class="w-70 p-1" style="background-color: #eee;">Width 70%</div>
  <div class="w-75 p-1" style="background-color: #eee;">Width 75%</div>
  <div class="w-80 p-1" style="background-color: #eee;">Width 80%</div>
  <div class="w-85 p-1" style="background-color: #eee;">Width 85%</div>
  <div class="w-90 p-1" style="background-color: #eee;">Width 90%</div>
  <div class="w-95 p-1" style="background-color: #eee;">Width 95%</div>
  <div class="w-100 p-1" style="background-color: #eee;">Width 100%</div>
  <div class="w-auto p-1" style="background-color: #eee;">Width auto</div>
</div>

```html
<div class="w-10 p-1" style="background-color: #eee;">Width 10%</div>
<div class="w-15 p-1" style="background-color: #eee;">Width 15%</div>
<div class="w-20 p-1" style="background-color: #eee;">Width 20%</div>
<div class="w-25 p-1" style="background-color: #eee;">Width 25%</div>
<div class="w-30 p-1" style="background-color: #eee;">Width 30%</div>
<div class="w-35 p-1" style="background-color: #eee;">Width 35%</div>
<div class="w-40 p-1" style="background-color: #eee;">Width 40%</div>
<div class="w-45 p-1" style="background-color: #eee;">Width 45%</div>
<div class="w-50 p-1" style="background-color: #eee;">Width 50%</div>
<div class="w-55 p-1" style="background-color: #eee;">Width 55%</div>
<div class="w-60 p-1" style="background-color: #eee;">Width 60%</div>
<div class="w-65 p-1" style="background-color: #eee;">Width 65%</div>
<div class="w-70 p-1" style="background-color: #eee;">Width 70%</div>
<div class="w-75 p-1" style="background-color: #eee;">Width 75%</div>
<div class="w-80 p-1" style="background-color: #eee;">Width 80%</div>
<div class="w-85 p-1" style="background-color: #eee;">Width 85%</div>
<div class="w-90 p-1" style="background-color: #eee;">Width 90%</div>
<div class="w-95 p-1" style="background-color: #eee;">Width 95%</div>
<div class="w-100 p-1" style="background-color: #eee;">Width 100%</div>
<div class="w-auto p-1" style="background-color: #eee;">Width auto</div>
```

### RWD

<div class="p-3 border">
  <div class="max-w-100 max-w-sm-80 max-w-md-70 max-w-lg-60 max-w-xl-50 bg-info p-3"></div>
</div>

```html
  <div class="max-w-100 max-w-sm-80 max-w-md-70 max-w-lg-60 max-w-xl-50 bg-info"></div>
```

## Spacing

新增

### 用法

新增 class 至 指定元素中

- `.{property}-{size}`
- `.{property}-{breakpoint}-{size}`
- `.{property}{sides}-{size}`
- `.{property}{sides}-{breakpoint}-{size}`
- `.{property}{sides}-{breakpoint}-{size}`

property 的值如下：

- `m`: margin
- `p`: padding

sides 的值如下：

- `t`: top
- `r`: right
- `b`: bottom
- `l`: left
- `x`: left and right
- `y`: top and bottom
- `空白`: top, left, bottom and left

size 的值如下：

$spacer 預設值為 1rem

- 0: 將 margin 或 padding 歸 0
- 1: $spacer \* 0.25
- 2: $spacer \* 0.5
- 3: $spacer \* 1
- 4: $spacer \* 1.5
- 5: $spacer \* 3
- auto: 在 margin 時才有

breakpoint 的值如下：

- sm
- md
- lg
- xl

<div class="p-3 border">
    <div class="testing-inline-block border border-primary mr-2 mr-sm-1"></div>
    <div class="testing-inline-block border border-primary mr-2 mr-sm-2"></div>
    <div class="testing-inline-block border border-primary mr-2 mr-sm-3"></div>
    <div class="testing-inline-block border border-primary mr-2 mr-sm-4"></div>
    <div class="testing-inline-block border border-primary mr-2 mr-sm-5"></div>
    <div class="testing-inline-block border border-primary mr-2 mr-sm-0"></div>
</div>

```html
<div class="mr-2 mr-sm-1"></div>
<div class="mr-2 mr-sm-2"></div>
<div class="mr-2 mr-sm-3"></div>
<div class="mr-2 mr-sm-4"></div>
<div class="mr-2 mr-sm-5"></div>
<div class="mr-2 mr-sm-0"></div>
```

## Text

文字

### Text Alignment

將文字與元件對齊

<div class="p-3 border">
  <p class="text-justify">治外問！藥依來是臺影院跟開股育對才一毛活。運排小最實，國身物系在聽變或特中們局畫能笑廣市麼麗前真家資展易命了次發度不維得就也玩那者城活意息院導師師我兒一安情件保業，心個雖氣著立一快反的的少這義智對就陽經學了使己才業所共評我己中即語，是有然天目看去火環國戰新漸活質去時獲她加在信布行叫上會我化園多是我提……導灣度，標到來此會北，在有利太為料有應學的拉最學給教長孩細利品裡算步投了流看性的質中有了！邊大國。我現天，職出入的部及的馬只人著走演進得英更現，過在他一法……年成成股舉市地心時過續底李部？</p>
</div>

```html
<p class="text-justify">...</p>
```

<div class="p-3 border">
  <p class="text-left">我在左邊</p>
  <p class="text-center">我在中間</p>
  <p class="text-right">我在右邊</p>
</div>

```html
<p class="text-left">我在左邊</p>
<p class="text-center">我在中間</p>
<p class="text-right">我在右邊</p>
```

### Text Transform

變換字的大小寫

<div class="p-3 border">
  <p class="text-lowercase">小寫：lowercased text</p>
  <p class="text-uppercase">大寫：uppercased text</p>
  <p class="text-capitalize">首字大寫：first letter capitalized</p>
</div>

```html
<p class="text-lowercase">小寫：lowercased text</p>
<p class="text-uppercase">大寫：uppercased text</p>
<p class="text-capitalize">首字大寫：first letter capitalized</p>
```

### Text weight , italic and monospace

字的粗細、斜體與等寬字

<div class="p-3 border">
  <p class="font-weight-bold">我是粗體 I am bold </p>
  <p class="font-weight-normal">我是一般 I am normal</p>
  <p class="font-weight-light">我是細體 I am light</p>
  <p class="font-italic">我是斜體 I am italic</p>
  <p class="text-monospace">我是等寬 I am monospace</p>
</div>

```html
<p class="font-weight-bold">我是粗體 I am bold </p>
<p class="font-weight-normal">我是一般 I am normal</p>
<p class="font-weight-light">我是細體 I am light</p>
<p class="font-italic">我是斜體 I am italic</p>
<p class="text-monospace">我是等寬 I am monospace</p>
```

## Verticle Alignment

::: warning
垂直對齊僅影響 `inline`、`inline-block`、`inline-table`、和 `table` 元素。
:::

### inline

<div class="p-3 border">
  <span class="align-baseline">baseline</span>
  <span class="align-top">top</span>
  <span class="align-middle">middle</span>
  <span class="align-bottom">bottom</span>
  <span class="align-text-top">text-top</span>
  <span class="align-text-bottom">text-bottom</span>
</div>

```html
<span class="align-baseline">baseline</span>
<span class="align-top">top</span>
<span class="align-middle">middle</span>
<span class="align-bottom">bottom</span>
<span class="align-text-top">text-top</span>
<span class="align-text-bottom">text-bottom</span>
```

### table

<div class="p-3 border">
<div class="d-table" style="height: 100px;">
  <tbody>
    <tr>
      <td class="align-baseline">baseline</td>
      <td class="align-top">top</td>
      <td class="align-middle">middle</td>
      <td class="align-bottom">bottom</td>
      <td class="align-text-top">text-top</td>
      <td class="align-text-bottom">text-bottom</td>
    </tr>
  </tbody>
</div>
</div>

```html
<div class="d-table" style="height: 100px;">
  <tbody>
    <tr>
      <td class="align-baseline">baseline</td>
      <td class="align-top">top</td>
      <td class="align-middle">middle</td>
      <td class="align-bottom">bottom</td>
      <td class="align-text-top">text-top</td>
      <td class="align-text-bottom">text-bottom</td>
    </tr>
  </tbody>
</div>
```

## Visibility

把元素變不見，而且不會佔空間

```html
<div class="visible">...</div>
<div class="invisible">...</div>
```

```scss
// Class
.visible {
  visibility: visible;
}
.invisible {
  visibility: hidden;
}

// Usage as a mixin
.element {
  @include invisible(visible);
}
.element {
  @include invisible(hidden);
}
```
