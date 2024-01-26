import React from "react";
import css from "./_.module.css";

const Order = (props) => {
  return (
    <div className={css.Order}>
      <p>
        Орц : Гахайн мах {props.order.orts.Bacon}, Салад :
        {props.order.orts.Salad}, Мах: {props.order.orts.Meat}, Бяслага:
        {props.order.orts.Cheese}
      </p>
      <p>
        {" "}
        Нэр : {props.order.hayag.name} | хаяг: {props.order.hayag.street} |
        {props.order.hayag.city}
      </p>
      <p> үнийн дүн : {props.order.dun} ₮ </p>
    </div>
  );
};

export default Order;
