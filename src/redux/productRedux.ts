/* eslint-disable @typescript-eslint/no-redeclare */
//action-types
export const GET_PRODUCT_START = 'GET_PRODUCT_START';
export const GET_PRODUCT_SUCCESS = 'GET_PRODUCT_SUCCESS';
export const GET_PRODUCT_FAILURE = 'GET_PRODUCT_FAILURE';
export const DELETE_PRODUCT_START = 'DELETE_PRODUCT_START';
export const DELETE_PRODUCT_SUCCESS = 'DELETE_PRODUCT_SUCCESS';
export const DELETE_PRODUCT_FAILURE = 'DELETE_PRODUCT_FAILURE';
export const UPDATE_PRODUCT_START  = 'UPDATE_PRODUCT_START';
export const UPDATE_PRODUCT_SUCCESS = 'UPDATE_PRODUCT_SUCCESS';
export const UPDATE_PRODUCT_FAILURE = 'UPDATE_PRODUCT_FAILURE';
export const ADD_PRODUCT_START  = 'ADD_PRODUCT_START';
export const ADD_PRODUCT_SUCCESS = 'ADD_PRODUCT_SUCCESS';
export const ADD_PRODUCT_FAILURE = 'ADD_PRODUCT_FAILURE';



//actions
export const getProductStart = () => ({ type: GET_PRODUCT_START});
export const getProductSuccess = (payload: any) => ({ type: GET_PRODUCT_SUCCESS, payload });
export const getProductFailure = () => ({ type: GET_PRODUCT_FAILURE });
export const updateProductStart = () => ({ type: UPDATE_PRODUCT_START});
export const updateProductSuccess = (payload: any) => ({ type: UPDATE_PRODUCT_SUCCESS, payload });
export const updateProductFailure = () => ({ type: UPDATE_PRODUCT_FAILURE });
export const deleteProductStart = () => ({ type: DELETE_PRODUCT_START});
export const deleteProductSuccess = (payload: any) => ({ type: DELETE_PRODUCT_SUCCESS, payload });
export const deleteProductFailure = () => ({ type: DELETE_PRODUCT_FAILURE });
export const addProductStart = () => ({ type: ADD_PRODUCT_START});
export const addProductSuccess = (payload: any) => ({ type: ADD_PRODUCT_SUCCESS, payload });
export const addProductFailure = () => ({ type: ADD_PRODUCT_FAILURE });


type State = {
  products: Array<any>;
  isFetching: boolean,
  error: boolean;
};

//reducer
const initialState: State = {
  products: [],
  isFetching: false,
  error: false
};


type getProductStart = { type: typeof GET_PRODUCT_START; };
type getProductSuccess = { type: typeof GET_PRODUCT_SUCCESS; payload: any };
type getProductFailure = { type: typeof GET_PRODUCT_FAILURE; };
type updateProductStart = { type: typeof UPDATE_PRODUCT_START; };
type updateProductSuccess = { type: typeof UPDATE_PRODUCT_SUCCESS; payload: any };
type updateProductFailure = { type: typeof UPDATE_PRODUCT_FAILURE; };
type deleteProductStart = { type: typeof DELETE_PRODUCT_START; };
type deleteProductSuccess = { type: typeof DELETE_PRODUCT_SUCCESS; payload: any };
type deleteProductFailure = { type: typeof DELETE_PRODUCT_FAILURE; };
type addProductStart = { type: typeof ADD_PRODUCT_START; };
type addProductSuccess = { type: typeof ADD_PRODUCT_SUCCESS; payload: any };
type addProductFailure = { type: typeof ADD_PRODUCT_FAILURE; };

type actionType =  getProductStart | getProductSuccess | getProductFailure | updateProductStart | updateProductSuccess | updateProductFailure| deleteProductStart | deleteProductSuccess | deleteProductFailure | addProductStart | addProductSuccess | addProductFailure

export const productReducer = (state = initialState, action: actionType) => {
  switch (action.type) {
    
    case GET_PRODUCT_START:
      return {
        ...state,
        isFetching: true,
        error: false,
      };
      case GET_PRODUCT_SUCCESS:
      return {
        ...state,
        isFetching: true,
        products: action.payload,
        error: false,
      };
      case GET_PRODUCT_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: true,
      };

      case UPDATE_PRODUCT_START:
      return {
        ...state,
        isFetching: true,
        error: false,
      };
      case UPDATE_PRODUCT_SUCCESS:
      return {
        ...state,
        isFetching: false,
        products: state.products[state.products.findIndex((item) => item._id === action.payload.id)] = action.payload.product,
        error: false,
      };
      case UPDATE_PRODUCT_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: true,
      };

      case DELETE_PRODUCT_START:
      return {
        ...state,
        isFetching: true,
        error: false,
      };
      case DELETE_PRODUCT_SUCCESS:
      const products = [...state.products];
      products.splice(
        state.products.findIndex((item) => item._id === action.payload.id),
        1);

      return {
        ...state,
        isFetching: true,
        products,
        error: false,
      };
      case DELETE_PRODUCT_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: true,
      };

      case ADD_PRODUCT_START:
      return {
        ...state,
        isFetching: true,
        error: false,
      };
      case ADD_PRODUCT_SUCCESS:
        console.log(action.payload)
      return {
        ...state,
        isFetching: true,
        products: state.products.concat(action.payload),
        error: false,
      };
      case ADD_PRODUCT_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    default:
      return state;
  }
};
