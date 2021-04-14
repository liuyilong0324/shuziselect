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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _page_event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page/event */ \"./src/page/event.js\");\n// import isPrime from './util/isPrime';\r\n// import getcolor from './util/radColor';\r\n\r\n// import event from './page/event'\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/page/event.js":
/*!***************************!*\
  !*** ./src/page/event.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util_getnum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/getnum */ \"./src/util/getnum.js\");\n/* harmony import */ var _joinNum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./joinNum */ \"./src/page/joinNum.js\");\n\r\n\r\n\r\n\r\nlet num = new _util_getnum__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\n\r\n\r\n//注意：此处是给类实例化的num对象的callback属性赋值，然后在下面的start方法中，才得以调用\r\nnum.callback = (m,isPrime) => {\r\n  Object(_joinNum__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(m,isPrime)\r\n  \r\n}\r\n\r\n\r\nlet isStart = false;\r\n\r\nwindow.onclick = () => {\r\n  \r\n  if (isStart) {\r\n   \r\n    num.stop();\r\n    isStart = false;\r\n  } else {\r\n    \r\n    num.start();\r\n    isStart = true;\r\n  }\r\n\r\n}\r\n\r\n\r\n \r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/page/event.js?");

/***/ }),

/***/ "./src/page/joinNum.js":
/*!*****************************!*\
  !*** ./src/page/joinNum.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util_radColor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/radColor */ \"./src/util/radColor.js\");\n\r\nlet divContainer = document.getElementById('divContainer');\r\nlet divCenter = document.getElementById('divCenter');\r\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (n,isPrime) {\r\n  \r\nlet span = document.createElement('span');\r\n  span.innerText = n;\r\n  if (isPrime) {\r\n    span.style.color = Object(_util_radColor__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n  }\r\n\r\n  divContainer.appendChild(span)\r\n  divCenter.innerText = n\r\n  if (isPrime) {\r\n    divCenter.style.color=Object(_util_radColor__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\r\n  }\r\n\r\n  \r\n});\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/page/joinNum.js?");

/***/ }),

/***/ "./src/util/getnum.js":
/*!****************************!*\
  !*** ./src/util/getnum.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Num; });\n/* harmony import */ var _isPrime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isPrime */ \"./src/util/isPrime.js\");\n\r\n\r\nclass Num{\r\n  constructor() {\r\n    this.time = 300;\r\n    this.n = 1;\r\n    this.callback = null;\r\n    this.timer = null;\r\n  }\r\n\r\n  start() {\r\n    if (this.timer) {\r\n      return;\r\n    }\r\n   this.timer=setInterval(() => {\r\n     this.callback && this.callback(this.n, Object(_isPrime__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this.n));\r\n     //this.callback为真则执行后面的\r\n     this.n++;\r\n    },this.time)\r\n  }\r\n\r\n  stop() {\r\n    clearInterval(this.timer);\r\n    this.timer=null\r\n  }\r\n}\n\n//# sourceURL=webpack:///./src/util/getnum.js?");

/***/ }),

/***/ "./src/util/isPrime.js":
/*!*****************************!*\
  !*** ./src/util/isPrime.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (n) {\r\n  if (n < 2) {\r\n    return false\r\n  }\r\n  for (let i = 2; i < n - 1; i++){\r\n    if (n % i === 0) {\r\n      return false\r\n    }\r\n  }\r\n  return true;\r\n\r\n});\n\n//# sourceURL=webpack:///./src/util/isPrime.js?");

/***/ }),

/***/ "./src/util/radColor.js":
/*!******************************!*\
  !*** ./src/util/radColor.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst colors = ['red', 'black', 'pink', 'green', 'yellow']\r\n\r\nlet getRadNum = (max,min) => {\r\n  return Math.floor(Math.random() * (max - min) + min);\r\n\r\n}\r\n\r\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (function() {\r\n  return colors[getRadNum(0, 5)];\r\n});\n\n//# sourceURL=webpack:///./src/util/radColor.js?");

/***/ })

/******/ });