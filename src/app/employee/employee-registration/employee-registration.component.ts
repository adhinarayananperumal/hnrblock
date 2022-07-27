import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from 'src/app/service/employee/employee.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-employee-registration',
  templateUrl: './employee-registration.component.html',
  styleUrls: ['./employee-registration.component.css']
})
export class EmployeeRegistrationComponent  {

  constructor(private employeeService: EmployeeService,private route: ActivatedRoute) {}

    employeeRegistration(employeeForm1: { value: any; }) {
      console.log(employeeForm1.value);

      this.employeeService.registerNewEmployee(employeeForm1.value).subscribe((data) => {
        console.log("Employee saved successfully....");
      });

      
    }
  }
