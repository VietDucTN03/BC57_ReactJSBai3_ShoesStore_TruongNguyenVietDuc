import React, { Component } from "react";

export default class Modal extends Component {
  render() {
    let { content } = this.props;
    return (
      <div>
        <h4 className="mt-2">Cart</h4>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name Product</th>
              <th>Img</th>
              <th>Description</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {content.map((product) => {
              return (
                <tr key={product.id}>
                  <td>{product.id}</td>
                  <td>{product.name}</td>
                  <td>
                    <img
                      src={product.image}
                      alt="..."
                      width={100}
                      height={100}
                    />
                  </td>
                  <td width={400}>{product.description}</td>
                  <td>{product.price}</td>
                  <td>
                    <button
                      className="btn btn-success mx-2"
                      onClick={() => {
                        this.props.updateProduct(product.id, 1);
                      }}
                    >
                      +
                    </button>
                    {product.quantity}
                    <button
                      className="btn btn-success mx-2"
                      onClick={() => {
                        this.props.updateProduct(product.id, -1);
                      }}
                    >
                      -
                    </button>
                  </td>
                  <td>{product.price * product.quantity}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        this.props.deleteProduct(product.id);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
