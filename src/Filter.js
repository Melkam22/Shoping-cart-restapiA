import React, { Component } from "react";

class Filter extends Component {
  render() {
    return (
      <div className="filter-heading">
        <div className="row">{this.props.count} products are available.</div>
        {/* we ll see the number of products at the top of our page */}
        <div className="col-md-4">
          <label>
            {/* filter by price */}
            Order by:
            <select
              className="form-control"
              value={this.props.sort}
              onChange={
                this.props.handleChangeSort
              } /* handle it in the app.js */
            >
              <option value="">Select</option>
              <option value="lowest">Lowest to Highest Price</option>
              <option value="highest">Highest to Lowest Price</option>
            </select>
          </label>
          <div className="col-md-4"></div>
          <label>
            {/* filter by id */}
            Filter Size:
            <select
              className="form-control"
              value={this.props.size}
              onChange={
                this.props.handleChangeSize
              } /* handle the function in the app.js */
            >
              <option value="">Select</option>
              <option value="">ALL</option>
              <option value="xs">XS</option>
              <option value="s">S</option>
              <option value="m">M</option>
              <option value="l">L</option>
              <option value="xl">XL</option>
              <option value="xxl">XXL</option>
            </select>
          </label>
        </div>
      </div>
    );
  }
}

export default Filter;
