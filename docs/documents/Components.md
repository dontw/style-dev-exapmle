# Components

## Buttons

按鈕

### Button Types

<div class="p-3 border">
  <button type="button" class="btn btn-primary">Primary</button>
  <button type="button" class="btn btn-secondary">Secondary</button>
  <button type="button" class="btn btn-success">Success</button>
  <button type="button" class="btn btn-danger">Danger</button>
  <button type="button" class="btn btn-warning">Warning</button>
  <button type="button" class="btn btn-info">Info</button>
  <button type="button" class="btn btn-light">Light</button>
  <button type="button" class="btn btn-dark">Dark</button>
</div>

```html
<button type="button" class="btn btn-primary">Primary</button>
<button type="button" class="btn btn-secondary">Secondary</button>
<button type="button" class="btn btn-success">Success</button>
<button type="button" class="btn btn-danger">Danger</button>
<button type="button" class="btn btn-warning">Warning</button>
<button type="button" class="btn btn-info">Info</button>
<button type="button" class="btn btn-light">Light</button>
<button type="button" class="btn btn-dark">Dark</button>
```

### Border Buttons

<div class="p-3 border">
  <button type="button" class="btn btn-outline-primary">Primary</button>
  <button type="button" class="btn btn-outline-secondary">Secondary</button>
  <button type="button" class="btn btn-outline-success">Success</button>
  <button type="button" class="btn btn-outline-danger">Danger</button>
  <button type="button" class="btn btn-outline-warning">Warning</button>
  <button type="button" class="btn btn-outline-info">Info</button>
  <button type="button" class="btn btn-outline-light">Light</button>
  <button type="button" class="btn btn-outline-dark">Dark</button>
</div>

```html
<button type="button" class="btn btn-outline-primary">Primary</button>
<button type="button" class="btn btn-outline-secondary">Secondary</button>
<button type="button" class="btn btn-outline-success">Success</button>
<button type="button" class="btn btn-outline-danger">Danger</button>
<button type="button" class="btn btn-outline-warning">Warning</button>
<button type="button" class="btn btn-outline-info">Info</button>
<button type="button" class="btn btn-outline-light">Light</button>
<button type="button" class="btn btn-outline-dark">Dark</button>
```

### Button Sizes

<div class="p-3 border">
  <button type="button" class="btn btn-outline-primary btn-lg">BIG BUTTON</button>
  <button type="button" class="btn btn-info">Normal Button</button>
  <button type="button" class="btn btn-secondary btn-sm">smol button</button>
</div>

```html
<button type="button" class="btn btn-primary btn-lg">BIG BUTTON</button>
<button type="button" class="btn btn-info">Normal Button</button>
<button type="button" class="btn btn-secondary btn-sm">smol button</button>
```

### Long Buttons

<div class="p-3 border">
  <button type="button" class="btn btn-primary btn-long">SUPER LONG</button>
  <button type="button" class="btn btn-outline-secondary btn-long">SUPER LONG jr.</button>
</div>

```html
<button type="button" class="btn btn-primary btn-long">SUPER LONG</button>
<button type="button" class="btn btn-secondary btn-long">SUPER LONG jr.</button>
```

### Button Status

<div class="p-3 border">
  <button type="button" class="btn btn-primary" disabled>disabled button (attribute)</button>
  <button type="button" class="btn btn-primary  disabled">disabled button (class)</button>
  <button type="button" class="btn btn-primary active">active button</button>
</div>

```html
<button type="button" class="btn btn-primary" disabled>disabled button (attribute)</button>
<button type="button" class="btn btn-primary  disabled">disabled button (class)</button>
<button type="button" class="btn btn-primary active">active button</button>
```

### Custom Buttons

```scss
//include mixin to your custom button class
.custom-btn {
  @include button-variant($background-color, $border-color);
}
```

```html
<!-- my custom button -->
<button class="btn custom-btn">...</button>
```

## Buttons Groups

按鈕群組

### Basic Buttons Groups

<div class="p-3 border">
  <div class="btn-group" role="group" aria-label="Basic example">
    <button type="button" class="btn btn-primary">Left</button>
    <button type="button" class="btn btn-primary">Middle</button>
    <button type="button" class="btn btn-primary">Right</button>
  </div>
</div>

```html
<div class="btn-group" role="group" aria-label="Basic example">
    <button type="button" class="btn btn-primary">Left</button>
    <button type="button" class="btn btn-primary">Middle</button>
    <button type="button" class="btn btn-primary">Right</button>
</div>
```

### Button Tool Bar

<div class="p-3 border">
  <div class="btn-toolbar">
    <div class="btn-group mr-2">
      <button type="button" class="btn btn-primary">1</button>
      <button type="button" class="btn btn-primary">2</button>
      <button type="button" class="btn btn-primary">3</button>
      <button type="button" class="btn btn-primary">4</button>
    </div>
    <div class="btn-group mr-2">
      <button type="button" class="btn btn-primary">5</button>
      <button type="button" class="btn btn-primary">6</button>
      <button type="button" class="btn btn-primary">7</button>
    </div>
    <div class="btn-group">
      <button type="button" class="btn btn-primary">8</button>
    </div>
  </div>
</div>

```html
<div class="btn-toolbar">
  <div class="btn-group mr-2">
    <button type="button" class="btn btn-primary">1</button>
    <button type="button" class="btn btn-primary">2</button>
    <button type="button" class="btn btn-primary">3</button>
    <button type="button" class="btn btn-primary">4</button>
  </div>
  <div class="btn-group mr-2">
    <button type="button" class="btn btn-primary">5</button>
    <button type="button" class="btn btn-primary">6</button>
    <button type="button" class="btn btn-primary">7</button>
  </div>
  <div class="btn-group">
    <button type="button" class="btn btn-primary">8</button>
  </div>
</div>
```
