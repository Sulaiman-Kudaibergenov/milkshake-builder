import React from "react";
import Ingredient from "./Ingredient/Ingredient";
import classes from "./Milkshake.module.css";

export default ({ price, ingredients }) => {
  let ingredientsOutput = [];

  Object.keys(ingredients).forEach((ingredient) => {
    for (let i = 0; i < ingredients[ingredient].quantity; i++) {
      console.log(ingredients.chocolate.quantity);

      ingredientsOutput.push(
        <Ingredient key={ingredient + i} type={ingredient} />
      );
    }
  });

  return (
    <div className={classes.Milkshake}>
      <div
        className={classes.plate}
        style={{
          backgroundColor: `rgba(78, 27, 27, ${
            ingredients.chocolate.quantity * 0.1
          })`,
        }}
      >
        {ingredientsOutput}
      </div>
      <div className={classes.price}>{price.toFixed(2)} som</div>
    </div>
  );
};
