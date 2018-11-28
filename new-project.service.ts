import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewProjectService {

  constructor() { }

  public project = {
    title: '', leadName: '', leadEmail: '', leadPhone:'', leadTitle:'', leadDivision:'', leadSupervisior:'',
    category: '', modal:'', prelimStart: '', prelimEnd: '', engageStart: '', engageEnd: '', developStart: '',
    developEnd: '', designStart: '', designEnd: '', bidAwardStart: '', bidAwardEnd: '', implementStart: '',
    implementEnd: '', level:"", background:"", statement:"", goals:"", description:"", primaryPS:"", cs1:"",
    cs2:"", boundaries:"", councilDistricts:"", stakeholders:"", agencies:"", lifeCyclePhase:"", active:"",
    funded:"", costEstimate:"", budget:"", fundingSource:"", potentialSource:"", attemptedSource:"",
    futureSource:"", constructionMethods:"", milestones:"",

  }

  
  public street = {assetId:"", name: ""}
  

  // gets the data from new-project component and sets it in this service class
  setData(project){
    this.project = project
    
    
  }

  setStreet(street){
    this.street = street;

     console.log(this.street.assetId)
     console.log(this.street.name)
  
  }

  getStreet()
  {
    return this.street;
  }

  // returns the data from this service class
  getData(){
    return this.project;
  }

  
}
