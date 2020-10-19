import React from "react";
import Ingredient from "./Ingredient/Ingredient";
import classes from "./Milkshake.module.css";

export default ({ price, ingredients }) => {
  let ingredientsOutput = [];

  Object.keys(ingredients).forEach((ingredient) => {
    for (let i = 0; i < ingredients[ingredient].quantity; i++) {
      console.log(ingredients);

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
          backgroundColor: `rgba(${ingredients.banana.quantity * 7}, ${
            ingredients.berry.quantity * 7
          },
          ${ingredients.orange.quantity * 7},
          
          ${ingredients.chocolate.quantity * 0.1})`,
        }}
      >
        {ingredientsOutput}
      </div>
      <div className={classes.price}>{price.toFixed(2)} som</div>
    </div>
  );
};
