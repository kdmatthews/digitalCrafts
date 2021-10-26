import { MOVE_TO_CART, REMOVE_FROM_CART } from "../action-types/cart-types";
const initialState = [];

const CartInfo = (state=initialState, action) => {
    switch(action.type){
        case MOVE_TO_CART:
            return [...state, action.payload];
        case REMOVE_FROM_CART:
            const removeFruit = state;
            const removeFruitFiltered = removeFruit.filter((fruit)=> fruit !== action.payload);
            return removeFruitFiltered;
        default:
            return state
    }
}
export default CartInfo;