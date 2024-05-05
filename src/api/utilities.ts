export const CalculateHTAmount = (quantity:number, unitPrice:number, discount:number)=>{
    const total = quantity * unitPrice
    return total - (total * (discount/100))

}
export const CalculateTTCAmount = (htAmount:number , TVArate:number)=>{
    return htAmount + (htAmount * (TVArate/100))

}
