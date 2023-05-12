import { Auth } from "aws-amplify";
import Cookies from "js-cookie";
import axios from "axios";

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const LOGOUT = "LOGOUT";

const buildUserName = (email) => `cu_${email.replace("@", "_")}`.toLowerCase();

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

const setUser = async (dispatch) => {
  try {
    const session = await Auth.currentSession();
    const idToken = session.idToken.jwtToken;
    const user = await Auth.currentAuthenticatedUser();
    Cookies.set("token", idToken);
    Cookies.set("userid", user.attributes.sub);
    axios.defaults.headers.common["Authorization"] = idToken;
    axios.defaults.headers.common["userid"] = user.attributes.sub;
    const result = await axios.get("/api/users");
    const userFromServer = JSON.parse(result.data);
    if (
      userFromServer.role !== "admin" &&
      userFromServer.role !== "superadmin"
    ) {
      throw new Error("You are not authorized to access this page");
    }
    dispatch(
      loginSuccess({
        username: user.username,
        token: idToken,
      })
    );
  } catch (error) {
    dispatch(loginFailure(error.message ?? "Error setting user"));
  }
};

export const isAuthenticated = () => async (dispatch) => {
  debugger;
  const session = await Auth.currentSession();
  if (session.isValid()) {
    await setUser(dispatch);
  }
};
export const login = (email, password) => async (dispatch) => {
  console.log("About to login");
  dispatch(loginRequest());
  const username = buildUserName(email);
  console.log("details", username, password);
  try {
    await Auth.signIn(username, password);
  } catch (error) {
    console.log("Error logging in", error);
    dispatch(loginFailure(error.message ?? "Error logging in"));
    return;
  }
  await setUser(dispatch);
};

export const logoutUser = () => (dispatch) => {
  Auth.signOut()
    .then(() => dispatch(logout()))
    .catch((error) => console.log(error));
};
