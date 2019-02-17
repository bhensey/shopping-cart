import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import ProductTable from "./components/ProductTable";
import Cart from "./components/Cart";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { filter: [false, false, false], showCart: false, cart: {} };
    this.updateFilter = this.updateFilter.bind(this);
    this.toggleCart = this.toggleCart.bind(this);
    this.addCart = this.addCart.bind(this);
    this.removeCart = this.removeCart.bind(this);
  }
  toggleCart() {
    this.setState({ showCart: !this.state.showCart });
  }
  updateFilter(index) {
    this.setState({
      filter: { ...this.state.filter, [index]: !this.state.filter[index] }
    });
  }
  addCart(productId) {
    this.state.cart[productId]
      ? this.setState({
          cart: {
            ...this.state.cart,
            [productId]: this.state.cart[productId] + 1
          }
        })
      : this.setState({ cart: { ...this.state.cart, [productId]: 1 } });
    this.setState({ showCart: true });
  }
  removeCart(productId) {
    if (this.state.cart[productId] < 2) {
      delete this.state.cart[productId];
      this.setState({ cart: { ...this.state.cart } });
    } else {
      this.setState({
        cart: {
          ...this.state.cart,
          [productId]: this.state.cart[productId] - 1
        }
      });
    }
  }

  render() {
    let PRODUCTS = require("./static/data/products.json");
    return (
      <div>
        <Header updateFilter={this.updateFilter} />
        <ProductTable
          filter={this.state.filter}
          products={PRODUCTS}
          addCart={this.addCart}
        />
        <Cart
          toggleCart={this.toggleCart}
          showCart={this.state.showCart}
          products={PRODUCTS}
          cart={this.state.cart}
          removeCart={this.removeCart}
        />
      </div>
    );
  }
}

export default App;
