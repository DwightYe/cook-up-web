# cook-up

> A receipes project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


## install vue & jq & bootstrap
``` bash
npm install vue
npm install --global vue-cli
vue init webpack my-project

npm install jquery --save-dev

# webpack.base.conf.js
var webpack = require('webpack');
# webpack.base.conf.js-module.exports
plugins: [
  new webpack.ProvidePlugin({
    $: "jquery",
    jQuery: "jquery",
    "windows.jQuery": "jquery"
  })
]

http://getbootstrap.com/docs/3.3/getting-started/#download
# main.js
import $ from 'jquery'
import './assets/css/bootstrap.min.css'
import './assets/js/bootstrap.min'
```