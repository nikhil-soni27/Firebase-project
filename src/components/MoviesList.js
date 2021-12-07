import React from "react";

import Movie from "./Movie";
import classes from "./MoviesList.module.css";

const MovieList = (props) => {
  return (
    <ul className={classes["movies-list"]}>
      {props.text.map((movie) => (
        <Movie key={movie.id} title={movie.title} />
      ))}
    </ul>
  );
};

export default MovieList;
