import React, { Component } from "react";
import ProductItem from "./ProductItem";

export default class ProductList extends Component {
  render() {
    return (
      <div>
        <h2 className="text-center">Shoes Store</h2>
        <div className="row">
          {this.props.productsData.map((product) => {
            return (
              <div className="col-4" key={product.id}>
                <ProductItem
                  product={product}
                  setStateModal={this.props.setStateModal}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
