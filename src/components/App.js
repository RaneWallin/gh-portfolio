import React, { Component } from "react";
import Header from "./Header";
import TagCloud from "./TagCloud";
import PortfolioContainer from "./PortfolioContainer";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <TagCloud />
        <PortfolioContainer />
      </div>
    );
  }
}

export default App;
