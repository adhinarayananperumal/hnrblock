import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdComponent } from './prod/prod.component';
import { BrowserModule } from '@angular/platform-browser';
import { CategoryComponent } from './category/category.component';



@NgModule({
  declarations: [
    ProdComponent,
    CategoryComponent
  ],
  imports: [
    BrowserModule,
    
  ],
  bootstrap:[ProdComponent]
})
export class ProductModule { }
