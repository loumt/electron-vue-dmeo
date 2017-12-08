'use strict'

module.exports = {

  moveConfig:{
    // packages mv to with _dirname
    filesMvTo:'./../../../node-vue-blog',
    moveFiles: ['config.js', 'electron.js', 'favicon.ico', 'package.json']
  },

  projectConfig:{
    // vue build result path
    projectDir:'.',

    // the project vue build
    enterPage: 'index.html',

    // open tools when window at once
    isNeedDevTools: false,
  },
  windowConfig:{
    width: 1000,
    height: 750,
    minWidth: 800,
    minHeight: 600,
    maxWidth: 1900,
    maxHeight: 1020,
    title: 'Product Node-Vue-Blog',
    icon:   __dirname + './favicon.ico',
    backgroundColor: '#FFF',
    center: true,
    useContentSize:true,
    // resizable
    resizable: true,
    // not support linux
    movable: true,
    // alway in top
    alwaysOnTop: false,
    fullscreen: true,
    fullscreenable: false,
    // hide menu
    autoHideMenuBar: true,
    transparent:false,
    webPreferences:{
      devTools: false
    }
  }
}
