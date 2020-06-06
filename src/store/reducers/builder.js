import * as types from "../actions/types";

const initialState = {
  ingredients: {
    chocolate: 1,
    banana: 1,
    cherry: 1,
    strawberry: 1,
    orange: 1,
    berry: 1,
  },
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
          [action.ingredient]: state.ingredients[action.ingredient] + 1,
        },
        price: state.price + PRICES[action.ingredient],
      };

    case types.REMOVE_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredient]: state.ingredients[action.ingredient] - 1,
        },
        price: state.price - PRICES[action.ingredient],
      };

    default:
      return state;
  }
};
