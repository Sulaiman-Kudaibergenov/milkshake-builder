import React from "react";
import classes from "./Milk.module.css";

export default ({ type }) => {
  const milkClasses = [classes.Milk, classes[type]];

  return <div className={milkClasses.join(" ")}></div>;
};
