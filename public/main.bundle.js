webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@font-face{\r\n    font-family: milanfont;\r\n    src: url(" + __webpack_require__("../../../../../src/assets/fonts/milantype.woff2") + ");\r\n}\r\n@font-face {\r\n  font-family: milanbold;\r\n  src: url(" + __webpack_require__("../../../../../src/assets/fonts/raleway-bold-webfont.woff2") + ");\r\n}\r\n@font-face {\r\n  font-family: milanregular;\r\n  src: url(" + __webpack_require__("../../../../../src/assets/fonts/raleway-regular-webfont.woff2") + ");\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<div class=\"container-fluid\">\r\n  <div class=\"row\">\r\n    <flash-messages></flash-messages>\r\n    <router-outlet></router-outlet>\r\n</div>\r\n\r\n</div>\r\n<app-footer></app-footer>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let AppComponent = class AppComponent {
    constructor() {
        this.title = 'app';
    }
};
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_useful_swiper__ = __webpack_require__("../../../../angular2-useful-swiper/lib/swiper.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_useful_swiper___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angular2_useful_swiper__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_register_register_component__ = __webpack_require__("../../../../../src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_history_history_component__ = __webpack_require__("../../../../../src/app/components/history/history.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_trophies_trophies_component__ = __webpack_require__("../../../../../src/app/components/trophies/trophies.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_hall_of_fame_hall_of_fame_component__ = __webpack_require__("../../../../../src/app/components/hall-of-fame/hall-of-fame.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_single_history_single_history_component__ = __webpack_require__("../../../../../src/app/components/single-history/single-history.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_single_footballer_single_footballer_component__ = __webpack_require__("../../../../../src/app/components/single-footballer/single-footballer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_single_trophy_single_trophy_component__ = __webpack_require__("../../../../../src/app/components/single-trophy/single-trophy.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_info_component_info_component_component__ = __webpack_require__("../../../../../src/app/components/info-component/info-component.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_pass_data_service__ = __webpack_require__("../../../../../src/app/services/pass-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__services_upload_data_service__ = __webpack_require__("../../../../../src/app/services/upload-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_24_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_footer_footer_component__ = __webpack_require__("../../../../../src/app/components/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__services_text_to_speech_service__ = __webpack_require__("../../../../../src/app/services/text-to-speech.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




























const appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_11__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_10__components_register_register_component__["a" /* RegisterComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_9__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_12__components_dashboard_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_25__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'info', component: __WEBPACK_IMPORTED_MODULE_19__components_info_component_info_component_component__["a" /* InfoComponentComponent */] },
    { path: 'history', component: __WEBPACK_IMPORTED_MODULE_13__components_history_history_component__["a" /* HistoryComponent */] },
    { path: 'trophies', component: __WEBPACK_IMPORTED_MODULE_14__components_trophies_trophies_component__["a" /* TrophiesComponent */] },
    { path: 'hall-of-fame', component: __WEBPACK_IMPORTED_MODULE_15__components_hall_of_fame_hall_of_fame_component__["a" /* HallOfFameComponent */] },
    { path: 'singlehistory', component: __WEBPACK_IMPORTED_MODULE_16__components_single_history_single_history_component__["a" /* SingleHistoryComponent */] },
    { path: 'singlefootballer/:id', component: __WEBPACK_IMPORTED_MODULE_17__components_single_footballer_single_footballer_component__["a" /* SingleFootballerComponent */] },
    { path: 'singletrophy', component: __WEBPACK_IMPORTED_MODULE_18__components_single_trophy_single_trophy_component__["a" /* SingleTrophyComponent */] }
];
let AppModule = class AppModule {
};
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_history_history_component__["a" /* HistoryComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_trophies_trophies_component__["a" /* TrophiesComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_hall_of_fame_hall_of_fame_component__["a" /* HallOfFameComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_single_history_single_history_component__["a" /* SingleHistoryComponent */],
            __WEBPACK_IMPORTED_MODULE_17__components_single_footballer_single_footballer_component__["a" /* SingleFootballerComponent */],
            __WEBPACK_IMPORTED_MODULE_18__components_single_trophy_single_trophy_component__["a" /* SingleTrophyComponent */],
            __WEBPACK_IMPORTED_MODULE_19__components_info_component_info_component_component__["a" /* InfoComponentComponent */],
            __WEBPACK_IMPORTED_MODULE_26__components_footer_footer_component__["a" /* FooterComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["a" /* MaterialModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes, { useHash: true }),
            __WEBPACK_IMPORTED_MODULE_24_angular2_flash_messages__["FlashMessagesModule"],
            __WEBPACK_IMPORTED_MODULE_6_angular2_useful_swiper__["SwiperModule"]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_20__services_validate_service__["a" /* ValidateService */], __WEBPACK_IMPORTED_MODULE_22__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_25__guards_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_23__services_upload_data_service__["a" /* UploadDataService */], __WEBPACK_IMPORTED_MODULE_21__services_pass_data_service__["a" /* PassDataService */], __WEBPACK_IMPORTED_MODULE_27__services_text_to_speech_service__["a" /* TextToSpeechService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\r\n  <h2 class=\"page-header\">Categorie</h2>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-4\">\r\n      <button class=\"btn-dashboard history\" [routerLink]=\"['/history']\">La nostra storia<div class=\"layer\"></div></button>\r\n    </div>\r\n    <div class=\"col-md-4\">\r\n      <button class=\"btn-dashboard trophies\" [routerLink]=\"['/trophies']\">Sala delle coppe</button>\r\n    </div>\r\n    <div class=\"col-md-4\">\r\n      <button class=\"btn-dashboard hall-of-fame\" [routerLink]=\"['/hall-of-fame']\">Hall Of Fame</button>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*--------------------------------\r\n\tMedia Queries\r\n\tused for outputting content either between media query tags\r\n\texample: basic usage\r\n\t.element {\r\n\t\twidth: 50%;\r\n\t\t@include mq('tablet-small') {\r\n\t\t\twidth: 20%;\r\n\t\t}\r\n\t}\r\n\texample: using max-width\r\n\t.element {\r\n\t\twidth: 50%;\r\n\t\t@include mq('tablet-small', 'max') {\r\n\t\t\twidth: 20%;\r\n\t\t}\r\n\t}\r\n*/\n/*--------------------------------\r\n\tMargin / Padding Quick Resets\r\n\texample: top & bottom margin set to $spacing-unit\r\n\t.element {\r\n\t\t@include push--ends;\r\n\t}\r\n\texample: left & right padding set to $spacing-unit--small\r\n\t.element {\r\n\t\t@include soft--sides($spacing-unit--small);\r\n\t}\r\n*/\n/*--------------------------------\r\n\tHelper mixins\r\n*/\n/*--------------------------------\r\n\tForm input placeholder text\r\n\texample:\r\n\tinput,\r\n\ttextarea {\r\n\t\t@include input-placeholder {\r\n\t\t\tcolor: $grey;\r\n\t\t}\r\n\t}\r\n*/\n/*--------------------------------\r\n\tRetina images\r\n\texample:\r\n\t.element {\r\n\t\t@include retina {\r\n\t\t\tbackground-image: url(../img/background@2x.png);\r\n\t\t}\r\n\t}\r\n*/\n/*--------------------------------\r\n\tContent margins\r\n\tfore removing first/last child margins\r\n\texample: default\r\n\t.element {\r\n\t\t@include content-margins;\r\n\t}\r\n\toutput:\r\n\t.element > *:first-child {\r\n\t\tmargin-top: 0;\r\n\t}\r\n\t.element > *:last-child {\r\n\t\tmargin-bottom: 0;\r\n\t}\r\n\texample: empty selector\r\n\t.element {\r\n\t\t@include content-margins('false');\r\n\t}\r\n\toutput:\r\n\t.element:first-child {\r\n\t\tmargin-top: 0;\r\n\t}\r\n\t.element:last-child {\r\n\t\tmargin-bottom: 0;\r\n\t}\r\n*/\n/*--------------------------------\r\n\tCSS Triangle\r\n\tused for creating CSS only triangles\r\n\texample:\r\n\t.element {\r\n\t\t&::before {\r\n\t\t\t@include css-triangle(blue, down);\r\n\t\t}\r\n\t}\r\n*/\n/*--------------------------------\r\n\tHide text\r\n\texample:\r\n\t.element {\r\n\t\t@include hide-text;\r\n\t}\r\n*/\n/*--------------------------------\r\n\tResponsive ratio\r\n\tUsed for creating scalable elements that maintain the same ratio\r\n\texample:\r\n\t.element {\r\n\t\t@include responsive-ratio(400, 300);\r\n\t}\r\n*/\n/*--------------------------------\r\n\tTypography\r\n\tText image replacement, with responsive ratio\r\n\tHTML:\r\n\t<h1 class=\"element\">\r\n\t\t<span>Text to replace</span>\r\n\t</h1>\r\n\texample:\r\n\t.element {\r\n\t\t@include typography(200, 50, 'hello-world');\r\n\t}\r\n*/\n/*--------------------------------\r\n\tIcon\r\n\tFor using fontastic icons in pseudo elements\r\n*/\n/*--------------------------------\r\n\tColours\r\n\tbackground, colour, etc. match up with colour map in _variables.scss\r\n\tmodify to suit per project\r\n*/\n/*--------------------------------\r\n\tMisc\r\n*/\n/*--------------------------------\r\n\tFluid Property\r\n\thttp://www.adrenalinmedia.com.au/the-agency/insights/this-changes-everything-css-fluid-properties.aspx\r\n\tHTML:\r\n\t<h1 class=\"element\">\r\n\t\t<span>Text to replace</span>\r\n\t</h1>\r\n\texample:\r\n\th1 {\r\n\t\t@include fp(font-size, 50, 100); // 50px at 320, 100px at 1920;\r\n\t}\r\n\toutput:\r\n\th1 {\r\n\t\tfont-size: calc(3.125vw + 40px); //This is the magic!\r\n\t}\r\n\t@media (max-width:320px){ //Clips the start to the min value\r\n\t\tfont-size:50px;\r\n\t}\r\n\t@media (min-width:1920px){ //Clips the end to the max value\r\n\t\tfont-size:100px;\r\n\t}\r\n*/\n/* For width smaller than 400px: */\n.content {\n  padding-top: 1%;\n  padding-right: 15px;\n  font-family: milanregular; }\n  @media only screen and (min-width: 768px) {\n    .content {\n      padding: 1% 10%; } }\n  @media only screen and (min-width: 1440px) {\n    .content {\n      padding: 1% 20% !important; } }\n\n.btn-dashboard {\n  font-family: milanfont;\n  border-width: 0px;\n  cursor: pointer;\n  text-align: center;\n  font-weight: bold;\n  font-size: 23px;\n  color: #ffffff;\n  width: 100%;\n  height: 150px; }\n  @media only screen and (min-width: 768px) {\n    .btn-dashboard {\n      height: 200px; } }\n\n.page-header {\n  margin-top: 18px;\n  margin-left: 5%;\n  margin-right: 5%;\n  font-family: milanfont; }\n  @media only screen and (min-width: 768px) {\n    .page-header {\n      margin-left: 0px;\n      margin-right: 0px; } }\n\n.logo {\n  width: 75px;\n  height: 75px; }\n\n.history,\n.trophies,\n.hall-of-fame {\n  background-position: center; }\n\n.history {\n  background-image: url(" + __webpack_require__("../../../../../src/assets/dashboard/history.jpg") + "); }\n\n.history:hover {\n  background: linear-gradient(rgba(168, 0, 0, 0.5), rgba(168, 0, 0, 0.5)), url(" + __webpack_require__("../../../../../src/assets/dashboard/history.jpg") + ");\n  background-position: center; }\n\n.trophies {\n  background-image: url(" + __webpack_require__("../../../../../src/assets/dashboard/trophies.jpg") + ");\n  color: black; }\n\n.hall-of-fame {\n  background-image: url(" + __webpack_require__("../../../../../src/assets/dashboard/halloffame.jpg") + "); }\n\n.trophies:hover {\n  background: linear-gradient(rgba(168, 0, 0, 0.5), rgba(168, 0, 0, 0.5)), url(" + __webpack_require__("../../../../../src/assets/dashboard/trophies.jpg") + ");\n  background-position: center; }\n\n.hall-of-fame:hover {\n  background: linear-gradient(rgba(168, 0, 0, 0.5), rgba(168, 0, 0, 0.5)), url(" + __webpack_require__("../../../../../src/assets/dashboard/halloffame.jpg") + ");\n  background-position: center; }\n\n.col-md-4 {\n  padding-left: 0px;\n  padding-right: 0px; }\n\n.row {\n  padding-left: 0px;\n  padding-right: 0px; }\n  @media only screen and (min-width: 768px) {\n    .row {\n      padding-left: -15px;\n      padding-right: -15px; } }\n\n/*@media only screen and (min-width: 1400px) {\r\n  .content{\r\n    padding: 1% 20% !important;\r\n  }\r\n}*/\n/*@media only screen and (min-width: 800px){\r\n  .content{\r\n    padding: 1% 10%;\r\n  }\r\n  .btn-dashboard{\r\n    height: 200px;\r\n  }\r\n  .page-header{\r\n      margin-left: 0px;\r\n      margin-right: 0px;\r\n  }\r\n  .row{\r\n    padding-left: -15px;\r\n    padding-right: -15px;\r\n  }\r\n}*/\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let DashboardComponent = class DashboardComponent {
    constructor() { }
    ngOnInit() {
    }
};
DashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], DashboardComponent);

//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"footer\">\r\n  <div class=\"social-links\">\r\n    <a href=\"https://facebook.com/acmilan\"><div class=\"facebook\"></div></a>\r\n    <a href=\"https://twitter.com/acmilan\"><div class=\"twitter\"></div></a>\r\n    <a href=\"https://instagram.com/acmilan\"><div class=\"instagram\"></div></a>\r\n    <a href=\"https://youtube.com/acmilan\"><div class=\"youtube\"></div></a>\r\n  </div>\r\n  #weareacmilan\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*--------------------------------\r\n\tMedia Queries\r\n\tused for outputting content either between media query tags\r\n\texample: basic usage\r\n\t.element {\r\n\t\twidth: 50%;\r\n\t\t@include mq('tablet-small') {\r\n\t\t\twidth: 20%;\r\n\t\t}\r\n\t}\r\n\texample: using max-width\r\n\t.element {\r\n\t\twidth: 50%;\r\n\t\t@include mq('tablet-small', 'max') {\r\n\t\t\twidth: 20%;\r\n\t\t}\r\n\t}\r\n*/\n/*--------------------------------\r\n\tMargin / Padding Quick Resets\r\n\texample: top & bottom margin set to $spacing-unit\r\n\t.element {\r\n\t\t@include push--ends;\r\n\t}\r\n\texample: left & right padding set to $spacing-unit--small\r\n\t.element {\r\n\t\t@include soft--sides($spacing-unit--small);\r\n\t}\r\n*/\n/*--------------------------------\r\n\tHelper mixins\r\n*/\n/*--------------------------------\r\n\tForm input placeholder text\r\n\texample:\r\n\tinput,\r\n\ttextarea {\r\n\t\t@include input-placeholder {\r\n\t\t\tcolor: $grey;\r\n\t\t}\r\n\t}\r\n*/\n/*--------------------------------\r\n\tRetina images\r\n\texample:\r\n\t.element {\r\n\t\t@include retina {\r\n\t\t\tbackground-image: url(../img/background@2x.png);\r\n\t\t}\r\n\t}\r\n*/\n/*--------------------------------\r\n\tContent margins\r\n\tfore removing first/last child margins\r\n\texample: default\r\n\t.element {\r\n\t\t@include content-margins;\r\n\t}\r\n\toutput:\r\n\t.element > *:first-child {\r\n\t\tmargin-top: 0;\r\n\t}\r\n\t.element > *:last-child {\r\n\t\tmargin-bottom: 0;\r\n\t}\r\n\texample: empty selector\r\n\t.element {\r\n\t\t@include content-margins('false');\r\n\t}\r\n\toutput:\r\n\t.element:first-child {\r\n\t\tmargin-top: 0;\r\n\t}\r\n\t.element:last-child {\r\n\t\tmargin-bottom: 0;\r\n\t}\r\n*/\n/*--------------------------------\r\n\tCSS Triangle\r\n\tused for creating CSS only triangles\r\n\texample:\r\n\t.element {\r\n\t\t&::before {\r\n\t\t\t@include css-triangle(blue, down);\r\n\t\t}\r\n\t}\r\n*/\n/*--------------------------------\r\n\tHide text\r\n\texample:\r\n\t.element {\r\n\t\t@include hide-text;\r\n\t}\r\n*/\n/*--------------------------------\r\n\tResponsive ratio\r\n\tUsed for creating scalable elements that maintain the same ratio\r\n\texample:\r\n\t.element {\r\n\t\t@include responsive-ratio(400, 300);\r\n\t}\r\n*/\n/*--------------------------------\r\n\tTypography\r\n\tText image replacement, with responsive ratio\r\n\tHTML:\r\n\t<h1 class=\"element\">\r\n\t\t<span>Text to replace</span>\r\n\t</h1>\r\n\texample:\r\n\t.element {\r\n\t\t@include typography(200, 50, 'hello-world');\r\n\t}\r\n*/\n/*--------------------------------\r\n\tIcon\r\n\tFor using fontastic icons in pseudo elements\r\n*/\n/*--------------------------------\r\n\tColours\r\n\tbackground, colour, etc. match up with colour map in _variables.scss\r\n\tmodify to suit per project\r\n*/\n/*--------------------------------\r\n\tMisc\r\n*/\n/*--------------------------------\r\n\tFluid Property\r\n\thttp://www.adrenalinmedia.com.au/the-agency/insights/this-changes-everything-css-fluid-properties.aspx\r\n\tHTML:\r\n\t<h1 class=\"element\">\r\n\t\t<span>Text to replace</span>\r\n\t</h1>\r\n\texample:\r\n\th1 {\r\n\t\t@include fp(font-size, 50, 100); // 50px at 320, 100px at 1920;\r\n\t}\r\n\toutput:\r\n\th1 {\r\n\t\tfont-size: calc(3.125vw + 40px); //This is the magic!\r\n\t}\r\n\t@media (max-width:320px){ //Clips the start to the min value\r\n\t\tfont-size:50px;\r\n\t}\r\n\t@media (min-width:1920px){ //Clips the end to the max value\r\n\t\tfont-size:100px;\r\n\t}\r\n*/\n.footer {\n  font-family: milanfont;\n  background: #ffffff;\n  background: linear-gradient(#fcfcfc, #fdfdfd, #ffffff);\n  color: #d9230f;\n  text-align: center;\n  padding-top: 5%;\n  padding-bottom: 5%;\n  left: 0px;\n  bottom: 0px;\n  width: 100%; }\n\n.social-links {\n  height: 30px;\n  display: block; }\n\n.facebook,\n.twitter,\n.instagram,\n.youtube {\n  height: 25px;\n  width: 25px;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: contain;\n  display: inline-block; }\n\n.facebook {\n  background-image: url(" + __webpack_require__("../../../../../src/assets/sociallogos/Facebook-color.jpg") + "); }\n\n.twitter {\n  background-image: url(" + __webpack_require__("../../../../../src/assets/sociallogos/Twitter-color.jpg") + "); }\n\n.instagram {\n  background-image: url(" + __webpack_require__("../../../../../src/assets/sociallogos/Instagram-color.jpg") + "); }\n\n.youtube {\n  background-image: url(" + __webpack_require__("../../../../../src/assets/sociallogos/Youtube-color.jpg") + "); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__("../../../../../src/app/components/footer/footer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/footer/footer.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/hall-of-fame/hall-of-fame.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\r\n  <h2 class=\"page-header\">Hall Of Fame</h2>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-4\" *ngFor=\"let footballer of footballers\">\r\n      <button\r\n        class=\"btn-dashboard\"\r\n        [routerLink]=\"['/singlefootballer', getFilter(footballer)]\"\r\n        [ngStyle]=\"{'background-image': 'url(' + footballer.coverImg + ')'}\">\r\n        {{footballer.name}} {{footballer.surname}}\r\n        <div class=\"layer\"></div>\r\n      </button>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/hall-of-fame/hall-of-fame.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*--------------------------------\r\n\tMedia Queries\r\n\tused for outputting content either between media query tags\r\n\texample: basic usage\r\n\t.element {\r\n\t\twidth: 50%;\r\n\t\t@include mq('tablet-small') {\r\n\t\t\twidth: 20%;\r\n\t\t}\r\n\t}\r\n\texample: using max-width\r\n\t.element {\r\n\t\twidth: 50%;\r\n\t\t@include mq('tablet-small', 'max') {\r\n\t\t\twidth: 20%;\r\n\t\t}\r\n\t}\r\n*/\n/*--------------------------------\r\n\tMargin / Padding Quick Resets\r\n\texample: top & bottom margin set to $spacing-unit\r\n\t.element {\r\n\t\t@include push--ends;\r\n\t}\r\n\texample: left & right padding set to $spacing-unit--small\r\n\t.element {\r\n\t\t@include soft--sides($spacing-unit--small);\r\n\t}\r\n*/\n/*--------------------------------\r\n\tHelper mixins\r\n*/\n/*--------------------------------\r\n\tForm input placeholder text\r\n\texample:\r\n\tinput,\r\n\ttextarea {\r\n\t\t@include input-placeholder {\r\n\t\t\tcolor: $grey;\r\n\t\t}\r\n\t}\r\n*/\n/*--------------------------------\r\n\tRetina images\r\n\texample:\r\n\t.element {\r\n\t\t@include retina {\r\n\t\t\tbackground-image: url(../img/background@2x.png);\r\n\t\t}\r\n\t}\r\n*/\n/*--------------------------------\r\n\tContent margins\r\n\tfore removing first/last child margins\r\n\texample: default\r\n\t.element {\r\n\t\t@include content-margins;\r\n\t}\r\n\toutput:\r\n\t.element > *:first-child {\r\n\t\tmargin-top: 0;\r\n\t}\r\n\t.element > *:last-child {\r\n\t\tmargin-bottom: 0;\r\n\t}\r\n\texample: empty selector\r\n\t.element {\r\n\t\t@include content-margins('false');\r\n\t}\r\n\toutput:\r\n\t.element:first-child {\r\n\t\tmargin-top: 0;\r\n\t}\r\n\t.element:last-child {\r\n\t\tmargin-bottom: 0;\r\n\t}\r\n*/\n/*--------------------------------\r\n\tCSS Triangle\r\n\tused for creating CSS only triangles\r\n\texample:\r\n\t.element {\r\n\t\t&::before {\r\n\t\t\t@include css-triangle(blue, down);\r\n\t\t}\r\n\t}\r\n*/\n/*--------------------------------\r\n\tHide text\r\n\texample:\r\n\t.element {\r\n\t\t@include hide-text;\r\n\t}\r\n*/\n/*--------------------------------\r\n\tResponsive ratio\r\n\tUsed for creating scalable elements that maintain the same ratio\r\n\texample:\r\n\t.element {\r\n\t\t@include responsive-ratio(400, 300);\r\n\t}\r\n*/\n/*--------------------------------\r\n\tTypography\r\n\tText image replacement, with responsive ratio\r\n\tHTML:\r\n\t<h1 class=\"element\">\r\n\t\t<span>Text to replace</span>\r\n\t</h1>\r\n\texample:\r\n\t.element {\r\n\t\t@include typography(200, 50, 'hello-world');\r\n\t}\r\n*/\n/*--------------------------------\r\n\tIcon\r\n\tFor using fontastic icons in pseudo elements\r\n*/\n/*--------------------------------\r\n\tColours\r\n\tbackground, colour, etc. match up with colour map in _variables.scss\r\n\tmodify to suit per project\r\n*/\n/*--------------------------------\r\n\tMisc\r\n*/\n/*--------------------------------\r\n\tFluid Property\r\n\thttp://www.adrenalinmedia.com.au/the-agency/insights/this-changes-everything-css-fluid-properties.aspx\r\n\tHTML:\r\n\t<h1 class=\"element\">\r\n\t\t<span>Text to replace</span>\r\n\t</h1>\r\n\texample:\r\n\th1 {\r\n\t\t@include fp(font-size, 50, 100); // 50px at 320, 100px at 1920;\r\n\t}\r\n\toutput:\r\n\th1 {\r\n\t\tfont-size: calc(3.125vw + 40px); //This is the magic!\r\n\t}\r\n\t@media (max-width:320px){ //Clips the start to the min value\r\n\t\tfont-size:50px;\r\n\t}\r\n\t@media (min-width:1920px){ //Clips the end to the max value\r\n\t\tfont-size:100px;\r\n\t}\r\n*/\n.content {\n  font-family: milanregular; }\n  @media only screen and (min-width: 1440px) {\n    .content {\n      padding: 1% 20% !important; } }\n  @media only screen and (min-width: 768px) {\n    .content {\n      padding: 1% 10%; } }\n\n.btn-dashboard {\n  border-width: 0px;\n  cursor: pointer;\n  text-align: center;\n  font-weight: bold;\n  font-size: 23px;\n  color: #f4f4f4;\n  width: 100%;\n  height: 150px;\n  background-position: center;\n  background-size: cover; }\n  @media only screen and (min-width: 1440px) {\n    .btn-dashboard {\n      height: 200px; } }\n  @media only screen and (min-width: 768px) {\n    .btn-dashboard {\n      height: 200px; } }\n\n.page-header {\n  margin-left: 5%;\n  margin-right: 5%;\n  margin-top: 18px;\n  font-family: milanfont; }\n  @media only screen and (min-width: 1440px) {\n    .page-header {\n      margin-left: 0px;\n      margin-right: 0px; } }\n  @media only screen and (min-width: 768px) {\n    .page-header {\n      margin-left: 0px;\n      margin-right: 0px; } }\n\n.col-md-4 {\n  padding-left: 0px;\n  padding-right: 0px;\n  width: 50%;\n  float: left; }\n\n@media only screen and (min-width: 768px) and (max-width: 1440px) {\n  .col-md-4 {\n    width: 33.33333333%; } }\n\n.row {\n  margin-left: 0px;\n  margin-right: 0px; }\n\n/* For width 400px and larger: */\n/*@media only screen and (min-width: 1400px) {\r\n  .content{\r\n    padding: 1% 20% !important;\r\n  }\r\n  .btn-dashboard{\r\n    height: 200px;\r\n  }\r\n  .page-header{\r\n    margin-left: 0px;\r\n    margin-right: 0px;\r\n  }\r\n}*/\n/*@media only screen and (max-width: 1000px) {\r\n  .col-md-4{\r\n    width: 50%;\r\n    float: left;\r\n  }\r\n}*/\n/*@media only screen and (min-width: 800px){\r\n  .content{\r\n    padding: 1% 10%;\r\n  }\r\n  .btn-dashboard{\r\n    height: 200px;\r\n  }\r\n  .page-header{\r\n    margin-left: 0px;\r\n    margin-right: 0px;\r\n  }\r\n}*/\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/hall-of-fame/hall-of-fame.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_upload_data_service__ = __webpack_require__("../../../../../src/app/services/upload-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HallOfFameComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let HallOfFameComponent = class HallOfFameComponent {
    constructor(uploadData, router) {
        this.uploadData = uploadData;
        this.router = router;
        this.config = {
            pagination: '.swiper-pagination',
            paginationClickable: true,
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            spaceBetween: 0
        };
    }
    ngOnInit() {
        this.uploadData.getAllFootballers().subscribe(result => {
            this.footballers = result.footballer;
        }, err => {
            console.log(err);
            return false;
        });
    }
    getPlayerCoverImg(footballer) {
        console.log(footballer.coverImg);
        return footballer.coverImg;
    }
    getFilter(footballer) {
        return JSON.stringify(footballer);
    }
};
HallOfFameComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-hall-of-fame',
        template: __webpack_require__("../../../../../src/app/components/hall-of-fame/hall-of-fame.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/hall-of-fame/hall-of-fame.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_upload_data_service__["a" /* UploadDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_upload_data_service__["a" /* UploadDataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], HallOfFameComponent);

var _a, _b;
//# sourceMappingURL=hall-of-fame.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/history/history.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\r\n  <h2 class=\"page-header\">La nostra storia</h2>\r\n  <ul class=\"timeline\" *ngFor=\"let singleStory of history;odd as isOdd\">\r\n    <li *ngIf=\"!isOdd\" >\r\n      <div class=\"tldate\"><p class=\"year\"><strong>{{singleStory.year.initial}}-{{singleStory.year.final}}</strong></p></div>\r\n      <div class=\"timeline-panel\" (click)=\"getFilter(singleStory)\">\r\n        <div class=\"tl-heading\">\r\n          <h4>{{singleStory.name}}</h4>\r\n        </div>\r\n        <div class=\"tl-body\">\r\n          <p>{{singleStory.description.small}}</p>\r\n          <img src={{singleStory.photoPath.normal}} alt=\"story-cover\">\r\n        </div>\r\n      </div>\r\n    </li>\r\n\r\n    <li class=\"timeline-inverted\" *ngIf=\"isOdd\">\r\n      <div class=\"tldate-odd\"><p class=\"year\"><strong>{{singleStory.year.initial}}-{{singleStory.year.final}}</strong></p></div>\r\n      <div class=\"timeline-panel\" (click)=\"getFilter(singleStory)\">\r\n        <div class=\"tl-heading\">\r\n          <h4>{{singleStory.name}}</h4>\r\n        </div>\r\n        <div class=\"tl-body\">\r\n          <p>{{singleStory.description.small}}</p>\r\n          <img src={{singleStory.photoPath.normal}} alt=\"story-cover\">\r\n        </div>\r\n      </div>\r\n    </li>\r\n  </ul>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/history/history.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\n  background: #333; }\n\nimg {\n  border: 0;\n  max-width: 100%; }\n\n.content {\n  padding-top: 1%;\n  padding-left: 15px;\n  padding-right: 5%;\n  padding-bottom: 10%;\n  font-family: milanregular; }\n\n.page-header {\n  margin-top: 18px;\n  font-family: milanfont; }\n\nul {\n  margin-bottom: 0px; }\n\n/** timeline box structure **/\n.timeline {\n  list-style: none;\n  padding-top: 20px;\n  padding-left: 0px;\n  padding-right: 0px;\n  position: relative; }\n  .timeline:before {\n    top: 0;\n    bottom: 0;\n    position: absolute;\n    content: \" \";\n    width: 3px;\n    background-color: #eee;\n    left: 50%;\n    margin-left: -1.5px; }\n\n.year {\n  margin: auto;\n  padding-top: 20px;\n  font-weight: bold; }\n\n.tldate,\n.tldate-odd {\n  display: inline-block;\n  height: 55px;\n  width: 82px;\n  background-image: url(" + __webpack_require__("../../../../../src/assets/history/calendar-icons.png") + ");\n  background-position: center;\n  color: black;\n  padding: 3px 0;\n  font-weight: bold;\n  bottom: 30px;\n  left: 50%;\n  text-align: center;\n  margin-top: 10px;\n  margin-left: 16px;\n  z-index: 99999; }\n\n.tldate-odd {\n  margin-left: 45% !important; }\n\n.timeline li {\n  margin-top: 25px;\n  position: relative; }\n  .timeline li:before {\n    content: \" \";\n    display: table; }\n  .timeline li:after {\n    content: \" \";\n    display: table;\n    clear: both; }\n  .timeline li:before, .timeline li:after {\n    content: \" \";\n    display: table; }\n  .timeline li .timeline-panel:hover h4 {\n    font-weight: bold; }\n  .timeline li .timeline-panel {\n    cursor: pointer;\n    width: 46%;\n    float: left;\n    background: #fff;\n    border: 1px solid #d4d4d4;\n    padding: 20px;\n    position: relative;\n    border-radius: 8px;\n    box-shadow: 0 1px 6px rgba(0, 0, 0, 0.15); }\n    .timeline li .timeline-panel:before {\n      position: absolute;\n      top: 26px;\n      right: -15px;\n      display: inline-block;\n      border-top: 15px solid transparent;\n      border-left: 15px solid #ccc;\n      border-right: 0 solid #ccc;\n      border-bottom: 15px solid transparent;\n      content: \" \"; }\n    .timeline li .timeline-panel:after {\n      position: absolute;\n      top: 27px;\n      right: -14px;\n      display: inline-block;\n      border-top: 14px solid transparent;\n      border-left: 14px solid #fff;\n      border-right: 0 solid #fff;\n      border-bottom: 14px solid transparent;\n      content: \" \"; }\n    .timeline li .timeline-panel.noarrow:before, .timeline li .timeline-panel.noarrow:after {\n      top: 0;\n      right: 0;\n      display: none;\n      border: 0; }\n  .timeline li.timeline-inverted .timeline-panel {\n    float: right; }\n    .timeline li.timeline-inverted .timeline-panel:before {\n      border-left-width: 0;\n      border-right-width: 15px;\n      left: -15px;\n      right: auto; }\n    .timeline li.timeline-inverted .timeline-panel:after {\n      border-left-width: 0;\n      border-right-width: 14px;\n      left: -14px;\n      right: auto; }\n\n/** timeline panels **/\n/** panel arrows **/\n/** timeline circle icons **/\n/** timeline content **/\n.tl-heading h4 {\n  margin: 0;\n  margin-bottom: 2px;\n  color: #c25b4e; }\n\n.tl-body p, .tl-body ul {\n  margin-bottom: 0; }\n\n.tl-body > p + p {\n  margin-top: 5px; }\n\n.tl-body > img {\n  margin-top: 2%; }\n\n@media only screen and (min-width: 1400px) {\n  .content {\n    padding: 1% 20% !important; } }\n\n@media only screen and (min-width: 800px) {\n  .content {\n    padding: 1% 10%; }\n  .tl-body > img {\n    width: inherit;\n    border-radius: 5px; } }\n\n/** media queries **/\n@media (max-width: 991px) {\n  .timeline li .timeline-panel {\n    width: 44%; } }\n\n@media (max-width: 700px) {\n  ul.timeline:before {\n    left: 40px; }\n  .tl-body > img {\n    width: inherit;\n    border-radius: 3px; }\n  .tldate,\n  .tldate-odd {\n    height: 54px;\n    width: 70px;\n    top: 12px;\n    left: 0px;\n    margin-left: 0px !important;\n    margin-right: 10px;\n    margin-top: 10px; }\n  ul.timeline li .timeline-panel {\n    width: calc(100% - 90px);\n    width: -webkit-calc(100% - 90px); }\n  ul.timeline > li > .timeline-panel {\n    float: right; }\n    ul.timeline > li > .timeline-panel:before {\n      border-left-width: 0;\n      border-right-width: 15px;\n      left: -15px;\n      right: auto; }\n    ul.timeline > li > .timeline-panel:after {\n      border-left-width: 0;\n      border-right-width: 14px;\n      left: -14px;\n      right: auto; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/history/history.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_upload_data_service__ = __webpack_require__("../../../../../src/app/services/upload-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_pass_data_service__ = __webpack_require__("../../../../../src/app/services/pass-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let HistoryComponent = class HistoryComponent {
    constructor(uploadData, passData, router) {
        this.uploadData = uploadData;
        this.passData = passData;
        this.router = router;
    }
    ngOnInit() {
        this.uploadData.getAllStories().subscribe(result => {
            this.history = result.stories;
        }, err => {
            console.log(err);
            return false;
        });
    }
    getFilter(singleHistory) {
        //return JSON.stringify(singleHistory);
        this.passData.setsingleComponent(JSON.stringify(singleHistory));
        console.log(singleHistory);
        this.router.navigate(['/singlehistory']);
    }
};
HistoryComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-history',
        template: __webpack_require__("../../../../../src/app/components/history/history.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/history/history.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_upload_data_service__["a" /* UploadDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_upload_data_service__["a" /* UploadDataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_pass_data_service__["a" /* PassDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_pass_data_service__["a" /* PassDataService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object])
], HistoryComponent);

var _a, _b, _c;
//# sourceMappingURL=history.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"homepage\">\r\n  <div class=\"jumbotron text-center\">\r\n    <div class=\"jumbotron-content\">\r\n      <img class=\"logo\" src=\"../../assets/logo.png\" alt=\"logo\">\r\n      <h1 class=\"title\">CASA MILAN Museum</h1>\r\n      <p class=\"lead\">Welcome to Casa</p>\r\n        <a *ngIf=\"!authService.loggedIn()\" class=\"btn btn-primary\" [routerLink]=\"['/login']\">Inizia il tour</a>\r\n        <a *ngIf=\"authService.loggedIn()\" class=\"btn btn-primary\" [routerLink]=\"['/dashboard']\">Categorie</a>\r\n        <a *ngIf=\"authService.loggedIn()\" class=\"btn btn-default\" [routerLink]=\"['/info']\">Info</a>\r\n\r\n    </div>\r\n  </div>\r\n\r\n  <section>\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-4\">\r\n          <div class=\"info\">\r\n          <img class=\"img-feature\" src=\"../../assets/home/history.png\" alt=\"history-icon\">\r\n          <h3 class=\"features\">Storia</h3>\r\n          <p class=\"subfeatures\">Puoi conoscere la nostra storia.</p>\r\n        </div>\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n          <img class=\"img-feature\" src=\"../../assets/home/trophy.png\" alt=\"trophies-icon\">\r\n          <h3 class=\"features\">Trofei</h3>\r\n          <p class=\"subfeatures\">Esplora i nostri trofei.</p>\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n          <img class=\"img-feature\" src=\"../../assets/home/halloffame.png\" alt=\"hall-of-fame-icon\">\r\n          <h3 class=\"features\">Hall Of Fame</h3>\r\n          <p class=\"subfeatures\">Scopri i nostri migliori giocatori.</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*--------------------------------\r\n\tMedia Queries\r\n\tused for outputting content either between media query tags\r\n\texample: basic usage\r\n\t.element {\r\n\t\twidth: 50%;\r\n\t\t@include mq('tablet-small') {\r\n\t\t\twidth: 20%;\r\n\t\t}\r\n\t}\r\n\texample: using max-width\r\n\t.element {\r\n\t\twidth: 50%;\r\n\t\t@include mq('tablet-small', 'max') {\r\n\t\t\twidth: 20%;\r\n\t\t}\r\n\t}\r\n*/\n/*--------------------------------\r\n\tMargin / Padding Quick Resets\r\n\texample: top & bottom margin set to $spacing-unit\r\n\t.element {\r\n\t\t@include push--ends;\r\n\t}\r\n\texample: left & right padding set to $spacing-unit--small\r\n\t.element {\r\n\t\t@include soft--sides($spacing-unit--small);\r\n\t}\r\n*/\n/*--------------------------------\r\n\tHelper mixins\r\n*/\n/*--------------------------------\r\n\tForm input placeholder text\r\n\texample:\r\n\tinput,\r\n\ttextarea {\r\n\t\t@include input-placeholder {\r\n\t\t\tcolor: $grey;\r\n\t\t}\r\n\t}\r\n*/\n/*--------------------------------\r\n\tRetina images\r\n\texample:\r\n\t.element {\r\n\t\t@include retina {\r\n\t\t\tbackground-image: url(../img/background@2x.png);\r\n\t\t}\r\n\t}\r\n*/\n/*--------------------------------\r\n\tContent margins\r\n\tfore removing first/last child margins\r\n\texample: default\r\n\t.element {\r\n\t\t@include content-margins;\r\n\t}\r\n\toutput:\r\n\t.element > *:first-child {\r\n\t\tmargin-top: 0;\r\n\t}\r\n\t.element > *:last-child {\r\n\t\tmargin-bottom: 0;\r\n\t}\r\n\texample: empty selector\r\n\t.element {\r\n\t\t@include content-margins('false');\r\n\t}\r\n\toutput:\r\n\t.element:first-child {\r\n\t\tmargin-top: 0;\r\n\t}\r\n\t.element:last-child {\r\n\t\tmargin-bottom: 0;\r\n\t}\r\n*/\n/*--------------------------------\r\n\tCSS Triangle\r\n\tused for creating CSS only triangles\r\n\texample:\r\n\t.element {\r\n\t\t&::before {\r\n\t\t\t@include css-triangle(blue, down);\r\n\t\t}\r\n\t}\r\n*/\n/*--------------------------------\r\n\tHide text\r\n\texample:\r\n\t.element {\r\n\t\t@include hide-text;\r\n\t}\r\n*/\n/*--------------------------------\r\n\tResponsive ratio\r\n\tUsed for creating scalable elements that maintain the same ratio\r\n\texample:\r\n\t.element {\r\n\t\t@include responsive-ratio(400, 300);\r\n\t}\r\n*/\n/*--------------------------------\r\n\tTypography\r\n\tText image replacement, with responsive ratio\r\n\tHTML:\r\n\t<h1 class=\"element\">\r\n\t\t<span>Text to replace</span>\r\n\t</h1>\r\n\texample:\r\n\t.element {\r\n\t\t@include typography(200, 50, 'hello-world');\r\n\t}\r\n*/\n/*--------------------------------\r\n\tIcon\r\n\tFor using fontastic icons in pseudo elements\r\n*/\n/*--------------------------------\r\n\tColours\r\n\tbackground, colour, etc. match up with colour map in _variables.scss\r\n\tmodify to suit per project\r\n*/\n/*--------------------------------\r\n\tMisc\r\n*/\n/*--------------------------------\r\n\tFluid Property\r\n\thttp://www.adrenalinmedia.com.au/the-agency/insights/this-changes-everything-css-fluid-properties.aspx\r\n\tHTML:\r\n\t<h1 class=\"element\">\r\n\t\t<span>Text to replace</span>\r\n\t</h1>\r\n\texample:\r\n\th1 {\r\n\t\t@include fp(font-size, 50, 100); // 50px at 320, 100px at 1920;\r\n\t}\r\n\toutput:\r\n\th1 {\r\n\t\tfont-size: calc(3.125vw + 40px); //This is the magic!\r\n\t}\r\n\t@media (max-width:320px){ //Clips the start to the min value\r\n\t\tfont-size:50px;\r\n\t}\r\n\t@media (min-width:1920px){ //Clips the end to the max value\r\n\t\tfont-size:100px;\r\n\t}\r\n*/\n.homepage {\n  margin-bottom: 10%; }\n\n@media only screen and (min-width: 768px) and (max-width: 1440px) {\n  .homepage {\n    margin-bottom: 2%; } }\n\n.title {\n  font-family: milanfont; }\n\n.title, .lead {\n  font-weight: bold; }\n\n.logo {\n  width: 75px;\n  height: 75px; }\n  @media only screen and (min-width: 1440px) {\n    .logo {\n      width: 150px;\n      height: 150px; } }\n\n@media only screen and (min-width: 768px) and (max-width: 1440px) {\n  .logo {\n    width: 150px;\n    height: 150px; } }\n\n.img-feature {\n  width: 50px;\n  height: 50px; }\n\n.features {\n  margin-top: 10px;\n  font-family: milanbold; }\n\n.lead,\n.subfeatures {\n  font-family: milanregular; }\n\n.btn {\n  font-family: milanfont; }\n\n.jumbotron {\n  background-color: inherit;\n  color: #f4f4f4;\n  background-image: url(" + __webpack_require__("../../../../../src/assets/header.png") + ");\n  background-position: center;\n  background-repeat: no-repeat;\n  background-origin: content-box;\n  border-radius: 0px;\n  max-width: 1600px;\n  height: 650px;\n  text-align: center; }\n  @media only screen and (min-width: 1440px) {\n    .jumbotron {\n      width: 100%;\n      margin: auto;\n      margin-bottom: 2% !important;\n      height: 650px; } }\n\n@media only screen and (min-width: 768px) and (max-width: 1440px) {\n  .jumbotron {\n    margin: 0% 0% 2%;\n    height: 650px; } }\n\n.jumbotron-content {\n  padding-top: 10%; }\n  @media only screen and (min-width: 1440px) {\n    .jumbotron-content {\n      padding-top: 5%; } }\n\n@media only screen and (min-width: 768px) and (max-width: 1440px) {\n  .jumbotron-content {\n    padding-top: 5%; } }\n\n.col-md-4 {\n  text-align: center; }\n\n.icon, .info {\n  display: inline-block; }\n\n.icon {\n  width: 75px;\n  height: 75px;\n  padding-bottom: 10%; }\n\n/*.jumbotron {\r\n    width: 100%;\r\n    margin: auto;\r\n    margin-bottom: 2% !important;\r\n    height: 650px;\r\n  }*/\n/*.jumbotron-content{\r\n    padding-top: 5%;\r\n  }*/\n/*.logo{\r\n    width: 150px;\r\n    height: 150px;\r\n  }*/\n/*}\r\n@media only screen and (min-width: 800px) and (max-width: 1399px){\r\n  .homepage{\r\n      margin-bottom: 2%;\r\n  }\r\n  /*.jumbotron {\r\n    margin: 0% 0% 2%;\r\n    height: 650px;\r\n  }*/\n/*.jumbotron-content{\r\n    padding-top: 5%;\r\n  }*/\n/*.logo{\r\n    width: 150px;\r\n    height: 150px;\r\n  }*/\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let HomeComponent = class HomeComponent {
    constructor(authService) {
        this.authService = authService;
    }
    ngOnInit() {
    }
};
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/home/home.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], HomeComponent);

var _a;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/info-component/info-component.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\r\n  <h2 class=\"page-header\">Info</h2>\r\n  <p class=\"strong\">Benvenuto a CASA MILAN Museum</p>\r\n    <p class=\"normal\">E' un piacere per noi!</p>\r\n  <p class=\"strong\">Orari d'apertura:</p>\r\n    <p class=\"normal\">dalle 8.00 alle 20.00.</p>\r\n  <p class=\"strong\">Bar:</p>\r\n    <p class=\"normal\">Puoi fare una pausa con un caffè dalle 8.00 alle 19.00.</p>\r\n  <p class=\"strong\">Shop:</p>\r\n    <p class=\"normal\">Visita il nostro shop per fantastici gadget, dalle 8.30 alle 20.30.</p>\r\n  <p class=\"info\">Usa l'app per leggere e scoprire <strong>contenuti speciali</strong> e informazioni esclusive.</p>\r\n  <p>Puoi vedere queste informazioni, cliccando sul bottone info. Lo vedrai sempre nel menu dell'app.</p>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/info-component/info-component.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*--------------------------------\r\n\tMedia Queries\r\n\tused for outputting content either between media query tags\r\n\texample: basic usage\r\n\t.element {\r\n\t\twidth: 50%;\r\n\t\t@include mq('tablet-small') {\r\n\t\t\twidth: 20%;\r\n\t\t}\r\n\t}\r\n\texample: using max-width\r\n\t.element {\r\n\t\twidth: 50%;\r\n\t\t@include mq('tablet-small', 'max') {\r\n\t\t\twidth: 20%;\r\n\t\t}\r\n\t}\r\n*/\n/*--------------------------------\r\n\tMargin / Padding Quick Resets\r\n\texample: top & bottom margin set to $spacing-unit\r\n\t.element {\r\n\t\t@include push--ends;\r\n\t}\r\n\texample: left & right padding set to $spacing-unit--small\r\n\t.element {\r\n\t\t@include soft--sides($spacing-unit--small);\r\n\t}\r\n*/\n/*--------------------------------\r\n\tHelper mixins\r\n*/\n/*--------------------------------\r\n\tForm input placeholder text\r\n\texample:\r\n\tinput,\r\n\ttextarea {\r\n\t\t@include input-placeholder {\r\n\t\t\tcolor: $grey;\r\n\t\t}\r\n\t}\r\n*/\n/*--------------------------------\r\n\tRetina images\r\n\texample:\r\n\t.element {\r\n\t\t@include retina {\r\n\t\t\tbackground-image: url(../img/background@2x.png);\r\n\t\t}\r\n\t}\r\n*/\n/*--------------------------------\r\n\tContent margins\r\n\tfore removing first/last child margins\r\n\texample: default\r\n\t.element {\r\n\t\t@include content-margins;\r\n\t}\r\n\toutput:\r\n\t.element > *:first-child {\r\n\t\tmargin-top: 0;\r\n\t}\r\n\t.element > *:last-child {\r\n\t\tmargin-bottom: 0;\r\n\t}\r\n\texample: empty selector\r\n\t.element {\r\n\t\t@include content-margins('false');\r\n\t}\r\n\toutput:\r\n\t.element:first-child {\r\n\t\tmargin-top: 0;\r\n\t}\r\n\t.element:last-child {\r\n\t\tmargin-bottom: 0;\r\n\t}\r\n*/\n/*--------------------------------\r\n\tCSS Triangle\r\n\tused for creating CSS only triangles\r\n\texample:\r\n\t.element {\r\n\t\t&::before {\r\n\t\t\t@include css-triangle(blue, down);\r\n\t\t}\r\n\t}\r\n*/\n/*--------------------------------\r\n\tHide text\r\n\texample:\r\n\t.element {\r\n\t\t@include hide-text;\r\n\t}\r\n*/\n/*--------------------------------\r\n\tResponsive ratio\r\n\tUsed for creating scalable elements that maintain the same ratio\r\n\texample:\r\n\t.element {\r\n\t\t@include responsive-ratio(400, 300);\r\n\t}\r\n*/\n/*--------------------------------\r\n\tTypography\r\n\tText image replacement, with responsive ratio\r\n\tHTML:\r\n\t<h1 class=\"element\">\r\n\t\t<span>Text to replace</span>\r\n\t</h1>\r\n\texample:\r\n\t.element {\r\n\t\t@include typography(200, 50, 'hello-world');\r\n\t}\r\n*/\n/*--------------------------------\r\n\tIcon\r\n\tFor using fontastic icons in pseudo elements\r\n*/\n/*--------------------------------\r\n\tColours\r\n\tbackground, colour, etc. match up with colour map in _variables.scss\r\n\tmodify to suit per project\r\n*/\n/*--------------------------------\r\n\tMisc\r\n*/\n/*--------------------------------\r\n\tFluid Property\r\n\thttp://www.adrenalinmedia.com.au/the-agency/insights/this-changes-everything-css-fluid-properties.aspx\r\n\tHTML:\r\n\t<h1 class=\"element\">\r\n\t\t<span>Text to replace</span>\r\n\t</h1>\r\n\texample:\r\n\th1 {\r\n\t\t@include fp(font-size, 50, 100); // 50px at 320, 100px at 1920;\r\n\t}\r\n\toutput:\r\n\th1 {\r\n\t\tfont-size: calc(3.125vw + 40px); //This is the magic!\r\n\t}\r\n\t@media (max-width:320px){ //Clips the start to the min value\r\n\t\tfont-size:50px;\r\n\t}\r\n\t@media (min-width:1920px){ //Clips the end to the max value\r\n\t\tfont-size:100px;\r\n\t}\r\n*/\n.content {\n  padding-top: 1%;\n  padding-left: 5%;\n  padding-right: 5%;\n  padding-bottom: 10%;\n  font-family: milanregular; }\n  @media only screen and (min-width: 1440px) {\n    .content {\n      padding: 1% 20% !important; } }\n  @media only screen and (min-width: 768px) {\n    .content {\n      padding: 1% 10%; } }\n\n.page-header {\n  margin-top: 18px;\n  font-family: milanfont;\n  text-align: center; }\n\np {\n  text-align: center;\n  font-size: 15px; }\n\n.strong {\n  font-weight: bold;\n  font-family: milanfont;\n  margin: auto; }\n\n.strong,\n.normal {\n  display: block; }\n\n.info {\n  padding-top: 2px; }\n\n@media only screen and (min-width: 1440px) {\n  .input {\n    padding: 1% 20% !important; } }\n\n@media only screen and (min-width: 768px) {\n  .input {\n    padding: 1% 10%; } }\n\n/*@media only screen and (min-width: 1400px) {\r\n  .content,\r\n  .input{\r\n    padding: 1% 20% !important;\r\n  }\r\n}\r\n@media only screen and (min-width: 800px){\r\n  .content,\r\n  .input{\r\n    padding: 1% 10%;\r\n  }\r\n}*/\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/info-component/info-component.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfoComponentComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let InfoComponentComponent = class InfoComponentComponent {
    constructor() { }
    ngOnInit() {
    }
};
InfoComponentComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-info-component',
        template: __webpack_require__("../../../../../src/app/components/info-component/info-component.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/info-component/info-component.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], InfoComponentComponent);

//# sourceMappingURL=info-component.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"input\">\r\n  <h2 class=\"page-header\">Inserisci il numero di ticket:</h2>\r\n  <form (submit)=\"onLoginSubmit()\">\r\n    <div class=\"form-group\">\r\n      <label>Nome</label>\r\n      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"username\" name=\"username\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label>Numero di Ticket</label>\r\n      <input type=\"password\" class=\"form-control\" [(ngModel)]=\"password\" name=\"password\">\r\n    </div>\r\n    <input type=\"submit\" class=\"btn btn-primary\" value=\"Inizia il tour\">\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*--------------------------------\r\n\tMedia Queries\r\n\tused for outputting content either between media query tags\r\n\texample: basic usage\r\n\t.element {\r\n\t\twidth: 50%;\r\n\t\t@include mq('tablet-small') {\r\n\t\t\twidth: 20%;\r\n\t\t}\r\n\t}\r\n\texample: using max-width\r\n\t.element {\r\n\t\twidth: 50%;\r\n\t\t@include mq('tablet-small', 'max') {\r\n\t\t\twidth: 20%;\r\n\t\t}\r\n\t}\r\n*/\n/*--------------------------------\r\n\tMargin / Padding Quick Resets\r\n\texample: top & bottom margin set to $spacing-unit\r\n\t.element {\r\n\t\t@include push--ends;\r\n\t}\r\n\texample: left & right padding set to $spacing-unit--small\r\n\t.element {\r\n\t\t@include soft--sides($spacing-unit--small);\r\n\t}\r\n*/\n/*--------------------------------\r\n\tHelper mixins\r\n*/\n/*--------------------------------\r\n\tForm input placeholder text\r\n\texample:\r\n\tinput,\r\n\ttextarea {\r\n\t\t@include input-placeholder {\r\n\t\t\tcolor: $grey;\r\n\t\t}\r\n\t}\r\n*/\n/*--------------------------------\r\n\tRetina images\r\n\texample:\r\n\t.element {\r\n\t\t@include retina {\r\n\t\t\tbackground-image: url(../img/background@2x.png);\r\n\t\t}\r\n\t}\r\n*/\n/*--------------------------------\r\n\tContent margins\r\n\tfore removing first/last child margins\r\n\texample: default\r\n\t.element {\r\n\t\t@include content-margins;\r\n\t}\r\n\toutput:\r\n\t.element > *:first-child {\r\n\t\tmargin-top: 0;\r\n\t}\r\n\t.element > *:last-child {\r\n\t\tmargin-bottom: 0;\r\n\t}\r\n\texample: empty selector\r\n\t.element {\r\n\t\t@include content-margins('false');\r\n\t}\r\n\toutput:\r\n\t.element:first-child {\r\n\t\tmargin-top: 0;\r\n\t}\r\n\t.element:last-child {\r\n\t\tmargin-bottom: 0;\r\n\t}\r\n*/\n/*--------------------------------\r\n\tCSS Triangle\r\n\tused for creating CSS only triangles\r\n\texample:\r\n\t.element {\r\n\t\t&::before {\r\n\t\t\t@include css-triangle(blue, down);\r\n\t\t}\r\n\t}\r\n*/\n/*--------------------------------\r\n\tHide text\r\n\texample:\r\n\t.element {\r\n\t\t@include hide-text;\r\n\t}\r\n*/\n/*--------------------------------\r\n\tResponsive ratio\r\n\tUsed for creating scalable elements that maintain the same ratio\r\n\texample:\r\n\t.element {\r\n\t\t@include responsive-ratio(400, 300);\r\n\t}\r\n*/\n/*--------------------------------\r\n\tTypography\r\n\tText image replacement, with responsive ratio\r\n\tHTML:\r\n\t<h1 class=\"element\">\r\n\t\t<span>Text to replace</span>\r\n\t</h1>\r\n\texample:\r\n\t.element {\r\n\t\t@include typography(200, 50, 'hello-world');\r\n\t}\r\n*/\n/*--------------------------------\r\n\tIcon\r\n\tFor using fontastic icons in pseudo elements\r\n*/\n/*--------------------------------\r\n\tColours\r\n\tbackground, colour, etc. match up with colour map in _variables.scss\r\n\tmodify to suit per project\r\n*/\n/*--------------------------------\r\n\tMisc\r\n*/\n/*--------------------------------\r\n\tFluid Property\r\n\thttp://www.adrenalinmedia.com.au/the-agency/insights/this-changes-everything-css-fluid-properties.aspx\r\n\tHTML:\r\n\t<h1 class=\"element\">\r\n\t\t<span>Text to replace</span>\r\n\t</h1>\r\n\texample:\r\n\th1 {\r\n\t\t@include fp(font-size, 50, 100); // 50px at 320, 100px at 1920;\r\n\t}\r\n\toutput:\r\n\th1 {\r\n\t\tfont-size: calc(3.125vw + 40px); //This is the magic!\r\n\t}\r\n\t@media (max-width:320px){ //Clips the start to the min value\r\n\t\tfont-size:50px;\r\n\t}\r\n\t@media (min-width:1920px){ //Clips the end to the max value\r\n\t\tfont-size:100px;\r\n\t}\r\n*/\n@media only screen and (min-width: 1440px) {\n  .content {\n    padding: 1% 20% !important; } }\n\n@media only screen and (min-width: 768px) {\n  .content {\n    padding: 1% 10%; } }\n\n.page-header {\n  margin-top: 18px; }\n\n.input {\n  padding-left: 5%;\n  padding-right: 5%; }\n  @media only screen and (min-width: 1440px) {\n    .input {\n      padding: 1% 20% !important; } }\n  @media only screen and (min-width: 768px) {\n    .input {\n      padding: 1% 10%; } }\n\n.page-header,\n.btn-primary {\n  font-family: milanfont; }\n\n.form-group {\n  font-family: milanregular; }\n\n/*@media only screen and (min-width: 1400px) {\r\n  .content,\r\n  .input{\r\n    padding: 1% 20% !important;\r\n  }\r\n}\r\n@media only screen and (min-width: 800px){\r\n  .content,\r\n  .input{\r\n    padding: 1% 10%;\r\n  }\r\n}*/\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let LoginComponent = class LoginComponent {
    constructor(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
        this.closable = true;
        this.visibleChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    ngOnInit() {
    }
    onLoginSubmit() {
        const user = {
            username: this.username,
            password: this.password
        };
        this.authService.authenticateUser(user).subscribe(data => {
            if (data.success) {
                this.authService.storeUserData(data.token, data.user);
                this.flashMessage.show('Login effettuato con successo', {
                    cssClass: 'alert-success',
                    timeout: 3000
                });
                if (this.authService.isAdmin()) {
                    this.router.navigate(['register']);
                }
                else {
                    this.router.navigate(['dashboard']);
                }
            }
            else {
                this.flashMessage.show(data.msg, {
                    cssClass: 'alert-danger',
                    timeout: 3000
                });
                this.router.navigate(['login']);
            }
        });
    }
    close() {
        this.visible = false;
        this.visibleChange.emit(this.visible);
    }
};
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], LoginComponent.prototype, "closable", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], LoginComponent.prototype, "visible", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], LoginComponent.prototype, "visibleChange", void 0);
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/components/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/login/login.component.scss")],
        animations: [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["trigger"])('dialog', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('void => *', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ transform: 'scale3d(.3, .3, .3)' }),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])(100)
                ]),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('* => void', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])(100, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ transform: 'scale3d(.0, .0, .0)' }))
                ])
            ])
        ]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _d || Object])
], LoginComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\r\n      <div class=\"container\">\r\n        <div class=\"navbar-header\">\r\n          <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\r\n            <span class=\"sr-only\">Toggle navigation</span>\r\n            <span class=\"icon-bar\"></span>\r\n            <span class=\"icon-bar\"></span>\r\n            <span class=\"icon-bar\"></span>\r\n          </button>\r\n\r\n        <div class=\"navbar-brand\" href=\"#\">\r\n          <img src=\"../../assets/logo.png\" alt=\"logo\">\r\n          <p class=\"navbar-title\" href=\"#\">CASA MILAN Museum</p>\r\n        </div>\r\n        </div>\r\n        <div #pino id=\"navbar\"  class=\"collapse navbar-collapse\">\r\n          <ul class=\"nav navbar-nav navbar-left\">\r\n            <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/']\" (click)=\"toggleNavBar()\">Home</a></li>\r\n          </ul>\r\n\r\n          <ul class=\"nav navbar-nav navbar-right\">\r\n            <li *ngIf=\"authService.isAdmin()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/register']\">Registra Utenti</a></li>\r\n            <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/dashboard']\" (click)=\"toggleNavBar()\">Categorie</a></li>\r\n            <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/info']\" (click)=\"toggleNavBar()\">Info</a></li>\r\n            <li *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/login']\" (click)=\"toggleNavBar()\">Inizia il tour</a></li>\r\n            <li *ngIf=\"authService.loggedIn()\"><a (click)=\"onLogoutClick()\" (click)=\"toggleNavBar()\" href=\"#\">Esci</a></li>\r\n          </ul>\r\n        </div><!--/.nav-collapse -->\r\n      </div>\r\n    </nav>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*--------------------------------\r\n\tMedia Queries\r\n\tused for outputting content either between media query tags\r\n\texample: basic usage\r\n\t.element {\r\n\t\twidth: 50%;\r\n\t\t@include mq('tablet-small') {\r\n\t\t\twidth: 20%;\r\n\t\t}\r\n\t}\r\n\texample: using max-width\r\n\t.element {\r\n\t\twidth: 50%;\r\n\t\t@include mq('tablet-small', 'max') {\r\n\t\t\twidth: 20%;\r\n\t\t}\r\n\t}\r\n*/\n/*--------------------------------\r\n\tMargin / Padding Quick Resets\r\n\texample: top & bottom margin set to $spacing-unit\r\n\t.element {\r\n\t\t@include push--ends;\r\n\t}\r\n\texample: left & right padding set to $spacing-unit--small\r\n\t.element {\r\n\t\t@include soft--sides($spacing-unit--small);\r\n\t}\r\n*/\n/*--------------------------------\r\n\tHelper mixins\r\n*/\n/*--------------------------------\r\n\tForm input placeholder text\r\n\texample:\r\n\tinput,\r\n\ttextarea {\r\n\t\t@include input-placeholder {\r\n\t\t\tcolor: $grey;\r\n\t\t}\r\n\t}\r\n*/\n/*--------------------------------\r\n\tRetina images\r\n\texample:\r\n\t.element {\r\n\t\t@include retina {\r\n\t\t\tbackground-image: url(../img/background@2x.png);\r\n\t\t}\r\n\t}\r\n*/\n/*--------------------------------\r\n\tContent margins\r\n\tfore removing first/last child margins\r\n\texample: default\r\n\t.element {\r\n\t\t@include content-margins;\r\n\t}\r\n\toutput:\r\n\t.element > *:first-child {\r\n\t\tmargin-top: 0;\r\n\t}\r\n\t.element > *:last-child {\r\n\t\tmargin-bottom: 0;\r\n\t}\r\n\texample: empty selector\r\n\t.element {\r\n\t\t@include content-margins('false');\r\n\t}\r\n\toutput:\r\n\t.element:first-child {\r\n\t\tmargin-top: 0;\r\n\t}\r\n\t.element:last-child {\r\n\t\tmargin-bottom: 0;\r\n\t}\r\n*/\n/*--------------------------------\r\n\tCSS Triangle\r\n\tused for creating CSS only triangles\r\n\texample:\r\n\t.element {\r\n\t\t&::before {\r\n\t\t\t@include css-triangle(blue, down);\r\n\t\t}\r\n\t}\r\n*/\n/*--------------------------------\r\n\tHide text\r\n\texample:\r\n\t.element {\r\n\t\t@include hide-text;\r\n\t}\r\n*/\n/*--------------------------------\r\n\tResponsive ratio\r\n\tUsed for creating scalable elements that maintain the same ratio\r\n\texample:\r\n\t.element {\r\n\t\t@include responsive-ratio(400, 300);\r\n\t}\r\n*/\n/*--------------------------------\r\n\tTypography\r\n\tText image replacement, with responsive ratio\r\n\tHTML:\r\n\t<h1 class=\"element\">\r\n\t\t<span>Text to replace</span>\r\n\t</h1>\r\n\texample:\r\n\t.element {\r\n\t\t@include typography(200, 50, 'hello-world');\r\n\t}\r\n*/\n/*--------------------------------\r\n\tIcon\r\n\tFor using fontastic icons in pseudo elements\r\n*/\n/*--------------------------------\r\n\tColours\r\n\tbackground, colour, etc. match up with colour map in _variables.scss\r\n\tmodify to suit per project\r\n*/\n/*--------------------------------\r\n\tMisc\r\n*/\n/*--------------------------------\r\n\tFluid Property\r\n\thttp://www.adrenalinmedia.com.au/the-agency/insights/this-changes-everything-css-fluid-properties.aspx\r\n\tHTML:\r\n\t<h1 class=\"element\">\r\n\t\t<span>Text to replace</span>\r\n\t</h1>\r\n\texample:\r\n\th1 {\r\n\t\t@include fp(font-size, 50, 100); // 50px at 320, 100px at 1920;\r\n\t}\r\n\toutput:\r\n\th1 {\r\n\t\tfont-size: calc(3.125vw + 40px); //This is the magic!\r\n\t}\r\n\t@media (max-width:320px){ //Clips the start to the min value\r\n\t\tfont-size:50px;\r\n\t}\r\n\t@media (min-width:1920px){ //Clips the end to the max value\r\n\t\tfont-size:100px;\r\n\t}\r\n*/\n.navbar {\n  font-family: milanfont; }\n\n.navbar-default {\n  text-transform: uppercase;\n  background-color: black;\n  color: white;\n  border-color: #eeeeee; }\n\n.navbar-toggle {\n  z-index: 1; }\n  @media only screen and (max-width: 768px) {\n    .navbar-toggle {\n      background-color: inherit; } }\n\n@media only screen and (max-width: 768px) {\n  .navbar-toggle:hover {\n    background-color: inherit; } }\n\n@media only screen and (max-width: 768px) {\n  .navbar-collapse {\n    border-top: 0px; } }\n\nnavbar-alignit .navbar-header {\n  -webkit-transform-style: preserve-3d;\n  transform-style: preserve-3d;\n  height: 50px; }\n\n.navbar-alignit {\n  top: 50%;\n  display: block;\n  position: relative;\n  height: auto;\n  -webkit-transform: translate(0, -50%);\n          transform: translate(0, -50%);\n  margin-right: 15px;\n  margin-left: 15px; }\n\n.navbar-brand {\n  padding: 5px;\n  width: 220px; }\n\n.navbar-brand > img {\n  float: left;\n  margin-right: 5px;\n  height: 100%; }\n\n.navbar-title {\n  padding-top: 5px;\n  height: 30px;\n  cursor: default;\n  color: white; }\n\n.navbar-nav > li > a {\n  color: white; }\n\n.navbar-nav > .active > a,\n.navbar-nav > .active > a:hover,\n.navbar-nav > li > a:hover {\n  color: #d9320f; }\n\n.navbar-title {\n  text-transform: none; }\n\n.navbar {\n  border: 0px; }\n\n@media only screen and (min-width: 768px) and (max-width: 1440px) {\n  .navbar {\n    border: 0px; } }\n\n/*@media only screen and (max-width: 799px){\r\n  .navbar-toggle,\r\n  .navbar-toggle:hover{\r\n    background-color: inherit;\r\n  }\r\n  .navbar-collapse{\r\n    border-top: 0px;\r\n  }\r\n}*/\n/*@media only screen and (min-width: 800px) and (max-width: 1399px){\r\n  .navbar{\r\n    border: 0px;\r\n  }\r\n}*/\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_text_to_speech_service__ = __webpack_require__("../../../../../src/app/services/text-to-speech.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





let NavbarComponent = class NavbarComponent {
    constructor(authService, router, flashMessage, textService) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
        this.textService = textService;
    }
    ngOnInit() {
        console.log(this.div.nativeElement);
    }
    onLogoutClick() {
        this.authService.logout();
        this.flashMessage.show('Logout effettuato', {
            cssClass: 'alert-success',
            timeout: 3000
        });
        this.router.navigate(['']);
        this.textService.back();
        return false;
    }
    toggleNavBar() {
        $('.navbar-collapse').collapse('hide');
        this.textService.back();
    }
};
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('pino'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
], NavbarComponent.prototype, "div", void 0);
NavbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-navbar',
        template: __webpack_require__("../../../../../src/app/components/navbar/navbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/navbar/navbar.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__services_text_to_speech_service__["a" /* TextToSpeechService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_text_to_speech_service__["a" /* TextToSpeechService */]) === "function" && _e || Object])
], NavbarComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"input\">\r\n  <h2 class=\"page-header\">Inserisci i dati dell'utente</h2>\r\n  <form (submit)=\"onRegisterSubmit()\">\r\n    <div class=\"form-group\">\r\n      <label>Nome</label>\r\n      <input type=\"text\" [(ngModel)]=\"name\" name=\"name\" class=\"form-control\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label>Username</label>\r\n      <input type=\"text\" [(ngModel)]=\"username\" name=\"username\" class=\"form-control\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label>Email</label>\r\n      <input type=\"text\" [(ngModel)]=\"email\" name=\"email\" class=\"form-control\" >\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label>Numero di ticket</label>\r\n      <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\">\r\n    </div>\r\n    <input type=\"submit\" class=\"btn btn-primary\" value=\"Registra\">\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*--------------------------------\r\n\tMedia Queries\r\n\tused for outputting content either between media query tags\r\n\texample: basic usage\r\n\t.element {\r\n\t\twidth: 50%;\r\n\t\t@include mq('tablet-small') {\r\n\t\t\twidth: 20%;\r\n\t\t}\r\n\t}\r\n\texample: using max-width\r\n\t.element {\r\n\t\twidth: 50%;\r\n\t\t@include mq('tablet-small', 'max') {\r\n\t\t\twidth: 20%;\r\n\t\t}\r\n\t}\r\n*/\n/*--------------------------------\r\n\tMargin / Padding Quick Resets\r\n\texample: top & bottom margin set to $spacing-unit\r\n\t.element {\r\n\t\t@include push--ends;\r\n\t}\r\n\texample: left & right padding set to $spacing-unit--small\r\n\t.element {\r\n\t\t@include soft--sides($spacing-unit--small);\r\n\t}\r\n*/\n/*--------------------------------\r\n\tHelper mixins\r\n*/\n/*--------------------------------\r\n\tForm input placeholder text\r\n\texample:\r\n\tinput,\r\n\ttextarea {\r\n\t\t@include input-placeholder {\r\n\t\t\tcolor: $grey;\r\n\t\t}\r\n\t}\r\n*/\n/*--------------------------------\r\n\tRetina images\r\n\texample:\r\n\t.element {\r\n\t\t@include retina {\r\n\t\t\tbackground-image: url(../img/background@2x.png);\r\n\t\t}\r\n\t}\r\n*/\n/*--------------------------------\r\n\tContent margins\r\n\tfore removing first/last child margins\r\n\texample: default\r\n\t.element {\r\n\t\t@include content-margins;\r\n\t}\r\n\toutput:\r\n\t.element > *:first-child {\r\n\t\tmargin-top: 0;\r\n\t}\r\n\t.element > *:last-child {\r\n\t\tmargin-bottom: 0;\r\n\t}\r\n\texample: empty selector\r\n\t.element {\r\n\t\t@include content-margins('false');\r\n\t}\r\n\toutput:\r\n\t.element:first-child {\r\n\t\tmargin-top: 0;\r\n\t}\r\n\t.element:last-child {\r\n\t\tmargin-bottom: 0;\r\n\t}\r\n*/\n/*--------------------------------\r\n\tCSS Triangle\r\n\tused for creating CSS only triangles\r\n\texample:\r\n\t.element {\r\n\t\t&::before {\r\n\t\t\t@include css-triangle(blue, down);\r\n\t\t}\r\n\t}\r\n*/\n/*--------------------------------\r\n\tHide text\r\n\texample:\r\n\t.element {\r\n\t\t@include hide-text;\r\n\t}\r\n*/\n/*--------------------------------\r\n\tResponsive ratio\r\n\tUsed for creating scalable elements that maintain the same ratio\r\n\texample:\r\n\t.element {\r\n\t\t@include responsive-ratio(400, 300);\r\n\t}\r\n*/\n/*--------------------------------\r\n\tTypography\r\n\tText image replacement, with responsive ratio\r\n\tHTML:\r\n\t<h1 class=\"element\">\r\n\t\t<span>Text to replace</span>\r\n\t</h1>\r\n\texample:\r\n\t.element {\r\n\t\t@include typography(200, 50, 'hello-world');\r\n\t}\r\n*/\n/*--------------------------------\r\n\tIcon\r\n\tFor using fontastic icons in pseudo elements\r\n*/\n/*--------------------------------\r\n\tColours\r\n\tbackground, colour, etc. match up with colour map in _variables.scss\r\n\tmodify to suit per project\r\n*/\n/*--------------------------------\r\n\tMisc\r\n*/\n/*--------------------------------\r\n\tFluid Property\r\n\thttp://www.adrenalinmedia.com.au/the-agency/insights/this-changes-everything-css-fluid-properties.aspx\r\n\tHTML:\r\n\t<h1 class=\"element\">\r\n\t\t<span>Text to replace</span>\r\n\t</h1>\r\n\texample:\r\n\th1 {\r\n\t\t@include fp(font-size, 50, 100); // 50px at 320, 100px at 1920;\r\n\t}\r\n\toutput:\r\n\th1 {\r\n\t\tfont-size: calc(3.125vw + 40px); //This is the magic!\r\n\t}\r\n\t@media (max-width:320px){ //Clips the start to the min value\r\n\t\tfont-size:50px;\r\n\t}\r\n\t@media (min-width:1920px){ //Clips the end to the max value\r\n\t\tfont-size:100px;\r\n\t}\r\n*/\n.page-header {\n  margin-top: 18px; }\n\n.input {\n  padding-left: 5%;\n  padding-right: 5%; }\n  @media only screen and (min-width: 1440px) {\n    .input {\n      padding: 1% 20% !important; } }\n  @media only screen and (min-width: 768px) {\n    .input {\n      padding: 1% 10%; } }\n\n@media only screen and (min-width: 1440px) {\n  .content {\n    padding: 1% 20% !important; } }\n\n@media only screen and (min-width: 768px) {\n  .content {\n    padding: 1% 10%; } }\n\n.page-header,\n.btn-primary {\n  font-family: milanfont; }\n\n.form-group {\n  font-family: milanregular; }\n\n/*@media only screen and (min-width: 1400px) {\r\n  .content,\r\n  .input{\r\n    padding: 1% 20% !important;\r\n  }\r\n}\r\n@media only screen and (min-width: 800px){\r\n  .content,\r\n  .input{\r\n    padding: 1% 10%;\r\n  }\r\n}*/\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





let RegisterComponent = class RegisterComponent {
    constructor(validateService, flashMessage, authService, router) {
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
    }
    ngOnInit() {
    }
    onRegisterSubmit() {
        const user = {
            name: this.name,
            email: this.email,
            username: this.username,
            password: this.password
        };
        // Required Fields
        if (!this.validateService.validateRegister(user)) {
            this.flashMessage.show('Please fill in all fields', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        // Validate Email
        if (!this.validateService.validateEmail(user.email)) {
            this.flashMessage.show('Please use a valid email', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        // Register user
        this.authService.registerUser(user).subscribe(data => {
            if (data.success) {
                this.flashMessage.show('You are now registered and can log in', { cssClass: 'alert-success', timeout: 3000 });
                this.router.navigate(['/login']);
            }
            else {
                this.flashMessage.show('Something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
                this.router.navigate(['/register']);
            }
        });
    }
};
RegisterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-register',
        template: __webpack_require__("../../../../../src/app/components/register/register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/register/register.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _d || Object])
], RegisterComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/single-footballer/single-footballer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\r\n    <h1 class=\"page-header header-title\">{{footballer.name}} {{footballer.surname}}\r\n      <a class=\"btn btn-back\" [routerLink]=\"['/hall-of-fame']\" (click)=\"back()\">Indietro</a>\r\n    </h1>\r\n    <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-4 fbcontentimage\">\r\n          <img class=\"fb-image\" src={{footballer.photoPath.normal}} alt=\"footballer photo\">\r\n          <img class=\"fb-image-small\" src={{footballer.photoPath.normal}} alt=\"footballer photo\">\r\n      </div>\r\n\r\n      <div class=\"col-md-4 fb-info\">\r\n        <ul class=\"info\">\r\n          <div class=\"list-group-item\">\r\n            <img class=\"stats img-stats\" src=\"../../assets/hall-of-fame/datanascita.png\" alt=\"icon-appearences\">\r\n            <li class=\"stats\">Data di nascita: <strong>{{footballer.dateBorn.day}}.{{footballer.dateBorn.month}}.{{footballer.dateBorn.year}}</strong></li>\r\n          </div>\r\n          <div class=\"list-group-item\">\r\n            <img class=\"stats img-stats\" src=\"../../assets/hall-of-fame/numeromaglia.png\" alt=\"icon-appearences\">\r\n            <li class=\"stats\">Numero di maglia: <strong>{{footballer.numberShirt}}</strong></li>\r\n          </div>\r\n          <div class=\"list-group-item\">\r\n            <img class=\"stats img-stats\" src=\"../../assets/hall-of-fame/presenze.png\" alt=\"icon-appearences\">\r\n            <li class=\"stats\">Presenze totali: <strong>{{getSumAppearences(footballer)}}</strong></li>\r\n          </div>\r\n          <div class=\"list-group-item\">\r\n            <img class=\"stats img-stats\" src=\"../../assets/hall-of-fame/goal.png\" alt=\"icon-appearences\">\r\n            <li class=\"stats\">Goal totali: <strong>{{getSumGoals(footballer)}}</strong></li>\r\n          </div>\r\n          <div class=\"list-group-item\">\r\n            <img class=\"stats img-stats\" src=\"../../assets/hall-of-fame/nazionalita.png\" alt=\"icon-appearences\">\r\n            <li class=\"stats\">Nazionalità: <strong>{{footballer.nationality}}</strong></li>\r\n          </div>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </div>\r\n      <div class=\"palmares\">\r\n        <h2 class=\"page-header\">Palmares con il Milan</h2>\r\n          <div class=\"col-md-4 content-trofeo\" *ngFor=\"let trophy of footballer.trophiesWon\">\r\n            <img class=\"trofeo trophyPic\" src={{getThrophyPath(trophy)}} alt=\"trophy-icon\" >\r\n            <li class=\"list-group-item trofeo numerovittorie\"><strong>{{trophy.numberofWin}}</strong></li>\r\n            <li class=\"list-group-item trofeo\">{{trophy.name}}</li>\r\n          </div>\r\n      </div>\r\n      <div class=\"row rowbiographycarriera\">\r\n        <div class=\"col-md-4 biography\">\r\n            <h2 class=\"page-header\">Biografia</h2>\r\n            <div class=\"audio-control\">\r\n              <p id=\"infoaudio\" class=\"audio-info\">Clicca per ascoltare la biografia</p>\r\n              <button id=\"btnaudio\" class=\"btn btn-audio\" type=\"button\" (click)=\"speak(footballer.description)\"></button>\r\n            </div>\r\n            <a class=\"list-group-item description\">{{footballer.description}}</a>\r\n        </div>\r\n        <div class=\"col-md-4 carriera\">\r\n          <h2 class=\"page-header\">Carriera nel Milan</h2>\r\n            <table>\r\n              <tr>\r\n                <th  class=\"top-table\">Stagione</th>\r\n                <th  class=\"top-table\">Presenze</th>\r\n                <th class=\"top-table\">Goal</th>\r\n                <th class=\"top-table\">Assist</th>\r\n              </tr>\r\n              <tr *ngFor=\"let stat of footballer.statics\">\r\n                <td headers=\"Stagione\">{{stat.year}}</td>\r\n                <td headers=\"Presenze\">{{stat.apperances}}</td>\r\n                <td headers=\"Goal\">{{stat.goals}}</td>\r\n                <td headers=\"Assist\">{{stat.assists}}</td>\r\n              </tr>\r\n            </table>\r\n        </div>\r\n      </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/single-footballer/single-footballer.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*--------------------------------\r\n\tMedia Queries\r\n\tused for outputting content either between media query tags\r\n\texample: basic usage\r\n\t.element {\r\n\t\twidth: 50%;\r\n\t\t@include mq('tablet-small') {\r\n\t\t\twidth: 20%;\r\n\t\t}\r\n\t}\r\n\texample: using max-width\r\n\t.element {\r\n\t\twidth: 50%;\r\n\t\t@include mq('tablet-small', 'max') {\r\n\t\t\twidth: 20%;\r\n\t\t}\r\n\t}\r\n*/\n/*--------------------------------\r\n\tMargin / Padding Quick Resets\r\n\texample: top & bottom margin set to $spacing-unit\r\n\t.element {\r\n\t\t@include push--ends;\r\n\t}\r\n\texample: left & right padding set to $spacing-unit--small\r\n\t.element {\r\n\t\t@include soft--sides($spacing-unit--small);\r\n\t}\r\n*/\n/*--------------------------------\r\n\tHelper mixins\r\n*/\n/*--------------------------------\r\n\tForm input placeholder text\r\n\texample:\r\n\tinput,\r\n\ttextarea {\r\n\t\t@include input-placeholder {\r\n\t\t\tcolor: $grey;\r\n\t\t}\r\n\t}\r\n*/\n/*--------------------------------\r\n\tRetina images\r\n\texample:\r\n\t.element {\r\n\t\t@include retina {\r\n\t\t\tbackground-image: url(../img/background@2x.png);\r\n\t\t}\r\n\t}\r\n*/\n/*--------------------------------\r\n\tContent margins\r\n\tfore removing first/last child margins\r\n\texample: default\r\n\t.element {\r\n\t\t@include content-margins;\r\n\t}\r\n\toutput:\r\n\t.element > *:first-child {\r\n\t\tmargin-top: 0;\r\n\t}\r\n\t.element > *:last-child {\r\n\t\tmargin-bottom: 0;\r\n\t}\r\n\texample: empty selector\r\n\t.element {\r\n\t\t@include content-margins('false');\r\n\t}\r\n\toutput:\r\n\t.element:first-child {\r\n\t\tmargin-top: 0;\r\n\t}\r\n\t.element:last-child {\r\n\t\tmargin-bottom: 0;\r\n\t}\r\n*/\n/*--------------------------------\r\n\tCSS Triangle\r\n\tused for creating CSS only triangles\r\n\texample:\r\n\t.element {\r\n\t\t&::before {\r\n\t\t\t@include css-triangle(blue, down);\r\n\t\t}\r\n\t}\r\n*/\n/*--------------------------------\r\n\tHide text\r\n\texample:\r\n\t.element {\r\n\t\t@include hide-text;\r\n\t}\r\n*/\n/*--------------------------------\r\n\tResponsive ratio\r\n\tUsed for creating scalable elements that maintain the same ratio\r\n\texample:\r\n\t.element {\r\n\t\t@include responsive-ratio(400, 300);\r\n\t}\r\n*/\n/*--------------------------------\r\n\tTypography\r\n\tText image replacement, with responsive ratio\r\n\tHTML:\r\n\t<h1 class=\"element\">\r\n\t\t<span>Text to replace</span>\r\n\t</h1>\r\n\texample:\r\n\t.element {\r\n\t\t@include typography(200, 50, 'hello-world');\r\n\t}\r\n*/\n/*--------------------------------\r\n\tIcon\r\n\tFor using fontastic icons in pseudo elements\r\n*/\n/*--------------------------------\r\n\tColours\r\n\tbackground, colour, etc. match up with colour map in _variables.scss\r\n\tmodify to suit per project\r\n*/\n/*--------------------------------\r\n\tMisc\r\n*/\n/*--------------------------------\r\n\tFluid Property\r\n\thttp://www.adrenalinmedia.com.au/the-agency/insights/this-changes-everything-css-fluid-properties.aspx\r\n\tHTML:\r\n\t<h1 class=\"element\">\r\n\t\t<span>Text to replace</span>\r\n\t</h1>\r\n\texample:\r\n\th1 {\r\n\t\t@include fp(font-size, 50, 100); // 50px at 320, 100px at 1920;\r\n\t}\r\n\toutput:\r\n\th1 {\r\n\t\tfont-size: calc(3.125vw + 40px); //This is the magic!\r\n\t}\r\n\t@media (max-width:320px){ //Clips the start to the min value\r\n\t\tfont-size:50px;\r\n\t}\r\n\t@media (min-width:1920px){ //Clips the end to the max value\r\n\t\tfont-size:100px;\r\n\t}\r\n*/\n.audio-control {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n\n.audio-info {\n  margin-top: 1%;\n  color: black; }\n\n.btn-audio {\n  background-color: inherit;\n  background-image: url(" + __webpack_require__("../../../../../src/assets/play.png") + ");\n  width: 40px;\n  height: 40px;\n  background-position: center;\n  background-size: contain; }\n\n.content {\n  font-family: milanregular; }\n  @media only screen and (min-width: 1440px) {\n    .content {\n      padding: 1% 20% !important; } }\n  @media only screen and (min-width: 768px) {\n    .content {\n      padding: 1% 10%; } }\n\n.page-header {\n  margin-top: 18px; }\n\n.logo {\n  width: 75px;\n  height: 75px; }\n\n.page-header, th, .numerovittorie {\n  font-family: milanfont; }\n\n.btn-back {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  clear: none;\n  float: right;\n  padding-bottom: 8px;\n  background-color: #cccccc;\n  color: black;\n  font-size: 13px; }\n\n.numerovittorie {\n  font-size: 20px; }\n\nli, a, td {\n  font-family: milanregular;\n  font-size: 16px; }\n\ntable {\n  border-radius: 5px;\n  border-collapse: collapse;\n  width: 100%; }\n\ntd, th {\n  border: 1px solid #dddddd;\n  border-left: none;\n  border-right: none;\n  text-align: center;\n  padding: 8px; }\n\ntr:nth-child(even) {\n  background-color: #fde9e7; }\n\n.top-table {\n  border-top: none; }\n\n.fb-image,\n.fb-image-small {\n  border: 2px solid #dddddd;\n  border-radius: 5px; }\n\nul {\n  padding-left: 0px;\n  padding-top: 5px; }\n\n.list-group-item {\n  background: none;\n  border: none;\n  padding-left: 0px;\n  padding-right: 0px; }\n\n.col-md-4 {\n  width: auto; }\n\n.fb-info {\n  width: auto;\n  text-transform: uppercase; }\n  @media only screen and (max-width: 768px) {\n    .fb-info {\n      padding-left: 5%;\n      padding-right: 5%; } }\n  @media only screen and (min-width: 768px) {\n    .fb-info {\n      width: 350px !important; } }\n\n.description {\n  text-align: justify; }\n\n.fb-image-small {\n  width: 100%;\n  height: auto; }\n  @media only screen and (max-width: 560px) {\n    .fb-image-small {\n      width: 100%;\n      border: 0px;\n      border-radius: 0px; } }\n\n.fb-image {\n  display: none; }\n\n.swiper-slide {\n  padding-left: 5%;\n  padding-right: 5%;\n  padding-bottom: 5% !important; }\n\n.content-stats {\n  padding-left: 0px; }\n\n.stats {\n  display: inline; }\n\n.img-stats {\n  width: 40px;\n  height: 40px; }\n\n.content-trofeo {\n  margin-top: 2%;\n  margin-bottom: 2%;\n  padding-left: 0px;\n  padding-right: 0px;\n  display: inline-block;\n  width: 30%; }\n\n.trophyPic {\n  margin: auto;\n  width: 70px;\n  height: 70px; }\n\n.trofeo {\n  text-align: center;\n  display: block;\n  width: auto; }\n  @media only screen and (min-width: 768px) {\n    .trofeo {\n      display: inline; } }\n\n.swiper {\n  height: 100%;\n  width: 100%; }\n\n/*.audio-control{\r\n  display: -webkit-flex !important;\r\n  display: flex;\r\n  -webkit-justify-content: center;\r\n  justify-content: center;\r\n  -webkit-align-items: center;\r\n  align-items: center\r\n}\r\n.audio-info{\r\n  margin-top: 1%;\r\n  color: black;\r\n}\r\n.btn-audio{\r\n  background-color: inherit;\r\n  background-image: url('../../../assets/play.png');\r\n  background-position: center;\r\n  background-size: contain;\r\n  width: 40px;\r\n  height: 40px;\r\n}*/\n@media only screen and (max-width: 560px) {\n  .header-title {\n    background-color: #300803;\n    color: white;\n    border-bottom: 0px; } }\n\n@media only screen and (max-width: 768px) {\n  .header-title {\n    margin-top: 0px;\n    margin-bottom: 0px;\n    padding-top: 15px;\n    padding-bottom: 15px;\n    padding-left: 5%;\n    padding-right: 2%; } }\n\n@media only screen and (min-width: 768px) {\n  .palmares {\n    display: block;\n    clear: both; } }\n\n@media only screen and (max-width: 768px) {\n  .palmares {\n    padding-left: 5%;\n    padding-right: 5%; } }\n\n@media only screen and (max-width: 768px) {\n  .biography,\n  .carriera {\n    padding-left: 5%;\n    padding-right: 5%; } }\n\n.rowbiographycarriera {\n  margin-left: 0px;\n  margin-right: 0px; }\n\n@media only screen and (max-width: 768px) {\n  .fbcontentimage {\n    padding-left: 0px;\n    padding-right: 0px; } }\n\n@media only screen and (min-width: 768px) {\n  .row {\n    clear: left; } }\n\n@media only screen and (min-width: 768px) {\n  .info {\n    padding-left: 1%; } }\n\n@media only screen and (min-width: 768px) {\n  .biography,\n  .carriera {\n    width: 50% !important;\n    float: left; } }\n\n@media only screen and (min-width: 768px) {\n  .col-md-4 {\n    width: auto; } }\n\n@media only screen and (min-width: 768px) {\n  .fb-image {\n    display: block;\n    max-height: 400px; } }\n\n@media only screen and (min-width: 768px) {\n  .fb-image-small {\n    display: none; } }\n\n@media only screen and (min-width: 768px) {\n  .trophyPic {\n    width: 70px;\n    height: 70px; } }\n\n@media only screen and (min-width: 768px) {\n  .content-trofeo-trofeo {\n    padding: 2%;\n    display: inline;\n    width: 33,33333% !important; } }\n\n@media only screen and (min-width: 768px) {\n  .img-stats {\n    width: 50px;\n    height: 50px; } }\n\n@media only screen and (min-width: 768px) {\n  .list-group-item:hover {\n    text-decoration: none;\n    color: inherit;\n    background-color: inherit; } }\n\n/*@media only screen and (min-width: 1400px) {\r\n  .content{\r\n    padding: 1% 20% !important;\r\n  }\r\n}*/\n/*@media only screen and (max-width: 500px) {\r\n  .fb-image-small{\r\n    width: 100%;\r\n    border: 0px;\r\n    border-radius: 0px;\r\n  }\r\n  .header-title{\r\n    background-color: #300803;\r\n    color: white;\r\n    border-bottom: 0px;\r\n  }\r\n\r\n}*/\n/*@media only screen and (max-width: 799px) {\r\n  .fbcontentimage{\r\n    padding-left: 0px;\r\n    padding-right: 0px;\r\n  }*/\n/*.header-title{\r\n    margin-top: 0px;\r\n    margin-bottom: 0px;\r\n    padding-top: 15px;\r\n    padding-bottom: 15px;\r\n    padding-left: 5%;\r\n    padding-right: 2%;\r\n  }*/\n/*.fb-info,\r\n  .palmares{\r\n    padding-left: 5%;\r\n    padding-right: 5%;\r\n  }*/\n/*.biography,\r\n  .carriera{\r\n    padding-left: 10%;\r\n    padding-right: 10%;\r\n  }\r\n}*/\n/*.content{\r\n    padding: 1% 10%;\r\n  }*/\n/*.row{\r\n    clear:left;\r\n  }\r\n  .info {\r\n    padding-left: 1%;\r\n  }\r\n  /*.palmares{\r\n    display: block;\r\n    clear:both;\r\n  }*/\n/*.biography,\r\n  .carriera{\r\n    width: 50% !important;\r\n    float: left;\r\n  }\r\n  .col-md-4{\r\n    width:auto;\r\n  }\r\n  /*.fb-info{\r\n    width:350px;\r\n  }*/\n/*.fb-image{\r\n    display: block;\r\n    max-height: 400px;\r\n  }\r\n  .fb-image-small{\r\n    display: none;\r\n  }\r\n  /*.trofeo{\r\n    display: inline;\r\n  }*/\n/*.trophyPic{\r\n    width: 70px;\r\n    height: 70px;\r\n  }\r\n  .content-trofeo-trofeo{\r\n    padding: 2%;\r\n    display: inline;\r\n    width: 33,33333% !important;\r\n  }\r\n  .img-stats{\r\n    width: 50px;\r\n    height: 50px;\r\n  }\r\n  .list-group-item:hover{\r\n    text-decoration: none;\r\n    color: inherit;\r\n    background-color: inherit;\r\n  }\r\n}*/\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/single-footballer/single-footballer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_upload_data_service__ = __webpack_require__("../../../../../src/app/services/upload-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_text_to_speech_service__ = __webpack_require__("../../../../../src/app/services/text-to-speech.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SingleFootballerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let SingleFootballerComponent = class SingleFootballerComponent {
    constructor(uploadData, router, textService) {
        this.uploadData = uploadData;
        this.router = router;
        this.textService = textService;
        this.config = {
            pagination: '.swiper-pagination',
            paginationClickable: true,
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            spaceBetween: 0
        };
    }
    ngOnInit() {
        this.router.params.subscribe(params => this.footballer = JSON.parse(params["id"]));
        this.switcher = true;
        this.textService.endSpeach.subscribe(item => this.checkSubscribe(item));
    }
    checkSubscribe(item) {
        if (item == "SpeechFinished") {
            console.log("finitooo");
            var labelAudio = document.getElementById("infoaudio");
            var btnPlayStop = document.getElementById("btnaudio");
            labelAudio.innerHTML = "Clicca per ascoltare la biografia";
            btnPlayStop.style.backgroundImage = "url('../../../assets/play.png')";
            this.switcher = true;
        }
        else if (item == "Inizio") {
            console.log("inizio");
            var labelAudio = document.getElementById("infoaudio");
            var btnPlayStop = document.getElementById("btnaudio");
            labelAudio.innerHTML = "Clicca per stoppare l'ascolto";
            btnPlayStop.style.backgroundImage = "url('../../../assets/stop.png')"; // change it
            this.switcher = false;
        }
    }
    getSumAppearences(footballer) {
        let total = 0;
        for (var i = 0; i < footballer["statics"].length; i++) {
            total += footballer["statics"][i]["apperances"];
        }
        return total;
    }
    getSumGoals(footballer) {
        let total = 0;
        for (var i = 0; i < footballer["statics"].length; i++) {
            total += footballer["statics"][i]["goals"];
        }
        return total;
    }
    getThrophyPath(trophy) {
        switch (trophy.name) {
            case "Scudetto Serie A": return "../../assets/hall-of-fame/scudetto.png";
            case "Champions League": return "../../assets/hall-of-fame/championsleague.png";
            case "Coppa Italia TIM": return "../../assets/hall-of-fame/coppaitalia.png";
            case "UEFA Supercup": return "../../assets/hall-of-fame/supercoppaeuropea.png";
            case "FIFA Club's World Cup": return "../../assets/hall-of-fame/fifaworldcup.png";
            case "Supercoppa Italiana": return "../../assets/hall-of-fame/supercoppaitaliana.png";
            case "Coppa Intercontinentale": return "../../assets/hall-of-fame/intercontinentale.png";
            case "FIFA Pallone d'oro": return "../../assets/hall-of-fame/pallonedoro.png";
            default:
                return "../../assets/hall-of-fame/presenze.png";
                ;
        }
    }
    checkIfHasThrophy(footballer) {
        var size = Object.keys(footballer["trophiesWon"]).length;
        if (size == 0) {
            return false;
        }
        else {
            return true;
        }
    }
    speak(description) {
        this.textService.speach(description);
    }
    back() {
        this.textService.back();
    }
};
SingleFootballerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-single-footballer',
        template: __webpack_require__("../../../../../src/app/components/single-footballer/single-footballer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/single-footballer/single-footballer.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_upload_data_service__["a" /* UploadDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_upload_data_service__["a" /* UploadDataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_text_to_speech_service__["a" /* TextToSpeechService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_text_to_speech_service__["a" /* TextToSpeechService */]) === "function" && _c || Object])
], SingleFootballerComponent);

var _a, _b, _c;
//# sourceMappingURL=single-footballer.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/single-history/single-history.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\r\n  <h2 class=\"page-header\">{{history.name}}\r\n    <!--<a class=\"btn btn-back\" [routerLink]=\"['/history']\">Indietro</a>-->\r\n    <a class=\"btn btn-back\" [routerLink]=\"['/history']\" (click)=\"back()\">Indietro</a>\r\n  </h2>\r\n\r\n  <div class=\"history-item\">\r\n    <div class=\"up\">\r\n      <swiper class=\"swiper\" [config]=\"config\">\r\n          <div class=\"swiper-wrapper\">\r\n              <div class=\"swiper-slide\" *ngFor=\"let photo of history.additionalPhotoPath\">\r\n                <div [ngStyle]=\"{'background-image': 'url(' + photo.Path + ')'}\">\r\n                  <img class=\"story-img\" [src]=\"photo.path\" alt=\"story-img\">\r\n                </div>\r\n              </div>\r\n          </div>\r\n          <!-- Add Scrollbar -->\r\n            <div class=\"swiper-scrollbar\"></div>\r\n            <!-- Add Arrows -->\r\n            <div class=\"swiper-button-next\"></div>\r\n            <div class=\"swiper-button-prev\"></div>\r\n      </swiper>\r\n    </div>\r\n    <div>\r\n      <div class=\"audio-control\">\r\n        <p id=\"infoaudio\" class=\"audio-info\">Clicca per ascoltare la descrizione</p>\r\n        <button id=\"btnaudio\" class=\"btn btn-audio\" type=\"button\" (click)=\"speak(history.description.long)\"></button>\r\n      </div>\r\n      <p class=\"description\">{{history.description.long}}</p>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/single-history/single-history.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*--------------------------------\r\n\tMedia Queries\r\n\tused for outputting content either between media query tags\r\n\texample: basic usage\r\n\t.element {\r\n\t\twidth: 50%;\r\n\t\t@include mq('tablet-small') {\r\n\t\t\twidth: 20%;\r\n\t\t}\r\n\t}\r\n\texample: using max-width\r\n\t.element {\r\n\t\twidth: 50%;\r\n\t\t@include mq('tablet-small', 'max') {\r\n\t\t\twidth: 20%;\r\n\t\t}\r\n\t}\r\n*/\n/*--------------------------------\r\n\tMargin / Padding Quick Resets\r\n\texample: top & bottom margin set to $spacing-unit\r\n\t.element {\r\n\t\t@include push--ends;\r\n\t}\r\n\texample: left & right padding set to $spacing-unit--small\r\n\t.element {\r\n\t\t@include soft--sides($spacing-unit--small);\r\n\t}\r\n*/\n/*--------------------------------\r\n\tHelper mixins\r\n*/\n/*--------------------------------\r\n\tForm input placeholder text\r\n\texample:\r\n\tinput,\r\n\ttextarea {\r\n\t\t@include input-placeholder {\r\n\t\t\tcolor: $grey;\r\n\t\t}\r\n\t}\r\n*/\n/*--------------------------------\r\n\tRetina images\r\n\texample:\r\n\t.element {\r\n\t\t@include retina {\r\n\t\t\tbackground-image: url(../img/background@2x.png);\r\n\t\t}\r\n\t}\r\n*/\n/*--------------------------------\r\n\tContent margins\r\n\tfore removing first/last child margins\r\n\texample: default\r\n\t.element {\r\n\t\t@include content-margins;\r\n\t}\r\n\toutput:\r\n\t.element > *:first-child {\r\n\t\tmargin-top: 0;\r\n\t}\r\n\t.element > *:last-child {\r\n\t\tmargin-bottom: 0;\r\n\t}\r\n\texample: empty selector\r\n\t.element {\r\n\t\t@include content-margins('false');\r\n\t}\r\n\toutput:\r\n\t.element:first-child {\r\n\t\tmargin-top: 0;\r\n\t}\r\n\t.element:last-child {\r\n\t\tmargin-bottom: 0;\r\n\t}\r\n*/\n/*--------------------------------\r\n\tCSS Triangle\r\n\tused for creating CSS only triangles\r\n\texample:\r\n\t.element {\r\n\t\t&::before {\r\n\t\t\t@include css-triangle(blue, down);\r\n\t\t}\r\n\t}\r\n*/\n/*--------------------------------\r\n\tHide text\r\n\texample:\r\n\t.element {\r\n\t\t@include hide-text;\r\n\t}\r\n*/\n/*--------------------------------\r\n\tResponsive ratio\r\n\tUsed for creating scalable elements that maintain the same ratio\r\n\texample:\r\n\t.element {\r\n\t\t@include responsive-ratio(400, 300);\r\n\t}\r\n*/\n/*--------------------------------\r\n\tTypography\r\n\tText image replacement, with responsive ratio\r\n\tHTML:\r\n\t<h1 class=\"element\">\r\n\t\t<span>Text to replace</span>\r\n\t</h1>\r\n\texample:\r\n\t.element {\r\n\t\t@include typography(200, 50, 'hello-world');\r\n\t}\r\n*/\n/*--------------------------------\r\n\tIcon\r\n\tFor using fontastic icons in pseudo elements\r\n*/\n/*--------------------------------\r\n\tColours\r\n\tbackground, colour, etc. match up with colour map in _variables.scss\r\n\tmodify to suit per project\r\n*/\n/*--------------------------------\r\n\tMisc\r\n*/\n/*--------------------------------\r\n\tFluid Property\r\n\thttp://www.adrenalinmedia.com.au/the-agency/insights/this-changes-everything-css-fluid-properties.aspx\r\n\tHTML:\r\n\t<h1 class=\"element\">\r\n\t\t<span>Text to replace</span>\r\n\t</h1>\r\n\texample:\r\n\th1 {\r\n\t\t@include fp(font-size, 50, 100); // 50px at 320, 100px at 1920;\r\n\t}\r\n\toutput:\r\n\th1 {\r\n\t\tfont-size: calc(3.125vw + 40px); //This is the magic!\r\n\t}\r\n\t@media (max-width:320px){ //Clips the start to the min value\r\n\t\tfont-size:50px;\r\n\t}\r\n\t@media (min-width:1920px){ //Clips the end to the max value\r\n\t\tfont-size:100px;\r\n\t}\r\n*/\n.swiper-container {\n  width: 100%;\n  height: 100%; }\n\n.swiper-slide {\n  text-align: center;\n  font-size: 18px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center; }\n  @media only screen and (max-width: 768px) {\n    .swiper-slide {\n      background-color: #300803; } }\n\n@media only screen and (max-width: 768px) {\n  .swiper-button-next,\n  .swiper-button-prev {\n    visibility: hidden; } }\n\n@media only screen and (max-width: 768px) {\n  .up {\n    background-color: #300803; } }\n\n.audio-control {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n\n.audio-info {\n  margin-top: 1%;\n  color: black; }\n\n.btn-audio {\n  background-color: inherit;\n  background-image: url(" + __webpack_require__("../../../../../src/assets/play.png") + ");\n  width: 40px;\n  height: 40px;\n  background-position: center;\n  background-size: contain; }\n\n.content {\n  font-family: milanregular; }\n  @media only screen and (min-width: 1440px) {\n    .content {\n      padding: 1% 20% !important; } }\n  @media only screen and (min-width: 768px) {\n    .content {\n      padding: 1% 10%; } }\n\n.page-header {\n  margin: auto;\n  padding-top: 18px;\n  padding-bottom: 18px;\n  padding-left: 5%;\n  padding-right: 2%;\n  font-family: milanfont; }\n  @media only screen and (min-width: 768px) {\n    .page-header {\n      padding-left: 0px; } }\n  @media only screen and (max-width: 768px) {\n    .page-header {\n      background-color: #300803;\n      color: white;\n      border-bottom: 0px; } }\n\n.btn-back {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  clear: none;\n  float: right;\n  padding-bottom: 8px;\n  background-color: #cccccc;\n  color: black; }\n\n.description {\n  padding-top: 1% !important;\n  padding: 5%;\n  margin-bottom: 0px;\n  text-align: justify; }\n  @media only screen and (max-width: 768px) {\n    .description {\n      color: black; } }\n\n@media only screen and (max-width: 768px) {\n  .story-img {\n    width: auto;\n    max-height: 250px; } }\n\n@media only screen and (min-width: 768px) {\n  .story-img {\n    max-width: 1000px;\n    height: 450px;\n    padding: 2%; } }\n\n.audio-control {\n  margin-top: 2%; }\n\n/*.btn-back{\r\n  display: flex;\r\n  clear: none;\r\n  float:right;\r\n  padding-bottom: 8px;\r\n  background-color: #cccccc;\r\n  color: black;\r\n}\r\n\r\n.description{\r\n  padding-top: 1% !important;\r\n  padding: 5%;\r\n  margin-bottom: 0px;\r\n  text-align: justify;\r\n  @include mq('tablet' , 'max') {\r\n    color: black;\r\n  }\r\n}*/\n/*.swiper-container {\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n.swiper-slide {\r\n    text-align: center;\r\n    font-size: 18px;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: -webkit-flex;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n    -ms-flex-pack: center;\r\n    -webkit-justify-content: center;\r\n    justify-content: center;\r\n    -webkit-box-align: center;\r\n    -ms-flex-align: center;\r\n    -webkit-align-items: center;\r\n    align-items: center;\r\n    @include mq('tablet' , 'max') {\r\n      background-color: #300803;\r\n    }\r\n}\r\n\r\n.swiper-button-next,\r\n.swiper-button-prev{\r\n  @include mq('tablet' , 'max') {\r\n    visibility: hidden;\r\n  }\r\n}*/\n/*.audio-control{\r\n  display: -webkit-flex !important;\r\n  display: flex;\r\n  -webkit-justify-content: center;\r\n  justify-content: center;\r\n  -webkit-align-items: center;\r\n  align-items: center;\r\n  @include mq('tablet' , 'max') {\r\n    margin-top: 2%;\r\n  }\r\n}\r\n.audio-info{\r\n  margin-top: 1%;\r\n  color: black;\r\n}\r\n.btn-audio{\r\n  background-color: inherit;\r\n  background-image: url('../../../assets/play.png');\r\n  width: 40px;\r\n  height: 40px;\r\n  background-position: center;\r\n  background-size: contain;\r\n}*/\n/*.up{\r\n  @include mq('tablet' , 'max') {\r\n    background-color: #300803;\r\n  }\r\n}*/\n/* For width 400px and larger: */\n/*@media only screen and (min-width: 1400px) {\r\n  .content{\r\n    padding: 1% 20% !important;\r\n  }\r\n}*/\n/*.story-img{\r\n    width: auto;\r\n    max-height: 250px;\r\n  }\r\n  .page-header{\r\n    background-color: #300803;\r\n    color: white;\r\n    border-bottom: 0px;\r\n  }*/\n/*.up{\r\n    background-color: #300803;\r\n  }\r\n  .swiper-slide{\r\n    background-color: #300803;\r\n  }\r\n  .swiper-button-next,\r\n  .swiper-button-prev{\r\n    visibility: hidden;\r\n  }\r\n  /*.audio-control{\r\n    margin-top: 2%;\r\n  }\r\n  .description{\r\n    color: black;\r\n  }*/\n/*@media only screen and (min-width: 800px){\r\n  .content{\r\n    padding: 1% 10%;\r\n  }\r\n  .page-header{\r\n    padding-left: 0px;\r\n  }\r\n  .story-img{\r\n    max-width: 1000px;\r\n    height: 450px;\r\n    padding: 2%;\r\n  }\r\n}*/\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/single-history/single-history.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_upload_data_service__ = __webpack_require__("../../../../../src/app/services/upload-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_pass_data_service__ = __webpack_require__("../../../../../src/app/services/pass-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_text_to_speech_service__ = __webpack_require__("../../../../../src/app/services/text-to-speech.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SingleHistoryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






let SingleHistoryComponent = class SingleHistoryComponent {
    constructor(uploadData, router, passData, textService, routerin) {
        this.uploadData = uploadData;
        this.router = router;
        this.passData = passData;
        this.textService = textService;
        this.routerin = routerin;
        this.config = {
            scrollbar: '.swiper-scrollbar',
            scrollbarHide: true,
            slidesPerView: 'auto',
            centeredSlides: true,
            grabCursor: true,
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            spaceBetween: 30
        };
    }
    ngOnInit() {
        window.scrollTo(0, 0);
        this.history = JSON.parse(this.passData.getsingleComponent());
        this.textService.endSpeach.subscribe(item => this.checkSubscribe(item));
    }
    checkSubscribe(item) {
        if (item == "SpeechFinished") {
            console.log("finitooo");
            var labelAudio = document.getElementById("infoaudio");
            var btnPlayStop = document.getElementById("btnaudio");
            labelAudio.innerHTML = "Clicca per ascoltare la descrizione";
            btnPlayStop.style.backgroundImage = "url('../../../assets/play.png')";
            this.switcher = true;
        }
        else if (item == "Inizio") {
            console.log("inizio");
            var labelAudio = document.getElementById("infoaudio");
            var btnPlayStop = document.getElementById("btnaudio");
            labelAudio.innerHTML = "Clicca per stoppare l'ascolto";
            btnPlayStop.style.backgroundImage = "url('../../../assets/stop.png')"; // change it
            this.switcher = false;
        }
    }
    speak(description) {
        this.textService.speach(description);
    }
    back() {
        this.textService.back();
    }
};
SingleHistoryComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-single-history',
        template: __webpack_require__("../../../../../src/app/components/single-history/single-history.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/single-history/single-history.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_upload_data_service__["a" /* UploadDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_upload_data_service__["a" /* UploadDataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_pass_data_service__["a" /* PassDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_pass_data_service__["a" /* PassDataService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_text_to_speech_service__["a" /* TextToSpeechService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_text_to_speech_service__["a" /* TextToSpeechService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _e || Object])
], SingleHistoryComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=single-history.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/single-trophy/single-trophy.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\r\n  <h2 class=\"page-header\">{{trophy.name}}\r\n    <a class=\"btn btn-back\" [routerLink]=\"['/trophies']\" (click)=\"back()\">Indietro</a>\r\n  </h2>\r\n    <ul class=\"nav nav-tabs\" >\r\n      <ng-container *ngFor=\"let winner of trophy.trophiesWon;first as firstElement\">\r\n        <li *ngIf=\"firstElement\" class=\"active\">\r\n          <a href=\"#{{winner.year}}\" data-toggle=\"tab\" aria-expanded=\"true\" (click)=\"back()\">{{winner.year}}</a>\r\n        </li>\r\n        <li *ngIf=\"!firstElement\" class=\"\">\r\n          <a href=\"#{{winner.year}}\" data-toggle=\"tab\" aria-expanded=\"false\" (click)=\"back()\">{{winner.year}}</a>\r\n        </li>\r\n      </ng-container>\r\n    </ul>\r\n    <div id=\"myTabContent\" class=\"tab-content\">\r\n      <ng-container *ngFor=\"let winner of trophy.trophiesWon; first as isFirst\">\r\n        <div *ngIf=\"isFirst\" class=\"tab-pane fade active in\" id=\"{{winner.year}}\">\r\n          <div class=\"up\">\r\n          <swiper [config]=\"config\">\r\n            <div class=\"swiper-wrapper\">\r\n              <div class=\"swiper-slide\" *ngFor=\"let img of winner.photoList\">\r\n                <figure>\r\n                  <img class=\"story-img\" [src]=\"img.path\" alt=\"winner-img\">\r\n                </figure>\r\n              </div>\r\n            </div>\r\n            <!-- Add Scrollbar -->\r\n              <div class=\"swiper-scrollbar\"></div>\r\n              <!-- Add Arrows -->\r\n              <div class=\"swiper-button-next\"></div>\r\n              <div class=\"swiper-button-prev\"></div>\r\n          </swiper>\r\n        </div>\r\n        <div class=\"audio-control\">\r\n          <p id=\"infoaudio\" class=\"audio audio-info\">Clicca per ascoltare la descrizione</p>\r\n          <button id=\"btnaudio\" class=\"audio btn btn-audio\" type=\"button\" (click)=\"speak(winner.description)\"></button>\r\n        </div>\r\n          <p class=\"description\">{{winner.description}}</p>\r\n        </div>\r\n        <div *ngIf=\"!isFirst\" class=\"tab-pane fade\" id=\"{{winner.year}}\">\r\n          <div class=\"up\">\r\n          <swiper [config]=\"config\">\r\n            <div class=\"swiper-wrapper\">\r\n              <div class=\"swiper-slide\" *ngFor=\"let img of winner.photoList\">\r\n                <figure>\r\n                  <img class=\"story-img\" [src]=\"img.path\" alt=\"winner-img\">\r\n                </figure>\r\n              </div>\r\n            </div>\r\n            <!-- Add Scrollbar -->\r\n              <div class=\"swiper-scrollbar\"></div>\r\n              <!-- Add Arrows -->\r\n              <div class=\"swiper-button-next\"></div>\r\n              <div class=\"swiper-button-prev\"></div>\r\n          </swiper>\r\n        </div>\r\n        <div class=\"audio-control\">\r\n          <p id=\"infoaudio2\" class=\"audio audio-info\">Clicca per ascoltare la descrizione</p>\r\n          <button id=\"btnaudio2\" class=\"audio btn btn-audio\" type=\"button\" (click)=\"speak(winner.description)\"></button>\r\n        </div>\r\n          <p class=\"description\">{{winner.description}}</p>\r\n        </div>\r\n      </ng-container>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/single-trophy/single-trophy.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*--------------------------------\r\n\tMedia Queries\r\n\tused for outputting content either between media query tags\r\n\texample: basic usage\r\n\t.element {\r\n\t\twidth: 50%;\r\n\t\t@include mq('tablet-small') {\r\n\t\t\twidth: 20%;\r\n\t\t}\r\n\t}\r\n\texample: using max-width\r\n\t.element {\r\n\t\twidth: 50%;\r\n\t\t@include mq('tablet-small', 'max') {\r\n\t\t\twidth: 20%;\r\n\t\t}\r\n\t}\r\n*/\n/*--------------------------------\r\n\tMargin / Padding Quick Resets\r\n\texample: top & bottom margin set to $spacing-unit\r\n\t.element {\r\n\t\t@include push--ends;\r\n\t}\r\n\texample: left & right padding set to $spacing-unit--small\r\n\t.element {\r\n\t\t@include soft--sides($spacing-unit--small);\r\n\t}\r\n*/\n/*--------------------------------\r\n\tHelper mixins\r\n*/\n/*--------------------------------\r\n\tForm input placeholder text\r\n\texample:\r\n\tinput,\r\n\ttextarea {\r\n\t\t@include input-placeholder {\r\n\t\t\tcolor: $grey;\r\n\t\t}\r\n\t}\r\n*/\n/*--------------------------------\r\n\tRetina images\r\n\texample:\r\n\t.element {\r\n\t\t@include retina {\r\n\t\t\tbackground-image: url(../img/background@2x.png);\r\n\t\t}\r\n\t}\r\n*/\n/*--------------------------------\r\n\tContent margins\r\n\tfore removing first/last child margins\r\n\texample: default\r\n\t.element {\r\n\t\t@include content-margins;\r\n\t}\r\n\toutput:\r\n\t.element > *:first-child {\r\n\t\tmargin-top: 0;\r\n\t}\r\n\t.element > *:last-child {\r\n\t\tmargin-bottom: 0;\r\n\t}\r\n\texample: empty selector\r\n\t.element {\r\n\t\t@include content-margins('false');\r\n\t}\r\n\toutput:\r\n\t.element:first-child {\r\n\t\tmargin-top: 0;\r\n\t}\r\n\t.element:last-child {\r\n\t\tmargin-bottom: 0;\r\n\t}\r\n*/\n/*--------------------------------\r\n\tCSS Triangle\r\n\tused for creating CSS only triangles\r\n\texample:\r\n\t.element {\r\n\t\t&::before {\r\n\t\t\t@include css-triangle(blue, down);\r\n\t\t}\r\n\t}\r\n*/\n/*--------------------------------\r\n\tHide text\r\n\texample:\r\n\t.element {\r\n\t\t@include hide-text;\r\n\t}\r\n*/\n/*--------------------------------\r\n\tResponsive ratio\r\n\tUsed for creating scalable elements that maintain the same ratio\r\n\texample:\r\n\t.element {\r\n\t\t@include responsive-ratio(400, 300);\r\n\t}\r\n*/\n/*--------------------------------\r\n\tTypography\r\n\tText image replacement, with responsive ratio\r\n\tHTML:\r\n\t<h1 class=\"element\">\r\n\t\t<span>Text to replace</span>\r\n\t</h1>\r\n\texample:\r\n\t.element {\r\n\t\t@include typography(200, 50, 'hello-world');\r\n\t}\r\n*/\n/*--------------------------------\r\n\tIcon\r\n\tFor using fontastic icons in pseudo elements\r\n*/\n/*--------------------------------\r\n\tColours\r\n\tbackground, colour, etc. match up with colour map in _variables.scss\r\n\tmodify to suit per project\r\n*/\n/*--------------------------------\r\n\tMisc\r\n*/\n/*--------------------------------\r\n\tFluid Property\r\n\thttp://www.adrenalinmedia.com.au/the-agency/insights/this-changes-everything-css-fluid-properties.aspx\r\n\tHTML:\r\n\t<h1 class=\"element\">\r\n\t\t<span>Text to replace</span>\r\n\t</h1>\r\n\texample:\r\n\th1 {\r\n\t\t@include fp(font-size, 50, 100); // 50px at 320, 100px at 1920;\r\n\t}\r\n\toutput:\r\n\th1 {\r\n\t\tfont-size: calc(3.125vw + 40px); //This is the magic!\r\n\t}\r\n\t@media (max-width:320px){ //Clips the start to the min value\r\n\t\tfont-size:50px;\r\n\t}\r\n\t@media (min-width:1920px){ //Clips the end to the max value\r\n\t\tfont-size:100px;\r\n\t}\r\n*/\n.swiper-container {\n  width: 100%;\n  height: 100%; }\n\n.swiper-slide {\n  text-align: center;\n  font-size: 18px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center; }\n  @media only screen and (max-width: 768px) {\n    .swiper-slide {\n      background-color: #300803; } }\n\n@media only screen and (max-width: 768px) {\n  .swiper-button-next,\n  .swiper-button-prev {\n    visibility: hidden; } }\n\n@media only screen and (max-width: 768px) {\n  .up {\n    background-color: #300803; } }\n\n.audio-control {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n\n.audio-info {\n  margin-top: 1%;\n  color: black; }\n\n.btn-audio {\n  background-color: inherit;\n  background-image: url(" + __webpack_require__("../../../../../src/assets/play.png") + ");\n  width: 40px;\n  height: 40px;\n  background-position: center;\n  background-size: contain; }\n\n.content {\n  font-family: milanregular; }\n  @media only screen and (min-width: 1440px) {\n    .content {\n      padding: 1% 20% !important; } }\n  @media only screen and (min-width: 768px) {\n    .content {\n      padding: 1% 10%; } }\n\n.page-header {\n  margin: auto;\n  padding-top: 18px;\n  padding-bottom: 18px;\n  padding-left: 5%;\n  padding-right: 2%;\n  font-family: milanfont; }\n  @media only screen and (min-width: 768px) {\n    .page-header {\n      padding-left: 0px; } }\n  @media only screen and (max-width: 768px) {\n    .page-header {\n      background-color: #300803;\n      color: white;\n      border-bottom: 0px; } }\n\n.btn-back {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  clear: none;\n  float: right;\n  padding-bottom: 8px;\n  background-color: #cccccc;\n  color: black; }\n\n.description {\n  padding-top: 1% !important;\n  padding: 5%;\n  margin-bottom: 0px;\n  text-align: justify; }\n  @media only screen and (max-width: 768px) {\n    .description {\n      color: black; } }\n\n.content {\n  /*font-family: milanregular;\r\n  @include mq('desktop-wide') {\r\n    padding: 1% 20% !important;\r\n  }*/ }\n  @media only screen and (min-width: 768px) {\n    .content {\n      padding-left: 10%;\n      padding-right: 10%; } }\n\n/*.page-header{\r\n  margin: auto;\r\n  padding-top: 18px;\r\n  padding-bottom: 18px;\r\n  padding-left: 5%;\r\n  padding-right: 2%;\r\n  font-family: milanfont;\r\n  @include mq('tablet') {\r\n    padding-left: 0px;\r\n    border-bottom: 0px;\r\n  }\r\n  @include mq('tablet' , 'max') {\r\n    background-color: #300803;\r\n    color: white;\r\n    border-bottom: 0px;\r\n  }\r\n}\r\n.btn-back{\r\n  display: flex;\r\n  clear: none;\r\n  float:right;\r\n  padding-bottom: 8px;\r\n  background-color: #cccccc;\r\n  color: black;\r\n}*/\n.tab,\n.description-tab {\n  width: auto;\n  height: auto; }\n\n.tab-content {\n  padding-left: 0px !important;\n  padding-right: 0px !important; }\n  @media only screen and (min-width: 768px) {\n    .tab-content {\n      padding-top: 0px; } }\n\nfigcaption {\n  font-family: milanregular;\n  position: absolute; }\n\n/*.description{\r\n  padding-top: 1% !important;\r\n  padding: 5%;\r\n  margin-bottom: 0px;\r\n  text-align: justify;\r\n}*/\n/*.swiper-container {\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n.swiper-slide {\r\n  text-align: center;\r\n  font-size: 18px;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: -webkit-flex;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n  -ms-flex-pack: center;\r\n  -webkit-justify-content: center;\r\n  justify-content: center;\r\n  -webkit-box-align: center;\r\n  -ms-flex-align: center;\r\n  -webkit-align-items: center;\r\n  align-items: center;\r\n  @include mq('tablet' , 'max') {\r\n    background-color: #300803;\r\n  }\r\n}*/\n.nav {\n  font-family: milanfont; }\n  @media only screen and (min-width: 768px) {\n    .nav {\n      padding-left: 5%;\n      padding-right: 5%;\n      margin-bottom: 1%; } }\n  @media only screen and (max-width: 768px) {\n    .nav {\n      background-color: #300803; } }\n\n/*.audio-control{\r\n  display: -webkit-flex !important;\r\n  display: flex;\r\n  -webkit-justify-content: center;\r\n  justify-content: center;\r\n  -webkit-align-items: center;\r\n  align-items: center\r\n}\r\n.audio-info{\r\n  margin-top: 1%;\r\n  color: black;\r\n}\r\n.btn-audio{\r\n  background-color: transparent;\r\n  background-image: url('../../../assets/play.png');\r\n  width: 40px;\r\n  height: 40px;\r\n  background-position: center;\r\n  background-size: contain;\r\n}*/\n@media only screen and (min-width: 768px) {\n  .story-img {\n    max-width: 1000px;\n    height: 450px; } }\n\n/*.up{\r\n  @include mq('tablet' , 'max') {\r\n    background-color: #300803;\r\n  }\r\n}*/\n/*.swiper-button-next,\r\n.swiper-button-prev{\r\n  @include mq('tablet' , 'max') {\r\n    visibility: hidden;\r\n  }\r\n}*/\n/* For width 400px and larger: */\n/*@media only screen and (min-width: 1400px) {\r\n  .content{\r\n    padding: 1% 20% !important;\r\n  }\r\n}*/\n@media only screen and (max-width: 799px) {\n  /*.page-header{\r\n    background-color: #300803;\r\n    color: white;\r\n    border-bottom: 0px;\r\n  }*/\n  /*.swiper-slide{\r\n    background-color: #300803;\r\n  }\r\n  .up{\r\n    background-color: #300803;\r\n  }*/\n  /*.nav{\r\n    background-color: #300803;\r\n  }*/\n  .nav-tabs > li.active > a {\n    color: white;\n    background-color: inherit;\n    border: 0px; }\n  .nav-tabs > li > a {\n    color: #d9320f;\n    padding: 10px 10px !important;\n    margin-right: 0px !important; }\n  .nav-tabs > li > a:hover {\n    background: #300803;\n    border: 0px;\n    color: white; }\n  .nav-tabs {\n    border-bottom: 0px; }\n  .story-img {\n    width: auto;\n    max-height: 270px; }\n  .audio-control,\n  .description {\n    padding-top: 2%;\n    background-color: #f57d70;\n    color: black; }\n  /*.swiper-button-next,\r\n  .swiper-button-prev{\r\n    visibility: hidden;\r\n  }*/ }\n\n/*.content{\r\n    padding-left: 10%;\r\n    padding-right: 10%;\r\n  }*/\n/*.page-header{\r\n    padding-left: 0px;\r\n    border-bottom: 0px;\r\n  }*/\n/*.nav{\r\n      padding-left: 5%;\r\n      padding-right: 5%;\r\n      margin-bottom: 1%;\r\n  }*/\n/*.tab-content{\r\n    padding-top: 0px;\r\n  }*/\n/*.story-img{\r\n    max-width: 1000px;\r\n    height: 450px;\r\n  }*/\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/single-trophy/single-trophy.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_pass_data_service__ = __webpack_require__("../../../../../src/app/services/pass-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_text_to_speech_service__ = __webpack_require__("../../../../../src/app/services/text-to-speech.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SingleTrophyComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let SingleTrophyComponent = class SingleTrophyComponent {
    constructor(router, passData, textService) {
        this.router = router;
        this.passData = passData;
        this.textService = textService;
        this.config = {
            scrollbar: '.swiper-scrollbar',
            scrollbarHide: false,
            slidesPerView: 'auto',
            centeredSlides: true,
            preloadImages: false,
            grabCursor: true,
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            spaceBetween: 30
        };
    }
    ngOnInit() {
        this.trophy = JSON.parse(this.passData.getsingleComponent());
        this.textService.endSpeach.subscribe(item => this.checkSubscribe(item));
    }
    checkSubscribe(item) {
        if (item == "SpeechFinished") {
            console.log("finitooo");
            var infoaudio = document.getElementsByClassName("audio-info");
            var buttonaudio = document.getElementsByClassName("btn-audio");
            for (var i = 0; i < infoaudio.length; i++) {
                infoaudio[i].innerHTML = "Clicca per ascoltare la descrizione";
            }
            for (var i = 0; i < buttonaudio.length; i++) {
                buttonaudio[i].style.backgroundImage = "url('../../../assets/play.png')";
            }
        }
        else if (item == "Inizio") {
            console.log("inizio");
            var infoaudio = document.getElementsByClassName("audio-info");
            var buttonaudio = document.getElementsByClassName("btn-audio");
            for (var i = 0; i < infoaudio.length; i++) {
                infoaudio[i].innerHTML = "Clicca per stoppare l'ascolto";
            }
            for (var i = 0; i < buttonaudio.length; i++) {
                buttonaudio[i].style.backgroundImage = "url('../../../assets/stop.png')";
            }
        }
    }
    speak(description) {
        this.textService.speach(description);
    }
    back() {
        this.textService.back();
    }
};
SingleTrophyComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-single-trophy',
        template: __webpack_require__("../../../../../src/app/components/single-trophy/single-trophy.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/single-trophy/single-trophy.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_pass_data_service__["a" /* PassDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_pass_data_service__["a" /* PassDataService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_text_to_speech_service__["a" /* TextToSpeechService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_text_to_speech_service__["a" /* TextToSpeechService */]) === "function" && _c || Object])
], SingleTrophyComponent);

var _a, _b, _c;
//# sourceMappingURL=single-trophy.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/trophies/trophies.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\r\n  <h2 class=\"page-header\">Sala delle Coppe</h2>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-md-4\" *ngFor=\"let trophy of trophies\">\r\n      <button class=\"btn-dashboard\" (click)=\"getFilter(trophy)\"\r\n        [ngStyle]=\"{'background-image': 'url(' + trophy.coverImg + ')'}\">{{trophy.name}}<div class=\"layer\"></div></button>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/trophies/trophies.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*--------------------------------\r\n\tMedia Queries\r\n\tused for outputting content either between media query tags\r\n\texample: basic usage\r\n\t.element {\r\n\t\twidth: 50%;\r\n\t\t@include mq('tablet-small') {\r\n\t\t\twidth: 20%;\r\n\t\t}\r\n\t}\r\n\texample: using max-width\r\n\t.element {\r\n\t\twidth: 50%;\r\n\t\t@include mq('tablet-small', 'max') {\r\n\t\t\twidth: 20%;\r\n\t\t}\r\n\t}\r\n*/\n/*--------------------------------\r\n\tMargin / Padding Quick Resets\r\n\texample: top & bottom margin set to $spacing-unit\r\n\t.element {\r\n\t\t@include push--ends;\r\n\t}\r\n\texample: left & right padding set to $spacing-unit--small\r\n\t.element {\r\n\t\t@include soft--sides($spacing-unit--small);\r\n\t}\r\n*/\n/*--------------------------------\r\n\tHelper mixins\r\n*/\n/*--------------------------------\r\n\tForm input placeholder text\r\n\texample:\r\n\tinput,\r\n\ttextarea {\r\n\t\t@include input-placeholder {\r\n\t\t\tcolor: $grey;\r\n\t\t}\r\n\t}\r\n*/\n/*--------------------------------\r\n\tRetina images\r\n\texample:\r\n\t.element {\r\n\t\t@include retina {\r\n\t\t\tbackground-image: url(../img/background@2x.png);\r\n\t\t}\r\n\t}\r\n*/\n/*--------------------------------\r\n\tContent margins\r\n\tfore removing first/last child margins\r\n\texample: default\r\n\t.element {\r\n\t\t@include content-margins;\r\n\t}\r\n\toutput:\r\n\t.element > *:first-child {\r\n\t\tmargin-top: 0;\r\n\t}\r\n\t.element > *:last-child {\r\n\t\tmargin-bottom: 0;\r\n\t}\r\n\texample: empty selector\r\n\t.element {\r\n\t\t@include content-margins('false');\r\n\t}\r\n\toutput:\r\n\t.element:first-child {\r\n\t\tmargin-top: 0;\r\n\t}\r\n\t.element:last-child {\r\n\t\tmargin-bottom: 0;\r\n\t}\r\n*/\n/*--------------------------------\r\n\tCSS Triangle\r\n\tused for creating CSS only triangles\r\n\texample:\r\n\t.element {\r\n\t\t&::before {\r\n\t\t\t@include css-triangle(blue, down);\r\n\t\t}\r\n\t}\r\n*/\n/*--------------------------------\r\n\tHide text\r\n\texample:\r\n\t.element {\r\n\t\t@include hide-text;\r\n\t}\r\n*/\n/*--------------------------------\r\n\tResponsive ratio\r\n\tUsed for creating scalable elements that maintain the same ratio\r\n\texample:\r\n\t.element {\r\n\t\t@include responsive-ratio(400, 300);\r\n\t}\r\n*/\n/*--------------------------------\r\n\tTypography\r\n\tText image replacement, with responsive ratio\r\n\tHTML:\r\n\t<h1 class=\"element\">\r\n\t\t<span>Text to replace</span>\r\n\t</h1>\r\n\texample:\r\n\t.element {\r\n\t\t@include typography(200, 50, 'hello-world');\r\n\t}\r\n*/\n/*--------------------------------\r\n\tIcon\r\n\tFor using fontastic icons in pseudo elements\r\n*/\n/*--------------------------------\r\n\tColours\r\n\tbackground, colour, etc. match up with colour map in _variables.scss\r\n\tmodify to suit per project\r\n*/\n/*--------------------------------\r\n\tMisc\r\n*/\n/*--------------------------------\r\n\tFluid Property\r\n\thttp://www.adrenalinmedia.com.au/the-agency/insights/this-changes-everything-css-fluid-properties.aspx\r\n\tHTML:\r\n\t<h1 class=\"element\">\r\n\t\t<span>Text to replace</span>\r\n\t</h1>\r\n\texample:\r\n\th1 {\r\n\t\t@include fp(font-size, 50, 100); // 50px at 320, 100px at 1920;\r\n\t}\r\n\toutput:\r\n\th1 {\r\n\t\tfont-size: calc(3.125vw + 40px); //This is the magic!\r\n\t}\r\n\t@media (max-width:320px){ //Clips the start to the min value\r\n\t\tfont-size:50px;\r\n\t}\r\n\t@media (min-width:1920px){ //Clips the end to the max value\r\n\t\tfont-size:100px;\r\n\t}\r\n*/\n.content {\n  font-family: milanregular; }\n  @media only screen and (min-width: 1440px) {\n    .content {\n      padding: 1% 20%; } }\n\n@media only screen and (min-width: 768px) and (max-width: 1440px) {\n  .content {\n    padding: 1% 10%; } }\n\n.btn-dashboard {\n  font-family: milanfont;\n  border-width: 0px;\n  cursor: pointer;\n  text-align: center;\n  font-weight: bold;\n  font-size: 23px;\n  color: #aaaaaa;\n  width: 100%;\n  height: 150px;\n  background-position: center;\n  background-size: cover; }\n  @media only screen and (min-width: 1440px) {\n    .btn-dashboard {\n      height: 200px; } }\n\n@media only screen and (min-width: 768px) and (max-width: 1440px) {\n  .btn-dashboard {\n    height: 200px; } }\n\n.page-header {\n  margin-top: 18px;\n  margin-left: 5%;\n  margin-right: 2%;\n  font-family: milanfont; }\n  @media only screen and (min-width: 1440px) {\n    .page-header {\n      padding-left: 0px;\n      padding-right: 0px;\n      border-bottom: 1px solid #dddddd; } }\n\n@media only screen and (min-width: 768px) and (max-width: 1440px) {\n  .page-header {\n    margin-left: 0px;\n    margin-right: 0px;\n    border-bottom: 1px solid #dddddd; } }\n\n.col-md-4 {\n  padding-left: 0px;\n  padding-right: 0px;\n  width: 50%;\n  float: left; }\n  @media only screen and (min-width: 1440px) {\n    .col-md-4 {\n      width: 33.33333333%; } }\n\n@media only screen and (min-width: 768px) and (max-width: 1440px) {\n  .col-md-4 {\n    width: 33.33333333%; } }\n\n.row {\n  margin-left: 0px;\n  margin-right: 0px; }\n\n/* For width 400px and larger: */\n/*@media only screen and (min-width: 1400px) {\r\n  .content{\r\n    padding: 1% 20%;\r\n  }\r\n  .btn-dashboard{\r\n    height: 200px;\r\n  }\r\n  .col-md-4{\r\n    width: 33.33333333%;\r\n  }\r\n  .page-header{\r\n    padding-left: 0px;\r\n    padding-right: 0px;\r\n    border-bottom: 1px solid #dddddd;\r\n  }\r\n}*/\n/*@media only screen and (min-width: 800px) and (max-width: 1399px){\r\n  .content{\r\n    padding: 1% 10%;\r\n  }\r\n  .btn-dashboard{\r\n    height: 200px;\r\n  }\r\n  .col-md-4{\r\n    width: 33.33333333%;\r\n  }\r\n  .page-header{\r\n    margin-left: 0px;\r\n    margin-right: 0px;\r\n    border-bottom: 1px solid #dddddd;\r\n  }\r\n}*/\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/trophies/trophies.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_upload_data_service__ = __webpack_require__("../../../../../src/app/services/upload-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_pass_data_service__ = __webpack_require__("../../../../../src/app/services/pass-data.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrophiesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let TrophiesComponent = class TrophiesComponent {
    constructor(uploadData, router, passData) {
        this.uploadData = uploadData;
        this.router = router;
        this.passData = passData;
    }
    ngOnInit() {
        this.uploadData.getAllTrophies().subscribe(result => {
            this.trophies = result.trophies;
        }, err => {
            console.log(err);
            return false;
        });
    }
    getFilter(singleTrophy) {
        //return JSON.stringify(singleTrophy);
        this.passData.setsingleComponent(JSON.stringify(singleTrophy));
        console.log(singleTrophy);
        this.router.navigate(['/singletrophy']);
    }
};
TrophiesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-trophies',
        template: __webpack_require__("../../../../../src/app/components/trophies/trophies.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/trophies/trophies.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_upload_data_service__["a" /* UploadDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_upload_data_service__["a" /* UploadDataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_pass_data_service__["a" /* PassDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_pass_data_service__["a" /* PassDataService */]) === "function" && _c || Object])
], TrophiesComponent);

var _a, _b, _c;
//# sourceMappingURL=trophies.component.js.map

/***/ }),

/***/ "../../../../../src/app/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let AuthGuard = class AuthGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate() {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    }
};
AuthGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let AuthService = class AuthService {
    constructor(http) {
        this.http = http;
        this.isDev = true; // Change to false before deployment
    }
    registerUser(user) {
        let headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        let ep = this.prepEndpoint('users/register');
        return this.http.post(ep, user, { headers: headers })
            .map(res => res.json());
    }
    authenticateUser(user) {
        let headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        let ep = this.prepEndpoint('users/authenticate');
        return this.http.post(ep, user, { headers: headers })
            .map(res => res.json());
    }
    getProfile() {
        let headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        let ep = this.prepEndpoint('users/profile');
        return this.http.get(ep, { headers: headers })
            .map(res => res.json());
    }
    storeUserData(token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    }
    loadToken() {
        const token = localStorage.getItem('id_token');
        this.authToken = token;
    }
    loggedIn() {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])('id_token');
    }
    isAdmin() {
        if (localStorage.getItem('user') === null) {
            return false;
        }
        else {
            if (JSON.parse(localStorage.getItem('user')).username === "admin") {
                return true;
            }
            else {
                return false;
            }
        }
    }
    logout() {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    }
    prepEndpoint(ep) {
        if (this.isDev) {
            return ep;
        }
        else {
            return 'http://localhost:8080/' + ep;
        }
    }
};
AuthService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], AuthService);

var _a;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/pass-data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PassDataService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let PassDataService = class PassDataService {
    constructor() {
        this.singleComponent = "";
    }
    setsingleComponent(val) {
        this.singleComponent = val;
    }
    getsingleComponent() {
        return this.singleComponent;
    }
};
PassDataService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], PassDataService);

//# sourceMappingURL=pass-data.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/text-to-speech.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TextToSpeechService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let TextToSpeechService = class TextToSpeechService {
    constructor() {
        this.msg = new SpeechSynthesisUtterance();
        var voices = window.speechSynthesis.getVoices();
        //this.msg.lang = "it";
        var palo = this;
        //this.msg.voice = voices[11];
        this.endSpeach = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        speechSynthesis.onvoiceschanged = function () {
            voices = window.speechSynthesis.getVoices();
            palo.msg.voice = voices.filter(function (voice) { return voice.lang == 'it'; })[0];
        };
    }
    speach(textDescription) {
        if (speechSynthesis.speaking) {
            speechSynthesis.cancel();
        }
        else {
            //var voices = window.speechSynthesis.getVoices();
            //this.msg.voice = voices[11];
            var text = textDescription;
            var hasFinished = false;
            this.msg.text = text;
            var palo = this;
            this.msg.onend = function (event) {
                console.log("END");
                palo.endSpeach.emit("SpeechFinished");
                console.log("ho emittato");
                speechSynthesis.cancel();
            };
            this.msg.onerror = function (event) {
                console.log("ERRORONE");
            };
            console.log("faccio partire");
            if (speechSynthesis.pending) {
                console.log("c'è roba in pending");
            }
            palo.endSpeach.emit("Inizio");
            speechSynthesis.speak(this.msg);
        }
    }
    back() {
        var context = this;
        if (speechSynthesis.speaking) {
            speechSynthesis.cancel();
            context.endSpeach.emit("SpeachFinished");
        }
    }
};
TextToSpeechService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], TextToSpeechService);

//# sourceMappingURL=text-to-speech.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/upload-data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadDataService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let UploadDataService = class UploadDataService {
    constructor(http) {
        this.http = http;
        this.isDev = true; // Change to false before deployment
    }
    getAllFootballers() {
        let headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        let ep = this.prepEndpoint('footballers/footballerInfo');
        return this.http.get(ep, { headers: headers })
            .map(res => res.json());
    }
    getAllTrophies() {
        let headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        let ep = this.prepEndpoint('trophies/trophies');
        return this.http.get(ep, { headers: headers })
            .map(res => res.json());
    }
    getAllStories() {
        let headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        let ep = this.prepEndpoint('stories/stories');
        return this.http.get(ep, { headers: headers })
            .map(res => res.json());
    }
    prepEndpoint(ep) {
        if (this.isDev) {
            return ep;
        }
        else {
            return 'http://localhost:8080/' + ep;
        }
    }
};
UploadDataService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], UploadDataService);

var _a;
//# sourceMappingURL=upload-data.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/validate.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let ValidateService = class ValidateService {
    constructor() { }
    validateRegister(user) {
        if (user.name == undefined || user.email == undefined || user.username == undefined || user.password == undefined) {
            return false;
        }
        else {
            return true;
        }
    }
    validateEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }
};
ValidateService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], ValidateService);

//# sourceMappingURL=validate.service.js.map

/***/ }),

/***/ "../../../../../src/assets/dashboard/halloffame.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "halloffame.d00e616fd436023aba1c.jpg";

/***/ }),

/***/ "../../../../../src/assets/dashboard/history.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "history.5f31e5b04ffe1eb460f1.jpg";

/***/ }),

/***/ "../../../../../src/assets/dashboard/trophies.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "trophies.382dfd0b2e95f0af1d36.jpg";

/***/ }),

/***/ "../../../../../src/assets/fonts/milantype.woff2":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "milantype.f093c2f1ee63b1113493.woff2";

/***/ }),

/***/ "../../../../../src/assets/fonts/raleway-bold-webfont.woff2":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "raleway-bold-webfont.cef79114aa30cbcd1b91.woff2";

/***/ }),

/***/ "../../../../../src/assets/fonts/raleway-regular-webfont.woff2":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "raleway-regular-webfont.7f3cbda77fc9e53d4747.woff2";

/***/ }),

/***/ "../../../../../src/assets/header.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "header.f2ffe7814af7256732a2.png";

/***/ }),

/***/ "../../../../../src/assets/history/calendar-icons.png":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAAA1CAYAAADWKGxEAAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4QYXDDYPQ/uNgQAACaRJREFUeNrtm99vHNUVxz/nzOyu7TjBOFAU4jQNpYWquKU/0qi0qBRVohRpSxVV0BceKsEDbcWfwBv/QPtQyVJ5bF/yUDcJVRWpVEgNPNZASQMJCcaOkzjGNrve3Zm59/RhZp3xetdeezfUBV9ptevx3Hvu+d7v+XXnjtBlm5ycLAD7gQeA24CPgX8DV8vlckwf2+Tk5F7gi8BXgQD4D3CuXC4v9VlOAbgrkzMMLAJvAQvd6iRdCBGgCBxD9dfAdxG5E7MaZm9i9gfgr8D1crnselRIgHFEnkLkSeALgALTmJ3G7E/AG+Vy2XqUEwJ3Aj9B5JeIPIBICbNrwD/x/nfAG0CymSztQl4ReAjVF1AtEwQHJQhKBMEIQXAM1ePZCg72gRTDiDyG6lOo3k8QDBEEA6jei+rPEPkxMDo5OdmrnEHgAVR/ThAcJQj2ZTqNofokqi8AD2W60xuAZgFmY6h+X1RLIiIAIoKoFlH9DmYH8X64F41OnDihZjaMyDdQHRNVFZGmHEH1ACLj5v0e12gEPcHn3DBm96D6bVEtZCohIiKqJVQfxuwQZpvKCTdFeP9+wyyxanW0rQ9QHdUDB+oShvVedDp+/LifX1r66OzZs0fMrN3KhxKGh8cefXTxm0NDPbmK8PDhuqtWS1Srt3fSSe64IwFsywBOpLQdERirQTD99NPD+597bnzg6NGwuVJrCWph7ZVXvlU9edL/HuYVVFLHL90qZOBFlVOPPLJv5MUXD0up1K6v+Hr90NuPPfb4RKm04BsNr6mcrsV4cICbf/75O/c888z3CkeOaEedzpwZvzExMfdbqAyCM5gBFp+FqC2AE+nvA1mUfdDgvhCGWVgoRVNTYwNHj3acWWNq6olkdvaYQi0XnLoGUNKV1mR2tmi12u1SKrVHoF6/Lbl8+VfiXF3Bb0UGYAKGCPGHHw4m779/pHDkSCe3RTQ19QQLC+MhNAwqWSbwr4k0Sl95FpJWBt4F/AL4AXA/MKpQxHu1SmVDX2m12n3E8ZdIlWKLit1sSSK+UinoyEjbf/tqteij6JiZbTcKp/3iWH21GnQCD+fEKpWvqPdfzvpEwALwDvAq8EdSRqYATsDdwA+BnwIPAkP5AS2OsUoF2bt3vbxqFYuikLjHVNAMvMfPzcHBg9BqWmb4+XnBuSJmvcmJY+yjj7B6HRkcXIewW1rCoigvZwgYyUg2AsxOwN+fhStNZt0LPJolr0Nrl93jr18nvnAB85785M17kg8+wM3PY/V67wDW68TnzuGXl8mTzMywSoX43Dmo18H73kTV6yTT07i5uTVyMIMkIXnvPfz8fDs5e1qwSp1wGb4G/Aj4fNt8rlbDXbtGMDqKDg5CEGC1Gu7SJWqnThGfP4+vVsFsm7Z7c7GsWsWAYN8+KBQw5/Dz89Rff53Ga6/hr17dNoCSW3irVqHRIBgdRQYGUoYvLxO/9Ra1kyeJL15MGbreH8VZFfbmX+B82OL0bZ1A7/FLS8TvvEPl5ZcJ77kHHR6GWo14eho3O4tfWOiZFauMnp7GTp8mefttggMHQAR37RrJpUu4a9ewJOk9XXcOv7BA4+xZksuXKRw6BAMD+EqF5OJFktlZfKXSKRJa/nITQE8a4q3dqhngKxWiCxdIZmYgCMC51Gyd6yFqtJldFJFcuYKbn0dKJRDBGg0sivqySJJju7t+HbewQPzuu6s6+UZjM50sw8u6SqTXUN+51FR7CrXdmbJvNKDRuLVymmxcWdnaBkFrHrjddTU+mdZPOXKz2gBVJAgIVFflmPeYc6mF5QPZRgBaM3EV4VPZRBBA07oaLRTST7GIFItIENxkvvf4OMbiGB9FEMd451KSNQFtfjcaKYB3Pfxwatci2wPR7Ga/lv7tSiXMOrMqP8l83+b1DnOU/HWRNeOYKlIoEBSLaLG4FrwwXGOy3nu8cymAme91jQYuiiBJEOdYpeaZMymA4y+9tBezz5lzpX6teH7l2+NkGwPYOl7+ejsAVVevS+5+awKrSnN3B9Wb97fOsdnPLDVl79OA430aXMyKBqPA0CqAQ2NjdwNfR7Xwf22qm1Uo27WutX33mnPj2b5B5gNTOvh+pAk7GsC+ibEQKK1PY8x2AAbW2XfumHUyA4pXr14thrcSiE5+Lg9Oh/24dX079elmY6aTjO7cubSkqN4lSbJoZn5gYGDklgG4HQa1AreVMTrda320qmx+URzHS4A3s9vCW0n1rYIo3aRAW5TRT1cgIpiZee+9iBSBveFO8y+y85N5tfRhU2hmBeUz2npwMeK9VzMLVDX4zALYp2xBwl0otsxSc855EXEiEoe7ALFhytQmiPgkSbyINFS1usvALfjDZprlvU+AeqlU2gVwO1VIkiTOzBoDAwO7AG6WcLeyM2MgzrlEVaPdKJwDqktTNuecT5LEAy7caSzopiTrRy3cI9g+G1ObAOpOM6Vuy7p2kbQXwLJIuxlTTUQ84JsAbuk01U4s4z6JEtA5RxzH5r33ZuYApzMzM0K6L/gpfaK0/WDS6iqaADrnvHMuAeIwxz7bhW/jbTHnHEmSWJK2WESS3SjcZfPekyQJURSZ995lDER3mdd9BRLHMXEc49KWAnjw4EHH1k97fibr5YyBPgPQ59OXZJeJm4PonGua8OrhoiaAbhfAzc04SRLiOMbMvIisAdA+7cr3+nApq39JsvOJTVbqTlN0p0di13JqK9yKUp9Ett/vB+v9WpRmiZfV66KqkgdwS+913Cqg8nXoRhsLvVQU29mdySoQnFt9QWrdCVXtxMZbxbrNNgf6Ob50Og63CfDee+I4ZmVlhRs3blCv1wnDMAbmzGw5D2ADqJK+M/s/YeJOkZHbMCWKIqrVKsvLyywtLWFm9SAIpoF/ABfzAE4BJ0hfdbh7g+BivUbsph9pTrT53Y/I2fpuSau8dn83mdZm04BarcbKyopEUZSo6seqOgW8Apwql8vz5Nk2MzMzAvwGKAPjpC8d5tlYBxa999fNrJYBqV0oK60+LkmS1U8zNcgpIWYmLWNK3lc3/WPesbeC01wYnzbLfpv33pqRNBdVrWWOq6/0qmoiIosich74M/BquVz265TLAfk48Bzp+3IDmcO83czedc79bXFx8fTU1NSlubk5v2fPnoJzTldWViyO4zUrKSIEQSDZhzAMJQgCUVWCIJAwDNHs1GixWJQgCFBVCcMwUNXV+4Ig0CAIVNKW/y0iEuQsQrKNzlVL8WnVn/ibzeW+Ld9WK4v0wLlk4zngY+99BXDlcrkzO3b4/lx+u22jOUsnt3OrguF/AaBx+YxGY4q3AAAAAElFTkSuQmCC"

/***/ }),

/***/ "../../../../../src/assets/play.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "play.acc516607f15efb1a16b.png";

/***/ }),

/***/ "../../../../../src/assets/sociallogos/Facebook-color.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Facebook-color.2cdb7caaf5fd39d5b5b3.jpg";

/***/ }),

/***/ "../../../../../src/assets/sociallogos/Instagram-color.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Instagram-color.f789b915bffa992a8e74.jpg";

/***/ }),

/***/ "../../../../../src/assets/sociallogos/Twitter-color.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Twitter-color.511a4292f23891ca2ddc.jpg";

/***/ }),

/***/ "../../../../../src/assets/sociallogos/Youtube-color.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Youtube-color.fe23a6a1a44fce01c951.jpg";

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
const environment = {
    production: false
};
/* harmony export (immutable) */ __webpack_exports__["a"] = environment;

//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map