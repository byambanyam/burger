import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import css from "./_.module.css";
import Toolbar from "../../components/toolbar";
import BurgerBuilder from "../BurgerPage";
import SideBar from "../../components/SideBar";
import OrderPage from "../OrderPage";
import ContactData from "../../components/contact";
import loginPage from "../Loginpage/index";
import * as actions from "../../Redux/actions/loginActions";
import * as signUpActions from "../../Redux/actions/signUpActions";

import {
  useSearchParams,
  BrowserRouter,
  Route,
  Routes,
  useNavigate,
  useParams,
  Router,
  Navigate,
  redirect,
  Outlet,
} from "react-router-dom";

import ShippingPage from "../shippingPage";
import signUp from "../SignUpPage";
import Logout from "../../components/Logout";
import PrivateRouter from "../../utils/PrivateRouter";

class App extends Component {
  state = {
    showSidebar: false,
  };
  toggleSideBar = () => {
    this.setState((prevState) => {
      return { showSidebar: !prevState.showSidebar };
    });
  };
  componentDidMount = () => {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");
    const expireDate = new Date(localStorage.getItem("userId"));
    const refreshToken = localStorage.getItem("refreshToken");
    if (token) {
      if (expireDate > new Date()) {
        //hugtsaan duusaagui token bain, auto  login hiine
        this.props.autoLogin(token, userId);
        // token huchingui bolohod uldej baigaa hugtsaag tootsod logout hiinee
        this.props.autoLogoutAfter(expireDate.getTime() - new Date().getTime());
      } else {
        // teken hugtsaan duussan bain aa auto logout hiin
        this.props.logout();
      }
    }
  };

  render() {
    return (
      <div>
        <Toolbar toggleSideBar={this.toggleSideBar} />
        <SideBar
          showSidebar={this.state.showSidebar}
          toggleSideBar={this.toggleSideBar}
        />
        <main className={css.Content}>
          <Routes>
            <Route Component={PrivateRouter}>
              <Route path="/logout" Component={Logout} />
              <Route path="/" Component={BurgerBuilder} />
              <Route path="/orders" Component={OrderPage} />
              <Route path="/ship" Component={ShippingPage}>
                <Route path="/ship/contact" Component={ContactData} />
              </Route>
            </Route>
            <Route path="/signup" Component={signUp} />
            <Route path="/login" Component={loginPage} />
          </Routes>
        </main>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    userId: state.signupLoginReducer.userId,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    autoLogin: (token, userId) =>
      dispatch(actions.loginUserSuccess(token, userId)),
    Logout: () => dispatch(signUpActions.logout()),
    autoLogoutAfter: () => dispatch(signUpActions.autologoutAfter()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
