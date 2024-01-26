import React, { Component } from "react";
import css from "./_.module.css";
import Button from "../../components/general/Button";
import * as actions from "../../Redux/actions/signUpActions";
import { connect } from "react-redux";
import Spinner from "../../components/general/spinner";
import { Navigate } from "react-router-dom";

class signUp extends Component {
  state = {
    email: "",
    password1: "",
    password2: "",
    error: "",
  };
  changeEmail = (e) => {
    this.setState({ email: e.target.value });
  };
  changePassword1 = (e) => {
    this.setState({ password1: e.target.value });
  };
  changePassword2 = (e) => {
    this.setState({ password2: e.target.value });
  };

  signUp = () => {
    if (this.state.password1 === this.state.password2) {
      this.props.signUpUser(this.state.email, this.state.password1);
    } else {
      this.setState({ error: "Нүүц үгүүд таарахгүй байна " });
    }
  };

  render() {
    return (
      <div className={css.SignUp}>
        {this.props.userId && <Navigate to="/" />}
        <div>
          <h1>Бүртгэл үүсгэх</h1>
          <strong> Та өөрийн мэдээлэлээ оруулана уу </strong>
        </div>
        <input
          onChange={this.changeEmail}
          type="email"
          placeholder="Имэйл хаяг"
        />
        <input
          onChange={this.changePassword1}
          type="password"
          placeholder="нууц үг"
        />
        <input
          onChange={this.changePassword2}
          type="password"
          placeholder="нууц үг давтах"
        />

        {this.state.error && (
          <div style={{ color: "red" }}> {this.state.error}</div>
        )}
        {this.props.fireBaseError && (
          <div style={{ color: "red" }}> {this.props.fireBaseError}</div>
        )}
        {this.props.saving && <Spinner />}
        <Button text="БҮРТГҮҮЛЭХ" btnType="Success" clicked={this.signUp} />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    saving: state.signupLoginReducer.saving,
    fireBaseError: state.signupLoginReducer.fireBaseError,
    userId: state.signupLoginReducer.userId,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    signUpUser: (email, password) =>
      dispatch(actions.signUpUser(email, password)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(signUp);
