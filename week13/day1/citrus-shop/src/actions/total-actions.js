import { TOTAL_CART } from "../action-types/total-types";

export const TotalCart = (dispatch, citrus) => {
    dispatch ({ type: TOTAL_CART, payload: citrus})
}