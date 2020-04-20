import React from "react";
import Milk from "./Milk/Milk";
import classes from "./MilkshakeKit.module.css";

export default ({ price, ingredients }) => {
  let ingredientsOutput = [];

  Object.keys(ingredients).forEach((type) => {
    for (let i = 0; i < ingredients[type]; i++) {
      ingredientsOutput.push(<Milk key={type + i} type={type} />);
    }
  });
  return (
    <div className={classes.MilkshakeKit}>
      <div className={classes.plate}>{ingredientsOutput}</div>
      <div className={classes.price}>{price.toFixed(2)} som</div>
    </div>
  );
};
