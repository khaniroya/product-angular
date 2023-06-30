import { Component, OnInit } from '@angular/core';
import * as sale from '../../application/sale-product.json'
import * as receipt from '../../application/receipt-product.json'
@Component({
  selector: 'app-report-product',
  templateUrl: './report-product.component.html',
  styleUrls: ['./report-product.component.scss']
})
export class ReportProductComponent implements OnInit {

  constructor() {
    this.json_receipt = receipt as any
    this.json_sale = sale as any
  }
  json_receipt: any
  json_sale: any
  reportList: any
  showReport: boolean = false
  ngOnInit() {
    const arr = [1, 2, 3, 4, 5];
    const average = arr.reduce((a, b) => a + b, 0) / arr.length;
    console.log(average);
  }

  showReportTable() {
    this.showReport = true
    this.getDataFromJson()
  }
  getDataFromJson() {
    this.reportList = this.json_sale.default.concat(this.json_receipt.default);
    this.calculateAverage(this.reportList)
  }

  numberList: number[] = []
  average!: number
  calculateAverage(list: any[]) {
    list = list.map((c: any) => {
      return this.numberList.push(c.number)
    })
    this.average = this.numberList.reduce((a, b) => a + b, 0) / this.numberList.length;
  }
}