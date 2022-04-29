import { productItems } from "src/constants";

//action-types
export const ADD_TO_PREFERENCE = "ADD_TO_PREFERENCE";

interface AddToCartItems {
  preferencesProduct: productItems;
}

//actions
export const addToPreference = (payload: AddToCartItems) => ({
  type: ADD_TO_PREFERENCE,
  payload,
});

type State = {
  preferencesProducts: productItems[];
};

//reducer
const initialState: State = {
  preferencesProducts: [],
};

type addToPreferenceAction = {
  type: string;
  payload: AddToCartItems;
};

export const addToPreferenceReducer = (
  state = initialState,
  action: addToPreferenceAction
) => {
  switch (action.type) {
    case ADD_TO_PREFERENCE:
      return {
        ...state,
        preferencesProducts: state.preferencesProducts.concat(
          action.payload.preferencesProduct
        ),
      };
    default:
      return state;
  }
};
