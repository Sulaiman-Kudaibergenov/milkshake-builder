import React, { useState } from "react";
import MilkshakeKit from "../../components/MilkshakeBuilder/MilkshakeKit/MilkshakeKit";
import classes from "./MilkshakeBuilder.module.css";
import MilkControls from "../../components/MilkshakeBuilder/MilkControls/MilkControls";
const PRICES = {
  milk: 7,
  chocolate: 10,
  banana: 8,
};
Это я Сулайман

export default () => {
  const [ingredients, setIngredients] = useState({
    milk: 0,
    chocolate: 0,
    banana: 0,
  });
  const [price, setPrice] = useState(100);

  function addIngredient(type) {
    const newIngredients = { ...ingredients };
    newIngredients[type]++;
    setIngredients(newIngredients);

    const newPrice = price + PRICES[type];
    setPrice(newPrice);
  }

  function removeIngredient(type) {
    if (ingredients[type] >= 1) {
      const newIngredients = { ...ingredients };
      newIngredients[type]--;
      setIngredients(newIngredients);

      const newPrice = price - PRICES[type];
      setPrice(newPrice);
    }
  }

  return (
    <div className={classes.MilkshakeBuilder}>
      <MilkshakeKit price={price} ingredients={ingredients} />
      <MilkControls
        ingredients={ingredients}
        addIngredient={addIngredient}
        removeIngredient={removeIngredient}
      />
    </div>
  );
};
