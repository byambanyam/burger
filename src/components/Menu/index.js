import React, { Fragment } from "react";
import { connect } from "react-redux";
import css from "./_.module.css";
import MenuItem from "../Menuitem";
const Menu = (props) => (
  <div>
    <ul className={css.Menu}>
      {props.userId ? (
        <Fragment>
          <MenuItem exact link="/burger">
            ШИНЭ ЗАХИАЛГА
          </MenuItem>

          <MenuItem link="/orders">Захиалгнууд</MenuItem>
          <MenuItem link="/logout">Гарах</MenuItem>
        </Fragment>
      ) : (
        <Fragment>
          <MenuItem link="/login">нэвтрэх</MenuItem>
          <MenuItem link="/signup">Бүртгүүлэх</MenuItem>
        </Fragment>
      )}
    </ul>
  </div>
);
const mapStateToProps = (state) => {
  return {
    userId: state.signupLoginReducer.userId,
  };
};
export default connect(mapStateToProps)(Menu);
