import { Component, OnInit } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-prod',
  templateUrl: './prod.component.html',
  styleUrls: ['./prod.component.css']
})
export class ProdComponent implements OnInit {


  moduleDet = "Product Management";

  products = ['Samsung', 'Apple', 'Nokia.'];

  prodlist: Array<Product> = [
    new Product("Mens Wear", 5),
    new Product("Sports Wear", 4),
    new Product(" shoes", 3),
    new Product("Bat Cover", 8),
    new Product("FootBall Wear", 1)
  ];

  constructor() { }

  ngOnInit(): void {
  }


  displayProductDetails() {
    alert("Product details")
  }

  registerCustomer(){
    alert("Register Customer..................")
  }


}
