import React, { useEffect, useState, Suspense } from "react";
import { connect } from "react-redux";
import css from "./_.module.css";
import Toolbar from "../../components/toolbar";
// import BurgerBuilder from "../BurgerPage";
import SideBar from "../../components/SideBar";
// import orderPage from "../OrderPage";
import ContactData from "../../components/contact";
import loginPage from "../Loginpage/index";
import * as actions from "../../Redux/actions/loginActions";
import * as signUpActions from "../../Redux/actions/signUpActions";
import Spinner from "../../components/general/spinner";
import { BurgerStore } from "../../context/BurgerContext";

import { Route, Routes } from "react-router-dom";

import ShippingPage from "../shippingPage";
// import signUp from "../SignUpPage";
import Logout from "../../components/Logout";
import PrivateRouter from "../../utils/PrivateRouter";

const BurgerBuilder = React.lazy(() => {
  return import("../BurgerPage");
});
const orderPage = React.lazy(() => {
  return import("../OrderPage");
});
const signUp = React.lazy(() => {
  return import("../SignUpPage");
});

const App = (props) => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSideBar = () => {
    // umnuh builian utgiig esergeer awah
    setShowSidebar((prevState) => !prevState);
  };
  useEffect(() => {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");
    const expireDate = new Date(localStorage.getItem("userId"));
    const refreshToken = localStorage.getItem("refreshToken");
    if (token) {
      if (expireDate > new Date()) {
        //hugtsaan duusaagui token bain, auto  login hiine
        props.autoLogin(token, userId);
        // token huchingui bolohod uldej baigaa hugtsaag tootsod logout hiinee
        props.autoLogoutAfter(expireDate.getTime() - new Date().getTime());
      } else {
        // teken hugtsaan duussan bain aa auto logout hiin
        props.Logout();
      }
    }
  }, []);

  return (
    <div>
      <Toolbar toggleSideBar={toggleSideBar} />
      <SideBar showSidebar={showSidebar} toggleSideBar={toggleSideBar} />
      <main className={css.Content}>
        <Suspense fallback={<Spinner />}>
          <BurgerStore>
            <Routes>
              <Route Component={PrivateRouter}>
                <Route path="/logout" Component={Logout} />
                <Route path="/orders" Component={orderPage} />

                <Route path="/burger" Component={BurgerBuilder} />

                <Route path="/ship" Component={ShippingPage}>
                  <Route path="/ship/contact" Component={ContactData} />
                </Route>
              </Route>

              <Route path="/signup" Component={signUp} />
              <Route path="/login" Component={loginPage} />
            </Routes>
          </BurgerStore>
        </Suspense>
      </main>
    </div>
  );
};
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
