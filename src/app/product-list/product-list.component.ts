import { Component, OnInit } from '@angular/core';
import * as data from './application/product-list.json';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  constructor() {
    this.json_data = data as any
  }
  json_data: any

  productList: any
  activeModal: boolean = false
  popupActive: boolean = false
  productId !: number | any
  ngOnInit() {
    this.productList = this.json_data.default
  }


  showModal() {
    this.activeModal = true
  }
  closeModal() {
    this.activeModal = false
  }
  showPopupActive(id: number) {
    this.productId = id
    this.popupActive = true
  }
  deleteItem() {
    this.productList = this.productList.filter((c: any) => {
      return c.id != this.productId
    })
    this.closePopupActive()
  }
  closePopupActive() {
    this.popupActive = false
    this.productId = null
  }
}
