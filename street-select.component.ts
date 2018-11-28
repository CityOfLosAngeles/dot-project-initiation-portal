import { Component, OnInit, Input} from '@angular/core';
import { NewProjectService } from '../new-project.service';

@Component({
  selector: 'app-street-select',
  templateUrl: './street-select.component.html',
  styleUrls: ['./street-select.component.css']
})
export class StreetSelectComponent implements OnInit {

  public project = { title: '', leadName: '', leadEmail: '', leadPhone:'', leadTitle:'', leadDivision:'', leadSupervisior:'',
          category: '', modal:'', prelimStart: '', prelimEnd: '', engageStart: '', engageEnd: '', developStart: '',
          developEnd: '', designStart: '', designEnd: '', bidAwardStart: '', bidAwardEnd: '', implementStart: '',
          implementEnd: '', level:"", background:"", statement:"", goals:"", description:"", primaryPS:"", cs1:"",
          cs2:"", boundaries:"", councilDistricts:"", stakeholders:"", agencies:"", lifeCyclePhase:"", active:"",
          funded:"", costEstimate:"", budget:"", fundingSource:"", potentialSource:"", attemptedSource:"",
          futureSource:"", constructionMethods:"", milestones:"",
}

  constructor(private _newProjectService: NewProjectService) { }

  



  ngOnInit() {
    // on inititation of this component, grab the data from the service class and assign it to this component so that it can be used
    this.project = this._newProjectService.getData();
   
   
  }

  onClick(){
   
  }

  
}
