import React, { Component } from "react";
import "./index.css";

export default class CartItem extends Component {
  render() {
    return (
      <div className="cartItem">
        <img
          className="cartItem"
          src={require(`../../../static/data/products/${
            this.props.product.sku
          }_2.jpg`)}
        />
        <h1 className="cartItem">
          {this.props.product.title} ({this.props.size.toUpperCase()})
        </h1>
        <h2 className="cartItem">${this.props.product.price}</h2>
        <h2 className="cartItem">Quantity: {this.props.quantity}</h2>
        <button
          className="cartItem"
          onClick={() => this.props.removeCart(this.props.productId)}
        >
          remove
        </button>
      </div>
    );
  }
}
