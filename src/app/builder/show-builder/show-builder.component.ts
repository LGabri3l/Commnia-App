import { Component, OnInit } from '@angular/core';
import {ServiceService} from 'src/app/Shared/service.service';


@Component({
  selector: 'app-show-builder',
  templateUrl: './show-builder.component.html',
  styleUrls: ['./show-builder.component.scss']
})
export class ShowBuilderComponent implements OnInit {

  constructor(private service: ServiceService) { }

  BuilderList: any=[];

  builder:any;
  ModalTitle!: string;
  ActiveteAddEditBuilderComp: boolean=false;

  AccountNameFilter:string= "";
  BuilderListWithoutFilter: any=[];

  ngOnInit(): void {
    this.refreshBuilder();
  }

  addClick()
  {
    this.builder={
      IdBuilder:0,
      AccountName:"",
      ContactName:"",
      Address:"",
      ABN:""
    }
    this.ModalTitle="Add New Builder";
    this.ActiveteAddEditBuilderComp=true;
    this.refreshBuilder();
  }

  editClick(item: any)
  {    
    this.builder=item;
    this.ModalTitle="Edit Builder";
    this.ActiveteAddEditBuilderComp=true;
  }

  closeClick()
  {
    this.ActiveteAddEditBuilderComp=false;
    this.refreshBuilder();
  }

  refreshBuilder()
  {
    this.service.getBuilderList().subscribe(data=>{
    this.BuilderList=data;   
    this.BuilderListWithoutFilter=data;
    });
        
  }

  filterFN()
  {   
    if (this.AccountNameFilter !== null || this.AccountNameFilter !== "")
      {
        this.BuilderList = this.BuilderListWithoutFilter.filter((el:any)=>el.AccountName.toString().toLowerCase().includes(this.AccountNameFilter.toString().toLowerCase()));
      }
    else 
      {
        this.BuilderList = this.BuilderListWithoutFilter;
      }  
  }
}


