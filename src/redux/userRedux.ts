//action-types
export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOG_OUT = 'LOG_OUT';


//actions
export const loginStart = () => ({ type: LOGIN_START});
export const loginSuccess = (payload: any) => ({ type: LOGIN_SUCCESS, payload });
export const loginFailure = () => ({ type: LOGIN_FAILURE });
export const logOut = () => ({ type: LOG_OUT });


type State = {
  currentUser: null;
  isFetching: boolean,
  error: boolean;
};

//reducer
const initialState: State = {
  currentUser: null,
  isFetching: false,
  error: false
};


type loginStart = { type: typeof LOGIN_START; };
type loginSuccess = { type: typeof LOGIN_SUCCESS; payload: any };
type loginFailure = { type: typeof LOGIN_FAILURE; };
type logOut = { type: typeof LOG_OUT; };


export const userReducer = (state = initialState, action: loginStart | loginSuccess | loginFailure | logOut) => {
  switch (action.type) {
    
    case LOGIN_START:
      return {
        ...state,
        isFetching: true,
        error: false,
      };
      case LOGIN_SUCCESS:
      return {
        ...state,
        isFetching: true,
        currentUser: action.payload,
        error: false,
      };
      case LOGIN_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: true,
      };
      case LOG_OUT:
      return {
        ...state,
        currentUser: null,
      };
    default:
      return state;
  }
};
