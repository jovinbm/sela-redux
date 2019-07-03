import { combineReducers } from 'redux';
import { counter1Reducer } from './counter1Reducer';
import { counter2Reducer } from './counter2Reducer';

export const rootReducer = combineReducers({
  counter_1: counter1Reducer,
  counter_2: counter2Reducer
});
