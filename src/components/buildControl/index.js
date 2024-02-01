import React, { useContext } from "react";

import css from "./_.module.css";
import BurgerContext from "../../context/BurgerContext";
const BuildControl = (props) => {
  const burgerContext = useContext(BurgerContext);

  return (
    <div className={css.BuildControl}>
      <div className={css.label}>{props.orts}</div>
      <button
        disabled={props.disabled[props.type]}
        onClick={() => burgerContext.removeIngredients(props.type)}
        className={css.Less}
      >
        хасах
      </button>
      <button
        onClick={() => burgerContext.addIngredients(props.type)}
        className={css.More}
      >
        нэмэх
      </button>
    </div>
  );
};

export default BuildControl;
