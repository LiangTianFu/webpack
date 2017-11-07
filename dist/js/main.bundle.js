/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__css_common_css__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__css_common_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__css_common_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_layer_layer_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__js_class_lesson1_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__js_class_lesson1_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__js_class_lesson1_js__);





const App = function() {
  var dom = document.getElementById('app');
  var layer = new __WEBPACK_IMPORTED_MODULE_1__components_layer_layer_js__["a" /* default */]();

  dom.innerHTML = layer.tpl({
    name: 'sky',
    arr: ['apple', 'meizu', 'mini']
  });
}

new App();


/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__layer_less__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__layer_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__layer_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__layer_tpl__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__layer_tpl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__layer_tpl__);



function layer() {
  return {
    name: 'layer',
    tpl: __WEBPACK_IMPORTED_MODULE_1__layer_tpl___default.a
  };
}

/* harmony default export */ __webpack_exports__["a"] = (layer);


/***/ }),
/* 3 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = function (obj) {
obj || (obj = {});
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="layer">\r\n  <img src="src/assets/1.jpg" alt="">\r\n  <div>this is\r\n    ' +
((__t = ( name )) == null ? '' : __t) +
' layer</div>\r\n  ';
 for (var i = 0;i< arr.length; i++) { ;
__p += '\r\n    ' +
((__t = ( arr[i] )) == null ? '' : __t) +
'\r\n      ';
} ;
__p += '\r\n\r\n</div>\r\n';

}
return __p
}

/***/ }),
/* 5 */
/***/ (function(module, exports) {

function test() {
  for (let i = 0; i < 3; i++) {
    console.log(i);
  }
  console.log(i);
}
test();


/***/ })
/******/ ]);