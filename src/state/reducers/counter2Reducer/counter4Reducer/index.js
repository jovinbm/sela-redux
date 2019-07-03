import { actions } from '../../../actions';

export function counter4Reducer(state = 0, action) {
  switch (action.type) {
    case actions.INCREMENT_COUNTER4:
      return state + 1;
    case actions.DECREMENT_COUNTER4:
      if (state === 0) {
        return state;
      }
      return state - 1;
    default:
      return state;
  }
}
