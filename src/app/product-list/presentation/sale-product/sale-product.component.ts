import { Component, OnInit } from '@angular/core';
import * as data from '../../application/product-list.json';

@Component({
  selector: 'app-sale-product',
  templateUrl: './sale-product.component.html',
  styleUrls: ['./sale-product.component.scss']
})
export class SaleProductComponent implements OnInit {

  constructor() {
    this.json_data = data as any
  }
  json_data: any
  productList: any
  saleList: any
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
