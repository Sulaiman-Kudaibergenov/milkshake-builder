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
      <div className={classes.bento}>{ingredientsOutput}</div>
      <div className={classes.price}>Total price: {price} som</div>
    </div>
  );
};
