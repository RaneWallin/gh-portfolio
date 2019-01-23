import "../styles/variables.scss";
import "../styles/mixins.scss";
import "../styles/global.scss";
import "../styles/App.scss";
import React, { Component } from "react";
import Header from "./Header";
import TagCloud from "./TagCloud";
import PortfolioContainer from "./PortfolioContainer";
import Footer from "./Footer";
import { BrowserRouter as Router } from "react-router-dom";
import Navigation from "../Navigation";

const App = () => {
  return (
    <Router>
      <Navigation />
    </Router>
  );
};

export default App;
