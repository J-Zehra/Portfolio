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

/***/ "(app-pages-browser)/./components/non-reusables/header/navlinks.tsx":
/*!******************************************************!*\
  !*** ./components/non-reusables/header/navlinks.tsx ***!
  \******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Navlinks; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _state_activeNav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/state/activeNav */ \"(app-pages-browser)/./state/activeNav.ts\");\n/* harmony import */ var _state_scrollState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/state/scrollState */ \"(app-pages-browser)/./state/scrollState.ts\");\n/* harmony import */ var _utils_enums__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/utils/enums */ \"(app-pages-browser)/./utils/enums.ts\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-pages-browser)/./node_modules/@chakra-ui/layout/dist/chunk-ZHMYA64R.mjs\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-pages-browser)/./node_modules/@chakra-ui/layout/dist/chunk-FAWTVNS3.mjs\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-pages-browser)/./node_modules/@chakra-ui/layout/dist/chunk-2OOHT3W5.mjs\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! recoil */ \"(app-pages-browser)/./node_modules/recoil/es/index.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Navlinks() {\n    _s();\n    const activeNav = (0,recoil__WEBPACK_IMPORTED_MODULE_5__.useRecoilValue)(_state_activeNav__WEBPACK_IMPORTED_MODULE_1__.activeNavState);\n    const isScrolled = (0,recoil__WEBPACK_IMPORTED_MODULE_5__.useRecoilValue)(_state_scrollState__WEBPACK_IMPORTED_MODULE_2__.scrollState);\n    const links = [\n        {\n            label: _utils_enums__WEBPACK_IMPORTED_MODULE_3__.NavLinks.home,\n            link: \"/\"\n        },\n        {\n            label: _utils_enums__WEBPACK_IMPORTED_MODULE_3__.NavLinks.about,\n            link: \"/about\"\n        },\n        {\n            label: _utils_enums__WEBPACK_IMPORTED_MODULE_3__.NavLinks.caseStudies,\n            link: \"/case-studies\"\n        },\n        {\n            label: _utils_enums__WEBPACK_IMPORTED_MODULE_3__.NavLinks.services,\n            link: \"/services\"\n        },\n        {\n            label: _utils_enums__WEBPACK_IMPORTED_MODULE_3__.NavLinks.contact,\n            link: \"/contact\"\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Stack, {\n        as: \"nav\",\n        spacing: \"2rem\",\n        direction: \"row\",\n        align: \"center\",\n        children: links.map((nav)=>{\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                href: nav.link,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Center, {\n                    transition: \"all .2s ease\",\n                    h: isScrolled ? \"3rem\" : \"4rem\",\n                    borderBottom: activeNav === nav.label ? \"2px solid\" : \"\",\n                    borderColor: \"palette.accent\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Text, {\n                        color: activeNav === nav.label ? \"palette.accent.color\" : \"\",\n                        fontWeight: activeNav === nav.label ? \"medium\" : \"normal\",\n                        _hover: {\n                            color: \"palette.accent\"\n                        },\n                        fontSize: \".8rem\",\n                        children: nav.label\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Next\\\\portfolio\\\\components\\\\non-reusables\\\\header\\\\navlinks.tsx\",\n                        lineNumber: 33,\n                        columnNumber: 15\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"E:\\\\Next\\\\portfolio\\\\components\\\\non-reusables\\\\header\\\\navlinks.tsx\",\n                    lineNumber: 27,\n                    columnNumber: 13\n                }, this)\n            }, nav.link, false, {\n                fileName: \"E:\\\\Next\\\\portfolio\\\\components\\\\non-reusables\\\\header\\\\navlinks.tsx\",\n                lineNumber: 26,\n                columnNumber: 11\n            }, this);\n        })\n    }, void 0, false, {\n        fileName: \"E:\\\\Next\\\\portfolio\\\\components\\\\non-reusables\\\\header\\\\navlinks.tsx\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, this);\n}\n_s(Navlinks, \"j2/nQ96sKmZ21ATCAV0zBqiYC/M=\", false, function() {\n    return [\n        recoil__WEBPACK_IMPORTED_MODULE_5__.useRecoilValue,\n        recoil__WEBPACK_IMPORTED_MODULE_5__.useRecoilValue\n    ];\n});\n_c = Navlinks;\nvar _c;\n$RefreshReg$(_c, \"Navlinks\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvbm9uLXJldXNhYmxlcy9oZWFkZXIvbmF2bGlua3MudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUVtRDtBQUNEO0FBQ1Q7QUFDYztBQUMxQjtBQUNXO0FBRXpCLFNBQVNROztJQUN0QixNQUFNQyxZQUFZRixzREFBY0EsQ0FBQ1AsNERBQWNBO0lBQy9DLE1BQU1VLGFBQWFILHNEQUFjQSxDQUFDTiwyREFBV0E7SUFFN0MsTUFBTVUsUUFBUTtRQUNaO1lBQUVDLE9BQU9WLGtEQUFRQSxDQUFDVyxJQUFJO1lBQUVDLE1BQU07UUFBSTtRQUNsQztZQUFFRixPQUFPVixrREFBUUEsQ0FBQ2EsS0FBSztZQUFFRCxNQUFNO1FBQVM7UUFDeEM7WUFBRUYsT0FBT1Ysa0RBQVFBLENBQUNjLFdBQVc7WUFBRUYsTUFBTTtRQUFnQjtRQUNyRDtZQUFFRixPQUFPVixrREFBUUEsQ0FBQ2UsUUFBUTtZQUFFSCxNQUFNO1FBQVk7UUFDOUM7WUFBRUYsT0FBT1Ysa0RBQVFBLENBQUNnQixPQUFPO1lBQUVKLE1BQU07UUFBVztLQUM3QztJQUVELHFCQUNFLDhEQUFDVixtREFBS0E7UUFBQ2UsSUFBRztRQUFNQyxTQUFRO1FBQU9DLFdBQVU7UUFBTUMsT0FBTTtrQkFDbERYLE1BQU1ZLEdBQUcsQ0FBQyxDQUFDQztZQUNWLHFCQUNFLDhEQUFDbEIsaURBQUlBO2dCQUFnQm1CLE1BQU1ELElBQUlWLElBQUk7MEJBQ2pDLDRFQUFDWCxvREFBTUE7b0JBQ0x1QixZQUFXO29CQUNYQyxHQUFHakIsYUFBYSxTQUFTO29CQUN6QmtCLGNBQWNuQixjQUFjZSxJQUFJWixLQUFLLEdBQUcsY0FBYztvQkFDdERpQixhQUFZOzhCQUVaLDRFQUFDeEIsa0RBQUlBO3dCQUNIeUIsT0FBT3JCLGNBQWNlLElBQUlaLEtBQUssR0FBRyx5QkFBeUI7d0JBQzFEbUIsWUFBWXRCLGNBQWNlLElBQUlaLEtBQUssR0FBRyxXQUFXO3dCQUNqRG9CLFFBQVE7NEJBQUVGLE9BQU87d0JBQWlCO3dCQUNsQ0csVUFBUztrQ0FFUlQsSUFBSVosS0FBSzs7Ozs7Ozs7Ozs7ZUFiTFksSUFBSVYsSUFBSTs7Ozs7UUFrQnZCOzs7Ozs7QUFHTjtHQXJDd0JOOztRQUNKRCxrREFBY0E7UUFDYkEsa0RBQWNBOzs7S0FGWEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ub24tcmV1c2FibGVzL2hlYWRlci9uYXZsaW5rcy50c3g/MjQ3ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuXHJcbmltcG9ydCB7IGFjdGl2ZU5hdlN0YXRlIH0gZnJvbSBcIkAvc3RhdGUvYWN0aXZlTmF2XCI7XHJcbmltcG9ydCB7IHNjcm9sbFN0YXRlIH0gZnJvbSBcIkAvc3RhdGUvc2Nyb2xsU3RhdGVcIjtcclxuaW1wb3J0IHsgTmF2TGlua3MgfSBmcm9tIFwiQC91dGlscy9lbnVtc1wiO1xyXG5pbXBvcnQgeyBDZW50ZXIsIFN0YWNrLCBUZXh0IH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyB1c2VSZWNvaWxWYWx1ZSB9IGZyb20gXCJyZWNvaWxcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5hdmxpbmtzKCkge1xyXG4gIGNvbnN0IGFjdGl2ZU5hdiA9IHVzZVJlY29pbFZhbHVlKGFjdGl2ZU5hdlN0YXRlKTtcclxuICBjb25zdCBpc1Njcm9sbGVkID0gdXNlUmVjb2lsVmFsdWUoc2Nyb2xsU3RhdGUpO1xyXG5cclxuICBjb25zdCBsaW5rcyA9IFtcclxuICAgIHsgbGFiZWw6IE5hdkxpbmtzLmhvbWUsIGxpbms6IFwiL1wiIH0sXHJcbiAgICB7IGxhYmVsOiBOYXZMaW5rcy5hYm91dCwgbGluazogXCIvYWJvdXRcIiB9LFxyXG4gICAgeyBsYWJlbDogTmF2TGlua3MuY2FzZVN0dWRpZXMsIGxpbms6IFwiL2Nhc2Utc3R1ZGllc1wiIH0sXHJcbiAgICB7IGxhYmVsOiBOYXZMaW5rcy5zZXJ2aWNlcywgbGluazogXCIvc2VydmljZXNcIiB9LFxyXG4gICAgeyBsYWJlbDogTmF2TGlua3MuY29udGFjdCwgbGluazogXCIvY29udGFjdFwiIH0sXHJcbiAgXTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxTdGFjayBhcz1cIm5hdlwiIHNwYWNpbmc9XCIycmVtXCIgZGlyZWN0aW9uPVwicm93XCIgYWxpZ249XCJjZW50ZXJcIj5cclxuICAgICAge2xpbmtzLm1hcCgobmF2KSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxMaW5rIGtleT17bmF2Lmxpbmt9IGhyZWY9e25hdi5saW5rfT5cclxuICAgICAgICAgICAgPENlbnRlclxyXG4gICAgICAgICAgICAgIHRyYW5zaXRpb249XCJhbGwgLjJzIGVhc2VcIlxyXG4gICAgICAgICAgICAgIGg9e2lzU2Nyb2xsZWQgPyBcIjNyZW1cIiA6IFwiNHJlbVwifVxyXG4gICAgICAgICAgICAgIGJvcmRlckJvdHRvbT17YWN0aXZlTmF2ID09PSBuYXYubGFiZWwgPyBcIjJweCBzb2xpZFwiIDogXCJcIn1cclxuICAgICAgICAgICAgICBib3JkZXJDb2xvcj1cInBhbGV0dGUuYWNjZW50XCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxUZXh0XHJcbiAgICAgICAgICAgICAgICBjb2xvcj17YWN0aXZlTmF2ID09PSBuYXYubGFiZWwgPyBcInBhbGV0dGUuYWNjZW50LmNvbG9yXCIgOiBcIlwifVxyXG4gICAgICAgICAgICAgICAgZm9udFdlaWdodD17YWN0aXZlTmF2ID09PSBuYXYubGFiZWwgPyBcIm1lZGl1bVwiIDogXCJub3JtYWxcIn1cclxuICAgICAgICAgICAgICAgIF9ob3Zlcj17eyBjb2xvcjogXCJwYWxldHRlLmFjY2VudFwiIH19XHJcbiAgICAgICAgICAgICAgICBmb250U2l6ZT1cIi44cmVtXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7bmF2LmxhYmVsfVxyXG4gICAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgPC9DZW50ZXI+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgKTtcclxuICAgICAgfSl9XHJcbiAgICA8L1N0YWNrPlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbImFjdGl2ZU5hdlN0YXRlIiwic2Nyb2xsU3RhdGUiLCJOYXZMaW5rcyIsIkNlbnRlciIsIlN0YWNrIiwiVGV4dCIsIkxpbmsiLCJ1c2VSZWNvaWxWYWx1ZSIsIk5hdmxpbmtzIiwiYWN0aXZlTmF2IiwiaXNTY3JvbGxlZCIsImxpbmtzIiwibGFiZWwiLCJob21lIiwibGluayIsImFib3V0IiwiY2FzZVN0dWRpZXMiLCJzZXJ2aWNlcyIsImNvbnRhY3QiLCJhcyIsInNwYWNpbmciLCJkaXJlY3Rpb24iLCJhbGlnbiIsIm1hcCIsIm5hdiIsImhyZWYiLCJ0cmFuc2l0aW9uIiwiaCIsImJvcmRlckJvdHRvbSIsImJvcmRlckNvbG9yIiwiY29sb3IiLCJmb250V2VpZ2h0IiwiX2hvdmVyIiwiZm9udFNpemUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/non-reusables/header/navlinks.tsx\n"));

/***/ })

});