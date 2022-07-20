import { Injectable } from '@angular/core';
import { Employee } from 'src/app/employee/employee';
import { EmployeeRegistrationComponent } from 'src/app/employee/employee-registration/employee-registration.component';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  empList: Array<Employee> = [
    new Employee("Ravisss", "101HNR", 21, "M"),
    new Employee("Ravi", "101HNR", 23, "M"),
    new Employee("Sudha", "101HNR", 22, "F"),
    new Employee("Ravi", "101HNR", 23, "M"),
    new Employee("Shanthi", "101HNR", 24, "F")
  ];

  getEmployeeList(): Array<Employee> {
    return this.empList;
  }

}
