import React, { Component } from "react";
import "./index.css";
import Product from "./Product";

export default class ProductTable extends Component {
  render() {
    const productArray = [];
    for (let i = 0; i < this.props.products.products.length; i++) {
      let PRODUCT = this.props.products.products[i];
      productArray.push(
        <Product key={i} product={PRODUCT} addCart={this.props.addCart} />
      );
    }

    return <div className="product-container">{productArray}</div>;
  }
}
