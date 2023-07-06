import { Component, OnInit } from '@angular/core';
import * as sale from '../../application/sale-product.json'
import * as receipt from '../../application/receipt-product.json'
import moment from 'moment';
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
  reportList: any[] = []
  showReport: boolean = false
  ngOnInit() {

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
  numberSale: number[] = []
  numberReceipt: number[] = []
  average!: number
  averageSale!: number
  averageReceipt!: number
  calculateAverage(list: any[]) {
    list = list.map((c: any) => {
      return this.numberList.push(c.number)
    })
    this.average = this.numberList.reduce((a, b) => a + b, 0) / this.numberList.length;
    this.average = parseInt(this.average.toString())


    //Receipt 
    const ReceiptNum = this.json_receipt.default.map((c: any) => {
      return c.number
    })
    this.numberReceipt = ReceiptNum.reduce((a: any, b: any) => {
      return a + b;
    });


    //Sale 
    const saleNum = this.json_sale.default.map((c: any) => {
      return c.number
    })
    this.numberSale = saleNum.reduce((a: any, b: any) => {
      return a + b;
    });

  }

  sortByDate() {
    this.reportList = this.json_sale.default.concat(this.json_receipt.default);
    this.reportList.map((c: any) => {
      return c.date = new Date(c.date)
    })
    this.reportList = this.reportList.sort((a: any, b: any) => b.date - a.date);
    this.reportList.map((c: any) => {
      let day = c.date.getDate();
      let month = c.date.getMonth();
      let year = c.date.getFullYear();
      return c.date = year + "-" + month + "-" + day;
    })
  }

}