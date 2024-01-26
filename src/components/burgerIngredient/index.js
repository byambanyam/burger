import React from "react";
import css from "./_.module.css";
const BurgerIngredient = (props) => {
  if (props.type === "Bread-top")
    return (
      <div className={css.BreadTop}>
        <div className={css.Seed}> </div>
        <div className={`${css.Seed} ${css.Second}`}> </div>
        <div className={`${css.Seed} ${css.Third}`}> </div>
        <div className={`${css.Seed} ${css.Fourth}`}> </div>
      </div>
    );
  if (props.type === "Salad") return <div className={css.Salad}></div>;
  if (props.type === "Bacon") return <div className={css.Bacon}></div>;
  if (props.type === "Meat") return <div className={css.Meat}></div>;
  if (props.type === "Cheese") return <div className={css.Cheese}></div>;
  if (props.type === "Bread-Bottom")
    return <div className={css.BreadBottom}></div>;
  return <div>...</div>;
};
export default BurgerIngredient;
