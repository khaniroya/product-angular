export interface ProductModel {
    id: number,
    name: string,
    number?: number,
    year: string,
    category: ProductCategory,
    color: string,
    weight: number
}
export interface ReceiptOrSaleModel {
    id: number,
    name: string,
    number?: number
}
export interface ProductCategory {
    value: string,
    key: string
}