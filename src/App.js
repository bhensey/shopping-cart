import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import ProductTable from "./components/ProductTable";
import Cart from "./components/Cart";
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

firebase.initializeApp({
  apiKey: "AIzaSyAVselQDrQJ9DQfK0F0k0aGcLwAYPXXfs4",
  authDomain: "new-shopping-cart-76c2b.firebaseapp.com"
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSignedIn: false,
      filter: [false, false, false],
      showCart: false,
      cart: {}
    };
    this.updateFilter = this.updateFilter.bind(this);
    this.toggleCart = this.toggleCart.bind(this);
    this.addCart = this.addCart.bind(this);
    this.removeCart = this.removeCart.bind(this);
  }

  uiConfig = {
    signInFlow: "popup",
    signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
    callbacks: {
      signInSuccessWithAuthResult: () => false
    }
  };

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ isSignedIn: !!user });
      console.log("user", user);
    });
  };

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
      <div className="App">
        <div className="header-container">
          {this.state.isSignedIn ? (
            <div className="auth">
              <h3>
                Welcome {firebase.auth().currentUser.displayName.split(" ")[0]}
              </h3>
              <button onClick={() => firebase.auth().signOut()}>
                Sign out!
              </button>
            </div>
          ) : (
            <div className="disauth">
              <StyledFirebaseAuth
                className="signin"
                uiConfig={this.uiConfig}
                firebaseAuth={firebase.auth()}
              />
            </div>
          )}
          <Header className="header" updateFilter={this.updateFilter} />
        </div>
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
