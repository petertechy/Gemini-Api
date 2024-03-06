import React from "react";
import classes from "./styles/OurServices.module.css";

const OurServices = (props) => {
  return (
    <div className={classes.container}>
      <h3>{props.title}</h3>
      <p>
       {props.body}
      </p>
      <a className={classes.link} href=''>Learn More &rarr;</a>
    </div>
  );
};

export default OurServices;
