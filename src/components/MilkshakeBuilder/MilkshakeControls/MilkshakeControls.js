import React from "react";
import classes from "./MilkshakeControls.module.css";
import MilkshakeControl from "./MilkshakeControl/MilkshakeControl";
import Button from "../../UI/Button/Button";

export default ({ canOrder, ingredients, startOrder }) => {
  const controlsOutput = Object.keys(ingredients).map((ingredient) => (
    <MilkshakeControl
      key={ingredient}
      ingredient={ingredient}
      label={ingredients[ingredient].label}
      disabled={ingredients[ingredient].quantity === 0}
    />
  ));

  return (
    <div className={classes.MilkshakeControls}>
      {controlsOutput}
      <Button click={startOrder} enabled={canOrder}>
        Order
      </Button>
    </div>
  );
};
