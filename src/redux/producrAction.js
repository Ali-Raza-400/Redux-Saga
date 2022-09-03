import {  PRODUCT_LIST, SET_PRODUCT_LIST } from "./constants"

export const productList=()=>{
    return {
        type:PRODUCT_LIST,
        
    }
}
// export const setproductList=(data)=>{
//     console.warn("set product action",data);
//     return {
//         type:SET_PRODUCT_LIST,
//         data
//     }
// }