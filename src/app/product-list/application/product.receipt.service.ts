import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ReceiptModel } from './product-model';

@Injectable({
  providedIn: 'root'
})
export class ProductReceiptService {

  constructor() { }

  setValueForm(reciptProduct: NgForm, data: ReceiptModel) {
    reciptProduct?.setValue({
      name: data.name,
      number: data.number
    });
  }
}
