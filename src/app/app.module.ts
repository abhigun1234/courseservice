import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import {HttpClientModule} from '@angular/common/http';
import { CourselistComponent } from './courselist/courselist.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { EmployeedetailsComponent } from './employeedetails/employeedetails.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourselistComponent,
    CourseDetailsComponent,
    EmployeelistComponent,
    EmployeedetailsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
