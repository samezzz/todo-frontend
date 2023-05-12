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

/***/ "(app-client)/./components/TaskItem.tsx":
/*!*********************************!*\
  !*** ./components/TaskItem.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-client)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/fa */ \"(app-client)/./node_modules/react-icons/fa/index.esm.js\");\n/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-icons/ai */ \"(app-client)/./node_modules/react-icons/ai/index.esm.js\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../apollo-client */ \"(app-client)/./apollo-client.ts\");\n/* harmony import */ var _AnimatedCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AnimatedCheck */ \"(app-client)/./components/AnimatedCheck.tsx\");\n/* harmony import */ var _crud__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./crud */ \"(app-client)/./components/crud.ts\");\n/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Input */ \"(app-client)/./components/Input.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst TaskItem = async (param)=>{\n    let { data  } = param;\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(data.title);\n    const [isFinished, setIsFinished] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(data.isFinished);\n    const [isEditing, setIsEditing] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [isLoading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleUpdateTask = async (id, refresh)=>{\n        setLoading(true);\n        if (id && id.id) {\n            await _apollo_client__WEBPACK_IMPORTED_MODULE_3__[\"default\"].mutate({\n                mutation: _crud__WEBPACK_IMPORTED_MODULE_5__.UPDATE_TODO,\n                variables: {\n                    id: id.id,\n                    isFinished: !isFinished\n                },\n                update: (cache, param)=>{\n                    let { data  } = param;\n                    cache.writeQuery({\n                        query: _crud__WEBPACK_IMPORTED_MODULE_5__.GET_UPDATED_TODO,\n                        data: {\n                            todos: {\n                                isFinished: data.isFinished,\n                                id: id.id,\n                                title: data.title\n                            }\n                        },\n                        variables: {\n                            id: id.id\n                        }\n                    });\n                    const cachedTodos = cache.readQuery({\n                        query: _crud__WEBPACK_IMPORTED_MODULE_5__.GET_TODOS\n                    });\n                    if (!cachedTodos) return;\n                    const updatedTodos = cachedTodos.todos.map((todo)=>{\n                        if (todo.id === id.id) {\n                            return {\n                                ...todo,\n                                isFinished: data.isFinished\n                            };\n                        }\n                        return todo;\n                    });\n                    cache.writeQuery({\n                        query: _crud__WEBPACK_IMPORTED_MODULE_5__.GET_TODOS,\n                        data: {\n                            todos: updatedTodos\n                        }\n                    });\n                },\n                refetchQueries: [\n                    {\n                        query: _crud__WEBPACK_IMPORTED_MODULE_5__.GET_TODOS\n                    }\n                ]\n            });\n            setIsFinished(!isFinished);\n            setIsEditing(false);\n            setLoading(false);\n        }\n    };\n    const handleDeleteTask = async (id, refresh)=>{\n        setLoading(true);\n        try {\n            if (id && id.id) {\n                const intId = parseInt(id.id);\n                await _apollo_client__WEBPACK_IMPORTED_MODULE_3__[\"default\"].mutate({\n                    mutation: _crud__WEBPACK_IMPORTED_MODULE_5__.DELETE_TODO,\n                    variables: {\n                        id: intId\n                    },\n                    update: (cache, param)=>{\n                        let { data  } = param;\n                        const cachedTodos = cache.readQuery({\n                            query: _crud__WEBPACK_IMPORTED_MODULE_5__.GET_TODOS\n                        });\n                        if (!cachedTodos) return;\n                        const updatedTodos = cachedTodos.todos.filter((todo)=>todo.id !== intId);\n                        cache.writeQuery({\n                            query: _crud__WEBPACK_IMPORTED_MODULE_5__.GET_TODOS,\n                            data: {\n                                todos: updatedTodos\n                            }\n                        });\n                    },\n                    refetchQueries: [\n                        {\n                            query: _crud__WEBPACK_IMPORTED_MODULE_5__.GET_TODOS\n                        }\n                    ]\n                });\n            }\n        } catch (error) {\n            console.log(error);\n        }\n        setLoading(false);\n        refresh();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex bg-white dark:bg-[#1c1c1c] p-2 mb-2 last:mb-0 rounded cursor-pointer\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"basis-8 mr-2\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AnimatedCheck__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    checked: isFinished,\n                    toggle: ()=>handleUpdateTask({\n                            id: data.id\n                        }, router.refresh)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Samuel\\\\Desktop\\\\todoApp\\\\frontend\\\\components\\\\TaskItem.tsx\",\n                    lineNumber: 99,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Samuel\\\\Desktop\\\\todoApp\\\\frontend\\\\components\\\\TaskItem.tsx\",\n                lineNumber: 98,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: (e)=>{\n                    e.preventDefault();\n                    handleUpdateTask({\n                        id: data.id,\n                        title,\n                        isFinished: !isFinished\n                    }, router.refresh);\n                },\n                className: \"flex flex-1\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Input__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        name: \"todo\",\n                        value: title,\n                        disabled: isFinished,\n                        onChange: (value)=>{\n                            setTitle(value);\n                            setIsEditing(true);\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Samuel\\\\Desktop\\\\todoApp\\\\frontend\\\\components\\\\TaskItem.tsx\",\n                        lineNumber: 105,\n                        columnNumber: 9\n                    }, undefined),\n                    !isLoading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: [\n                            isFinished && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                type: \"button\",\n                                title: \"delete\",\n                                onClick: ()=>handleDeleteTask({\n                                        id: data.id\n                                    }, router.refresh),\n                                className: \"text-red-500 text-sm px-2 ml-2 cursor-pointer hover:bg-black/10 dark:hover:bg-black/50 rounded\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_7__.FaTrash, {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Samuel\\\\Desktop\\\\todoApp\\\\frontend\\\\components\\\\TaskItem.tsx\",\n                                    lineNumber: 114,\n                                    columnNumber: 19\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Samuel\\\\Desktop\\\\todoApp\\\\frontend\\\\components\\\\TaskItem.tsx\",\n                                lineNumber: 113,\n                                columnNumber: 17\n                            }, undefined),\n                            isEditing && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                type: \"submit\",\n                                title: \"editing\",\n                                className: \"text-[#0b9219] text-sm px-2 ml-2 cursor-pointer hover:bg-black/10 dark:hover:bg-black/50 rounded\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_7__.FaEdit, {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Samuel\\\\Desktop\\\\todoApp\\\\frontend\\\\components\\\\TaskItem.tsx\",\n                                    lineNumber: 121,\n                                    columnNumber: 19\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Samuel\\\\Desktop\\\\todoApp\\\\frontend\\\\components\\\\TaskItem.tsx\",\n                                lineNumber: 120,\n                                columnNumber: 17\n                            }, undefined)\n                        ]\n                    }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"grid place-items-center text-blue-500 text-lg font-bold ml-2 w-8 h-8 animate-spin\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_8__.AiOutlineLoading3Quarters, {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Samuel\\\\Desktop\\\\todoApp\\\\frontend\\\\components\\\\TaskItem.tsx\",\n                            lineNumber: 128,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Samuel\\\\Desktop\\\\todoApp\\\\frontend\\\\components\\\\TaskItem.tsx\",\n                        lineNumber: 127,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Samuel\\\\Desktop\\\\todoApp\\\\frontend\\\\components\\\\TaskItem.tsx\",\n                lineNumber: 101,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Samuel\\\\Desktop\\\\todoApp\\\\frontend\\\\components\\\\TaskItem.tsx\",\n        lineNumber: 97,\n        columnNumber: 5\n    }, undefined);\n};\n_s(TaskItem, \"LhPWQv3E4i6MmcekuosxkpAFhEk=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = TaskItem;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TaskItem);\nvar _c;\n$RefreshReg$(_c, \"TaskItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs0QkFLWmlCLDJCQUNFLDhEQUFDd0M7Z0NBQU9DLE1BQUs7Z0NBQVM3QyxPQUFNO2dDQUFVaUMsV0FBVTswQ0FDOUMsNEVBQUM3QyxrREFBTUE7Ozs7Ozs7Ozs7O3FEQU1qQiw4REFBQzRDO3dCQUFJQyxXQUFVO2tDQUNiLDRFQUFDNUMscUVBQXlCQTs7Ozs7Ozs7O2lDQUV6Qjs7Ozs7Ozs7Ozs7OztBQUtYO0dBdEhNUTs7UUFDV1gsc0RBQVNBOzs7S0FEcEJXO0FBd0hOLCtEQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvVGFza0l0ZW0udHN4PzNlZmQiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xyXG5cclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L25hdmlnYXRpb24nO1xyXG5pbXBvcnQgeyBGYVRyYXNoLCBGYUVkaXQgfSBmcm9tICdyZWFjdC1pY29ucy9mYSc7XHJcbmltcG9ydCB7IEFpT3V0bGluZUxvYWRpbmczUXVhcnRlcnMgfSBmcm9tICdyZWFjdC1pY29ucy9haSc7XHJcbmltcG9ydCBjbGllbnQgZnJvbSAnLi4vYXBvbGxvLWNsaWVudCc7XHJcbmltcG9ydCB7IFRvZG9UeXBlIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9pbmRleCc7XHJcbmltcG9ydCBBbmltYXRlZENoZWNrIGZyb20gJy4vQW5pbWF0ZWRDaGVjayc7XHJcbmltcG9ydCB7IFVQREFURV9UT0RPLCBHRVRfVVBEQVRFRF9UT0RPLCBHRVRfVE9ET1MsIERFTEVURV9UT0RPIH0gZnJvbSAnLi9jcnVkJztcclxuaW1wb3J0IElucHV0IGZyb20gJy4vSW5wdXQnO1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICBkYXRhOiBUb2RvVHlwZTtcclxufVxyXG5cclxuY29uc3QgVGFza0l0ZW06IFJlYWN0LkZDPFByb3BzPiA9IGFzeW5jICh7ZGF0YX0pID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBbdGl0bGUsIHNldFRpdGxlXSA9IHVzZVN0YXRlPHN0cmluZz4oZGF0YS50aXRsZSk7XHJcbiAgY29uc3QgW2lzRmluaXNoZWQsIHNldElzRmluaXNoZWRdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZGF0YS5pc0ZpbmlzaGVkKTtcclxuICBjb25zdCBbaXNFZGl0aW5nLCBzZXRJc0VkaXRpbmddID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG4gIFxyXG5cclxuICBjb25zdCBoYW5kbGVVcGRhdGVUYXNrID0gYXN5bmMgKGlkOiBQYXJ0aWFsPFRvZG9UeXBlPiwgcmVmcmVzaDogKCkgPT4gdm9pZCkgPT4ge1xyXG4gICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgIGlmIChpZCAmJiBpZC5pZCkge1xyXG4gICAgICBhd2FpdCBjbGllbnQubXV0YXRlKHtcclxuICAgICAgICBtdXRhdGlvbjogVVBEQVRFX1RPRE8sXHJcbiAgICAgICAgdmFyaWFibGVzOiB7XHJcbiAgICAgICAgICBpZDogaWQuaWQsXHJcbiAgICAgICAgICBpc0ZpbmlzaGVkOiAhaXNGaW5pc2hlZFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdXBkYXRlOiAoY2FjaGUsIHsgZGF0YSB9KSA9PiB7XHJcbiAgICAgICAgICBjYWNoZS53cml0ZVF1ZXJ5KHtcclxuICAgICAgICAgICAgcXVlcnk6IEdFVF9VUERBVEVEX1RPRE8sXHJcbiAgICAgICAgICAgIGRhdGE6IHsgdG9kb3M6IHtpc0ZpbmlzaGVkOiBkYXRhLmlzRmluaXNoZWQsIGlkOiBpZC5pZCwgdGl0bGU6IGRhdGEudGl0bGV9IH0sXHJcbiAgICAgICAgICAgIHZhcmlhYmxlczogeyBpZDogaWQuaWQgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBjb25zdCBjYWNoZWRUb2RvcyA9IGNhY2hlLnJlYWRRdWVyeSh7IHF1ZXJ5OiBHRVRfVE9ET1MgfSk7XHJcbiAgICAgICAgICBpZiAoIWNhY2hlZFRvZG9zKSByZXR1cm47XHJcbiAgICAgICAgICBjb25zdCB1cGRhdGVkVG9kb3MgPSBjYWNoZWRUb2Rvcy50b2Rvcy5tYXAoKHRvZG86IFRvZG9UeXBlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0b2RvLmlkID09PSBpZC5pZCkge1xyXG4gICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi50b2RvLFxyXG4gICAgICAgICAgICAgICAgaXNGaW5pc2hlZDogZGF0YS5pc0ZpbmlzaGVkXHJcbiAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdG9kbztcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgY2FjaGUud3JpdGVRdWVyeSh7XHJcbiAgICAgICAgICAgIHF1ZXJ5OiBHRVRfVE9ET1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHsgdG9kb3M6IHVwZGF0ZWRUb2RvcyB9LFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICByZWZldGNoUXVlcmllczogW3sgcXVlcnk6IEdFVF9UT0RPUyB9XVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHNldElzRmluaXNoZWQoIWlzRmluaXNoZWQpO1xyXG4gICAgICBzZXRJc0VkaXRpbmcoZmFsc2UpO1xyXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVEZWxldGVUYXNrID0gYXN5bmMgKGlkOiBQYXJ0aWFsPFRvZG9UeXBlPiwgcmVmcmVzaDogKCkgPT4gdm9pZCkgPT4ge1xyXG4gICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGlmIChpZCAmJiBpZC5pZCkge1xyXG4gICAgICAgIGNvbnN0IGludElkID0gcGFyc2VJbnQoaWQuaWQpO1xyXG4gICAgICAgIGF3YWl0IGNsaWVudC5tdXRhdGUoe1xyXG4gICAgICAgICAgbXV0YXRpb246IERFTEVURV9UT0RPLFxyXG4gICAgICAgICAgdmFyaWFibGVzOiB7XHJcbiAgICAgICAgICAgIGlkOiBpbnRJZCxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB1cGRhdGU6IChjYWNoZSwgeyBkYXRhIH0pID0+IHtcclxuICAgICAgICAgICAgY29uc3QgY2FjaGVkVG9kb3MgPSBjYWNoZS5yZWFkUXVlcnkoeyBxdWVyeTogR0VUX1RPRE9TIH0pO1xyXG4gICAgICAgICAgICBpZiAoIWNhY2hlZFRvZG9zKSByZXR1cm47XHJcbiAgICAgICAgICAgIGNvbnN0IHVwZGF0ZWRUb2RvcyA9IGNhY2hlZFRvZG9zLnRvZG9zLmZpbHRlcigodG9kbzogVG9kb1R5cGUpID0+IHRvZG8uaWQgIT09IGludElkKTtcclxuICAgICAgICAgICAgY2FjaGUud3JpdGVRdWVyeSh7XHJcbiAgICAgICAgICAgICAgcXVlcnk6IEdFVF9UT0RPUyxcclxuICAgICAgICAgICAgICBkYXRhOiB7IHRvZG9zOiB1cGRhdGVkVG9kb3MgfSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgcmVmZXRjaFF1ZXJpZXM6IFt7IHF1ZXJ5OiBHRVRfVE9ET1MgfV1cclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgfVxyXG4gICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICByZWZyZXNoKCk7XHJcbiAgfTtcclxuXHJcblxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGJnLXdoaXRlIGRhcms6YmctWyMxYzFjMWNdIHAtMiBtYi0yIGxhc3Q6bWItMCByb3VuZGVkIGN1cnNvci1wb2ludGVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFzaXMtOCBtci0yXCI+XHJcbiAgICAgICAgPEFuaW1hdGVkQ2hlY2sgY2hlY2tlZD17aXNGaW5pc2hlZH0gdG9nZ2xlPXsoKSA9PiBoYW5kbGVVcGRhdGVUYXNrKHtpZDogZGF0YS5pZH0sIHJvdXRlci5yZWZyZXNoKX0gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxmb3JtIG9uU3VibWl0PXsoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBoYW5kbGVVcGRhdGVUYXNrKHtpZDogZGF0YS5pZCwgdGl0bGUsIGlzRmluaXNoZWQ6ICFpc0ZpbmlzaGVkfSwgcm91dGVyLnJlZnJlc2gpXHJcbiAgICAgIH19IGNsYXNzTmFtZT1cImZsZXggZmxleC0xXCI+XHJcbiAgICAgICAgPElucHV0IG5hbWU9XCJ0b2RvXCIgdmFsdWU9e3RpdGxlfSBkaXNhYmxlZD17aXNGaW5pc2hlZH0gb25DaGFuZ2U9e3ZhbHVlID0+IHtcclxuICAgICAgICAgIHNldFRpdGxlKHZhbHVlKTtcclxuICAgICAgICAgIHNldElzRWRpdGluZyh0cnVlKTtcclxuICAgICAgICB9fSAvPlxyXG4gICAgICAgIHshaXNMb2FkaW5nID8gKFxyXG4gICAgICAgICAgPD5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGlzRmluaXNoZWQgJiYgKFxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPSdidXR0b24nIHRpdGxlPVwiZGVsZXRlXCIgb25DbGljaz17KCkgPT4gaGFuZGxlRGVsZXRlVGFzayh7aWQ6IGRhdGEuaWR9LCByb3V0ZXIucmVmcmVzaCl9IGNsYXNzTmFtZT1cInRleHQtcmVkLTUwMCB0ZXh0LXNtIHB4LTIgbWwtMiBjdXJzb3ItcG9pbnRlciBob3ZlcjpiZy1ibGFjay8xMCBkYXJrOmhvdmVyOmJnLWJsYWNrLzUwIHJvdW5kZWRcIj5cclxuICAgICAgICAgICAgICAgICAgPEZhVHJhc2ggLz5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgaXNFZGl0aW5nICYmIChcclxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT0nc3VibWl0JyB0aXRsZT1cImVkaXRpbmdcIiBjbGFzc05hbWU9XCJ0ZXh0LVsjMGI5MjE5XSB0ZXh0LXNtIHB4LTIgbWwtMiBjdXJzb3ItcG9pbnRlciBob3ZlcjpiZy1ibGFjay8xMCBkYXJrOmhvdmVyOmJnLWJsYWNrLzUwIHJvdW5kZWRcIj5cclxuICAgICAgICAgICAgICAgICAgPEZhRWRpdCAvPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICA8Lz5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIHBsYWNlLWl0ZW1zLWNlbnRlciB0ZXh0LWJsdWUtNTAwIHRleHQtbGcgZm9udC1ib2xkIG1sLTIgdy04IGgtOCBhbmltYXRlLXNwaW5cIj5cclxuICAgICAgICAgIDxBaU91dGxpbmVMb2FkaW5nM1F1YXJ0ZXJzIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApXHJcbiAgICAgICAgfVxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGFza0l0ZW07XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlUm91dGVyIiwiRmFUcmFzaCIsIkZhRWRpdCIsIkFpT3V0bGluZUxvYWRpbmczUXVhcnRlcnMiLCJjbGllbnQiLCJBbmltYXRlZENoZWNrIiwiVVBEQVRFX1RPRE8iLCJHRVRfVVBEQVRFRF9UT0RPIiwiR0VUX1RPRE9TIiwiREVMRVRFX1RPRE8iLCJJbnB1dCIsIlRhc2tJdGVtIiwiZGF0YSIsInJvdXRlciIsInRpdGxlIiwic2V0VGl0bGUiLCJpc0ZpbmlzaGVkIiwic2V0SXNGaW5pc2hlZCIsImlzRWRpdGluZyIsInNldElzRWRpdGluZyIsImlzTG9hZGluZyIsInNldExvYWRpbmciLCJoYW5kbGVVcGRhdGVUYXNrIiwiaWQiLCJyZWZyZXNoIiwibXV0YXRlIiwibXV0YXRpb24iLCJ2YXJpYWJsZXMiLCJ1cGRhdGUiLCJjYWNoZSIsIndyaXRlUXVlcnkiLCJxdWVyeSIsInRvZG9zIiwiY2FjaGVkVG9kb3MiLCJyZWFkUXVlcnkiLCJ1cGRhdGVkVG9kb3MiLCJtYXAiLCJ0b2RvIiwicmVmZXRjaFF1ZXJpZXMiLCJoYW5kbGVEZWxldGVUYXNrIiwiaW50SWQiLCJwYXJzZUludCIsImZpbHRlciIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsImNoZWNrZWQiLCJ0b2dnbGUiLCJmb3JtIiwib25TdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJuYW1lIiwidmFsdWUiLCJkaXNhYmxlZCIsIm9uQ2hhbmdlIiwiYnV0dG9uIiwidHlwZSIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./components/TaskItem.tsx\n"));

/***/ })

});