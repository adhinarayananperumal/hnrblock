import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  apiUrl ="http://localhost:3000/employees"

  empList: any = [];

  constructor(private http: HttpClient) {
  }

  registerNewEmployee(employee: any): Observable<any> {
    return this.http.post(this.apiUrl, employee);
  }

  updateEmployee(employee: any): Observable<any> {
    console.log("Service......" + employee.age);
    return this.http.put('http://localhost:3000/employees/'+employee.id, employee);
  }


  deleteEmployee(id: any): Observable<any> {
    console.log("service  detelete called");
    return this.http.delete('http://localhost:3000/employees/'+id);
  }


  getEmployee(id: any): Observable<any> {
    console.log("service  getEmployeeList called");
    return this.http.get('http://localhost:3000/employees/'+id);
  }



  getEmployeeList(): Observable<any> {
    console.log("service  getEmployeeList called");
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
