"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql-request */ \"graphql-request\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([graphql_request__WEBPACK_IMPORTED_MODULE_1__]);\ngraphql_request__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nasync function getServerSideProps() {\n    const query = graphql_request__WEBPACK_IMPORTED_MODULE_1__.gql`\n    {\n      frameworks {\n        id\n        name\n      }\n    }\n  `;\n    const data = await (0,graphql_request__WEBPACK_IMPORTED_MODULE_1__.request)(\"http://localhost:3000/api/graphql\", query);\n    const { frameworks  } = data;\n    return {\n        props: {\n            frameworks\n        }\n    };\n}\nfunction Home({ frameworks  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n            children: frameworks.map((f)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    children: f.name\n                }, f.id, false, {\n                    fileName: \"/Users/carolenache/Desktop/next-graphql/client/pages/index.tsx\",\n                    lineNumber: 28,\n                    columnNumber: 11\n                }, this))\n        }, void 0, false, {\n            fileName: \"/Users/carolenache/Desktop/next-graphql/client/pages/index.tsx\",\n            lineNumber: 26,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/carolenache/Desktop/next-graphql/client/pages/index.tsx\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, this);\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUE4QztBQUV2QyxlQUFlRSxrQkFBa0IsR0FBRztJQUN6QyxNQUFNQyxLQUFLLEdBQUdGLGdEQUFHLENBQUM7Ozs7Ozs7RUFPbEIsQ0FBQztJQUNELE1BQU1HLElBQUksR0FBRyxNQUFNSix3REFBTyxDQUFDLG1DQUFtQyxFQUFFRyxLQUFLLENBQUM7SUFDdEUsTUFBTSxFQUFFRSxVQUFVLEdBQUUsR0FBR0QsSUFBSTtJQUUzQixPQUFPO1FBQ0xFLEtBQUssRUFBRTtZQUNMRCxVQUFVO1NBQ1g7S0FDRjtDQUNGO0FBR2MsU0FBU0UsSUFBSSxDQUFDLEVBQUVGLFVBQVUsR0FBRSxFQUFFO0lBQzNDLHFCQUNFLDhEQUFDRyxLQUFHO2tCQUNGLDRFQUFDQyxJQUFFO3NCQUNBSixVQUFVLENBQUNLLEdBQUcsQ0FBQ0MsQ0FBQUEsQ0FBQyxpQkFDZiw4REFBQ0MsSUFBRTs4QkFBYUQsQ0FBQyxDQUFDRSxJQUFJO21CQUFiRixDQUFDLENBQUNHLEVBQUU7Ozs7d0JBQWUsQ0FDNUI7Ozs7O2dCQUNDOzs7OztZQUNELENBQ1A7Q0FDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLWNvZGUtdGVzdC8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlcXVlc3QsIGdxbCB9IGZyb20gJ2dyYXBocWwtcmVxdWVzdCdcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcygpIHtcbiAgY29uc3QgcXVlcnkgPSBncWxgXG4gICAge1xuICAgICAgZnJhbWV3b3JrcyB7XG4gICAgICAgIGlkXG4gICAgICAgIG5hbWVcbiAgICAgIH1cbiAgICB9XG4gIGBcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcXVlc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvZ3JhcGhxbCcsIHF1ZXJ5KVxuICBjb25zdCB7IGZyYW1ld29ya3MgfSA9IGRhdGEgYXMgYW55O1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIGZyYW1ld29ya3MsXG4gICAgfSxcbiAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoeyBmcmFtZXdvcmtzIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPHVsPlxuICAgICAgICB7ZnJhbWV3b3Jrcy5tYXAoZiA9PiAoXG4gICAgICAgICAgPGxpIGtleT17Zi5pZH0+e2YubmFtZX08L2xpPlxuICAgICAgICApKX1cbiAgICAgIDwvdWw+XG4gICAgPC9kaXY+XG4gIClcbn0iXSwibmFtZXMiOlsicmVxdWVzdCIsImdxbCIsImdldFNlcnZlclNpZGVQcm9wcyIsInF1ZXJ5IiwiZGF0YSIsImZyYW1ld29ya3MiLCJwcm9wcyIsIkhvbWUiLCJkaXYiLCJ1bCIsIm1hcCIsImYiLCJsaSIsIm5hbWUiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "graphql-request":
/*!**********************************!*\
  !*** external "graphql-request" ***!
  \**********************************/
/***/ ((module) => {

module.exports = import("graphql-request");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();