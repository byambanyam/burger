const initialState = {
  ingredients: {
    Salad: 0,
    Cheese: 0,
    Bacon: 0,
    Meat: 0,
  },
  totalPrice: 1000,
  purchasing: false,
  ingredients_names: {
    Bacon: "Гахайн мах",
    Cheese: "Бяслаг",
    Meat: "үхрийн мах",
    Salad: "Салад",
  },
};
const INGREDIENTS_PRICE = {
  Salad: 2500,
  Cheese: 2400,
  Bacon: 3000,
  Meat: 4000,
};
const reducer = (state = initialState, action) => {
  if (action.type === "ADD_INGREDIENT") {
    return {
      ...state,
      ingredients: {
        ...state.ingredients,
        [action.ortsNer]: state.ingredients[action.ortsNer] + 1,
      },

      totalPrice: state.totalPrice + INGREDIENTS_PRICE[action.ortsNer],
      purchasing: true,
    };
  } else if (action.type === "REMOVE_INGREDIENT") {
    const newPrice = state.totalPrice - INGREDIENTS_PRICE[action.ortsNer];
    return {
      ...state,
      ingredients: {
        ...state.ingredients,
        [action.ortsNer]: state.ingredients[action.ortsNer] - 1,
      },

      totalPrice: newPrice,
      purchasing: newPrice > 1000,
    };
  }

  return state;
};
export default reducer;
