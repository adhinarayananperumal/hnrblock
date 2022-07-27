import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Cus } from '../cus';
import { CusService } from '../cus.service';

@Component({
  selector: 'app-cus',
  templateUrl: './cus.component.html',
  styleUrls: ['./cus.component.css']
})
export class CusComponent implements OnInit {

  myForm: FormGroup;
  cus: Cus = new Cus();

  constructor(private fb: FormBuilder, private cs: CusService,private router: Router) {
    this.myForm = this.fb.group({
      name: ['Sammy', Validators.required],
      email: ['ss@gmail.com', [Validators.required, Validators.email]],
      message: ['customer..', [Validators.required, Validators.minLength(15)]],
    });
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  saveCustomerDet(form: FormGroup) {
    console.log('Valid?', form.valid); // true or false
    console.log('Name', form.value.name);
    console.log('Email', form.value.email);
    console.log('Message', form.value.message);

    this.cus.email = form.value.email;
    this.cus.name = form.value.name
    this.cus.message = form.value.message

    this.cs.saveCustomer(this.cus);
    console.log("navigation");
    this.router.navigate(['../cusDashboard']);
    console.log("navigationlllllllllllllll");


  }

}
