import React from "react";
import classes from "./MilkshakeControls.module.css";
import MilkshakeControl from "./MilkshakeControl/MilkshakeControl";
import Button from "../../UI/Button/Button";

const CONTROLS = [
  { label: "Chocolate", type: "chocolate" },
  { label: "Banana", type: "banana" },
  { label: "Cherry", type: "cherry" },
  { label: "Strawberry", type: "strawberry" },
  { label: "Orange-juice", type: "orange" },
  { label: "Berry-syrup", type: "berry" },
];
export default ({
  canOrder,
  ingredients,
  addIngredient,
  removeIngredient,
  startOrder,
}) => {
  const controlsOutput = CONTROLS.map((control) => (
    <MilkshakeControl
      key={control.type}
      control={control}
      addIngredient={addIngredient}
      removeIngredient={removeIngredient}
      disabled={ingredients[control.type] === 0}
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
