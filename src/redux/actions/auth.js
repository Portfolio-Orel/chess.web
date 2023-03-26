import { Auth } from 'aws-amplify';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT = 'LOGOUT';

const loginRequest = () => ({
  type: LOGIN_REQUEST
});

const loginSuccess = user => ({
  type: LOGIN_SUCCESS,
  user
});

const loginFailure = error => ({
  type: LOGIN_FAILURE,
  error
});

const logout = () => ({
  type: LOGOUT
});

export const login = (username, password) => dispatch => {
  dispatch(loginRequest());

  Auth.signIn(username, password)
    .then(user => dispatch(loginSuccess(user)))
    .catch(error => dispatch(loginFailure(error)));
};

export const logoutUser = () => dispatch => {
  Auth.signOut()
    .then(() => dispatch(logout()))
    .catch(error => console.log(error));
};
