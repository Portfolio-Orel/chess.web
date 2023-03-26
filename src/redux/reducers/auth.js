import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from '../actions/auth';

const initialState = {
  user: null,
  isLoading: false,
  error: null
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { ...state, isLoading: true, error: null };
    case LOGIN_SUCCESS:
      return { ...state, isLoading: false, user: action.user };
    case LOGIN_FAILURE:
      return { ...state, isLoading: false, error: action.error };
    case LOGOUT:
      return { ...state, user: null };
    default:
      return state;
  }
};

export default authReducer;
