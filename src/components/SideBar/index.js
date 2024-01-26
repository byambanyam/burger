import React from "react";
import css from "./_.module.css";
import Logo from "../Logo";
import Menu from "../Menu";
import Shadow from "../general/Shadow";
const SideBar = (props) => {
  let classes = [css.SideBar, css.Close];
  if (props.showSidebar) {
    classes = [css.SideBar, css.Open];
  }
  return (
    <div>
      <Shadow oneClicked={props.toggleSideBar} show={props.showSidebar} />
      <div onClick={props.toggleSideBar} className={classes.join(" ")}>
        <div className={css.Logo}>
          <Logo />
        </div>
        <Menu />
      </div>
    </div>
  );
};
export default SideBar;
