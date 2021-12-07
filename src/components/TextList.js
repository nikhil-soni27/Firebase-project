import React from "react";

import Text from "./Text";
import classes from "./TextList.module.css";

const TextList = (props) => {
  return (
    <ul className={classes["text-list"]}>
      {props.text.map((data) => (
        <Text key={data.id} title={data.title} />
      ))}
    </ul>
  );
};

export default TextList;
