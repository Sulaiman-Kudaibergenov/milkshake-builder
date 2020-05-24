import React from "react";
import classes from "./CheckoutSummary.module.css";
import Button from "../../UI/Button/Button";
import Milkshake from "../../MilkshakeBuilder/Milkshake/Milkshake";

export default ({ price, ingredients, checkoutContinue, checkoutCancel }) => {
  return (
    <div className={classes.CheckoutSummary}>
      <Milkshake price={price} ingredients={ingredients} />
      <Button click={checkoutContinue} green>
        Continue
      </Button>
      <Button click={checkoutCancel} red>
        Cancel
      </Button>
    </div>
  );
};
