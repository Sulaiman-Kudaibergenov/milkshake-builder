import React, { useState, useEffect } from "react";
import Milkshake from "../../components/MilkshakeBuilder/Milkshake/Milkshake";
import classes from "./MilkshakeBuilder.module.css";
import MilkshakeControls from "../../components/MilkshakeBuilder/MilkshakeControls/MilkshakeControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/MilkshakeBuilder/OrderSummary/OrderSummary";
import axios from "../../axios";
import Spinner from "../../components/UI/Spinner/Spinner";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";

const PRICES = {
  chocolate: 10.5,
  banana: 8.7,
  cherry: 5.9,
  strawberry: 6.0,
  orange: 14.5,
  berry: 15.6,
};

export default withErrorHandler(() => {
  const [ingredients, setIngredients] = useState(null);
  const [price, setPrice] = useState(100);
  const [canOrder, setCanOrder] = useState(false);
  const [isOrdering, setIsOrdering] = useState(false);
  const [loading, setLoading] = useState(false);

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
    const order = {
      ingredients: ingredients,
      price: price,
      delivery: "Fast",
      customer: {
        name: "Sultan",
        phone: "0500100700",
        address: {
          street: "Toktogula",
          city: "Karakol",
        },
      },
    };

    setLoading(true);
    axios.post("/orders.json", order).then((response) => {
      setLoading(false);
      setIsOrdering(false);
    });
  }

  function addIngredient(type) {
    const newIngredients = { ...ingredients };
    newIngredients[type]++;
    setIngredients(newIngredients);
    checkCanOrder(newIngredients);

    const newPrice = price + PRICES[type];
    setPrice(newPrice);
  }

  function removeIngredient(type) {
    if (ingredients[type] >= 1) {
      const newIngredients = { ...ingredients };
      newIngredients[type]--;
      setIngredients(newIngredients);
      checkCanOrder(newIngredients);

      const newPrice = price - PRICES[type];
      setPrice(newPrice);
    }
  }

  useEffect(() => {
    axios
      .get("/ingredients.json")
      .then((response) => setIngredients(response.data))
      .catch((error) => {});
  }, []);

  let output = <Spinner />;
  if (ingredients) {
    output = (
      <>
        <Milkshake price={price} ingredients={ingredients} />
        <MilkshakeControls
          startOrder={startOrder}
          canOrder={canOrder}
          ingredients={ingredients}
          addIngredient={addIngredient}
          removeIngredient={removeIngredient}
        />
      </>
    );
  }

  let orderSummary = <Spinner />;
  if (isOrdering && !loading) {
    orderSummary = (
      <OrderSummary
        ingredients={ingredients}
        finishOrder={finishOrder}
        cancelOrder={cancelOrder}
        price={price}
      />
    );
  }

  return (
    <div className={classes.MilkshakeBuilder}>
      {output}
      <Modal show={isOrdering} hideCallback={cancelOrder}>
        {orderSummary}
      </Modal>
    </div>
  );
}, axios);
