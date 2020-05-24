import React from "react";
import classes from "./CheckoutSummary.module.css";
import Button from "../../UI/Button/Button";
import Milkshake from "../../MilkshakeBuilder/Milkshake/Milkshake";

export default ({ price, ingredients }) => {
  return (
    <div className={classes.CheckoutSummary}>
      <Milkshake price={price} ingredients={ingredients} />
      <Button red>Cancel</Button>
      <Button green>Continue</Button>
    </div>
  );
};
