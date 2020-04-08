import { SET_CURRENT_USER } from "../../models/actionTypes";

/** Actions Creators */

export const setCurrentUser = user => ({
  type: SET_CURRENT_USER,
  payload: user
});
