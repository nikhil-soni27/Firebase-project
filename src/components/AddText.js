import React, { useRef } from "react";

import classes from "./AddText.module.css";

function AddText(props) {
  const titleRef = useRef("");

  function submitHandler(event) {
    event.preventDefault();


    const text = {
      title: titleRef.current.value,
    };

    props.onAddText(text);
  }

  return (
    <form onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" ref={titleRef} />
        {/* <input type="file" accept="image/png"/> */}
      </div>
      <button className="btn">Add Text</button>
    </form>
  );
}

export default AddText;
