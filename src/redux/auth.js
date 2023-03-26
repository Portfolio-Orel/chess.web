import { Auth } from "aws-amplify";
import Cookies from "js-cookie";
import axios from 'axios';

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const LOGOUT = "LOGOUT";

const loginRequest = () => ({
  type: LOGIN_REQUEST,
});

const loginSuccess = (user) => ({
  type: LOGIN_SUCCESS,
  user,
});

const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  error,
});

const logout = () => ({
  type: LOGOUT,
});

export const login = (username, password) => async (dispatch) => {
  dispatch(loginRequest());
  try {
    debugger;
    const user = await Auth.signIn(username, password);
    const authenticatedUser = await Auth.currentAuthenticatedUser();
    const session = authenticatedUser.signInUserSession;
    const idToken = session.idToken.jwtToken;
    Cookies.set("token", idToken);
    Cookies.set("userid", user.username);
    axios.defaults.headers.common["Authorization"] = idToken;
    axios.defaults.headers.common["userid"] = user.username;
    // Get user from nextjs's api
    const result = await axios.get('/api/users');
    debugger;
    dispatch(
      loginSuccess({
        username: user.username,
        token: idToken,
      })
    );
  } catch (error) {
    dispatch(loginFailure(error));
    console.log(error);
  }
};

export const logoutUser = () => (dispatch) => {
  Auth.signOut()
    .then(() => dispatch(logout()))
    .catch((error) => console.log(error));
};
