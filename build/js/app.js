/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/***/ function(module, exports) {

"use strict";
'use strict';

document.addEventListener('DOMContentLoaded', function () {

    var list = document.querySelector('.catalog-full-navigation-list'),
        catalogMenu = document.querySelector('.catalog-menu'),
        catalogLink = document.querySelectorAll('.catalog-list-item-product-cart__link'),
        catalogLinkArr = Array.prototype.slice.call(catalogLink);

    list.addEventListener('mouseup', function (e) {
        if (e.target.className == 'catalog-full-navigation-list-item') {
            e.target.classList.add('active');
        } else if (e.target.className == 'catalog-full-navigation-list-item active') {
            e.target.classList.remove('active');
        }
        if (e.target.className == 'inner-list') {
            e.target.classList.add('active');
        } else if (e.target.className == 'inner-list active') {
            e.target.classList.remove('active');
        }
    });

    catalogMenu.addEventListener('mouseup', function () {
        var catalogFull = document.querySelector('.catalog-full');
        var catalogMenuBlock = document.querySelector('.catalog-menu-block');
        catalogFull.classList.toggle('visible');
        catalogMenuBlock.classList.toggle('active');
    });

    catalogLinkArr.forEach(function (link) {
        link.addEventListener('mouseup', function (e) {
            link.parentNode.parentNode.nextElementSibling.classList.toggle('visible');
            link.parentNode.parentNode.nextElementSibling.className == 'catalog-list-item-offers visible' ? link.innerText = 'скрыть другие предложения' : link.innerText = 'показать другие предложения';
        });
    });
});

/***/ }
/******/ ]);
//# sourceMappingURL=app.js.map