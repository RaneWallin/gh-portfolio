import "../styles/Header.scss";
import React from "react";

const Header = props => {
  return (
    <div className="app-header">
      <div className="header-container">
        <h1>Rane Wallin</h1>
        <p className="bio">
          Rane loves hiking, fishing, and crafting. She lives in Phoenix, AZ
          where there's 300+ days of sunshine a year and is yearning to move to
          a place with trees and rainy days.
        </p>
      </div>
    </div>
  );
};

export default Header;
