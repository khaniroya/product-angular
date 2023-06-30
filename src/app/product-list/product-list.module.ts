import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list.component';
import { SaleProductComponent } from './presentation/sale-product/sale-product.component';
import { CreateNewProductComponent } from './presentation/create-new-product/create-new-product.component';
import { ReceiptProductComponent } from './presentation/receipt-product/receipt-product.component';
import { FormsModule } from '@angular/forms';
import { ProductService } from './application/product.service';
import { ReportProductComponent } from './presentation/report-product/report-product.component';
import { CreateNewReceiptComponent } from './presentation/create-new-receipt/create-new-receipt.component';
import { ProductReceiptService } from './application/product.receipt.service';
import { CreateNewSaleComponent } from './presentation/create-new-sale/create-new-sale.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [ProductService, ProductReceiptService],
  declarations: [
    ReportProductComponent,
    CreateNewReceiptComponent,
    ProductListComponent,
    SaleProductComponent,
    CreateNewProductComponent,
    ReceiptProductComponent,
    CreateNewSaleComponent
  ]
})
export class ProductListModule { }
