import { console } from "console";

const josh = {
  name: 'Josh',
  age: 35
};

const joshProxy = new Proxy(josh, {
  set: function(target, property, value, receiver){
    if(target[property] !== value){
      console.log(`[${property}]: ${target[property]} => ${value}`);
    }

    target[property] = value;

    return true;
  }
});

joshProxy.name = "Big Money";
joshProxy.age = 45;




