"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./components/non-reusables/header/headerContainer.tsx":
/*!*************************************************************!*\
  !*** ./components/non-reusables/header/headerContainer.tsx ***!
  \*************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _state_scrollState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/state/scrollState */ \"(app-pages-browser)/./state/scrollState.ts\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-pages-browser)/./node_modules/@chakra-ui/layout/dist/chunk-PULVB27S.mjs\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! recoil */ \"(app-pages-browser)/./node_modules/recoil/es/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst HeaderContainer = (param)=>{\n    let { children } = param;\n    _s();\n    const isScrolled = (0,recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilValue)(_state_scrollState__WEBPACK_IMPORTED_MODULE_1__.scrollState);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {\n        as: \"header\",\n        pos: \"fixed\",\n        w: \"100%\",\n        top: \"2rem\",\n        left: \"50%\",\n        transform: \"translateX(-50%)\",\n        zIndex: 10,\n        borderBottom: \"1px solid rgba(0, 100, 100, 0.05)\",\n        children: children\n    }, void 0, false, {\n        fileName: \"E:\\\\Next\\\\portfolio\\\\components\\\\non-reusables\\\\header\\\\headerContainer.tsx\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, undefined);\n};\n_s(HeaderContainer, \"KPCTA019sSf2aVZxT61rUI15jGE=\", false, function() {\n    return [\n        recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilValue\n    ];\n});\n_c = HeaderContainer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HeaderContainer);\nvar _c;\n$RefreshReg$(_c, \"HeaderContainer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvbm9uLXJldXNhYmxlcy9oZWFkZXIvaGVhZGVyQ29udGFpbmVyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ2tEO0FBQ1g7QUFFQztBQU14QyxNQUFNRyxrQkFBa0I7UUFBQyxFQUFFQyxRQUFRLEVBQVM7O0lBQzFDLE1BQU1DLGFBQWFILHNEQUFjQSxDQUFDRiwyREFBV0E7SUFFN0MscUJBQ0UsOERBQUNDLGlEQUFHQTtRQUNGSyxJQUFHO1FBQ0hDLEtBQUk7UUFDSkMsR0FBRTtRQUNGQyxLQUFJO1FBQ0pDLE1BQUs7UUFDTEMsV0FBVTtRQUNWQyxRQUFRO1FBQ1JDLGNBQWE7a0JBSVpUOzs7Ozs7QUFHUDtHQW5CTUQ7O1FBQ2VELGtEQUFjQTs7O0tBRDdCQztBQXFCTiwrREFBZUEsZUFBZUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL25vbi1yZXVzYWJsZXMvaGVhZGVyL2hlYWRlckNvbnRhaW5lci50c3g/ZjBiOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29udGFpbmVyIGZyb20gXCJAL2NvbXBvbmVudHMvcmV1c2FibGVzL2NvbnRhaW5lclwiO1xyXG5pbXBvcnQgeyBzY3JvbGxTdGF0ZSB9IGZyb20gXCJAL3N0YXRlL3Njcm9sbFN0YXRlXCI7XHJcbmltcG9ydCB7IEJveCB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XHJcbmltcG9ydCB7IFJlYWN0Tm9kZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSZWNvaWxWYWx1ZSB9IGZyb20gXCJyZWNvaWxcIjtcclxuXHJcbnR5cGUgUHJvcHMgPSB7XHJcbiAgY2hpbGRyZW46IFJlYWN0Tm9kZTtcclxufTtcclxuXHJcbmNvbnN0IEhlYWRlckNvbnRhaW5lciA9ICh7IGNoaWxkcmVuIH06IFByb3BzKSA9PiB7XHJcbiAgY29uc3QgaXNTY3JvbGxlZCA9IHVzZVJlY29pbFZhbHVlKHNjcm9sbFN0YXRlKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3hcclxuICAgICAgYXM9XCJoZWFkZXJcIlxyXG4gICAgICBwb3M9XCJmaXhlZFwiXHJcbiAgICAgIHc9XCIxMDAlXCJcclxuICAgICAgdG9wPVwiMnJlbVwiXHJcbiAgICAgIGxlZnQ9XCI1MCVcIlxyXG4gICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGVYKC01MCUpXCJcclxuICAgICAgekluZGV4PXsxMH1cclxuICAgICAgYm9yZGVyQm90dG9tPVwiMXB4IHNvbGlkIHJnYmEoMCwgMTAwLCAxMDAsIDAuMDUpXCJcclxuICAgICAgLy8gYmFja2Ryb3BGaWx0ZXI9XCJibHVyKDE1cHgpXCJcclxuICAgICAgLy8gYmFja2Ryb3BGaWx0ZXI9e2lzU2Nyb2xsZWQgPyBcImJsdXIoMTVweClcIiA6IFwiXCJ9XHJcbiAgICA+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvQm94PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXJDb250YWluZXI7XHJcbiJdLCJuYW1lcyI6WyJzY3JvbGxTdGF0ZSIsIkJveCIsInVzZVJlY29pbFZhbHVlIiwiSGVhZGVyQ29udGFpbmVyIiwiY2hpbGRyZW4iLCJpc1Njcm9sbGVkIiwiYXMiLCJwb3MiLCJ3IiwidG9wIiwibGVmdCIsInRyYW5zZm9ybSIsInpJbmRleCIsImJvcmRlckJvdHRvbSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/non-reusables/header/headerContainer.tsx\n"));

/***/ })

});