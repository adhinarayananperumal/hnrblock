import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/service/employee/employee.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.css']
})
export class EmployeeDashboardComponent implements OnInit {

  constructor(private employeeService: EmployeeService) {
  }

  empList: Employee[] = [];


  ngOnInit(): void {
    console.log("ng on init is called emp comp");
    this.employeeService.getEmployeeList().subscribe((data: Employee[]) => {
      console.log("Display employee list....." + data);
      this.empList = data;
    });

    console.log("Component end")
  }


  deleteEmployee(id: string): void {
    console.log("delete employee method called....." + id);
    this.employeeService.deleteEmployee(id).subscribe(() => {
      console.log("Employee deleted successfully .....");

      this.employeeService.getEmployeeList().subscribe((data: Employee[]) => {
        console.log("Display employee list....." + data);
        this.empList = data;
      });
  
    });



  }




}
