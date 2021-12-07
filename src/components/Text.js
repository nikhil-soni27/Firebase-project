import React from "react";

import classes from "./text.module.css";

const Text = (props) => {
  return (
    <li className={classes.text}>
      <h2>{props.title}</h2>
    </li>
  );
};

export default Text;
