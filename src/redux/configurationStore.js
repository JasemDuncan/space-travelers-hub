import {
  applyMiddleware, combineReducers, createStore,
} from '@reduxjs/toolkit';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rocketsReducer from './rockets/rockets';
import missionsReducer from './missions/missions';

const rootReducer = combineReducers({
  rocketsReducer,
  missionsReducer,
});

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  applyMiddleware(logger, thunk),
);

export default store;
