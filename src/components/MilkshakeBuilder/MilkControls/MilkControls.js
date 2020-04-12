import React from "react";
import classes from "./MilkControls.module.css";
import MilkControl from "./MilkControl/MilkControl";

const CONTROLS = [
  { label: "Milk", type: "milk" },
  { label: "Chocolate", type: "chocolate" },
  { label: "Banana", type: "banana" },
];

export default ({ ingredients, addIngredient, removeIngredient }) => {
  const controlsOutput = CONTROLS.map((control) => (
    <MilkControl
      key={control.type}
      control={control}
      addIngredient={addIngredient}
      removeIngredient={removeIngredient}
      disabled={ingredients[control.type] === 0}
    />
  ));

  return <div className={classes.MilkControls}>{controlsOutput}</div>;
};
