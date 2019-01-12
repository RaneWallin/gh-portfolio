import "../styles/PortfolioSnapshot.css";
import React from "react";

const PortfolioSnapshot = props => {
  return (
    <div className="ui card">
      <div className="image">
        <img src={require("../images/thumbnail.jpg")} alt="thumbnail" />
      </div>
      <div className="content">
        <a href="index.html" className="header">
          Project Name
        </a>
        <div className="meta">
          <span>tag</span>
        </div>
        <div className="description">This is a project card</div>
      </div>
    </div>
  );
};

export default PortfolioSnapshot;
