import { actions } from '../../../actions';

export function counter3Reducer(state = 0, action) {
  switch (action.type) {
    case actions.INCREMENT_COUNTER3:
      return state + 1;
    case actions.DECREMENT_COUNTER3:
      if (state === 0) {
        return state;
      }
      return state - 1;
    default:
      return state;
  }
}
