# electron-vue-demo

> A Vue.js project

## Build Setup

``` bash
| vue
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test

| electron
# electron app generate
npm run packager

# dev show 
npm run electron_dev

# dev vue rebuild and show window
npm run electron_rebuild_dev
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

#### a vue project with electron packager


* config : /build/election and /build/electron/packagers

* command

```
  npm run move : move packagers files to project
  npm run electron_dev : create window and not package
  npm run electron_rebuild_dev : rebuild vue project and create window
  npm run packager: rebuild vue project and move package file to project, at last,package prject and build a exe app (for product) 
```

#### Suggest

* if vue prject name changed

```
  1.change /build/electron/packagers/config moveConfig.filesMvTo
  2.change /build/electron/dev.config projectConfig.projectDir
  3.change package.json packager script
```

* if vue prject enter file(default index.html)

```
  1.change /build/electron/packagers/config projectConfig.enterPage
  2.change /build/electron/dev.config projectConfig.enterPage
```

