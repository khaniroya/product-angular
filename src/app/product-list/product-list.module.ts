import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list.component';
import { SaleProductComponent } from './presentation/sale-product/sale-product.component';
import { CreateNewProductComponent } from './presentation/create-new-product/create-new-product.component';
import { ReceiptProductComponent } from './presentation/receipt-product/receipt-product.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [ProductListComponent, SaleProductComponent, CreateNewProductComponent, ReceiptProductComponent]
})
export class ProductListModule { }
