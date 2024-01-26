import React from "react";
import { NavLink } from "react-router-dom";
import { ReactDOM } from "react";

import css from "./_.module.css";
const MenuItem = (props) => (
  <li className={css.MenuItem}>
    <NavLink
      exact={props.exact}
      className={({ isActive }) => (isActive ? css.active : null)}
      to={props.link}
    >
      {props.children}
    </NavLink>
  </li>
);
export default MenuItem;
