webpackJsonp([5],{

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Graphs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return PopoverPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_userfactory__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_chart_js__ = __webpack_require__(562);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_chart_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_entrypasser__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_login_info_login_info__ = __webpack_require__(146);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//import { Tree } from '../map/map'


var barGraphIndex = 0;
var lineGraphIndex = 0;
var lineGraphSegment = [3, 3, 3, 3, 3, 3, 3, 3, 3, 3];
var numBarGraphs = 6;
var numLineGraphs = 10;
var gIndex = 0;
var graphMode = 0;
var loginDetails;
//the colors for each of the left and right graphs
var barGraphColors = [
    ['rgba(0, 193, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
    ['rgba(213, 255, 0, 0.5)', 'rgba(0, 0, 255, 0.5)'],
    ['rgba(54, 162, 235, 0.5)', 'rgba(255, 137, 0, 0.5)'],
    ['rgba(0, 255, 0, 0.5)', 'rgba(0, 0, 0, 0.5)'],
    ['rgba(255, 0, 222, 0.5)', 'rgba(0, 255, 213, 0.5)'],
    ['rgba(255, 0, 0, 0.5)', 'rgba(0, 0, 255, 0.5)']
];
//the data in each of the graphs
var barGraphData = [[50, 50], [50, 50], [50, 50], [50, 50], [50, 50], [50, 50]];
var lineGraphData = [0, 180, 710, 2200, 5200, 10000];
var lineGraphDataToSend = ['0', '1 to 3', '3 to 10', '11 to 100', '101 to 1,000', '1,001 to 10,000', ' > 10,000'];
//labels for each graph
var barGraphLabels = [
    ['Opened', 'Not Opened'],
    ['Used', 'Not Used'],
    ['Full', 'Not Full'],
    ['Green', 'Not Green'],
    ['Opened', 'Not Opened'],
    ['Ripe', 'Not Ripe']
];
//the titles for each graph
var barGraphTitles = [
    'Open Pollen Cones',
    'Canopy Space Used',
    'Full-Sized Leaves',
    'Colored Leaves',
    'Open Flowers',
    'Ripe Fruits'
];
var lineGraphTitles = [
    'Breaking Needle Buds',
    'Young Needles',
    'Fresh Pollen Cones',
    'Unripe Seed Cones',
    'Ripe Seed Cones',
    'Dropped Seed Cones',
    'Breaking Lead Buds',
    'Flower Buds',
    'Fruits',
    'Dropped Fruits'
];
var lineGraphDescriptions = [
    'One or more breaking needle buds are visible on the plant. A needle bud is considered "breaking" once a green needle tip is visible at the end of the bud, but before the first needle from the bud has unfolded and spread away at an angle from the developing stem.',
    'One or more young, unfolded needles are visible on the plant. A needle is considered "young" and "unfolded" once it has spread away from the developing stem enough that its point of attachment to the stem is visible, but before it has reached full size or turned the darker green color or tougher texture of mature needles on the plant',
    'One or more fresh, male pollen cones (strobili) are visible on the plant. Cones have overlapping scales that are initially tightly closed, then spread apart to open the cone and release pollen. Include cones that are unopened or open, but do not include wilted or dried cones that have already released all of their pollen.',
    'One or more open, fresh, male pollen cones (strobili) are visible on the plant. Cones are considered "open" when the scales have spread apart to release pollen. Do not include wilted or dried cones that have already released all of their pollen.',
    'One or more unripe, female seed cones are visible on the plant.',
    'One or more ripe, female seed cones are visible on the plant. A seed cone is considered ripe when it has turned brown and the scales have begun to spread apart to expose the seeds inside. Do not include empty cones that have already dropped all of their seeds.',
    'One or more seed cones or seeds have dropped or been removed from the plant since your last visit. Do not include empty seed cones that had long ago dropped all of their seeds but remained on the plant.',
    'One or more breaking leaf buds are visible on the plant. A leaf bud is considered "breaking" once a green leaf tip is visible at the end of the bud, but before the first leaf from the bud has unfolded to expose the leaf stalk (petiole) or leaf base.',
    'One or more fresh open or unopened flowers or flower buds are visible on the plant. Include flower buds or inflorescences that are swelling or expanding, but do not include those that are tightly closed and not actively growing (dormant). Do not include wilted or dried flowers.',
    'One or more fruits are visible on the plant.',
    'One or more mature fruits or seeds have dropped or been removed from the plant since your last visit. Do not include obviously immature fruits that have dropped before ripening, such as in a heavy rain or wind, or empty fruits that had long ago dropped all of their seeds but remained on the plant.'
];
var barGraphDescriptions = [
    'One or more open, fresh, male pollen cones (strobili) are visible on the plant. Cones are considered "open" when the scales have spread apart to release pollen. Do not include wilted or dried cones that have already released all of their pollen.',
    'One or more live, unfolded leaves are visible on the plant. A leaf is considered "unfolded" once its entire length has emerged from a breaking bud, stem node or growing stem tip, so that the leaf stalk (petiole) or leaf base is visible at its point of attachment to the stem. Do not include fully dried or dead leaves.',
    'A majority of leaves on the plant have not yet reached their full size and are still growing larger. Do not include new leaves that continue to emerge at the ends of elongating stems throughout the growing season.',
    'One or more leaves show some of their typical late - season color, or yellow or brown due to drought or other stresses. Do not include small spots of color due to minor leaf damage, or dieback on branches that have broken. Do not include fully dried or dead leaves that remain on the plant.',
    'One or more open, fresh flowers are visible on the plant. Flowers are considered "open" when the reproductive parts (male stamens or female pistils) are visible between or within unfolded or open flower parts (petals, floral tubes or sepals). Do not include wilted or dried flowers.',
    'One or more ripe fruits are visible on the plant.'
];
var popoverTitle = '';
var popoverData = '';
var username;
var Graphs = (function () {
    function Graphs(navCtrl, popoverCtrl, navParams, passer, alert, saveLogIn, UserFactory) {
        this.navCtrl = navCtrl;
        this.popoverCtrl = popoverCtrl;
        this.passer = passer;
        this.alert = alert;
        this.saveLogIn = saveLogIn;
        this.UserFactory = UserFactory;
        //these get set to true when they're relevant
        this.showOpenPollenCones = false;
        this.showUnfoldingLeaves = false;
        this.showFullSizedLeaves = false;
        this.showColoredLeaves = false;
        this.showOpenedFlowers = false;
        this.showRipeFruits = false;
        this.showNumberOfBreakingNeedleBuds = false;
        this.showNumberOfYoungNeedles = false;
        this.showNumberOfFreshPollenCones = false;
        this.showNumberOfUnripeSeedCones = false;
        this.showNumberOfRipeSeedCones = false;
        this.showNumberOfDroppedSeedCones = false;
        this.showNumberOfBreakingLeafBuds = false;
        this.showNumberOfFlowerBuds = false;
        this.showNumberOfFruits = false;
        this.showNumberOfDroppedFruits = false;
        //starting values for the sliders
        this.openPollenConesValue = 50;
        this.unfoldingLeavesValue = 50;
        this.fullSizedLeavesValue = 50;
        this.coloredLeavesValue = 50;
        this.openedFlowersValue = 50;
        this.ripeFruitsValue = 50;
        this.breakingNeedleBudsValue = 3;
        this.youngNeedlesValue = 3;
        this.freshPollenConesValue = 3;
        this.unripeSeedConesValue = 3;
        this.ripeSeedConesValue = 3;
        this.droppedSeedConesValue = 3;
        this.breakingLeafBudsValue = 3;
        this.flowerBudsValue = 3;
        this.fruitsValue = 3;
        this.droppedFruitsValue = 3;
        this.openPollenConesRadioValue = 'little';
        this.coloredLeavesRadioValue = 'true';
        this.LineGraphSendValues = [];
        this.BarGraphSendValues = [];
        console.log("made it here");
        this.barChart = [null, null, null, null, null, null]; //initialize an array of bar charts
        this.lineChart = [null, null, null, null, null, null, null, null, null, null];
        this.loginName = saveLogIn.getUsername();
        this.initLinegraphSendValues();
        this.initBargraphSendValues();
        this.initBools(navParams.get("params"));
        this.points = this.awardpoints(navParams.get("params"));
        //this.lineChart = new Linegraphs();
    }
    Graphs.prototype.awardpoints = function (params) {
        var multi = 1;
        for (var i in params.special) {
            multi++;
        }
        return 100 * multi;
    };
    Graphs.prototype.initBools = function (params) {
        if (params.falling) {
            this.showColoredLeaves = true;
            this.showFullSizedLeaves = true;
            this.showUnfoldingLeaves = true;
        }
        if (params.pinecone) {
            this.showOpenPollenCones = true;
            this.showNumberOfBreakingNeedleBuds = true;
        }
        this.showRipeFruits = params.fruiting;
        this.showOpenedFlowers = params.flowering;
    };
    Graphs.prototype.initLinegraphSendValues = function () {
        for (var i = 0; i < numLineGraphs; i++) {
            this.LineGraphSendValues[i] = lineGraphDataToSend[3];
        }
    };
    Graphs.prototype.initBargraphSendValues = function () {
        for (var i = 0; i < numBarGraphs; i++) {
            this.BarGraphSendValues[i] = '50';
        }
    };
    Graphs.prototype.collectData = function () {
        //let username = loginDetails.username;
        var entry = { data: "passed" };
        //this.passer.getEntry(entry)
        this.presentPoints();
        if (!this.showOpenPollenCones) {
            this.openPollenConesValue = null;
            this.openPollenConesRadioValue = null;
        }
        if (!this.showUnfoldingLeaves)
            this.unfoldingLeavesValue = null;
        if (!this.showFullSizedLeaves)
            this.fullSizedLeavesValue = null;
        if (!this.showColoredLeaves) {
            this.coloredLeavesValue = null;
            this.coloredLeavesRadioValue = null;
        }
        if (!this.showOpenedFlowers)
            this.openedFlowersValue = null;
        if (!this.showRipeFruits)
            this.ripeFruitsValue;
        if (!this.showNumberOfBreakingNeedleBuds)
            this.breakingNeedleBudsValue;
        if (!this.showNumberOfYoungNeedles)
            this.youngNeedlesValue = null;
        if (!this.showNumberOfFreshPollenCones)
            this.freshPollenConesValue = null;
        if (!this.showNumberOfUnripeSeedCones)
            this.unripeSeedConesValue = null;
        if (!this.showNumberOfRipeSeedCones)
            this.ripeSeedConesValue = null;
        if (!this.showNumberOfDroppedSeedCones)
            this.droppedSeedConesValue = null;
        if (!this.showNumberOfBreakingLeafBuds)
            this.breakingLeafBudsValue = null;
        if (!this.showNumberOfFlowerBuds)
            this.flowerBudsValue = null;
        if (!this.showNumberOfFruits)
            this.fruitsValue = null;
        if (!this.showNumberOfDroppedFruits)
            this.droppedFruitsValue = null;
        //this line of code create new entry in the database with all the information that was recorded
        this.passer.createEntry(username, 2, this.openPollenConesValue, this.unfoldingLeavesValue, this.fullSizedLeavesValue, this.coloredLeavesValue, this.openedFlowersValue, this.ripeFruitsValue, this.breakingNeedleBudsValue, this.youngNeedlesValue, this.freshPollenConesValue, this.unripeSeedConesValue, this.ripeSeedConesValue, this.droppedSeedConesValue, this.breakingLeafBudsValue, this.flowerBudsValue, this.fruitsValue, this.droppedFruitsValue, this.openPollenConesRadioValue, this.coloredLeavesRadioValue);
        this.UserFactory.updateUser(username, this.points);
        this.navCtrl.pop();
    };
    Graphs.prototype.presentPoints = function () {
        var alert = this.alert.create({
            title: "Data sent!",
            subTitle: "You earned " + this.points + " drops",
            buttons: ["Continue"]
        });
        alert.present();
    };
    Graphs.prototype.ionViewDidLoad = function () {
        for (barGraphIndex = 0; barGraphIndex < numBarGraphs; barGraphIndex++) {
            this.barChart[barGraphIndex] = this.getBarChart(); //load each graph into the view
        }
        for (lineGraphIndex = 0; lineGraphIndex < numLineGraphs; lineGraphIndex++) {
            this.lineChart[lineGraphIndex] = this.getLineChart();
        }
    };
    /*
    draws the graph
    */
    Graphs.prototype.getChart = function (context, type, data, options) {
        return new __WEBPACK_IMPORTED_MODULE_3_chart_js__["Chart"](context, {
            type: type,
            data: data,
            options: options
        });
    };
    /*
    sets the fields and options for each bar graph
    */
    Graphs.prototype.getBarChart = function () {
        var data = {
            scaleStartValue: 0,
            labels: barGraphLabels[barGraphIndex],
            datasets: [{
                    label: 'Percentage of ' + barGraphTitles[barGraphIndex],
                    data: barGraphData[barGraphIndex],
                    backgroundColor: barGraphColors[barGraphIndex]
                }]
        };
        var options = {
            title: {
                display: true,
                text: 'Percentage of ' + barGraphTitles[barGraphIndex],
                fontSize: 20
            },
            legend: {
                display: false
            },
            tooltips: {
                enabled: false
            },
            scales: {
                yAxes: [{
                        gridLines: {
                            color: "rgba(0, 0, 0, 0)",
                        },
                        ticks: {
                            beginAtZero: true,
                            min: 0,
                            max: 100,
                            stepSize: 20,
                            tickThickness: 0
                        }
                    }],
                xAxes: [{
                        gridLines: {
                            color: "rgba(0, 0, 0, 0)",
                        }
                    }]
            }
        };
        if ((barGraphIndex === 0) && this.showOpenPollenCones)
            return this.getChart(this.openPollenCones.nativeElement, "bar", data, options);
        else if ((barGraphIndex === 1) && this.showUnfoldingLeaves)
            return this.getChart(this.unfoldingLeaves.nativeElement, "bar", data, options);
        else if ((barGraphIndex === 2) && this.showFullSizedLeaves)
            return this.getChart(this.fullSizedLeaves.nativeElement, "bar", data, options);
        else if ((barGraphIndex === 3) && this.showColoredLeaves)
            return this.getChart(this.coloredLeaves.nativeElement, "bar", data, options);
        else if ((barGraphIndex === 4) && this.showOpenedFlowers)
            return this.getChart(this.openedFlowers.nativeElement, "bar", data, options);
        else if ((barGraphIndex === 5) && this.showRipeFruits)
            return this.getChart(this.ripeFruits.nativeElement, "bar", data, options);
    };
    Graphs.prototype.getLineChart = function () {
        var data = {
            labels: [' ', ' ', ' ', ' ', ' ', ' '],
            datasets: [{
                    label: 'Number of ' + lineGraphTitles[lineGraphIndex],
                    backgroundColor: '#87E6BF',
                    data: this.getExponentialData(lineGraphSegment[lineGraphIndex])
                }]
        };
        var options = {
            title: {
                display: true,
                text: 'Number of ' + lineGraphTitles[lineGraphIndex],
                fontSize: 20
            },
            scales: {
                yAxes: [{
                        type: 'linear',
                        gridLines: {},
                        ticks: {
                            display: true,
                            min: 0,
                            max: 10000,
                            stepSize: 10000
                        }
                    }],
                xAxes: [{
                        gridLines: {
                            color: "rgba(0, 0, 0, 0)"
                        }
                    }]
            },
            elements: {
                point: {
                    radius: 0
                }
            },
            legend: {
                display: false
            },
            tooltips: {
                enabled: false
            }
        };
        if ((lineGraphIndex === 0) && this.showNumberOfBreakingNeedleBuds)
            return this.getChart(this.breakingNeedleBuds.nativeElement, "line", data, options);
        else if ((lineGraphIndex === 1) && this.showNumberOfYoungNeedles)
            return this.getChart(this.youngNeedles.nativeElement, "line", data, options);
        else if ((lineGraphIndex === 2) && this.showNumberOfFreshPollenCones)
            return this.getChart(this.freshPollenCones.nativeElement, "line", data, options);
        else if ((lineGraphIndex === 3) && this.showNumberOfUnripeSeedCones)
            return this.getChart(this.unripeSeedCones.nativeElement, "line", data, options);
        else if ((lineGraphIndex === 4) && this.showNumberOfRipeSeedCones)
            return this.getChart(this.ripeSeedCones.nativeElement, "line", data, options);
        else if ((lineGraphIndex === 5) && this.showNumberOfDroppedSeedCones)
            return this.getChart(this.droppedSeedCones.nativeElement, "line", data, options);
        else if ((lineGraphIndex === 6) && this.showNumberOfBreakingLeafBuds)
            return this.getChart(this.breakingLeafBuds.nativeElement, "line", data, options);
        else if ((lineGraphIndex === 7) && this.showNumberOfFlowerBuds)
            return this.getChart(this.flowerBuds.nativeElement, "line", data, options);
        else if ((lineGraphIndex === 8) && this.showNumberOfFruits)
            return this.getChart(this.fruits.nativeElement, "line", data, options);
        else if ((lineGraphIndex === 9) && this.showNumberOfDroppedFruits)
            return this.getChart(this.droppedFruits.nativeElement, "line", data, options);
    };
    //get called when the state of a graph changes, and updates that graph
    Graphs.prototype.redrawBarGraph = function (i, value) {
        barGraphIndex = i;
        barGraphData[barGraphIndex] = [value, 100 - value];
        this.barChart[barGraphIndex].destroy();
        this.barChart[barGraphIndex] = this.getBarChart();
        this.BarGraphSendValues[barGraphIndex] = "" + value;
    };
    Graphs.prototype.redrawLineGraph = function (i, inputSegment) {
        lineGraphIndex = i;
        lineGraphSegment[lineGraphIndex] = inputSegment;
        this.lineChart[lineGraphIndex].destroy();
        this.lineChart[lineGraphIndex] = this.getLineChart();
        this.LineGraphSendValues[lineGraphIndex] = lineGraphDataToSend[inputSegment];
    };
    Graphs.prototype.getExponentialData = function (size) {
        var result = [];
        for (var i = 0; i <= size; i++)
            result[i] = lineGraphData[i];
        return result;
    };
    Graphs.prototype.getPopoverTitle = function (mode, i) {
        if (mode === 0)
            popoverTitle = barGraphTitles[i];
        else
            popoverTitle = lineGraphTitles[i];
    };
    Graphs.prototype.getPopoverData = function (mode, i) {
        if (mode === 0)
            popoverData = barGraphDescriptions[i];
        else
            popoverData = lineGraphDescriptions[i];
    };
    Graphs.prototype.getInfo = function (myEvent, mode, i) {
        gIndex = i;
        graphMode = mode;
        this.getPopoverTitle(mode, i);
        this.getPopoverData(mode, i);
        var popover = this.popoverCtrl.create(PopoverPage, {}, { cssClass: 'custom-popover' });
        popover.present({
            ev: myEvent
        });
    };
    Graphs.prototype.setPollenConesRadio = function (value) {
        this.openPollenConesRadioValue = value;
    };
    Graphs.prototype.setColoredLeavesRadio = function (value) {
        this.coloredLeavesRadioValue = value;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('openPollenCones'),
        __metadata("design:type", Object)
    ], Graphs.prototype, "openPollenCones", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('unfoldingLeaves'),
        __metadata("design:type", Object)
    ], Graphs.prototype, "unfoldingLeaves", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('fullSizedLeaves'),
        __metadata("design:type", Object)
    ], Graphs.prototype, "fullSizedLeaves", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('coloredLeaves'),
        __metadata("design:type", Object)
    ], Graphs.prototype, "coloredLeaves", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('openedFlowers'),
        __metadata("design:type", Object)
    ], Graphs.prototype, "openedFlowers", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('ripeFruits'),
        __metadata("design:type", Object)
    ], Graphs.prototype, "ripeFruits", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('breakingNeedleBuds'),
        __metadata("design:type", Object)
    ], Graphs.prototype, "breakingNeedleBuds", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('youngNeedles'),
        __metadata("design:type", Object)
    ], Graphs.prototype, "youngNeedles", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('freshPollenCones'),
        __metadata("design:type", Object)
    ], Graphs.prototype, "freshPollenCones", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('unripeSeedCones'),
        __metadata("design:type", Object)
    ], Graphs.prototype, "unripeSeedCones", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('ripeSeedCones'),
        __metadata("design:type", Object)
    ], Graphs.prototype, "ripeSeedCones", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('droppedSeedCones'),
        __metadata("design:type", Object)
    ], Graphs.prototype, "droppedSeedCones", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('breakingLeafBuds'),
        __metadata("design:type", Object)
    ], Graphs.prototype, "breakingLeafBuds", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('flowerBuds'),
        __metadata("design:type", Object)
    ], Graphs.prototype, "flowerBuds", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('fruits'),
        __metadata("design:type", Object)
    ], Graphs.prototype, "fruits", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('droppedFruits'),
        __metadata("design:type", Object)
    ], Graphs.prototype, "droppedFruits", void 0);
    Graphs = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-graph',template:/*ion-inline-start:"/home/linconnu/Desktop/botani3/src/pages/dataCollection/dataCollection.html"*/'<ion-header>\n    <ion-navbar>\n      <ion-buttons left>\n        <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      </ion-buttons>\n      <ion-title class = "toolbar-background">\n          <span text-color = "white-text"> Data Collection </span>\n      </ion-title>\n    </ion-navbar>\n  </ion-header>\n \n \n  <ion-content>\n\n      <div *ngIf = "showOpenPollenCones">\n        <ion-card>\n          <ion-card-header>\n              <button ion-button small (tap) = "getInfo($event,0,0)">\n                info\n              </button>\n          </ion-card-header>\n          <ion-card-content>\n              \n            <canvas #openPollenCones></canvas>\n            <ion-item>\n                <ion-range\n                [(ngModel)] = "openPollenConesValue"  min="0" max="100" step="5"\n                 snaps = "true" pin = "true" \n                (ionChange) = "redrawBarGraph(0,openPollenConesValue)"\n                debounce="200" \n                >\n                    <ion-label range-left>0</ion-label>\n                    <ion-label range-right>100</ion-label>\n              </ion-range>\n            </ion-item>\n            <p style = "text-align: center"> {{BarGraphSendValues[0]}} </p>\n          </ion-card-content>\n\n          <ion-card>\n            <h2 style = "text-align: center">How much pollen is released when gently shaken or blown into your palm or onto a dark surface?</h2>\n            <ion-list radio-group>\n                <ion-item>\n                    <ion-label>Little</ion-label>\n                    <ion-radio value="little" checked (ionSelect) = "setPollenConesRadio(\'little\')"></ion-radio>\n                </ion-item>\n                <ion-item>\n                    <ion-label>Some</ion-label>\n                    <ion-radio value="some" (ionSelect) = "setPollenConesRadio(\'some\')"></ion-radio>\n                </ion-item>\n                <ion-item>\n                    <ion-label>Lots</ion-label>\n                    <ion-radio value="lots" (ionSelect) = "setPollenConesRadio(\'lots\')"></ion-radio>\n                </ion-item>\n            </ion-list>\n        </ion-card>\n\n        </ion-card>\n      </div>\n      \n      <div *ngIf = "showUnfoldingLeaves">\n          <ion-card>\n              <ion-card-header>\n                  <button ion-button small (tap) = "getInfo($event,0,1)">\n                    info\n                  </button>\n              </ion-card-header>\n            <ion-card-content>\n              <canvas #unfoldingLeaves></canvas>\n    \n              <ion-item>\n                  <ion-range \n                  [(ngModel)] = "unfoldingLeavesValue"  min="0" max="100" step="5" snaps = "true" pin = "true" \n                  (ionChange) = "redrawBarGraph(1,unfoldingLeavesValue)"\n                  debounce="200" \n                  >\n                      <ion-label range-left>0</ion-label>\n                      <ion-label range-right>100</ion-label>\n                </ion-range>\n              </ion-item>\n              <p style = "text-align: center"> {{BarGraphSendValues[1]}} </p>\n            </ion-card-content>\n          </ion-card>\n        </div>\n    \n        <div *ngIf = "showFullSizedLeaves">\n          <ion-card>\n              <ion-card-header>\n                  <button ion-button small (tap) = "getInfo($event,0,2)">\n                    info\n                  </button>\n              </ion-card-header>\n            <ion-card-content>\n              <canvas #fullSizedLeaves></canvas>\n    \n              <ion-item>\n                  <ion-range \n                  [(ngModel)] = "fullSizedLeavesValue"  min="0" max="100" step="5" snaps = "true" pin = "true" \n                  (ionChange) = "redrawBarGraph(2,fullSizedLeavesValue)"\n                  debounce="200" \n                  >\n                      <ion-label range-left>0</ion-label>\n                      <ion-label range-right>100</ion-label>\n                </ion-range>\n              </ion-item>\n              <p style = "text-align: center"> {{BarGraphSendValues[2]}} </p>\n            </ion-card-content>\n          </ion-card>\n        </div>\n    \n        <div *ngIf = "showColoredLeaves">\n          <ion-card>\n              <ion-card-header>\n                  <button ion-button small (tap) = "getInfo($event,0,3)">\n                    info\n                  </button>\n              </ion-card-header>\n            <ion-card-content>\n              <canvas #coloredLeaves></canvas>\n    \n              <ion-item>\n                  <ion-range \n                  [(ngModel)] = "coloredLeavesValue"  min="0" max="100" step="5" snaps = "true" pin = "true" \n                  (ionChange) = "redrawBarGraph(3,coloredLeavesValue)"\n                  debounce="200" \n                  >\n                      <ion-label range-left>0</ion-label>\n                      <ion-label range-right>100</ion-label>\n                </ion-range>\n              </ion-item>\n              <p style = "text-align: center"> {{BarGraphSendValues[3]}} </p>\n            </ion-card-content>\n\n            <ion-card>\n                <h2 style = "text-align: center">One or more leaves are falling or have recently fallen from the plant.</h2>\n                <ion-list radio-group>\n\n                    <ion-item>\n                        <ion-label>True</ion-label>\n                        <ion-radio value = "true" checked (ionSelect) = "setColoredLeavesRadio(\'true\')"></ion-radio>\n                    </ion-item>\n\n                    <ion-item>\n                        <ion-label>False</ion-label>\n                        <ion-radio value = "false" (ionSelect) = "setColoredLeavesRadio(\'false\')"></ion-radio>\n                    </ion-item>\n\n                </ion-list>\n            </ion-card>\n\n          </ion-card>\n        </div>\n    \n        <div *ngIf = "showOpenedFlowers">\n          <ion-card>\n              <ion-card-header>\n                  <button ion-button small (tap) = "getInfo($event,0,4)">\n                    info\n                  </button>\n              </ion-card-header>\n            <ion-card-content>\n              <canvas #openedFlowers></canvas>\n    \n              <ion-item>\n                  <ion-range \n                  [(ngModel)] = "openedFlowersValue"  min="0" max="100" step="5" snaps = "true" pin = "true" \n                  (ionChange) = "redrawBarGraph(4,openedFlowersValue)"\n                  debounce="200" \n                  >\n                      <ion-label range-left>0</ion-label>\n                      <ion-label range-right>100</ion-label>\n                </ion-range>\n              </ion-item>\n              <p style = "text-align: center"> {{BarGraphSendValues[4]}} </p>\n            </ion-card-content>\n          </ion-card>\n        </div>\n    \n        <div *ngIf = "showRipeFruits">\n          <ion-card>\n              <ion-card-header>\n                  <button ion-button small (tap) = "getInfo($event,0,5)">\n                    info\n                  </button>\n              </ion-card-header>\n            <ion-card-content>\n              <canvas #ripeFruits></canvas>\n    \n              <ion-item>\n                  <ion-range \n                  [(ngModel)] = "ripeFruitsValue"  min="0" max="100" step="5" snaps = "true" pin = "true" \n                  (ionChange) = "redrawBarGraph(5,ripeFruitsValue)"\n                  debounce="200" \n                  >\n                      <ion-label range-left>0</ion-label>\n                      <ion-label range-right>100</ion-label>\n                </ion-range>\n              </ion-item>\n              <p style = "text-align: center"> {{BarGraphSendValues[5]}} </p>\n            </ion-card-content>\n          </ion-card>\n        </div>\n  \n        <div *ngIf = "showNumberOfBreakingNeedleBuds">\n            <ion-card>\n                <ion-card-header>\n                    <button ion-button small (tap) = "getInfo($event,1,0)">\n                      info\n                    </button>\n                </ion-card-header>\n              <ion-card-content>\n                <canvas #breakingNeedleBuds></canvas>\n  \n                <ion-item>\n                    \n                    <ion-range \n                    [(ngModel)] = "breakingNeedleBudsValue" min = "0" max = "5" step = "1" snaps = "true"\n                    (ionChange) = "redrawLineGraph(0,breakingNeedleBudsValue)"\n                    debounce="200" \n                    >\n\n                        <ion-label range-left>0</ion-label>\n                        <ion-label range-right>10,000</ion-label>\n                  </ion-range>\n                  \n                </ion-item>\n                <p style = "text-align: center"> {{LineGraphSendValues[0]}} </p>\n              </ion-card-content>\n            </ion-card>\n        </div>\n\n        <div *ngIf = "showNumberOfYoungNeedles">\n            <ion-card>\n                <ion-card-header>\n                    <button ion-button small (tap) = "getInfo($event,1,1)">\n                      info\n                    </button>\n                </ion-card-header>\n              <ion-card-content>\n                <canvas #youngNeedles></canvas>\n  \n                <ion-item>\n                    <ion-range \n                    [(ngModel)] = "youngNeedlesValue" min = "0" max = "5" step = "1" snaps = "true"\n                    (ionChange) = "redrawLineGraph(1,youngNeedlesValue)"\n                    debounce="200" \n                    >\n                        <ion-label range-left>0</ion-label>\n                        <ion-label range-right>10,000</ion-label>\n                  </ion-range>\n                </ion-item>\n                <p style = "text-align: center"> {{LineGraphSendValues[1]}} </p>\n              </ion-card-content>\n            </ion-card>\n        </div>\n\n        <div *ngIf = "showNumberOfFreshPollenCones">\n            <ion-card>\n                <ion-card-header>\n                    <button ion-button small (tap) = "getInfo($event,1,2)">\n                      info\n                    </button>\n                </ion-card-header>\n              <ion-card-content>\n                <canvas #freshPollenCones></canvas>\n  \n                <ion-item>\n                    <ion-range \n                    [(ngModel)] = "freshPollenConesValue" min = "0" max = "5" step = "1" snaps = "true"\n                    (ionChange) = "redrawLineGraph(2,freshPollenConesValue)"\n                    debounce="200" \n                    >\n                        <ion-label range-left>0</ion-label>\n                        <ion-label range-right>10,000</ion-label>\n                  </ion-range>\n                </ion-item>\n                <p style = "text-align: center"> {{LineGraphSendValues[2]}} </p>\n              </ion-card-content>\n            </ion-card>\n        </div>\n\n        <div *ngIf = "showNumberOfUnripeSeedCones">\n            <ion-card>\n                <ion-card-header>\n                    <button ion-button small (tap) = "getInfo($event,1,3)">\n                      info\n                    </button>\n                </ion-card-header>\n              <ion-card-content>\n                <canvas #unripeSeedCones></canvas>\n  \n                <ion-item>\n                    <ion-range \n                    [(ngModel)] = "unripeSeedConesValue" min = "0" max = "5" step = "1" snaps = "true"\n                    (ionChange) = "redrawLineGraph(3,unripeSeedConesValue)"\n                    debounce="200" \n                    >\n                        <ion-label range-left>0</ion-label>\n                        <ion-label range-right>10,000</ion-label>\n                  </ion-range>\n                </ion-item>\n                <p style = "text-align: center"> {{LineGraphSendValues[3]}} </p>\n              </ion-card-content>\n            </ion-card>\n        </div>\n\n        <div *ngIf = "showNumberOfRipeSeedCones">\n            <ion-card>\n                <ion-card-header>\n                    <button ion-button small (tap) = "getInfo($event,1,4)">\n                      info\n                    </button>\n                </ion-card-header>\n              <ion-card-content>\n                <canvas #ripeSeedCones></canvas>\n  \n                <ion-item>\n                    <ion-range \n                    [(ngModel)] = "ripeSeedConesValue" min = "0" max = "5" step = "1" snaps = "true"\n                    (ionChange) = "redrawLineGraph(4,ripeSeedConesValue)"\n                    debounce="200" \n                    >\n                        <ion-label range-left>0</ion-label>\n                        <ion-label range-right>10,000</ion-label>\n                  </ion-range>\n                </ion-item>\n                <p style = "text-align: center"> {{LineGraphSendValues[4]}} </p>\n              </ion-card-content>\n            </ion-card>\n        </div>\n\n        <div *ngIf = "showNumberOfDroppedSeedCones">\n            <ion-card>\n                <ion-card-header>\n                    <button ion-button small (tap) = "getInfo($event,1,5)">\n                      info\n                    </button>\n                </ion-card-header>\n              <ion-card-content>\n                <canvas #droppedSeedCones></canvas>\n  \n                <ion-item>\n                    <ion-range \n                    [(ngModel)] = "droppedSeedConesValue" min = "0" max = "5" step = "1" snaps = "true"\n                    (ionChange) = "redrawLineGraph(5,droppedSeedConesValue)"\n                    debounce="200" \n                    >\n                        <ion-label range-left>0</ion-label>\n                        <ion-label range-right>10,000</ion-label>\n                  </ion-range>\n                </ion-item>\n                <p style = "text-align: center"> {{LineGraphSendValues[5]}} </p>\n              </ion-card-content>\n            </ion-card>\n        </div>\n\n        <div *ngIf = "showNumberOfBreakingLeafBuds">\n            <ion-card>\n                <ion-card-header>\n                    <button ion-button small (tap) = "getInfo($event,1,6)">\n                      info\n                    </button>\n                </ion-card-header>\n              <ion-card-content>\n                <canvas #breakingLeafBuds></canvas>\n  \n                <ion-item>\n                    <ion-range \n                    [(ngModel)] = "breakingLeafBudsValue" min = "0" max = "5" step = "1" snaps = "true"\n                    (ionChange) = "redrawLineGraph(6,breakingLeafBudsValue)"\n                    debounce="200" \n                    >\n                        <ion-label range-left>0</ion-label>\n                        <ion-label range-right>10,000</ion-label>\n                  </ion-range>\n                </ion-item>\n                <p style = "text-align: center"> {{LineGraphSendValues[6]}} </p>\n              </ion-card-content>\n            </ion-card>\n        </div>\n\n        <div *ngIf = "showNumberOfFlowerBuds">\n            <ion-card>\n                <ion-card-header>\n                    <button ion-button small (tap) = "getInfo($event,1,7)">\n                      info\n                    </button>\n                </ion-card-header>\n              <ion-card-content>\n                <canvas #flowerBuds></canvas>\n  \n                <ion-item>\n                    <ion-range \n                    [(ngModel)] = "flowerBudsValue" min = "0" max = "5" step = "1" snaps = "true"\n                    (ionChange) = "redrawLineGraph(7,flowerBudsValue)"\n                    debounce="200" \n                    >\n                        <ion-label range-left>0</ion-label>\n                        <ion-label range-right>10,000</ion-label>\n                  </ion-range>\n                </ion-item>\n                <p style = "text-align: center"> {{LineGraphSendValues[7]}} </p>\n              </ion-card-content>\n            </ion-card>\n        </div>\n\n        <div *ngIf = "showNumberOfFruits">\n            <ion-card>\n                <ion-card-header>\n                    <button ion-button small (tap) = "getInfo($event,1,8)">\n                      info\n                    </button>\n                </ion-card-header>\n              <ion-card-content>\n                <canvas #fruits></canvas>\n  \n                <ion-item>\n                    <ion-range \n                    [(ngModel)] = "fruitsValue" min = "0" max = "5" step = "1" snaps = "true"\n                    (ionChange) = "redrawLineGraph(8,fruitsValue)"\n                    debounce="200" \n                    >\n                        <ion-label range-left>0</ion-label>\n                        <ion-label range-right>10,000</ion-label>\n                  </ion-range>\n                </ion-item>\n                <p style = "text-align: center"> {{LineGraphSendValues[8]}} </p>\n              </ion-card-content>\n            </ion-card>\n        </div>\n\n        <div *ngIf = "showNumberOfDroppedFruits">\n            <ion-card>\n                <ion-card-header>\n                    <button ion-button small (tap) = "getInfo($event,1,9)">\n                      info\n                    </button>\n                </ion-card-header>\n              <ion-card-content>\n                <canvas #droppedFruits></canvas>\n  \n                <ion-item>\n                    <ion-range \n                    [(ngModel)] = "droppedFruitsValue" min = "0" max = "5" step = "1" snaps = "true"\n                    (ionChange) = "redrawLineGraph(9,droppedFruitsValue)"\n                    debounce="200" \n                    >\n                        <ion-label range-left>0</ion-label>\n                        <ion-label range-right>10,000</ion-label>\n                  </ion-range>\n                </ion-item>\n                <p style = "text-align: center"> {{LineGraphSendValues[9]}} </p>\n              </ion-card-content>\n            </ion-card>\n        </div>\n\n\n        <button ion-button (click) = \'collectData();\'>Confirm</button> \n     \n    </ion-content>'/*ion-inline-end:"/home/linconnu/Desktop/botani3/src/pages/dataCollection/dataCollection.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_entrypasser__["a" /* EntryPasser */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_5__providers_login_info_login_info__["a" /* LoginInfoProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_userfactory__["a" /* UserFactory */]])
    ], Graphs);
    return Graphs;
}());

var PopoverPage = (function () {
    function PopoverPage(viewCtrl) {
        this.viewCtrl = viewCtrl;
    }
    PopoverPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    PopoverPage.prototype.getPopoverTitle = function () {
        return popoverTitle;
    };
    PopoverPage.prototype.getPopoverData = function () {
        return popoverData;
    };
    PopoverPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/linconnu/Desktop/botani3/src/pages/dataCollection/popover.html"*/'<ion-list>\n    <ion-list-header color = "secondary">{{this.getPopoverTitle()}}</ion-list-header>\n    <ion-content padding class = "popover">{{this.getPopoverData()}}</ion-content>\n</ion-list>'/*ion-inline-end:"/home/linconnu/Desktop/botani3/src/pages/dataCollection/popover.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */]])
    ], PopoverPage);
    return PopoverPage;
}());

//# sourceMappingURL=dataCollection.js.map

/***/ }),

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginInfoProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/*
  Generated class for the LoginInfoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var LoginInfoProvider = (function () {
    function LoginInfoProvider() {
        console.log('Recording logininfo');
    }
    LoginInfoProvider.prototype.updateUsername = function (username) {
        this.username = username;
    };
    LoginInfoProvider.prototype.getUsername = function () {
        return this.username;
    };
    LoginInfoProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], LoginInfoProvider);
    return LoginInfoProvider;
}());

//# sourceMappingURL=login-info.js.map

/***/ }),

/***/ 174:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 189:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/*
* User Factory creates a list of "users" from the data received from the server.
*/
var UserFactory = (function () {
    //constructor calls the getJson method
    function UserFactory(http, toastCtrl) {
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.users = [];
        this.getJSON();
    }
    /**
    * Retrieve the JSON encoded data from the remote server(botaniClash server)
    * Using Angular's Http class - then
    *     *
    * @public
    * @method getJSON()
    * @return {None}
    */
    UserFactory.prototype.getJSON = function () {
        return this.http.get('http://botaniclash.us-west-2.elasticbeanstalk.com/users.php') //('http://localhost/users.php')  //
            .map(function (res) {
            return res.json();
        });
    };
    //Returns the users list to the leaderboardComponent
    UserFactory.prototype.getUsers = function () {
        return this.users;
    };
    /**
    * Update an existing record that has been edited
    * Use angular's http post method to submit the record data
    * to our remote PHP script
    *
    * @public
    * @method updateEntry
    * @param user_id 			{int}
    * @param points 	{int}
    * @return {None}
    */
    UserFactory.prototype.updateUser = function (username, points) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpHeaders */]({ 'Content-Type': 'application/json' }), options = { 'username': username, 'points': points }, url = "http://botaniclash.us-west-2.elasticbeanstalk.com/update_users.php"; //"http://localhost/update_users.php"; //
        this.http
            .post(url, JSON.stringify(options), headers)
            .subscribe(function (data) {
            console.log(data);
            // If the request was successful notify the user
            _this.sendNotification('Congratulations the information you provided was successfully recorded');
        }, function (error) {
            _this.sendNotification('Something went wrong!');
        });
    };
    /**
    * Manage notifying the user of the outcome of remote operations
    *
    * @public
    * @method sendNotification
    * @param message 	{String} 			Message to be displayed in the notification
    * @return {None}
    */
    UserFactory.prototype.sendNotification = function (message) {
        var notification = this.toastCtrl.create({
            message: message,
            duration: 3000
        });
        notification.present();
    };
    UserFactory = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["l" /* ToastController */]])
    ], UserFactory);
    return UserFactory;
}());

//# sourceMappingURL=userfactory.js.map

/***/ }),

/***/ 202:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 202;

/***/ }),

/***/ 242:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/dataCollection/dataCollection.module": [
		243
	],
	"../pages/help/about/about.module": [
		365
	],
	"../pages/help/dc-info/dc-info.module": [
		367
	],
	"../pages/help/help.module": [
		369
	],
	"../pages/help/leaderboard-info/leaderboard-info.module": [
		373
	],
	"../pages/help/map-info/map-info.module": [
		374
	],
	"../pages/help/tree-info/tree-info.module": [
		375
	],
	"../pages/leaderboard/divisionalLeaderboard/divisionalLeaderboard.module": [
		1063,
		2
	],
	"../pages/leaderboard/globalLeaderboard/globalLeaderboard.module": [
		1064,
		1
	],
	"../pages/map/map.module": [
		1065,
		0
	],
	"../pages/menu/menu.module": [
		1066,
		4
	],
	"../pages/personalForest/forest.module": [
		1067,
		3
	],
	"../pages/tabs/tabs.module": [
		377
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 242;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 243:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataCollectionModule", function() { return DataCollectionModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dataCollection__ = __webpack_require__(115);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var DataCollectionModule = (function () {
    function DataCollectionModule() {
    }
    DataCollectionModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__dataCollection__["a" /* Graphs */], __WEBPACK_IMPORTED_MODULE_2__dataCollection__["b" /* PopoverPage */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__dataCollection__["a" /* Graphs */]),
            ],
        })
    ], DataCollectionModule);
    return DataCollectionModule;
}());

//# sourceMappingURL=dataCollection.module.js.map

/***/ }),

/***/ 364:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EntryPasser; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/*
* DataCollection receives an array of collected data.
* Parses it to json format
* then sents it to the php layer which will update the database
*/
var EntryPasser = (function () {
    function EntryPasser(http, toastCtrl) {
        this.http = http;
        this.toastCtrl = toastCtrl;
        /**
        * @name baseURI
        * @type {String}
        * @public
        * @description     Remote URI for sending data to
        */
        this.baseURI = "http://botaniclash.us-west-2.elasticbeanstalk.com/create_entry.php"; //"http://localhost/create_entry.php"; // //this url has to be replaced with the botaniClash server url
    }
    /**
    * Save a new entry for an Evergreen tree that has been added from dataCollection form
    * Use angular's http post method to submit the record data
    *
    * @public
    * @return {None}
    */
    /*createEntryEvergreen(user: number, tree : number, type: string, time: string, breaking: number, young: number, pollen: number, open: number, release: number, unripe: number, ripe: number, recent: number ) : void
    {
       let headers 	: any		= new HttpHeaders({ 'Content-Type': 'application/json' }),
           options 	: any		= { "user": user, "tree" : tree, "type": type, "time": time, "breaking": breaking, "young": young, "pollen": pollen, "open": open, "release": release, "unripe": unripe, "ripe": ripe, "recent": recent},
           url       : any      	= this.baseURI;
       this.http.post(url, JSON.stringify(options), headers)
       .subscribe((data : any) =>
       {
         console.log(data);
          // If the request was successful notify the user
          this.sendNotification('Congratulations the information you provided was successfully recorded');
       },
       (error : any) =>
       {
          this.sendNotification('Something went wrong!');
       });
    }*/
    EntryPasser.prototype.createEntry = function (username, tree, openPollenConesValue, unfoldingLeavesValue, fullSizedLeavesValue, coloredLeavesValue, openedFlowersValue, ripeFruitsValue, breakingNeedleBudsValue, youngNeedlesValue, freshPollenConesValue, unripeSeedConesValue, ripeSeedConesValue, droppedSeedConesValue, breakingLeafBudsValue, flowerBudsValue, fruitsValue, droppedFruitsValue, openPollenConesRadioValue, coloredLeavesRadioValue) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpHeaders */]({ 'Content-Type': 'application/json' }), options = { "username": username, "tree": tree, "openPollenConesValue": openPollenConesValue, "unfoldingLeavesValue": unfoldingLeavesValue, "fullSizedLeavesValue": fullSizedLeavesValue, "coloredLeavesValue": coloredLeavesValue, "openedFlowersValue": openedFlowersValue, "ripeFruitsValue": ripeFruitsValue, "breakingNeedleBudsValue": breakingLeafBudsValue, "youngNeedlesValue": youngNeedlesValue, "freshPollenConesValue": freshPollenConesValue, "unripeSeedConesValue": unripeSeedConesValue, "ripeSeedConesValue": ripeSeedConesValue, "droppedSeedConesValue": droppedSeedConesValue, "breakingLeafBudsValue": breakingLeafBudsValue, "flowerBudsValue": flowerBudsValue, "fruitsValue": fruitsValue, "droppedFruitsValue": droppedFruitsValue, "openPollenConesRadioValue": openPollenConesRadioValue, "coloredLeavesRadioValue": coloredLeavesRadioValue }, url = this.baseURI; //"http://localhost/create_entry.php";
        this.http.post(url, JSON.stringify(options), headers)
            .subscribe(function (data) {
            console.log(data);
            // If the request was successful notify the user
            _this.sendNotification('Congratulations the information you provided was successfully recorded');
        }, function (error) {
            console.log(error);
            _this.sendNotification('Something went wrong!');
        });
    };
    /*openPollenConesValue: number = 50;
unfoldingLeavesValue: number = 50;
fullSizedLeavesValue: number = 50;
coloredLeavesValue: number = 50;
openedFlowersValue: number = 50;
ripeFruitsValue: number = 50;
breakingNeedleBudsValue: number = 3;
youngNeedlesValue: number = 3;
freshPollenConesValue: number = 3;
unripeSeedConesValue: number = 3;
ripeSeedConesValue: number = 3;
droppedSeedConesValue: number = 3;
breakingLeafBudsValue: number = 3;
flowerBudsValue: number = 3;
fruitsValue: number = 3;
droppedFruitsValue: number = 3;*/
    /**
     * Save a new entry for a non Evergreen tree that has been added from dataCollection form
     * Use angular's http post method to submit the record data
     *
     * @public
     * @return {None}
     */
    /* createEntryNonEvergreen(user: number, tree : number, type: string, time: string, buds: number, unfolding: number, full: number,  color: number, falling: number, flowers: number, openFlowers: number, fruit: number, ripeFruit: number, recentFruit: number) : void
     {
        let headers 	: any		= new HttpHeaders({ 'Content-Type': 'application/json' }),
            options 	: any		= { "user": user, "tree" : tree, "type": type, "time": time, "buds": buds, "unfolding": unfolding, "full": full,  "color": color, "falling": falling, "flowers": flowers, "openFlowers": openFlowers, "fruit":fruit, "ripeFruit": ripeFruit, "recentFruit": recentFruit },
            url       : any      	= this.baseURI;
        this.http.post(url, JSON.stringify(options), headers)
        .subscribe((data : any) =>
        {
           console.log(data);
           // If the request was successful notify the user
           this.sendNotification(`Congratulations the information you provided was successfully recorded`);
        },
        (error : any) =>
        {
           this.sendNotification('Something went wrong!');
        });
     }*/
    /**
    * Manage notifying the user of the outcome of remote operations
    *
    * @public
    * @method sendNotification
    * @param message 	{String} 			Message to be displayed in the notification
    * @return {None}
    */
    EntryPasser.prototype.sendNotification = function (message) {
        var notification = this.toastCtrl.create({
            message: message,
            duration: 3000
        });
        notification.present();
    };
    EntryPasser = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* ToastController */]])
    ], EntryPasser);
    return EntryPasser;
}());

//# sourceMappingURL=entrypasser.js.map

/***/ }),

/***/ 365:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPageModule", function() { return AboutPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about__ = __webpack_require__(366);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AboutPageModule = (function () {
    function AboutPageModule() {
    }
    AboutPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__about__["a" /* AboutPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__about__["a" /* AboutPage */]),
            ],
        })
    ], AboutPageModule);
    return AboutPageModule;
}());

//# sourceMappingURL=about.module.js.map

/***/ }),

/***/ 366:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
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
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var descript = "BotaniClash is a crowd-source data collection app for collecting " +
    "phenological data on evergreen and decidous trees on the campus of Central Washington University.\n" +
    "This project was launched per Dr.Eric Graham's request of the University's Computer Science Senior Capstone Project.";
var res = "Data collected through BotaniClash will go through the University's Ecology " +
    "department, and then sent to the USA National Phenology Network (USANPN). More information " +
    "on the USANPN can be found at ";
var line2 = "For centuries the trees have talked to each other, " +
    "and lately they have been greatly harmed by climate change.";
var line3 = "BotaniClash allows you, the player, to communicate with the trees " +
    "around your campus and observe their lifecycle.";
var line4 = "You earn points whenever you observe trees. " +
    "The more observations you make, the more points you earn.";
var AboutPage = (function () {
    function AboutPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.description = descript;
        this.result = res;
        this.content2 = line2;
        this.content3 = line3;
        this.content4 = line4;
    }
    AboutPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AboutPage');
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"/home/linconnu/Desktop/botani3/src/pages/help/about/about.html"*/'<!--\n  Generated template for the AboutPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>About BotaniClash</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <b>Description: </b>\n    <h6>{{description}}</h6>\n\n    <b>The Result: </b>\n    <h6>{{result}}<a href = "https://www.usanpn.org/usa-national-phenology-network">usanpn.org</a></h6>\n\n    <b>Storyline & Gameplay: </b>\n    <h6>{{content2}}</h6>\n    <h6>{{content3}}</h6>\n    <h6>{{content4}}</h6>\n</ion-content>\n'/*ion-inline-end:"/home/linconnu/Desktop/botani3/src/pages/help/about/about.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 367:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DcInfoPageModule", function() { return DcInfoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dc_info__ = __webpack_require__(368);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DcInfoPageModule = (function () {
    function DcInfoPageModule() {
    }
    DcInfoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__dc_info__["a" /* DcInfoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__dc_info__["a" /* DcInfoPage */]),
            ],
        })
    ], DcInfoPageModule);
    return DcInfoPageModule;
}());

//# sourceMappingURL=dc-info.module.js.map

/***/ }),

/***/ 368:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DcInfoPage; });
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
 * Generated class for the DcInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var general_info = "The data collection page will appear differently based on which tree you’re observing.";
var quantity_based = "For quantity-based observations, a slider will be used for input, and bar graphs will appear for visual aid.\n" +
    "Simply drag the slider to match your best estimate of the quantity of an item on a tree.";
var percentage_based = "For percentage-based observations, a slider will be used for input, and line graphs will appear for visual aid.\n" +
    "Simply drag the slider to match your best estimate of the percentage of the specified quality on the tree.";
var multiple_choice = "For multiple choice observations, simply select the option that best suits the tree you're observing.";
var evergreen_trees = "For Evergreen Trees you can observe the quantity of breaking needle buds, young needles, " +
    "pollen cones, and ripe/unripe pine cones.\nYou can also observe the percentage of pine cones that are open.\n" +
    "There is also a multiple choice question for how much pollen is released from the pollen cones";
var deciduous_trees = "For Deciduous Trees you can observe the quantity of breaking leaf buds, healthy flower buds, " +
    "fruits, and fallen seeds.\nYou can also observe the percentage of unfolded leaves, fully-grown leaves, " +
    "colored leaves, opened flowers, and ripe fruits\nThere is also a true/false question about whether or not the tree's leaves are falling.";
var DcInfoPage = (function () {
    function DcInfoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.general = general_info;
        this.quantity = quantity_based;
        this.percentage = percentage_based;
        this.multiple = multiple_choice;
        this.evergreen = evergreen_trees;
        this.deciduous = deciduous_trees;
    }
    DcInfoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DcInfoPage');
    };
    DcInfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-dc-info',template:/*ion-inline-start:"/home/linconnu/Desktop/botani3/src/pages/help/dc-info/dc-info.html"*/'<!--\n  Generated template for the DcInfoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>About Data Collection</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<b>General Information: </b>\n<h6>{{general}}</h6>\n<b>Quantity-Based Data: </b>\n<h6>{{quantity}}</h6>\n<b>Percentage-Based Data: </b>\n<h6>{{percentage}}</h6>\n<b>Multiple Choice Data: </b>\n<h6>{{multiple}}</h6>\n<b>Evergreen Trees: </b>\n<h6>{{evergreen}}</h6>\n<b>Decidious Trees: </b>\n<h6>{{deciduous}}</h6>\n</ion-content>\n'/*ion-inline-end:"/home/linconnu/Desktop/botani3/src/pages/help/dc-info/dc-info.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], DcInfoPage);
    return DcInfoPage;
}());

//# sourceMappingURL=dc-info.js.map

/***/ }),

/***/ 369:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpPageModule", function() { return HelpPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__help__ = __webpack_require__(609);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HelpPageModule = (function () {
    function HelpPageModule() {
    }
    HelpPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__help__["a" /* HelpPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__help__["a" /* HelpPage */]),
            ],
        })
    ], HelpPageModule);
    return HelpPageModule;
}());

//# sourceMappingURL=help.module.js.map

/***/ }),

/***/ 370:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeaderboardInfoPage; });
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
 * Generated class for the LeaderboardInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var functionality = "The leaderboard keeps track of the point ranking of everybody playing the game. " +
    "Players with more points will be higher up in rankings. The top 15 players in the game will be displayed " +
    "in the global division of the leaderboard.";
var season_description = "Every 30 days, all of the players' points will be reset back to 0, to give newer " +
    "players an equal opportunity to climb the rankings in the leaderboard.";
var LeaderboardInfoPage = (function () {
    function LeaderboardInfoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.function = functionality;
        this.seasons = season_description;
    }
    LeaderboardInfoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LeaderboardInfoPage');
    };
    LeaderboardInfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-leaderboard-info',template:/*ion-inline-start:"/home/linconnu/Desktop/botani3/src/pages/help/leaderboard-info/leaderboard-info.html"*/'<!--\n  Generated template for the LeaderboardInfoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>About The Leaderboard</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<b>Functionality: </b>\n<h6>{{function}}</h6>\n<b>Seasons: </b>\n<h6>{{seasons}}</h6>\n</ion-content>\n'/*ion-inline-end:"/home/linconnu/Desktop/botani3/src/pages/help/leaderboard-info/leaderboard-info.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], LeaderboardInfoPage);
    return LeaderboardInfoPage;
}());

//# sourceMappingURL=leaderboard-info.js.map

/***/ }),

/***/ 371:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapInfoPage; });
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
 * Generated class for the MapInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MapInfoPage = (function () {
    function MapInfoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    MapInfoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MapInfoPage');
    };
    MapInfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-map-info',template:/*ion-inline-start:"/home/linconnu/Desktop/botani3/src/pages/help/map-info/map-info.html"*/'<!--\n  Generated template for the MapInfoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>About The Map</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\nMap Info\n</ion-content>\n'/*ion-inline-end:"/home/linconnu/Desktop/botani3/src/pages/help/map-info/map-info.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], MapInfoPage);
    return MapInfoPage;
}());

//# sourceMappingURL=map-info.js.map

/***/ }),

/***/ 372:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TreeInfoPage; });
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
 * Generated class for the TreeInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var finding_trees = "All but one of the trees will be hidden [when]. To discover other trees, " +
    "simply click the \"find\" button, which is located at the bottom of the map. " +
    "Once clicked, a new tree will be revealed on the map if you are within range, and data can be collected on that tree. " +
    "Trees are only available to be revealed when you are close enough to the tree (about 15 feet away).";
var out_of_range = "If you’re a distance of 15 - 60 feet from a hidden tree, you will get a message telling you in which " +
    "direction (north, west, south, east, etc.) the nearest hidden tree is. You can use the compass for guidance." +
    "If you’re not close to any hidden trees at the moment, the app will let you know";
var TreeInfoPage = (function () {
    function TreeInfoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.finding = finding_trees;
        this.range = out_of_range;
    }
    TreeInfoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TreeInfoPage');
    };
    TreeInfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tree-info',template:/*ion-inline-start:"/home/linconnu/Desktop/botani3/src/pages/help/tree-info/tree-info.html"*/'<!--\n  Generated template for the TreeInfoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>About Finding Trees</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <b>Finding Trees</b>\n  <h6>{{finding}}</h6>\n  <b>What if I\'m out of range?</b>\n  <h6>{{range}}</h6>\n</ion-content>\n'/*ion-inline-end:"/home/linconnu/Desktop/botani3/src/pages/help/tree-info/tree-info.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], TreeInfoPage);
    return TreeInfoPage;
}());

//# sourceMappingURL=tree-info.js.map

/***/ }),

/***/ 373:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaderboardInfoPageModule", function() { return LeaderboardInfoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__leaderboard_info__ = __webpack_require__(370);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LeaderboardInfoPageModule = (function () {
    function LeaderboardInfoPageModule() {
    }
    LeaderboardInfoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__leaderboard_info__["a" /* LeaderboardInfoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__leaderboard_info__["a" /* LeaderboardInfoPage */]),
            ],
        })
    ], LeaderboardInfoPageModule);
    return LeaderboardInfoPageModule;
}());

//# sourceMappingURL=leaderboard-info.module.js.map

/***/ }),

/***/ 374:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapInfoPageModule", function() { return MapInfoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__map_info__ = __webpack_require__(371);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MapInfoPageModule = (function () {
    function MapInfoPageModule() {
    }
    MapInfoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__map_info__["a" /* MapInfoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__map_info__["a" /* MapInfoPage */]),
            ],
        })
    ], MapInfoPageModule);
    return MapInfoPageModule;
}());

//# sourceMappingURL=map-info.module.js.map

/***/ }),

/***/ 375:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeInfoPageModule", function() { return TreeInfoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tree_info__ = __webpack_require__(372);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TreeInfoPageModule = (function () {
    function TreeInfoPageModule() {
    }
    TreeInfoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__tree_info__["a" /* TreeInfoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__tree_info__["a" /* TreeInfoPage */]),
            ],
        })
    ], TreeInfoPageModule);
    return TreeInfoPageModule;
}());

//# sourceMappingURL=tree-info.module.js.map

/***/ }),

/***/ 377:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageModule", function() { return TabsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs__ = __webpack_require__(70);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TabsPageModule = (function () {
    function TabsPageModule() {
    }
    TabsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__tabs__["a" /* TabsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__tabs__["a" /* TabsPage */]),
            ],
        })
    ], TabsPageModule);
    return TabsPageModule;
}());

//# sourceMappingURL=tabs.module.js.map

/***/ }),

/***/ 500:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export UserDetails */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_aws_amplify__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_aws_amplify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_aws_amplify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__confirmSignUp_confirmSignUp__ = __webpack_require__(501);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__(143);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var logger = new __WEBPACK_IMPORTED_MODULE_2_aws_amplify__["Logger"]('SignUp');
var UserDetails = (function () {
    function UserDetails() {
    }
    return UserDetails;
}());

var SignupPage = (function () {
    function SignupPage(navCtrl, loadingCtrl, http) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.http = http;
        this.userDetails = new UserDetails();
    }
    SignupPage.prototype.signup = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        var details = this.userDetails;
        this.error = null;
        logger.debug('register');
        __WEBPACK_IMPORTED_MODULE_2_aws_amplify__["Auth"].signUp(details.username, details.password, details.email, details.phone_number)
            .then(function (user) {
            _this.CreateUser(details.username, 0);
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__confirmSignUp_confirmSignUp__["a" /* ConfirmSignUpPage */], { username: details.username });
        })
            .catch(function (err) { _this.error = err; })
            .then(function () { return loading.dismiss(); });
    };
    SignupPage.prototype.CreateUser = function (username, points) {
        var headers = new __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["a" /* HttpHeaders */]({ 'Content-Type': 'application/json' }), options = { 'username': username, 'points': points }, url = "http://botaniclash.us-west-2.elasticbeanstalk.com/insertUsername.php"; //"http://localhost/insertUsername.php";  
        this.http
            .post(url, JSON.stringify(options), headers)
            .subscribe(function (data) {
            console.log(data);
        }, function (error) {
            console.log(error);
        });
    };
    SignupPage.prototype.login = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"/home/linconnu/Desktop/botani3/src/pages/signup/signup.html"*/'<ion-content>\n  <div text-center class="logo">\n    <img src="assets/ionic-aws-logo.png" />\n  </div>\n  <form (submit)="signup()">\n    <p *ngIf="error" style="text-align: center">{{error.message}}</p>\n    <ion-list>\n\n      <ion-item>\n        <ion-label floating>Username</ion-label>\n        <ion-input type="text" [(ngModel)]="userDetails.username" autocorrect="off" autocapitalize="none" name="username"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>Email</ion-label>\n        <ion-input type="email" [(ngModel)]="userDetails.email" name="email"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>Phone Number</ion-label>\n        <ion-input type="tel" [(ngModel)]="userDetails.phone_number" name="phone_number"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>Password</ion-label>\n        <ion-input type="password" [(ngModel)]="userDetails.password" name="password"></ion-input>\n      </ion-item>\n\n      <div padding>\n        <button ion-button color="primary" block>Register</button>\n      </div>\n\n      <div padding text-center>\n        <p><a (click)="login()">Return to login</a>\n      </div>\n\n    </ion-list>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/home/linconnu/Desktop/botani3/src/pages/signup/signup.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Http */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 501:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmSignUpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_aws_amplify__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_aws_amplify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_aws_amplify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(80);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var logger = new __WEBPACK_IMPORTED_MODULE_2_aws_amplify__["Logger"]('ConfirmSignUp');
var ConfirmSignUpPage = (function () {
    function ConfirmSignUpPage(navCtrl, loadingCtrl, alert, navParams) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.alert = alert;
        this.navParams = navParams;
        this.username = navParams.get('username');
    }
    ConfirmSignUpPage.prototype.confirm = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        __WEBPACK_IMPORTED_MODULE_2_aws_amplify__["Auth"].confirmSignUp(this.username, this.code)
            .then(function () {
            _this.account_created();
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
            loading.dismiss();
        })
            .catch(function (err) {
            logger.debug('confirm error', err);
            _this.error_alert();
            loading.dismiss();
        });
    };
    ConfirmSignUpPage.prototype.resendCode = function () {
        __WEBPACK_IMPORTED_MODULE_2_aws_amplify__["Auth"].resendSignUp(this.username)
            .then(function () { return logger.debug('sent'); })
            .catch(function (err) { return logger.debug('send code error', err); });
    };
    ConfirmSignUpPage.prototype.error_alert = function () {
        var alert = this.alert.create({
            title: "Error!",
            subTitle: "Oups!! Something Went Wrong! \nPlease Try Again Later.",
            buttons: ["Continue"]
        });
        alert.present();
    };
    ConfirmSignUpPage.prototype.account_created = function () {
        var alert = this.alert.create({
            title: "Congratulations!",
            subTitle: "Your account was created successfully! \n Please use your credentials to log into BotaniClash.",
            buttons: ["Continue"]
        });
        alert.present();
    };
    ConfirmSignUpPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-confirm-signup',template:/*ion-inline-start:"/home/linconnu/Desktop/botani3/src/pages/confirmSignUp/confirmSignUp.html"*/'<ion-content>\n  <div padding>\n    <p>Please enter the confirmation code sent to your email to verify your account:</p>\n  </div>\n  <form (submit)="confirm()">\n    <ion-list>\n\n      <ion-item>\n        <ion-label floating>Confirmation Code</ion-label>\n        <ion-input type="text" [(ngModel)]="code" name="code"></ion-input>\n      </ion-item>\n\n      <div padding>\n        <button ion-button color="primary" block>Confirm Account </button>\n      </div>\n\n      <div padding>\n        <p>Haven\'t received the confirmation code email yet? <a (click)="resendCode()">Resend</a></p>\n      </div>\n\n    </ion-list>\n  </form>\n</ion-content>  \n'/*ion-inline-end:"/home/linconnu/Desktop/botani3/src/pages/confirmSignUp/confirmSignUp.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ConfirmSignUpPage);
    return ConfirmSignUpPage;
}());

//# sourceMappingURL=confirmSignUp.js.map

/***/ }),

/***/ 505:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
// WARNING: DO NOT EDIT. This file is Auto-Generated by AWS Mobile Hub. It will be overwritten.

// Copyright 2017-2018 Amazon.com, Inc. or its affiliates (Amazon). All Rights Reserved.
// Code generated by AWS Mobile Hub. Amazon gives unlimited permission to
// copy, distribute and modify it.

// AWS Mobile Hub Project Constants
const awsmobile = {
    'aws_app_analytics': 'enable',
    'aws_cognito_identity_pool_id': 'us-west-2:ea5ef297-7924-4578-887e-1bca2aa39475',
    'aws_cognito_region': 'us-west-2',
    'aws_content_delivery': 'enable',
    'aws_content_delivery_bucket': 'botaniclash-hosting-mobilehub-1387081416',
    'aws_content_delivery_bucket_region': 'us-west-2',
    'aws_content_delivery_cloudfront': 'enable',
    'aws_content_delivery_cloudfront_domain': 'd2qeo4xq4zcls6.cloudfront.net',
    'aws_mandatory_sign_in': 'enable',
    'aws_mobile_analytics_app_id': 'a3f9da7a4457404dbceb85572c080bbf',
    'aws_mobile_analytics_app_region': 'us-east-1',
    'aws_project_id': 'df457187-1e4f-11e8-a529-0376e3239e30',
    'aws_project_name': 'botaniClash',
    'aws_project_region': 'us-west-2',
    'aws_resource_name_prefix': 'botaniclash-mobilehub-1387081416',
    'aws_sign_in_enabled': 'enable',
    'aws_user_pools': 'enable',
    'aws_user_pools_id': 'us-west-2_yQpumrbTB',
    'aws_user_pools_mfa_type': 'OPTIONAL',
    'aws_user_pools_web_client_id': '3gal82adn7hu9n6ko8jeqntcdv',
}

/* harmony default export */ __webpack_exports__["default"] = (awsmobile);


/***/ }),

/***/ 508:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TreeFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
* Tree factory creates a list of "saplings". Saplings are a buffer between Tree Objects
* and JSON data. This list is then sent to the component for instantiation
*/
var TreeFactory = (function () {
    function TreeFactory(http) {
        this.http = http;
        this.saplings = [];
    }
    /**
    * Retrieve the JSON encoded data from the remote server(botaniClash server)
    * Using Angular's Http class - then
    * assign this to the saplings array for rendering to the the treeComponent
    *
    * @public
    * @method getJSON()
    * @return {None}
    */
    TreeFactory.prototype.getJSON = function () {
        return this.http.get('http://botaniclash.us-west-2.elasticbeanstalk.com/botani.php') //'http://localhost/botani.php')       
            .map(function (res) {
            return res.json();
        });
    };
    TreeFactory = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], TreeFactory);
    return TreeFactory;
}());

//# sourceMappingURL=treefactory.js.map

/***/ }),

/***/ 509:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(510);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(531);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 531:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(417);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(418);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_treefactory__ = __webpack_require__(508);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_userfactory__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_geolocation__ = __webpack_require__(507);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_http__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__(635);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_login_login__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_signup_signup__ = __webpack_require__(500);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_confirmSignIn_confirmSignIn__ = __webpack_require__(826);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_confirmSignUp_confirmSignUp__ = __webpack_require__(501);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_account_account__ = __webpack_require__(827);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_tabs_tabs__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_tabs_tabs_module__ = __webpack_require__(377);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_camera__ = __webpack_require__(502);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_help_help_module__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_dataCollection_dataCollection_module__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_entrypasser__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_dataCollection_dataCollection__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_aws_dynamodb__ = __webpack_require__(828);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_help_about_about_module__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_help_dc_info_dc_info_module__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_help_leaderboard_info_leaderboard_info_module__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_help_map_info_map_info_module__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_help_tree_info_tree_info_module__ = __webpack_require__(375);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28_aws_amplify__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28_aws_amplify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_28_aws_amplify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__providers_login_info_login_info__ = __webpack_require__(146);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






























var aws_exports = __webpack_require__(505).default;
__WEBPACK_IMPORTED_MODULE_28_aws_amplify___default.a.configure(aws_exports);
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_confirmSignIn_confirmSignIn__["a" /* ConfirmSignInPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_confirmSignUp_confirmSignUp__["a" /* ConfirmSignUpPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_account_account__["a" /* AccountPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/dataCollection/dataCollection.module#DataCollectionModule', name: 'Graphs', segment: 'dataCollection', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/help/about/about.module#AboutPageModule', name: 'AboutPage', segment: 'about', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/help/dc-info/dc-info.module#DcInfoPageModule', name: 'DcInfoPage', segment: 'dc-info', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/help/help.module#HelpPageModule', name: 'HelpPage', segment: 'help', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/help/leaderboard-info/leaderboard-info.module#LeaderboardInfoPageModule', name: 'LeaderboardInfoPage', segment: 'leaderboard-info', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/help/map-info/map-info.module#MapInfoPageModule', name: 'MapInfoPage', segment: 'map-info', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/help/tree-info/tree-info.module#TreeInfoPageModule', name: 'TreeInfoPage', segment: 'tree-info', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/leaderboard/divisionalLeaderboard/divisionalLeaderboard.module#DivisionalLeaderboardModule', name: 'DivisionalLeaderboard', segment: 'divisionalLeaderboard', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/leaderboard/globalLeaderboard/globalLeaderboard.module#GlobalLeaderboardPageModule', name: 'GlobalLeaderboard', segment: 'globalLeaderboard', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/map/map.module#BotaniMapModule', name: 'BotaniMap', segment: 'map', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/menu/menu.module#MenuPageModule', name: 'MenuPage', segment: 'menu', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/personalForest/forest.module#PersonalForestModule', name: 'PersonalForest', segment: 'forest', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_19__pages_dataCollection_dataCollection_module__["DataCollectionModule"],
                __WEBPACK_IMPORTED_MODULE_18__pages_help_help_module__["HelpPageModule"],
                __WEBPACK_IMPORTED_MODULE_16__pages_tabs_tabs_module__["TabsPageModule"],
                __WEBPACK_IMPORTED_MODULE_23__pages_help_about_about_module__["AboutPageModule"],
                __WEBPACK_IMPORTED_MODULE_24__pages_help_dc_info_dc_info_module__["DcInfoPageModule"],
                __WEBPACK_IMPORTED_MODULE_25__pages_help_leaderboard_info_leaderboard_info_module__["LeaderboardInfoPageModule"],
                __WEBPACK_IMPORTED_MODULE_26__pages_help_map_info_map_info_module__["MapInfoPageModule"],
                __WEBPACK_IMPORTED_MODULE_27__pages_help_tree_info_tree_info_module__["TreeInfoPageModule"],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_21__pages_dataCollection_dataCollection__["b" /* PopoverPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_confirmSignIn_confirmSignIn__["a" /* ConfirmSignInPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_confirmSignUp_confirmSignUp__["a" /* ConfirmSignUpPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_account_account__["a" /* AccountPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_tabs_tabs__["a" /* TabsPage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_5__providers_treefactory__["a" /* TreeFactory */],
                __WEBPACK_IMPORTED_MODULE_6__providers_userfactory__["a" /* UserFactory */],
                __WEBPACK_IMPORTED_MODULE_8__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_20__providers_entrypasser__["a" /* EntryPasser */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_22__providers_aws_dynamodb__["a" /* DynamoDB */],
                __WEBPACK_IMPORTED_MODULE_29__providers_login_info_login_info__["a" /* LoginInfoProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

AWS.config.customUserAgent = AWS.config.customUserAgent + ' Ionic';
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 591:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 249,
	"./af.js": 249,
	"./ar": 250,
	"./ar-dz": 251,
	"./ar-dz.js": 251,
	"./ar-kw": 252,
	"./ar-kw.js": 252,
	"./ar-ly": 253,
	"./ar-ly.js": 253,
	"./ar-ma": 254,
	"./ar-ma.js": 254,
	"./ar-sa": 255,
	"./ar-sa.js": 255,
	"./ar-tn": 256,
	"./ar-tn.js": 256,
	"./ar.js": 250,
	"./az": 257,
	"./az.js": 257,
	"./be": 258,
	"./be.js": 258,
	"./bg": 259,
	"./bg.js": 259,
	"./bn": 260,
	"./bn.js": 260,
	"./bo": 261,
	"./bo.js": 261,
	"./br": 262,
	"./br.js": 262,
	"./bs": 263,
	"./bs.js": 263,
	"./ca": 264,
	"./ca.js": 264,
	"./cs": 265,
	"./cs.js": 265,
	"./cv": 266,
	"./cv.js": 266,
	"./cy": 267,
	"./cy.js": 267,
	"./da": 268,
	"./da.js": 268,
	"./de": 269,
	"./de-at": 270,
	"./de-at.js": 270,
	"./de-ch": 271,
	"./de-ch.js": 271,
	"./de.js": 269,
	"./dv": 272,
	"./dv.js": 272,
	"./el": 273,
	"./el.js": 273,
	"./en-au": 274,
	"./en-au.js": 274,
	"./en-ca": 275,
	"./en-ca.js": 275,
	"./en-gb": 276,
	"./en-gb.js": 276,
	"./en-ie": 277,
	"./en-ie.js": 277,
	"./en-nz": 278,
	"./en-nz.js": 278,
	"./eo": 279,
	"./eo.js": 279,
	"./es": 280,
	"./es-do": 281,
	"./es-do.js": 281,
	"./es.js": 280,
	"./et": 282,
	"./et.js": 282,
	"./eu": 283,
	"./eu.js": 283,
	"./fa": 284,
	"./fa.js": 284,
	"./fi": 285,
	"./fi.js": 285,
	"./fo": 286,
	"./fo.js": 286,
	"./fr": 287,
	"./fr-ca": 288,
	"./fr-ca.js": 288,
	"./fr-ch": 289,
	"./fr-ch.js": 289,
	"./fr.js": 287,
	"./fy": 290,
	"./fy.js": 290,
	"./gd": 291,
	"./gd.js": 291,
	"./gl": 292,
	"./gl.js": 292,
	"./gom-latn": 293,
	"./gom-latn.js": 293,
	"./he": 294,
	"./he.js": 294,
	"./hi": 295,
	"./hi.js": 295,
	"./hr": 296,
	"./hr.js": 296,
	"./hu": 297,
	"./hu.js": 297,
	"./hy-am": 298,
	"./hy-am.js": 298,
	"./id": 299,
	"./id.js": 299,
	"./is": 300,
	"./is.js": 300,
	"./it": 301,
	"./it.js": 301,
	"./ja": 302,
	"./ja.js": 302,
	"./jv": 303,
	"./jv.js": 303,
	"./ka": 304,
	"./ka.js": 304,
	"./kk": 305,
	"./kk.js": 305,
	"./km": 306,
	"./km.js": 306,
	"./kn": 307,
	"./kn.js": 307,
	"./ko": 308,
	"./ko.js": 308,
	"./ky": 309,
	"./ky.js": 309,
	"./lb": 310,
	"./lb.js": 310,
	"./lo": 311,
	"./lo.js": 311,
	"./lt": 312,
	"./lt.js": 312,
	"./lv": 313,
	"./lv.js": 313,
	"./me": 314,
	"./me.js": 314,
	"./mi": 315,
	"./mi.js": 315,
	"./mk": 316,
	"./mk.js": 316,
	"./ml": 317,
	"./ml.js": 317,
	"./mr": 318,
	"./mr.js": 318,
	"./ms": 319,
	"./ms-my": 320,
	"./ms-my.js": 320,
	"./ms.js": 319,
	"./my": 321,
	"./my.js": 321,
	"./nb": 322,
	"./nb.js": 322,
	"./ne": 323,
	"./ne.js": 323,
	"./nl": 324,
	"./nl-be": 325,
	"./nl-be.js": 325,
	"./nl.js": 324,
	"./nn": 326,
	"./nn.js": 326,
	"./pa-in": 327,
	"./pa-in.js": 327,
	"./pl": 328,
	"./pl.js": 328,
	"./pt": 329,
	"./pt-br": 330,
	"./pt-br.js": 330,
	"./pt.js": 329,
	"./ro": 331,
	"./ro.js": 331,
	"./ru": 332,
	"./ru.js": 332,
	"./sd": 333,
	"./sd.js": 333,
	"./se": 334,
	"./se.js": 334,
	"./si": 335,
	"./si.js": 335,
	"./sk": 336,
	"./sk.js": 336,
	"./sl": 337,
	"./sl.js": 337,
	"./sq": 338,
	"./sq.js": 338,
	"./sr": 339,
	"./sr-cyrl": 340,
	"./sr-cyrl.js": 340,
	"./sr.js": 339,
	"./ss": 341,
	"./ss.js": 341,
	"./sv": 342,
	"./sv.js": 342,
	"./sw": 343,
	"./sw.js": 343,
	"./ta": 344,
	"./ta.js": 344,
	"./te": 345,
	"./te.js": 345,
	"./tet": 346,
	"./tet.js": 346,
	"./th": 347,
	"./th.js": 347,
	"./tl-ph": 348,
	"./tl-ph.js": 348,
	"./tlh": 349,
	"./tlh.js": 349,
	"./tr": 350,
	"./tr.js": 350,
	"./tzl": 351,
	"./tzl.js": 351,
	"./tzm": 352,
	"./tzm-latn": 353,
	"./tzm-latn.js": 353,
	"./tzm.js": 352,
	"./uk": 354,
	"./uk.js": 354,
	"./ur": 355,
	"./ur.js": 355,
	"./uz": 356,
	"./uz-latn": 357,
	"./uz-latn.js": 357,
	"./uz.js": 356,
	"./vi": 358,
	"./vi.js": 358,
	"./x-pseudo": 359,
	"./x-pseudo.js": 359,
	"./yo": 360,
	"./yo.js": 360,
	"./zh-cn": 361,
	"./zh-cn.js": 361,
	"./zh-hk": 362,
	"./zh-hk.js": 362,
	"./zh-tw": 363,
	"./zh-tw.js": 363
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 591;

/***/ }),

/***/ 609:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_about__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__leaderboard_info_leaderboard_info__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__map_info_map_info__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dc_info_dc_info__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__tree_info_tree_info__ = __webpack_require__(372);
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
 * Generated class for the HelpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HelpPage = (function () {
    function HelpPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HelpPage.prototype.ngOnInit = function () {
        this.setItems();
    };
    HelpPage.prototype.setItems = function () {
        this.items = ['About This App', 'Data Collection', 'Finding Trees', 'Leaderboard', 'Gameplay'];
    };
    HelpPage.prototype.filterItems = function (ev) {
        this.setItems();
        var val = ev.target.value;
        if (val && val.trim() !== '') {
            this.items = this.items.filter(function (item) {
                return item.toLowerCase().includes(val.toLowerCase());
            });
        }
    };
    HelpPage.prototype.goToPage = function (item) {
        if (item == "About This App")
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__about_about__["a" /* AboutPage */]);
        else if (item == "Data Collection")
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__dc_info_dc_info__["a" /* DcInfoPage */]);
        else if (item == "Finding Trees")
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__tree_info_tree_info__["a" /* TreeInfoPage */]);
        else if (item == "Leaderboard")
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__leaderboard_info_leaderboard_info__["a" /* LeaderboardInfoPage */]);
        else if (item == "Gameplay")
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__map_info_map_info__["a" /* MapInfoPage */]);
    };
    HelpPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-help',template:/*ion-inline-start:"/home/linconnu/Desktop/botani3/src/pages/help/help.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-buttons left>\n      <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    </ion-buttons>\n    <ion-title class = "toolbar-background">\n        <span text-color = "white-text"> Info </span>\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n\n  <ion-list>\n      <ion-label></ion-label>\n      <button ion-item *ngFor="let item of items" (click) = "goToPage(item)">\n        {{item}}\n      </button>\n  </ion-list>\n\n</ion-content>\n\n\n<ion-footer>\n\n  <ion-toolbar color="secondary">\n    <ion-searchbar placeholder="Search" (ionInput)="filterItems($event)"></ion-searchbar>\n  </ion-toolbar>\n\n</ion-footer>\n'/*ion-inline-end:"/home/linconnu/Desktop/botani3/src/pages/help/help.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], HelpPage);
    return HelpPage;
}());

//# sourceMappingURL=help.js.map

/***/ }),

/***/ 635:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(418);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(417);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_aws_amplify__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_aws_amplify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_aws_amplify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(80);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







//rootPage:any = 'LoginPage';
var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        var _this = this;
        this.rootPage = null;
        var globalActions = function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        };
        platform.ready()
            .then(function () {
            __WEBPACK_IMPORTED_MODULE_4_aws_amplify__["Auth"].currentAuthenticatedUser()
                .then(function () { _this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__["a" /* TabsPage */]; })
                .catch(function () { _this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */]; })
                .then(function () { return globalActions(); });
        });
    }
    MyApp.prototype.openPage = function (page) {
        this.nav.setRoot(page);
    };
    MyApp.prototype.logout = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/linconnu/Desktop/botani3/src/app/app.html"*/'<ion-menu [content]="content">\n    <ion-header>\n      <ion-toolbar>\n          <ion-title>Menu</ion-title>\n      </ion-toolbar>\n    </ion-header>\n  \n  <ion-content class="side-menu-gradient">\n    <ion-list>\n  \n      <button ion-item menuClose (click)="openPage(\'TabsPage\')" class = "white transparent-item">\n          <ion-icon name="podium" style="zoom:1.5;"></ion-icon>\n           Leaderboard\n      </button>\n  \n      <button ion-item menuClose (click)="openPage(\'HelpPage\')" class = "white transparent-item">\n          <ion-icon name="information-circle" style="zoom:1.5;"></ion-icon>\n          Info\n      </button>\n\n      <button ion-item menuClose (click)="logout()" class = "white transparent-item">\n        <ion-icon name="log-out" style="zoom:1.5;"></ion-icon>\n        Logout\n      </button>\n  \n    </ion-list>\n  </ion-content>\n  </ion-menu>\n  \n  <!-- main navigation -->\n  <ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/home/linconnu/Desktop/botani3/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 699:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
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


var TabsPage = (function () {
    function TabsPage(navParams) {
        this.tab1Root = 'DivisionalLeaderboard';
        this.tab2Root = 'BotaniMap';
        this.myIndex = navParams.data.tabIndex || 0;
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tabs',template:/*ion-inline-start:"/home/linconnu/Desktop/botani3/src/pages/tabs/tabs.html"*/'<ion-tabs [selectedIndex]="myIndex" color = "secondary">\n  <ion-tab [root]="tab1Root" tabTitle="Leaderboard" tabIcon="ribbon"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Map" tabIcon="ios-map"></ion-tab>\n  <!--<ion-tab [root]="tab3Root" tabTitle="Forest" tabIcon="ios-leaf"></ion-tab>-->\n</ion-tabs>\n'/*ion-inline-end:"/home/linconnu/Desktop/botani3/src/pages/tabs/tabs.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 733:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 734:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export LoginDetails */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_aws_amplify__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_aws_amplify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_aws_amplify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__signup_signup__ = __webpack_require__(500);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_login_info_login_info__ = __webpack_require__(146);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var logger = new __WEBPACK_IMPORTED_MODULE_2_aws_amplify__["Logger"]('Login');
var LoginDetails = (function () {
    function LoginDetails() {
    }
    return LoginDetails;
}());

var LoginPage = (function () {
    function LoginPage(navCtrl, alert, loadingCtrl, saveLogIn) {
        this.navCtrl = navCtrl;
        this.alert = alert;
        this.loadingCtrl = loadingCtrl;
        this.loginDetails = new LoginDetails();
        this.saveLogIn = saveLogIn;
    }
    LoginPage.prototype.login = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        var details = this.loginDetails;
        logger.info('login..');
        __WEBPACK_IMPORTED_MODULE_2_aws_amplify__["Auth"].signIn(details.username, details.password)
            .then(function (user) {
            logger.debug('signed in user', user);
            _this.saveLogIn.updateUsername(details.username);
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */]);
        })
            .catch(function (err) {
            logger.debug('errrror', err);
            _this.error_alert();
        })
            .then(function () {
            loading.dismiss();
        });
    };
    LoginPage.prototype.signup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__signup_signup__["a" /* SignupPage */]);
    };
    LoginPage.prototype.error_alert = function () {
        var alert = this.alert.create({
            title: "Error!",
            subTitle: "Invalid Username or Password.\n Please Reenter your Credentials",
            buttons: ["Continue"]
        });
        alert.present();
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/home/linconnu/Desktop/botani3/src/pages/login/login.html"*/'<ion-content>\n  <div text-center class="logo">\n    <img src="assets/ionic-aws-logo.png" />\n  </div>\n  <form (submit)="login()">\n    <ion-list>\n\n      <ion-item>\n        <ion-label floating>Username</ion-label>\n        <ion-input [(ngModel)]="loginDetails.username" type="text" autocorrect="off" autocapitalize="none" name="username"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>Password</ion-label>\n        <ion-input [(ngModel)]="loginDetails.password" type="password" name="password"></ion-input>\n      </ion-item>\n\n      <div padding>\n        <button ion-button color="primary" block>LOGIN</button>\n      </div>\n\n      <div padding text-center>\n        <p>Don\'t have an account yet? <a (click)="signup()">Create one.</a></p>\n      </div>\n\n    </ion-list>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/home/linconnu/Desktop/botani3/src/pages/login/login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_5__providers_login_info_login_info__["a" /* LoginInfoProvider */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 826:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmSignInPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_aws_amplify__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_aws_amplify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_aws_amplify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(80);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var logger = new __WEBPACK_IMPORTED_MODULE_2_aws_amplify__["Logger"]('ConfirmSignIn');
var ConfirmSignInPage = (function () {
    function ConfirmSignInPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.user = navParams.get('user');
    }
    ConfirmSignInPage.prototype.confirm = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_2_aws_amplify__["Auth"].confirmSignIn(this.user, this.code)
            .then(function () { return _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */]); })
            .catch(function (err) { return logger.debug('confirm error', err); });
    };
    ConfirmSignInPage.prototype.login = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
    };
    ConfirmSignInPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-confirm-signin',template:/*ion-inline-start:"/home/linconnu/Desktop/botani3/src/pages/confirmSignIn/confirmSignIn.html"*/'<ion-content>\n  <div padding>\n    <p>Please enter the confirmation code sent to your email to verify your account:</p>\n  </div>\n  <form (submit)="confirm()">\n    <ion-list>\n\n      <ion-item>\n        <ion-label floating>Confirmation Code</ion-label>\n        <ion-input type="text" [(ngModel)]="code" name="code"></ion-input>\n      </ion-item>\n\n      <div padding>\n        <button ion-button color="primary" block>Confirm Login</button>\n      </div>\n\n      <div padding text-center>\n        <p><a (click)="login()">Return to login</a>\n      </div>\n\n    </ion-list>\n  </form>\n</ion-content>  \n'/*ion-inline-end:"/home/linconnu/Desktop/botani3/src/pages/confirmSignIn/confirmSignIn.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ConfirmSignInPage);
    return ConfirmSignInPage;
}());

//# sourceMappingURL=confirmSignIn.js.map

/***/ }),

/***/ 827:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_aws_amplify__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_aws_amplify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_aws_amplify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(502);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var logger = new __WEBPACK_IMPORTED_MODULE_2_aws_amplify__["Logger"]('Account');
var AccountPage = (function () {
    function AccountPage(navCtrl, camera, loadingCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.camera = camera;
        this.loadingCtrl = loadingCtrl;
        this.attributes = [];
        this.avatarPhoto = null;
        this.selectedPhoto = null;
        __WEBPACK_IMPORTED_MODULE_2_aws_amplify__["Auth"].currentUserInfo()
            .then(function (info) {
            _this.userId = info.id;
            _this.username = info.username;
            _this.attributes = [];
            if (info['email']) {
                _this.attributes.push({ name: 'email', value: info['email'] });
            }
            if (info['phone_number']) {
                _this.attributes.push({ name: 'phone_number', value: info['phone_number'] });
            }
            _this.refreshAvatar();
        });
    }
    AccountPage.prototype.refreshAvatar = function () {
        /*Storage.get(this.userId + '/avatar')
          .then(url => this.avatarPhoto = url);*/
    };
    AccountPage.prototype.dataURItoBlob = function (dataURI) {
        // code adapted from: http://stackoverflow.com/questions/33486352/cant-upload-image-to-aws-s3-from-ionic-camera
        var binary = atob(dataURI.split(',')[1]);
        var array = [];
        for (var i = 0; i < binary.length; i++) {
            array.push(binary.charCodeAt(i));
        }
        return new Blob([new Uint8Array(array)], { type: 'image/jpeg' });
    };
    ;
    AccountPage.prototype.selectAvatar = function () {
        var _this = this;
        var options = {
            quality: 100,
            targetHeight: 200,
            targetWidth: 200,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64:
            _this.selectedPhoto = _this.dataURItoBlob('data:image/jpeg;base64,' + imageData);
            _this.upload();
        }, function (err) {
            _this.avatarInput.nativeElement.click();
            // Handle error
        });
    };
    AccountPage.prototype.uploadFromFile = function (event) {
        var _this = this;
        var files = event.target.files;
        logger.debug('Uploading', files);
        var file = files[0];
        var type = file.type;
        __WEBPACK_IMPORTED_MODULE_2_aws_amplify__["Storage"].put(this.userId + '/avatar', file, { contentType: type })
            .then(function () { return _this.refreshAvatar(); })
            .catch(function (err) { return logger.error(err); });
    };
    AccountPage.prototype.upload = function () {
        var _this = this;
        if (this.selectedPhoto) {
            var loading_1 = this.loadingCtrl.create({
                content: 'Uploading image...'
            });
            loading_1.present();
            __WEBPACK_IMPORTED_MODULE_2_aws_amplify__["Storage"].put(this.userId + '/avatar', this.selectedPhoto, { contentType: 'image/jpeg' })
                .then(function () {
                _this.refreshAvatar();
                loading_1.dismiss();
            })
                .catch(function (err) {
                logger.error(err);
                loading_1.dismiss();
            });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('avatar'),
        __metadata("design:type", Object)
    ], AccountPage.prototype, "avatarInput", void 0);
    AccountPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-account',template:/*ion-inline-start:"/home/linconnu/Desktop/botani3/src/pages/account/account.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Account\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <div padding text-center>\n    <div *ngIf="avatarPhoto" class="avatar" [style.background-image]="\'url(\'+ avatarPhoto +\')\'">\n    </div>\n\n    <button ion-button clear (click)="selectAvatar()">Change photo</button>\n\n    <input #avatar class="avatar-input" type="file" (change)="uploadFromFile($event)" />\n  </div>\n\n  <div>\n    <ion-list>\n      <ion-item>\n        <strong>username</strong> {{ username }}\n      </ion-item>\n      <ion-item *ngFor="let attr of attributes">\n        <strong>{{ attr.getName() }}</strong> {{ attr.getValue() }}\n      </ion-item>\n    </ion-list>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/home/linconnu/Desktop/botani3/src/pages/account/account.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], AccountPage);
    return AccountPage;
}());

//# sourceMappingURL=account.js.map

/***/ }),

/***/ 828:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DynamoDB; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_aws_amplify__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_aws_amplify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_aws_amplify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_aws_sdk__ = __webpack_require__(829);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_aws_sdk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_aws_sdk__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var aws_exports = __webpack_require__(505).default;
__WEBPACK_IMPORTED_MODULE_2_aws_sdk___default.a.config.region = aws_exports.aws_project_region;
__WEBPACK_IMPORTED_MODULE_2_aws_sdk___default.a.config.update({ customUserAgent: 'ionic-starter' });
var logger = new __WEBPACK_IMPORTED_MODULE_1_aws_amplify__["Logger"]('DynamoDB');
var DynamoDB = (function () {
    function DynamoDB() {
    }
    DynamoDB.prototype.getDocumentClient = function () {
        return __WEBPACK_IMPORTED_MODULE_1_aws_amplify__["Auth"].currentCredentials()
            .then(function (credentials) { return new __WEBPACK_IMPORTED_MODULE_2_aws_sdk___default.a.DynamoDB.DocumentClient({ credentials: credentials }); })
            .catch(function (err) { return logger.debug('error getting document client', err); });
    };
    DynamoDB = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], DynamoDB);
    return DynamoDB;
}());

//# sourceMappingURL=aws.dynamodb.js.map

/***/ })

},[509]);
//# sourceMappingURL=main.js.map