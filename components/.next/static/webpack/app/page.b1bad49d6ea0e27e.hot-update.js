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

/***/ "(app-pages-browser)/./components/sections/testimonials.tsx":
/*!**********************************************!*\
  !*** ./components/sections/testimonials.tsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Testimonials; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _reusables_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reusables/container */ \"(app-pages-browser)/./components/reusables/container.tsx\");\n/* harmony import */ var _non_reusables_reviewCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../non-reusables/reviewCard */ \"(app-pages-browser)/./components/non-reusables/reviewCard.tsx\");\n/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swiper/react */ \"(app-pages-browser)/./node_modules/swiper/swiper-react.mjs\");\n/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swiper/css */ \"(app-pages-browser)/./node_modules/swiper/swiper.css\");\n/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! swiper/modules */ \"(app-pages-browser)/./node_modules/swiper/modules/index.mjs\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-pages-browser)/./node_modules/@chakra-ui/layout/dist/chunk-ZHMYA64R.mjs\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-pages-browser)/./node_modules/@chakra-ui/layout/dist/chunk-2OOHT3W5.mjs\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-pages-browser)/./node_modules/@chakra-ui/layout/dist/chunk-6WNMSZKB.mjs\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-pages-browser)/./node_modules/@chakra-ui/layout/dist/chunk-FAWTVNS3.mjs\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-pages-browser)/./node_modules/@chakra-ui/layout/dist/chunk-PULVB27S.mjs\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var _barrel_optimize_names_SiFiverr_react_icons_si__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! __barrel_optimize__?names=SiFiverr!=!react-icons/si */ \"(app-pages-browser)/./node_modules/react-icons/si/index.mjs\");\n/* harmony import */ var _sanity_client_client__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/sanity-client/client */ \"(app-pages-browser)/./sanity-client/client.ts\");\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-query */ \"(app-pages-browser)/./node_modules/react-query/es/index.js\");\n/* harmony import */ var _non_reusables_testimonialsLoading__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../non-reusables/testimonialsLoading */ \"(app-pages-browser)/./components/non-reusables/testimonialsLoading.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\nfunction Testimonials() {\n    _s();\n    const { data: reviews, isLoading } = (0,react_query__WEBPACK_IMPORTED_MODULE_9__.useQuery)({\n        queryKey: [\n            \"reviews\"\n        ],\n        queryFn: async ()=>{\n            return await _sanity_client_client__WEBPACK_IMPORTED_MODULE_8__.client.fetch('*[_type == \"review\"]{ \\n          _id, \\n          \"imageUrl\": image.asset->url, \\n          name, \\n          rate, \\n          comment, \\n          source, \\n          place  \\n        }');\n        }\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_reusables_container__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        as: \"section\",\n        paddingBlock: \"1.5rem 2rem\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_11__.Stack, {\n                direction: \"row\",\n                align: \"center\",\n                justify: \"space-between\",\n                paddingBottom: \"3rem\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_12__.Text, {\n                        fontWeight: \"bold\",\n                        fontSize: \"1.1rem\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_13__.Highlight, {\n                            query: \"Clients\",\n                            styles: {\n                                color: \"palette.accent.primary.color\"\n                            },\n                            children: \"Clients says:\"\n                        }, void 0, false, {\n                            fileName: \"E:\\\\Next\\\\portfolio\\\\components\\\\sections\\\\testimonials.tsx\",\n                            lineNumber: 41,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Next\\\\portfolio\\\\components\\\\sections\\\\testimonials.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__.Center, {\n                        gap: \"1rem\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                            href: \"https://www.fiverr.com/jazenm\",\n                            target: \"_blank\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_15__.Box, {\n                                fontSize: \"3rem\",\n                                color: \"palette.accent.primary.color\",\n                                _hover: {},\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_SiFiverr_react_icons_si__WEBPACK_IMPORTED_MODULE_16__.SiFiverr, {}, void 0, false, {\n                                    fileName: \"E:\\\\Next\\\\portfolio\\\\components\\\\sections\\\\testimonials.tsx\",\n                                    lineNumber: 51,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"E:\\\\Next\\\\portfolio\\\\components\\\\sections\\\\testimonials.tsx\",\n                                lineNumber: 50,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"E:\\\\Next\\\\portfolio\\\\components\\\\sections\\\\testimonials.tsx\",\n                            lineNumber: 49,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Next\\\\portfolio\\\\components\\\\sections\\\\testimonials.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\Next\\\\portfolio\\\\components\\\\sections\\\\testimonials.tsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_4__.Swiper, {\n                slidesPerView: 3,\n                autoplay: {\n                    delay: 2500,\n                    pauseOnMouseEnter: true\n                },\n                loop: true,\n                modules: [\n                    swiper_modules__WEBPACK_IMPORTED_MODULE_6__.Autoplay\n                ],\n                spaceBetween: 80,\n                children: isLoading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_non_reusables_testimonialsLoading__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {}, void 0, false, {\n                    fileName: \"E:\\\\Next\\\\portfolio\\\\components\\\\sections\\\\testimonials.tsx\",\n                    lineNumber: 67,\n                    columnNumber: 11\n                }, this) : reviews === null || reviews === void 0 ? void 0 : reviews.map((review)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_4__.SwiperSlide, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_non_reusables_reviewCard__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            review: review\n                        }, void 0, false, {\n                            fileName: \"E:\\\\Next\\\\portfolio\\\\components\\\\sections\\\\testimonials.tsx\",\n                            lineNumber: 72,\n                            columnNumber: 17\n                        }, this)\n                    }, review._id, false, {\n                        fileName: \"E:\\\\Next\\\\portfolio\\\\components\\\\sections\\\\testimonials.tsx\",\n                        lineNumber: 71,\n                        columnNumber: 15\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"E:\\\\Next\\\\portfolio\\\\components\\\\sections\\\\testimonials.tsx\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\Next\\\\portfolio\\\\components\\\\sections\\\\testimonials.tsx\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, this);\n}\n_s(Testimonials, \"7IlBNS1g5hXKzETNmDiXkSddnoY=\", false, function() {\n    return [\n        react_query__WEBPACK_IMPORTED_MODULE_9__.useQuery\n    ];\n});\n_c = Testimonials;\nvar _c;\n$RefreshReg$(_c, \"Testimonials\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvc2VjdGlvbnMvdGVzdGltb25pYWxzLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBeUM7QUFDTTtBQUNNO0FBQ0Y7QUFDL0I7QUFDc0I7QUFDNkI7QUFDMUM7QUFDYTtBQUNNO0FBQ1Q7QUFDZ0M7QUFFeEQsU0FBU2dCOztJQUN0QixNQUFNLEVBQUVDLE1BQU1DLE9BQU8sRUFBRUMsU0FBUyxFQUFFLEdBQUdMLHFEQUFRQSxDQUFDO1FBQzVDTSxVQUFVO1lBQUM7U0FBVTtRQUNyQkMsU0FBUztZQUNQLE9BQU8sTUFBTVIseURBQU1BLENBQUNTLEtBQUssQ0FDdEI7UUFVTDtJQUNGO0lBRUEscUJBQ0UsOERBQUNyQiw0REFBU0E7UUFBQ3NCLElBQUc7UUFBVUMsY0FBYTs7MEJBQ25DLDhEQUFDZixvREFBS0E7Z0JBQ0pnQixXQUFVO2dCQUNWQyxPQUFNO2dCQUNOQyxTQUFRO2dCQUNSQyxlQUFjOztrQ0FFZCw4REFBQ2xCLG1EQUFJQTt3QkFBQ21CLFlBQVc7d0JBQU9DLFVBQVM7a0NBQy9CLDRFQUFDdEIsd0RBQVNBOzRCQUNSdUIsT0FBTTs0QkFDTkMsUUFBUTtnQ0FBRUMsT0FBTzs0QkFBK0I7c0NBQ2pEOzs7Ozs7Ozs7OztrQ0FJSCw4REFBQzFCLHFEQUFNQTt3QkFBQzJCLEtBQUk7a0NBQ1YsNEVBQUN2QixpREFBSUE7NEJBQUN3QixNQUFLOzRCQUFnQ0MsUUFBTztzQ0FDaEQsNEVBQUM5QixrREFBR0E7Z0NBQUN3QixVQUFTO2dDQUFPRyxPQUFNO2dDQUErQkksUUFBUSxDQUFDOzBDQUNqRSw0RUFBQ3pCLHFGQUFRQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBS2pCLDhEQUFDVCxnREFBTUE7Z0JBQ0xtQyxlQUFlO2dCQUNmQyxVQUFVO29CQUNSQyxPQUFPO29CQUNQQyxtQkFBbUI7Z0JBQ3JCO2dCQUNBQyxJQUFJO2dCQUNKQyxTQUFTO29CQUFDdEMsb0RBQVFBO2lCQUFDO2dCQUNuQnVDLGNBQWM7MEJBRWJ6QiwwQkFDQyw4REFBQ0osMkVBQW1CQTs7OzsyQkFFcEJHLG9CQUFBQSw4QkFBQUEsUUFBUzJCLEdBQUcsQ0FBQyxDQUFDQztvQkFDWixxQkFDRSw4REFBQzFDLHFEQUFXQTtrQ0FDViw0RUFBQ0YsaUVBQVVBOzRCQUFDNEMsUUFBUUE7Ozs7Ozt1QkFESkEsT0FBT0MsR0FBRzs7Ozs7Z0JBSWhDOzs7Ozs7Ozs7Ozs7QUFLVjtHQWxFd0IvQjs7UUFDZUYsaURBQVFBOzs7S0FEdkJFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvc2VjdGlvbnMvdGVzdGltb25pYWxzLnRzeD8yOTYzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tIFwiLi4vcmV1c2FibGVzL2NvbnRhaW5lclwiO1xyXG5pbXBvcnQgUmV2aWV3Q2FyZCBmcm9tIFwiLi4vbm9uLXJldXNhYmxlcy9yZXZpZXdDYXJkXCI7XHJcbmltcG9ydCB7IFN3aXBlciwgU3dpcGVyU2xpZGUgfSBmcm9tIFwic3dpcGVyL3JlYWN0XCI7XHJcbmltcG9ydCBcInN3aXBlci9jc3NcIjtcclxuaW1wb3J0IHsgQXV0b3BsYXkgfSBmcm9tIFwic3dpcGVyL21vZHVsZXNcIjtcclxuaW1wb3J0IHsgQm94LCBDZW50ZXIsIEhpZ2hsaWdodCwgU3RhY2ssIFRleHQgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IFNpRml2ZXJyIH0gZnJvbSBcInJlYWN0LWljb25zL3NpXCI7XHJcbmltcG9ydCB7IGNsaWVudCB9IGZyb20gXCJAL3Nhbml0eS1jbGllbnQvY2xpZW50XCI7XHJcbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSBcInJlYWN0LXF1ZXJ5XCI7XHJcbmltcG9ydCBUZXN0aW1vbmlhbHNMb2FkaW5nIGZyb20gXCIuLi9ub24tcmV1c2FibGVzL3Rlc3RpbW9uaWFsc0xvYWRpbmdcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRlc3RpbW9uaWFscygpIHtcclxuICBjb25zdCB7IGRhdGE6IHJldmlld3MsIGlzTG9hZGluZyB9ID0gdXNlUXVlcnkoe1xyXG4gICAgcXVlcnlLZXk6IFtcInJldmlld3NcIl0sXHJcbiAgICBxdWVyeUZuOiBhc3luYyAoKSA9PiB7XHJcbiAgICAgIHJldHVybiBhd2FpdCBjbGllbnQuZmV0Y2g8UmV2aWV3W10+KFxyXG4gICAgICAgIGAqW190eXBlID09IFwicmV2aWV3XCJdeyBcclxuICAgICAgICAgIF9pZCwgXHJcbiAgICAgICAgICBcImltYWdlVXJsXCI6IGltYWdlLmFzc2V0LT51cmwsIFxyXG4gICAgICAgICAgbmFtZSwgXHJcbiAgICAgICAgICByYXRlLCBcclxuICAgICAgICAgIGNvbW1lbnQsIFxyXG4gICAgICAgICAgc291cmNlLCBcclxuICAgICAgICAgIHBsYWNlICBcclxuICAgICAgICB9YFxyXG4gICAgICApO1xyXG4gICAgfSxcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDb250YWluZXIgYXM9XCJzZWN0aW9uXCIgcGFkZGluZ0Jsb2NrPVwiMS41cmVtIDJyZW1cIj5cclxuICAgICAgPFN0YWNrXHJcbiAgICAgICAgZGlyZWN0aW9uPVwicm93XCJcclxuICAgICAgICBhbGlnbj1cImNlbnRlclwiXHJcbiAgICAgICAganVzdGlmeT1cInNwYWNlLWJldHdlZW5cIlxyXG4gICAgICAgIHBhZGRpbmdCb3R0b209XCIzcmVtXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxUZXh0IGZvbnRXZWlnaHQ9XCJib2xkXCIgZm9udFNpemU9XCIxLjFyZW1cIj5cclxuICAgICAgICAgIDxIaWdobGlnaHRcclxuICAgICAgICAgICAgcXVlcnk9XCJDbGllbnRzXCJcclxuICAgICAgICAgICAgc3R5bGVzPXt7IGNvbG9yOiBcInBhbGV0dGUuYWNjZW50LnByaW1hcnkuY29sb3JcIiB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBDbGllbnRzIHNheXM6XHJcbiAgICAgICAgICA8L0hpZ2hsaWdodD5cclxuICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgPENlbnRlciBnYXA9XCIxcmVtXCI+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiaHR0cHM6Ly93d3cuZml2ZXJyLmNvbS9qYXplbm1cIiB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgPEJveCBmb250U2l6ZT1cIjNyZW1cIiBjb2xvcj1cInBhbGV0dGUuYWNjZW50LnByaW1hcnkuY29sb3JcIiBfaG92ZXI9e3t9fT5cclxuICAgICAgICAgICAgICA8U2lGaXZlcnIgLz5cclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9DZW50ZXI+XHJcbiAgICAgIDwvU3RhY2s+XHJcbiAgICAgIDxTd2lwZXJcclxuICAgICAgICBzbGlkZXNQZXJWaWV3PXszfVxyXG4gICAgICAgIGF1dG9wbGF5PXt7XHJcbiAgICAgICAgICBkZWxheTogMjUwMCxcclxuICAgICAgICAgIHBhdXNlT25Nb3VzZUVudGVyOiB0cnVlLFxyXG4gICAgICAgIH19XHJcbiAgICAgICAgbG9vcFxyXG4gICAgICAgIG1vZHVsZXM9e1tBdXRvcGxheV19XHJcbiAgICAgICAgc3BhY2VCZXR3ZWVuPXs4MH1cclxuICAgICAgPlxyXG4gICAgICAgIHtpc0xvYWRpbmcgPyAoXHJcbiAgICAgICAgICA8VGVzdGltb25pYWxzTG9hZGluZyAvPlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICByZXZpZXdzPy5tYXAoKHJldmlldykgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgIDxTd2lwZXJTbGlkZSBrZXk9e3Jldmlldy5faWR9PlxyXG4gICAgICAgICAgICAgICAgPFJldmlld0NhcmQgcmV2aWV3PXtyZXZpZXd9IC8+XHJcbiAgICAgICAgICAgICAgPC9Td2lwZXJTbGlkZT5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgKX1cclxuICAgICAgPC9Td2lwZXI+XHJcbiAgICA8L0NvbnRhaW5lcj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbnRhaW5lciIsIlJldmlld0NhcmQiLCJTd2lwZXIiLCJTd2lwZXJTbGlkZSIsIkF1dG9wbGF5IiwiQm94IiwiQ2VudGVyIiwiSGlnaGxpZ2h0IiwiU3RhY2siLCJUZXh0IiwiTGluayIsIlNpRml2ZXJyIiwiY2xpZW50IiwidXNlUXVlcnkiLCJUZXN0aW1vbmlhbHNMb2FkaW5nIiwiVGVzdGltb25pYWxzIiwiZGF0YSIsInJldmlld3MiLCJpc0xvYWRpbmciLCJxdWVyeUtleSIsInF1ZXJ5Rm4iLCJmZXRjaCIsImFzIiwicGFkZGluZ0Jsb2NrIiwiZGlyZWN0aW9uIiwiYWxpZ24iLCJqdXN0aWZ5IiwicGFkZGluZ0JvdHRvbSIsImZvbnRXZWlnaHQiLCJmb250U2l6ZSIsInF1ZXJ5Iiwic3R5bGVzIiwiY29sb3IiLCJnYXAiLCJocmVmIiwidGFyZ2V0IiwiX2hvdmVyIiwic2xpZGVzUGVyVmlldyIsImF1dG9wbGF5IiwiZGVsYXkiLCJwYXVzZU9uTW91c2VFbnRlciIsImxvb3AiLCJtb2R1bGVzIiwic3BhY2VCZXR3ZWVuIiwibWFwIiwicmV2aWV3IiwiX2lkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/sections/testimonials.tsx\n"));

/***/ })

});