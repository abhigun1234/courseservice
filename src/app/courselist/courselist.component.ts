import { Component, OnInit } from '@angular/core';
import {CourseService} from '..//service/course.service'
@Component({
  selector: 'app-courselist',
  templateUrl: './courselist.component.html',
  styleUrls: ['./courselist.component.css']
})
export class CourselistComponent implements OnInit {
   courselist
  constructor(private course:CourseService) { }

  ngOnInit() {
  }

  public getCourseList()
  {

   this.courselist =this.course.getCourseDetails()
  }


}
