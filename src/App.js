import React from "react";
import "./App.css";
import Layout from "./containers/Layout/Layout";
import MilkshakeBuilder from "./containers/MilkshakeBuilder/MilkshakeBuilder";

export default () => {
  return (
    <div className="App">
      <Layout>
        <MilkshakeBuilder />
      </Layout>
    </div>
  );
};
