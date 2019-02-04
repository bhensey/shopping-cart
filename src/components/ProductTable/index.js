import React, { Component } from "react";
import "./index.css";
import Product from "./Product";

export default class ProductTable extends Component {
  render() {
    const productArray = [];
    for (let i = 0; i < this.props.products.products.length; i++) {
      productArray.push(<Product product={this.props.products.products[i]} />);
    }
    return <div>{productArray}</div>;
  }
}
