import React from "react";
import classes from "./Milk.module.css";

export default ({ type }) => {
  const milkClasses = [classes.Milk];

  switch (type) {
    case "milk":
      milkClasses.push(classes.milk);
      break;

    case "chocolate":
      milkClasses.push(classes.chocolate);
      break;

    case "banana":
    default:
      milkClasses.push(classes.banana);
      break;
  }

  return <div className={milkClasses.join(" ")}></div>;
};
