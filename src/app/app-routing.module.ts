import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BuilderComponent } from './builder/builder.component';
import { ProjectComponent } from './project/project.component';
import { LoginComponent } from './login/login.component';
import { DashBoardComponent } from './dash-board/dash-board.component';

const routes: Routes = [

{path:'builder', component:BuilderComponent},
{path:'project', component:ProjectComponent},
{path:'login', component:LoginComponent},
{path:'dashboard', component:DashBoardComponent},
{path:'',redirectTo:'login',pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
