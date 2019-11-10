import React, { Component } from "react";

export default class Basket extends Component {
  render() {
    const { cartItems } = this.props;
    return (
      <div className="basket">
        {cartItems.length === 0 ? (
          "Basket is empty"
        ) : (
          <div>you have {cartItems.length} products in the basket</div>
        )}
        {/* to push list of products inside the basket */}

        {cartItems.length > 0 && (
          <div>
            <ul>
              {cartItems.map(item => (
                <li>
                  <b>{item.title}</b>×{item.count}
                  {/* click on only 1 product amt increases, multiplies*/}
                  <button
                    className="delete-btn"
                    onClick={e => this.props.handleRemoveFromCart(e, item)}
                  >
                    X
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }
}
