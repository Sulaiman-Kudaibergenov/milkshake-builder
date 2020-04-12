import React from "react";
import classes from "./MilkControl.module.css";

export default ({ control, removeIngredient, addIngredient, disabled }) => (
  <div className={classes.MilkControl}>
    <button
      className={classes.less}
      onClick={() => removeIngredient(control.type)}
      disabled={disabled}
    >
      -
    </button>
    <span className={classes.label}>{control.label}</span>
    <button
      className={classes.more}
      onClick={() => addIngredient(control.type)}
    >
      +
    </button>
  </div>
);
