import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import { Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { HttpModule } from '@angular/http';
import { HttpClientJsonpModule } from '@angular/common/http/src/module';
import { JSONPBackend } from '@angular/http/src/backends/jsonp_backend';

/*
* Tree factory creates a list of "saplings". Saplings are a buffer between Tree Objects
* and JSON data. This list is then sent to the component for instantiation
*/


@Injectable()
export class TreeFactory 
{
   private  saplings : Array<sapling> = [];
    constructor( public http: Http)
    { 
    
        
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
    getJSON() : Observable<any>
    {
       return this.http.get('http://botaniclash.us-west-2.elasticbeanstalk.com/botani.php') //'http://localhost/botani.php')       
            .map(res => 
                {
                    return res.json()
                });
    }
}
//interface serves as a buffer between raw JSON and Tree objects
export interface sapling
{
    lat : number,
    long : number,
    decs : string[],
    special : string[],
    hidden : boolean
}