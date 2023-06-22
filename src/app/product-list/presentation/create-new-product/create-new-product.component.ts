import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-create-new-product',
  templateUrl: './create-new-product.component.html',
  styleUrls: ['./create-new-product.component.scss']
})
export class CreateNewProductComponent implements OnInit {

  constructor() { }
  categories = [{
    value: 'لپ تاپ',
    key: "laptop"
  },
  {
    value: 'مانیتور',
    key: "monitor"
  },
  {
    value: 'موبایل',
    key: "mobile"
  }]
  @Output() onClose = new EventEmitter<void>();
  ngOnInit() {
  }

  close() {
    this.onClose.emit()
  }
}
