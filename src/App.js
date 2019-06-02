import React from 'react';
import {BrowserRouter as Router,Link,Route} from 'react-router-dom';
import {Button,Navbar} from 'react-bootstrap';
import ProductForm from './products/ProductForm.js';
import ProductList from './products/ProductList.js';
import Product from './products/Product.js';
function App() {
  return (
    <div className="App">

      {/* <Product data={{
                photo: "https://picsum.photos/id/237/200/300",
                name: "2",
                price:{
                    amount: 100,
                    currency: "USD"
                },
                rating : 5,
                promo: true
            }}
            
            mode="admin"
            /> */}

      <Router>
        <Route path="/product/add" component={ProductForm}/>
        <Route path="/products" exact component={ProductList}/>
        {/* <Route path="/product/details" exact component={Product}/> */}


        <Navbar className="container mb-5" fixed="bottom">
        <Link to="/products" className="mr-auto">
          <Button variant="secondary" size="lg" className=" shadow">Products</Button>
        </Link>

        {/* <Link to="/product/details" className="mr-auto">
          <Button variant="secondary" size="lg" className=" shadow">Details</Button>
        </Link> */}

        <Link to="/product/add" className="ml-auto">
          <Button variant="primary" size="lg" className="rounded-pill shadow">+</Button>
        </Link>
        </Navbar>
      </Router>
    </div>
  );
}

export default App;
