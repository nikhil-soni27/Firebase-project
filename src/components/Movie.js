import React from "react";

import classes from "./Movie.module.css";

const Movie = (props) => {
  return (
    <li className={classes.movie}>
      <h2>{props.title}</h2>
    </li>
  );
};

export default Movie;
