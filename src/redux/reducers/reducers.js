import authReducer from './auth';
import eventsReducer from './event';
import gameReducer from './games';
import gameFormatsReducer from './gameFormats';

import { combineReducers } from 'redux';

export default combineReducers({
    auth: authReducer,
    events: eventsReducer,
    games: gameReducer,
    gameFormats: gameFormatsReducer,
});