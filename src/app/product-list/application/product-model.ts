export interface ProductModel {
    id: number,
    name: string,
    number?: number,
    year: string,
    category: ProductCategory,
    color: string,
    weight: number
}
export interface SaleModel {
    id: number,
    name: string,
    number: number,
    type?: string,
    saleDate?: string
}
export interface ReceiptModel {
    id: number,
    name: string,
    number: number,
    type?: string,
    receiptDate?: string
}
export interface ProductCategory {
    value: string,
    key: string
}