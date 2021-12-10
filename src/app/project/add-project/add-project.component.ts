import { Component, OnInit,Input } from '@angular/core';
import {ServiceService} from 'src/app/Shared/service.service';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.scss']
})
export class AddProjectComponent implements OnInit {

  constructor(private service: ServiceService,private formBulder: FormBuilder) { }

  public addProjectForm!: FormGroup;
  
  @Input() project:any;
  IdProject!: string;
  Name!: string;
  Address!: string;
  Town!: string;
  Council!: string;
  State!: string;
  ApproximateValue!: string;
  Construction!: string;
  StartDate!: string;
  ExpectedConstructionEndDate!: string;
  IdBuilder!: string;
  AccountName!: string;

  

  ngOnInit(): void {
    this.IdProject=this.project.IdProject;
    this.Name=this.project.Name;
    this.Address=this.project.Address;
    this.Town=this.project.Town;
    this.Council=this.project.Council;
    this.State=this.project.State;
    this.ApproximateValue=this.project.ApproximateValue;
    this.Construction=this.project.Construction;
    this.StartDate=this.project.StartDate;
    this.ExpectedConstructionEndDate=this.project.ExpectedConstructionEndDate;
    this.IdBuilder=this.project.IdBuilder;   
    this.AccountName=this.project.AccountName;    

    this.addProjectForm = this.formBulder.group(
      {
        Name:['',Validators.required],
        Address:['',Validators.required],
        Town:['',Validators.required],
        Council:['',Validators.required],
        State:['',Validators.required],
        ApproximateValue:['',Validators.required],
        Construction:['',Validators.required],
        StartDate:['',Validators.required],
        ExpectedConstructionEndDate:['',Validators.required],        
        AccountName:['',Validators.required]
      })


  }

  addProject()
  {
    var val ={IdProject:this.IdProject,
              Name:this.Name,
              Address:this.Address,
              Town:this.Town,
              Council:this.Council,
              State:this.State,
              ApproximateValue:this.ApproximateValue,
              Construction:this.Construction,
              StartDate:this.StartDate,
              ExpectedConstructionEndDate:this.ExpectedConstructionEndDate,
              IdBuilder:this.IdBuilder};
      this.service.addProject(val).subscribe(res=>{
      alert(res.toString());
      });
  }

  updateProject()
  {
    var val ={IdProject:this.IdProject,
              Name:this.Name,
              Address:this.Address,
              Town:this.Town,
              Council:this.Council,
              State:this.State,
              ApproximateValue:this.ApproximateValue,
              Construction:this.Construction,
              StartDate:this.StartDate,
              ExpectedConstructionEndDate:this.ExpectedConstructionEndDate,
              IdBuilder:this.IdBuilder,
              AccountName:this.AccountName};
              
      this.service.updateProject(val).subscribe((res)=>{
      alert(res.toString());
      });
  }


}
