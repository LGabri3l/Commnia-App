import { Component, Input, OnInit } from '@angular/core';
import {ServiceService} from 'src/app/Shared/service.service';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-builder',
  templateUrl: './add-builder.component.html',
  styleUrls: ['./add-builder.component.scss']
})
export class AddBuilderComponent implements OnInit {

  constructor(private service: ServiceService,private formBulder: FormBuilder) { }

  public addBuilderForm!: FormGroup;

  @Input() builder:any;
  IdBuilder!: string;
  AccountName!:string;
  ContactName!: string;
  Address!: string;
  ABN!: string;

  ngOnInit(): void {
    this.IdBuilder=this.builder.IdBuilder;
    this.AccountName=this.builder.AccountName;
    this.ABN=this.builder.ABN;
    this.Address=this.builder.Address;
    this.ContactName=this.builder.ContactName;

    this.addBuilderForm = this.formBulder.group(
      {
        AccountName:['',Validators.required],
        ContactName:['',Validators.required],
        Address:['',Validators.required],
        ABN:['',Validators.required]
      })
  }

  addBuilder()
  {
    var val ={IdBuilder:this.IdBuilder,
              AccountName:this.AccountName,
              ABN:this.ABN,
              Address:this.Address,
              ContactName:this.ContactName};
    this.service.addBuilder(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  updateBuilder()
  {
    var val ={IdBuilder:this.IdBuilder,
              AccountName:this.AccountName,
              ABN:this.ABN,
              Address:this.Address,
              ContactName:this.ContactName};
    this.service.updateBuilder(val).subscribe((res)=>{
    alert("Done");
});
  }
}
