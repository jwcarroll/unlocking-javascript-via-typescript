import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/delay';

const letters = createLetters("Thank You, Codestock 2017!");
const spacing = 40;
const animationLength = 1000;

Observable.fromEvent(document, 'mousemove')
	.mergeMap(({clientX, clientY}) => {
  	return Observable.from(letters)
    .mergeMap((el, i) => {
    	const left = clientX + (i*spacing) + 15;
    	const top = clientY;
  
    	return Observable.of({el, top, left})
      	.delay(i * (animationLength / letters.length));
     });
  })
  .subscribe(({el, left, top}) => {
  		el.style.top = `${top}px`;
    	el.style.left = `${left}px`;
  });

function createLetters(word){
	const target = document.getElementById('letters');

  return word.split('').map(c => {
  	const el = document.createElement('span');
    el.innerText = c;
    
    target.appendChild(el);
    
    return el;
  });
}
