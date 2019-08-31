(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["project-project-module"],{

/***/ "./src/app/project/project.module.ts":
/*!*******************************************!*\
  !*** ./src/app/project/project.module.ts ***!
  \*******************************************/
/*! exports provided: ProjectModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectModule", function() { return ProjectModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _projects_overview_projects_overview_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projects-overview/projects-overview.component */ "./src/app/project/projects-overview/projects-overview.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var routes = [
    {
        path: '', component: _projects_overview_projects_overview_component__WEBPACK_IMPORTED_MODULE_3__["ProjectsOverviewComponent"], children: []
    },
];
var ProjectModule = /** @class */ (function () {
    function ProjectModule() {
    }
    ProjectModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_projects_overview_projects_overview_component__WEBPACK_IMPORTED_MODULE_3__["ProjectsOverviewComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            ]
        })
    ], ProjectModule);
    return ProjectModule;
}());



/***/ }),

/***/ "./src/app/project/projects-overview/projects-overview.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/project/projects-overview/projects-overview.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  projects-overview works!\n</p>\n"

/***/ }),

/***/ "./src/app/project/projects-overview/projects-overview.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/project/projects-overview/projects-overview.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3QvcHJvamVjdHMtb3ZlcnZpZXcvcHJvamVjdHMtb3ZlcnZpZXcuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/project/projects-overview/projects-overview.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/project/projects-overview/projects-overview.component.ts ***!
  \**************************************************************************/
/*! exports provided: ProjectsOverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsOverviewComponent", function() { return ProjectsOverviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProjectsOverviewComponent = /** @class */ (function () {
    function ProjectsOverviewComponent() {
    }
    ProjectsOverviewComponent.prototype.ngOnInit = function () {
    };
    ProjectsOverviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-projects-overview',
            template: __webpack_require__(/*! ./projects-overview.component.html */ "./src/app/project/projects-overview/projects-overview.component.html"),
            styles: [__webpack_require__(/*! ./projects-overview.component.scss */ "./src/app/project/projects-overview/projects-overview.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProjectsOverviewComponent);
    return ProjectsOverviewComponent;
}());



/***/ })

}]);
//# sourceMappingURL=project-project-module.js.map