import { Component, OnInit } from '@angular/core';
import * as saleData from '../../application/sale-product.json';
import * as data from '../../application/product-list.json';
import { ProductModel, SaleModel } from '../../application/product-model';

@Component({
  selector: 'app-sale-product',
  templateUrl: './sale-product.component.html',
  styleUrls: ['./sale-product.component.scss']
})
export class SaleProductComponent implements OnInit {


  constructor() {
    this.json_receipt = saleData as any
    this.json_data = data as any

  }
  json_data: any
  json_receipt: any
  productList: ProductModel[] = []
  saleList: SaleModel[] = []
  editId: any
  receiptId: any
  activeModal: boolean = false
  popupActive: boolean = false
  popupActiveMojodi: boolean = false

  ngOnInit() {
    this.saleList = this.json_receipt.default
    this.productList = this.json_data.default
  }


  showModal() {
    this.editId = null;
    this.activeModal = true
  }
  closeModal() {
    this.activeModal = false
  }

  showModalForEdit(item: SaleModel) {
    this.showModal();
    this.editId = item.id
  }
  showPopupActive(id: number) {
    this.receiptId = id
    this.popupActive = true
  }

  deleteItem() {
    this.saleList = this.saleList.filter((c: any) => {
      return c.id != this.receiptId
    })
    this.closePopupActive()
  }

  closePopupActive() {
    this.popupActive = false
    this.receiptId = null
  }

  mojodi: any
  editSaleList(itemEdit: SaleModel) {
    this.mojodi = null
    this.getMogodi(itemEdit)
    if (this.mojodi?.number > itemEdit?.number) {
      var foundIndex = this.saleList.findIndex(x => x.id == itemEdit.id);
      this.saleList[foundIndex] = itemEdit;
    } else {
      this.popupActiveMojodi = true
    }
  }
  closePopupActiveMojodi() {
    this.popupActiveMojodi = false
  }
  addItemToSaleList(newItem: any) {
    this.mojodi = null
    this.getMogodi(newItem)
    if (this.mojodi?.number > newItem?.number) {
      this.saleList.push(newItem)
    } else {
      this.popupActiveMojodi = true
    }
    // this.productList = this.productList.filter((c: any) => {
    //   return c.name == newItem.name
    // })
    // this.productList = this.productList.filter((c: any) => {
    //   return c.number -= newItem.number
    // })
  }
  getMogodi(item: any) {
    this.mojodi = this.productList.find((c: any) => {
      return c.name == item.name
    })
  }
}
