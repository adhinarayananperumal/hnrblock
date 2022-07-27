import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cus } from './cus';

@Injectable({
  providedIn: 'root'
})
export class CusService {

  constructor(private http: HttpClient) { }

  saveCustomer(cus: Cus): void {
    console.log("Cus service save Customer method called service Called........................")
    console.log(cus.email);
    console.log(cus.name);
    console.log(cus.message);
    this.http.post("http://localhost:3000/cusdet", cus).subscribe(() => console.log("saved successfully"));

  }



}
