# Get Started

## origin

從 [bootstrap v4.1](https://getbootstrap.com/docs/4.1/getting-started/introduction/) 改造而來

## project

[project's gitlab](http://gitlab.starlux-airlines.com/1801274/starlux-style-guide)

## npm

### 加入本模組至目標專案的 dependencies

```json
//package.json
...
"dependencies": {
    "starlux-style-guide": "git+https://czpzfFfoYgz78h9n9c6s:x-oauth-basic@gitlab.com/dontw/style-dev-exapmle.git",
    "vue": "^2.5.17",
    //other modules...
  },
...
```

### 進行安裝

```shell
npm i
```

### 引入至專案的 scss 檔案中

```scss
//myproject/src/scss/main.scss
@import 'my-custom-variable';
@import '~starlux-style-guide/src/scss/main';
@import 'my-custom-components';
```
