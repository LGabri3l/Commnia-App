import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import {ServiceService} from './Shared/service.service';
import { BuilderComponent } from './builder/builder.component';
import { ProjectComponent } from './project/project.component';
import { ShowBuilderComponent } from './builder/show-builder/show-builder.component';
import { AddBuilderComponent } from './builder/add-builder/add-builder.component';
import { ShowProjectComponent } from './project/show-project/show-project.component';
import { AddProjectComponent } from './project/add-project/add-project.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    DashBoardComponent,
    BuilderComponent,
    ProjectComponent,
    ShowBuilderComponent,
    AddBuilderComponent,
    ShowProjectComponent,
    AddProjectComponent,
    LoginComponent
  ],
  imports: [
    
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
    
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
