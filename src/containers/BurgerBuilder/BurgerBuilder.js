import React from 'react';
import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICES = {
    salad: 5,
    cheese: 10,
    meat: 30,
    bacon: 25
}

class BurgerBuilder extends React.Component {
    // constructor(props){
    //     super(props);
    //     this.state = {

    //     }
    // }

    state = {
        ingredients: {
            salad: 0,
            cheese: 0,
            bacon: 0,
            meat: 0,
        },
        totalPrice: 20,
        purchasable: false,
        purchasing:false
    }

    // Disable order now if no ingredients present
    updatePurchaseState(ingredients){
        const sum = Object.keys(ingredients)
            .map((igKey) => {
                return ingredients[igKey];
            })
            .reduce((sum, el) => {
                return sum + el;
            },0);
        this.setState({purchasable:sum>0});
    }

    // Finalize order by displaying on a modal
    purchaseHandler = () => {
        this.setState({purchasing:true});
    }

    // Add an ingredient to the burger
    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = priceAddition + oldPrice;

        this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
        this.updatePurchaseState(updatedIngredients);
    }

    // Remove an ingredient from the burger
    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if (oldCount > 0) {
            const updatedCount = oldCount - 1;
            const updatedIngredients = {
                ...this.state.ingredients
            };
            updatedIngredients[type] = updatedCount;
            const priceDeduction = INGREDIENT_PRICES[type];
            const oldPrice = this.state.totalPrice;
            const newPrice = oldPrice - priceDeduction;

            this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
            this.updatePurchaseState(updatedIngredients);
        }
        
    }

    purchaseCancelHandler = () => {
        this.setState({purchasing:false});
    }

    purchaseContinueHandler = () => {

        const queryParams = [];
        for(let i in this.state.ingredients){
            queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredients[i]));
        }
        queryParams.push('price='+this.state.totalPrice);
        const queryString  = queryParams.join('&');
        this.props.history.push({
            pathname: '/checkout',
            search: '?'+queryString
        });
    }

    render() {
        const disabledInfo = {
            ...this.state.ingredients
        };

        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0;
        }

        return (
            <Auxiliary>
                <Modal show = {this.state.purchasing} modalClose = {this.purchaseCancelHandler}>
                    <OrderSummary
                        price = {this.state.totalPrice} 
                        ingredients = {this.state.ingredients}
                        purchaseCancel = {this.purchaseCancelHandler}
                        purchaseContinue = {this.purchaseContinueHandler} />
                </Modal>
                <Burger ingredients={this.state.ingredients} />
                <div>Build Controls</div>
                <BuildControls
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved = {this.removeIngredientHandler}
                    disabled = {disabledInfo}
                    price = {this.state.totalPrice}
                    purchasable = {this.state.purchasable}
                    ordered = {this.purchaseHandler}
                />
            </Auxiliary>
        );
    }
}

export default BurgerBuilder;