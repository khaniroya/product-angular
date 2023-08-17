import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ProductListModule } from './product-list/product-list.module';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductListModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule { }
