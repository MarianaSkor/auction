/* eslint-disable @typescript-eslint/no-redeclare */
import {  ProductsCard } from "src/constants";

//action-types
export const ADD_TO_CART = 'ADD_TO_CART';
export const CLEAN_CART = 'CLEAN_CART';

interface AddToCartItems {
  product: ProductsCard;
  price: number;
}

//actions
export const addToCart = (payload: AddToCartItems) => ({ type: ADD_TO_CART, payload });
export const cleanCart = () => ({ type: CLEAN_CART });

type State = {
  products: ProductsCard[];
  total: number;
};

//reducer
const initialState: State = {
  products: [],
  total: 0,
};

type addToCart= { type: typeof ADD_TO_CART; payload: AddToCartItems};
type cleanCart = { type: typeof CLEAN_CART;  };

export const addToCartReducer = (state = initialState, action: addToCart | cleanCart ) => {
  switch (action.type) {
    
    case ADD_TO_CART:
      return {
        ...state,
        products: state.products.concat(action.payload.product),
        total: state.total += action.payload.price 
      };
      case CLEAN_CART:
      return {
        ...state,
        products: [],
        total: 0,
      };
    default:
      return state;
  }
};
