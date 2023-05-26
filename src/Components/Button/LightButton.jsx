import React from "react";
import classes from "./LightButton.module.css";

const LightButton = (props) => {
  return (
    <button className={classes.light} type={props.type} onClick={props.onClick}>
      {props.name}
    </button>
  );
};

export default LightButton;
