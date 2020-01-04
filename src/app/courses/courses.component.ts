import { Component, OnInit } from '@angular/core';
import {CourseService} from '..//course.service'
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  courses
  constructor(private course :CourseService) { }

  ngOnInit() {
  }
  public getCourse()
  {
    this.course.getCourse().subscribe(res=>{

      console.log(res)
      this.courses=res['courseDetails']
    })

  }

}
