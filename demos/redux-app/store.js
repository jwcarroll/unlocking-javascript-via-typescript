import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/scan';

import { actions$ } from './actions';

const initialState = {
  num: 0,
  counters: 0
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        num: state.num + action.payload
      };
    case 'DECREMENT':
      return {
        ...state,
        num: state.num - action.payload
      };
    case 'ADD_COUNTER':
      return {
        ...state,
        counters: state.counters + 1
      };
    case 'REMOVE_COUNTER':
      return {
        ...state,
        counters: state.counters - 1
      };
    default:
      return state;
  }
}

const store$ = actions$
  .startWith(initialState)
  .scan(reducer);

export default store$;
