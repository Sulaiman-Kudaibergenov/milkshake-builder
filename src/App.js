import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import Layout from "./containers/Layout/Layout";
import MilkshakeBuilder from "./containers/MilkshakeBuilder/MilkshakeBuilder";
import Checkout from "./containers/Checkout/Checkout";
import Orders from "./containers/Orders/Orders";

export default () => {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/builder" />
          </Route>
          <Route path="/builder">
            <MilkshakeBuilder />
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/orders">
            <Orders />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
};
