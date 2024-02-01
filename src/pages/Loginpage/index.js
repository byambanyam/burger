import React, { useState } from "react";
import { connect } from "react-redux";

import css from "./_.module.css";
import Button from "../../components/general/Button";
import * as actoins from "../../Redux/actions/loginActions";
import Spinner from "../../components/general/spinner";
import { Navigate } from "react-router-dom";
const Login = (props) => {
  const [form, setform] = useState({
    email: "",
    password: "",
  });
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  const changeEmail = (e) => {
    const newEmail = e.target.value;
    setform((formBefore) => ({
      email: newEmail,
      password: formBefore.password,
    }));
  };
  const passwordChange = (e) => {
    const newPassword = e.target.value;
    setform((formBefore) => ({
      email: formBefore.email,
      password: newPassword,
    }));
  };
  const login = () => {
    props.login(form.email, form.password);
  };

  return (
    <div className={css.Login}>
      {props.userId && <Navigate to="/burger" />}
      <input onChange={changeEmail} type="email" placeholder="Имэйл хаяг" />
      <input onChange={passwordChange} type="password" placeholder="нууц үг" />
      {props.fireBaseError && (
        <div style={{ color: "red" }}>{props.fireBaseError}</div>
      )}
      {props.logginIn && <Spinner />}
      <Button text="Логин" btnType="Success" clicked={login} />
    </div>
  );
};
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
