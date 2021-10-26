import { MOVE_TO_CART } from "../action-types/cart-types";

export const MoveItemToCart = (dispatch, fruit) => {
    dispatch({ type: MOVE_TO_CART, payload: fruit})
}