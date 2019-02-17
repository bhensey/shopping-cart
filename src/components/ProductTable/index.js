import React, { Component } from "react";
import "./index.css";
import Product from "./Product";

export default class ProductTable extends Component {
  render() {
    const productArray = [];
    let filter = this.props.filter;
    if (!filter[0] && !filter[1] && !filter[2]) {
      filter = [true, true, true];
    } else {
      filter = [filter[0], filter[1], filter[2]];
    }
    for (let i = 0; i < this.props.products.products.length; i++) {
      let PRODUCT = this.props.products.products[i];
      let sizes = ["s", "m", "l"];
      for (let j = 0; j < filter.length; j++) {
        if (filter[j]) {
          if (PRODUCT.sizes[sizes[j]]) {
            productArray.push(
              <Product key={i} product={PRODUCT} addCart={this.props.addCart} />
            );
            break;
          }
        }
      }
    }

    return <div className="product-container">{productArray}</div>;
  }
}
