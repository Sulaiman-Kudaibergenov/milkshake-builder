import React from "react";
import CheckoutSummary from "../../components/Checkout/CheckoutSummary/CheckoutSummary";
import classes from "./Checkout.module.css";

export default () => {
  const ingredients = {
    chocolate: 0,
    banana: 0,
    cherry: 0,
    strawberry: 0,
    berry: 0,
    orange: 0,
  };
  const price = 123;

  return (
    <div className={classes.Checkout}>
      <CheckoutSummary ingredients={ingredients} price={price} />
    </div>
  );
};
