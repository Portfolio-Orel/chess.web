import {
  FETCH_GAME_FORMATS_REQUEST,
  FETCH_GAME_FORMATS_SUCCESS,
  FETCH_GAME_FORMATS_FAILURE,
} from "../actions/gameFormats";
import {
  ADD_GAME_FORMAT_REQUEST,
  ADD_GAME_FORMAT_SUCCESS,
  ADD_GAME_FORMAT_FAILURE,
} from "../actions/gameFormats";
import {
  UPDATE_GAME_FORMAT_REQUEST,
  UPDATE_GAME_FORMAT_SUCCESS,
  UPDATE_GAME_FORMAT_FAILURE,
} from "../actions/gameFormats";
import {
  DELETE_GAME_FORMAT_REQUEST,
  DELETE_GAME_FORMAT_SUCCESS,
  DELETE_GAME_FORMAT_FAILURE,
} from "../actions/gameFormats";

const initialState = {
  gameFormats: [],
  loading: false,
  error: null,
};

const gameFormatsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GAME_FORMATS_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_GAME_FORMATS_SUCCESS:
      return { ...state, loading: false, gameFormats: action.gameFormats };
    case FETCH_GAME_FORMATS_FAILURE:
      return { ...state, loading: false, error: action.error };

    case ADD_GAME_FORMAT_REQUEST:
      return { ...state, loading: true, error: null };
    case ADD_GAME_FORMAT_SUCCESS:
      return {
        ...state,
        loading: false,
        gameFormats: [...state.gameFormats, action.gameFormat],
      };
    case ADD_GAME_FORMAT_FAILURE:
      return { ...state, loading: false, error: action.error };

    case UPDATE_GAME_FORMAT_REQUEST:
      return { ...state, loading: true, error: null };
    case UPDATE_GAME_FORMAT_SUCCESS:
      return {
        ...state,
        loading: false,
        gameFormats: state.gameFormats.map((gameFormat) =>
          gameFormat.id === action.gameFormat.id
            ? action.gameFormat
            : gameFormat
        ),
      };
    case UPDATE_GAME_FORMAT_FAILURE:
      return { ...state, loading: false, error: action.error };

    case DELETE_GAME_FORMAT_REQUEST:
      return { ...state, loading: true, error: null };
    case DELETE_GAME_FORMAT_SUCCESS:
      return {
        ...state,
        loading: false,
        gameFormats: state.gameFormats.filter(
          (gameFormat) => gameFormat.id !== action.gameFormat.id
        ),
      };
    case DELETE_GAME_FORMAT_FAILURE:
      return { ...state, loading: false, error: action.error };

    default:
      return state;
  }
};

export default gameFormatsReducer;