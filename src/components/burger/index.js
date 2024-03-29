import React, { useContext } from "react";
import { connect } from "react-redux";
import BurgerIngredient from "../burgerIngredient";
import css from "./_.module.css";
import { useLocation, useNavigate, useParams } from "react-router-dom";
// import reducer from "../../Redux/Reducer/orderReducer";
import BurgerContext from "../../context/BurgerContext";

const Burger = (props) => {
  const burgerContext = useContext(BurgerContext);
  const items = Object.entries(burgerContext.Burger.ingredients);

  let content = [];
  items.map((el) => {
    for (let i = 0; i < el[1]; i++)
      content.push(<BurgerIngredient key={`${el[0]}${i + 1}`} type={el[0]} />);
  });
  if (content.length === 0) content = <p>Хачиртай талхны орцыг сонгон уу...</p>;

  return (
    <div className={css.Burger}>
      <BurgerIngredient type="Bread-top" />
      {content}

      <BurgerIngredient type="Bread-Bottom" />
    </div>
  );
};

export default Burger;
