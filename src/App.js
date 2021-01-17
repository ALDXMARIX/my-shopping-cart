//feature
// import data from './data.json'
import React,{ Component } from 'react'
import Products from './components/Products'
import Filter from './components/Filter';
import Cart from './components/Cart';
import store from './store/store'
import { Provider } from 'react-redux'
// import { connect, compose} from 'redux';
// import { fetchProducts } from './actions/productActions'

class App extends Component {

  //   state = {
  //     // products: data.products,
  //     cartItems: localStorage.getItem("cartItems")?JSON.parse(localStorage.getItem("cartItems")):[],
  //     // size: '',
  //     // sort: '',
  // } 
  //   createOrder = (order) => {
  //     alert(`Need to save order for ${order.name}`);    
  // } 
    // removeFromCart = (product) => {
    //   const cartItems = this.state.cartItems.slice();
    //   this.setState({ cartItems: cartItems.filter(x => x._id !== product._id) });
    //   localStorage.setItem("cartItems", JSON.stringify(cartItems));
    // }
    // addToCart = (product) => {
    //   const cartItems = this.state.cartItems.slice();
    //   let alreadyInCart = false;
    //   cartItems.forEach(item => {
    //     if (item._id === product._id) {
    //       item.count++;
    //       alreadyInCart = true;
    //     }
    //   });
    //   if (!alreadyInCart) {
    //     cartItems.push({...product, count: 1})
    //   }
    //   this.setState({ cartItems });
    //   localStorage.setItem("cartItems", JSON.stringify(cartItems));
    // }

     
  
  render() {
    // console.log(this.state.size);
    return (
      <Provider store={store}>
      <div className="grid-container">
        <header>
          <a href="/">React Shopping Cart</a>
        </header>  
        <main>
          <div className="content">
            <div className="main">
              <Filter 
              ></Filter>
              <Products/>
              {/* {this.state.products.length? <Products products={this.state.products} addToCart={this.addToCart} />
                : <p className="no-products">Sorry no available product for selected option...</p>
              } */}
            </div>
            <div className="sidebar"><Cart/></div>
          </div>

        </main>
        <footer>
          All Rights Reserved
        </footer>
        </div>
      </Provider>
  );
  }

}

export default App;
// connect((state) => (state) => ({ products: state.products }), { fetchProducts })