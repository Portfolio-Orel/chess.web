import {
  GET_EVENTS_REQUEST,
  GET_EVENTS_SUCCESS,
  GET_EVENTS_FAILURE,
} from "../actions/event";
import {
  ADD_EVENT_REQUEST,
  ADD_EVENT_SUCCESS,
  ADD_EVENT_FAILURE,
} from "../actions/event";
import {
  UPDATE_EVENT_REQUEST,
  UPDATE_EVENT_SUCCESS,
  UPDATE_EVENT_FAILURE,
} from "../actions/event";
import {
  DELETE_EVENT_REQUEST,
  DELETE_EVENT_SUCCESS,
  DELETE_EVENT_FAILURE,
} from "../actions/event";

const initialState = {
  user: null,
  isLoading: false,
  error: null,
};

const eventsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_EVENTS_REQUEST:
      return { ...state, isLoading: true, error: null };
    case GET_EVENTS_SUCCESS:
      return { ...state, isLoading: false, user: action.user };
    case GET_EVENTS_FAILURE:
      return { ...state, isLoading: false, error: action.error };

    case ADD_EVENT_REQUEST:
      return { ...state, isLoading: true, error: null };
    case ADD_EVENT_SUCCESS:
      return { ...state, isLoading: false, user: action.user };
    case ADD_EVENT_FAILURE:
      return { ...state, isLoading: false, error: action.error };

    case UPDATE_EVENT_REQUEST:
      return { ...state, isLoading: true, error: null };
    case UPDATE_EVENT_SUCCESS:
      return { ...state, isLoading: false, user: action.user };
    case UPDATE_EVENT_FAILURE:
      return { ...state, isLoading: false, error: action.error };

    case DELETE_EVENT_REQUEST:
      return { ...state, isLoading: true, error: null };
    case DELETE_EVENT_SUCCESS:
      return { ...state, isLoading: false, user: action.user };
    case DELETE_EVENT_FAILURE:
      return { ...state, isLoading: false, error: action.error };
      
    default:
      return state;
  }
};

export default eventsReducer;
