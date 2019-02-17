import React, { Component } from "react";
import "./index.css";
import Product from "./Product";

export default class ProductTable extends Component {
  render() {
    const productArray = [];
    for (let i = 0; i < this.props.products.products.length; i++) {
      productArray.push(
        <Product
          key={i}
          product={this.props.products.products[i]}
          addCart={this.props.addCart}
        />
      );
    }
    return <div>{productArray}</div>;
  }
}
