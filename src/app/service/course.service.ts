import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  coursDetails=[{id:'1',name:"python",description:'python ds'},{id:'2',name:"java",description:'java ds'}]
  constructor() { }
  public getCourseDetails()
  {


    return this.coursDetails;

  }
}
