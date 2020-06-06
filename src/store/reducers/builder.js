import * as types from "../actions/types";

const initialState = {
  ingredients: {
    chocolate: { quantity: 1, price: 10.5, label: "Chocolate" },
    banana: { quantity: 1, price: 8.7, label: "Banana" },
    cherry: { quantity: 1, price: 5.9, label: "Cherry" },
    strawberry: { quantity: 1, price: 6.0, label: "Strawberry" },
    orange: { quantity: 1, price: 14.5, label: "Orange" },
    berry: { quantity: 1, price: 15.6, label: "Berry" },
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

    default:
      return state;
  }
};
