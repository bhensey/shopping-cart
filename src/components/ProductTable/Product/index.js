import React, { Component } from "react";
import "./index.css";

export default class Product extends Component {
  render() {
    let PRODUCT = this.props.product;
    return (
      <div className="product">
        <img
          src={require(`../../../static/data/products/${PRODUCT.sku}_1.jpg`)}
        />
        <h4>{PRODUCT.title}</h4>
        <h3>${PRODUCT.price}</h3>
        <button onClick={() => this.props.addCart(PRODUCT.id)}>
          Add to cart
        </button>
      </div>
    );
  }
}
