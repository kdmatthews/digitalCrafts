import { MOVE_TO_CART } from "../action-types/cart-types";
const initialState = [];
const CartInfo = (state=initialState, action) => {
    switch(action.type){
        case MOVE_TO_CART:
            return [...state, action.payload]
        default:
            return state
    }
}
export default CartInfo;