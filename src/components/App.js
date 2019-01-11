import "../styles/variables.scss";
import "../styles/mixins.scss";
import "../styles/global.scss";
import "../styles/App.scss";
import React, { Component } from "react";
import Header from "./Header";
import TagCloud from "./TagCloud";
import PortfolioContainer from "./PortfolioContainer";
import Footer from "./Footer";

class App extends Component {
  render() {
    return (
      <div className="apptainer">
        <Header />
        <TagCloud />
        <PortfolioContainer />
        <Footer />
      </div>
    );
  }
}

export default App;
