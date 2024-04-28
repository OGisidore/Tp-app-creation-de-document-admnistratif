export interface DetailsOfTicket {
    _id : string,
    reference : string | number 
    Designation : string,
    Quantity : number,
    unit : string 
     unitPrice : number,
     Discount : number
     pre_taxAmount : string
     VAT_rate ?: number

}