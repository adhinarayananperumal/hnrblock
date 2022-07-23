import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { EmployeeService } from 'src/app/service/employee/employee.service';
import { Employee } from '../employee';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {

  employee: Employee = {
    employeeName: '',
    id: '',
    age: 0,
    gender: ''
  };

  constructor(private route: ActivatedRoute, private employeeService: EmployeeService) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.employeeService.getEmployee(id).subscribe((data: Employee) => {
      console.log("Display employee list....." + data);
      this.employee = data;
      console.log(this.employee);
    });
  }

  updateEmployeeDetails(): void {
    console.log(this.employee);
    this.employeeService.updateEmployee(this.employee).subscribe((data) => {
      console.log("Employee updated successfully....");
    });
  }
}

