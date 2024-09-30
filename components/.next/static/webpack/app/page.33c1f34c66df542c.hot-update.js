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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Testimonials; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _reusables_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reusables/container */ \"(app-pages-browser)/./components/reusables/container.tsx\");\n/* harmony import */ var _non_reusables_reviewCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../non-reusables/reviewCard */ \"(app-pages-browser)/./components/non-reusables/reviewCard.tsx\");\n/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swiper/react */ \"(app-pages-browser)/./node_modules/swiper/swiper-react.mjs\");\n/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swiper/css */ \"(app-pages-browser)/./node_modules/swiper/swiper.css\");\n/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! swiper/modules */ \"(app-pages-browser)/./node_modules/swiper/modules/index.mjs\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-pages-browser)/./node_modules/@chakra-ui/layout/dist/chunk-PULVB27S.mjs\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-pages-browser)/./node_modules/@chakra-ui/layout/dist/chunk-ZHMYA64R.mjs\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-pages-browser)/./node_modules/@chakra-ui/layout/dist/chunk-2OOHT3W5.mjs\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-pages-browser)/./node_modules/@chakra-ui/layout/dist/chunk-6WNMSZKB.mjs\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-pages-browser)/./node_modules/@chakra-ui/layout/dist/chunk-FAWTVNS3.mjs\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var _barrel_optimize_names_SiFiverr_react_icons_si__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! __barrel_optimize__?names=SiFiverr!=!react-icons/si */ \"(app-pages-browser)/./node_modules/react-icons/si/index.mjs\");\n/* harmony import */ var _sanity_client_client__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/sanity-client/client */ \"(app-pages-browser)/./sanity-client/client.ts\");\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-query */ \"(app-pages-browser)/./node_modules/react-query/es/index.js\");\n/* harmony import */ var _non_reusables_testimonialsLoading__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../non-reusables/testimonialsLoading */ \"(app-pages-browser)/./components/non-reusables/testimonialsLoading.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\nfunction Testimonials() {\n    _s();\n    const { data: reviews, isLoading } = (0,react_query__WEBPACK_IMPORTED_MODULE_9__.useQuery)({\n        queryKey: [\n            \"reviews\"\n        ],\n        queryFn: async ()=>{\n            return await _sanity_client_client__WEBPACK_IMPORTED_MODULE_8__.client.fetch('*[_type == \"review\"]{ \\n          _id, \\n          \"imageUrl\": image.asset->url, \\n          name, \\n          rate, \\n          comment, \\n          source, \\n          place  \\n        }');\n        }\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_11__.Box, {\n        bg: \"palette.background.primary.color\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_reusables_container__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            as: \"section\",\n            paddingBlock: \"6rem\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_12__.Stack, {\n                    direction: \"row\",\n                    align: \"center\",\n                    justify: \"space-between\",\n                    paddingBottom: \"3rem\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_13__.Text, {\n                            fontWeight: \"bold\",\n                            fontSize: \"1.1rem\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__.Highlight, {\n                                query: \"Clients\",\n                                styles: {\n                                    color: \"palette.accent.primary.color\"\n                                },\n                                children: \"Clients says:\"\n                            }, void 0, false, {\n                                fileName: \"E:\\\\Next\\\\portfolio\\\\components\\\\sections\\\\testimonials.tsx\",\n                                lineNumber: 42,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"E:\\\\Next\\\\portfolio\\\\components\\\\sections\\\\testimonials.tsx\",\n                            lineNumber: 41,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_15__.Center, {\n                            gap: \"1rem\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                href: \"https://www.fiverr.com/jazenm\",\n                                target: \"_blank\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_11__.Box, {\n                                    fontSize: \"3rem\",\n                                    color: \"palette.accent.primary.color\",\n                                    _hover: {\n                                        color: \"palette.accent.primary.hover\"\n                                    },\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_SiFiverr_react_icons_si__WEBPACK_IMPORTED_MODULE_16__.SiFiverr, {}, void 0, false, {\n                                        fileName: \"E:\\\\Next\\\\portfolio\\\\components\\\\sections\\\\testimonials.tsx\",\n                                        lineNumber: 56,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\Next\\\\portfolio\\\\components\\\\sections\\\\testimonials.tsx\",\n                                    lineNumber: 51,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"E:\\\\Next\\\\portfolio\\\\components\\\\sections\\\\testimonials.tsx\",\n                                lineNumber: 50,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"E:\\\\Next\\\\portfolio\\\\components\\\\sections\\\\testimonials.tsx\",\n                            lineNumber: 49,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"E:\\\\Next\\\\portfolio\\\\components\\\\sections\\\\testimonials.tsx\",\n                    lineNumber: 35,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_4__.Swiper, {\n                    slidesPerView: 3,\n                    autoplay: {\n                        delay: 2500,\n                        pauseOnMouseEnter: true\n                    },\n                    loop: true,\n                    modules: [\n                        swiper_modules__WEBPACK_IMPORTED_MODULE_6__.Autoplay\n                    ],\n                    spaceBetween: 80,\n                    children: isLoading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_non_reusables_testimonialsLoading__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {}, void 0, false, {\n                        fileName: \"E:\\\\Next\\\\portfolio\\\\components\\\\sections\\\\testimonials.tsx\",\n                        lineNumber: 72,\n                        columnNumber: 13\n                    }, this) : reviews === null || reviews === void 0 ? void 0 : reviews.map((review)=>{\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_4__.SwiperSlide, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_non_reusables_reviewCard__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                review: review\n                            }, void 0, false, {\n                                fileName: \"E:\\\\Next\\\\portfolio\\\\components\\\\sections\\\\testimonials.tsx\",\n                                lineNumber: 77,\n                                columnNumber: 19\n                            }, this)\n                        }, review._id, false, {\n                            fileName: \"E:\\\\Next\\\\portfolio\\\\components\\\\sections\\\\testimonials.tsx\",\n                            lineNumber: 76,\n                            columnNumber: 17\n                        }, this);\n                    })\n                }, void 0, false, {\n                    fileName: \"E:\\\\Next\\\\portfolio\\\\components\\\\sections\\\\testimonials.tsx\",\n                    lineNumber: 61,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"E:\\\\Next\\\\portfolio\\\\components\\\\sections\\\\testimonials.tsx\",\n            lineNumber: 34,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"E:\\\\Next\\\\portfolio\\\\components\\\\sections\\\\testimonials.tsx\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, this);\n}\n_s(Testimonials, \"7IlBNS1g5hXKzETNmDiXkSddnoY=\", false, function() {\n    return [\n        react_query__WEBPACK_IMPORTED_MODULE_9__.useQuery\n    ];\n});\n_c = Testimonials;\nvar _c;\n$RefreshReg$(_c, \"Testimonials\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvc2VjdGlvbnMvdGVzdGltb25pYWxzLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBeUM7QUFDTTtBQUNNO0FBQ0Y7QUFDL0I7QUFDc0I7QUFDNkI7QUFDMUM7QUFDYTtBQUNNO0FBQ1Q7QUFDZ0M7QUFFeEQsU0FBU2dCOztJQUN0QixNQUFNLEVBQUVDLE1BQU1DLE9BQU8sRUFBRUMsU0FBUyxFQUFFLEdBQUdMLHFEQUFRQSxDQUFDO1FBQzVDTSxVQUFVO1lBQUM7U0FBVTtRQUNyQkMsU0FBUztZQUNQLE9BQU8sTUFBTVIseURBQU1BLENBQUNTLEtBQUssQ0FDdEI7UUFVTDtJQUNGO0lBRUEscUJBQ0UsOERBQUNoQixrREFBR0E7UUFBQ2lCLElBQUc7a0JBQ04sNEVBQUN0Qiw0REFBU0E7WUFBQ3VCLElBQUc7WUFBVUMsY0FBYTs7OEJBQ25DLDhEQUFDaEIsb0RBQUtBO29CQUNKaUIsV0FBVTtvQkFDVkMsT0FBTTtvQkFDTkMsU0FBUTtvQkFDUkMsZUFBYzs7c0NBRWQsOERBQUNuQixtREFBSUE7NEJBQUNvQixZQUFXOzRCQUFPQyxVQUFTO3NDQUMvQiw0RUFBQ3ZCLHdEQUFTQTtnQ0FDUndCLE9BQU07Z0NBQ05DLFFBQVE7b0NBQUVDLE9BQU87Z0NBQStCOzBDQUNqRDs7Ozs7Ozs7Ozs7c0NBSUgsOERBQUMzQixxREFBTUE7NEJBQUM0QixLQUFJO3NDQUNWLDRFQUFDeEIsaURBQUlBO2dDQUFDeUIsTUFBSztnQ0FBZ0NDLFFBQU87MENBQ2hELDRFQUFDL0Isa0RBQUdBO29DQUNGeUIsVUFBUztvQ0FDVEcsT0FBTTtvQ0FDTkksUUFBUTt3Q0FBRUosT0FBTztvQ0FBK0I7OENBRWhELDRFQUFDdEIscUZBQVFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs4QkFLakIsOERBQUNULGdEQUFNQTtvQkFDTG9DLGVBQWU7b0JBQ2ZDLFVBQVU7d0JBQ1JDLE9BQU87d0JBQ1BDLG1CQUFtQjtvQkFDckI7b0JBQ0FDLElBQUk7b0JBQ0pDLFNBQVM7d0JBQUN2QyxvREFBUUE7cUJBQUM7b0JBQ25Cd0MsY0FBYzs4QkFFYjFCLDBCQUNDLDhEQUFDSiwyRUFBbUJBOzs7OytCQUVwQkcsb0JBQUFBLDhCQUFBQSxRQUFTNEIsR0FBRyxDQUFDLENBQUNDO3dCQUNaLHFCQUNFLDhEQUFDM0MscURBQVdBO3NDQUNWLDRFQUFDRixpRUFBVUE7Z0NBQUM2QyxRQUFRQTs7Ozs7OzJCQURKQSxPQUFPQyxHQUFHOzs7OztvQkFJaEM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTVo7R0F4RXdCaEM7O1FBQ2VGLGlEQUFRQTs7O0tBRHZCRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3NlY3Rpb25zL3Rlc3RpbW9uaWFscy50c3g/Mjk2MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBDb250YWluZXIgZnJvbSBcIi4uL3JldXNhYmxlcy9jb250YWluZXJcIjtcclxuaW1wb3J0IFJldmlld0NhcmQgZnJvbSBcIi4uL25vbi1yZXVzYWJsZXMvcmV2aWV3Q2FyZFwiO1xyXG5pbXBvcnQgeyBTd2lwZXIsIFN3aXBlclNsaWRlIH0gZnJvbSBcInN3aXBlci9yZWFjdFwiO1xyXG5pbXBvcnQgXCJzd2lwZXIvY3NzXCI7XHJcbmltcG9ydCB7IEF1dG9wbGF5IH0gZnJvbSBcInN3aXBlci9tb2R1bGVzXCI7XHJcbmltcG9ydCB7IEJveCwgQ2VudGVyLCBIaWdobGlnaHQsIFN0YWNrLCBUZXh0IH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyBTaUZpdmVyciB9IGZyb20gXCJyZWFjdC1pY29ucy9zaVwiO1xyXG5pbXBvcnQgeyBjbGllbnQgfSBmcm9tIFwiQC9zYW5pdHktY2xpZW50L2NsaWVudFwiO1xyXG5pbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gXCJyZWFjdC1xdWVyeVwiO1xyXG5pbXBvcnQgVGVzdGltb25pYWxzTG9hZGluZyBmcm9tIFwiLi4vbm9uLXJldXNhYmxlcy90ZXN0aW1vbmlhbHNMb2FkaW5nXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUZXN0aW1vbmlhbHMoKSB7XHJcbiAgY29uc3QgeyBkYXRhOiByZXZpZXdzLCBpc0xvYWRpbmcgfSA9IHVzZVF1ZXJ5KHtcclxuICAgIHF1ZXJ5S2V5OiBbXCJyZXZpZXdzXCJdLFxyXG4gICAgcXVlcnlGbjogYXN5bmMgKCkgPT4ge1xyXG4gICAgICByZXR1cm4gYXdhaXQgY2xpZW50LmZldGNoPFJldmlld1tdPihcclxuICAgICAgICBgKltfdHlwZSA9PSBcInJldmlld1wiXXsgXHJcbiAgICAgICAgICBfaWQsIFxyXG4gICAgICAgICAgXCJpbWFnZVVybFwiOiBpbWFnZS5hc3NldC0+dXJsLCBcclxuICAgICAgICAgIG5hbWUsIFxyXG4gICAgICAgICAgcmF0ZSwgXHJcbiAgICAgICAgICBjb21tZW50LCBcclxuICAgICAgICAgIHNvdXJjZSwgXHJcbiAgICAgICAgICBwbGFjZSAgXHJcbiAgICAgICAgfWBcclxuICAgICAgKTtcclxuICAgIH0sXHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94IGJnPVwicGFsZXR0ZS5iYWNrZ3JvdW5kLnByaW1hcnkuY29sb3JcIj5cclxuICAgICAgPENvbnRhaW5lciBhcz1cInNlY3Rpb25cIiBwYWRkaW5nQmxvY2s9XCI2cmVtXCI+XHJcbiAgICAgICAgPFN0YWNrXHJcbiAgICAgICAgICBkaXJlY3Rpb249XCJyb3dcIlxyXG4gICAgICAgICAgYWxpZ249XCJjZW50ZXJcIlxyXG4gICAgICAgICAganVzdGlmeT1cInNwYWNlLWJldHdlZW5cIlxyXG4gICAgICAgICAgcGFkZGluZ0JvdHRvbT1cIjNyZW1cIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxUZXh0IGZvbnRXZWlnaHQ9XCJib2xkXCIgZm9udFNpemU9XCIxLjFyZW1cIj5cclxuICAgICAgICAgICAgPEhpZ2hsaWdodFxyXG4gICAgICAgICAgICAgIHF1ZXJ5PVwiQ2xpZW50c1wiXHJcbiAgICAgICAgICAgICAgc3R5bGVzPXt7IGNvbG9yOiBcInBhbGV0dGUuYWNjZW50LnByaW1hcnkuY29sb3JcIiB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgQ2xpZW50cyBzYXlzOlxyXG4gICAgICAgICAgICA8L0hpZ2hsaWdodD5cclxuICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgIDxDZW50ZXIgZ2FwPVwiMXJlbVwiPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiaHR0cHM6Ly93d3cuZml2ZXJyLmNvbS9qYXplbm1cIiB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgICA8Qm94XHJcbiAgICAgICAgICAgICAgICBmb250U2l6ZT1cIjNyZW1cIlxyXG4gICAgICAgICAgICAgICAgY29sb3I9XCJwYWxldHRlLmFjY2VudC5wcmltYXJ5LmNvbG9yXCJcclxuICAgICAgICAgICAgICAgIF9ob3Zlcj17eyBjb2xvcjogXCJwYWxldHRlLmFjY2VudC5wcmltYXJ5LmhvdmVyXCIgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8U2lGaXZlcnIgLz5cclxuICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9DZW50ZXI+XHJcbiAgICAgICAgPC9TdGFjaz5cclxuICAgICAgICA8U3dpcGVyXHJcbiAgICAgICAgICBzbGlkZXNQZXJWaWV3PXszfVxyXG4gICAgICAgICAgYXV0b3BsYXk9e3tcclxuICAgICAgICAgICAgZGVsYXk6IDI1MDAsXHJcbiAgICAgICAgICAgIHBhdXNlT25Nb3VzZUVudGVyOiB0cnVlLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICAgIGxvb3BcclxuICAgICAgICAgIG1vZHVsZXM9e1tBdXRvcGxheV19XHJcbiAgICAgICAgICBzcGFjZUJldHdlZW49ezgwfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtpc0xvYWRpbmcgPyAoXHJcbiAgICAgICAgICAgIDxUZXN0aW1vbmlhbHNMb2FkaW5nIC8+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICByZXZpZXdzPy5tYXAoKHJldmlldykgPT4ge1xyXG4gICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8U3dpcGVyU2xpZGUga2V5PXtyZXZpZXcuX2lkfT5cclxuICAgICAgICAgICAgICAgICAgPFJldmlld0NhcmQgcmV2aWV3PXtyZXZpZXd9IC8+XHJcbiAgICAgICAgICAgICAgICA8L1N3aXBlclNsaWRlPlxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvU3dpcGVyPlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvQm94PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29udGFpbmVyIiwiUmV2aWV3Q2FyZCIsIlN3aXBlciIsIlN3aXBlclNsaWRlIiwiQXV0b3BsYXkiLCJCb3giLCJDZW50ZXIiLCJIaWdobGlnaHQiLCJTdGFjayIsIlRleHQiLCJMaW5rIiwiU2lGaXZlcnIiLCJjbGllbnQiLCJ1c2VRdWVyeSIsIlRlc3RpbW9uaWFsc0xvYWRpbmciLCJUZXN0aW1vbmlhbHMiLCJkYXRhIiwicmV2aWV3cyIsImlzTG9hZGluZyIsInF1ZXJ5S2V5IiwicXVlcnlGbiIsImZldGNoIiwiYmciLCJhcyIsInBhZGRpbmdCbG9jayIsImRpcmVjdGlvbiIsImFsaWduIiwianVzdGlmeSIsInBhZGRpbmdCb3R0b20iLCJmb250V2VpZ2h0IiwiZm9udFNpemUiLCJxdWVyeSIsInN0eWxlcyIsImNvbG9yIiwiZ2FwIiwiaHJlZiIsInRhcmdldCIsIl9ob3ZlciIsInNsaWRlc1BlclZpZXciLCJhdXRvcGxheSIsImRlbGF5IiwicGF1c2VPbk1vdXNlRW50ZXIiLCJsb29wIiwibW9kdWxlcyIsInNwYWNlQmV0d2VlbiIsIm1hcCIsInJldmlldyIsIl9pZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/sections/testimonials.tsx\n"));

/***/ })

});