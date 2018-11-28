import { Component, OnInit} from '@angular/core';
import { NewProjectService } from '../new-project.service';


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

  public lifeCyclePhase=["1) Project Initiation/Capacity Building + Empowerment",
                        "2) Conceptual Design/Civic Engagement + Community Based Development",
                        "3) Technical Feasibilitiy/Community-Based Learning",
                        "4) Project Design + Funding/Public Information",
                        "5) Final Design + Procurement/Outreach + Public Engagement",
                        "6) Installation/Outreach + Social Change",
                        "7) Project Evaluation/Reflection"]   
  
  public active=["Active: lead is actively working",
                "Inactive: lead is not actively working to deliver"]

  public funded=["Fully Funded: total costs are fully funded",
                  "Partially Funded: There are funding gaps",
                  "Unfunded: No current funding"]

  public project = { title: '', leadName: '', leadEmail: '', leadPhone:'', leadTitle:'', leadDivision:'', leadSupervisior:'',
                    category: '', modal:'', prelimStart: '', prelimEnd: '', engageStart: '', engageEnd: '', developStart: '',
                    developEnd: '', designStart: '', designEnd: '', bidAwardStart: '', bidAwardEnd: '', implementStart: '',
                    implementEnd: '', level:"", background:"", statement:"", goals:"", description:"", primaryPS:"", cs1:"",
                    cs2:"", boundaries:"", councilDistricts:"", stakeholders:"", agencies:"", lifeCyclePhase:"", active:"",
                    funded:"", costEstimate:"", budget:"", fundingSource:"", potentialSource:"", attemptedSource:"",
                    futureSource:"", constructionMethods:"", milestones:"",
                  }
                  
  constructor(private _newProjectService: NewProjectService) {}

 
  // assign variable from html to variable in here
  // there might be a better way to do this, polish later
  addCostEstimate(cost: string)
  {
    this.project.costEstimate= cost;
  }

  addBudget(budget:string){
    this.project.budget= budget;
  }

  addFundingSource(source: string)
  {
    this.project.fundingSource= source;
  }

  addPotential(source:string){
    this.project.potentialSource= source;
  }
  
  addAttempted(source:string){
    this.project.attemptedSource= source;
  }

  addFuture(source:string){
    this.project.futureSource= source;
  }
  
  addConstructionMethods(methods:string){
    this.project.constructionMethods= methods;
  }

  addMilestones(milestones: string)
  {
    this.project.milestones= milestones;
  }

  addActive(active: string)
  {
    this.project.active= active;
  }

  addFunded(funded:string){
    this.project.funded= funded;
  }

  addLifeCyclePhase(lifeCyclePhase: string)
  {
    this.project.lifeCyclePhase= lifeCyclePhase;
  }

  addStakeholders(stakeholders:string){
    this.project.stakeholders= stakeholders;
  }
  
  addAgencies(agencies:string){
    this.project.agencies= agencies;
  }

  addCouncilDistricts(councilDistrict:string){
    this.project.councilDistricts= councilDistrict;
  }
  
  addBoundaries(boundary:string){
    this.project.boundaries= boundary;
  }

  addCS1(cs1:string){
    this.project.cs1 = cs1;
  }

  addCS2(cs2:string){
    this.project.cs2 = cs2;
  }

  addPrimaryPS(ps:string){
    this.project.primaryPS = ps;
  }

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
    this._newProjectService.setData(this.project);
    
    
  }

  ngOnInit() {
    
  }

}
