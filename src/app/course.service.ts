import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http:HttpClient) {


   }

  public getCourse()
  {
   return this.http.get('https://dronaonlineadmin.herokuapp.com/courses/')

  }
}
