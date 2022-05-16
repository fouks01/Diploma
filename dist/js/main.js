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

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\");\n/* harmony import */ var _modules_accordeon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/accordeon */ \"./modules/accordeon.js\");\n/* harmony import */ var _modules_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/scroll */ \"./modules/scroll.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/slider */ \"./modules/slider.js\");\n/* harmony import */ var _modules_carousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/carousel */ \"./modules/carousel.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n(0,_modules_accordeon__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_scroll__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_modules_slider__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n(0,_modules_carousel__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/accordeon.js":
/*!******************************!*\
  !*** ./modules/accordeon.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst accordeon = () => {\r\n\r\n    const accordeonBlock = document.querySelector('.accordeon');\r\n    const accordeonElement = accordeonBlock.querySelectorAll('.element');\r\n    const accordeonContent = accordeonBlock.querySelectorAll('.element-content');\r\n\r\n\r\n\r\n    accordeonBlock.addEventListener('click', (e) => {\r\n        if (e.target.closest('.element')) {\r\n            const accordeonBtn = e.target.closest('.element');\r\n            accordeonElement.forEach((tab, index) => {\r\n                if (tab === accordeonBtn) {\r\n                    tab.classList.add('active');\r\n                    accordeonContent[index].style.display = 'block';\r\n                } else {\r\n                    tab.classList.remove('active');\r\n                    accordeonContent[index].style.display = 'none';\r\n\r\n                }\r\n            });\r\n        }\r\n    });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (accordeon);\n\n//# sourceURL=webpack:///./modules/accordeon.js?");

/***/ }),

/***/ "./modules/carousel.js":
/*!*****************************!*\
  !*** ./modules/carousel.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst carousel = () => {\r\n    const prevArrow = document.querySelector('.arrow-left');\r\n    const nextArrow = document.querySelector('.arrow-right');\r\n    const slide = document.querySelectorAll('.col-sm-6');\r\n\r\n\r\n    slide.forEach((e) => {\r\n        if (e.classList.contains('col-sm-6--active')) {\r\n            e.style.display = \"block\";\r\n        } else {\r\n            e.style.display = \"none\";\r\n\r\n        }\r\n\r\n        prevArrow.addEventListener('click', () => {\r\n            e.classList.toggle('col-sm-6--active');\r\n\r\n            if (e.classList.contains('col-sm-6--active')) {\r\n                e.style.display = \"block\";\r\n            } else {\r\n                e.style.display = \"none\";\r\n\r\n            }\r\n        });\r\n\r\n        nextArrow.addEventListener('click', () => {\r\n            e.classList.toggle('col-sm-6--active');\r\n\r\n            if (e.classList.contains('col-sm-6--active')) {\r\n                e.style.display = \"block\";\r\n            } else {\r\n                e.style.display = \"none\";\r\n\r\n            }\r\n        });\r\n    });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (carousel);\n\n//# sourceURL=webpack:///./modules/carousel.js?");

/***/ }),

/***/ "./modules/modal.js":
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst modal = () => {\r\n    const btn = document.getElementById('modal-main');\r\n    const modalOverlay = document.querySelector('.modal-overlay');\r\n    const modalCallback = document.querySelector('.modal-callback');\r\n    const modalClose = document.querySelector('.modal-close');\r\n    const sliderCallback = document.querySelectorAll('.absolute');\r\n    const serviceCallback = document.querySelectorAll('.button-services');\r\n\r\n\r\n\r\n    const showModal = () => {\r\n        modalOverlay.style.display = \"block\";\r\n        modalCallback.style.display = \"block\";\r\n    };\r\n\r\n    const closeModal = () => {\r\n        modalOverlay.style.display = \"none\";\r\n        modalCallback.style.display = \"none\";\r\n    };\r\n\r\n\r\n    btn.addEventListener('click', (e) => {\r\n        e.preventDefault();\r\n        showModal();\r\n    });\r\n\r\n    sliderCallback.forEach((e) => {\r\n        e.addEventListener('click', showModal);\r\n    });\r\n\r\n    serviceCallback[0].addEventListener('click', showModal);\r\n    modalClose.addEventListener('click', closeModal);\r\n    modalOverlay.addEventListener('click', closeModal);\r\n\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\n\n//# sourceURL=webpack:///./modules/modal.js?");

/***/ }),

/***/ "./modules/scroll.js":
/*!***************************!*\
  !*** ./modules/scroll.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst scroll = () => {\r\n    const linkUp = document.querySelector('.up');\r\n    const anchors = document.querySelectorAll('a[href*=\"#\"]');\r\n    const sliderTable = document.querySelectorAll('.table');\r\n\r\n    console.log(sliderTable);\r\n\r\n\r\n\r\n    linkUp.style.display = \"none\";\r\n\r\n\r\n    sliderTable.forEach((e) => {\r\n        e.style.opacity = 1;\r\n        e.style.visibility = 'visible';\r\n    });\r\n\r\n    linkUp.addEventListener('click', () => window.scrollTo({\r\n        top: 0,\r\n        behavior: 'smooth',\r\n    }));\r\n\r\n\r\n    window.addEventListener('scroll', function () {\r\n        if (window.pageYOffset < 1000) {\r\n            linkUp.style.display = \"none\";\r\n        } else {\r\n            linkUp.style.display = \"block\";\r\n        }\r\n    });\r\n\r\n\r\n    for (let anchor of anchors) {\r\n        anchor.addEventListener('click', function (e) {\r\n            e.preventDefault();\r\n\r\n            const blockID = anchor.getAttribute('href').substr(1);\r\n\r\n            document.getElementById(blockID).scrollIntoView({\r\n                behavior: 'smooth',\r\n                block: 'start'\r\n            });\r\n        });\r\n    }\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scroll);\n\n//# sourceURL=webpack:///./modules/scroll.js?");

/***/ }),

/***/ "./modules/slider.js":
/*!***************************!*\
  !*** ./modules/slider.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst slider = () => {\r\n    const sliderBlock = document.querySelector('.top-slider');\r\n    const slides = sliderBlock.querySelectorAll('.item');\r\n    const timerInterval = 3000;\r\n\r\n\r\n    let currentSlide = 0;\r\n    let interval;\r\n\r\n    const prevSlide = (elems, index, strClass) => {\r\n        elems[index].classList.remove(strClass);\r\n        elems[index].style.display = \"none\";\r\n    };\r\n\r\n    const nextSlide = (elems, index, strClass) => {\r\n        elems[index].classList.add(strClass);\r\n        elems[index].style.display = \"block\";\r\n    };\r\n\r\n\r\n    const autoSlide = () => {\r\n        prevSlide(slides, currentSlide, 'item-active');\r\n\r\n        currentSlide++;\r\n\r\n        if (currentSlide >= slides.length) {\r\n            currentSlide = 0;\r\n        };\r\n\r\n        nextSlide(slides, currentSlide, 'item-active');\r\n    };\r\n\r\n    const startSlide = (timer = 1500) => {\r\n        interval = setInterval(autoSlide, timer);\r\n    };\r\n\r\n    const stopSlide = () => {\r\n        clearInterval(interval);\r\n    };\r\n\r\n    sliderBlock.addEventListener('click', (e) => {\r\n        e.preventDefault();\r\n\r\n        prevSlide(slides, currentSlide, 'item-active');\r\n\r\n        if (currentSlide >= slides.length) {\r\n            currentSlide = 0;\r\n        };\r\n\r\n        if (currentSlide < 0) {\r\n            currentSlide = slides.length - 1;\r\n        }\r\n\r\n        nextSlide(slides, currentSlide, 'item-active');\r\n    });\r\n\r\n    sliderBlock.addEventListener('mouseenter', (e) => {\r\n        if (e.target.matches('.item')) {\r\n            stopSlide(timerInterval);\r\n        }\r\n    }, true);\r\n\r\n    sliderBlock.addEventListener('mouseleave', (e) => {\r\n        if (e.target.matches('.item')) {\r\n            startSlide(timerInterval);\r\n        }\r\n    }, true);\r\n\r\n    startSlide(timerInterval);\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\n\n//# sourceURL=webpack:///./modules/slider.js?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;