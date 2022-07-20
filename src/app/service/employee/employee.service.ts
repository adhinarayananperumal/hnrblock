import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {



  empList: any = [];

  constructor(private http: HttpClient) {
  }

  getEmployeeList(): Observable<any> {
    console.log("service get getEmployeeList");
    return this.http.get('http://localhost:3000/employees');
  }

  /*  empList: Array<Employee> = [
     new Employee("Ravisss", "101HNR", 21, "M"),
     new Employee("Ravi", "101HNR", 23, "M"),
     new Employee("Sudha", "101HNR", 22, "F"),
     new Employee("Ravi", "101HNR", 23, "M"),
     new Employee("Shanthi", "101HNR", 24, "F")
   ];
  */

}
