import { Subject } from 'rxjs/Subject';

export const actions$ = new Subject();

export const increment = num => {
  actions$.next({
    type: 'INCREMENT',
    payload: num
  });
};

export const decrement = num => {
  actions$.next({
    type: 'DECREMENT',
    payload: num
  });
};

export const addCounter = () => {
  actions$.next({
    type: 'ADD_COUNTER'
  });
};

export const removeCounter = () => {
  actions$.next({
    type: 'REMOVE_COUNTER'
  });
};
