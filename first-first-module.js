(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["first-first-module"],{

/***/ "0ozE":
/*!***************************************!*\
  !*** ./src/app/first/first.module.ts ***!
  \***************************************/
/*! exports provided: FirstModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirstModule", function() { return FirstModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _first_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./first.component */ "21Ks");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared.module */ "PCNd");







class FirstModule {
}
FirstModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: FirstModule });
FirstModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function FirstModule_Factory(t) { return new (t || FirstModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([{
                    path: '',
                    component: _first_component__WEBPACK_IMPORTED_MODULE_2__["FirstComponent"]
                }, {
                    path: 'second',
                    loadChildren: () => __webpack_require__.e(/*! import() | second-second-module */ "second-second-module").then(__webpack_require__.bind(null, /*! ../second/second.module */ "eGuW")).then(m => m.SecondModule),
                }]),
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FirstModule, { declarations: [_first_component__WEBPACK_IMPORTED_MODULE_2__["FirstComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FirstModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([{
                            path: '',
                            component: _first_component__WEBPACK_IMPORTED_MODULE_2__["FirstComponent"]
                        }, {
                            path: 'second',
                            loadChildren: () => __webpack_require__.e(/*! import() | second-second-module */ "second-second-module").then(__webpack_require__.bind(null, /*! ../second/second.module */ "eGuW")).then(m => m.SecondModule),
                        }]),
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                ],
                declarations: [_first_component__WEBPACK_IMPORTED_MODULE_2__["FirstComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "21Ks":
/*!******************************************!*\
  !*** ./src/app/first/first.component.ts ***!
  \******************************************/
/*! exports provided: FirstComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirstComponent", function() { return FirstComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class FirstComponent {
    constructor() { }
    ngOnInit() {
    }
}
FirstComponent.ɵfac = function FirstComponent_Factory(t) { return new (t || FirstComponent)(); };
FirstComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FirstComponent, selectors: [["app-first"]], decls: 1, vars: 0, template: function FirstComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmaXJzdC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FirstComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-first',
                templateUrl: './first.component.html',
                styleUrls: ['./first.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ })

}]);
//# sourceMappingURL=first-first-module.js.map