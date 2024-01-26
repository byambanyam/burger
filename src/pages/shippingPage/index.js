import React, { Component } from "react";
import { connect } from "react-redux";
import Burger from "../../components/burger";
import Button from "../../components/general/Button";
import css from "./_.module.css";

import {
  useNavigate,
  useParams,
  useLocation,
  Route,
  Routes,
  Outlet,
} from "react-router-dom";

function ShippingPage(props) {
  const location = useLocation();

  const navigate = useNavigate();

  return (
    <div className={css.ShippingPage}>
      <p>
        <strong>ТАНЫ СЭТГЭЛ ХАНАМЖ БИДНИЙ ТЭМҮҮЛЭЛ</strong>
      </p>
      <p>
        <strong>Дүн: {props.price}₮</strong>
      </p>
      <Burger />
      <Button
        clicked={() => navigate(-1)}
        btnType="Danger"
        text="ЗАХИАЛГА ЦУЦЛАХ !"
      />
      <Button
        clicked={() =>
          navigate({
            pathname: "/ship/contact",

            replace: true,
          })
        }
        btnType="Success"
        text="ХҮРГЭЛТИЙН МЭДЭЭЛЭЛ ОРУУЛАХ !"
      />
      <Outlet
      // context={{ price: props.price, ingredients: props.ingredients }}
      />
    </div>
  );
}
const mapStateTopProps = (state) => {
  return {
    price: state.reducer.totalPrice,
  };
};
export default connect(mapStateTopProps)(ShippingPage);
