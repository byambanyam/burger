import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../Redux/actions/signUpActions";
import { Navigate } from "react-router-dom";

class Logout extends React.Component {
  componentDidMount = () => {
    this.props.logout();
  };
  render() {
    return <Navigate to="/" />;
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(actions.logout()),
  };
};
export default connect(null, mapDispatchToProps)(Logout);
