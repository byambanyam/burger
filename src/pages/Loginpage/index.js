import React, { Component } from "react";
import { connect } from "react-redux";

import css from "./_.module.css";
import Button from "../../components/general/Button";
import * as actoins from "../../Redux/actions/loginActions";
import Spinner from "../../components/general/spinner";
import { Navigate } from "react-router-dom";
class Login extends Component {
  state = {
    email: "",
    password: "",
  };
  changeEmail = (e) => {
    this.setState({ email: e.target.value });
  };
  passwordChange = (e) => {
    this.setState({ password: e.target.value });
  };
  login = () => {
    this.props.login(this.state.email, this.state.password);
  };
  render() {
    return (
      <div className={css.Login}>
        {this.props.userId && <Navigate to="/orders" />}
        <input
          onChange={this.changeEmail}
          type="email"
          placeholder="Имэйл хаяг"
        />
        <input
          onChange={this.passwordChange}
          type="password"
          placeholder="нууц үг"
        />
        {this.props.fireBaseError && (
          <div style={{ color: "red" }}>{this.props.fireBaseError}</div>
        )}
        {this.props.logginIn && <Spinner />}
        <Button text="Логин" btnType="Success" clicked={this.login} />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    fireBaseError: state.signupLoginReducer.fireBaseError,
    logginIn: state.signupLoginReducer.logginIn,
    userId: state.signupLoginReducer.userId,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    login: (email, password) => dispatch(actoins.loginUser(email, password)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
