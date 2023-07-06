import { Component, OnInit } from '@angular/core';
import * as receiptData from '../../application/receipt-product.json';
import { ProductModel, ReceiptModel } from '../../application/product-model';
import * as data from '../../application/product-list.json';


@Component({
  selector: 'app-receipt-product',
  templateUrl: './receipt-product.component.html',
  styleUrls: ['./receipt-product.component.scss']
})
export class ReceiptProductComponent implements OnInit {

  constructor() {
    this.json_receipt = receiptData as any
    this.json_data = data as any

  }
  json_data: any
  json_receipt: any
  productList: ProductModel[] = []
  receiptList: ReceiptModel[] = []
  editId: any
  receiptId: any
  activeModal: boolean = false
  popupActive: boolean = false

  ngOnInit() {
    this.receiptList = this.json_receipt.default
    this.productList = this.json_data.default
  }


  showModal() {
    this.editId = null;
    this.activeModal = true
  }
  closeModal() {
    this.activeModal = false
  }

  showModalForEdit(item: ReceiptModel) {
    this.showModal();
    this.editId = item.id
  }
  showPopupActive(id: number) {
    this.receiptId = id
    this.popupActive = true
  }

  deleteItem() {
    this.receiptList = this.receiptList.filter((c: any) => {
      return c.id != this.receiptId
    })
    this.closePopupActive()
  }

  closePopupActive() {
    this.popupActive = false
    this.receiptId = null
  }

  editReceiptList(itemEdit: ReceiptModel) {
    var foundIndex = this.receiptList.findIndex(x => x.id == itemEdit.id);
    this.receiptList[foundIndex] = itemEdit;
  }
  addItemToReceiptList(newItem: any) {
    this.receiptList.push(newItem)
    // this.productList = this.productList.filter((c: any) => {
    //   return c.name == newItem.name
    // })
    // this.productList = this.productList.filter((c: any) => {
    //   return c.number += newItem.number
    // })
  }
}
