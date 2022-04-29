/* eslint-disable @typescript-eslint/no-redeclare */
import { productItems } from "src/constants";

//action-types
export const ADD_TO_CART = 'ADD_TO_CART';
export const CLEAN_CART = 'CLEAN_CART';

interface AddToCartItems {
  product: productItems;
  quantityItems: number;
  price: number;
}

//actions
export const addToCart = (payload: AddToCartItems) => ({ type: ADD_TO_CART, payload });
export const cleanCart = () => ({ type: CLEAN_CART });

type State = {
  products: productItems[];
  quantityItems: number;
  total: number;
};

//reducer
const initialState: State = {
  products: [],
  quantityItems: 0,
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
        quantityItems: state.quantityItems += 1,
        total: state.total += action.payload.price * action.payload.quantityItems
      };
      case CLEAN_CART:
      return {
        ...state,
        products: [],
        quantityItems: 0,
        total: 0,
      };
    default:
      return state;
  }
};
