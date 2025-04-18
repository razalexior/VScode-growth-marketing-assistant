"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/generatePlan";
exports.ids = ["pages/api/generatePlan"];
exports.modules = {

/***/ "get-stream":
/*!*****************************!*\
  !*** external "get-stream" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("get-stream");

/***/ }),

/***/ "pdfkit":
/*!*************************!*\
  !*** external "pdfkit" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("pdfkit");

/***/ }),

/***/ "(api)/./pages/api/generatePlan.js":
/*!***********************************!*\
  !*** ./pages/api/generatePlan.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _utils_fetchInfluencers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/fetchInfluencers */ \"(api)/./utils/fetchInfluencers.js\");\n/* harmony import */ var _utils_generatePDF__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/generatePDF */ \"(api)/./utils/generatePDF.js\");\n\n\nasync function handler(req, res) {\n    if (req.method !== \"POST\") return res.status(405).end();\n    const { url } = req.body;\n    const plan = {\n        summary: `Mock summary for ${url}`,\n        channels: [\n            {\n                name: \"Facebook Ads\",\n                budget: \"40%\"\n            },\n            {\n                name: \"Instagram Influencers\",\n                budget: \"30%\"\n            },\n            {\n                name: \"YouTube Ads\",\n                budget: \"30%\"\n            }\n        ]\n    };\n    const influencers = (0,_utils_fetchInfluencers__WEBPACK_IMPORTED_MODULE_0__.fetchInfluencers)(\"marketing\");\n    const pdf = await (0,_utils_generatePDF__WEBPACK_IMPORTED_MODULE_1__.generatePDF)({\n        ...plan,\n        influencers\n    });\n    res.status(200).json({\n        plan,\n        influencers,\n        pdf\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2VuZXJhdGVQbGFuLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFnRTtBQUNWO0FBRXZDLGVBQWVFLFFBQVFDLEdBQUcsRUFBRUMsR0FBRztJQUM1QyxJQUFJRCxJQUFJRSxNQUFNLEtBQUssUUFBUSxPQUFPRCxJQUFJRSxNQUFNLENBQUMsS0FBS0MsR0FBRztJQUVyRCxNQUFNLEVBQUVDLEdBQUcsRUFBRSxHQUFHTCxJQUFJTSxJQUFJO0lBQ3hCLE1BQU1DLE9BQU87UUFDWEMsU0FBUyxDQUFDLGlCQUFpQixFQUFFSCxJQUFJLENBQUM7UUFDbENJLFVBQVU7WUFDUjtnQkFBRUMsTUFBTTtnQkFBZ0JDLFFBQVE7WUFBTTtZQUN0QztnQkFBRUQsTUFBTTtnQkFBeUJDLFFBQVE7WUFBTTtZQUMvQztnQkFBRUQsTUFBTTtnQkFBZUMsUUFBUTtZQUFNO1NBQ3RDO0lBQ0g7SUFFQSxNQUFNQyxjQUFjZix5RUFBZ0JBLENBQUM7SUFDckMsTUFBTWdCLE1BQU0sTUFBTWYsK0RBQVdBLENBQUM7UUFBRSxHQUFHUyxJQUFJO1FBQUVLO0lBQVk7SUFFckRYLElBQUlFLE1BQU0sQ0FBQyxLQUFLVyxJQUFJLENBQUM7UUFBRVA7UUFBTUs7UUFBYUM7SUFBSTtBQUNoRCIsInNvdXJjZXMiOlsid2VicGFjazovL2dyb3d0aC1tYXJrZXRpbmctYXNzaXN0YW50Ly4vcGFnZXMvYXBpL2dlbmVyYXRlUGxhbi5qcz81ZjY4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGZldGNoSW5mbHVlbmNlcnMgfSBmcm9tICcuLi8uLi91dGlscy9mZXRjaEluZmx1ZW5jZXJzJztcbmltcG9ydCB7IGdlbmVyYXRlUERGIH0gZnJvbSAnLi4vLi4vdXRpbHMvZ2VuZXJhdGVQREYnO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gIGlmIChyZXEubWV0aG9kICE9PSAnUE9TVCcpIHJldHVybiByZXMuc3RhdHVzKDQwNSkuZW5kKCk7XG5cbiAgY29uc3QgeyB1cmwgfSA9IHJlcS5ib2R5O1xuICBjb25zdCBwbGFuID0ge1xuICAgIHN1bW1hcnk6IGBNb2NrIHN1bW1hcnkgZm9yICR7dXJsfWAsXG4gICAgY2hhbm5lbHM6IFtcbiAgICAgIHsgbmFtZTogJ0ZhY2Vib29rIEFkcycsIGJ1ZGdldDogJzQwJScgfSxcbiAgICAgIHsgbmFtZTogJ0luc3RhZ3JhbSBJbmZsdWVuY2VycycsIGJ1ZGdldDogJzMwJScgfSxcbiAgICAgIHsgbmFtZTogJ1lvdVR1YmUgQWRzJywgYnVkZ2V0OiAnMzAlJyB9LFxuICAgIF0sXG4gIH07XG5cbiAgY29uc3QgaW5mbHVlbmNlcnMgPSBmZXRjaEluZmx1ZW5jZXJzKCdtYXJrZXRpbmcnKTtcbiAgY29uc3QgcGRmID0gYXdhaXQgZ2VuZXJhdGVQREYoeyAuLi5wbGFuLCBpbmZsdWVuY2VycyB9KTtcblxuICByZXMuc3RhdHVzKDIwMCkuanNvbih7IHBsYW4sIGluZmx1ZW5jZXJzLCBwZGYgfSk7XG59XG4iXSwibmFtZXMiOlsiZmV0Y2hJbmZsdWVuY2VycyIsImdlbmVyYXRlUERGIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsInN0YXR1cyIsImVuZCIsInVybCIsImJvZHkiLCJwbGFuIiwic3VtbWFyeSIsImNoYW5uZWxzIiwibmFtZSIsImJ1ZGdldCIsImluZmx1ZW5jZXJzIiwicGRmIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/generatePlan.js\n");

/***/ }),

/***/ "(api)/./utils/fetchInfluencers.js":
/*!***********************************!*\
  !*** ./utils/fetchInfluencers.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fetchInfluencers: () => (/* binding */ fetchInfluencers)\n/* harmony export */ });\nfunction fetchInfluencers(category) {\n    return [\n        {\n            name: \"Influencer A\",\n            platform: \"Instagram\",\n            followers: \"100K\"\n        },\n        {\n            name: \"Influencer B\",\n            platform: \"TikTok\",\n            followers: \"150K\"\n        },\n        {\n            name: \"Influencer C\",\n            platform: \"YouTube\",\n            followers: \"200K\"\n        }\n    ];\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi91dGlscy9mZXRjaEluZmx1ZW5jZXJzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBTyxTQUFTQSxpQkFBaUJDLFFBQVE7SUFDckMsT0FBTztRQUNMO1lBQUVDLE1BQU07WUFBZ0JDLFVBQVU7WUFBYUMsV0FBVztRQUFPO1FBQ2pFO1lBQUVGLE1BQU07WUFBZ0JDLFVBQVU7WUFBVUMsV0FBVztRQUFPO1FBQzlEO1lBQUVGLE1BQU07WUFBZ0JDLFVBQVU7WUFBV0MsV0FBVztRQUFPO0tBQ2hFO0FBQ0giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ncm93dGgtbWFya2V0aW5nLWFzc2lzdGFudC8uL3V0aWxzL2ZldGNoSW5mbHVlbmNlcnMuanM/M2Q2YyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gZmV0Y2hJbmZsdWVuY2VycyhjYXRlZ29yeSkge1xuICAgIHJldHVybiBbXG4gICAgICB7IG5hbWU6ICdJbmZsdWVuY2VyIEEnLCBwbGF0Zm9ybTogJ0luc3RhZ3JhbScsIGZvbGxvd2VyczogJzEwMEsnIH0sXG4gICAgICB7IG5hbWU6ICdJbmZsdWVuY2VyIEInLCBwbGF0Zm9ybTogJ1Rpa1RvaycsIGZvbGxvd2VyczogJzE1MEsnIH0sXG4gICAgICB7IG5hbWU6ICdJbmZsdWVuY2VyIEMnLCBwbGF0Zm9ybTogJ1lvdVR1YmUnLCBmb2xsb3dlcnM6ICcyMDBLJyB9LFxuICAgIF07XG4gIH1cbiAgIl0sIm5hbWVzIjpbImZldGNoSW5mbHVlbmNlcnMiLCJjYXRlZ29yeSIsIm5hbWUiLCJwbGF0Zm9ybSIsImZvbGxvd2VycyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./utils/fetchInfluencers.js\n");

/***/ }),

/***/ "(api)/./utils/generatePDF.js":
/*!******************************!*\
  !*** ./utils/generatePDF.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   generatePDF: () => (/* binding */ generatePDF)\n/* harmony export */ });\n/* harmony import */ var pdfkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pdfkit */ \"pdfkit\");\n/* harmony import */ var pdfkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pdfkit__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var get_stream__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! get-stream */ \"get-stream\");\n/* harmony import */ var get_stream__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(get_stream__WEBPACK_IMPORTED_MODULE_1__);\n\n\nasync function generatePDF(data) {\n    const doc = new (pdfkit__WEBPACK_IMPORTED_MODULE_0___default())();\n    doc.fontSize(14).text(`Business Summary: ${data.summary}\\n\\n`);\n    doc.text(\"Marketing Channels:\\n\");\n    data.channels.forEach((c)=>{\n        doc.text(`- ${c.name}: ${c.budget}`);\n    });\n    doc.text(\"\\nInfluencer Suggestions:\\n\");\n    data.influencers.forEach((i)=>{\n        doc.text(`- ${i.name} (${i.platform} – ${i.followers})`);\n    });\n    doc.end();\n    const buffer = await get_stream__WEBPACK_IMPORTED_MODULE_1___default().buffer(doc);\n    return buffer.toString(\"base64\");\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi91dGlscy9nZW5lcmF0ZVBERi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFpQztBQUNFO0FBRTVCLGVBQWVFLFlBQVlDLElBQUk7SUFDcEMsTUFBTUMsTUFBTSxJQUFJSiwrQ0FBV0E7SUFDM0JJLElBQUlDLFFBQVEsQ0FBQyxJQUFJQyxJQUFJLENBQUMsQ0FBQyxrQkFBa0IsRUFBRUgsS0FBS0ksT0FBTyxDQUFDLElBQUksQ0FBQztJQUM3REgsSUFBSUUsSUFBSSxDQUFDO0lBQ1RILEtBQUtLLFFBQVEsQ0FBQ0MsT0FBTyxDQUFDLENBQUNDO1FBQ3JCTixJQUFJRSxJQUFJLENBQUMsQ0FBQyxFQUFFLEVBQUVJLEVBQUVDLElBQUksQ0FBQyxFQUFFLEVBQUVELEVBQUVFLE1BQU0sQ0FBQyxDQUFDO0lBQ3JDO0lBQ0FSLElBQUlFLElBQUksQ0FBQztJQUNUSCxLQUFLVSxXQUFXLENBQUNKLE9BQU8sQ0FBQyxDQUFDSztRQUN4QlYsSUFBSUUsSUFBSSxDQUFDLENBQUMsRUFBRSxFQUFFUSxFQUFFSCxJQUFJLENBQUMsRUFBRSxFQUFFRyxFQUFFQyxRQUFRLENBQUMsR0FBRyxFQUFFRCxFQUFFRSxTQUFTLENBQUMsQ0FBQyxDQUFDO0lBQ3pEO0lBQ0FaLElBQUlhLEdBQUc7SUFDUCxNQUFNQyxTQUFTLE1BQU1qQix3REFBZ0IsQ0FBQ0c7SUFDdEMsT0FBT2MsT0FBT0MsUUFBUSxDQUFDO0FBQ3pCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ3Jvd3RoLW1hcmtldGluZy1hc3Npc3RhbnQvLi91dGlscy9nZW5lcmF0ZVBERi5qcz81NzkxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQREZEb2N1bWVudCBmcm9tICdwZGZraXQnO1xuaW1wb3J0IGdldFN0cmVhbSBmcm9tICdnZXQtc3RyZWFtJztcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdlbmVyYXRlUERGKGRhdGEpIHtcbiAgY29uc3QgZG9jID0gbmV3IFBERkRvY3VtZW50KCk7XG4gIGRvYy5mb250U2l6ZSgxNCkudGV4dChgQnVzaW5lc3MgU3VtbWFyeTogJHtkYXRhLnN1bW1hcnl9XFxuXFxuYCk7XG4gIGRvYy50ZXh0KCdNYXJrZXRpbmcgQ2hhbm5lbHM6XFxuJyk7XG4gIGRhdGEuY2hhbm5lbHMuZm9yRWFjaCgoYykgPT4ge1xuICAgIGRvYy50ZXh0KGAtICR7Yy5uYW1lfTogJHtjLmJ1ZGdldH1gKTtcbiAgfSk7XG4gIGRvYy50ZXh0KCdcXG5JbmZsdWVuY2VyIFN1Z2dlc3Rpb25zOlxcbicpO1xuICBkYXRhLmluZmx1ZW5jZXJzLmZvckVhY2goKGkpID0+IHtcbiAgICBkb2MudGV4dChgLSAke2kubmFtZX0gKCR7aS5wbGF0Zm9ybX0g4oCTICR7aS5mb2xsb3dlcnN9KWApO1xuICB9KTtcbiAgZG9jLmVuZCgpO1xuICBjb25zdCBidWZmZXIgPSBhd2FpdCBnZXRTdHJlYW0uYnVmZmVyKGRvYyk7XG4gIHJldHVybiBidWZmZXIudG9TdHJpbmcoJ2Jhc2U2NCcpO1xufVxuIl0sIm5hbWVzIjpbIlBERkRvY3VtZW50IiwiZ2V0U3RyZWFtIiwiZ2VuZXJhdGVQREYiLCJkYXRhIiwiZG9jIiwiZm9udFNpemUiLCJ0ZXh0Iiwic3VtbWFyeSIsImNoYW5uZWxzIiwiZm9yRWFjaCIsImMiLCJuYW1lIiwiYnVkZ2V0IiwiaW5mbHVlbmNlcnMiLCJpIiwicGxhdGZvcm0iLCJmb2xsb3dlcnMiLCJlbmQiLCJidWZmZXIiLCJ0b1N0cmluZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./utils/generatePDF.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/generatePlan.js"));
module.exports = __webpack_exports__;

})();