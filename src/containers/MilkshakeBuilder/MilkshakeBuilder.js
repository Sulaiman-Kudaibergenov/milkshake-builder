import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "../../axios";
import Milkshake from "../../components/MilkshakeBuilder/Milkshake/Milkshake";
import classes from "./MilkshakeBuilder.module.css";
import MilkshakeControls from "../../components/MilkshakeBuilder/MilkshakeControls/MilkshakeControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/MilkshakeBuilder/OrderSummary/OrderSummary";
import Spinner from "../../components/UI/Spinner/Spinner";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import { useSelector, useDispatch } from "react-redux";
import { load } from "../../store/actions/builder";

export default withErrorHandler(() => {
  const { ingredients, price } = useSelector((state) => state);
  const [isOrdering, setIsOrdering] = useState(false);
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    load(dispatch);
  }, [dispatch]);

  let output = <Spinner />;
  if (ingredients) {
    const canOrder = Object.values(ingredients).reduce(
      (canOrder, ingredient) => {
        return !canOrder ? ingredient.quantity > 0 : canOrder;
      },
      false
    );

    output = (
      <>
        <Milkshake price={price} ingredients={ingredients} />
        <MilkshakeControls
          startOrder={() => setIsOrdering(true)}
          canOrder={canOrder}
          ingredients={ingredients}
        />
        <Modal show={isOrdering} hideCallback={() => setIsOrdering(false)}>
          <OrderSummary
            ingredients={ingredients}
            finishOrder={() => history.push("/checkout")}
            cancelOrder={() => setIsOrdering(false)}
            price={price}
          />
        </Modal>
      </>
    );
  }

  return (
    <div className={classes.MilkshakeBuilder}>
      <h1>Milkshake builder</h1>
      {output}
    </div>
  );
}, axios);
