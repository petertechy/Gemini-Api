import React from "react";
import classes from "./styles/Wrapper.module.css";
const Wrapper = (props) => {

  return (
    <div className={classes.container}>
      <div>
        <ul>
          <li>Home</li>
          <li>Abraod</li>
          <li>Maldives</li>
          <li>Unable to Find</li>
        </ul>
      </div>
      <div>
       {props.children}
      </div>
    </div>
  );
};

export default Wrapper;
