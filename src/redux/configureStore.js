import { configureStore, combineReducers } from '@reduxjs/toolkit';
import missionReducer from './missions/missions';
import rocketReducer from './rockets/rockets';

const rootReducer = combineReducers({
  missions: missionReducer,
  rocket: rocketReducer,
});

const store = configureStore({ reducer: rootReducer });

export default store;
