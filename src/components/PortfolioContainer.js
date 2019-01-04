import "./PortfolioContainer.css";
import React from "react";
import PortfolioSnapshot from "./PortfolioSnapshot";

const PortfolioContainer = props => {
  return (
    <div className="p-container">
      <div className="ui two column grid divided container">
        <div className="row">
          <div className="column">
            <PortfolioSnapshot />
          </div>
          <div className="column">
            <PortfolioSnapshot />
          </div>
        </div>
        <div className="row">
          {" "}
          <div className="column">
            <PortfolioSnapshot />
          </div>
          <div className="column">
            <PortfolioSnapshot />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioContainer;
