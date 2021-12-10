import { Component, OnInit } from '@angular/core';
import {ServiceService} from 'src/app/Shared/service.service';

@Component({
  selector: 'app-show-project',
  templateUrl: './show-project.component.html',
  styleUrls: ['./show-project.component.scss']
})
export class ShowProjectComponent implements OnInit {

  constructor(private service: ServiceService) { }

  ProjectList: any=[];

  project:any;
  ModalTitle!: string;
  ActiveteAddEditProjectComp: boolean=false;

  ngOnInit(): void {
    this.refreshProject();
  }

  addClick()
  {
    this.project={
      IdProject:0,
      Name:"",
      Address:"",
      Town:"",
      Council:"",
      State:"",
      ApproximateValue:"",
      Construction:"",
      StartDate:"",
      ExpectedConstructionEndDate:"",
      IdBuilder:""
    }
    this.ModalTitle="Add New Porject";
    this.ActiveteAddEditProjectComp=true;
    this.refreshProject();
  }

  editClick(item: any)
  {    
    this.project=item;
    this.ModalTitle="Edit Project";
    this.ActiveteAddEditProjectComp=true;
    
  }

  closeClick()
  {
    this.ActiveteAddEditProjectComp=false;
    this.refreshProject();
  }

  refreshProject()
  {
    this.service.getProjectList().subscribe(data=>{
    this.ProjectList=data;
    });
}
}