import { Component, OnInit } from '@angular/core';
import * as data from '../../application/product-list.json';


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
  productList: any
  receiptList: any
  ngOnInit() {
    this.productList = this.json_data.default
  }

  activeModal: boolean = false
  showModal() {
    this.activeModal = true
  }
  closeModal() {
    this.activeModal = false
  }
}
