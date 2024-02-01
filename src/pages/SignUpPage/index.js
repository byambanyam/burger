import React, { useState } from "react";
import css from "./_.module.css";
import Button from "../../components/general/Button";
import * as actions from "../../Redux/actions/signUpActions";
import { connect } from "react-redux";
import Spinner from "../../components/general/spinner";
import { Navigate } from "react-router-dom";

const SignUp = (props) => {
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [error, setError] = useState("");

  const signup = () => {
    if (password1 === password2) {
      props.signUpUser(email, password1);
    } else {
      setError("Нүүц үгүүд таарахгүй байна ");
    }
  };

  return (
    <div className={css.SignUp}>
      {props.userId && <Navigate to="/" />}
      <div>
        <h1>Бүртгэл үүсгэх</h1>
        <strong> Та өөрийн мэдээлэлээ оруулана уу </strong>
      </div>
      <input
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        placeholder="Имэйл хаяг"
      />
      <input
        onChange={(e) => setPassword1(e.target.value)}
        type="password"
        placeholder="нууц үг"
      />
      <input
        onChange={(e) => setPassword2(e.target.value)}
        type="password"
        placeholder="нууц үг давтах"
      />

      {error && <div style={{ color: "red" }}> {error}</div>}
      {props.fireBaseError && (
        <div style={{ color: "red" }}> {props.fireBaseError}</div>
      )}
      {props.saving && <Spinner />}
      <Button text="БҮРТГҮҮЛЭХ" btnType="Success" clicked={signup} />
    </div>
  );
};
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
export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
