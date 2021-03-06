import { console } from "console";
import _ from "lodash";

const josh = {
  name: 'Josh',
  age: 35,
  greet: function (greeting: string) {
    console.log(`${this.name} says ${greeting}`);
  }
};

logMethodCalls(josh);

josh.greet("Hello");

function logMethodCalls<T extends Object>(obj: T) {
  for (let propName in obj) {
    if (!obj.hasOwnProperty(propName)) continue;

    const func = obj[propName];

    if (_.isFunction(func)) {
      obj[propName] = createLoggedMethod(func);
    }
  }

  return obj;
}

function createLoggedMethod<T extends Function>(func: T) {
  return new Proxy(func, {
    apply: function (target, thisArg, argumentList) {
      console.log(`[TRACE]: ${target.name}: ${argumentList}`);

      return target.apply(thisArg, argumentList);
    }
  });
}




