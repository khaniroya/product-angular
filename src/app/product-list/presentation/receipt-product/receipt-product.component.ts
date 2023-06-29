import { Component, OnInit } from '@angular/core';
import * as data from '../../application/receipt-product.json';
import { ReceiptOrSaleModel } from '../../application/product-model';


@Component({
  selector: 'app-receipt-product',
  templateUrl: './receipt-product.component.html',
  styleUrls: ['./receipt-product.component.scss']
})
export class ReceiptProductComponent implements OnInit {

  constructor() {
    this.json_data = data as any
  }
  json_data: any
  receiptList: ReceiptOrSaleModel[] = []
  ngOnInit() {
    this.receiptList = this.json_data.default
  }

  activeModal: boolean = false
  showModal() {
    this.activeModal = true
  }
  closeModal() {
    this.activeModal = false
  }
}
