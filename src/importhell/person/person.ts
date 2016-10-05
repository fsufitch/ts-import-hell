import { Family } from '../family';
import { CheckDependency } from '../util';

@CheckDependency('Family', Family)
export class Person {
  constructor(public name: string, public age: number, public family: Family) {}
}
