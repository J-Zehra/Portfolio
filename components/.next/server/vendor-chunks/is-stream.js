"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/is-stream";
exports.ids = ["vendor-chunks/is-stream"];
exports.modules = {

/***/ "(ssr)/./node_modules/is-stream/index.js":
/*!*****************************************!*\
  !*** ./node_modules/is-stream/index.js ***!
  \*****************************************/
/***/ ((module) => {

eval("\nconst isStream = (stream)=>stream !== null && typeof stream === \"object\" && typeof stream.pipe === \"function\";\nisStream.writable = (stream)=>isStream(stream) && stream.writable !== false && typeof stream._write === \"function\" && typeof stream._writableState === \"object\";\nisStream.readable = (stream)=>isStream(stream) && stream.readable !== false && typeof stream._read === \"function\" && typeof stream._readableState === \"object\";\nisStream.duplex = (stream)=>isStream.writable(stream) && isStream.readable(stream);\nisStream.transform = (stream)=>isStream.duplex(stream) && typeof stream._transform === \"function\";\nmodule.exports = isStream;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvaXMtc3RyZWFtL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBRUEsTUFBTUEsV0FBV0MsQ0FBQUEsU0FDaEJBLFdBQVcsUUFDWCxPQUFPQSxXQUFXLFlBQ2xCLE9BQU9BLE9BQU9DLElBQUksS0FBSztBQUV4QkYsU0FBU0csUUFBUSxHQUFHRixDQUFBQSxTQUNuQkQsU0FBU0MsV0FDVEEsT0FBT0UsUUFBUSxLQUFLLFNBQ3BCLE9BQU9GLE9BQU9HLE1BQU0sS0FBSyxjQUN6QixPQUFPSCxPQUFPSSxjQUFjLEtBQUs7QUFFbENMLFNBQVNNLFFBQVEsR0FBR0wsQ0FBQUEsU0FDbkJELFNBQVNDLFdBQ1RBLE9BQU9LLFFBQVEsS0FBSyxTQUNwQixPQUFPTCxPQUFPTSxLQUFLLEtBQUssY0FDeEIsT0FBT04sT0FBT08sY0FBYyxLQUFLO0FBRWxDUixTQUFTUyxNQUFNLEdBQUdSLENBQUFBLFNBQ2pCRCxTQUFTRyxRQUFRLENBQUNGLFdBQ2xCRCxTQUFTTSxRQUFRLENBQUNMO0FBRW5CRCxTQUFTVSxTQUFTLEdBQUdULENBQUFBLFNBQ3BCRCxTQUFTUyxNQUFNLENBQUNSLFdBQ2hCLE9BQU9BLE9BQU9VLFVBQVUsS0FBSztBQUU5QkMsT0FBT0MsT0FBTyxHQUFHYiIsInNvdXJjZXMiOlsid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9pcy1zdHJlYW0vaW5kZXguanM/MTlkOCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGlzU3RyZWFtID0gc3RyZWFtID0+XG5cdHN0cmVhbSAhPT0gbnVsbCAmJlxuXHR0eXBlb2Ygc3RyZWFtID09PSAnb2JqZWN0JyAmJlxuXHR0eXBlb2Ygc3RyZWFtLnBpcGUgPT09ICdmdW5jdGlvbic7XG5cbmlzU3RyZWFtLndyaXRhYmxlID0gc3RyZWFtID0+XG5cdGlzU3RyZWFtKHN0cmVhbSkgJiZcblx0c3RyZWFtLndyaXRhYmxlICE9PSBmYWxzZSAmJlxuXHR0eXBlb2Ygc3RyZWFtLl93cml0ZSA9PT0gJ2Z1bmN0aW9uJyAmJlxuXHR0eXBlb2Ygc3RyZWFtLl93cml0YWJsZVN0YXRlID09PSAnb2JqZWN0JztcblxuaXNTdHJlYW0ucmVhZGFibGUgPSBzdHJlYW0gPT5cblx0aXNTdHJlYW0oc3RyZWFtKSAmJlxuXHRzdHJlYW0ucmVhZGFibGUgIT09IGZhbHNlICYmXG5cdHR5cGVvZiBzdHJlYW0uX3JlYWQgPT09ICdmdW5jdGlvbicgJiZcblx0dHlwZW9mIHN0cmVhbS5fcmVhZGFibGVTdGF0ZSA9PT0gJ29iamVjdCc7XG5cbmlzU3RyZWFtLmR1cGxleCA9IHN0cmVhbSA9PlxuXHRpc1N0cmVhbS53cml0YWJsZShzdHJlYW0pICYmXG5cdGlzU3RyZWFtLnJlYWRhYmxlKHN0cmVhbSk7XG5cbmlzU3RyZWFtLnRyYW5zZm9ybSA9IHN0cmVhbSA9PlxuXHRpc1N0cmVhbS5kdXBsZXgoc3RyZWFtKSAmJlxuXHR0eXBlb2Ygc3RyZWFtLl90cmFuc2Zvcm0gPT09ICdmdW5jdGlvbic7XG5cbm1vZHVsZS5leHBvcnRzID0gaXNTdHJlYW07XG4iXSwibmFtZXMiOlsiaXNTdHJlYW0iLCJzdHJlYW0iLCJwaXBlIiwid3JpdGFibGUiLCJfd3JpdGUiLCJfd3JpdGFibGVTdGF0ZSIsInJlYWRhYmxlIiwiX3JlYWQiLCJfcmVhZGFibGVTdGF0ZSIsImR1cGxleCIsInRyYW5zZm9ybSIsIl90cmFuc2Zvcm0iLCJtb2R1bGUiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/is-stream/index.js\n");

/***/ })

};
;