import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpService {
  employeeDetails=[{id:1,name:"abhi",email:"abhi@gmail.com"},{id:2,name:"ravi",email:"ravi@gmail.com"},{id:3,name:"raj",email:"raj@gmail.com"}]
  constructor() { }

  public getEmpData(){

    return this.employeeDetails
  }
}
