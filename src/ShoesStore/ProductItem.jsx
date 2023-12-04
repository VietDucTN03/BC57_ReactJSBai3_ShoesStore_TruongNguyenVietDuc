import React, { Component } from "react";

export default class ProductItem extends Component {
  render() {
    const { product } = this.props;
    return (
      <div className="card">
        <img src={product.image} alt="..." height={350} />
        <div className="card-body">
          <h5>{product.name}</h5>
          <p>Price: {product.price.toLocaleString()}</p>
          <button
            className="btn btn-dark"
            onClick={() => {
              this.props.setStateModal(product);
            }}
          >
            Add to Cart <i className="fa fa-cart-plus"></i>
          </button>
        </div>
      </div>
    );
  }
}
