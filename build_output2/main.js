/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./packages/dep/inner_dep2/A.js
function foo() {
    return "bar";
  }
  
;// CONCATENATED MODULE: ./packages/dep/inner_dep2/B.js
function bar() {
  return "baz";
}

;// CONCATENATED MODULE: ./packages/dep/inner_dep/A.js
function hello(x) {
    return `hello ${x}`;
}
;// CONCATENATED MODULE: ./packages/dep/inner_dep/B.js
function world(greeting) {
  return `${greeting} world`;
}

;// CONCATENATED MODULE: ./packages/dep/inner_dep/C.js
function C_foo() {
    return "bar";
}
;// CONCATENATED MODULE: ./packages/dep/inner_dep/D.js
function D_bar() {
    return "baz";
}
;// CONCATENATED MODULE: ./packages/app/index.js


console.log(hello("world"));
console.log(world("hello"));
console.log(foo());
console.log(bar());
console.log(C_foo());
console.log(D_bar());
/******/ })()
;