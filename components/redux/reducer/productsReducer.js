import { DELETE_ORDER, GET_ORDER, CREATE_ORDER } from "../actions/types";

export const initialState = {
  data : [
  ]
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ORDER:
      return {
        ...state,
        data: action.payload
      };
    case CREATE_ORDER:
      return {
        ...state,
        data: action.payload
      };
    case DELETE_ORDER:
      return {
        ...state,
        data: action.payload
      };

    default:
      return state;
  }
};
