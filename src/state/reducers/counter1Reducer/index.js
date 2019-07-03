import { actions } from '../../actions';

export function counter1Reducer(state = 0, action) {
  switch (action.type) {
    case actions.INCREMENT_COUNTER1_BY:
      return state + action.payload.number;
    case actions.DECREMENT_COUNTER1_BY:
      return Math.max(0, state - action.payload.number);
    default:
      return state;
  }
}
