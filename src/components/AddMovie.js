import React, { useRef } from "react";

import classes from "./AddMovie.module.css";

function AddMovie(props) {
  const titleRef = useRef("");

  function submitHandler(event) {
    event.preventDefault();


    const movie = {
      title: titleRef.current.value,
    };

    props.onAddMovie(movie);
  }

  return (
    <form onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" ref={titleRef} />
        <input type="file" accept="image/png"/>
      </div>
      <button className="btn">Add Text</button>
    </form>
  );
}

export default AddMovie;
