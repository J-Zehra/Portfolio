"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/mimic-response";
exports.ids = ["vendor-chunks/mimic-response"];
exports.modules = {

/***/ "(ssr)/./node_modules/mimic-response/index.js":
/*!**********************************************!*\
  !*** ./node_modules/mimic-response/index.js ***!
  \**********************************************/
/***/ ((module) => {

eval("\n// We define these manually to ensure they're always copied\n// even if they would move up the prototype chain\n// https://nodejs.org/api/http.html#http_class_http_incomingmessage\nconst knownProperties = [\n    \"aborted\",\n    \"complete\",\n    \"headers\",\n    \"httpVersion\",\n    \"httpVersionMinor\",\n    \"httpVersionMajor\",\n    \"method\",\n    \"rawHeaders\",\n    \"rawTrailers\",\n    \"setTimeout\",\n    \"socket\",\n    \"statusCode\",\n    \"statusMessage\",\n    \"trailers\",\n    \"url\"\n];\nmodule.exports = (fromStream, toStream)=>{\n    if (toStream._readableState.autoDestroy) {\n        throw new Error(\"The second stream must have the `autoDestroy` option set to `false`\");\n    }\n    const fromProperties = new Set(Object.keys(fromStream).concat(knownProperties));\n    const properties = {};\n    for (const property of fromProperties){\n        // Don't overwrite existing properties.\n        if (property in toStream) {\n            continue;\n        }\n        properties[property] = {\n            get () {\n                const value = fromStream[property];\n                const isFunction = typeof value === \"function\";\n                return isFunction ? value.bind(fromStream) : value;\n            },\n            set (value) {\n                fromStream[property] = value;\n            },\n            enumerable: true,\n            configurable: false\n        };\n    }\n    Object.defineProperties(toStream, properties);\n    fromStream.once(\"aborted\", ()=>{\n        toStream.destroy();\n        toStream.emit(\"aborted\");\n    });\n    fromStream.once(\"close\", ()=>{\n        if (fromStream.complete) {\n            if (toStream.readable) {\n                toStream.once(\"end\", ()=>{\n                    toStream.emit(\"close\");\n                });\n            } else {\n                toStream.emit(\"close\");\n            }\n        } else {\n            toStream.emit(\"close\");\n        }\n    });\n    return toStream;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvbWltaWMtcmVzcG9uc2UvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFFQSwyREFBMkQ7QUFDM0QsaURBQWlEO0FBQ2pELG1FQUFtRTtBQUNuRSxNQUFNQSxrQkFBa0I7SUFDdkI7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0NBQ0E7QUFFREMsT0FBT0MsT0FBTyxHQUFHLENBQUNDLFlBQVlDO0lBQzdCLElBQUlBLFNBQVNDLGNBQWMsQ0FBQ0MsV0FBVyxFQUFFO1FBQ3hDLE1BQU0sSUFBSUMsTUFBTTtJQUNqQjtJQUVBLE1BQU1DLGlCQUFpQixJQUFJQyxJQUFJQyxPQUFPQyxJQUFJLENBQUNSLFlBQVlTLE1BQU0sQ0FBQ1o7SUFFOUQsTUFBTWEsYUFBYSxDQUFDO0lBRXBCLEtBQUssTUFBTUMsWUFBWU4sZUFBZ0I7UUFDdEMsdUNBQXVDO1FBQ3ZDLElBQUlNLFlBQVlWLFVBQVU7WUFDekI7UUFDRDtRQUVBUyxVQUFVLENBQUNDLFNBQVMsR0FBRztZQUN0QkM7Z0JBQ0MsTUFBTUMsUUFBUWIsVUFBVSxDQUFDVyxTQUFTO2dCQUNsQyxNQUFNRyxhQUFhLE9BQU9ELFVBQVU7Z0JBRXBDLE9BQU9DLGFBQWFELE1BQU1FLElBQUksQ0FBQ2YsY0FBY2E7WUFDOUM7WUFDQUcsS0FBSUgsS0FBSztnQkFDUmIsVUFBVSxDQUFDVyxTQUFTLEdBQUdFO1lBQ3hCO1lBQ0FJLFlBQVk7WUFDWkMsY0FBYztRQUNmO0lBQ0Q7SUFFQVgsT0FBT1ksZ0JBQWdCLENBQUNsQixVQUFVUztJQUVsQ1YsV0FBV29CLElBQUksQ0FBQyxXQUFXO1FBQzFCbkIsU0FBU29CLE9BQU87UUFFaEJwQixTQUFTcUIsSUFBSSxDQUFDO0lBQ2Y7SUFFQXRCLFdBQVdvQixJQUFJLENBQUMsU0FBUztRQUN4QixJQUFJcEIsV0FBV3VCLFFBQVEsRUFBRTtZQUN4QixJQUFJdEIsU0FBU3VCLFFBQVEsRUFBRTtnQkFDdEJ2QixTQUFTbUIsSUFBSSxDQUFDLE9BQU87b0JBQ3BCbkIsU0FBU3FCLElBQUksQ0FBQztnQkFDZjtZQUNELE9BQU87Z0JBQ05yQixTQUFTcUIsSUFBSSxDQUFDO1lBQ2Y7UUFDRCxPQUFPO1lBQ05yQixTQUFTcUIsSUFBSSxDQUFDO1FBQ2Y7SUFDRDtJQUVBLE9BQU9yQjtBQUNSIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL21pbWljLXJlc3BvbnNlL2luZGV4LmpzP2JmMzciXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG4vLyBXZSBkZWZpbmUgdGhlc2UgbWFudWFsbHkgdG8gZW5zdXJlIHRoZXkncmUgYWx3YXlzIGNvcGllZFxuLy8gZXZlbiBpZiB0aGV5IHdvdWxkIG1vdmUgdXAgdGhlIHByb3RvdHlwZSBjaGFpblxuLy8gaHR0cHM6Ly9ub2RlanMub3JnL2FwaS9odHRwLmh0bWwjaHR0cF9jbGFzc19odHRwX2luY29taW5nbWVzc2FnZVxuY29uc3Qga25vd25Qcm9wZXJ0aWVzID0gW1xuXHQnYWJvcnRlZCcsXG5cdCdjb21wbGV0ZScsXG5cdCdoZWFkZXJzJyxcblx0J2h0dHBWZXJzaW9uJyxcblx0J2h0dHBWZXJzaW9uTWlub3InLFxuXHQnaHR0cFZlcnNpb25NYWpvcicsXG5cdCdtZXRob2QnLFxuXHQncmF3SGVhZGVycycsXG5cdCdyYXdUcmFpbGVycycsXG5cdCdzZXRUaW1lb3V0Jyxcblx0J3NvY2tldCcsXG5cdCdzdGF0dXNDb2RlJyxcblx0J3N0YXR1c01lc3NhZ2UnLFxuXHQndHJhaWxlcnMnLFxuXHQndXJsJ1xuXTtcblxubW9kdWxlLmV4cG9ydHMgPSAoZnJvbVN0cmVhbSwgdG9TdHJlYW0pID0+IHtcblx0aWYgKHRvU3RyZWFtLl9yZWFkYWJsZVN0YXRlLmF1dG9EZXN0cm95KSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCdUaGUgc2Vjb25kIHN0cmVhbSBtdXN0IGhhdmUgdGhlIGBhdXRvRGVzdHJveWAgb3B0aW9uIHNldCB0byBgZmFsc2VgJyk7XG5cdH1cblxuXHRjb25zdCBmcm9tUHJvcGVydGllcyA9IG5ldyBTZXQoT2JqZWN0LmtleXMoZnJvbVN0cmVhbSkuY29uY2F0KGtub3duUHJvcGVydGllcykpO1xuXG5cdGNvbnN0IHByb3BlcnRpZXMgPSB7fTtcblxuXHRmb3IgKGNvbnN0IHByb3BlcnR5IG9mIGZyb21Qcm9wZXJ0aWVzKSB7XG5cdFx0Ly8gRG9uJ3Qgb3ZlcndyaXRlIGV4aXN0aW5nIHByb3BlcnRpZXMuXG5cdFx0aWYgKHByb3BlcnR5IGluIHRvU3RyZWFtKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRwcm9wZXJ0aWVzW3Byb3BlcnR5XSA9IHtcblx0XHRcdGdldCgpIHtcblx0XHRcdFx0Y29uc3QgdmFsdWUgPSBmcm9tU3RyZWFtW3Byb3BlcnR5XTtcblx0XHRcdFx0Y29uc3QgaXNGdW5jdGlvbiA9IHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJztcblxuXHRcdFx0XHRyZXR1cm4gaXNGdW5jdGlvbiA/IHZhbHVlLmJpbmQoZnJvbVN0cmVhbSkgOiB2YWx1ZTtcblx0XHRcdH0sXG5cdFx0XHRzZXQodmFsdWUpIHtcblx0XHRcdFx0ZnJvbVN0cmVhbVtwcm9wZXJ0eV0gPSB2YWx1ZTtcblx0XHRcdH0sXG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZVxuXHRcdH07XG5cdH1cblxuXHRPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0b1N0cmVhbSwgcHJvcGVydGllcyk7XG5cblx0ZnJvbVN0cmVhbS5vbmNlKCdhYm9ydGVkJywgKCkgPT4ge1xuXHRcdHRvU3RyZWFtLmRlc3Ryb3koKTtcblxuXHRcdHRvU3RyZWFtLmVtaXQoJ2Fib3J0ZWQnKTtcblx0fSk7XG5cblx0ZnJvbVN0cmVhbS5vbmNlKCdjbG9zZScsICgpID0+IHtcblx0XHRpZiAoZnJvbVN0cmVhbS5jb21wbGV0ZSkge1xuXHRcdFx0aWYgKHRvU3RyZWFtLnJlYWRhYmxlKSB7XG5cdFx0XHRcdHRvU3RyZWFtLm9uY2UoJ2VuZCcsICgpID0+IHtcblx0XHRcdFx0XHR0b1N0cmVhbS5lbWl0KCdjbG9zZScpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRvU3RyZWFtLmVtaXQoJ2Nsb3NlJyk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRvU3RyZWFtLmVtaXQoJ2Nsb3NlJyk7XG5cdFx0fVxuXHR9KTtcblxuXHRyZXR1cm4gdG9TdHJlYW07XG59O1xuIl0sIm5hbWVzIjpbImtub3duUHJvcGVydGllcyIsIm1vZHVsZSIsImV4cG9ydHMiLCJmcm9tU3RyZWFtIiwidG9TdHJlYW0iLCJfcmVhZGFibGVTdGF0ZSIsImF1dG9EZXN0cm95IiwiRXJyb3IiLCJmcm9tUHJvcGVydGllcyIsIlNldCIsIk9iamVjdCIsImtleXMiLCJjb25jYXQiLCJwcm9wZXJ0aWVzIiwicHJvcGVydHkiLCJnZXQiLCJ2YWx1ZSIsImlzRnVuY3Rpb24iLCJiaW5kIiwic2V0IiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsImRlZmluZVByb3BlcnRpZXMiLCJvbmNlIiwiZGVzdHJveSIsImVtaXQiLCJjb21wbGV0ZSIsInJlYWRhYmxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/mimic-response/index.js\n");

/***/ })

};
;