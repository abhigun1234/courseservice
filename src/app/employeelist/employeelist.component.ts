import { Component, OnInit } from '@angular/core';
import {EmpService} from '..//emp.service'
@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {
  employeeDetails=[]
  constructor(private emService:EmpService) { }

  ngOnInit() {
  }

  getEmpData(){

    this.employeeDetails=this.emService.getEmpData()
  }

}
