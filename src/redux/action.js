import { ADD_TO_CART, CLEAR_TO_CART, REMOVE_TO_CART } from "./constants"


export const addToCart=(data)=>{
    // console.warn("action called-----",data)
    return {
        type:ADD_TO_CART,
        data:data
    }
}
export const removeToCart=(data)=>{
    console.warn(" remove to action called-----",data)
    return {
        type:REMOVE_TO_CART,
        data:data
    }
}
export const emptycart=()=>{
    console.warn(" Clear the cart called-----")
    return {
        type:CLEAR_TO_CART,
     
    }
}