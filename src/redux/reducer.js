import { ADD_TO_CART, CLEAR_TO_CART, REMOVE_TO_CART } from "./constants";

export const cartData =(data=[],action)=>{
  
    switch(action.type){
        case ADD_TO_CART:
            console.warn("Add to card condtion ",action);
        return [action.data,...data];
        
        case REMOVE_TO_CART:
            console.warn("remove from card condtion ",action);
            data.length=data.length?data.length-1:[];
        return [...data];
        case CLEAR_TO_CART:
            console.warn("Clear card condtion ",action);
            data=[];
        return [...data];

        default:
        return data
    }
}