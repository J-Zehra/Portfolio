"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/case-studies/[id]/page",{

/***/ "(app-pages-browser)/./app/case-studies/components/websiteLink.tsx":
/*!*****************************************************!*\
  !*** ./app/case-studies/components/websiteLink.tsx ***!
  \*****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-pages-browser)/./node_modules/@chakra-ui/layout/dist/chunk-FAWTVNS3.mjs\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _barrel_optimize_names_CiLink_react_icons_ci__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=CiLink!=!react-icons/ci */ \"(app-pages-browser)/./node_modules/react-icons/ci/index.mjs\");\n\n\n\n\n\nconst WebsiteLink = (param)=>{\n    let { link } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        href: link || \"\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Center, {\n            bg: \"palette.accent.secondary.color\",\n            borderRadius: \"2rem\",\n            padding: \".8rem\",\n            fontSize: \"1.4rem\",\n            _hover: {\n                bg: \"palette.accent.secondary.hover\"\n            },\n            transition: \"all .3s ease\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_CiLink_react_icons_ci__WEBPACK_IMPORTED_MODULE_4__.CiLink, {}, void 0, false, {\n                fileName: \"E:\\\\Next\\\\portfolio\\\\app\\\\case-studies\\\\components\\\\websiteLink.tsx\",\n                lineNumber: 23,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"E:\\\\Next\\\\portfolio\\\\app\\\\case-studies\\\\components\\\\websiteLink.tsx\",\n            lineNumber: 13,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"E:\\\\Next\\\\portfolio\\\\app\\\\case-studies\\\\components\\\\websiteLink.tsx\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, undefined);\n};\n_c = WebsiteLink;\n/* harmony default export */ __webpack_exports__[\"default\"] = (WebsiteLink);\nvar _c;\n$RefreshReg$(_c, \"WebsiteLink\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jYXNlLXN0dWRpZXMvY29tcG9uZW50cy93ZWJzaXRlTGluay50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBMEM7QUFDYjtBQUNIO0FBQ2M7QUFNeEMsTUFBTUksY0FBYztRQUFDLEVBQUVDLElBQUksRUFBUztJQUNsQyxxQkFDRSw4REFBQ0osaURBQUlBO1FBQUNLLE1BQU1ELFFBQVE7a0JBQ2xCLDRFQUFDTCxvREFBTUE7WUFDTE8sSUFBRztZQUNIQyxjQUFhO1lBQ2JDLFNBQVE7WUFDUkMsVUFBUztZQUNUQyxRQUFRO2dCQUNOSixJQUFJO1lBQ047WUFDQUssWUFBVztzQkFFWCw0RUFBQ1QsZ0ZBQU1BOzs7Ozs7Ozs7Ozs7Ozs7QUFJZjtLQWpCTUM7QUFtQk4sK0RBQWVBLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2Nhc2Utc3R1ZGllcy9jb21wb25lbnRzL3dlYnNpdGVMaW5rLnRzeD81ZDAyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENlbnRlciB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBDaUxpbmsgfSBmcm9tIFwicmVhY3QtaWNvbnMvY2lcIjtcclxuXHJcbnR5cGUgUHJvcHMgPSB7XHJcbiAgbGluaz86IHN0cmluZztcclxufTtcclxuXHJcbmNvbnN0IFdlYnNpdGVMaW5rID0gKHsgbGluayB9OiBQcm9wcykgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8TGluayBocmVmPXtsaW5rIHx8IFwiXCJ9PlxyXG4gICAgICA8Q2VudGVyXHJcbiAgICAgICAgYmc9XCJwYWxldHRlLmFjY2VudC5zZWNvbmRhcnkuY29sb3JcIlxyXG4gICAgICAgIGJvcmRlclJhZGl1cz1cIjJyZW1cIlxyXG4gICAgICAgIHBhZGRpbmc9XCIuOHJlbVwiXHJcbiAgICAgICAgZm9udFNpemU9XCIxLjRyZW1cIlxyXG4gICAgICAgIF9ob3Zlcj17e1xyXG4gICAgICAgICAgYmc6IFwicGFsZXR0ZS5hY2NlbnQuc2Vjb25kYXJ5LmhvdmVyXCIsXHJcbiAgICAgICAgfX1cclxuICAgICAgICB0cmFuc2l0aW9uPVwiYWxsIC4zcyBlYXNlXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxDaUxpbmsgLz5cclxuICAgICAgPC9DZW50ZXI+XHJcbiAgICA8L0xpbms+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdlYnNpdGVMaW5rO1xyXG4iXSwibmFtZXMiOlsiQ2VudGVyIiwiTGluayIsIlJlYWN0IiwiQ2lMaW5rIiwiV2Vic2l0ZUxpbmsiLCJsaW5rIiwiaHJlZiIsImJnIiwiYm9yZGVyUmFkaXVzIiwicGFkZGluZyIsImZvbnRTaXplIiwiX2hvdmVyIiwidHJhbnNpdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/case-studies/components/websiteLink.tsx\n"));

/***/ })

});