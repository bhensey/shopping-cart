import React, { Component } from "react";
import "./index.css";

export default class Cart extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="filter">
        <h4>Sizes:</h4>
        <span className="filter"> S </span>
        <span className="filter"> M </span>
        <span className="filter"> L</span>
      </div>
    );
  }
}
