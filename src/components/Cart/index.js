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
        let id = key.substring(0, key.length - 2);
        let size = key[key.length - 1];
        console.log(id, size);
        rows.push(
          <CartItem
            key={key}
            product={this.props.products.products[id]}
            productId={key}
            size={size}
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
