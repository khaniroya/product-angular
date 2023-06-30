import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductModel, ReceiptOrSaleModel } from './product-model';

@Injectable({
  providedIn: 'root'
})
export class ProductReceiptService {

  constructor() { }

  setValueForm(reciptProduct: NgForm, data: ReceiptOrSaleModel) {
    reciptProduct?.setValue({
      name: data.name,
      number: data.number
    });
  }
}
