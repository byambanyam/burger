import React, { useState } from "react";

const BurgerContext = React.createContext();
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
export const BurgerStore = (props) => {
  const [Burger, setIngredients] = useState(initialState);
  const addIngredients = (orts) => {
    setIngredients({
      ...Burger,
      ingredients: {
        ...Burger.ingredients,
        [orts]: Burger.ingredients[orts] + 1,
      },
      totalPrice: Burger.totalPrice + INGREDIENTS_PRICE[orts],
      purchasing: true,
    });
  };
  const removeIngredients = (orts) => {
    const newPrice = Burger.totalPrice - INGREDIENTS_PRICE[orts];
    setIngredients({
      ...Burger,
      ingredients: {
        ...Burger.ingredients,
        [orts]: Burger.ingredients[orts] - 1,
      },
      totalPrice: newPrice,
      purchasing: newPrice > 1000,
    });
  };
  return (
    <BurgerContext.Provider
      value={{ Burger, addIngredients, removeIngredients }}
    >
      {[props.children]}
    </BurgerContext.Provider>
  );
};
export default BurgerContext;
