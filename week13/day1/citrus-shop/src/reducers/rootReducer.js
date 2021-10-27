import { combineReducers } from "redux";
import ShopInfo from "./shop-reducer";
import CartInfo from "./cart-reducer";



export const rootReducer = combineReducers({
    ShopInfo,
    CartInfo,
 
});