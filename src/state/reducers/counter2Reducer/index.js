import { combineReducers } from 'redux';
import { counter3Reducer } from './counter3Reducer';
import { counter4Reducer } from './counter4Reducer';

export const counter2Reducer = combineReducers({
  counter_3: counter3Reducer,
  counter_4: counter4Reducer
});
