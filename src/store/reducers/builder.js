import * as types from "../actions/types";

const initialState = {
  ingredients: null,
  price: 100,
};
const PRICES = {
  chocolate: 10.5,
  banana: 8.7,
  cherry: 5.9,
  strawberry: 6.0,
  orange: 14.5,
  berry: 15.6,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredient]: {
            ...state.ingredients[action.ingredient],
            quantity: state.ingredients[action.ingredient].quantity + 1,
          },
        },
        price: state.price + state.ingredients[action.ingredient].price,
      };

    case types.REMOVE_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredient]: {
            ...state.ingredients[action.ingredient],
            quantity: state.ingredients[action.ingredient].quantity - 1,
          },
        },
        price: state.price - state.ingredients[action.ingredient].price,
      };
    case types.SET_INGREDIENTS:
      return {
        ...state,
        ingredients: action.ingredients,
      };

    default:
      return state;
  }
};
