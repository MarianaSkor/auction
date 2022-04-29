import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk';
import { addToCartReducer } from "./cardRedux";
import { productReducer } from "./productRedux";
import { addToPreferenceReducer } from "./selectedProductsReducer";
import { userReducer } from "./userRedux";

export const rootReducer = combineReducers({
   cart: addToCartReducer,
   user: userReducer,
   select: addToPreferenceReducer,
   product: productReducer,
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export type RootState = ReturnType<typeof store.getState>;

export default store;

