import {
  GET_EVENTS_REQUEST,
  GET_EVENTS_SUCCESS,
  GET_EVENTS_FAILURE,
} from "../actions/event";
import {
  ADD_EVENT_REQUEST,
  ADD_EVENTS_SUCCESS,
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

import { CLEAR_EVENTS } from "../actions/event";

const initialState = {
  events: [],
  loading: false,
  error: null,
};

const eventsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_EVENTS_REQUEST:
      return { ...state, isLoading: true, error: null };
    case GET_EVENTS_SUCCESS:
      return { ...state, isLoading: false, events: action.payload.events };
    case GET_EVENTS_FAILURE:
      return { ...state, isLoading: false, error: action.payload.error };

    case ADD_EVENT_REQUEST:
      return { ...state, isLoading: true, error: null };
    case ADD_EVENTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        events: state.events.concat(action.payload.event),
      };
    case ADD_EVENT_FAILURE:
      return { ...state, isLoading: false, error: action.payload.error };

    case UPDATE_EVENT_REQUEST:
      return { ...state, isLoading: true, error: null };
    case UPDATE_EVENT_SUCCESS:
      const updatedEvents = state.events.map((event) => {
        if (event.id === action.payload.event.id) {
          return action.payload.event;
        }
        return event;
      });
      return { ...state, isLoading: false, events: updatedEvents };
    case UPDATE_EVENT_FAILURE:
      return { ...state, isLoading: false, error: action.payload.error };

    case DELETE_EVENT_REQUEST:
      return { ...state, isLoading: true, error: null };
    case DELETE_EVENT_SUCCESS:
      return { ...state, isLoading: false, events: action.payload.events };
    case DELETE_EVENT_FAILURE:
      return { ...state, isLoading: false, error: action.payload.error };
    case CLEAR_EVENTS:
      return { ...state, events: [] };
    default:
      return state;
  }
};

export default eventsReducer;
