import React from "react";
import { connect } from "react-redux";

import Button from "../general/Button";
import { useNavigate, useLocation } from "react-router-dom";

const OrderSummary = (props) => {
  const navigate = useNavigate();
  const location = useLocation();

  const nav = () => {
    return navigate({ pathname: "/ship" });
  };

  const onContinue = props.onContinue;

  return (
    <div>
      <h3> таны захиалга </h3>
      <p> таны сонгосон орцууд:</p>
      <ul>
        {Object.keys(props.ingredients).map((el) => (
          <li key={el}>
            {props.ingredientNames[el]}: {props.ingredients[el]}
          </li>
        ))}
      </ul>

      <p>
        <strong> Нийт Дүн: {props.price} ₮ </strong> захиалга хйих бол !!!
      </p>
      <Button clicked={props.onCancel} btnType="Danger" text="Татгалзах " />
      <Button
        clicked={() => {
          onContinue();
          nav();
        }}
        btnType="Success"
        text="Захиалах "
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    ingredientNames: state.reducer.ingredients_names,
    ingredients: state.reducer.ingredients,
    price: state.reducer.totalPrice,
  };
};
export default connect(mapStateToProps)(OrderSummary);
