import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../../Redux/actions/orderActions";
import css from "./_.module.css";

import Spinner from "../../components/general/spinner";
import Order from "../../components/order";

const OrderPage = (props) => {
  useEffect(() => {
    props.loadOrders(props.userId);
  }, []);

  return (
    <div className={css.order}>
      {props.loading ? (
        <Spinner />
      ) : (
        props.orders.map((el) => <Order key={el[0]} order={el[1]} />)
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    state: state,
    orders: state.orderReducer.orders,
    loading: state.orderReducer.loading,
    userId: state.signupLoginReducer.userId,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    loadOrders: (userId) => dispatch(actions.loadOrders(userId)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(OrderPage);
