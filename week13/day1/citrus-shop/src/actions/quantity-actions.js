import { INCREMENT_QUANTITY, DECREMENT_QUANTITY } from "../action-types/quanitity-types";

export const IncrementQuantity = (dispatch, tree) => {
   
    dispatch({ type: INCREMENT_QUANTITY, payload: tree });
};

export const DecrementQuantity = (dispatch, tree) => {
    dispatch({ type: DECREMENT_QUANTITY, payload: tree});
};

