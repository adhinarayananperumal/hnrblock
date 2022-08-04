import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProdService {

  public prodList: Product[] = [];


  constructor() { }

addProduct(productName: string, productPrice: string){
  this.prodList.push(new Product(productName,productPrice))
}

removeProduct(index: number){
  this.prodList.splice(index, 1);
}



}
