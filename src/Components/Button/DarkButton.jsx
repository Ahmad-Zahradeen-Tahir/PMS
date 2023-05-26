import React from "react";
import classes from './DarkButton.module.css'

const DarkButton = (props) => {
  return (
    <button className={classes.dark} type={props.type} onClick={props.onClick}>
      {props.name}
    </button>
  );
};

export default DarkButton;
