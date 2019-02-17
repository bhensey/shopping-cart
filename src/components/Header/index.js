import React, { Component } from "react";
import "./index.css";
import Filter from "./Filter";

export default class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="header">
        <Filter />
      </div>
    );
  }
}
