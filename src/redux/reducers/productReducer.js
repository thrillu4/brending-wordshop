import { ActionTypes } from "../contents/actionTypes";

const initialState = {
  products: [
    {
      id: 1,
      title:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt architecto maxime quibusdam necessitatibus pariatur?",
      category: "programer",
    },
  ],
};
export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return state;
    default:
      return state;
  }
};
