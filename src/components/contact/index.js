import React, { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";
import css from "./_.module.css";
import Button from "../general/Button";
import axios from "../../axios-orders";
import { useLocation, useOutletContext, useNavigate } from "react-router";
import Spinner from "../general/spinner";
import * as actions from "../../Redux/actions/orderActions";

const ContactData = (props) => {
  const navigate = useNavigate();

  const [name, setName] = useState();
  const [city, setCity] = useState();
  const [street, setStreet] = useState();
  const dunRef = useRef();

  const location = useLocation();

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
        name: name,
        city: city,
        street: street,
      },
    };
    props.saveOrderAction(newOrder);
  };

  return (
    <div className={css.Contact}>
      <div ref={dunRef}>
        <strong>Үнийн Дүн: {props.price} ₮</strong>
      </div>

      <div>
        {props.newOrderStatus.error &&
          `захиалгыг хадаглах явцад алдаа гарлаа : ${props.newOrderStatus.error}`}
      </div>
      {props.newOrderStatus.seving ? (
        <Spinner />
      ) : (
        <div>
          <input
            onChange={(e) => (
              dunRef.current.style.color === "red"
                ? (dunRef.current.style.color = "green")
                : (dunRef.current.style.color = "red"),
              setName(e.target.value)
            )}
            type="text"
            name="name"
            placeholder="Таны нэр"
          />
          <input
            onChange={(e) => setCity(e.target.value)}
            type="text"
            name={"city"}
            placeholder="гэрийн  хаяг"
          />
          <input
            onChange={(e) => setStreet(e.target.value)}
            type="text"
            name={"street"}
            placeholder="Таны хот"
          />
          <Button text="ИЛГЭЭХ" btnType="Success" clicked={saveOrder} />
        </div>
      )}
    </div>
  );
};

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
