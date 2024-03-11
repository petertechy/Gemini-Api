import React from "react";
import classes from "./styles/Wrapper.module.css";
import { Link } from "react-router-dom";


const Wrapper = (props) => {
  const options = [
    { name: "Home", link: "/landing" },
    { name: "About Us", link: "/about-us" },
    { name: "Sign In Page", link: "/sign-in" },
  ];
  return (
    <div className={classes.container}>
      <div>
        <ul>
          
          {options.map((option) => (
            <li key={option}>
              
              <Link className={classes.options} to={option.link}> {option.name}</Link>
         
              
              </li>
          ))}
        </ul>
      </div>
      <div>{props.children}</div>
    </div>
  );
};

export default Wrapper;

// 09095260292
