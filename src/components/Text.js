import React from "react";

import classes from "./text.module.css";

const Text = (props) => {
  return (
    <li className={classes.text}>
      <img src={props.image}alt="" height="200px"></img>
      <h2>{props.title}</h2>
    </li>
  );
};

export default Text;
