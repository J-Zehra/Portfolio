"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/p-is-promise";
exports.ids = ["vendor-chunks/p-is-promise"];
exports.modules = {

/***/ "(ssr)/./node_modules/p-is-promise/index.js":
/*!********************************************!*\
  !*** ./node_modules/p-is-promise/index.js ***!
  \********************************************/
/***/ ((module) => {

eval("\nconst isObject = (value)=>value !== null && (typeof value === \"object\" || typeof value === \"function\");\nmodule.exports = (value)=>value instanceof Promise || isObject(value) && typeof value.then === \"function\" && typeof value.catch === \"function\";\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcC1pcy1wcm9taXNlL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBRUEsTUFBTUEsV0FBV0MsQ0FBQUEsUUFBU0EsVUFBVSxRQUNsQyxRQUFPQSxVQUFVLFlBQVksT0FBT0EsVUFBVSxVQUFTO0FBRXpEQyxPQUFPQyxPQUFPLEdBQUdGLENBQUFBLFFBQ2hCQSxpQkFBaUJHLFdBRWhCSixTQUFTQyxVQUNULE9BQU9BLE1BQU1JLElBQUksS0FBSyxjQUN0QixPQUFPSixNQUFNSyxLQUFLLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvcC1pcy1wcm9taXNlL2luZGV4LmpzPzhjMWYiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBpc09iamVjdCA9IHZhbHVlID0+IHZhbHVlICE9PSBudWxsICYmXG5cdCh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnIHx8IHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gdmFsdWUgPT4gKFxuXHR2YWx1ZSBpbnN0YW5jZW9mIFByb21pc2UgfHxcblx0KFxuXHRcdGlzT2JqZWN0KHZhbHVlKSAmJlxuXHRcdHR5cGVvZiB2YWx1ZS50aGVuID09PSAnZnVuY3Rpb24nICYmXG5cdFx0dHlwZW9mIHZhbHVlLmNhdGNoID09PSAnZnVuY3Rpb24nXG5cdClcbik7XG4iXSwibmFtZXMiOlsiaXNPYmplY3QiLCJ2YWx1ZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJQcm9taXNlIiwidGhlbiIsImNhdGNoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/p-is-promise/index.js\n");

/***/ })

};
;