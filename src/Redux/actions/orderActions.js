import axios from "../../axios-orders";
export const loadOrders = (userId) => {
  return function (dispatch, getState) {
    // захиалга татаж эхэллээ гэдгийг мэдэгдэнэ.
    // энийг хүлээж аваад спиннэр ажиллана.
    dispatch(loadOrdersStart());
    const token = getState().signupLoginReducer.token;
    axios
      .get(`orders.json?&auth=${token}&orderBy="userId"&equalTo="${userId}"`)
      .then((response) => {
        const loadedOrders = Object.entries(response.data).reverse();
        dispatch(loadOrdersSuccess(loadedOrders));
      })
      .catch((err) => dispatch(loadOrdersError(err)));
  };
};
export const loadOrdersStart = () => {
  return {
    type: "LOAD_ORDERS_START",
  };
};
export const loadOrdersSuccess = (loadedOrders) => {
  return {
    type: "LOAD_ORDERS_SUCCESS",
    orders: loadedOrders,
  };
};
export const loadOrdersError = (error) => {
  return {
    type: "LOAD_ORDERS_ERROR",
    error,
  };
};
// захиалга хадаглах хэсэг
export const saveOrder = (newOrder) => {
  return function (dispatch, getState) {
    dispatch(saveOrderStart());
    const token = getState().signupLoginReducer.token;
    // firebace ruu hadaglah uildel thunk ahiglaj bain.
    axios
      .post(`/orders.json?auth=${token} `, newOrder)
      .then((response) => {
        dispatch(saveOrderSuccess());
      })
      .catch((error) => {
        dispatch(saveOrderError(error));
      });
  };
};
export const saveOrderStart = (newOrder) => {
  return {
    type: "SAVE_ORDER_START",
  };
};
export const saveOrderSuccess = () => {
  return {
    type: "SAVE_ORDER_SUCCESS",
  };
};
export const saveOrderError = (error) => {
  return {
    type: "SAVE_ORDER_ERROR",
    error,
  };
};
