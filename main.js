/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/carousel.js":
/*!*************************!*\
  !*** ./src/carousel.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ carousel)\n/* harmony export */ });\n/* harmony import */ var _getImagesArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getImagesArray.js */ \"./src/getImagesArray.js\");\n\n\nfunction carousel(imageDiv) {\n    let index = 1;\n\n    const images = (0,_getImagesArray_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    console.log(images);\n\n    const interval = setInterval(() => {\n        startCarousel();\n    }, 3000);\n\n    function startCarousel() {\n        imageDiv.style.backgroundImage = `url(${images[index++]})`;\n        imageDiv.classList.remove('fade');\n        void imageDiv.offsetWidth;\n        imageDiv.classList.add('fade');\n        if (index > images.length - 1) {\n            index = 0;\n        }\n    }\n\n    return { carousel };\n}\n\n//# sourceURL=webpack://signupform/./src/carousel.js?");

/***/ }),

/***/ "./src/getImagesArray.js":
/*!*******************************!*\
  !*** ./src/getImagesArray.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getImagesArray)\n/* harmony export */ });\n/* harmony import */ var _img_cooking_sushi1_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/cooking-sushi1.jpg */ \"./src/img/cooking-sushi1.jpg\");\n/* harmony import */ var _img_cooking_sushi2_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/cooking-sushi2.jpg */ \"./src/img/cooking-sushi2.jpg\");\n/* harmony import */ var _img_cooking_sushi3_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/cooking-sushi3.jpg */ \"./src/img/cooking-sushi3.jpg\");\n/* harmony import */ var _img_cooking_ramen1_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/cooking-ramen1.jpg */ \"./src/img/cooking-ramen1.jpg\");\n/* harmony import */ var _img_cooking_ramen2_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/cooking-ramen2.jpg */ \"./src/img/cooking-ramen2.jpg\");\n/* harmony import */ var _img_cooking_ramen3_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./img/cooking-ramen3.jpg */ \"./src/img/cooking-ramen3.jpg\");\n\n\n\n\n\n\n\nfunction getImagesArray() {\n    const cookingSushi1 = new Image();\n    cookingSushi1.src = _img_cooking_sushi1_jpg__WEBPACK_IMPORTED_MODULE_0__;\n\n    const cookingSushi2 = new Image();\n    cookingSushi2.src = _img_cooking_sushi2_jpg__WEBPACK_IMPORTED_MODULE_1__;\n\n    const cookingSushi3 = new Image();\n    cookingSushi3.src = _img_cooking_sushi3_jpg__WEBPACK_IMPORTED_MODULE_2__;\n\n    const cookingRamen1 = new Image();\n    cookingRamen1.src = _img_cooking_ramen1_jpg__WEBPACK_IMPORTED_MODULE_3__;\n\n    const cookingRamen2 = new Image();\n    cookingRamen2.src = _img_cooking_ramen2_jpg__WEBPACK_IMPORTED_MODULE_4__;\n\n    const cookingRamen3 = new Image();\n    cookingRamen3.src = _img_cooking_ramen3_jpg__WEBPACK_IMPORTED_MODULE_5__;\n\n    const imageArray = [cookingSushi1.src, cookingSushi2.src, cookingSushi3.src,\n    cookingRamen1.src, cookingRamen2.src, cookingRamen3.src];\n\n\n    return imageArray;\n}\n\n//# sourceURL=webpack://signupform/./src/getImagesArray.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _carousel_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./carousel.js */ \"./src/carousel.js\");\n/* harmony import */ var _img_github_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/github.png */ \"./src/img/github.png\");\n\n\n\nconst formPage = (() => {\n    // Saving the left side of the webpage in a variable\n    const leftSide = document.querySelector('.carousel');\n\n    // Saving img element for the Github icon in a variable\n    const iconPlace = document.querySelector('.githubIcon');\n\n    // assigning the source for the img element to be the source of the local import\n    iconPlace.src = _img_github_png__WEBPACK_IMPORTED_MODULE_1__\n    \n    // initiating the carousel function to the left side of the sign up webpage\n    ;(0,_carousel_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(leftSide);\n\n})()\n\n//# sourceURL=webpack://signupform/./src/index.js?");

/***/ }),

/***/ "./src/img/cooking-ramen1.jpg":
/*!************************************!*\
  !*** ./src/img/cooking-ramen1.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"0b097f0f103c2c57e2e8.jpg\";\n\n//# sourceURL=webpack://signupform/./src/img/cooking-ramen1.jpg?");

/***/ }),

/***/ "./src/img/cooking-ramen2.jpg":
/*!************************************!*\
  !*** ./src/img/cooking-ramen2.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"93bef2a257b0474fddc3.jpg\";\n\n//# sourceURL=webpack://signupform/./src/img/cooking-ramen2.jpg?");

/***/ }),

/***/ "./src/img/cooking-ramen3.jpg":
/*!************************************!*\
  !*** ./src/img/cooking-ramen3.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"cb29d6233df85d38542b.jpg\";\n\n//# sourceURL=webpack://signupform/./src/img/cooking-ramen3.jpg?");

/***/ }),

/***/ "./src/img/cooking-sushi1.jpg":
/*!************************************!*\
  !*** ./src/img/cooking-sushi1.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"bc4d8801d339d147ad37.jpg\";\n\n//# sourceURL=webpack://signupform/./src/img/cooking-sushi1.jpg?");

/***/ }),

/***/ "./src/img/cooking-sushi2.jpg":
/*!************************************!*\
  !*** ./src/img/cooking-sushi2.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f39afd3154a70ec1d229.jpg\";\n\n//# sourceURL=webpack://signupform/./src/img/cooking-sushi2.jpg?");

/***/ }),

/***/ "./src/img/cooking-sushi3.jpg":
/*!************************************!*\
  !*** ./src/img/cooking-sushi3.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9fd733d4e2937a5d4d38.jpg\";\n\n//# sourceURL=webpack://signupform/./src/img/cooking-sushi3.jpg?");

/***/ }),

/***/ "./src/img/github.png":
/*!****************************!*\
  !*** ./src/img/github.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ce02960dedca82adba6e.png\";\n\n//# sourceURL=webpack://signupform/./src/img/github.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;