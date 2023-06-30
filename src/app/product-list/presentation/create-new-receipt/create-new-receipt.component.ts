import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductCategory, ProductModel, ReceiptOrSaleModel } from '../../application/product-model';
import { randomIdCreate } from 'src/utils/randomId';
import { ProductReceiptService } from '../../application/product.receipt.service';

@Component({
  selector: 'app-create-new-receipt',
  templateUrl: './create-new-receipt.component.html',
  styleUrls: ['./create-new-receipt.component.scss']
})
export class CreateNewReceiptComponent implements OnInit {
  @ViewChild('reciptProduct') reciptProduct: NgForm;
  @Input() editId: any
  @Input() catgories: ProductCategory[]
  @Input() receiptList: ReceiptOrSaleModel[]
  @Input() productList: ProductModel[]
  @Output() onClose = new EventEmitter<void>();
  @Output() addItem = new EventEmitter<ReceiptOrSaleModel>();
  editData: any
  nullItem = {
    id: 0,
    name: '',
    number: 0
  }
  constructor(private receiptService: ProductReceiptService) { }
  ngOnInit() {
    if (this.editId) {
      this.editData = this.receiptList.filter((c: any) => {
        return c.id == this.editId
      })
      this.editData = this.editData[0]
    } else {
      this.editData = this.nullItem
    }
  }

  close() {
    this.onClose.emit();
    this.editId = null

  }

  onSubmit() {
    var dataForm = this.reciptProduct.value;
    if (this.reciptProduct.valid && dataForm != null) {
      if (this.editId) {
        this.receiptService.setValueForm(this.reciptProduct, dataForm)
      } else {
        let item: ReceiptOrSaleModel = {
          id: randomIdCreate(0, 1000),
          name: dataForm.name,
          number: dataForm.number
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
