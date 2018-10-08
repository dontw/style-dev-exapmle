# starlux-style-guide

網站開發樣式規範（暫）

## Requirement

node.js v.8.11.x 以上

## Getting Started

專案安裝步驟

```shell
# 安裝
$ npm install # Or yarn install

# 功能指令

# 啟動scss開發模式
$ npm run watch:all
# 轉譯 scss , 壓縮圖片, 製作svg sprite
$ npm run build:all
# 啟動文檔開發模式
$ npm run doc:dev
# 產生 production 版本文檔
$ npm run doc:build
# 啟動文檔 server
$ npm run doc:serves

```

## Project Structure

敘述專案目錄結構

```shell

├─dist         #處理過的樣式與圖片
│  ├─css
│  └─images
│      └─icons #處理過的icon svg
├─src
│  ├─scss      #要處理的樣式
│  └─images    #要處理的圖片
└─index.html   #開發預覽的html檔

```

## Used Packages

| 套件名稱                     | 簡介                  | 網址                                                                |
| ---------------------------- | --------------------- | ------------------------------------------------------------------- |
| autoprefixer                 | css後處理插件         | [Github](https://github.com/postcss/autoprefixer)                   |
| browser-sync                 | 瀏覽器同步            | [官網](https://browsersync.io/)                                     |
| http-server                  | server                | [Github](https://github.com/indexzero/http-server)                  |
| imagemin-cli                 | 圖片壓縮              | [Github](https://github.com/imagemin/imagemin-cli)                  |
| imagemin-pngquant            | png壓縮(imagemin插件) | [Github](https://github.com/imagemin/imagemin-pngquant)             |
| node-sass                    | css預處理             | [Github](https://github.com/sass/node-sass)                         |
| onchange                     | 監看檔案變化          | [Github](https://github.com/Qard/onchange)                          |
| parallelshell                | 同步執行指令          | [Github](https://github.com/darkguy2008/parallelshell)              |
| postcss-cli                  | css後處理             |  [Github](https://github.com/postcss/postcss-cli)                  |
| stylelint-config-recommended | stylelint推薦設定     | [Github](https://github.com/stylelint/stylelint-config-recommended) |
| svg-sprite                   | svg合併               | [Github](https://github.com/jkphl/svg-sprite)                       |
| svgo                         | svg圖片處理           | [官網](https://vuepress.vuejs.org/)                                 |
| vuepress                     | 文檔產生              |                                                                     |

## Contact

Chenyu #7666
