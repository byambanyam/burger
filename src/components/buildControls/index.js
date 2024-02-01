import React, { useContext } from "react";
// import { connect } from "react-redux";
import BurgerContext from "../../context/BurgerContext";
import BuildControl from "../buildControl";
import css from "./_.module.css";

const BuildControls = (props) => {
  const burgerContext = useContext(BurgerContext);
  const disabledIngredients = { ...burgerContext.Burger.ingredients };
  for (let key in disabledIngredients) {
    disabledIngredients[key] = disabledIngredients[key] <= 0;
  }

  return (
    <div className={css.BuildControls}>
      <p>
        Бүргер захиалгын үнэ:
        <strong> {burgerContext.Burger.totalPrice} </strong>
      </p>
      {Object.keys(burgerContext.Burger.ingredients_names).map((el) => (
        <BuildControl
          key={el}
          disabled={disabledIngredients}
          type={el}
          orts={burgerContext.Burger.ingredients_names[el]}
        />
      ))}

      <button
        onClick={props.showConfirmModal}
        disabled={!burgerContext.Burger.purchasing}
        className={css.OrderButton}
      >
        Захиалах
      </button>
    </div>
  );
};

export default BuildControls;
