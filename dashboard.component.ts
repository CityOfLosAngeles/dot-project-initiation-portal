import { Component, OnInit } from '@angular/core';
import { loadModules } from 'esri-loader';
import esri = __esri;


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public newProject : boolean; // token to determine whether or not to display new project component 

  constructor() { }

  // on cick from NEW PROJECT button
  onClick(){
    this.newProject = true;
    
  }

  ngOnInit() {
    this.newProject = null;
    


    loadModules([
      "dojo/dom", "dojo/on",
      "esri/tasks/QueryTask", "dojo/domReady!",

     // "esri/tasks/query"
    ])

      /*
      .then(([dom, on, Query, QueryTask]) => {
        let queryTask = new QueryTask("https://services5.arcgis.com/7nsPwEMP38bSkCjy/ArcGIS/rest/services/MIP_Project_Template/FeatureServer/0/query")
        let query = new Query();
        query.returnGeometry = false;
        query.outFields =  ["MIP_ID", "Title", "Category"];

        //on(dom.byId("execute"), "click", execute);

        
        function execute(){
          queryTask.execute(query, showResults);
          
        }

        function showResults(){
          console.log("helloworld")

        }
        

      })
      */


  }

}
