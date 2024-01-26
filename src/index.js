import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./pages/App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { thunk } from "redux-thunk";
import { legacy_createStore as createStore } from "redux";
import { applyMiddleware, compose, combineReducers } from "redux";
import { Provider } from "react-redux";
import reducer from "./Redux/Reducer/reducer";
import orderReducer from "./Redux/Reducer/orderReducer";
import signupLoginReducer from "./Redux/Reducer/signupLoginReducer";

const root = ReactDOM.createRoot(document.getElementById("root"));
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const loggerMiddleware = (store) => {
  return (next) => {
    return (action) => {
      console.log("my loggerMiddleware:Dispatching ==>", action);
      console.log("MyLoggerMiddleware: state before:", store.getState());
      const results = next(action);
      console.log("MyLoggerMiddleware: state after:", store.getState());

      return results;
    };
  };
};

const reducers = combineReducers({
  reducer,
  orderReducer,
  signupLoginReducer,
});
const middlewares = [loggerMiddleware, thunk];

const store = createStore(
  reducers,

  composeEnhancers(applyMiddleware(...middlewares))
);

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
