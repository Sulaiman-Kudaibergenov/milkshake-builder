import React from "react";
import classes from "./Ingredient.module.css";

export default ({ type }) => {
  const ingredientClasses = [classes.Ingredient, classes[type]];

  return <div className={ingredientClasses.join(" ")}></div>;
};
