import React, { Component } from "react";
import currency from "../currency";

class Products extends Component {
  render() {
    const productsContainer = this.props.products.map(product => (
      <div className="content" key={product.id}>
        <h1>P</h1>
        <div className="box">
          <a
            href={`#${product.id}`}
            onClick={e => this.props.handleAddToCart(e, product)}
          >
            <img src={`/products/${product.sku}`} alt={product.title} />
            <p>{product.title}</p>
          </a>
          <div className="price-btn">
            <p>{currency.formatCurrency(product.price)}</p>
            <button
              className="btn"
              onClick={e => this.props.handleAddToCart(e, product)}
            >
              Add to Basket
            </button>
          </div>
        </div>
      </div>
    ));
    return <div className="content-basket">{productsContainer}</div>;
  }
}

export default Products;
