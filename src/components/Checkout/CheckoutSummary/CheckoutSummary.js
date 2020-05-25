import React from "react";
import { Route } from "react-router-dom";
import classes from "./CheckoutSummary.module.css";
import Button from "../../UI/Button/Button";
import Milkshake from "../../MilkshakeBuilder/Milkshake/Milkshake";

export default ({ price, ingredients, checkoutContinue, checkoutCancel }) => {
  return (
    <div className={classes.CheckoutSummary}>
      <Milkshake price={price} ingredients={ingredients} />
      <Route path="/checkout" exact>
        <Button click={checkoutContinue} green>
          Continue
        </Button>
        <Button click={checkoutCancel} red>
          Cancel
        </Button>
      </Route>
    </div>
  );
};
