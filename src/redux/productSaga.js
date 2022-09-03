import { PRODUCT_LIST, SET_PRODUCT_LIST } from "./constants";
import {takeEvery,put} from 'redux-saga/effects';

function* getProducts(){
       let data =yield fetch('http://localhost:3500/product');
    data=yield data.json()

    // console.warn("Product action called-----",data)
    yield put({type:SET_PRODUCT_LIST,data})
    // console.warn("api called");
} 
function* productSaga() {
   yield takeEvery(PRODUCT_LIST,getProducts) 
}
export default productSaga;
