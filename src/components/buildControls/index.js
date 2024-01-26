import React from "react";
import { connect } from "react-redux";
import * as actions from "../../Redux/actions/burgerActions";
import BuildControl from "../buildControl";
import css from "./_.module.css";
const BuildControls = (props) => {
  const disabledIngredients = { ...props.burgeriinOrts };
  for (let key in disabledIngredients) {
    disabledIngredients[key] = disabledIngredients[key] <= 0;
  }

  return (
    <div className={css.BuildControls}>
      <p>
        Бүргер захиалгын үнэ: <strong> {props.niitUne} </strong>
      </p>
      {Object.keys(props.ingredientsNames).map((el) => (
        <BuildControl
          key={el}
          ortsHasah={props.ortsHasah}
          ortsNemeh={props.ortsNemeh}
          disabled={disabledIngredients}
          type={el}
          orts={props.ingredientsNames[el]}
        />
      ))}

      <button
        onClick={props.showConfirmModal}
        disabled={!props.purchasing}
        className={css.OrderButton}
      >
        Захиалах
      </button>
    </div>
  );
};
const mapStateProps = (state) => {
  return {
    burgeriinOrts: state.reducer.ingredients,
    niitUne: state.reducer.totalPrice,
    purchasing: state.reducer.purchasing,
    ingredientsNames: state.reducer.ingredients_names,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    ortsNemeh: (ortsNer) => dispatch(actions.addIngredient(ortsNer)),
    ortsHasah: (ortsNer) => dispatch(actions.removeIngredient(ortsNer)),
  };
};
export default connect(mapStateProps, mapDispatchToProps)(BuildControls);
