import React, { Component } from "react";
import "./App.css";
import Products from "./components/products";
import Basket from "./components/Basket";
import Filter from "./Filter";

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
  handleAddToCart = (e, product) => {
    this.setState(state => {
      const cartItems = state.cartItems;
      let productAlreadyInCart = false;
      cartItems.forEach(item => {
        if (item.id === product.id) {
          productAlreadyInCart = true;
          item.count++;
        }
      });
      if (!productAlreadyInCart) {
        cartItems.push({ ...product, count: 1 });
      }
      /* localStorage.setItem("cartItems", JSON.stringify(cartItems));
      return cartItems; */
    });
  };
  handleRemoveFromCart = (e, item) => {
    this.setState(state => {
      const cartItems = state.cartItems.filter(elem => elem.id !== item.id);
      localStorage.setItem("cartItem", cartItems);
      return { cartItems };
    });
  };
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
        <Filter />
      </div>
    );
  }
}

export default App;
