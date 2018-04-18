webpackJsonp([2],{

/***/ 1063:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DivisionalLeaderboardModule", function() { return DivisionalLeaderboardModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__divisionalLeaderboard__ = __webpack_require__(1069);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DivisionalLeaderboardModule = (function () {
    function DivisionalLeaderboardModule() {
    }
    DivisionalLeaderboardModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__divisionalLeaderboard__["a" /* DivisionalLeaderboard */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__divisionalLeaderboard__["a" /* DivisionalLeaderboard */]),
            ],
        })
    ], DivisionalLeaderboardModule);
    return DivisionalLeaderboardModule;
}());

//# sourceMappingURL=divisionalLeaderboard.module.js.map

/***/ }),

/***/ 1068:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Leaderboard; });
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
 * Generated class for the GlobalLeaderboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Leaderboard = (function () {
    function Leaderboard(navCtrl, AllUsers) {
        this.navCtrl = navCtrl;
        this.AllUsers = AllUsers;
        this.globallyRankedUsers = [null];
        this.locallyRankedUsers = [null];
        this.allusers = AllUsers;
        //this.allusers.reverse();
        console.log(this.allusers);
        //*this.readDatabase();
        this.loadUsers();
    }
    Leaderboard.prototype.loadUsers = function () {
        if (this.allusers.length < 15) {
            for (var x = 0; x < this.allusers.length; x++) {
                this.globallyRankedUsers[x] = this.allusers[x];
                this.locallyRankedUsers[x] = this.allusers[x];
                this.globallyRankedUsers[x].leaderboardRank = x + 1;
                this.locallyRankedUsers[x].leaderboardRank = x + 1;
            }
        }
        else {
            for (var x = 0; x < 15; x++) {
                this.globallyRankedUsers[x] = this.allusers[x];
                this.globallyRankedUsers[x].leaderboardRank = x + 1;
            }
            for (var x = 15; x < this.allusers.length; x++) {
                this.locallyRankedUsers[x - 15] = this.allusers[x];
                this.locallyRankedUsers[x - 15].leaderboardRank = x - 14;
            }
        }
    };
    Leaderboard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({}),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], Array])
    ], Leaderboard);
    return Leaderboard;
}());

//# sourceMappingURL=leaderboard.js.map

/***/ }),

/***/ 1069:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DivisionalLeaderboard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__leaderboard__ = __webpack_require__(1068);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_userfactory__ = __webpack_require__(189);
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
 * Generated class for the Tab1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DivisionalLeaderboard = (function () {
    function DivisionalLeaderboard(navCtrl, navParams, UserFactory) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.UserFactory = UserFactory;
        this.user_list = [];
    }
    DivisionalLeaderboard.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.UserFactory.getJSON().subscribe(function (res) {
            console.log(res);
            for (var i = 0; i < res.length; i++) {
                var obj = JSON.parse(JSON.stringify(res[i]));
                var User = {
                    username: obj.username,
                    points: obj.totalPoints,
                    leaderboardRank: 0
                };
                _this.user_list.push(User);
            }
            console.log(_this.user_list);
            _this.leaderboard = new __WEBPACK_IMPORTED_MODULE_2__leaderboard__["a" /* Leaderboard */](_this.navCtrl, _this.user_list);
            _this.users = _this.leaderboard.locallyRankedUsers;
            console.log('ionViewDidLoad DivisionalLeaderboard');
        });
    };
    DivisionalLeaderboard.prototype.getLeaderboardDisplay = function (rank) {
        if (rank <= 3)
            return " " + this.users[rank - 1].username;
        else
            return this.users[rank - 1].leaderboardRank + ". " + this.users[rank - 1].username;
    };
    DivisionalLeaderboard.prototype.getColor = function (rank) {
        if (rank === 1)
            return "gold";
        else if (rank === 2)
            return "silver";
        else if (rank === 3)
            return "bronze";
        else
            return "others";
    };
    DivisionalLeaderboard.prototype.getIcon = function (rank) {
        if (rank <= 3)
            return "ribbon";
        else
            return null;
    };
    DivisionalLeaderboard.prototype.formatNumber = function (n) {
        return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };
    DivisionalLeaderboard.prototype.viewGlobal = function () {
        this.navCtrl.setRoot('GlobalLeaderboard');
    };
    DivisionalLeaderboard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'divisionalLeaderboard',template:/*ion-inline-start:"/home/linconnu/Desktop/botani3/src/pages/leaderboard/divisionalLeaderboard/divisionalLeaderboard.html"*/'<ion-header>\n\n  <ion-navbar>\n\n     <ion-buttons left>\n\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      \n    </ion-buttons>\n\n    <ion-title class = "toolbar-background">\n        <span text-color = "white-text"> Leaderboard </span>\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n \n<ion-content padding class = "background-gradient">\n  <h1 id="leaderboard-heading1" style="color:rgb(255, 255, 255);font-weight:800;text-align:center;">Acorn Division</h1>\n    <div>\n      <img src="assets/imgs/acornTrophy.png" style="display:block;width:50%;height:auto;">\n    </div>\n\n    <div id="leaderboard-button-group" class="btn-group" style="width:100%">\n      <button ion-button id="global-leaderboard-button" style="width:48.6%" class = "btn-group" (click) = "viewGlobal()">Global Division</button>\n      <button ion-button id="divisional-leaderboard-button" style="width:48.6%" class = "btn-group">Acorn Division</button>\n    </div>\n\n    <ion-list>\n\n      <ion-item *ngFor = \'let user of users\'>\n\n        <ion-icon name = {{getIcon(user.leaderboardRank)}} style="zoom:1.3;" color = {{getColor(user.leaderboardRank)}} left ></ion-icon> \n        <ion-note style = "font-size: 17px;font-family: Gill Sans, sans-serif;" color = {{getColor(user.leaderboardRank)}}>{{getLeaderboardDisplay(user.leaderboardRank)}}</ion-note>\n        <ion-note item-end style = "font-size: 17px;font-family: Gill Sans, sans-serif;" color = {{getColor(user.leaderboardRank)}}>{{formatNumber(user.points)}}</ion-note>\n        <ion-icon name="ios-water" item-end color = "water"></ion-icon>\n        \n      </ion-item>\n\n    </ion-list>\n    <div class="spacer" style="width: 300px; height: 30px;"></div>\n</ion-content>'/*ion-inline-end:"/home/linconnu/Desktop/botani3/src/pages/leaderboard/divisionalLeaderboard/divisionalLeaderboard.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_userfactory__["a" /* UserFactory */]])
    ], DivisionalLeaderboard);
    return DivisionalLeaderboard;
}());

//# sourceMappingURL=divisionalLeaderboard.js.map

/***/ })

});
//# sourceMappingURL=2.js.map