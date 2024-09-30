"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/progress-stream";
exports.ids = ["vendor-chunks/progress-stream"];
exports.modules = {

/***/ "(ssr)/./node_modules/progress-stream/index.js":
/*!***********************************************!*\
  !*** ./node_modules/progress-stream/index.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar through = __webpack_require__(/*! through2 */ \"(ssr)/./node_modules/through2/through2.js\");\nvar speedometer = __webpack_require__(/*! speedometer */ \"(ssr)/./node_modules/speedometer/index.js\");\nmodule.exports = function(options, onprogress) {\n    if (typeof options === \"function\") return module.exports(null, options);\n    options = options || {};\n    var length = options.length || 0;\n    var time = options.time || 0;\n    var drain = options.drain || false;\n    var transferred = options.transferred || 0;\n    var nextUpdate = Date.now() + time;\n    var delta = 0;\n    var speed = speedometer(options.speed || 5000);\n    var startTime = Date.now();\n    var update = {\n        percentage: 0,\n        transferred: transferred,\n        length: length,\n        remaining: length,\n        eta: 0,\n        runtime: 0\n    };\n    var emit = function(ended) {\n        update.delta = delta;\n        update.percentage = ended ? 100 : length ? transferred / length * 100 : 0;\n        update.speed = speed(delta);\n        update.eta = Math.round(update.remaining / update.speed);\n        update.runtime = parseInt((Date.now() - startTime) / 1000);\n        nextUpdate = Date.now() + time;\n        delta = 0;\n        tr.emit(\"progress\", update);\n    };\n    var write = function(chunk, enc, callback) {\n        var len = options.objectMode ? 1 : chunk.length;\n        transferred += len;\n        delta += len;\n        update.transferred = transferred;\n        update.remaining = length >= transferred ? length - transferred : 0;\n        if (Date.now() >= nextUpdate) emit(false);\n        callback(null, chunk);\n    };\n    var end = function(callback) {\n        emit(true);\n        callback();\n    };\n    var tr = through(options.objectMode ? {\n        objectMode: true,\n        highWaterMark: 16\n    } : {}, write, end);\n    var onlength = function(newLength) {\n        length = newLength;\n        update.length = length;\n        update.remaining = length - update.transferred;\n        tr.emit(\"length\", length);\n    };\n    // Expose `onlength()` handler as `setLength()` to support custom use cases where length\n    // is not known until after a few chunks have already been pumped, or is\n    // calculated on the fly.\n    tr.setLength = onlength;\n    tr.on(\"pipe\", function(stream) {\n        if (typeof length === \"number\") return;\n        // Support http module\n        if (stream.readable && !stream.writable && stream.headers) {\n            return onlength(parseInt(stream.headers[\"content-length\"] || 0));\n        }\n        // Support streams with a length property\n        if (typeof stream.length === \"number\") {\n            return onlength(stream.length);\n        }\n        // Support request module\n        stream.on(\"response\", function(res) {\n            if (!res || !res.headers) return;\n            if (res.headers[\"content-encoding\"] === \"gzip\") return;\n            if (res.headers[\"content-length\"]) {\n                return onlength(parseInt(res.headers[\"content-length\"]));\n            }\n        });\n    });\n    if (drain) tr.resume();\n    if (onprogress) tr.on(\"progress\", onprogress);\n    tr.progress = function() {\n        update.speed = speed(0);\n        update.eta = Math.round(update.remaining / update.speed);\n        return update;\n    };\n    return tr;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcHJvZ3Jlc3Mtc3RyZWFtL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7QUFBQSxJQUFJQSxVQUFVQyxtQkFBT0EsQ0FBQztBQUN0QixJQUFJQyxjQUFjRCxtQkFBT0EsQ0FBQztBQUUxQkUsT0FBT0MsT0FBTyxHQUFHLFNBQVNDLE9BQU8sRUFBRUMsVUFBVTtJQUM1QyxJQUFJLE9BQU9ELFlBQVksWUFBWSxPQUFPRixPQUFPQyxPQUFPLENBQUMsTUFBTUM7SUFDL0RBLFVBQVVBLFdBQVcsQ0FBQztJQUV0QixJQUFJRSxTQUFTRixRQUFRRSxNQUFNLElBQUk7SUFDL0IsSUFBSUMsT0FBT0gsUUFBUUcsSUFBSSxJQUFJO0lBQzNCLElBQUlDLFFBQVFKLFFBQVFJLEtBQUssSUFBSTtJQUM3QixJQUFJQyxjQUFjTCxRQUFRSyxXQUFXLElBQUk7SUFDekMsSUFBSUMsYUFBYUMsS0FBS0MsR0FBRyxLQUFHTDtJQUM1QixJQUFJTSxRQUFRO0lBQ1osSUFBSUMsUUFBUWIsWUFBWUcsUUFBUVUsS0FBSyxJQUFJO0lBQ3pDLElBQUlDLFlBQVlKLEtBQUtDLEdBQUc7SUFFeEIsSUFBSUksU0FBUztRQUNaQyxZQUFZO1FBQ1pSLGFBQWFBO1FBQ2JILFFBQVFBO1FBQ1JZLFdBQVdaO1FBQ1hhLEtBQUs7UUFDTEMsU0FBUztJQUNWO0lBRUEsSUFBSUMsT0FBTyxTQUFTQyxLQUFLO1FBQ3hCTixPQUFPSCxLQUFLLEdBQUdBO1FBQ2ZHLE9BQU9DLFVBQVUsR0FBR0ssUUFBUSxNQUFPaEIsU0FBU0csY0FBWUgsU0FBTyxNQUFNO1FBQ3JFVSxPQUFPRixLQUFLLEdBQUdBLE1BQU1EO1FBQ3JCRyxPQUFPRyxHQUFHLEdBQUdJLEtBQUtDLEtBQUssQ0FBQ1IsT0FBT0UsU0FBUyxHQUFHRixPQUFPRixLQUFLO1FBQ3ZERSxPQUFPSSxPQUFPLEdBQUdLLFNBQVMsQ0FBQ2QsS0FBS0MsR0FBRyxLQUFLRyxTQUFRLElBQUc7UUFDbkRMLGFBQWFDLEtBQUtDLEdBQUcsS0FBR0w7UUFFeEJNLFFBQVE7UUFFUmEsR0FBR0wsSUFBSSxDQUFDLFlBQVlMO0lBQ3JCO0lBQ0EsSUFBSVcsUUFBUSxTQUFTQyxLQUFLLEVBQUVDLEdBQUcsRUFBRUMsUUFBUTtRQUN4QyxJQUFJQyxNQUFNM0IsUUFBUTRCLFVBQVUsR0FBRyxJQUFJSixNQUFNdEIsTUFBTTtRQUMvQ0csZUFBZXNCO1FBQ2ZsQixTQUFTa0I7UUFDVGYsT0FBT1AsV0FBVyxHQUFHQTtRQUNyQk8sT0FBT0UsU0FBUyxHQUFHWixVQUFVRyxjQUFjSCxTQUFTRyxjQUFjO1FBRWxFLElBQUlFLEtBQUtDLEdBQUcsTUFBTUYsWUFBWVcsS0FBSztRQUNuQ1MsU0FBUyxNQUFNRjtJQUNoQjtJQUNBLElBQUlLLE1BQU0sU0FBU0gsUUFBUTtRQUMxQlQsS0FBSztRQUNMUztJQUNEO0lBRUEsSUFBSUosS0FBSzNCLFFBQVFLLFFBQVE0QixVQUFVLEdBQUc7UUFBQ0EsWUFBVztRQUFNRSxlQUFjO0lBQUUsSUFBSSxDQUFDLEdBQUdQLE9BQU9NO0lBQ3ZGLElBQUlFLFdBQVcsU0FBU0MsU0FBUztRQUNoQzlCLFNBQVM4QjtRQUNUcEIsT0FBT1YsTUFBTSxHQUFHQTtRQUNoQlUsT0FBT0UsU0FBUyxHQUFHWixTQUFTVSxPQUFPUCxXQUFXO1FBQzlDaUIsR0FBR0wsSUFBSSxDQUFDLFVBQVVmO0lBQ25CO0lBRUEsd0ZBQXdGO0lBQ3hGLHdFQUF3RTtJQUN4RSx5QkFBeUI7SUFDekJvQixHQUFHVyxTQUFTLEdBQUdGO0lBRWZULEdBQUdZLEVBQUUsQ0FBQyxRQUFRLFNBQVNDLE1BQU07UUFDNUIsSUFBSSxPQUFPakMsV0FBVyxVQUFVO1FBQ2hDLHNCQUFzQjtRQUN0QixJQUFJaUMsT0FBT0MsUUFBUSxJQUFJLENBQUNELE9BQU9FLFFBQVEsSUFBSUYsT0FBT0csT0FBTyxFQUFFO1lBQzFELE9BQU9QLFNBQVNWLFNBQVNjLE9BQU9HLE9BQU8sQ0FBQyxpQkFBaUIsSUFBSTtRQUM5RDtRQUVBLHlDQUF5QztRQUN6QyxJQUFJLE9BQU9ILE9BQU9qQyxNQUFNLEtBQUssVUFBVTtZQUN0QyxPQUFPNkIsU0FBU0ksT0FBT2pDLE1BQU07UUFDOUI7UUFFQSx5QkFBeUI7UUFDekJpQyxPQUFPRCxFQUFFLENBQUMsWUFBWSxTQUFTSyxHQUFHO1lBQ2pDLElBQUksQ0FBQ0EsT0FBTyxDQUFDQSxJQUFJRCxPQUFPLEVBQUU7WUFDMUIsSUFBSUMsSUFBSUQsT0FBTyxDQUFDLG1CQUFtQixLQUFLLFFBQVE7WUFDaEQsSUFBSUMsSUFBSUQsT0FBTyxDQUFDLGlCQUFpQixFQUFFO2dCQUNsQyxPQUFPUCxTQUFTVixTQUFTa0IsSUFBSUQsT0FBTyxDQUFDLGlCQUFpQjtZQUN2RDtRQUNEO0lBQ0Q7SUFFQSxJQUFJbEMsT0FBT2tCLEdBQUdrQixNQUFNO0lBQ3BCLElBQUl2QyxZQUFZcUIsR0FBR1ksRUFBRSxDQUFDLFlBQVlqQztJQUVsQ3FCLEdBQUdtQixRQUFRLEdBQUc7UUFDYjdCLE9BQU9GLEtBQUssR0FBR0EsTUFBTTtRQUNyQkUsT0FBT0csR0FBRyxHQUFHSSxLQUFLQyxLQUFLLENBQUNSLE9BQU9FLFNBQVMsR0FBR0YsT0FBT0YsS0FBSztRQUV2RCxPQUFPRTtJQUNSO0lBQ0EsT0FBT1U7QUFDUiIsInNvdXJjZXMiOlsid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9wcm9ncmVzcy1zdHJlYW0vaW5kZXguanM/M2M0NiJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgdGhyb3VnaCA9IHJlcXVpcmUoJ3Rocm91Z2gyJyk7XG52YXIgc3BlZWRvbWV0ZXIgPSByZXF1aXJlKCdzcGVlZG9tZXRlcicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9wdGlvbnMsIG9ucHJvZ3Jlc3MpIHtcblx0aWYgKHR5cGVvZiBvcHRpb25zID09PSAnZnVuY3Rpb24nKSByZXR1cm4gbW9kdWxlLmV4cG9ydHMobnVsbCwgb3B0aW9ucyk7XG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG5cdHZhciBsZW5ndGggPSBvcHRpb25zLmxlbmd0aCB8fCAwO1xuXHR2YXIgdGltZSA9IG9wdGlvbnMudGltZSB8fCAwO1xuXHR2YXIgZHJhaW4gPSBvcHRpb25zLmRyYWluIHx8IGZhbHNlO1xuXHR2YXIgdHJhbnNmZXJyZWQgPSBvcHRpb25zLnRyYW5zZmVycmVkIHx8IDA7XG5cdHZhciBuZXh0VXBkYXRlID0gRGF0ZS5ub3coKSt0aW1lO1xuXHR2YXIgZGVsdGEgPSAwO1xuXHR2YXIgc3BlZWQgPSBzcGVlZG9tZXRlcihvcHRpb25zLnNwZWVkIHx8IDUwMDApO1xuXHR2YXIgc3RhcnRUaW1lID0gRGF0ZS5ub3coKTtcblxuXHR2YXIgdXBkYXRlID0ge1xuXHRcdHBlcmNlbnRhZ2U6IDAsXG5cdFx0dHJhbnNmZXJyZWQ6IHRyYW5zZmVycmVkLFxuXHRcdGxlbmd0aDogbGVuZ3RoLFxuXHRcdHJlbWFpbmluZzogbGVuZ3RoLFxuXHRcdGV0YTogMCxcblx0XHRydW50aW1lOiAwXG5cdH07XG5cblx0dmFyIGVtaXQgPSBmdW5jdGlvbihlbmRlZCkge1xuXHRcdHVwZGF0ZS5kZWx0YSA9IGRlbHRhO1xuXHRcdHVwZGF0ZS5wZXJjZW50YWdlID0gZW5kZWQgPyAxMDAgOiAobGVuZ3RoID8gdHJhbnNmZXJyZWQvbGVuZ3RoKjEwMCA6IDApO1xuXHRcdHVwZGF0ZS5zcGVlZCA9IHNwZWVkKGRlbHRhKTtcblx0XHR1cGRhdGUuZXRhID0gTWF0aC5yb3VuZCh1cGRhdGUucmVtYWluaW5nIC8gdXBkYXRlLnNwZWVkKTtcblx0XHR1cGRhdGUucnVudGltZSA9IHBhcnNlSW50KChEYXRlLm5vdygpIC0gc3RhcnRUaW1lKS8xMDAwKTtcblx0XHRuZXh0VXBkYXRlID0gRGF0ZS5ub3coKSt0aW1lO1xuXG5cdFx0ZGVsdGEgPSAwO1xuXG5cdFx0dHIuZW1pdCgncHJvZ3Jlc3MnLCB1cGRhdGUpO1xuXHR9O1xuXHR2YXIgd3JpdGUgPSBmdW5jdGlvbihjaHVuaywgZW5jLCBjYWxsYmFjaykge1xuXHRcdHZhciBsZW4gPSBvcHRpb25zLm9iamVjdE1vZGUgPyAxIDogY2h1bmsubGVuZ3RoO1xuXHRcdHRyYW5zZmVycmVkICs9IGxlbjtcblx0XHRkZWx0YSArPSBsZW47XG5cdFx0dXBkYXRlLnRyYW5zZmVycmVkID0gdHJhbnNmZXJyZWQ7XG5cdFx0dXBkYXRlLnJlbWFpbmluZyA9IGxlbmd0aCA+PSB0cmFuc2ZlcnJlZCA/IGxlbmd0aCAtIHRyYW5zZmVycmVkIDogMDtcblxuXHRcdGlmIChEYXRlLm5vdygpID49IG5leHRVcGRhdGUpIGVtaXQoZmFsc2UpO1xuXHRcdGNhbGxiYWNrKG51bGwsIGNodW5rKTtcblx0fTtcblx0dmFyIGVuZCA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG5cdFx0ZW1pdCh0cnVlKTtcblx0XHRjYWxsYmFjaygpO1xuXHR9O1xuXG5cdHZhciB0ciA9IHRocm91Z2gob3B0aW9ucy5vYmplY3RNb2RlID8ge29iamVjdE1vZGU6dHJ1ZSwgaGlnaFdhdGVyTWFyazoxNn0gOiB7fSwgd3JpdGUsIGVuZCk7XG5cdHZhciBvbmxlbmd0aCA9IGZ1bmN0aW9uKG5ld0xlbmd0aCkge1xuXHRcdGxlbmd0aCA9IG5ld0xlbmd0aDtcblx0XHR1cGRhdGUubGVuZ3RoID0gbGVuZ3RoO1xuXHRcdHVwZGF0ZS5yZW1haW5pbmcgPSBsZW5ndGggLSB1cGRhdGUudHJhbnNmZXJyZWQ7XG5cdFx0dHIuZW1pdCgnbGVuZ3RoJywgbGVuZ3RoKTtcblx0fTtcblx0XG5cdC8vIEV4cG9zZSBgb25sZW5ndGgoKWAgaGFuZGxlciBhcyBgc2V0TGVuZ3RoKClgIHRvIHN1cHBvcnQgY3VzdG9tIHVzZSBjYXNlcyB3aGVyZSBsZW5ndGhcblx0Ly8gaXMgbm90IGtub3duIHVudGlsIGFmdGVyIGEgZmV3IGNodW5rcyBoYXZlIGFscmVhZHkgYmVlbiBwdW1wZWQsIG9yIGlzXG5cdC8vIGNhbGN1bGF0ZWQgb24gdGhlIGZseS5cblx0dHIuc2V0TGVuZ3RoID0gb25sZW5ndGg7XG5cdFxuXHR0ci5vbigncGlwZScsIGZ1bmN0aW9uKHN0cmVhbSkge1xuXHRcdGlmICh0eXBlb2YgbGVuZ3RoID09PSAnbnVtYmVyJykgcmV0dXJuO1xuXHRcdC8vIFN1cHBvcnQgaHR0cCBtb2R1bGVcblx0XHRpZiAoc3RyZWFtLnJlYWRhYmxlICYmICFzdHJlYW0ud3JpdGFibGUgJiYgc3RyZWFtLmhlYWRlcnMpIHtcblx0XHRcdHJldHVybiBvbmxlbmd0aChwYXJzZUludChzdHJlYW0uaGVhZGVyc1snY29udGVudC1sZW5ndGgnXSB8fCAwKSk7XG5cdFx0fVxuXG5cdFx0Ly8gU3VwcG9ydCBzdHJlYW1zIHdpdGggYSBsZW5ndGggcHJvcGVydHlcblx0XHRpZiAodHlwZW9mIHN0cmVhbS5sZW5ndGggPT09ICdudW1iZXInKSB7XG5cdFx0XHRyZXR1cm4gb25sZW5ndGgoc3RyZWFtLmxlbmd0aCk7XG5cdFx0fVxuXG5cdFx0Ly8gU3VwcG9ydCByZXF1ZXN0IG1vZHVsZVxuXHRcdHN0cmVhbS5vbigncmVzcG9uc2UnLCBmdW5jdGlvbihyZXMpIHtcblx0XHRcdGlmICghcmVzIHx8ICFyZXMuaGVhZGVycykgcmV0dXJuO1xuXHRcdFx0aWYgKHJlcy5oZWFkZXJzWydjb250ZW50LWVuY29kaW5nJ10gPT09ICdnemlwJykgcmV0dXJuO1xuXHRcdFx0aWYgKHJlcy5oZWFkZXJzWydjb250ZW50LWxlbmd0aCddKSB7XG5cdFx0XHRcdHJldHVybiBvbmxlbmd0aChwYXJzZUludChyZXMuaGVhZGVyc1snY29udGVudC1sZW5ndGgnXSkpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9KTtcblxuXHRpZiAoZHJhaW4pIHRyLnJlc3VtZSgpO1xuXHRpZiAob25wcm9ncmVzcykgdHIub24oJ3Byb2dyZXNzJywgb25wcm9ncmVzcyk7XG5cblx0dHIucHJvZ3Jlc3MgPSBmdW5jdGlvbigpIHtcblx0XHR1cGRhdGUuc3BlZWQgPSBzcGVlZCgwKTtcblx0XHR1cGRhdGUuZXRhID0gTWF0aC5yb3VuZCh1cGRhdGUucmVtYWluaW5nIC8gdXBkYXRlLnNwZWVkKTtcblxuXHRcdHJldHVybiB1cGRhdGU7XG5cdH07XG5cdHJldHVybiB0cjtcbn07XG4iXSwibmFtZXMiOlsidGhyb3VnaCIsInJlcXVpcmUiLCJzcGVlZG9tZXRlciIsIm1vZHVsZSIsImV4cG9ydHMiLCJvcHRpb25zIiwib25wcm9ncmVzcyIsImxlbmd0aCIsInRpbWUiLCJkcmFpbiIsInRyYW5zZmVycmVkIiwibmV4dFVwZGF0ZSIsIkRhdGUiLCJub3ciLCJkZWx0YSIsInNwZWVkIiwic3RhcnRUaW1lIiwidXBkYXRlIiwicGVyY2VudGFnZSIsInJlbWFpbmluZyIsImV0YSIsInJ1bnRpbWUiLCJlbWl0IiwiZW5kZWQiLCJNYXRoIiwicm91bmQiLCJwYXJzZUludCIsInRyIiwid3JpdGUiLCJjaHVuayIsImVuYyIsImNhbGxiYWNrIiwibGVuIiwib2JqZWN0TW9kZSIsImVuZCIsImhpZ2hXYXRlck1hcmsiLCJvbmxlbmd0aCIsIm5ld0xlbmd0aCIsInNldExlbmd0aCIsIm9uIiwic3RyZWFtIiwicmVhZGFibGUiLCJ3cml0YWJsZSIsImhlYWRlcnMiLCJyZXMiLCJyZXN1bWUiLCJwcm9ncmVzcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/progress-stream/index.js\n");

/***/ })

};
;