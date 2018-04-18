webpackJsonp([0],{

/***/ 1065:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BotaniMapModule", function() { return BotaniMapModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__map__ = __webpack_require__(1071);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var BotaniMapModule = (function () {
    function BotaniMapModule() {
    }
    BotaniMapModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__map__["a" /* BotaniMap */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__map__["a" /* BotaniMap */]),
            ],
        })
    ], BotaniMapModule);
    return BotaniMapModule;
}());

//# sourceMappingURL=map.module.js.map

/***/ }),

/***/ 1071:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BotaniMap; });
/* unused harmony export Tree */
/* unused harmony export DecoratorTree */
/* unused harmony export FallingTree */
/* unused harmony export FrutingTree */
/* unused harmony export FloweringTree */
/* unused harmony export PineConeTree */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(507);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_treefactory__ = __webpack_require__(508);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dataCollection_dataCollection__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_filter__ = __webpack_require__(1072);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic_angular_components_alert_alert_controller__ = __webpack_require__(190);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var BotaniMap = (function () {
    //initial setup-------------------------------------------------------------------------------------------------
    //the constructor initializes the center and boundaries of the playing field
    function BotaniMap(navCtrl, geolocation, TreeFactory, alertCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.geolocation = geolocation;
        this.TreeFactory = TreeFactory;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.areaCenter = new google.maps.LatLng(47.002927, -120.537427);
        this.mapBounds = new google.maps.LatLngBounds(new google.maps.LatLng(46.999761, -120.543179), new google.maps.LatLng(47.010421, -120.531785));
        this.tree_list = [];
        this.saplings = [];
        this.userLoc =
            {
                lat: 0,
                long: 0
            };
    }
    //planTrees loops through a list of saplings and turns them into trees
    BotaniMap.prototype.plantTrees = function (saplings) {
        //Loops through list
        for (var i = 0; i < saplings.length; i++) {
            //and pushes instanciated objects onto the tree_list
            this.tree_list.push(new Tree(saplings[i].lat, saplings[i].long, this.wrapTrees(saplings[i]), saplings[i].special, saplings[i].hidden));
        }
    };
    //This recursive method wraps the tree object in its decorator classes
    //The decorator list of each sapling is treated like a stack
    //The top element is popped off and used to create the 
    BotaniMap.prototype.wrapTrees = function (target) {
        //Base case
        //Sets innermost decorator class's child to null
        if (target.decs.length === 0) {
            return null;
        }
        //Recursive case 
        //Wrapping still reqruied 
        /*------NEW DECORATORS MUST BE ADDED TO THIS SWITCH------*/
        switch (target.decs.pop()) {
            case 'fl':
                return new FallingTree(this.wrapTrees(target));
            case 'fw':
                return new FloweringTree(this.wrapTrees(target));
            case 'fr':
                return new FrutingTree(this.wrapTrees(target));
            case 'pn':
                return new PineConeTree(this.wrapTrees(target));
        }
    };
    //when map element is ready--------------------------------------------------------------------------------------
    // the map itself won't be initialized until the view is ready  
    BotaniMap.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log("here 1");
        this.TreeFactory.getJSON().subscribe(function (res) {
            console.log(res);
            for (var i = 0; i < res.length; i++) {
                var obj = JSON.parse(JSON.stringify(res[i]));
                var sap;
                if (obj.Decs != null && obj.Special != null)
                    sap =
                        {
                            lat: obj.lat,
                            long: obj.long,
                            decs: obj.Decs.split(" "),
                            special: obj.Special.split(" "),
                            hidden: obj.hidden
                        };
                else if (obj.Decs != null)
                    sap =
                        {
                            lat: obj.lat,
                            long: obj.long,
                            decs: obj.Decs.split(" "),
                            special: [],
                            hidden: obj.hidden
                        };
                else if (obj.Special != null)
                    sap =
                        {
                            lat: obj.lat,
                            long: obj.long,
                            decs: [],
                            special: obj.Special.split(" "),
                            hidden: obj.hidden
                        };
                else
                    sap =
                        {
                            lat: obj.lat,
                            long: obj.long,
                            decs: [],
                            special: [],
                            hidden: obj.hidden
                        };
                _this.saplings.push(sap);
            }
            console.log(_this.saplings);
            _this.plantTrees(_this.saplings);
            console.log('here2');
            _this.mapSetUp();
            //this.getTreeMarks();
            console.log("here3");
            _this.updateTreeMarks(_this.tree_list);
            console.log("here4");
            _this.createLocWatcher();
            // this.updateUserMark(this.userLoc);
        });
    };
    /*
        here is where the map object is initialized
        it is centered and zoomed in to an appropriate level and
        contained in the appropriate bounds
        and populated with all the markers
    */
    BotaniMap.prototype.mapSetUp = function () {
        //here is where the phone's geolocation is first defined
        //there is also an error function just incase the setup was unsuccessful
        //var userLoc = undefined;
        var userLoc;
        this.geolocation.getCurrentPosition({ timeout: 10000, enableHighAccuracy: true }).then(function (position) {
            userLoc = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        }).catch(function (error) {
            console.log('problem getting location', error);
            alert('code: ' + error.code + '\n'
                + 'message: ' + error.message + '\n');
            userLoc = undefined;
        });
        //here is where the map is initialized, if the user's geolocation is defined and within mapBounds, 
        //then it is the map's center, otherwise the default center is used
        var options = {
            center: (userLoc !== undefined && this.mapBounds.contains(this.userLoc)) ? this.userLoc : this.areaCenter,
            zoom: 17,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            disableDefaultUI: true
        };
        this.map = new google.maps.Map(document.getElementById("map"), options);
        //this.map.setCompassEnabled(true);
    };
    BotaniMap.prototype.updateTreeMarks = function (trees) {
        //ONLY WORKS IF evergreen.png AND deciduous.png ARE IN THE ICON FOLDER IN ASSETS
        var everImage = {
            url: 'assets/icon/evergreen.png',
            size: new google.maps.Size(36, 43),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(20, 43)
        };
        var decidImage = {
            url: 'assets/icon/deciduous.png',
            size: new google.maps.Size(32, 40),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(16, 40)
        };
        for (var _i = 0, trees_1 = trees; _i < trees_1.length; _i++) {
            var tree = trees_1[_i];
            if (!tree.hidden) {
                var loc = new google.maps.LatLng(tree.lat, tree.long);
                var treeMark = new google.maps.Marker({
                    position: loc,
                    map: this.map,
                    icon: (tree.collectData().pinecone)
                        ? everImage
                        : decidImage
                });
            }
        }
    };
    /*
       this funtion updates the user's location marker
       but only if the user is within the bounds of the playing field
    */
    BotaniMap.prototype.updateUserMark = function (userLoc) {
        //get rid of preveous marker
        if (this.userMark)
            this.userMark.setMap(null);
        //test if the user's position is within the bounds and update with a new marker 
        //if it is
        if (userLoc !== undefined && this.mapBounds.contains(userLoc)) {
            this.userMark = new google.maps.Marker({
                position: userLoc
            });
            this.userMark.setMap(this.map);
        }
    };
    /*
        here is where we set up a "position watcher" that should listen to a
        change in the user's location and update the user's
        marker accordingly
    */
    BotaniMap.prototype.createLocWatcher = function () {
        var _this = this;
        this.locWatcher = this.geolocation.watchPosition({ enableHighAccuracy: true })
            .filter(function (p) { return p.coords !== undefined; })
            .subscribe(function (position) {
            console.log("init user loc");
            _this.userLoc =
                {
                    lat: position.coords.latitude,
                    long: position.coords.longitude
                };
            console.log("user loc done");
            var newUserLoc = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
            _this.updateUserMark(newUserLoc);
            //this.revealHidden();
        });
    };
    //tree search-----------------------------------------------------------------------------------------------------
    /*
        here is where the the app checks if it needs to reveal a
        nearby hidden tree
    */
    BotaniMap.prototype.revealHidden = function () {
        var farProxim = 60;
        var nearProxim = 20;
        var closest = this.findTree(true);
        if (closest !== undefined) {
            var proxim = this.inProximity(closest);
            if (proxim <= nearProxim) {
                this.alertMessage(1);
                var loc = new google.maps.LatLng(this.tree_list[closest.ind].lat, this.tree_list[closest.ind].long);
                var treeMark = new google.maps.Marker({
                    position: loc,
                    //title: trees.name,
                    map: this.map
                    //icon: image
                });
                //make the hidden value in the database false
                //notify everyone else that a tree has been found
            }
            else if (proxim <= farProxim) {
                this.hintToast({
                    pro: proxim,
                    dir: closest.direct
                });
            }
        }
        else {
            this.hintToast(undefined);
        }
    };
    BotaniMap.prototype.hintToast = function (hints) {
        var toastMessg = (hints === undefined)
            ? 'No hidden trees anywhere near you right now'
            : 'The closest hidden tree is ' + hints.pro + 'feet away to the ' + hints.dir + '!!';
        var toast = this.toastCtrl.create({
            message: toastMessg,
            duration: 4000,
            position: 'middle',
            dismissOnPageChange: true
        });
        toast.present();
    };
    /*
        this function, attached with an on click listener to
        a button in the HTML page, allows the user to observe the
        nearest tree, if possible
    */
    BotaniMap.prototype.observeNearest = function () {
        var proxim = 6;
        var closest = this.findTree(false);
        console.log("here in observe    ");
        console.log(this.tree_list[closest.ind]);
        if (closest !== undefined && this.inProximity(closest) <= proxim) {
            //this should be the part where we take the user to the data collection screen 
            //which is showing collection options based on the specific tree
            this.collectData(closest.ind);
        }
        else {
            //this message is generic
            this.alertMessage(2);
        }
    };
    BotaniMap.prototype.collectData = function (treeindex) {
        var tosend = this.tree_list[treeindex].collectData();
        console.log(this.tree_list[treeindex]);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__dataCollection_dataCollection__["a" /* Graphs */], { params: tosend });
    };
    /*
        this function returns the tree closest to the user
        if any, the flag parameter (true or false) tells us
        whether to look for a hidden tree or visible tree
    */
    BotaniMap.prototype.findTree = function (hiddenFlag) {
        var minLatDist = 100000;
        var minLngDist = 100000;
        var yDist;
        var xDist;
        var targetInd = -1;
        var index = 0;
        var direct1 = "";
        var direct2 = "";
        var userlat = this.userLoc.lat;
        var userlong = this.userLoc.long;
        /* this.geolocation.getCurrentPosition({ timeout: 10000, enableHighAccuracy: true }).then((position) => {
 
             userlat = position.coords.latitude;
             userlong = position.coords.longitude
 
         }).catch((error) => {
 
             console.log('problem getting location', error);
             alert('code: ' + error.code + '\n'
                 + 'message: ' + error.message + '\n');
         });*/
        console.log(this.userLoc);
        console.log("here");
        //find the closest visible tree from the list of trees
        for (var _i = 0, _a = this.tree_list; _i < _a.length; _i++) {
            var tree = _a[_i];
            //the distance between the two latitudes
            //TODO replave with actual cords
            if (userlat > tree.lat) {
                yDist = userlat - tree.lat;
                direct1 = "South";
            }
            else {
                console.log();
                yDist = tree.lat - userlat;
                direct1 = "North";
            }
            //the distance between the two longitudes
            if (userlong > tree.long) {
                xDist = userlong - tree.long;
                direct2 = "West";
            }
            else {
                xDist = tree.long - userlong;
                direct2 = "East";
            }
            //make this tree the closest if it appears closer
            if (yDist < minLatDist &&
                xDist < minLngDist &&
                tree.hidden === hiddenFlag) {
                targetInd = index;
                minLatDist = yDist;
                minLngDist = xDist;
            }
            index++;
        }
        if (targetInd >= -1) {
            return {
                ind: targetInd,
                latDist: yDist,
                lngDist: xDist,
                direct: direct1 + direct2
            };
        }
        else {
            return undefined;
        }
    };
    /*
       this function returns the distance a user is from a tree
   */
    BotaniMap.prototype.inProximity = function (closest) {
        /*let a = closest.latDist * closest.latDist;
        let b = closest.lngDist * closest.lngDist;
        let squaredDist = a+b;
        return Math.sqrt(squaredDist);*/
        console.log("promixty");
        var ind = closest.ind;
        console.log("inde is " + ind);
        console.log("promiimity = 1");
        var treeLoc = new google.maps.LatLng(this.tree_list[ind].lat, this.tree_list[ind].long);
        console.log();
        var myLoc = new google.maps.LatLng(this.userLoc.lat, this.userLoc.long);
        console.log(myLoc);
        console.log("prox ");
        var thing = google.maps.geometry.spherical.computeDistanceBetween(myLoc, treeLoc);
        console.log(thing);
        return thing;
    };
    BotaniMap.prototype.alertMessage = function (num) {
        var titleStr = (num === 1) ? 'New Tree Available' : 'Can\'t Collect Data';
        var subStr = (num === 1)
            ? 'A new Tree has been discovered, hurry and make some observations on it!'
            : 'You aren\'t within the range of any of the trees on the map';
        var alert = this.alertCtrl.create({
            title: titleStr,
            subTitle: subStr,
            buttons: ['OK']
        });
        alert.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], BotaniMap.prototype, "mapContainer", void 0);
    BotaniMap = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'map',template:/*ion-inline-start:"/home/linconnu/Desktop/botani3/src/pages/map/map.html"*/'<ion-header>\n    <ion-navbar>\n      <ion-buttons left>\n        <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      </ion-buttons>\n      <ion-title class = "toolbar-background">\n          <span text-color = "white-text"> Map </span>\n      </ion-title>\n    </ion-navbar>\n  </ion-header>\n \n \n  <ion-content>\n      <div #map id="map"></div> \n    \n      <ion-grid>\n        <ion-row>\n          <ion-col width-50>\n            <button ion-button (click)="observeNearest()" id = collect>Observe</button>\n          </ion-col>\n          <ion-col width-50>\n            <button ion-button (click)="revealHidden()" id = check>Find</button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    \n    </ion-content>\n<!--<ion-content id = buttons>\n  \n</ion-content>-->'/*ion-inline-end:"/home/linconnu/Desktop/botani3/src/pages/map/map.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_3__providers_treefactory__["a" /* TreeFactory */],
            __WEBPACK_IMPORTED_MODULE_7_ionic_angular_components_alert_alert_controller__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
    ], BotaniMap);
    return BotaniMap;
}());

var Tree = (function () {
    function Tree(lat, long, child_tree, special_events, hidden) {
        this.lat = lat;
        this.long = long;
        this.child_tree = child_tree;
        this._special_events = special_events;
        this._number_of_events = special_events.length;
        this.hidden = hidden;
        this._params =
            {
                falling: false,
                fruiting: false,
                flowering: false,
                pinecone: false,
                special: special_events
            };
    }
    // Returns the paramaters for data collection
    Tree.prototype.collectData = function () {
        this.prepParams();
        return this._params;
    };
    // Checks to see if collection is leagal
    Tree.prototype.canCollect = function (curLat, curLong) {
        // TODO get user location and test to see if in bounds
        return true;
    };
    Object.defineProperty(Tree.prototype, "special_events", {
        // Reports any special events occuring on the tree
        get: function () {
            return this._special_events;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Tree.prototype, "number_of_events", {
        // Reports the number of events on a tree
        get: function () {
            return this._number_of_events;
        },
        enumerable: true,
        configurable: true
    });
    // Gets the proper parameters of each decorator and
    // uses them to creat a DataParams interface
    Tree.prototype.prepParams = function () {
        var raw_params = this.child_tree.getParams().split('.');
        while (raw_params.length != 0) {
            switch (raw_params.pop()) {
                case 'fl':
                    this._params.falling = true;
                    break;
                case 'fw':
                    this._params.flowering = true;
                    break;
                case 'fr':
                    this._params.fruiting = true;
                    break;
                case 'pn':
                    this._params.pinecone = true;
                    break;
            }
        }
    };
    return Tree;
}());

// DecoratorTree objects are the child_trees of the concrete tree class
// There function is to call the specific collectData methods for each data point
var DecoratorTree = (function () {
    function DecoratorTree(child_tree) {
        this.child_tree = child_tree;
        this.params = "";
    }
    DecoratorTree.prototype.getParams = function () {
        return this.collectData();
    };
    return DecoratorTree;
}());

/*------NEW DECORATORS MUST BE IMPLEMENTED TO EXTEND DECORATOR TREE------*/
var FallingTree = (function (_super) {
    __extends(FallingTree, _super);
    function FallingTree() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FallingTree.prototype.collectData = function () {
        if (this.child_tree !== null) {
            return "fl." + this.child_tree.collectData();
        }
        return "fl";
    };
    return FallingTree;
}(DecoratorTree));

var FrutingTree = (function (_super) {
    __extends(FrutingTree, _super); /*******SPELLING ERROR********/
    function FrutingTree() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FrutingTree.prototype.collectData = function () {
        if (this.child_tree !== null) {
            return "fr." + this.child_tree.collectData();
        }
        return "fr";
    };
    return FrutingTree;
}(DecoratorTree /*******SPELLING ERROR********/));

var FloweringTree = (function (_super) {
    __extends(FloweringTree, _super);
    function FloweringTree() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FloweringTree.prototype.collectData = function () {
        if (this.child_tree !== null) {
            return "fw." + this.child_tree.collectData();
        }
        return "fw";
    };
    return FloweringTree;
}(DecoratorTree));

var PineConeTree = (function (_super) {
    __extends(PineConeTree, _super);
    function PineConeTree() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PineConeTree.prototype.collectData = function () {
        if (this.child_tree !== null) {
            return "pn." + this.child_tree.collectData();
        }
        return "pn";
    };
    return PineConeTree;
}(DecoratorTree));

//# sourceMappingURL=map.js.map

/***/ }),

/***/ 1072:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(16);
var filter_1 = __webpack_require__(506);
Observable_1.Observable.prototype.filter = filter_1.filter;
//# sourceMappingURL=filter.js.map

/***/ })

});
//# sourceMappingURL=0.js.map