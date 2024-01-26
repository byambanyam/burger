import React from "react";
import css from "./_.module.css";
const Shadow = (props) => {
  return props.show ? (
    <div onClick={props.oneClicked} className={css.shadow}></div>
  ) : null;
};
export default Shadow;
