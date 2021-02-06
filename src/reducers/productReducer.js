import { ADD_TO_CART, GET_NUMBERS_BASKET, INCREASE_QUANTITY, DECREASE_QUANTITY, CLEAR_PRODUCT } from '../actions/types';

const initialState = {
    cart: 0,
    cartPrice: 0,
    cartProduct: []
}

export default (state = initialState, action) => {
    let productSelected = "";
    switch (action.type) {
        case ADD_TO_CART:
            console.log(action.payload);
            return {
                ...state,
                cart: state.cart + 1,
                cartProduct: [...state.cartProduct, action.payload],
                cartPrice: state.cartPrice + action.payload.price,

            }
        case GET_NUMBERS_BASKET:
            return {
                ...state
            }

        case INCREASE_QUANTITY:
            productSelected = { ...state.products[action.payload] }
            productSelected.numbers += 1;
            return {
                ...state,
                cart: state.cart + 1,
                cartPrice: state.cartPrice + state.products[action.payload].price,
                products: {
                    ...state.products,
                    [action.payload]: productSelected
                }
            }

        case DECREASE_QUANTITY:
            productSelected = { ...state.products[action.payload] }
            let newCartPrice = 0;
            let newCartNumbers = 0;
            if (productSelected.numbers === 0) {
                productSelected.numbers = 0
                newCartPrice = state.cartPrice
                newCartNumbers = state.cart
            }
            else {
                productSelected.numbers -= 1;
                newCartPrice = state.cartPrice - state.products[action.payload].price
                newCartNumbers = state.cart - 1
            }
            return {
                ...state,
                cart: newCartNumbers,
                cartPrice: newCartPrice,
                products: {
                    ...state.products,
                    [action.payload]: productSelected
                }
            }

        case CLEAR_PRODUCT:
            productSelected = { ...state.products[action.payload] };
            let numbersBackup = productSelected.numbers;
            productSelected.numbers = 0;
            productSelected.inCart = false
            return {
                ...state,
                cartPrice: state.cartPrice - (numbersBackup * productSelected.price),
                cart: state.cart - numbersBackup,
                products: {
                    ...state.products,
                    [action.payload]: productSelected
                }
            }

        default:
            return state;
    }
}