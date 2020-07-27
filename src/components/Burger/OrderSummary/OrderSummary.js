import React from 'react';
import Auxiliary from '../../../hoc/Auxiliary/Auxiliary';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
    const ingredientsSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return (
                <li key = {igKey}>
                    <span style={{ textTransform: 'capitalize' }}>{igKey}</span>
                    : {props.ingredients[igKey]}
                </li>
            );
        });
    return (
        <Auxiliary>
            <h3>Yuor Order Summary</h3>
            <p>A delicious burger wiht the following ingredients:</p>
            {ingredientsSummary}
            <p><b>Total Price: {props.price.toFixed(2)}</b></p>
            <p>Continue to Checkout?</p>
            <Button btnType = "Danger" clicked = {props.purchaseCancel}>Cancel</Button>
            <Button btnType = "Success" clicked = {props.purchaseContinue}>Checkout</Button>
        </Auxiliary>
    );
}

export default orderSummary;