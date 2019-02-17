import React, { Component } from "react";
import "./index.css";
import CartItem from "./CartItem";

export default class Cart extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const rows = [];
    for (var key in this.props.cart) {
      if (this.props.cart.hasOwnProperty(key)) {
        rows.push(
          <CartItem
            key={key}
            product={this.props.products.products[key]}
            quantity={this.props.cart[key]}
            removeCart={this.props.removeCart}
          />
        );
      }
    }
    return (
      <div className="cart-container">
        {!this.props.showCart && (
          <div onClick={() => this.props.toggleCart()} className="cart-icon">
            Cart
          </div>
        )}
        {this.props.showCart && (
          <div>
            <div onClick={() => this.props.toggleCart()} className="cart-icon">
              Cart
            </div>
            <div className="cart">
              <h2>Cart</h2>
              {rows}
              <button id="checkout">Checkout</button>
            </div>
          </div>
        )}
      </div>
    );
  }
}
