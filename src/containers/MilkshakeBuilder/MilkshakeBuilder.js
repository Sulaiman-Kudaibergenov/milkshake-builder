import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "../../axios";
import Milkshake from "../../components/MilkshakeBuilder/Milkshake/Milkshake";
import classes from "./MilkshakeBuilder.module.css";
import MilkshakeControls from "../../components/MilkshakeBuilder/MilkshakeControls/MilkshakeControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/MilkshakeBuilder/OrderSummary/OrderSummary";
import Spinner from "../../components/UI/Spinner/Spinner";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import { useSelector } from "react-redux";

export default withErrorHandler(() => {
  const { ingredients, price } = useSelector((state) => state);
  const [isOrdering, setIsOrdering] = useState(false);
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const canOrder = Object.values(ingredients).reduce((canOrder, ingredient) => {
    return !canOrder ? ingredient.quantity > 0 : canOrder;
  }, false);

  /*
  useEffect(() => {
    axios
      .get("/ingredients.json")
      .then((response) => setIngredients(response.data))
      .catch((error) => {});
  }, []);
*/
  let output = <Spinner />;
  if (ingredients) {
    output = (
      <>
        <Milkshake price={price} ingredients={ingredients} />
        <MilkshakeControls
          startOrder={() => setIsOrdering(true)}
          canOrder={canOrder}
          ingredients={ingredients}
        />
      </>
    );
  }

  let orderSummary = <Spinner />;
  if (isOrdering && !loading) {
    orderSummary = (
      <OrderSummary
        ingredients={ingredients}
        finishOrder={() => history.push("/checkout")}
        cancelOrder={() => setIsOrdering(false)}
        price={price}
      />
    );
  }

  return (
    <div className={classes.MilkshakeBuilder}>
      <h1>Milkshake builder</h1>
      {output}
      <Modal show={isOrdering} hideCallback={() => setIsOrdering(false)}>
        {orderSummary}
      </Modal>
    </div>
  );
}, axios);
