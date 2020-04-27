import React, { useState } from "react";
import MilkshakeKit from "../../components/MilkshakeBuilder/MilkshakeKit/MilkshakeKit";
import classes from "./MilkshakeBuilder.module.css";
import MilkControls from "../../components/MilkshakeBuilder/MilkControls/MilkControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/MilkshakeBuilder/OrderSummary/OrderSummary";

const PRICES = {
  milk: 7,
  chocolate: 10,
  banana: 8,
  cherry: 5,
  strawberry: 6,
  orange: 14,
  berry: 15,
};

export default () => {
  const [ingredients, setIngredients] = useState({
    milk: 0,
    chocolate: 0,
    banana: 0,
    cherry: 0,
    strawberry: 0,
    orange: 0,
    berry: 0,
  });
  const [price, setPrice] = useState(100);
  const [canOrder, setCanOrder] = useState(false);
  const [isOrdering, setIsOrdering] = useState(false);

  function checkCanOrder(ingredients) {
    const total = Object.keys(ingredients).reduce((total, ingredient) => {
      return total + ingredients[ingredient];
    }, 0);
    setCanOrder(total > 0);
  }
  function startOrder() {
    setIsOrdering(true);
  }

  function cancelOrder() {
    setIsOrdering(false);
  }

  function finishOrder() {
    alert("You are on the checkout page!");
  }

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
        startOrder={startOrder}
        canOrder={canOrder}
        ingredients={ingredients}
        addIngredient={addIngredient}
        removeIngredient={removeIngredient}
      />
      <Modal show={isOrdering} hideCallback={cancelOrder}>
        <OrderSummary
          ingredients={ingredients}
          finishOrder={finishOrder}
          cancelOrder={cancelOrder}
          price={price}
        />
      </Modal>
    </div>
  );
};
