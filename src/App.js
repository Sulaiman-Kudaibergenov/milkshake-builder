import React from "react";
import "./App.css";
import Layout from "./containers/Layout/Layout";
import MilkshakeBuilder from "./containers/MilkshakeBuilder/MilkshakeBuilder";
import Checkout from "./containers/Checkout/Checkout";

export default () => {
  return (
    <div className="App">
      <Layout>
        <MilkshakeBuilder />
        <Checkout />
      </Layout>
    </div>
  );
};
