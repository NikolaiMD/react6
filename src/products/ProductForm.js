import React, {Component} from 'react';
import {Form} from 'react-bootstrap';
import {Button} from 'react-bootstrap';


class ProductForm extends Component{
    constructor(){
        super()
        this.state={
            validated: false
        }
    }

    handleSubmit(event){
        event.preventDefault(); //Не позволяем работать сабмит  
        alert();
    }

    render(){
        return(
            <div>
                <Form onSubmit={e=>this.handleSubmit(e)} className="container">
                    <Form.Group>
                        <Form.Control size="lg" type="text" placeholder="product name"/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Control size="lg" type="text" placeholder="product name"/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Control size="lg" type="text" placeholder="product name"/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Control size="lg" type="text" placeholder="product name"/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Control size="lg" type="text" placeholder="product name"/>
                    </Form.Group>
                    <Button type="submit">Submit</Button>
                </Form>
            </div>
        )
    }
}
export default ProductForm;