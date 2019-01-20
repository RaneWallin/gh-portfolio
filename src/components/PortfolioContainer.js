import "../styles/PortfolioContainer.scss";
import React, { Component } from "react";
import PortfolioSnapshot from "./PortfolioSnapshot";

class PortfolioContainer extends Component {
  getData = () => {
    let xmlhttp = new XMLHttpRequest();
    let display = null;
    let projectURL = "../projects/";
    xmlhttp.open("GET", require(`../projects/projects`), false);
    xmlhttp.onload = function() {
      display = xmlhttp.response.split("\n");
    };
    xmlhttp.send();
    console.log(display);

    display.forEach(project => {
      let projectDisplay = "";
      let fileLocation = projectURL + project;
      console.log(fileLocation);
      xmlhttp.open("GET", require(`../projects/` + project), false);
      xmlhttp.onload = function() {
        projectDisplay = xmlhttp.response;
      };
      xmlhttp.send();
      console.log(projectDisplay);
    });
  };
  render() {
    return <div className="p-container">{this.getData()}</div>;
  }
}

export default PortfolioContainer;
