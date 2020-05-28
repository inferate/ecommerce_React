import { SET_CURRENT_USER, TOGGLE_CART } from "../../models/actionTypes";

/** Actions Creators */

export const setCurrentUser = user => ({
  type: SET_CURRENT_USER,
  payload: user
});

export const toggleCartAction = ()=>({
  type:TOGGLE_CART
})