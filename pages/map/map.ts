import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, ToastController, IonicPage } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { TreeFactory, sapling } from '../../providers/treefactory';
import { Graphs } from '../dataCollection/dataCollection';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';

declare let google: any;

@IonicPage()

@Component({
    selector: 'map',
    templateUrl: 'map.html'
})

export class BotaniMap {

    @ViewChild('map') mapContainer: ElementRef;  //reference the html component names #map

    map: any;             //the map object
    mapBounds: any;       //the boundaries of the playing field
    areaCenter: any;      //the center of the playng field
    userLoc: userPair;
    userMark: any;        //the marker that shows the users location
    locWatcher: any;      //variable that holds the promise that resolves the users location
    tree_list: Tree[];
    saplings: sapling[];
    evergreenIcon: any;
    deciduousIcon:any;

    //initial setup-------------------------------------------------------------------------------------------------
    /**
     * the constructor initializes the center and boundaries of the playing field
     * @param navCtrl 
     * @param geolocation 
     * @param TreeFactory 
     * @param alertCtrl 
     * @param toastCtrl 
     */
    constructor(public navCtrl: NavController, public geolocation: Geolocation, private TreeFactory: TreeFactory,
        private alertCtrl: AlertController, private toastCtrl: ToastController) {
        this.areaCenter = new google.maps.LatLng(47.002927, -120.537427);

        this.mapBounds = new google.maps.LatLngBounds(
            new google.maps.LatLng(46.999761, -120.543179),
            new google.maps.LatLng(47.010421, -120.531785)
        );
        this.tree_list = [];
        this.saplings = [];
        this.userLoc =
            {
                lat: 0,
                long: 0
            }

        this.evergreenIcon = {
            url: 'assets/icon/evergreen.png',
            size: new google.maps.Size(36, 43),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(20, 43)
        }
    
        this.deciduousIcon = {
            url: 'assets/icon/deciduous.png',
            size: new google.maps.Size(32, 40),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(16, 40)
        }
    }

    /**
     * plantTrees loops through a list of saplings and turns them into trees
     * @param saplings 
     */
    plantTrees(saplings: sapling[]) {
        //Loops through list
        for (let i = 0; i < saplings.length; i++) {
            //and pushes instanciated objects onto the tree_list
            this.tree_list.push(new Tree(saplings[i].lat, saplings[i].long, this.wrapTrees(saplings[i]), saplings[i].special, saplings[i].hidden));
        }
    }

    //
    /**
     * This recursive method wraps the tree object in its decorator classes
     * The decorator list of each sapling is treated like a stack
     * The top element is popped off and used to create the 
     * @param target 
     */
    wrapTrees(target: sapling): DecoratorTree {
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
                return new FruitingTree(this.wrapTrees(target));
            case 'pn':
                return new PineConeTree(this.wrapTrees(target));
        }
    }

    //when map element is ready--------------------------------------------------------------------------------------
    /**
     * the map itself won't be initialized until the view is ready 
     */  
    ionViewDidLoad() {
        console.log("ionviewdidload map")
        this.TreeFactory.getJSON().subscribe(res => {
            console.log(res);
            for (let i = 0; i < res.length; i++) {
                var obj = JSON.parse(JSON.stringify(res[i]));
                var sap: sapling;
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
                this.saplings.push(sap);

            }
            console.log(this.saplings);
            this.plantTrees(this.saplings);
            console.log('here2')
            this.mapSetUp();
            //this.getTreeMarks();
            console.log("here3")
            this.updateTreeMarks(this.tree_list);
            console.log("here4")
            this.createLocWatcher();
            // this.updateUserMark(this.userLoc);

        });
    }

    /*
        here is where the map object is initialized
        it is centered and zoomed in to an appropriate level and
        contained in the appropriate bounds
        and populated with all the markers
    */
    mapSetUp() {

        //here is where the phone's geolocation is first defined
        //there is also an error function just incase the setup was unsuccessful
        //var userLoc = undefined;
        console.log("map init")
        let userLoc;
        this.geolocation.getCurrentPosition({ timeout: 10000, enableHighAccuracy: true }).then((position) => {

            userLoc = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

        }).catch((error) => {

            console.log('problem getting location', error);
            alert('code: ' + error.code + '\n'
                + 'message: ' + error.message + '\n');
            userLoc = undefined;
        });

        //here is where the map is initialized, if the user's geolocation is defined and within mapBounds, 
        //then it is the map's center, otherwise the default center is used
        let styling = [
            {
            featureType: "poi", //points of interest
            elementType: "labels",
            stylers: [
                    { visibility: "off"}
                ]
            }
        ];

        let options = {
            center: (userLoc !== undefined && this.mapBounds.contains(this.userLoc)) ? this.userLoc : this.areaCenter,
            
            minZoom: 14,
            zoom: 14,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            disableDefaultUI: true,
            styles: styling
        }

        this.map = new google.maps.Map(document.getElementById("map"), options);
        console.log("init done");
        //this.map.setCompassEnabled(true);

    }

    updateTreeMarks(trees){

        //ONLY WORKS IF evergreen.png AND deciduous.png ARE IN THE ICON FOLDER IN ASSETS

        for(let tree of trees){
        
            if(!tree.hidden){
                var loc = new google.maps.LatLng(tree.lat, tree.long);
                var treeMark = new google.maps.Marker({
                    position: loc,
                    map: this.map,
                    icon: (tree.collectData().pinecone)
                          ? this.evergreenIcon
                          : this.deciduousIcon
                });
            }
        }
    }

   /**
    * this funtion updates the user's location marker
    * but only if the user is within the bounds of the playing field
    * @param userLoc 
    */
    updateUserMark(userLoc) {
        //get rid of preveous marker
        if (this.userMark) this.userMark.setMap(null);

        //test if the user's position is within the bounds and update with a new marker 
        //if it is
        if (userLoc !== undefined && this.mapBounds.contains(userLoc)) {
            this.userMark = new google.maps.Marker({
                position: userLoc
            });
            this.userMark.setMap(this.map);

        }

    }

    /*
        here is where we set up a "position watcher" that should listen to a 
        change in the user's location and update the user's
        marker accordingly
    */
    createLocWatcher() {
        this.locWatcher = this.geolocation.watchPosition()//{ enableHighAccuracy: true })
            .filter((p) => p.coords !== undefined)
            .subscribe(position => {
                console.log("init user loc");
                this.userLoc =
                    {
                        lat: position.coords.latitude,
                        long: position.coords.longitude
                    }
                console.log("user loc done")
                let newUserLoc = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
                this.updateUserMark(newUserLoc);
                //this.revealHidden();
            });
    }

    //tree search-----------------------------------------------------------------------------------------------------
    /*
        here is where the the app checks if it needs to reveal a 
        nearby hidden tree
    */
   revealHidden(){
   
    let farProxim = 60;

    let nearProxim = 6;

    let closest = this.findTree(true);

        if(closest !== undefined){
            let proxim = this.inProximity(closest);
            if(proxim <= nearProxim){
                this.alertMessage(1);
                var loc = new google.maps.LatLng(this.tree_list[closest.ind].lat,
                                                this.tree_list[closest.ind].long);
                var treeMark = new google.maps.Marker({
                    position: loc,
                    map: this.map,
                    icon: (this.tree_list[closest.ind].collectData().pinecone)
                        ? this.evergreenIcon
                        : this.deciduousIcon
                    
                });
                //make the hidden value in the database false
                //notify everyone else that a tree has been found
            }
            else if(proxim <= farProxim){
                this.hintToast({
                    pro: proxim,
                    dir: closest.direct
                })
            }
        }
        else{
            this.hintToast(undefined);
        }

    }

    /**
     * these toasts give users a hint about how far the nearest hidden tree is
     * @param hints 
     */
    hintToast(hints) {
        let toastMessg = (hints === undefined)
            ? 'No hidden trees anywhere near you right now'
            : 'The closest hidden tree is ' + hints.pro + 'feet away to the ' + hints.dir + '!';

        let toast = this.toastCtrl.create({
            message: toastMessg,
            duration: 4000,
            position: 'middle',
            dismissOnPageChange: true
        });

        toast.present();
    }

    /*
        this function, attached with an on click listener to
        a button in the HTML page, allows the user to observe the
        nearest tree, if possible
    */
    observeNearest() {

        let proxim = 6;

        let closest = this.findTree(false);
        console.log("here in observe    ");
        console.log(this.tree_list[closest.ind]);
        if (closest !== undefined && this.inProximity(closest) <= proxim) {
            //this should be the part where we take the user to the data collection screen 
            //which is showing collection options based on the specific tree
            this.collectData(closest.ind);
        } else {
            //this message is generic
            this.alertMessage(2);
        }

    }
    
    /**
     * opens the graph page witht the propoer parameters
     * @param treeindex 
     */
    collectData(treeindex: number) {
        let tosend = this.tree_list[treeindex].collectData();
        console.log(this.tree_list[treeindex]);
        this.navCtrl.push(Graphs, { params: tosend });
    }

  /**
   * this function returns the tree closest to the user 
   * if any, the flag parameter (true or false) tells us
   * whether to look for a hidden tree or visible tree
   * @param hiddenFlag 
   */
    findTree(hiddenFlag) {
        let minLatDist = 100000;
        let minLngDist = 100000;
        let yDist;
        let xDist;
        let targetInd = -1;
        let index = 0;
        let direct1 = "";
        let direct2 = "";
        let userlat = this.userLoc.lat;
        let userlong = this.userLoc.long;
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
        for (let tree of this.tree_list) {
            //the distance between the two latitudes
            //TODO replave with actual cords

            if (userlat > tree.lat) {

                yDist = userlat - tree.lat;
                direct1 = "South";
            } else {
                console.log()
                yDist = tree.lat - userlat;
                direct1 = "North";
            }
            //the distance between the two longitudes
            if (userlong > tree.long) {
                xDist = userlong - tree.long;
                direct2 = "West";
            } else {
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
        } else {
            return undefined;
        }


    }

    /**
     * this function returns the distance a user is from a tree
     * @param closest 
     */
    inProximity(closest) {
        /*let a = closest.latDist * closest.latDist;
        let b = closest.lngDist * closest.lngDist;
        let squaredDist = a+b;
        return Math.sqrt(squaredDist);*/
        console.log("promixty")
        let ind = closest.ind;
        console.log("inde is " + ind);
        console.log("promiimity = 1")

        let treeLoc = new google.maps.LatLng(this.tree_list[ind].lat, this.tree_list[ind].long);
        console.log();
        let myLoc = new google.maps.LatLng(this.userLoc.lat, this.userLoc.long);
        console.log(myLoc);
        console.log("prox ")
        let thing = google.maps.geometry.spherical.computeDistanceBetween(myLoc, treeLoc);
        console.log(thing);
        return thing

    }

    /**
     * lets users know whether or not they can collect data on a tree
     * @param num 
     */
    alertMessage(num) {

        let titleStr = (num === 1) ? 'New Tree Available' : 'Can\'t Collect Data';
        let subStr = (num === 1)
            ? 'A new Tree has been discovered, hurry and make some observations on it!'
            : 'You aren\'t within the range of any of the trees on the map';

        let alert = this.alertCtrl.create({
            title: titleStr,
            subTitle: subStr,
            buttons: ['OK']
        });

        alert.present();
    }

}

//END OF BOTANIMAP--------------------------------------------------------------------------------------------------

export interface DataParams {
    falling: boolean,
    flowering: boolean,
    fruiting: boolean,
    pinecone: boolean
    special: Array<string>
}

interface userPair {
    lat: number,
    long: number
}


export class Tree {
    lat: number;
    long: number;
    child_tree: DecoratorTree;
    _special_events: string[];
    _number_of_events: number;
    hidden: boolean;
    _params: DataParams;

    /**
     * the constructor for the tree class 
     * sets the lat,long child tree, special events, and hidden field of the tree
     * 
     * @param lat 
     * @param long 
     * @param child_tree 
     * @param special_events 
     * @param hidden 
     */
    constructor(lat: number, long: number, child_tree: DecoratorTree, special_events: string[], hidden: boolean) {
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
            }

    }

    /**
     * Returns the paramaters for data collection
     * @returns the parameters for the tree
     */
    public collectData(): DataParams {
        this.prepParams();
        return this._params;
    }

    /**
     * Checks to see if collection is legal
     * @param curLat 
     * @param curLong 
     * @returns true if user in the boundaries
     */
    public canCollect(curLat: number, curLong: number): boolean {
        // TODO get user location and test to see if in bounds
        return true;
    }

    // Reports any special events occuring on the tree
    
    /**
     * gets the special events for a tree
     * @returns the special events for a tree
     */
    public get special_events(): string[] {
        return this._special_events;
    }

    /**
     * Reports the number of events on a tree
     */
    public get number_of_events(): number {
        return this._number_of_events;
    }

    /**
     * Gets the proper parameters of each decorator and
     * uses them to creat a DataParams interface
     **/
    public prepParams(): void {
        let raw_params = this.child_tree.getParams().split('.');
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
    }
}

/* DecoratorTree objects are the child_trees of the concrete tree class
 * There function is to call the specific collectData methods for each data point
 */
export abstract class DecoratorTree {

    child_tree: DecoratorTree;
    params: string;

    /**
     * constructor for the decorator tree
     * @param child_tree 
     */
    constructor(child_tree: DecoratorTree) {
        this.child_tree = child_tree;
        this.params = "";
    }

    /**
     * gets the parameters for the tree
     */
    public getParams(): string {
        return this.collectData();
    }

    public abstract collectData(): string;

}

/*------NEW DECORATORS MUST BE IMPLEMENTED TO EXTEND DECORATOR TREE------*/

/**
 * decorator for falling trees
 */
export class FallingTree extends DecoratorTree { 
    public collectData(): string {
        if (this.child_tree !== null) {
            return "fl." + this.child_tree.collectData()
        }
        return "fl";

    }
}

/**
 * decorator for fruiting trees
 */
export class FruitingTree extends DecoratorTree{

    public collectData(): string {
        if (this.child_tree !== null) {
            return "fr." + this.child_tree.collectData()
        }
        return "fr";
    }
}

/**
 * decorator for flowering trees
 */
export class FloweringTree extends DecoratorTree {

    public collectData(): string {
        if (this.child_tree !== null) {
            return "fw." + this.child_tree.collectData()
        }
        return "fw";
    }

}

/**
 * decorator for pine cone trees
 */
export class PineConeTree extends DecoratorTree { 

    public collectData(): string {
        if (this.child_tree !== null) {
            return "pn." + this.child_tree.collectData()
        }
        return "pn";
    }
}