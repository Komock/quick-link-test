(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["second-second-module"],{

/***/ "7gtz":
/*!********************************************!*\
  !*** ./src/app/second/second.component.ts ***!
  \********************************************/
/*! exports provided: SecondComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecondComponent", function() { return SecondComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class SecondComponent {
    constructor() { }
    ngOnInit() {
    }
}
SecondComponent.ɵfac = function SecondComponent_Factory(t) { return new (t || SecondComponent)(); };
SecondComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SecondComponent, selectors: [["app-second"]], decls: 2, vars: 0, template: function SecondComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " second works!\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZWNvbmQuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SecondComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-second',
                templateUrl: './second.component.html',
                styleUrls: ['./second.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "eGuW":
/*!*****************************************!*\
  !*** ./src/app/second/second.module.ts ***!
  \*****************************************/
/*! exports provided: SecondModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecondModule", function() { return SecondModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _second_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./second.component */ "7gtz");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared.module */ "PCNd");







class SecondModule {
}
SecondModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SecondModule });
SecondModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SecondModule_Factory(t) { return new (t || SecondModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([{
                    path: '',
                    component: _second_component__WEBPACK_IMPORTED_MODULE_2__["SecondComponent"],
                    redirectTo: 'third',
                }, {
                    path: 'third',
                    loadChildren: () => __webpack_require__.e(/*! import() | third-third-module */ "third-third-module").then(__webpack_require__.bind(null, /*! ../third/third.module */ "iRuB")).then(m => m.ThirdModule),
                }]),
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SecondModule, { declarations: [_second_component__WEBPACK_IMPORTED_MODULE_2__["SecondComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SecondModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([{
                            path: '',
                            component: _second_component__WEBPACK_IMPORTED_MODULE_2__["SecondComponent"],
                            redirectTo: 'third',
                        }, {
                            path: 'third',
                            loadChildren: () => __webpack_require__.e(/*! import() | third-third-module */ "third-third-module").then(__webpack_require__.bind(null, /*! ../third/third.module */ "iRuB")).then(m => m.ThirdModule),
                        }]),
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                ],
                declarations: [_second_component__WEBPACK_IMPORTED_MODULE_2__["SecondComponent"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=second-second-module.js.map