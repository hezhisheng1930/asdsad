"use strict";
(self["webpackChunkWEBPACKStudy"] = self["webpackChunkWEBPACKStudy"] || []).push([[179],{

/***/ 4624:
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {


// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/react-dom/client.js
var client = __webpack_require__(745);
// EXTERNAL MODULE: ./node_modules/react-router-config/esm/react-router-config.js + 1 modules
var react_router_config = __webpack_require__(1139);
;// CONCATENATED MODULE: ./src/Router/exportFile.tsx

var App = (0,react.lazy)(function () { return Promise.all(/* import() */[__webpack_require__.e(860), __webpack_require__.e(338)]).then(__webpack_require__.bind(__webpack_require__, 8957)); });
var Home = (0,react.lazy)(function () { return __webpack_require__.e(/* import() */ 741).then(__webpack_require__.bind(__webpack_require__, 7741)); });
var About = (0,react.lazy)(function () { return __webpack_require__.e(/* import() */ 752).then(__webpack_require__.bind(__webpack_require__, 3752)); });


;// CONCATENATED MODULE: ./src/Router/index.tsx

var routes = [
    {
        path: '/',
        component: App,
        routes: [
            {
                path: '/home',
                component: Home
            },
            {
                path: '/:id',
                component: About
            }
        ]
    },
];
/* harmony default export */ var Router = (routes);

// EXTERNAL MODULE: ./node_modules/react-router-dom/esm/react-router-dom.js + 4 modules
var react_router_dom = __webpack_require__(76);
;// CONCATENATED MODULE: ./src/index.tsx







var app = (0,jsx_runtime.jsx)(react_router_dom/* BrowserRouter */.VK, { children: (0,react_router_config/* renderRoutes */.H)(Router) });
var root = client.createRoot(document.getElementById('app'));
root.render(app);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, [985,837], function() { return __webpack_exec__(4624); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.c58c2c82a8.js.map