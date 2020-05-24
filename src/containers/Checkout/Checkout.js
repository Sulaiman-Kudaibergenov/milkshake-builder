import React from "react";
import { useHistory } from "react-router-dom";
import CheckoutSummary from "../../components/Checkout/CheckoutSummary/CheckoutSummary";
import classes from "./Checkout.module.css";

export default () => {
  const history = useHistory();
  const ingredients = {
    chocolate: 0,
    banana: 0,
    cherry: 0,
    strawberry: 0,
    berry: 0,
    orange: 0,
  };
  const price = 123;
  function checkoutCancel() {
    history.push("/builder");
  }

  function checkoutContinue() {
    history.push("/checkout/finish");
  }

  return (
    <div className={classes.Checkout}>
      <CheckoutSummary
        ingredients={ingredients}
        price={price}
        checkoutCancel={checkoutCancel}
        checkoutContinue={checkoutContinue}
      />
    </div>
  );
};
