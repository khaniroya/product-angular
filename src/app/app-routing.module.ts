import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { SaleProductComponent } from './product-list/presentation/sale-product/sale-product.component';
import { ReceiptProductComponent } from './product-list/presentation/receipt-product/receipt-product.component';

const routes: Routes = [
  {
    path: 'product-list',
    loadChildren: () =>
      import('../app/product-list/product-list.module').then(m => m.ProductListModule),
    component: ProductListComponent
  },
  {
    path: 'product-sale',
    loadChildren: () =>
      import('../app/product-list/product-list.module').then(m => m.ProductListModule),
    component: SaleProductComponent
  },
  {
    path: 'product-receipt',
    loadChildren: () =>
      import('../app/product-list/product-list.module').then(m => m.ProductListModule),
    component: ReceiptProductComponent
  },
  {
    path: '', redirectTo: 'product-list', pathMatch: 'full'
  },
  {
    path: '**', redirectTo: 'product-list', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
