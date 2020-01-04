import { Component, OnInit } from '@angular/core';
import {CourseService} from '..//service/course.service'
@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {
  courselist
  constructor(private courses:CourseService) { }

  ngOnInit() {
  }

  getCourseList()
  {

    this.courselist=this.courses.getCourseDetails()
  }

}
