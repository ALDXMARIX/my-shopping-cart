import React, { Component } from "react";
import formatCurrency from "../utility/util";


export default class Products extends Component {


  render() {
    console.log(this.props.products);
    const { products } = this.props;
    console.log(products);
    return (
      <div>
        <ul className="products">

        {products ? products.map((product) => (

            <li key={product._id}>
              <div className="product">
                <a href={"#" + product._id}>
                  <img src={product.image} alt={product.title}></img>
                  <p>{product.title}</p>
                </a>
                <div className="product-price">
                  <div>{formatCurrency(product.price)}</div>                  
                  <button className="button primary">Add To Cart</button>
                </div>
              </div>
            </li>
          )): <p className="no-products">Loading products...</p>
        }}
        </ul>
      </div>
    );
  }
}

