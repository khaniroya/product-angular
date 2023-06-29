import { Component, OnInit } from '@angular/core';
import * as data from './application/product-list.json';
import * as category from './application/product-category.json';
import { ProductCategory, ProductModel } from './application/product-model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  constructor() {
    this.json_data = data as any
    this.json_category = category as any
  }
  json_data: any
  json_category: any
  catgories: any[] = []
  productList: ProductModel[] = []
  activeModal: boolean = false
  popupActive: boolean = false
  productId !: number | any
  ngOnInit() {
    this.productList = this.json_data.default
    this.catgories = this.json_category.default
  }


  showModal() {
    this.editId = null;
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

  editId: any
  showModalForEdit(item: any) {
    this.showModal();
    this.editId = item.id
  }

  addItemToProductList(newItem: ProductModel) {
    this.productList.push(newItem)
  }

  replaceCategory(item: any) {
    var repItem = this.catgories.filter((c: any) => {
      return c.key == item
    })
    return repItem[0].value
  }

}
