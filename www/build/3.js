webpackJsonp([3],{

/***/ 1067:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalForestModule", function() { return PersonalForestModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__forest__ = __webpack_require__(1074);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PersonalForestModule = (function () {
    function PersonalForestModule() {
    }
    PersonalForestModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__forest__["a" /* PersonalForest */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__forest__["a" /* PersonalForest */]),
            ],
        })
    ], PersonalForestModule);
    return PersonalForestModule;
}());

//# sourceMappingURL=forest.module.js.map

/***/ }),

/***/ 1074:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonalForest; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the Tab3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PersonalForest = (function () {
    function PersonalForest(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PersonalForest.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PersonalForest');
    };
    PersonalForest = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'forest',template:/*ion-inline-start:"/home/linconnu/Desktop/botani3/src/pages/personalForest/forest.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-buttons left>\n      <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    </ion-buttons>\n    <ion-title class = "toolbar-background">\n        <span text-color = "white-text"> Personal Forest </span>\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n \n<ion-content>\n  <div class="button-bar"></div>\n    <div class="button-bar"></div>\n    <ion-list>\n      <ion-item class="item-divider"> Falling Trees</ion-item>\n      <ion-item class="item-thumbnail-left positive">\n        <img src="assets/imgs/flowering.png">\n        <h2>Tree Type\n          <p style="white-space:normal;">Time Owned: 0d 0h </p>\n          <p style="white-space:normal;">Tree Points: 0 </p>\n          <p style="white-space:normal;">Rival Tree Points: 0 </p>\n        </h2>\n      </ion-item>\n      <ion-item class="item-thumbnail-left positive">\n        <img src="assets/imgs/notFlowering.png">\n        <h2>Item</h2>\n        <h2>Tree Type\n          <p style="white-space:normal;">Time Owned: 0d 0h </p>\n          <p style="white-space:normal;">Tree Points: 0 </p>\n          <p style="white-space:normal;">Rival Tree Points: 0 </p>\n        </h2>\n      </ion-item>\n      <ion-item class="item-divider"> Fruiting Trees</ion-item>\n      <ion-item class="item-thumbnail-left positive">\n        <img src="assets/imgs/fruitingTree.png">\n        <h2>Item</h2>\n        <h2>Tree Type\n          <p style="white-space:normal;">Time Owned: 0d 0h </p>\n          <p style="white-space:normal;">Tree Points: 0 </p>\n          <p style="white-space:normal;">Rival Tree Points: 0 </p>\n        </h2>\n      </ion-item>\n      <ion-item class="item-thumbnail-left positive">\n        <img src="assets/imgs/notFruiting.png">\n        <h2>Item</h2>\n        <h2>Tree Type\n          <p style="white-space:normal;">Time Owned: 0d 0h </p>\n          <p style="white-space:normal;">Tree Points: 0 </p>\n          <p style="white-space:normal;">Rival Tree Points: 0 </p>\n        </h2>\n      </ion-item>\n      <ion-item class="item-divider"> Other</ion-item>\n      <ion-item class="item-thumbnail-left positive">\n        <img src="assets/imgs/flowering.png">\n        <h2>Item</h2>\n        <h2>Tree Type\n          <p style="white-space:normal;">Time Owned: 0d 0h </p>\n          <p style="white-space:normal;">Tree Points: 0 </p>\n          <p style="white-space:normal;">Rival Tree Points: 0 </p>\n        </h2>\n      </ion-item>\n    </ion-list>\n</ion-content>'/*ion-inline-end:"/home/linconnu/Desktop/botani3/src/pages/personalForest/forest.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], PersonalForest);
    return PersonalForest;
}());

//# sourceMappingURL=forest.js.map

/***/ })

});
//# sourceMappingURL=3.js.map