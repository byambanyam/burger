import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import css from "./_.module.css";
import Button from "../general/Button";
import axios from "../../axios-orders";
import { useLocation, useOutletContext, useNavigate } from "react-router";
import Spinner from "../general/spinner";
import * as actions from "../../Redux/actions/orderActions";

function ContactData(props) {
  const navigate = useNavigate();

  const [name, setName] = useState(null);
  const [city, setCity] = useState(null);
  const [street, setStreet] = useState(null);
  const state = {
    name: name,
    city: city,
    street: street,
  };

  const location = useLocation();

  function changeName(e) {
    setName(e.target.value);
  }
  function changeCity(e) {
    setCity(e.target.value);
  }
  function changeStreet(e) {
    setStreet(e.target.value);
  }
  useEffect(() => {
    if (props.newOrderStatus.finished && !props.newOrderStatus.error) {
      navigate({ pathname: "/orders", reflace: true });
    }
  });

  const saveOrder = () => {
    const newOrder = {
      userId: props.userId,
      orts: props.ingredients,
      dun: props.price,
      hayag: {
        name: state.name,
        city: state.city,
        street: state.street,
      },
    };
    props.saveOrderAction(newOrder);
  };

  return (
    <div className={css.Contact}>
      Үнийн Дүн: {props.price} ₮
      <div>
        {props.newOrderStatus.error &&
          `захиалгыг хадаглах явцад алдаа гарлаа : ${props.newOrderStatus.error}`}
      </div>
      {props.newOrderStatus.seving ? (
        <Spinner />
      ) : (
        <div>
          <input
            onChange={changeName}
            type="text"
            name="name"
            placeholder="Таны нэр"
          />
          <input
            onChange={changeCity}
            type="text"
            name={"city"}
            placeholder="гэрийн  хаяг"
          />
          <input
            onChange={changeStreet}
            type="text"
            name={"street"}
            placeholder="Таны хот"
          />
          <Button text="ИЛГЭЭХ" btnType="Success" clicked={saveOrder} />
        </div>
      )}
    </div>
  );
}

const mapStateProps = (state) => {
  return {
    userId: state.signupLoginReducer.userId,
    price: state.reducer.totalPrice,
    ingredients: state.reducer.ingredients,
    newOrderStatus: state.orderReducer.newOrder,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    saveOrderAction: (newOrder) => dispatch(actions.saveOrder(newOrder)),
  };
};
export default connect(
  mapStateProps,

  mapDispatchToProps
)(ContactData);
