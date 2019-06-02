import React, {Component} from 'react';
import {Table} from 'react-bootstrap';
import Product from './Product';
import faker from 'faker';


class ProductList extends Component{
  getProducts(){
    let products = [];
    faker.locale="ru";
    while(products.length<10){
      products.push({
        photo: faker.image.technics(100,100),
      name: faker.commerce.productName(),
      price:{
          amount: faker.commerce.price(500,5000),
          currency: "USD"
      },
      rating : faker.random.ratings,
      promo: true
      })
    }
    return products;
  }
    render(){
      let data = this.getProducts();
      let list =[];
      for (var i = 0; i<10; i++) {
        list.push(<div className="container">
          <Product data={data[i]} mode="admin"/>
        </div>)
      }
        return list;
    }

}

export default ProductList;