import { Component, OnInit } from '@angular/core';
import {EmpService} from '..//emp.service'
@Component({
  selector: 'app-employeedetails',
  templateUrl: './employeedetails.component.html',
  styleUrls: ['./employeedetails.component.css']
})
export class EmployeedetailsComponent implements OnInit {
  employeeDetails=[]
  constructor(private empService :EmpService) { }

  ngOnInit() {
  }

  getEmpDetails(){
    alert("hello")

    this.employeeDetails=this.empService.getEmpData()
  }

}
