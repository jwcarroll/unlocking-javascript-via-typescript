import React from "react";
import { render } from "react-dom";

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/takeUntil';

import {
  increment, 
  decrement,
  addCounter,
  removeCounter,
  actions$
} from './actions';

import store$ from './store';

store$.subscribe(state => {
  render(<App {...state} />, document.getElementById("root"));
});

function App(props){
  const {counters} = props;

  const counterControls = [];

  for(let i = 0; i < counters; i++){
    counterControls.push(<Counter key={i} {...props}/>);
  }

  return (
    <div>
      <div className="buttons">
        <button type="button" className="btn btn-lg btn-success"
          onClick={() => addCounter()}>Add Counter</button>
        <button type="button" className="btn btn-lg btn-warning"
          onClick={() => removeCounter()}>Remove Counter</button>
        <button type="button" className="btn btn-lg btn-primary"
          onClick={() => startTimer()}>Start Timer</button>
      </div>
      <div className="counters">
        {counterControls}
      </div>
    </div>
  );
}

function Counter(props){
    const {num} = props;

    return (
      <div className="counter">
        <button type="button" className="btn" 
          onClick={() => increment(1)}>+</button>
        <h1>{num}</h1>
        <button type="button" className="btn" 
          onClick={() => decrement(1)}>-</button>
      </div>
    );
}

function startTimer(){
  const removeCounterAction$ = 
    actions$.filter(a => a.type === "REMOVE_COUNTER");

  Observable.interval(1000)
    .do(() => {
      addCounter();
      increment(1);
    })
    .takeUntil(removeCounterAction$)
    .subscribe();
}
