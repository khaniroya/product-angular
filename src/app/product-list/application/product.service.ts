import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductModel } from './product-model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  setValueForm(addProduct: NgForm, data: ProductModel) {
    addProduct?.setValue({
      name: data.name,
      year: data.year,
      category: data.category,
      color: data.color,
      weight: data.weight
    });
  }
}
