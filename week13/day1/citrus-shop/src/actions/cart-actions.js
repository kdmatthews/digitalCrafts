import { MOVE_TO_CART } from "../action-types/cart-types";
import { REMOVE_FROM_CART } from "../action-types/cart-types";
import { REFRESH_CART } from "../action-types/cart-types";

export const MoveItemToCart = (dispatch, fruit) => {
    dispatch({ type: MOVE_TO_CART, payload: fruit })
}

export const RemoveItemFromCart = (dispatch, fruit) => {
    dispatch({ type: REMOVE_FROM_CART, payload: fruit })
}

export const RefreshCart = (dispatch) => {
    dispatch({ type: REFRESH_CART })
}