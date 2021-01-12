import React, { Component } from "react";
import formatCurrency from "../utility/util";
import Fade from "react-reveal/Fade"
import Zoom from "react-reveal/Zoom"
import Modal from "react-modal"

export default class Products extends Component {
  state = {
    product: null,
  } 
  openModal = (product) => {
    this.setState(
      { product }
    )
  }
  closeModal = (product) => {
    this.setState(
      { product: null }
    )
  }

  render() {
    const { product} = this.state;
    console.log(this.props.products);

    return (
      <div>
        <Fade bottom cascade>
        <ul className="products">
            {this.props.products.map((product) => (
              <li key={product._id}>
                <div className="product">
                  <a href={"#" + product._id} onClick={() => this.openModal(product)}>
                
                    <img src={product.image} alt={product.title}></img>
                    <p>{product.title}</p>
                  </a>
                  <div className="product-price">
                    <div>{formatCurrency(product.price)}</div>
                    <button className="button primary" onClick={() => this.props.addToCart(product)}>Add To Cart</button>
                  </div>
                </div>
              </li>
            ))}: <p className="no-products">Loading products...</p>
        }
          </ul>
        </Fade>
        {product &&
          (<Modal isOpen={true} onRequestClose={this.closeModal}>
          <Zoom>
            <button className="close-modal" onClick={this.closeModal}>x</button>
            <div className="product-details">
              <img src={product.image} alt={product.title}></img>
              <div className="product-details-description">
                  <p>
                    <strong>{product.title}</strong>
                  </p>
                  <p>
                    {product.description}
                  </p>
                  <p>
                    {product.availableSizes.map((x) => (
                      <span>
                        {" "}
                        <button className="button">{x}</button>
                      </span>
                    ))}
                  </p>
                  <div className="product-price">
                    <div>{formatCurrency(product.price)}</div>
                    <button className="button primary" onClick={() => { this.props.addToCart(product); this.closeModal() }}>
                      Add to Cart
                    </button>
                    
                  </div>
              </div>
              
            </div>
            </Zoom>
          </Modal>
    )
  }
        
      </div>
    );
  }
}


