// counter.ts
import {Action} from '@ngrx/store';

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const RESET = 'RESET';

export function counterReducer(state: number = 0, action: Action) {
  switch (action.type) {
    case INCREMENT:
      return state + 1;

    case DECREMENT:
      return state - 1;

    case RESET:
      return 0;

    default:
      return state;
  }
}

export function namedCounterReducer(reducer, target) {
  return (state, action) => {
    // ignore action and pass forward
    if (action.target !== target && (state !== undefined)) {
      return state;
    }
    // otherwise use original reducer
    return reducer(state, action);
  };
}

/*export const reducers = {
  counterAState : namedCounterReducer(counterReducer, 'counterAState'),
  counterBState : namedCounterReducer(counterReducer, 'counterBState')
};*/

