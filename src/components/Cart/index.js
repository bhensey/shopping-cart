import React, { Component } from "react";
import "./index.css";
import CartItem from "./CartItem";

export default class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
    this.openFloatCart = () => {
      this.setState({ isOpen: true });
    };

    this.closeFloatCart = () => {
      this.setState({ isOpen: false });
    };
  }

  render() {
    const rows = [];
    for (let i = 0; i < this.props.cart.length; i++) {
      rows.push(
        <CartItem
          product={this.props.products.products[i]}
          quantity={this.props.cart[i][1]}
        />
      );
    }
    return (
      <div className="cart-container">
        {this.state.isOpen && (
          <div onClick={() => this.closeFloatCart()} className="cart-icon">
            Cart
          </div>
        )}
        {!this.state.isOpen && (
          <div>
            <div onClick={() => this.openFloatCart()} className="cart-icon">
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
