import * as actions from "./actions";

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

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.ADD_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredient]: state.ingredients[action.ingredient] + 1,
        },
      };

    case actions.REMOVE_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredient]: state.ingredients[action.ingredient] - 1,
        },
      };

    default:
      return state;
  }
};
