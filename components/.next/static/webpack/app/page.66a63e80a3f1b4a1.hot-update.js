"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./components/sections/overview.tsx":
/*!******************************************!*\
  !*** ./components/sections/overview.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Overview; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-pages-browser)/./node_modules/@chakra-ui/layout/dist/chunk-PULVB27S.mjs\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-pages-browser)/./node_modules/@chakra-ui/layout/dist/chunk-ZHMYA64R.mjs\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-pages-browser)/./node_modules/@chakra-ui/layout/dist/chunk-2OOHT3W5.mjs\");\n/* harmony import */ var _reusables_container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reusables/container */ \"(app-pages-browser)/./components/reusables/container.tsx\");\n\n\n\nfunction Overview() {\n    const items = [\n        {\n            label: \"Clients worked with\",\n            value: 15\n        },\n        {\n            label: \"Projects worked on\",\n            value: 20\n        },\n        {\n            label: \"Years of experience\",\n            value: 2\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {\n        p: \"2rem\",\n        marginTop: \"5rem\",\n        zIndex: 5,\n        // bg=\"palette.background.primary.hover\"\n        color: \"palette.text.primary.color\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_reusables_container__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n            as: \"section\",\n            display: \"flex\",\n            justifyContent: \"space-around\",\n            alignItems: \"center\",\n            children: items.map((item)=>{\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Stack, {\n                    align: \"center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Text, {\n                            children: item.label\n                        }, void 0, false, {\n                            fileName: \"E:\\\\Next\\\\portfolio\\\\components\\\\sections\\\\overview.tsx\",\n                            lineNumber: 28,\n                            columnNumber: 15\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Text, {\n                            variant: \"heading\",\n                            fontSize: \"4.5rem\",\n                            fontWeight: \"black\",\n                            color: \"palette.accent.primary.color\",\n                            children: [\n                                item.value,\n                                \"+\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"E:\\\\Next\\\\portfolio\\\\components\\\\sections\\\\overview.tsx\",\n                            lineNumber: 29,\n                            columnNumber: 15\n                        }, this)\n                    ]\n                }, item.label, true, {\n                    fileName: \"E:\\\\Next\\\\portfolio\\\\components\\\\sections\\\\overview.tsx\",\n                    lineNumber: 27,\n                    columnNumber: 13\n                }, this);\n            })\n        }, void 0, false, {\n            fileName: \"E:\\\\Next\\\\portfolio\\\\components\\\\sections\\\\overview.tsx\",\n            lineNumber: 19,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"E:\\\\Next\\\\portfolio\\\\components\\\\sections\\\\overview.tsx\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, this);\n}\n_c = Overview;\nvar _c;\n$RefreshReg$(_c, \"Overview\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvc2VjdGlvbnMvb3ZlcnZpZXcudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBb0Q7QUFDTDtBQUVoQyxTQUFTSTtJQUN0QixNQUFNQyxRQUFRO1FBQ1o7WUFBRUMsT0FBTztZQUF1QkMsT0FBTztRQUFHO1FBQzFDO1lBQUVELE9BQU87WUFBc0JDLE9BQU87UUFBRztRQUN6QztZQUFFRCxPQUFPO1lBQXVCQyxPQUFPO1FBQUU7S0FDMUM7SUFFRCxxQkFDRSw4REFBQ1AsaURBQUdBO1FBQ0ZRLEdBQUU7UUFDRkMsV0FBVTtRQUNWQyxRQUFRO1FBQ1Isd0NBQXdDO1FBQ3hDQyxPQUFNO2tCQUVOLDRFQUFDUiw0REFBU0E7WUFDUlMsSUFBRztZQUNIQyxTQUFRO1lBQ1JDLGdCQUFlO1lBQ2ZDLFlBQVc7c0JBRVZWLE1BQU1XLEdBQUcsQ0FBQyxDQUFDQztnQkFDVixxQkFDRSw4REFBQ2hCLG1EQUFLQTtvQkFBQ2lCLE9BQU07O3NDQUNYLDhEQUFDaEIsa0RBQUlBO3NDQUFFZSxLQUFLWCxLQUFLOzs7Ozs7c0NBQ2pCLDhEQUFDSixrREFBSUE7NEJBQ0hpQixTQUFROzRCQUNSQyxVQUFTOzRCQUNUQyxZQUFXOzRCQUNYVixPQUFNOztnQ0FFTE0sS0FBS1YsS0FBSztnQ0FBQzs7Ozs7Ozs7bUJBUldVLEtBQUtYLEtBQUs7Ozs7O1lBWXpDOzs7Ozs7Ozs7OztBQUlSO0tBdkN3QkYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zZWN0aW9ucy9vdmVydmlldy50c3g/NDM0OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3gsIFN0YWNrLCBUZXh0IH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tIFwiLi4vcmV1c2FibGVzL2NvbnRhaW5lclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gT3ZlcnZpZXcoKSB7XHJcbiAgY29uc3QgaXRlbXMgPSBbXHJcbiAgICB7IGxhYmVsOiBcIkNsaWVudHMgd29ya2VkIHdpdGhcIiwgdmFsdWU6IDE1IH0sXHJcbiAgICB7IGxhYmVsOiBcIlByb2plY3RzIHdvcmtlZCBvblwiLCB2YWx1ZTogMjAgfSxcclxuICAgIHsgbGFiZWw6IFwiWWVhcnMgb2YgZXhwZXJpZW5jZVwiLCB2YWx1ZTogMiB9LFxyXG4gIF07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94XHJcbiAgICAgIHA9XCIycmVtXCJcclxuICAgICAgbWFyZ2luVG9wPVwiNXJlbVwiXHJcbiAgICAgIHpJbmRleD17NX1cclxuICAgICAgLy8gYmc9XCJwYWxldHRlLmJhY2tncm91bmQucHJpbWFyeS5ob3ZlclwiXHJcbiAgICAgIGNvbG9yPVwicGFsZXR0ZS50ZXh0LnByaW1hcnkuY29sb3JcIlxyXG4gICAgPlxyXG4gICAgICA8Q29udGFpbmVyXHJcbiAgICAgICAgYXM9XCJzZWN0aW9uXCJcclxuICAgICAgICBkaXNwbGF5PVwiZmxleFwiXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJzcGFjZS1hcm91bmRcIlxyXG4gICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxyXG4gICAgICA+XHJcbiAgICAgICAge2l0ZW1zLm1hcCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPFN0YWNrIGFsaWduPVwiY2VudGVyXCIga2V5PXtpdGVtLmxhYmVsfT5cclxuICAgICAgICAgICAgICA8VGV4dD57aXRlbS5sYWJlbH08L1RleHQ+XHJcbiAgICAgICAgICAgICAgPFRleHRcclxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJoZWFkaW5nXCJcclxuICAgICAgICAgICAgICAgIGZvbnRTaXplPVwiNC41cmVtXCJcclxuICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ9XCJibGFja1wiXHJcbiAgICAgICAgICAgICAgICBjb2xvcj1cInBhbGV0dGUuYWNjZW50LnByaW1hcnkuY29sb3JcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtpdGVtLnZhbHVlfStcclxuICAgICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICAgIDwvU3RhY2s+XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0pfVxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvQm94PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIkJveCIsIlN0YWNrIiwiVGV4dCIsIkNvbnRhaW5lciIsIk92ZXJ2aWV3IiwiaXRlbXMiLCJsYWJlbCIsInZhbHVlIiwicCIsIm1hcmdpblRvcCIsInpJbmRleCIsImNvbG9yIiwiYXMiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwibWFwIiwiaXRlbSIsImFsaWduIiwidmFyaWFudCIsImZvbnRTaXplIiwiZm9udFdlaWdodCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/sections/overview.tsx\n"));

/***/ })

});