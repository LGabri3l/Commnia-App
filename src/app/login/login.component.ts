import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import {ServiceService} from 'src/app/Shared/service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm!: FormGroup;
  
  constructor(private formBulder: FormBuilder, private service: ServiceService, private router: Router) { }

  UserList: any=[];

  ngOnInit(): void {
    this.loginForm = this.formBulder.group(
      {
        email:['',Validators.required],
        password:['',Validators.required]
      })
  }

  login()
  {
    this.service.getUserList().subscribe(res=>{
      this.UserList = res;
      const user= res.find((u:any)=>{
        return u.UserName === this.loginForm.value.email && u.UserPassword === this.loginForm.value.password
      });
      if (user)
        {
          alert("Wellcome :)");
          this.loginForm.reset();
          this.router.navigate(['dashboard']);
        }
      else
      {
        alert("User not found");
      }
    },err=>{
      alert("Something went wrong");
    })
  }

}
