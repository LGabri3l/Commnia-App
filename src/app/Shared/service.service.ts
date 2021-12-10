import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class ServiceService {

   readonly APIUrl="https://localhost:44319/api"

   private items: any={ID:0,Builder:""};

  constructor(private http:HttpClient) { }

  //Calling Builder API

  getAllBuilderList():Observable<any[]>
  {
    return this.http.get<any>(this.APIUrl+'/builder/Builder');
  }
  getBuilderList():Observable<any[]>
  {
    return this.http.get<any>(this.APIUrl+'/builder/GetAllBuilders');
  }
  
  addBuilder(val:any)
  {
    return this.http.post(this.APIUrl+'/builder',val);
  }

  updateBuilder(val:any)
  {
    return this.http.put(this.APIUrl+'/builder',val)
  }

  //Calling Project API
  getProjectList():Observable<any[]>
  {
    return this.http.get<any>(this.APIUrl+'/project/GetProjectForBuilder')
  }
  
  addProject(val:any)
  {
    return this.http.post(this.APIUrl+'/project',val)
  }
  
  updateProject(val:any)
  {
    return this.http.put(this.APIUrl+'/project',val)
  }

   //Calling Login API

   getUserList():Observable<any[]>
   {
     return this.http.get<any>(this.APIUrl+'/AppTrackUser')
   }

}
