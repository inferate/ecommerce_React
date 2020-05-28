import { TOGGLE_CART } from "../../models/actionTypes";
import { INITIAL_STATE } from '../../models/initialCartDropDownState';

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_CART:
      return {
          ...state,
          hidden:!state.hidden
      };

    default:
      return state;
  }
};
export default cartReducer;
