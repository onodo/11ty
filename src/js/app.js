"use strict"
const set = {
  init() {},
  loaded() {},
}
document.addEventListener("DOMContentLoaded", set.init)
window.addEventListener("load", set.loaded)