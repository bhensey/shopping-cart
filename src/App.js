import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
//import('./static/data/products.json').then(json => ...)

class Product extends Component {
  render() {
    let PRODUCT = this.props.product;
    return (
      <div className="product">
        <img src={require(`./static/data/products/${PRODUCT.sku}_1.jpg`)} />
        <h4>{PRODUCT.title}</h4>
        <h3>${PRODUCT.price}</h3>
        <button>Add to cart</button>
      </div>
    );
  }
}

class ProductTable extends Component {
  render() {
    const rows = [];
    let PRODUCTS = this.props.products;
    for (let i = 0; i < PRODUCTS.products.length; i++) {
      rows.push(<Product product={PRODUCTS.products[i]} />);
    }
    return <div>{rows}</div>;
  }
}

class Cart extends Component {
  state = { isOpen: false };
  openFloatCart = () => {
    this.setState({ isOpen: true });
  };

  closeFloatCart = () => {
    this.setState({ isOpen: false });
  };

  render() {
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
              <p>example item</p>
              <button>Checkout</button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

class App extends Component {
  render() {
    let PRODUCTS = require("./static/data/products.json");
    return (
      <div>
        <ProductTable products={PRODUCTS} />
        <Cart />
      </div>
    );
  }
}

export default App;
