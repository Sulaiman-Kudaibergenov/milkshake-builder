import React from "react";
import Ingredient from "./Ingredient/Ingredient";
import classes from "./Milkshake.module.css";

export default ({ price, ingredients }) => {
  let ingredientsOutput = [];

  Object.keys(ingredients).forEach((type) => {
    for (let i = 0; i < ingredients[type]; i++) {
      ingredientsOutput.push(<Ingredient key={type + i} type={type} />);
    }
  });
  return (
    <div className={classes.Milkshake}>
      <div className={classes.plate}>{ingredientsOutput}</div>
      <div className={classes.price}>{price.toFixed(2)} som</div>
    </div>
  );
};
