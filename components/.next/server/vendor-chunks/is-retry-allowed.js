"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/is-retry-allowed";
exports.ids = ["vendor-chunks/is-retry-allowed"];
exports.modules = {

/***/ "(ssr)/./node_modules/is-retry-allowed/index.js":
/*!************************************************!*\
  !*** ./node_modules/is-retry-allowed/index.js ***!
  \************************************************/
/***/ ((module) => {

eval("\nconst denyList = new Set([\n    \"ENOTFOUND\",\n    \"ENETUNREACH\",\n    // SSL errors from https://github.com/nodejs/node/blob/fc8e3e2cdc521978351de257030db0076d79e0ab/src/crypto/crypto_common.cc#L301-L328\n    \"UNABLE_TO_GET_ISSUER_CERT\",\n    \"UNABLE_TO_GET_CRL\",\n    \"UNABLE_TO_DECRYPT_CERT_SIGNATURE\",\n    \"UNABLE_TO_DECRYPT_CRL_SIGNATURE\",\n    \"UNABLE_TO_DECODE_ISSUER_PUBLIC_KEY\",\n    \"CERT_SIGNATURE_FAILURE\",\n    \"CRL_SIGNATURE_FAILURE\",\n    \"CERT_NOT_YET_VALID\",\n    \"CERT_HAS_EXPIRED\",\n    \"CRL_NOT_YET_VALID\",\n    \"CRL_HAS_EXPIRED\",\n    \"ERROR_IN_CERT_NOT_BEFORE_FIELD\",\n    \"ERROR_IN_CERT_NOT_AFTER_FIELD\",\n    \"ERROR_IN_CRL_LAST_UPDATE_FIELD\",\n    \"ERROR_IN_CRL_NEXT_UPDATE_FIELD\",\n    \"OUT_OF_MEM\",\n    \"DEPTH_ZERO_SELF_SIGNED_CERT\",\n    \"SELF_SIGNED_CERT_IN_CHAIN\",\n    \"UNABLE_TO_GET_ISSUER_CERT_LOCALLY\",\n    \"UNABLE_TO_VERIFY_LEAF_SIGNATURE\",\n    \"CERT_CHAIN_TOO_LONG\",\n    \"CERT_REVOKED\",\n    \"INVALID_CA\",\n    \"PATH_LENGTH_EXCEEDED\",\n    \"INVALID_PURPOSE\",\n    \"CERT_UNTRUSTED\",\n    \"CERT_REJECTED\",\n    \"HOSTNAME_MISMATCH\"\n]);\n// TODO: Use `error?.code` when targeting Node.js 14\nmodule.exports = (error)=>!denyList.has(error && error.code);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvaXMtcmV0cnktYWxsb3dlZC9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUVBLE1BQU1BLFdBQVcsSUFBSUMsSUFBSTtJQUN4QjtJQUNBO0lBRUEscUlBQXFJO0lBQ3JJO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0NBQ0E7QUFFRCxvREFBb0Q7QUFDcERDLE9BQU9DLE9BQU8sR0FBR0MsQ0FBQUEsUUFBUyxDQUFDSixTQUFTSyxHQUFHLENBQUNELFNBQVNBLE1BQU1FLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvaXMtcmV0cnktYWxsb3dlZC9pbmRleC5qcz9jYWU1Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgZGVueUxpc3QgPSBuZXcgU2V0KFtcblx0J0VOT1RGT1VORCcsXG5cdCdFTkVUVU5SRUFDSCcsXG5cblx0Ly8gU1NMIGVycm9ycyBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9ub2RlanMvbm9kZS9ibG9iL2ZjOGUzZTJjZGM1MjE5NzgzNTFkZTI1NzAzMGRiMDA3NmQ3OWUwYWIvc3JjL2NyeXB0by9jcnlwdG9fY29tbW9uLmNjI0wzMDEtTDMyOFxuXHQnVU5BQkxFX1RPX0dFVF9JU1NVRVJfQ0VSVCcsXG5cdCdVTkFCTEVfVE9fR0VUX0NSTCcsXG5cdCdVTkFCTEVfVE9fREVDUllQVF9DRVJUX1NJR05BVFVSRScsXG5cdCdVTkFCTEVfVE9fREVDUllQVF9DUkxfU0lHTkFUVVJFJyxcblx0J1VOQUJMRV9UT19ERUNPREVfSVNTVUVSX1BVQkxJQ19LRVknLFxuXHQnQ0VSVF9TSUdOQVRVUkVfRkFJTFVSRScsXG5cdCdDUkxfU0lHTkFUVVJFX0ZBSUxVUkUnLFxuXHQnQ0VSVF9OT1RfWUVUX1ZBTElEJyxcblx0J0NFUlRfSEFTX0VYUElSRUQnLFxuXHQnQ1JMX05PVF9ZRVRfVkFMSUQnLFxuXHQnQ1JMX0hBU19FWFBJUkVEJyxcblx0J0VSUk9SX0lOX0NFUlRfTk9UX0JFRk9SRV9GSUVMRCcsXG5cdCdFUlJPUl9JTl9DRVJUX05PVF9BRlRFUl9GSUVMRCcsXG5cdCdFUlJPUl9JTl9DUkxfTEFTVF9VUERBVEVfRklFTEQnLFxuXHQnRVJST1JfSU5fQ1JMX05FWFRfVVBEQVRFX0ZJRUxEJyxcblx0J09VVF9PRl9NRU0nLFxuXHQnREVQVEhfWkVST19TRUxGX1NJR05FRF9DRVJUJyxcblx0J1NFTEZfU0lHTkVEX0NFUlRfSU5fQ0hBSU4nLFxuXHQnVU5BQkxFX1RPX0dFVF9JU1NVRVJfQ0VSVF9MT0NBTExZJyxcblx0J1VOQUJMRV9UT19WRVJJRllfTEVBRl9TSUdOQVRVUkUnLFxuXHQnQ0VSVF9DSEFJTl9UT09fTE9ORycsXG5cdCdDRVJUX1JFVk9LRUQnLFxuXHQnSU5WQUxJRF9DQScsXG5cdCdQQVRIX0xFTkdUSF9FWENFRURFRCcsXG5cdCdJTlZBTElEX1BVUlBPU0UnLFxuXHQnQ0VSVF9VTlRSVVNURUQnLFxuXHQnQ0VSVF9SRUpFQ1RFRCcsXG5cdCdIT1NUTkFNRV9NSVNNQVRDSCdcbl0pO1xuXG4vLyBUT0RPOiBVc2UgYGVycm9yPy5jb2RlYCB3aGVuIHRhcmdldGluZyBOb2RlLmpzIDE0XG5tb2R1bGUuZXhwb3J0cyA9IGVycm9yID0+ICFkZW55TGlzdC5oYXMoZXJyb3IgJiYgZXJyb3IuY29kZSk7XG4iXSwibmFtZXMiOlsiZGVueUxpc3QiLCJTZXQiLCJtb2R1bGUiLCJleHBvcnRzIiwiZXJyb3IiLCJoYXMiLCJjb2RlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/is-retry-allowed/index.js\n");

/***/ })

};
;