import { Component, OnInit } from '@angular/core';
import * as data from '../../application/sale-product.json';
import { ReceiptOrSaleModel } from '../../application/product-model';

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
  saleList: ReceiptOrSaleModel[] = []
  ngOnInit() {
    this.saleList = this.json_data.default
  }

  activeModal: boolean = false
  showModal() {
    this.activeModal = true
  }

  closeModal() {
    this.activeModal = false
  }

}
