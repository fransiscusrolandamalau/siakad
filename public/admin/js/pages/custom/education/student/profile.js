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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 99);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/admin/metronic/js/pages/custom/education/student/profile.js":
/*!*******************************************************************************!*\
  !*** ./resources/admin/metronic/js/pages/custom/education/student/profile.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval(" // Class definition\n\nvar KTAppsEducationStudentProfile = function () {\n  // Base elements\n  var avatar;\n\n  var initAvatar = function initAvatar() {\n    avatar = new KTImageInput('kt_user_avatar');\n  };\n\n  return {\n    // public functions\n    init: function init() {\n      initAvatar();\n    }\n  };\n}();\n\njQuery(document).ready(function () {\n  KTAppsEducationStudentProfile.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYWRtaW4vbWV0cm9uaWMvanMvcGFnZXMvY3VzdG9tL2VkdWNhdGlvbi9zdHVkZW50L3Byb2ZpbGUuanM/YTE1OCJdLCJuYW1lcyI6WyJLVEFwcHNFZHVjYXRpb25TdHVkZW50UHJvZmlsZSIsImF2YXRhciIsImluaXRBdmF0YXIiLCJLVEltYWdlSW5wdXQiLCJpbml0IiwialF1ZXJ5IiwiZG9jdW1lbnQiLCJyZWFkeSJdLCJtYXBwaW5ncyI6IkNBRUE7O0FBQ0EsSUFBSUEsNkJBQTZCLEdBQUcsWUFBWTtBQUMvQztBQUNBLE1BQUlDLE1BQUo7O0FBRUEsTUFBSUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBVztBQUMzQkQsVUFBTSxHQUFHLElBQUlFLFlBQUosQ0FBaUIsZ0JBQWpCLENBQVQ7QUFDQSxHQUZEOztBQUlBLFNBQU87QUFDTjtBQUNBQyxRQUFJLEVBQUUsZ0JBQVc7QUFDaEJGLGdCQUFVO0FBQ1Y7QUFKSyxHQUFQO0FBTUEsQ0FkbUMsRUFBcEM7O0FBZ0JBRyxNQUFNLENBQUNDLFFBQUQsQ0FBTixDQUFpQkMsS0FBakIsQ0FBdUIsWUFBVztBQUNqQ1AsK0JBQTZCLENBQUNJLElBQTlCO0FBQ0EsQ0FGRCIsImZpbGUiOiIuL3Jlc291cmNlcy9hZG1pbi9tZXRyb25pYy9qcy9wYWdlcy9jdXN0b20vZWR1Y2F0aW9uL3N0dWRlbnQvcHJvZmlsZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vLyBDbGFzcyBkZWZpbml0aW9uXG52YXIgS1RBcHBzRWR1Y2F0aW9uU3R1ZGVudFByb2ZpbGUgPSBmdW5jdGlvbiAoKSB7XG5cdC8vIEJhc2UgZWxlbWVudHNcblx0dmFyIGF2YXRhcjtcblxuXHR2YXIgaW5pdEF2YXRhciA9IGZ1bmN0aW9uKCkge1xuXHRcdGF2YXRhciA9IG5ldyBLVEltYWdlSW5wdXQoJ2t0X3VzZXJfYXZhdGFyJyk7XG5cdH1cblxuXHRyZXR1cm4ge1xuXHRcdC8vIHB1YmxpYyBmdW5jdGlvbnNcblx0XHRpbml0OiBmdW5jdGlvbigpIHtcblx0XHRcdGluaXRBdmF0YXIoKTtcblx0XHR9XG5cdH07XG59KCk7XG5cbmpRdWVyeShkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG5cdEtUQXBwc0VkdWNhdGlvblN0dWRlbnRQcm9maWxlLmluaXQoKTtcbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/admin/metronic/js/pages/custom/education/student/profile.js\n");

/***/ }),

/***/ 99:
/*!*************************************************************************************!*\
  !*** multi ./resources/admin/metronic/js/pages/custom/education/student/profile.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\7.4\htdocs\ci-sia\resources\admin\metronic\js\pages\custom\education\student\profile.js */"./resources/admin/metronic/js/pages/custom/education/student/profile.js");


/***/ })

/******/ });