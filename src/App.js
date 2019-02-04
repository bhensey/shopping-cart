import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import ProductTable from "./components/ProductTable";
import Cart from "./components/Cart";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { cartOpen: false, cart: [[0, 2], [1, 1], [2, 0]] };
  }

  render() {
    let PRODUCTS = require("./static/data/products.json");
    return (
      <div>
        <ProductTable products={PRODUCTS} />
        <Cart products={PRODUCTS} cart={this.state.cart} />
      </div>
    );
  }
}

export default App;
