import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../../Redux/actions/signUpActions";
import { Navigate } from "react-router-dom";

const Logout = (props) => {
  useEffect(() => {
    props.logout();
  }, []);

  return <Navigate to="/login" />;
};
const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(actions.logout()),
  };
};
export default connect(null, mapDispatchToProps)(Logout);
