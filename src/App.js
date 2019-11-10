import React, { Component } from "react";
import "./App.css";
import Products from "./components/products";
import Basket from "./components/Basket";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      filteredProducts: [],
      cartItems: []
    };
  }
  componentWillMount() {
    fetch("http://localhost:4000/products")
      .then(res => res.json())
      .then(data =>
        this.setState({
          products: data,
          filteredProducts: data
        })
      ); /* fetch the data from localstorage & change to javascript object, after basket function */
    /* if (localStorage.getItem("cartItems")) {
      this.setState({
        cartItems: JSON.parse(localStorage.getItem("cartItems"))
      });
    } */
  }

  render() {
    return (
      <div className="App">
        <Products
          products={this.state.filteredProducts}
          handleAddToCart={this.handleAddToCart}
        />
        <Basket
          cartItems={this.state.cartItems}
          handleRemoveFromCart={this.handleRemoveFromCart}
        />
      </div>
    );
  }
}

export default App;
