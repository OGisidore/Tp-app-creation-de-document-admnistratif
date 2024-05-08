export interface Task {
    _id: string,
    reference: string | number
    designation: string,
    quantity: number,
    unit: string
    unitPrice: number,
    discount: number
    pre_taxAmount: string
    VAT_rate?: number
}