import React, {Component} from 'react';
import {Dropdown} from 'react-bootstrap';
import {Image} from 'react-bootstrap';
import Rating from 'react-rating';

class Product extends Component{
    constructor(props){
        super(props);
        this.state = {
            data: props.data, // 
            mode: props.mode // способ отображения данных продукта: compact, preview, full
            
        }
    }
    render(){
        let data = this.state.data;
        let mode = this.state.mode;
        let dom = <div className="product">
                    <img src={data.photo}/>
                    <h2>{data.name}</h2>
                    <p>{data.price.amount}</p>
                 </div>;
        switch(mode){
            case "compact" : dom = <div className="product">
                                    <img src={data.photo} width="100"/>
                                    <h2>{data.name}</h2>
                                    <p>{data.price.amount}</p>
                                   </div>;
            case "preview" : dom = <div className="product">
            <img src={data.photo} width="300"/>
            <h2>{data.name}</h2>
            <p>{data.price.amount}</p>
           </div>;
            case "full" : break;
            case "admin" : dom = <div className="product row">
                                 <div className="col-1">
                                    <Image src={data.photo} fluid/>
                                    </div>
                                    <h2 class="col-7">{data.name}</h2>
                                    <p class="col-2">{data.price.amount}</p>
                                    <Dropdown class="col-2">
                <Dropdown.Toggle variant="primary" id="dropdown-basic">
                    Actions
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">View</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Edit</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Remove</Dropdown.Item>
                    <Dropdown.Item href="#/action-4">Publish</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <Rating/>
                                </div>;;
        }
        return dom;
    }
}

export default Product;