/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/core-util-is";
exports.ids = ["vendor-chunks/core-util-is"];
exports.modules = {

/***/ "(ssr)/./node_modules/core-util-is/lib/util.js":
/*!***********************************************!*\
  !*** ./node_modules/core-util-is/lib/util.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("// Copyright Joyent, Inc. and other Node contributors.\n//\n// Permission is hereby granted, free of charge, to any person obtaining a\n// copy of this software and associated documentation files (the\n// \"Software\"), to deal in the Software without restriction, including\n// without limitation the rights to use, copy, modify, merge, publish,\n// distribute, sublicense, and/or sell copies of the Software, and to permit\n// persons to whom the Software is furnished to do so, subject to the\n// following conditions:\n//\n// The above copyright notice and this permission notice shall be included\n// in all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS\n// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF\n// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN\n// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,\n// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR\n// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE\n// USE OR OTHER DEALINGS IN THE SOFTWARE.\n// NOTE: These type checking functions intentionally don't use `instanceof`\n// because it is fragile and can be easily faked with `Object.create()`.\nfunction isArray(arg) {\n    if (Array.isArray) {\n        return Array.isArray(arg);\n    }\n    return objectToString(arg) === \"[object Array]\";\n}\nexports.isArray = isArray;\nfunction isBoolean(arg) {\n    return typeof arg === \"boolean\";\n}\nexports.isBoolean = isBoolean;\nfunction isNull(arg) {\n    return arg === null;\n}\nexports.isNull = isNull;\nfunction isNullOrUndefined(arg) {\n    return arg == null;\n}\nexports.isNullOrUndefined = isNullOrUndefined;\nfunction isNumber(arg) {\n    return typeof arg === \"number\";\n}\nexports.isNumber = isNumber;\nfunction isString(arg) {\n    return typeof arg === \"string\";\n}\nexports.isString = isString;\nfunction isSymbol(arg) {\n    return typeof arg === \"symbol\";\n}\nexports.isSymbol = isSymbol;\nfunction isUndefined(arg) {\n    return arg === void 0;\n}\nexports.isUndefined = isUndefined;\nfunction isRegExp(re) {\n    return objectToString(re) === \"[object RegExp]\";\n}\nexports.isRegExp = isRegExp;\nfunction isObject(arg) {\n    return typeof arg === \"object\" && arg !== null;\n}\nexports.isObject = isObject;\nfunction isDate(d) {\n    return objectToString(d) === \"[object Date]\";\n}\nexports.isDate = isDate;\nfunction isError(e) {\n    return objectToString(e) === \"[object Error]\" || e instanceof Error;\n}\nexports.isError = isError;\nfunction isFunction(arg) {\n    return typeof arg === \"function\";\n}\nexports.isFunction = isFunction;\nfunction isPrimitive(arg) {\n    return arg === null || typeof arg === \"boolean\" || typeof arg === \"number\" || typeof arg === \"string\" || typeof arg === \"symbol\" || // ES6 symbol\n    typeof arg === \"undefined\";\n}\nexports.isPrimitive = isPrimitive;\nexports.isBuffer = __webpack_require__(/*! buffer */ \"buffer\").Buffer.isBuffer;\nfunction objectToString(o) {\n    return Object.prototype.toString.call(o);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvY29yZS11dGlsLWlzL2xpYi91dGlsLmpzIiwibWFwcGluZ3MiOiJBQUFBLHNEQUFzRDtBQUN0RCxFQUFFO0FBQ0YsMEVBQTBFO0FBQzFFLGdFQUFnRTtBQUNoRSxzRUFBc0U7QUFDdEUsc0VBQXNFO0FBQ3RFLDRFQUE0RTtBQUM1RSxxRUFBcUU7QUFDckUsd0JBQXdCO0FBQ3hCLEVBQUU7QUFDRiwwRUFBMEU7QUFDMUUseURBQXlEO0FBQ3pELEVBQUU7QUFDRiwwRUFBMEU7QUFDMUUsNkRBQTZEO0FBQzdELDRFQUE0RTtBQUM1RSwyRUFBMkU7QUFDM0Usd0VBQXdFO0FBQ3hFLDRFQUE0RTtBQUM1RSx5Q0FBeUM7QUFFekMsMkVBQTJFO0FBQzNFLHdFQUF3RTtBQUV4RSxTQUFTQSxRQUFRQyxHQUFHO0lBQ2xCLElBQUlDLE1BQU1GLE9BQU8sRUFBRTtRQUNqQixPQUFPRSxNQUFNRixPQUFPLENBQUNDO0lBQ3ZCO0lBQ0EsT0FBT0UsZUFBZUYsU0FBUztBQUNqQztBQUNBRyxlQUFlLEdBQUdKO0FBRWxCLFNBQVNLLFVBQVVKLEdBQUc7SUFDcEIsT0FBTyxPQUFPQSxRQUFRO0FBQ3hCO0FBQ0FHLGlCQUFpQixHQUFHQztBQUVwQixTQUFTQyxPQUFPTCxHQUFHO0lBQ2pCLE9BQU9BLFFBQVE7QUFDakI7QUFDQUcsY0FBYyxHQUFHRTtBQUVqQixTQUFTQyxrQkFBa0JOLEdBQUc7SUFDNUIsT0FBT0EsT0FBTztBQUNoQjtBQUNBRyx5QkFBeUIsR0FBR0c7QUFFNUIsU0FBU0MsU0FBU1AsR0FBRztJQUNuQixPQUFPLE9BQU9BLFFBQVE7QUFDeEI7QUFDQUcsZ0JBQWdCLEdBQUdJO0FBRW5CLFNBQVNDLFNBQVNSLEdBQUc7SUFDbkIsT0FBTyxPQUFPQSxRQUFRO0FBQ3hCO0FBQ0FHLGdCQUFnQixHQUFHSztBQUVuQixTQUFTQyxTQUFTVCxHQUFHO0lBQ25CLE9BQU8sT0FBT0EsUUFBUTtBQUN4QjtBQUNBRyxnQkFBZ0IsR0FBR007QUFFbkIsU0FBU0MsWUFBWVYsR0FBRztJQUN0QixPQUFPQSxRQUFRLEtBQUs7QUFDdEI7QUFDQUcsbUJBQW1CLEdBQUdPO0FBRXRCLFNBQVNDLFNBQVNDLEVBQUU7SUFDbEIsT0FBT1YsZUFBZVUsUUFBUTtBQUNoQztBQUNBVCxnQkFBZ0IsR0FBR1E7QUFFbkIsU0FBU0UsU0FBU2IsR0FBRztJQUNuQixPQUFPLE9BQU9BLFFBQVEsWUFBWUEsUUFBUTtBQUM1QztBQUNBRyxnQkFBZ0IsR0FBR1U7QUFFbkIsU0FBU0MsT0FBT0MsQ0FBQztJQUNmLE9BQU9iLGVBQWVhLE9BQU87QUFDL0I7QUFDQVosY0FBYyxHQUFHVztBQUVqQixTQUFTRSxRQUFRQyxDQUFDO0lBQ2hCLE9BQVFmLGVBQWVlLE9BQU8sb0JBQW9CQSxhQUFhQztBQUNqRTtBQUNBZixlQUFlLEdBQUdhO0FBRWxCLFNBQVNHLFdBQVduQixHQUFHO0lBQ3JCLE9BQU8sT0FBT0EsUUFBUTtBQUN4QjtBQUNBRyxrQkFBa0IsR0FBR2dCO0FBRXJCLFNBQVNDLFlBQVlwQixHQUFHO0lBQ3RCLE9BQU9BLFFBQVEsUUFDUixPQUFPQSxRQUFRLGFBQ2YsT0FBT0EsUUFBUSxZQUNmLE9BQU9BLFFBQVEsWUFDZixPQUFPQSxRQUFRLFlBQWEsYUFBYTtJQUN6QyxPQUFPQSxRQUFRO0FBQ3hCO0FBQ0FHLG1CQUFtQixHQUFHaUI7QUFFdEJqQiw4RUFBb0Q7QUFFcEQsU0FBU0QsZUFBZXNCLENBQUM7SUFDdkIsT0FBT0MsT0FBT0MsU0FBUyxDQUFDQyxRQUFRLENBQUNDLElBQUksQ0FBQ0o7QUFDeEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvY29yZS11dGlsLWlzL2xpYi91dGlsLmpzP2ViYTkiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbi8vIE5PVEU6IFRoZXNlIHR5cGUgY2hlY2tpbmcgZnVuY3Rpb25zIGludGVudGlvbmFsbHkgZG9uJ3QgdXNlIGBpbnN0YW5jZW9mYFxuLy8gYmVjYXVzZSBpdCBpcyBmcmFnaWxlIGFuZCBjYW4gYmUgZWFzaWx5IGZha2VkIHdpdGggYE9iamVjdC5jcmVhdGUoKWAuXG5cbmZ1bmN0aW9uIGlzQXJyYXkoYXJnKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KSB7XG4gICAgcmV0dXJuIEFycmF5LmlzQXJyYXkoYXJnKTtcbiAgfVxuICByZXR1cm4gb2JqZWN0VG9TdHJpbmcoYXJnKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbn1cbmV4cG9ydHMuaXNBcnJheSA9IGlzQXJyYXk7XG5cbmZ1bmN0aW9uIGlzQm9vbGVhbihhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdib29sZWFuJztcbn1cbmV4cG9ydHMuaXNCb29sZWFuID0gaXNCb29sZWFuO1xuXG5mdW5jdGlvbiBpc051bGwoYXJnKSB7XG4gIHJldHVybiBhcmcgPT09IG51bGw7XG59XG5leHBvcnRzLmlzTnVsbCA9IGlzTnVsbDtcblxuZnVuY3Rpb24gaXNOdWxsT3JVbmRlZmluZWQoYXJnKSB7XG4gIHJldHVybiBhcmcgPT0gbnVsbDtcbn1cbmV4cG9ydHMuaXNOdWxsT3JVbmRlZmluZWQgPSBpc051bGxPclVuZGVmaW5lZDtcblxuZnVuY3Rpb24gaXNOdW1iZXIoYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnbnVtYmVyJztcbn1cbmV4cG9ydHMuaXNOdW1iZXIgPSBpc051bWJlcjtcblxuZnVuY3Rpb24gaXNTdHJpbmcoYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnc3RyaW5nJztcbn1cbmV4cG9ydHMuaXNTdHJpbmcgPSBpc1N0cmluZztcblxuZnVuY3Rpb24gaXNTeW1ib2woYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnc3ltYm9sJztcbn1cbmV4cG9ydHMuaXNTeW1ib2wgPSBpc1N5bWJvbDtcblxuZnVuY3Rpb24gaXNVbmRlZmluZWQoYXJnKSB7XG4gIHJldHVybiBhcmcgPT09IHZvaWQgMDtcbn1cbmV4cG9ydHMuaXNVbmRlZmluZWQgPSBpc1VuZGVmaW5lZDtcblxuZnVuY3Rpb24gaXNSZWdFeHAocmUpIHtcbiAgcmV0dXJuIG9iamVjdFRvU3RyaW5nKHJlKSA9PT0gJ1tvYmplY3QgUmVnRXhwXSc7XG59XG5leHBvcnRzLmlzUmVnRXhwID0gaXNSZWdFeHA7XG5cbmZ1bmN0aW9uIGlzT2JqZWN0KGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ29iamVjdCcgJiYgYXJnICE9PSBudWxsO1xufVxuZXhwb3J0cy5pc09iamVjdCA9IGlzT2JqZWN0O1xuXG5mdW5jdGlvbiBpc0RhdGUoZCkge1xuICByZXR1cm4gb2JqZWN0VG9TdHJpbmcoZCkgPT09ICdbb2JqZWN0IERhdGVdJztcbn1cbmV4cG9ydHMuaXNEYXRlID0gaXNEYXRlO1xuXG5mdW5jdGlvbiBpc0Vycm9yKGUpIHtcbiAgcmV0dXJuIChvYmplY3RUb1N0cmluZyhlKSA9PT0gJ1tvYmplY3QgRXJyb3JdJyB8fCBlIGluc3RhbmNlb2YgRXJyb3IpO1xufVxuZXhwb3J0cy5pc0Vycm9yID0gaXNFcnJvcjtcblxuZnVuY3Rpb24gaXNGdW5jdGlvbihhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdmdW5jdGlvbic7XG59XG5leHBvcnRzLmlzRnVuY3Rpb24gPSBpc0Z1bmN0aW9uO1xuXG5mdW5jdGlvbiBpc1ByaW1pdGl2ZShhcmcpIHtcbiAgcmV0dXJuIGFyZyA9PT0gbnVsbCB8fFxuICAgICAgICAgdHlwZW9mIGFyZyA9PT0gJ2Jvb2xlYW4nIHx8XG4gICAgICAgICB0eXBlb2YgYXJnID09PSAnbnVtYmVyJyB8fFxuICAgICAgICAgdHlwZW9mIGFyZyA9PT0gJ3N0cmluZycgfHxcbiAgICAgICAgIHR5cGVvZiBhcmcgPT09ICdzeW1ib2wnIHx8ICAvLyBFUzYgc3ltYm9sXG4gICAgICAgICB0eXBlb2YgYXJnID09PSAndW5kZWZpbmVkJztcbn1cbmV4cG9ydHMuaXNQcmltaXRpdmUgPSBpc1ByaW1pdGl2ZTtcblxuZXhwb3J0cy5pc0J1ZmZlciA9IHJlcXVpcmUoJ2J1ZmZlcicpLkJ1ZmZlci5pc0J1ZmZlcjtcblxuZnVuY3Rpb24gb2JqZWN0VG9TdHJpbmcobykge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pO1xufVxuIl0sIm5hbWVzIjpbImlzQXJyYXkiLCJhcmciLCJBcnJheSIsIm9iamVjdFRvU3RyaW5nIiwiZXhwb3J0cyIsImlzQm9vbGVhbiIsImlzTnVsbCIsImlzTnVsbE9yVW5kZWZpbmVkIiwiaXNOdW1iZXIiLCJpc1N0cmluZyIsImlzU3ltYm9sIiwiaXNVbmRlZmluZWQiLCJpc1JlZ0V4cCIsInJlIiwiaXNPYmplY3QiLCJpc0RhdGUiLCJkIiwiaXNFcnJvciIsImUiLCJFcnJvciIsImlzRnVuY3Rpb24iLCJpc1ByaW1pdGl2ZSIsImlzQnVmZmVyIiwicmVxdWlyZSIsIkJ1ZmZlciIsIm8iLCJPYmplY3QiLCJwcm90b3R5cGUiLCJ0b1N0cmluZyIsImNhbGwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/core-util-is/lib/util.js\n");

/***/ })

};
;