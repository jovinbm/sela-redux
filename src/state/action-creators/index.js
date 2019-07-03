import { actions } from '../actions';

export const incrementCounter1 = () => {
  return {
    type: actions.INCREMENT_COUNTER1_BY,
    payload: {
      number: 1
    }
  };
};

export const decrementCounter1 = () => {
  return {
    type: actions.DECREMENT_COUNTER1_BY,
    payload: {
      number: 1
    }
  };
};

export const incrementCounter1By = number => {
  return {
    type: actions.INCREMENT_COUNTER1_BY,
    payload: {
      number
    }
  };
};

export const decrementCounter1By = number => {
  return {
    type: actions.DECREMENT_COUNTER1_BY,
    payload: {
      number
    }
  };
};

export const incrementCounter3 = () => {
  return {
    type: actions.INCREMENT_COUNTER3
  };
};

export const decrementCounter3 = () => {
  return {
    type: actions.DECREMENT_COUNTER3
  };
};

export const incrementCounter4 = () => {
  return {
    type: actions.INCREMENT_COUNTER4
  };
};

export const decrementCounter4 = () => {
  return {
    type: actions.DECREMENT_COUNTER4
  };
};
