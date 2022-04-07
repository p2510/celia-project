/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/js/script.js":
/*!********************************!*\
  !*** ./resources/js/script.js ***!
  \********************************/
/***/ (() => {

eval("window.addEventListener('DOMContentLoaded', function () {\n  var scrollPos = 0;\n  var mainNav = document.getElementById('mainNav');\n  var headerHeight = mainNav.clientHeight;\n  window.addEventListener('scroll', function () {\n    var currentTop = document.body.getBoundingClientRect().top * -1;\n\n    if (currentTop < scrollPos) {\n      // Scrolling Up\n      if (currentTop > 0 && mainNav.classList.contains('is-fixed')) {\n        mainNav.classList.add('is-visible');\n      } else {\n        console.log(123);\n        mainNav.classList.remove('is-visible', 'is-fixed');\n      }\n    } else {\n      // Scrolling Down\n      mainNav.classList.remove(['is-visible']);\n\n      if (currentTop > headerHeight && !mainNav.classList.contains('is-fixed')) {\n        mainNav.classList.add('is-fixed');\n      }\n    }\n\n    scrollPos = currentTop;\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvc2NyaXB0LmpzP2M2M2IiXSwibmFtZXMiOlsid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInNjcm9sbFBvcyIsIm1haW5OYXYiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiaGVhZGVySGVpZ2h0IiwiY2xpZW50SGVpZ2h0IiwiY3VycmVudFRvcCIsImJvZHkiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ0b3AiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsImFkZCIsImNvbnNvbGUiLCJsb2ciLCJyZW1vdmUiXSwibWFwcGluZ3MiOiJBQUNBQSxNQUFNLENBQUNDLGdCQUFQLENBQXdCLGtCQUF4QixFQUE0QyxZQUFNO0FBQzlDLE1BQUlDLFNBQVMsR0FBRyxDQUFoQjtBQUNBLE1BQU1DLE9BQU8sR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLFNBQXhCLENBQWhCO0FBQ0EsTUFBTUMsWUFBWSxHQUFHSCxPQUFPLENBQUNJLFlBQTdCO0FBQ0FQLEVBQUFBLE1BQU0sQ0FBQ0MsZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0MsWUFBVztBQUN6QyxRQUFNTyxVQUFVLEdBQUdKLFFBQVEsQ0FBQ0ssSUFBVCxDQUFjQyxxQkFBZCxHQUFzQ0MsR0FBdEMsR0FBNEMsQ0FBQyxDQUFoRTs7QUFDQSxRQUFLSCxVQUFVLEdBQUdOLFNBQWxCLEVBQTZCO0FBQ3pCO0FBQ0EsVUFBSU0sVUFBVSxHQUFHLENBQWIsSUFBa0JMLE9BQU8sQ0FBQ1MsU0FBUixDQUFrQkMsUUFBbEIsQ0FBMkIsVUFBM0IsQ0FBdEIsRUFBOEQ7QUFDMURWLFFBQUFBLE9BQU8sQ0FBQ1MsU0FBUixDQUFrQkUsR0FBbEIsQ0FBc0IsWUFBdEI7QUFDSCxPQUZELE1BRU87QUFDSEMsUUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksR0FBWjtBQUNBYixRQUFBQSxPQUFPLENBQUNTLFNBQVIsQ0FBa0JLLE1BQWxCLENBQXlCLFlBQXpCLEVBQXVDLFVBQXZDO0FBQ0g7QUFDSixLQVJELE1BUU87QUFDSDtBQUNBZCxNQUFBQSxPQUFPLENBQUNTLFNBQVIsQ0FBa0JLLE1BQWxCLENBQXlCLENBQUMsWUFBRCxDQUF6Qjs7QUFDQSxVQUFJVCxVQUFVLEdBQUdGLFlBQWIsSUFBNkIsQ0FBQ0gsT0FBTyxDQUFDUyxTQUFSLENBQWtCQyxRQUFsQixDQUEyQixVQUEzQixDQUFsQyxFQUEwRTtBQUN0RVYsUUFBQUEsT0FBTyxDQUFDUyxTQUFSLENBQWtCRSxHQUFsQixDQUFzQixVQUF0QjtBQUNIO0FBQ0o7O0FBQ0RaLElBQUFBLFNBQVMsR0FBR00sVUFBWjtBQUNILEdBbEJEO0FBbUJILENBdkJEIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xyXG4gICAgbGV0IHNjcm9sbFBvcyA9IDA7XHJcbiAgICBjb25zdCBtYWluTmF2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW5OYXYnKTtcclxuICAgIGNvbnN0IGhlYWRlckhlaWdodCA9IG1haW5OYXYuY2xpZW50SGVpZ2h0O1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRUb3AgPSBkb2N1bWVudC5ib2R5LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCAqIC0xO1xyXG4gICAgICAgIGlmICggY3VycmVudFRvcCA8IHNjcm9sbFBvcykge1xyXG4gICAgICAgICAgICAvLyBTY3JvbGxpbmcgVXBcclxuICAgICAgICAgICAgaWYgKGN1cnJlbnRUb3AgPiAwICYmIG1haW5OYXYuY2xhc3NMaXN0LmNvbnRhaW5zKCdpcy1maXhlZCcpKSB7XHJcbiAgICAgICAgICAgICAgICBtYWluTmF2LmNsYXNzTGlzdC5hZGQoJ2lzLXZpc2libGUnKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKDEyMyk7XHJcbiAgICAgICAgICAgICAgICBtYWluTmF2LmNsYXNzTGlzdC5yZW1vdmUoJ2lzLXZpc2libGUnLCAnaXMtZml4ZWQnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIFNjcm9sbGluZyBEb3duXHJcbiAgICAgICAgICAgIG1haW5OYXYuY2xhc3NMaXN0LnJlbW92ZShbJ2lzLXZpc2libGUnXSk7XHJcbiAgICAgICAgICAgIGlmIChjdXJyZW50VG9wID4gaGVhZGVySGVpZ2h0ICYmICFtYWluTmF2LmNsYXNzTGlzdC5jb250YWlucygnaXMtZml4ZWQnKSkge1xyXG4gICAgICAgICAgICAgICAgbWFpbk5hdi5jbGFzc0xpc3QuYWRkKCdpcy1maXhlZCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNjcm9sbFBvcyA9IGN1cnJlbnRUb3A7XHJcbiAgICB9KTtcclxufSlcclxuIl0sImZpbGUiOiIuL3Jlc291cmNlcy9qcy9zY3JpcHQuanMuanMiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/js/script.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/js/script.js"]();
/******/ 	
/******/ })()
;