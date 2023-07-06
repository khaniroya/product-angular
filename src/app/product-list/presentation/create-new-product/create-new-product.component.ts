import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductCategory, ProductModel } from '../../application/product-model';
import { randomIdCreate } from 'src/utils/randomId';
import { ProductService } from '../../application/product.service';
import { cloneDeep } from 'lodash';

@Component({
  selector: 'app-create-new-product',
  templateUrl: './create-new-product.component.html',
  styleUrls: ['./create-new-product.component.scss']
})
export class CreateNewProductComponent implements OnInit {
  @ViewChild('addProduct') addProduct: NgForm;
  @Input() editId: any
  @Input() catgories: ProductCategory[]
  @Input() productList: ProductModel[]
  @Output() onClose = new EventEmitter<void>();
  @Output() addItem = new EventEmitter<ProductModel>();
  @Output() editProductList = new EventEmitter<ProductModel>();
  editData: any
  nullItem = {
    id: 0,
    name: '',
    number: 0,
    year: '',
    category: {
      key: '',
      value: ''
    },
    color: '',
    weight: 0
  }
  constructor(private productService: ProductService) { }
  ngOnInit() {
    if (this.editId) {
      this.editData = this.productList.filter((c: any) => {
        return c.id == this.editId
      })
      this.editData = cloneDeep(this.editData[0])
    } else {
      this.editData = this.nullItem
    }
  }

  close() {
    this.onClose.emit();
    this.editId = null

  }

  onSubmit() {
    var dataForm = this.addProduct.value;
    if (this.addProduct.valid && dataForm != null) {
      if (this.editId) {
        // this.productService.setValueForm(this.addProduct, dataForm)
        let item: ProductModel = {
          id: this.editId,
          name: dataForm.name,
          year: dataForm.year,
          number: 0,
          category: dataForm.category,
          color: dataForm.color,
          weight: dataForm.weight
        }
        this.editProductList.emit(item)
      } else {
        let item: ProductModel = {
          id: randomIdCreate(0, 1000),
          name: dataForm.name,
          year: dataForm.year,
          number: 0,
          category: dataForm.category,
          color: dataForm.color,
          weight: dataForm.weight
        }
        this.addItem.emit(item)
      }
      this.onClose.emit()
      console.log(this.productList)
    } else {
      alert('فرم خطا دارد ثبت نشد')
    }
  }
  ngOnChanges(changes: SimpleChanges): void {
  }
}
