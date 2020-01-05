import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class CourseService {
  //coursDetails=[{id:'1',name:"python",description:'python ds'},{id:'2',name:"java",description:'java ds'}]
  constructor(private httpClient:HttpClient) { }
  public getCourseDetails()
  {

     return this.httpClient.get('https://dronaonlineadmin.herokuapp.com/courses/')
    //return this.coursDetails;

  }
}
