import React, { Component } from "react";
import "./index.css";

export default class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = { filter: [false, false, false] };
    this.toggleFilter = this.toggleFilter.bind(this);
  }

  toggleFilter(index) {
    this.setState({
      filter: {
        ...this.state.filter,
        [index]: !this.state.filter[index]
      }
    });
    this.props.updateFilter(index);
  }

  render() {
    const buttonStyles = {
      enabled: {
        backgroundColor: "slateBlue",
        color: "white"
      },
      disabled: {
        backgroundColor: "white",
        color: "black"
      }
    };
    return (
      <div className="filter">
        <h4>Sizes:</h4>
        <span
          style={
            this.state.filter[0] ? buttonStyles.enabled : buttonStyles.disabled
          }
          onClick={() => this.toggleFilter(0)}
          className="filter"
        >
          S
        </span>
        <span
          style={
            this.state.filter[1] ? buttonStyles.enabled : buttonStyles.disabled
          }
          onClick={() => this.toggleFilter(1)}
          className="filter"
        >
          M
        </span>
        <span
          style={
            this.state.filter[2] ? buttonStyles.enabled : buttonStyles.disabled
          }
          onClick={() => this.toggleFilter(2)}
          className="filter"
        >
          L
        </span>
      </div>
    );
  }
}
