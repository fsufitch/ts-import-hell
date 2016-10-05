import { Person } from './person';
import { Family } from './family';

let smith = new Family('Smith');
let john = new Person('John', 42, smith);
smith.addMember(john);

console.log('-----');
console.log('John (person) = ', john);
console.log('Smith (family) = ', smith);
