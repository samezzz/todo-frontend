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

/***/ "(app-client)/./components/crud.ts":
/*!****************************!*\
  !*** ./components/crud.ts ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DELETE_TODO\": function() { return /* binding */ DELETE_TODO; },\n/* harmony export */   \"GET_TODOS\": function() { return /* binding */ GET_TODOS; },\n/* harmony export */   \"GET_UPDATED_TODO\": function() { return /* binding */ GET_UPDATED_TODO; },\n/* harmony export */   \"UPDATE_TODO\": function() { return /* binding */ UPDATE_TODO; },\n/* harmony export */   \"getData\": function() { return /* binding */ getData; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"(app-client)/./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../apollo-client */ \"(app-client)/./apollo-client.ts\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client */ \"(app-client)/./node_modules/graphql-tag/lib/index.js\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  query todos {\\n    todos {\\n    id\\n    title\\n    isFinished\\n  }\\n  }\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n        mutation ($id: Int!, $isFinished: Boolean!) {\\n          updateTodo(id: $id, isFinished: $isFinished) {\\n            todo{\\n                id\\n                title\\n                isFinished\\n            }\\n          }\\n        }\\n      \"\n    ]);\n    _templateObject1 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n              query GetTodo($id: Int!){\\n                todos(id: $id) {\\n                  id\\n                  title\\n                  isFinished\\n                }\\n              }\\n            \"\n    ]);\n    _templateObject2 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n          mutation ($id:Int!) {\\n            deleteTodo(id: $id) {\\n              message\\n          }\\n}\\n\"\n    ]);\n    _templateObject3 = function() {\n        return data;\n    };\n    return data;\n}\n\n\nasync function getData() {\n    const { data  } = await _apollo_client__WEBPACK_IMPORTED_MODULE_1__[\"default\"].query({\n        query: GET_TODOS\n    });\n    return {\n        todos: data.todos\n    };\n}\nconst GET_TODOS = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_2__.gql)(_templateObject());\nconst UPDATE_TODO = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_2__.gql)(_templateObject1());\nconst GET_UPDATED_TODO = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_2__.gql)(_templateObject2());\nconst DELETE_TODO = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_2__.gql)(_templateObject3());\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vY29tcG9uZW50cy9jcnVkLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBc0M7QUFDRDtBQUk5QixlQUFlRSxVQUFVO0lBQzlCLE1BQU0sRUFBRUMsS0FBSSxFQUFFLEdBQUcsTUFBTUgsNERBQVksQ0FBQztRQUNsQ0ksT0FBT0M7SUFDVDtJQUVBLE9BQU87UUFDTEMsT0FBT0gsS0FBS0csS0FBSztJQUNuQjtBQUNGLENBQUM7QUFFTSxNQUFNRCxZQUFZSixtREFBR0Esb0JBUTNCO0FBRU0sTUFBTU0sY0FBY04sbURBQUdBLHFCQVV2QjtBQUVBLE1BQU1PLG1CQUFtQlAsbURBQUdBLHFCQVF0QjtBQUVOLE1BQU1RLGNBQWNSLG1EQUFHQSxxQkFNN0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jcnVkLnRzPzNmNmIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNsaWVudCBmcm9tICcuLi9hcG9sbG8tY2xpZW50JztcclxuaW1wb3J0IHsgZ3FsIH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xyXG5cclxuXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RGF0YSgpIHtcclxuICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGNsaWVudC5xdWVyeSh7XHJcbiAgICBxdWVyeTogR0VUX1RPRE9TLFxyXG4gIH0pO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgdG9kb3M6IGRhdGEudG9kb3MsXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEdFVF9UT0RPUyA9IGdxbGBcclxuICBxdWVyeSB0b2RvcyB7XHJcbiAgICB0b2RvcyB7XHJcbiAgICBpZFxyXG4gICAgdGl0bGVcclxuICAgIGlzRmluaXNoZWRcclxuICB9XHJcbiAgfVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgVVBEQVRFX1RPRE8gPSBncWxgXHJcbiAgICAgICAgbXV0YXRpb24gKCRpZDogSW50ISwgJGlzRmluaXNoZWQ6IEJvb2xlYW4hKSB7XHJcbiAgICAgICAgICB1cGRhdGVUb2RvKGlkOiAkaWQsIGlzRmluaXNoZWQ6ICRpc0ZpbmlzaGVkKSB7XHJcbiAgICAgICAgICAgIHRvZG97XHJcbiAgICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICAgICAgdGl0bGVcclxuICAgICAgICAgICAgICAgIGlzRmluaXNoZWRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgYFxyXG5cclxuZXhwb3J0IGNvbnN0IEdFVF9VUERBVEVEX1RPRE8gPSBncWxgXHJcbiAgICAgICAgICAgICAgcXVlcnkgR2V0VG9kbygkaWQ6IEludCEpe1xyXG4gICAgICAgICAgICAgICAgdG9kb3MoaWQ6ICRpZCkge1xyXG4gICAgICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICAgICAgICB0aXRsZVxyXG4gICAgICAgICAgICAgICAgICBpc0ZpbmlzaGVkXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgXHJcblxyXG5leHBvcnQgY29uc3QgREVMRVRFX1RPRE8gPSBncWxgXHJcbiAgICAgICAgICBtdXRhdGlvbiAoJGlkOkludCEpIHtcclxuICAgICAgICAgICAgZGVsZXRlVG9kbyhpZDogJGlkKSB7XHJcbiAgICAgICAgICAgICAgbWVzc2FnZVxyXG4gICAgICAgICAgfVxyXG59XHJcbmBcclxuIl0sIm5hbWVzIjpbImNsaWVudCIsImdxbCIsImdldERhdGEiLCJkYXRhIiwicXVlcnkiLCJHRVRfVE9ET1MiLCJ0b2RvcyIsIlVQREFURV9UT0RPIiwiR0VUX1VQREFURURfVE9ETyIsIkRFTEVURV9UT0RPIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./components/crud.ts\n"));

/***/ })

});