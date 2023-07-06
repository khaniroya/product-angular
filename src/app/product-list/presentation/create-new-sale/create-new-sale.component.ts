import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductCategory, ProductModel, SaleModel } from '../../application/product-model';
import { randomIdCreate } from 'src/utils/randomId';
import { ProductReceiptService } from '../../application/product.receipt.service';
import { cloneDeep } from 'lodash';

@Component({
  selector: 'app-create-new-sale',
  templateUrl: './create-new-sale.component.html',
  styleUrls: ['./create-new-sale.component.scss']
})
export class CreateNewSaleComponent implements OnInit {
  @ViewChild('saleProduct') saleProduct: NgForm;
  @Input() editId: any
  @Input() catgories: ProductCategory[]
  @Input() saleList: SaleModel[]
  @Input() productList: ProductModel[]
  @Output() onClose = new EventEmitter<void>();
  @Output() addItem = new EventEmitter<SaleModel>();
  @Output() editSaleList = new EventEmitter<SaleModel>();
  editData: any
  nullItem = {
    id: 0,
    name: '',
    number: 0
  }
  constructor(private receiptService: ProductReceiptService) { }
  ngOnInit() {
    if (this.editId) {
      this.editData = this.saleList.filter((c: any) => {
        return c.id == this.editId
      })
      this.editData = cloneDeep(this.editData[0])
    } else {
      this.editData = this.nullItem
    }
  }

  close() {
    this.onClose.emit();
    this.editId = null;
  }

  onSubmit() {
    var dataForm = this.saleProduct.value;
    if (this.saleProduct.valid && dataForm != null) {
      if (this.editId) {
        // this.receiptService.setValueForm(this.saleProduct, dataForm)
        let item: SaleModel = {
          id: this.editId,
          name: dataForm.name,
          number: dataForm.number,
          date: dataForm.date
        }
        this.editSaleList.emit(item)
      } else {
        let item: SaleModel = {
          id: randomIdCreate(0, 1000),
          name: dataForm.name,
          number: dataForm.number,
          date: dataForm.date
        }
        this.addItem.emit(item)
      }
      this.onClose.emit()
    } else {
      alert('فرم خطا دارد ثبت نشد')
    }
  }
  ngOnChanges(changes: SimpleChanges): void {

  }
}
