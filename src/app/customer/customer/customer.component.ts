import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  title = 'customer';

  constructor() { 
  }

  ngOnInit(): void {
  }

  @Input()
  get name(): string { return this._name; }
  set name(name: string) {
    console.log("from customer s//etter...........");
    this._name = (name && name.trim()) || '<no name set>';
  }

  private _name = 'Rajesh Kumar';


}
