/*
  Copyright 2018 Esri
  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at
    http://www.apache.org/licenses/LICENSE-2.0
  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
*/

import { Component, OnInit, ViewChild, ElementRef, Input, Output, EventEmitter } from '@angular/core';
import { loadModules } from 'esri-loader';
import esri = __esri;
import { viewAttached } from '@angular/core/src/render3/instructions';


@Component({
  selector: 'app-esri-map',
  templateUrl: './esri-map.component.html',
  styleUrls: ['./esri-map.component.css']
})

export class EsriMapComponent implements OnInit {

  // Private vars with default values for the view of the map
  private _zoom = 11.4;
  private _center = [-118.2437, 34.0522];
  private _basemap = 'streets';

  @Input()
  set zoom(zoom: number) {
    this._zoom = zoom;
  }

  get zoom(): number {
    return this._zoom;
  }

  @Input()
  set center(center: any[]) {
    this._center = center;
  }

  get center(): any[] {
    return this._center;
  }

  @Input()
  set basemap(basemap: string) {
    this._basemap = basemap;
  }

  get basemap(): string {
    return this._basemap;
  }

  @Output() mapLoaded = new EventEmitter<boolean>();

  // this is needed to be able to create the MapView at the DOM element in this component
  @ViewChild('mapViewNode') private mapViewEl: ElementRef;

  constructor() { }

  public ngOnInit() {

    // required modules to import
    loadModules([
      'esri/Map',
      'esri/views/MapView',
      'esri/layers/Layer',
      'esri/layers/FeatureLayer',
      
      'dojo/domReady!'
      
      
    ])

    // type the desired code with using the modules from on top

      .then(([EsriMap, EsriMapView, Layer, FeatureLayer]) => {


        // Set type for Map constructor properties
        const mapProperties: esri.MapProperties = {
          //basemap: this._basemap
          basemap: "topo-vector" // the nicer blue map
        };

        let map: esri.Map = new EsriMap(mapProperties);

      
        // Set type for MapView constructor properties
        const mapViewProperties: esri.MapViewProperties = {
          container: this.mapViewEl.nativeElement,
          center: this._center,
          zoom: this._zoom,
          map: map
        };

        let mapView: esri.MapView = new EsriMapView(mapViewProperties);

        mapView.when(() => {
          // All the resources in the MapView and the map have loaded. Now execute additional processes
          this.mapLoaded.emit(true);
        }, err => {
          console.error(err);
        });

        // centerline data loaded from past created layer 
        let centerLineData = Layer.fromPortalItem({
          portalItem: {id:"d3cd48afaacd4913b923fd98c6591276"}
        });
        centerLineData.then(function(layer){
          map.add(layer);
        })

        // mouse event settings
        mapView.on("pointer-move", eventHandler);
        mapView.on("pointer-down", eventHandler);

        function eventHandler(event){
          mapView.hitTest(event).then(getGraphics);
        }

        function getGraphics(response){
          console.log(response.results)

          if(response.results.length)
          {
            
             var graphic = response.results.filter(function(result){
               return result.graphic.layer === centerLineData;
             })[0].graphic;

             //console.log(graphic)
             
            
          }

          console.log("HELLO")
          
        }
        
      


      })
      .catch(err => {
        console.error(err);
      });
  } // ngOnInit
}
