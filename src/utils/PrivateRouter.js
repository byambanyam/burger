import { Outlet, Navigate } from "react-router";
import { connect } from "react-redux";
const privateRoute = (props) => {
  return props.userId ? <Outlet /> : <Navigate to="/login" />;
};

const mapStateToProps = (state) => {
  return {
    userId: state.signupLoginReducer.userId,
  };
};

export default connect(mapStateToProps)(privateRoute);
