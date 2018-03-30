import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { AlertController, PopoverController } from 'ionic-angular'
import { DataParams } from '../map/map';
import {UserFactory} from '../../providers/userfactory';
import { Chart } from 'chart.js';
import { EntryPasser } from '../../providers/entrypasser'
import { ClickBlock } from 'ionic-angular/components/app/click-block';
import { LoginDetails } from '../login/login';
import { letProto } from 'rxjs/operator/let';

import { LoginInfoProvider } from '../../providers/login-info/login-info';

let barGraphIndex = 0; //index of the bargraph
let lineGraphIndex = 0; //index of the line graph
let lineGraphSegment = [3,3,3,3,3,3,3,3,3,3]; //the index on the line graph slider
let numBarGraphs = 6; //number of bar graphs
let numLineGraphs = 10; //number of line graphs

let gIndex = 0; //graph index
let graphMode = 0; //0 if bar, 1 if line graph

let loginDetails : LoginDetails;


//the colors for each of the left and right graphs
let barGraphColors = [
    ['rgba(0, 193, 0, 0.5)','rgba(255, 0, 0, 0.5)'],
    ['rgba(213, 255, 0, 0.5)','rgba(0, 0, 255, 0.5)'],
    ['rgba(54, 162, 235, 0.5)','rgba(255, 137, 0, 0.5)'],
    ['rgba(0, 255, 0, 0.5)','rgba(0, 0, 0, 0.5)'],
    ['rgba(255, 0, 222, 0.5)','rgba(0, 255, 213, 0.5)'],
    ['rgba(255, 0, 0, 0.5)','rgba(0, 0, 255, 0.5)']
]

//the data in each of the graphs
let barGraphData = [[50,50],[50,50],[50,50],[50,50],[50,50],[50,50]];

//data for the line graphs
let lineGraphData = [0,180,710,2200,5200,10000];

//data that will be sent
let lineGraphDataToSend = ['0','1 to 3', '3 to 10','11 to 100','101 to 1,000', '1,001 to 10,000', ' > 10,000'];

//labels for each graph
let barGraphLabels = [
  ['Opened','Not Opened'],
  ['Used','Not Used'],
  ['Full','Not Full'],
  ['Green','Not Green'],
  ['Opened','Not Opened'],
  ['Ripe','Not Ripe']
];

//the titles for each graph
let barGraphTitles = [
  'Open Pollen Cones',
  'Canopy Space Used',
  'Full-Sized Leaves',
  'Colored Leaves',
  'Open Flowers',
  'Ripe Fruits'
];

//the titles for each graph
let lineGraphTitles = [
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
]

//the descriptions for each graph
let lineGraphDescriptions = [
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
]

//the descriptions for each graph
let barGraphDescriptions = [
    'One or more open, fresh, male pollen cones (strobili) are visible on the plant. Cones are considered "open" when the scales have spread apart to release pollen. Do not include wilted or dried cones that have already released all of their pollen.',
    'One or more live, unfolded leaves are visible on the plant. A leaf is considered "unfolded" once its entire length has emerged from a breaking bud, stem node or growing stem tip, so that the leaf stalk (petiole) or leaf base is visible at its point of attachment to the stem. Do not include fully dried or dead leaves.',
    'A majority of leaves on the plant have not yet reached their full size and are still growing larger. Do not include new leaves that continue to emerge at the ends of elongating stems throughout the growing season.',
    'One or more leaves show some of their typical late - season color, or yellow or brown due to drought or other stresses. Do not include small spots of color due to minor leaf damage, or dieback on branches that have broken. Do not include fully dried or dead leaves that remain on the plant.',
    'One or more open, fresh flowers are visible on the plant. Flowers are considered "open" when the reproductive parts (male stamens or female pistils) are visible between or within unfolded or open flower parts (petals, floral tubes or sepals). Do not include wilted or dried flowers.',
    'One or more ripe fruits are visible on the plant.'
]

let popoverTitle = '';
let popoverData = '';
let username;

@IonicPage()
@Component({
  selector: 'page-graph',
  templateUrl: 'dataCollection.html'
})
 export class Graphs {
  //each of the view children for bar graphs in the html file
  @ViewChild('openPollenCones') openPollenCones;
  @ViewChild('unfoldingLeaves') unfoldingLeaves;
  @ViewChild('fullSizedLeaves') fullSizedLeaves;
  @ViewChild('coloredLeaves') coloredLeaves;
  @ViewChild('openedFlowers') openedFlowers;
  @ViewChild('ripeFruits') ripeFruits;

  //each of the view children for line graphs
  @ViewChild('breakingNeedleBuds') breakingNeedleBuds;
  @ViewChild('youngNeedles') youngNeedles;
  @ViewChild('freshPollenCones') freshPollenCones;
  @ViewChild('unripeSeedCones') unripeSeedCones;
  @ViewChild('ripeSeedCones') ripeSeedCones;
  @ViewChild('droppedSeedCones') droppedSeedCones;
  @ViewChild('breakingLeafBuds') breakingLeafBuds;
  @ViewChild('flowerBuds') flowerBuds;
  @ViewChild('fruits') fruits;
  @ViewChild('droppedFruits') droppedFruits;

  //these get set to true when they're relevant
  showOpenPollenCones: boolean = false;
  showUnfoldingLeaves: boolean = false;
  showFullSizedLeaves: boolean = false;
  showColoredLeaves: boolean = false;
  showOpenedFlowers: boolean = false;
  showRipeFruits: boolean = false;

  showNumberOfBreakingNeedleBuds: boolean = false;
  showNumberOfYoungNeedles: boolean = false;
  showNumberOfFreshPollenCones: boolean = false;
  showNumberOfUnripeSeedCones: boolean = false;
  showNumberOfRipeSeedCones: boolean = false;
  showNumberOfDroppedSeedCones: boolean = false;
  showNumberOfBreakingLeafBuds: boolean = false;
  showNumberOfFlowerBuds: boolean = false;
  showNumberOfFruits: boolean = false;
  showNumberOfDroppedFruits: boolean = false;

  //starting values for the bar graph sliders
  openPollenConesValue: number = 50;
  unfoldingLeavesValue: number = 50;
  fullSizedLeavesValue: number = 50;
  coloredLeavesValue: number = 50;
  openedFlowersValue: number = 50;
  ripeFruitsValue: number = 50;

  //starting values for the line graph sliders
  breakingNeedleBudsValue: number = 3;
  youngNeedlesValue: number = 3;
  freshPollenConesValue: number = 3;
  unripeSeedConesValue: number = 3;
  ripeSeedConesValue: number = 3;
  droppedSeedConesValue: number = 3;
  breakingLeafBudsValue: number = 3;
  flowerBudsValue: number = 3;
  fruitsValue: number = 3;
  droppedFruitsValue: number = 3;

  //the values in the radio buttons
  openPollenConesRadioValue: string = 'little';
  coloredLeavesRadioValue: string = 'true';

  //values which will be sent
  LineGraphSendValues: string[] = [];
  BarGraphSendValues: string [] = [];


  barChart: any; //array of barcharts
  lineChart: any; //array of linecharts

  loginName : string

  points : number

  /**
   * The constructor for the graphs class 
   * initializes the 2 charts
   * initializes the data to be send
   * initilizes the parameters to be sent
   * initializes the points that will be awarded
   * sets the login name
   * 
   * 
   * @param navCtrl 
   * @param popoverCtrl 
   * @param navParams 
   * @param passer 
   * @param alert 
   * @param saveLogIn 
   * @param UserFactory 
   */
  constructor(public navCtrl: NavController, public popoverCtrl: PopoverController, navParams: NavParams, private passer : EntryPasser, private alert : AlertController, private saveLogIn: LoginInfoProvider, private UserFactory:UserFactory) {
    console.log("made it here")
      this.barChart = [null,null,null,null,null,null]; //initialize an array of bar charts
      this.lineChart = [null,null,null,null,null,null,null,null,null,null];
      this.loginName = saveLogIn.getUsername();
      this.initLinegraphSendValues();
      this.initBargraphSendValues();
      this.initBools(navParams.get("params"));
      this.points = this.awardpoints(navParams.get("params"));
      //this.lineChart = new Linegraphs();
  }

  /**
   * awards the points wehn data is collected
   * @param params 
   */
  awardpoints(params: DataParams)
  {
      let multi = 1;
      for(let i in params.special)
      {
          multi++;
      }
      return 100*multi;
  }

  /**
   * initializes the booleans, which will show relevant data to trees you're close to
   * @param params 
   */
  initBools(params : DataParams)
  {
    if(params.falling)
    {
        this.showColoredLeaves = true;
        this.showFullSizedLeaves = true;
        this.showUnfoldingLeaves = true;
        
    }
    if(params.pinecone)
    {
        this.showOpenPollenCones = true;
        this.showNumberOfBreakingNeedleBuds = true;
    }
    this.showRipeFruits = params.fruiting;
    this.showOpenedFlowers = params.flowering;
  }

  /**
   * initialize the line graph values to send
   */
  initLinegraphSendValues(){
      for(let i = 0; i < numLineGraphs; i++){
          this.LineGraphSendValues[i] = lineGraphDataToSend[3];
      }
  }

   /**
   * initialize the bar graph calues to send
   */
  initBargraphSendValues(){
    for(let i = 0; i < numBarGraphs; i++){
        this.BarGraphSendValues[i] = '50';
    }
  }

  /**
   * collects the data on the tree
   */
  collectData()
  {
    //let username = loginDetails.username;
    let entry = {data : "passed"};
    //this.passer.getEntry(entry)

    this.presentPoints();
    if (!this.showOpenPollenCones)
    {
        this.openPollenConesValue = null;  
        this.openPollenConesRadioValue = null;
    }            
    if (!this.showUnfoldingLeaves)
        this.unfoldingLeavesValue=null;
    if (!this.showFullSizedLeaves)
        this.fullSizedLeavesValue =null;
    if (!this.showColoredLeaves)
    {
        this.coloredLeavesValue=null;
        this.coloredLeavesRadioValue=null;
    }
    if (!this.showOpenedFlowers)
        this.openedFlowersValue=null;
    if (!this.showRipeFruits)
        this.ripeFruitsValue = null

    if (!this.showNumberOfBreakingNeedleBuds)
        this.breakingNeedleBudsValue
    if (!this.showNumberOfYoungNeedles)
        this.youngNeedlesValue=null;
    if (!this.showNumberOfFreshPollenCones)
        this.freshPollenConesValue=null;
    if (!this.showNumberOfUnripeSeedCones)
        this.unripeSeedConesValue=null;
    if (!this.showNumberOfRipeSeedCones)
        this.ripeSeedConesValue=null;
    if (!this.showNumberOfDroppedSeedCones)
        this.droppedSeedConesValue=null;
    if (!this.showNumberOfBreakingLeafBuds)
        this.breakingLeafBudsValue=null;
    if (!this.showNumberOfFlowerBuds)
        this.flowerBudsValue=null;
    if (!this.showNumberOfFruits)
        this.fruitsValue=null;
    if (!this.showNumberOfDroppedFruits)
        this.droppedFruitsValue=null;
    

    //this line of code create new entry in the database with all the information that was recorded
    this.passer.createEntry(username, 2, this.openPollenConesValue, this.unfoldingLeavesValue, this.fullSizedLeavesValue, this.coloredLeavesValue, this.openedFlowersValue, this.ripeFruitsValue, this.breakingNeedleBudsValue, this.youngNeedlesValue, this.freshPollenConesValue, this.unripeSeedConesValue, this.ripeSeedConesValue, this.droppedSeedConesValue, this.breakingLeafBudsValue, this.flowerBudsValue, this.fruitsValue, this.droppedFruitsValue, this.openPollenConesRadioValue, this.coloredLeavesRadioValue);
    this.UserFactory.updateUser(username,  this.points);
    this.navCtrl.pop();
  }

  /**
   * presents the user with their points
   */
  presentPoints()
  {
    let alert = this.alert.create(
      {
        title : "Data sent!",
        subTitle : `You earned ${this.points} drops`,
        buttons : ["Continue"]
      }
    );
    alert.present();
  }

  ionViewDidLoad(){
    for(barGraphIndex = 0; barGraphIndex < numBarGraphs; barGraphIndex++){
      this.barChart[barGraphIndex] = this.getBarChart(); //load each graph into the view
    }
    for(lineGraphIndex = 0; lineGraphIndex < numLineGraphs; lineGraphIndex++){
        this.lineChart[lineGraphIndex]= this.getLineChart();
    }
  }

/**
 * get the correct type of graph
 * depending on the type
 * 
 * @param context 
 * @param type 
 * @param data 
 * @param options 
 */
getChart(context, type, data, options?){
  return new Chart(context, {
      type: type,
      data: data,
      options: options
  });
}

/**
 * sets up all of the settings for the bar chart
 * the data, background color, graph type, and options get set here
 * @returns the native element of the correct bar graph
 */
getBarChart(){
  let data = 
  {
      scaleStartValue : 0,
      labels: barGraphLabels[barGraphIndex],
      datasets: [{
          label: 'Percentage of ' + barGraphTitles[barGraphIndex],
          data: barGraphData[barGraphIndex],
          backgroundColor: barGraphColors[barGraphIndex]
      }]
  }

  let options = 
  {
      title:{
          display: true,
          text: 'Percentage of ' + barGraphTitles[barGraphIndex],
          fontSize:20
      },
      legend:{
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
                  min:0,
                  max:100,
                  stepSize:20,
                  tickThickness: 0
              }
          }],
          xAxes: [{
              gridLines: {
                  color: "rgba(0, 0, 0, 0)",
              }
          }]
      }
  }
    if((barGraphIndex === 0) && this.showOpenPollenCones)
        return this.getChart(this.openPollenCones.nativeElement,"bar", data, options);
    else if((barGraphIndex === 1) && this.showUnfoldingLeaves)
        return this.getChart(this.unfoldingLeaves.nativeElement,"bar", data, options);
    else if((barGraphIndex === 2) && this.showFullSizedLeaves)
        return this.getChart(this.fullSizedLeaves.nativeElement,"bar", data, options);
    else if((barGraphIndex === 3) && this.showColoredLeaves)
        return this.getChart(this.coloredLeaves.nativeElement,"bar", data, options);
    else if((barGraphIndex === 4) && this.showOpenedFlowers)
        return this.getChart(this.openedFlowers.nativeElement,"bar", data, options);
    else if((barGraphIndex === 5) && this.showRipeFruits)
        return this.getChart(this.ripeFruits.nativeElement,"bar", data, options);
}

/**
 * sets up all of the settings for the line chart
 * the data, background color, graph type, and options get set here
 * @returns the native element of the correct line graph
 */
getLineChart(){
  let data = {
      labels: [' ', ' ', ' ', ' ', ' ', ' '],
      datasets: [{
          label: 'Number of ' + lineGraphTitles[lineGraphIndex],
          backgroundColor: '#87E6BF',
          data: this.getExponentialData(lineGraphSegment[lineGraphIndex])
      }]
  }

  let options = {
      title:{
          display: true,
          text: 'Number of ' + lineGraphTitles[lineGraphIndex],
          fontSize:20
      },
      scales:{
          yAxes: [{
              type: 'linear',
              gridLines: {
                  //color: "rgba(0, 0, 0, 0)",
              },
              ticks:{
                  display: true,
                  min: 0,
                  max: 10000,
                  stepSize: 10000
              }
          }],
          xAxes: [{
              gridLines:{
                  color: "rgba(0, 0, 0, 0)"
              }
          }]
      },
      elements:{
          point:{
              radius: 0
          }
      },
      legend:{
          display: false
      },
      tooltips: {
          enabled: false
      }
  }
  if((lineGraphIndex === 0) && this.showNumberOfBreakingNeedleBuds)
        return this.getChart(this.breakingNeedleBuds.nativeElement,"line",data,options);
    else if((lineGraphIndex === 1) && this.showNumberOfYoungNeedles)
        return this.getChart(this.youngNeedles.nativeElement,"line",data,options);
    else if((lineGraphIndex === 2) && this.showNumberOfFreshPollenCones)
        return this.getChart(this.freshPollenCones.nativeElement,"line",data,options);
    else if((lineGraphIndex === 3) && this.showNumberOfUnripeSeedCones)
        return this.getChart(this.unripeSeedCones.nativeElement,"line",data,options);
    else if((lineGraphIndex === 4) && this.showNumberOfRipeSeedCones)
        return this.getChart(this.ripeSeedCones.nativeElement,"line",data,options);
    else if((lineGraphIndex === 5) && this.showNumberOfDroppedSeedCones)
        return this.getChart(this.droppedSeedCones.nativeElement,"line",data,options);
    else if((lineGraphIndex === 6) && this.showNumberOfBreakingLeafBuds)
        return this.getChart(this.breakingLeafBuds.nativeElement,"line",data,options);
    else if((lineGraphIndex === 7) && this.showNumberOfFlowerBuds)
        return this.getChart(this.flowerBuds.nativeElement,"line",data,options);
    else if((lineGraphIndex === 8) && this.showNumberOfFruits)
        return this.getChart(this.fruits.nativeElement,"line",data,options);
    else if((lineGraphIndex === 9) && this.showNumberOfDroppedFruits)
        return this.getChart(this.droppedFruits.nativeElement,"line",data,options);
}

  /**
   * get called when the state of a graph changes, and updates that graph
   * redraws the bar graph at index i when the slider moves
   * @param i the index
   * @param value 
   */
  redrawBarGraph(i,value){
      barGraphIndex = i;
      barGraphData[barGraphIndex] = [value,100-value];
      this.barChart[barGraphIndex].destroy();
      this.barChart[barGraphIndex] = this.getBarChart();
      this.BarGraphSendValues[barGraphIndex] = `${value}`;
  }

  /**
   * redraw a line graph at index i when the slider moves
   * @param i 
   * @param inputSegment 
   */
  redrawLineGraph(i,inputSegment){
      lineGraphIndex = i;
      lineGraphSegment[lineGraphIndex] = inputSegment;
      this.lineChart[lineGraphIndex].destroy();
      this.lineChart[lineGraphIndex] = this.getLineChart();
      this.LineGraphSendValues[lineGraphIndex] = lineGraphDataToSend[inputSegment];
  }

  /**
   * gets the data for a line graph
   * @param size 
   * @returns the resulting data
   */
  getExponentialData(size){
      let result: number [] = [];
      for(let i = 0; i <= size; i++)
          result[i] = lineGraphData[i];
      
      return result;
  }

  /**
   * gets the title for the info popover
   * @param mode 
   * @param i 
   */
  getPopoverTitle(mode,i){
    if(mode === 0)
        popoverTitle = barGraphTitles[i];
    else 
        popoverTitle = lineGraphTitles[i];
  }
/**
 * gets the data for the info popover
 * @param mode 
 * @param i 
 */
  getPopoverData(mode,i){
    if(mode === 0)
        popoverData = barGraphDescriptions[i];
    else
        popoverData = lineGraphDescriptions[i];
  }

  /**
   * gets the info to be placed into the infor popopver
   * @param myEvent 
   * @param mode 
   * @param i 
   */
  getInfo(myEvent,mode,i){
    gIndex = i;
    graphMode = mode;
    this.getPopoverTitle(mode,i);
    this.getPopoverData(mode,i);
    let popover = this.popoverCtrl.create(PopoverPage,{},{cssClass: 'custom-popover'});
    popover.present({
        ev: myEvent
    });
  }

  /**
   * set the radio button to the value of passed from the user
   * @param value 
   */
  setPollenConesRadio(value){
      this.openPollenConesRadioValue = value;
  }

  /**
   * set the radio button to the value of passed from the user
   * @param value 
   */
  setColoredLeavesRadio(value){
      this.coloredLeavesRadioValue = value;
  }
}


// this will be changed to fit the needs of the database
export interface Entry
{
  data : string
}

@Component({
    templateUrl: 'popover.html'
})
export class PopoverPage{
    constructor(public viewCtrl: ViewController){
        
    }
    close(){
        this.viewCtrl.dismiss();
    }
    getPopoverTitle(){
        return popoverTitle;
    }
    getPopoverData(){
        return popoverData;
    }
}
