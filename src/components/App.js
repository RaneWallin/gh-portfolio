import "../styles/variables.scss";
import "../styles/mixins.scss";
import "../styles/global.scss";
import "../styles/App.scss";
import React, { Component } from "react";
import Header from "../Portfolio/Header";
import TagCloud from "../Portfolio/TagCloud";
import PortfolioContainer from "../Portfolio/PortfolioContainer";
import Footer from "../Portfolio/Footer";
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
