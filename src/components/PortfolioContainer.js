import "../styles/PortfolioContainer.scss";
import React, { Component } from "react";
import PortfolioSnapshot from "./PortfolioSnapshot";

class PortfolioContainer extends Component {
  getData = () => {
    return "portfolio";
  };
  render() {
    return <div className="p-container">{this.getData()}</div>;
  }
}

export default PortfolioContainer;
