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
exports.id = "pages/api/graphql";
exports.ids = ["pages/api/graphql"];
exports.modules = {

/***/ "apollo-server-micro":
/*!**************************************!*\
  !*** external "apollo-server-micro" ***!
  \**************************************/
/***/ ((module) => {

module.exports = require("apollo-server-micro");

/***/ }),

/***/ "micro-cors":
/*!*****************************!*\
  !*** external "micro-cors" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("micro-cors");

/***/ }),

/***/ "nexus":
/*!************************!*\
  !*** external "nexus" ***!
  \************************/
/***/ ((module) => {

module.exports = require("nexus");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "(api)/./pages/api/graphql.ts":
/*!******************************!*\
  !*** ./pages/api/graphql.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"config\": () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var apollo_server_micro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-server-micro */ \"apollo-server-micro\");\n/* harmony import */ var apollo_server_micro__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apollo_server_micro__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var micro_cors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! micro-cors */ \"micro-cors\");\n/* harmony import */ var micro_cors__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(micro_cors__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _schema__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../schema */ \"(api)/./schema/index.ts\");\n\n\n\nconst cors = micro_cors__WEBPACK_IMPORTED_MODULE_1___default()({\n    allowMethods: [\n        \"POST\",\n        \"OPTIONS\"\n    ],\n    allowHeaders: [\n        \"Content-Type\",\n        \"Authorization\"\n    ],\n    origin: \"*\"\n});\nconst apolloServer = new apollo_server_micro__WEBPACK_IMPORTED_MODULE_0__.ApolloServer({\n    schema: _schema__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n});\nconst startServer = apolloServer.start();\nasync function handler(req, res) {\n    if (req.method === \"OPTIONS\") {\n        res.end();\n        return false;\n    }\n    await startServer;\n    await apolloServer.createHandler({\n        path: \"/api/graphql\"\n    })(req, res);\n}\nconst config = {\n    api: {\n        bodyParser: false\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cors(handler));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ3JhcGhxbC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWtEO0FBQ3BCO0FBRUk7QUFFbEMsTUFBTUcsSUFBSSxHQUFHRixpREFBSSxDQUFDO0lBQ2hCRyxZQUFZLEVBQUU7UUFBQyxNQUFNO1FBQUUsU0FBUztLQUFDO0lBQ2pDQyxZQUFZLEVBQUU7UUFBQyxjQUFjO1FBQUUsZUFBZTtLQUFDO0lBQy9DQyxNQUFNLEVBQUUsR0FBRztDQUNaLENBQUM7QUFFRixNQUFNQyxZQUFZLEdBQUcsSUFBSVAsNkRBQVksQ0FBQztJQUFFRSxNQUFNO0NBQUUsQ0FBQztBQUVqRCxNQUFNTSxXQUFXLEdBQUdELFlBQVksQ0FBQ0UsS0FBSyxFQUFFO0FBRXhDLGVBQWVDLE9BQU8sQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDL0IsSUFBSUQsR0FBRyxDQUFDRSxNQUFNLEtBQUssU0FBUyxFQUFFO1FBQzVCRCxHQUFHLENBQUNFLEdBQUcsRUFBRSxDQUFDO1FBQ1YsT0FBTyxLQUFLLENBQUM7S0FDZDtJQUVELE1BQU1OLFdBQVcsQ0FBQztJQUNsQixNQUFNRCxZQUFZLENBQUNRLGFBQWEsQ0FBQztRQUMvQkMsSUFBSSxFQUFFLGNBQWM7S0FDckIsQ0FBQyxDQUFDTCxHQUFHLEVBQUVDLEdBQUcsQ0FBQyxDQUFDO0NBQ2Q7QUFFTSxNQUFNSyxNQUFNLEdBQUc7SUFDcEJDLEdBQUcsRUFBRTtRQUNIQyxVQUFVLEVBQUUsS0FBSztLQUNsQjtDQUNGLENBQUM7QUFFRixpRUFBZWhCLElBQUksQ0FBQ08sT0FBTyxDQUFDLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC1jb2RlLXRlc3QvLi9wYWdlcy9hcGkvZ3JhcGhxbC50cz9lYTFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwb2xsb1NlcnZlciB9IGZyb20gJ2Fwb2xsby1zZXJ2ZXItbWljcm8nXG5pbXBvcnQgQ29ycyBmcm9tICdtaWNyby1jb3JzJztcblxuaW1wb3J0IHNjaGVtYSBmcm9tICcuLi8uLi9zY2hlbWEnO1xuXG5jb25zdCBjb3JzID0gQ29ycyh7XG4gIGFsbG93TWV0aG9kczogWydQT1NUJywgJ09QVElPTlMnXSxcbiAgYWxsb3dIZWFkZXJzOiBbJ0NvbnRlbnQtVHlwZScsICdBdXRob3JpemF0aW9uJ10sXG4gIG9yaWdpbjogJyonLFxufSk7XG5cbmNvbnN0IGFwb2xsb1NlcnZlciA9IG5ldyBBcG9sbG9TZXJ2ZXIoeyBzY2hlbWEgfSk7XG5cbmNvbnN0IHN0YXJ0U2VydmVyID0gYXBvbGxvU2VydmVyLnN0YXJ0KCk7XG5cbmFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcbiAgaWYgKHJlcS5tZXRob2QgPT09ICdPUFRJT05TJykge1xuICAgIHJlcy5lbmQoKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBhd2FpdCBzdGFydFNlcnZlcjtcbiAgYXdhaXQgYXBvbGxvU2VydmVyLmNyZWF0ZUhhbmRsZXIoe1xuICAgIHBhdGg6ICcvYXBpL2dyYXBocWwnLFxuICB9KShyZXEsIHJlcyk7XG59XG5cbmV4cG9ydCBjb25zdCBjb25maWcgPSB7XG4gIGFwaToge1xuICAgIGJvZHlQYXJzZXI6IGZhbHNlLFxuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ycyhoYW5kbGVyKTtcblxuIl0sIm5hbWVzIjpbIkFwb2xsb1NlcnZlciIsIkNvcnMiLCJzY2hlbWEiLCJjb3JzIiwiYWxsb3dNZXRob2RzIiwiYWxsb3dIZWFkZXJzIiwib3JpZ2luIiwiYXBvbGxvU2VydmVyIiwic3RhcnRTZXJ2ZXIiLCJzdGFydCIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJlbmQiLCJjcmVhdGVIYW5kbGVyIiwicGF0aCIsImNvbmZpZyIsImFwaSIsImJvZHlQYXJzZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/graphql.ts\n");

/***/ }),

/***/ "(api)/./schema/Query.ts":
/*!*************************!*\
  !*** ./schema/Query.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Framework\": () => (/* binding */ Framework),\n/* harmony export */   \"Query\": () => (/* binding */ Query)\n/* harmony export */ });\n/* harmony import */ var nexus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nexus */ \"nexus\");\n/* harmony import */ var nexus__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nexus__WEBPACK_IMPORTED_MODULE_0__);\n\nconst Framework = (0,nexus__WEBPACK_IMPORTED_MODULE_0__.objectType)({\n    name: \"Framework\",\n    definition (t) {\n        t.id(\"id\");\n        t.string(\"name\");\n    }\n});\nconst Query = (0,nexus__WEBPACK_IMPORTED_MODULE_0__.queryType)({\n    definition (t) {\n        t.list.field(\"frameworks\", {\n            type: \"Framework\",\n            resolve: ()=>{\n                return [\n                    {\n                        id: \"1\",\n                        name: \"React\"\n                    },\n                    {\n                        id: \"2\",\n                        name: \"Vue\"\n                    },\n                    {\n                        id: \"3\",\n                        name: \"Angular\"\n                    },\n                    {\n                        id: \"4\",\n                        name: \"Svelte\"\n                    }, \n                ];\n            }\n        });\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zY2hlbWEvUXVlcnkudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUE2QztBQUN0QyxNQUFNRSxTQUFTLEdBQUdGLGlEQUFVLENBQUM7SUFDbENHLElBQUksRUFBRSxXQUFXO0lBQ2pCQyxVQUFVLEVBQUNDLENBQUMsRUFBRTtRQUNaQSxDQUFDLENBQUNDLEVBQUUsQ0FBQyxJQUFJLENBQUM7UUFDVkQsQ0FBQyxDQUFDRSxNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0YsQ0FBQztBQUNLLE1BQU1DLEtBQUssR0FBR1AsZ0RBQVMsQ0FBQztJQUM3QkcsVUFBVSxFQUFDQyxDQUFDLEVBQUU7UUFDWkEsQ0FBQyxDQUFDSSxJQUFJLENBQUNDLEtBQUssQ0FBQyxZQUFZLEVBQUU7WUFDekJDLElBQUksRUFBRSxXQUFXO1lBQ2pCQyxPQUFPLEVBQUUsSUFBTTtnQkFDYixPQUFPO29CQUNMO3dCQUNFTixFQUFFLEVBQUUsR0FBRzt3QkFDUEgsSUFBSSxFQUFFLE9BQU87cUJBQ2Q7b0JBQ0Q7d0JBQ0VHLEVBQUUsRUFBRSxHQUFHO3dCQUNQSCxJQUFJLEVBQUUsS0FBSztxQkFDWjtvQkFDRDt3QkFDRUcsRUFBRSxFQUFFLEdBQUc7d0JBQ1BILElBQUksRUFBRSxTQUFTO3FCQUNoQjtvQkFDRDt3QkFDRUcsRUFBRSxFQUFFLEdBQUc7d0JBQ1BILElBQUksRUFBRSxRQUFRO3FCQUNmO2lCQUNGO2FBQ0Y7U0FDRixDQUFDO0tBQ0g7Q0FDRixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQtY29kZS10ZXN0Ly4vc2NoZW1hL1F1ZXJ5LnRzP2VlMjYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgb2JqZWN0VHlwZSwgcXVlcnlUeXBlIH0gZnJvbSAnbmV4dXMnXG5leHBvcnQgY29uc3QgRnJhbWV3b3JrID0gb2JqZWN0VHlwZSh7XG4gIG5hbWU6ICdGcmFtZXdvcmsnLFxuICBkZWZpbml0aW9uKHQpIHtcbiAgICB0LmlkKCdpZCcpXG4gICAgdC5zdHJpbmcoJ25hbWUnKVxuICB9LFxufSlcbmV4cG9ydCBjb25zdCBRdWVyeSA9IHF1ZXJ5VHlwZSh7XG4gIGRlZmluaXRpb24odCkge1xuICAgIHQubGlzdC5maWVsZCgnZnJhbWV3b3JrcycsIHtcbiAgICAgIHR5cGU6ICdGcmFtZXdvcmsnLFxuICAgICAgcmVzb2x2ZTogKCkgPT4ge1xuICAgICAgICByZXR1cm4gW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAnMScsXG4gICAgICAgICAgICBuYW1lOiAnUmVhY3QnLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWQ6ICcyJyxcbiAgICAgICAgICAgIG5hbWU6ICdWdWUnLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWQ6ICczJyxcbiAgICAgICAgICAgIG5hbWU6ICdBbmd1bGFyJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAnNCcsXG4gICAgICAgICAgICBuYW1lOiAnU3ZlbHRlJyxcbiAgICAgICAgICB9LFxuICAgICAgICBdXG4gICAgICB9LFxuICAgIH0pXG4gIH0sXG59KSJdLCJuYW1lcyI6WyJvYmplY3RUeXBlIiwicXVlcnlUeXBlIiwiRnJhbWV3b3JrIiwibmFtZSIsImRlZmluaXRpb24iLCJ0IiwiaWQiLCJzdHJpbmciLCJRdWVyeSIsImxpc3QiLCJmaWVsZCIsInR5cGUiLCJyZXNvbHZlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./schema/Query.ts\n");

/***/ }),

/***/ "(api)/./schema/index.ts":
/*!*************************!*\
  !*** ./schema/index.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var nexus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nexus */ \"nexus\");\n/* harmony import */ var nexus__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nexus__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Query */ \"(api)/./schema/Query.ts\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst schema = (0,nexus__WEBPACK_IMPORTED_MODULE_0__.makeSchema)({\n    types: [\n        _Query__WEBPACK_IMPORTED_MODULE_1__\n    ],\n    outputs: {\n        typegen: path__WEBPACK_IMPORTED_MODULE_2___default().join(process.cwd(), \"generated/nexus-typegen.ts\"),\n        schema: path__WEBPACK_IMPORTED_MODULE_2___default().join(process.cwd(), \"generated/schema.graphql\")\n    }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (schema);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zY2hlbWEvaW5kZXgudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQW1DO0FBQ0c7QUFDZDtBQUV4QixNQUFNRyxNQUFNLEdBQUdILGlEQUFVLENBQUM7SUFDeEJJLEtBQUssRUFBRTtRQUFDSCxtQ0FBVTtLQUFDO0lBQ25CSSxPQUFPLEVBQUU7UUFDUEMsT0FBTyxFQUFFSixnREFBUyxDQUFDTSxPQUFPLENBQUNDLEdBQUcsRUFBRSxFQUFFLDRCQUE0QixDQUFDO1FBQy9ETixNQUFNLEVBQUVELGdEQUFTLENBQUNNLE9BQU8sQ0FBQ0MsR0FBRyxFQUFFLEVBQUUsMEJBQTBCLENBQUM7S0FDN0Q7Q0FDRixDQUFDO0FBRUYsaUVBQWVOLE1BQU0sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLWNvZGUtdGVzdC8uL3NjaGVtYS9pbmRleC50cz82ZDZjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1ha2VTY2hlbWEgfSBmcm9tICduZXh1cyc7XG5pbXBvcnQgKiBhcyBRdWVyeVR5cGVzIGZyb20gJy4vUXVlcnknO1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5cbmNvbnN0IHNjaGVtYSA9IG1ha2VTY2hlbWEoe1xuICB0eXBlczogW1F1ZXJ5VHlwZXNdLFxuICBvdXRwdXRzOiB7XG4gICAgdHlwZWdlbjogcGF0aC5qb2luKHByb2Nlc3MuY3dkKCksICdnZW5lcmF0ZWQvbmV4dXMtdHlwZWdlbi50cycpLFxuICAgIHNjaGVtYTogcGF0aC5qb2luKHByb2Nlc3MuY3dkKCksICdnZW5lcmF0ZWQvc2NoZW1hLmdyYXBocWwnKSxcbiAgfSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBzY2hlbWE7XG4iXSwibmFtZXMiOlsibWFrZVNjaGVtYSIsIlF1ZXJ5VHlwZXMiLCJwYXRoIiwic2NoZW1hIiwidHlwZXMiLCJvdXRwdXRzIiwidHlwZWdlbiIsImpvaW4iLCJwcm9jZXNzIiwiY3dkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./schema/index.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/graphql.ts"));
module.exports = __webpack_exports__;

})();