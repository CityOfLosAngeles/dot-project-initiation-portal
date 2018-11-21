import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css']
})
export class NewProjectComponent implements OnInit {
  public message = "HELLO WORLD";

  public category = ["Bicycle Facilities", "Complete Streets", "Demand Management",
                      "Intelligent Transportation Systems & Technology", "Modal Connectivity",
                      "Pedestrain Facilities","Street Efficiency", "Transit"]
  public modal = ["Bicycle & personal mobility device users", "Goods movement vehicles",
                  "Pedestrians & wheelchair users", "Personal Vehicles", "Transit Service","Other"]

  public level = ["Level 1: Minor scope and changes to street; public can easily recognize benefits and how to use",
                  "Level 2: Suite of minor changes, or includes one component that will require education for use",
                  "Level 3: Major roadway reconfiguration or network level intervention"]

  public project = {
    title: '',
    leadName: '',
    leadEmail: '',
    leadPhone:'',
    leadTitle:'',
    leadDivision:'',
    leadSupervisior:'',
    category: '',
    modal:'',
    prelimStart: '',
    prelimEnd: '',
    engageStart: '',
    engageEnd: '',
    developStart: '',
    developEnd: '',
    designStart: '',
    designEnd: '',
    bidAwardStart: '',
    bidAwardEnd: '',
    implementStart: '',
    implementEnd: '',
    level:"",
    background:"",
    statement:"",
    goals:"",
    description:""
   

  }
  constructor() {}

 
  
  // assign variable from html to variable in here
  // there might be a better way to do this, polish later
  addTitle(title: string)
  {
    this.project.title = title;
  }

  addLeadName(name: string)
  {
    this.project.leadName = name;
  }

  addLeadEmail(email: string)
  {
    this.project.leadEmail = email;
  }

  addLeadDivision(division: string)
  {
    this.project.leadDivision = division;
  }

  addLeadSupervisor(supervisor: string)
  {
    this.project.leadSupervisior = supervisor;
  }

  addLeadPhone(phone: string)
  {
    this.project.leadPhone = phone;
  }

  addLeadTitle(title: string)
  {
    this.project.leadTitle = title;
  }

  addPrelimStart(event)
  {
    // need to format this to look cleaner. problem might be because event is not a string
    this.project.prelimStart = event;
  }

  addPrelimEnd(event)
  {
    // needs formatting 
    this.project.prelimEnd = event;
  }

  addEngageStart(event)
  {
    // need to format this to look cleaner. problem might be because event is not a string
    this.project.engageStart = event;
  }

  addEngageEnd(event)
  {
    // needs formatting 
    this.project.engageEnd = event;
  }

  addDevelopStart(event)
  {
    // need to format this to look cleaner. problem might be because event is not a string
    this.project.developStart = event;
  }

  addDevelopEnd(event)
  {
    // needs formatting 
    this.project.developEnd = event;
  }

  addDesignStart(event)
  {
    // need to format this to look cleaner. problem might be because event is not a string
    this.project.designStart = event;
  }

  addDesignEnd(event)
  {
    // needs formatting 
    this.project.designEnd = event;
  }

  addBidAwardStart(event)
  {
    // need to format this to look cleaner. problem might be because event is not a string
    this.project.bidAwardStart = event;
  }

  addBidAwardEnd(event)
  {
    // needs formatting 
    this.project.bidAwardEnd = event;
  }

  addImplementStart(event)
  {
    // need to format this to look cleaner. problem might be because event is not a string
    this.project.implementStart = event;
  }

  addImplementEnd(event)
  {
    // needs formatting 
    this.project.implementEnd = event;
  }

  addBackground(background: string)
  {
    this.project.background = background;
  }

  addStatement(statement: string)
  {
    this.project.statement = statement;
  }

  addGoals(goals: string)
  {
    this.project.goals = goals;
  }

  addDescription(description: string)
  {
    this.project.description = description;
  }

  

  onClick(){
    console.log("TITLE - " + this.project.title);
    console.log("LEAD NAME - " + this.project.leadName);
    console.log("CATEGORY - " + this.project.category);
    console.log("MODAL - " + this.project.modal);
    console.log("PRELIM START - " + this.project.prelimStart);
    console.log("PRELIM END - " + this.project.prelimEnd);
    console.log(this.project.engageStart);
    console.log(this.project.engageEnd);
    console.log(this.project.developStart);
    console.log(this.project.developEnd);
    
    
    
  }

  ngOnInit() {
    
  }

}
