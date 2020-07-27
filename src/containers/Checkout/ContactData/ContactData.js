import React, {Component } from 'react';

import Button from '../../../components/UI/Button/Button';
import './ContactData.css';

class ContactData extends Component{
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false
    }

    orderHandler = (event) => {
        event.preventDefault();
        this.setState({loading: true});
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer:{
                name: 'Sumit',
                address: {
                    street: 'Street1',
                    zipCode: '226024',
                    country: 'India'
                },
                email: 'test@test.com'
            },
            deliveryMethod: 'fastest'
        }
    }

    render(){
        return(
            <div className="ContactData">
                <h4>Enter Yout Contact Data</h4>
                <form>
                    <input type="text" name="name" placeholder="Your Name" />
                    <input type="email" name="email" placeholder="Your Email" />
                    <input type="text" name="street" placeholder="Street" />
                    <input type="text" name="postal" placeholder="Postal Code" />
                    <Button btnType="Success">Order</Button>
                </form>
            </div>
        )
    }
}


export default ContactData;