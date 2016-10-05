import * as _ from 'lodash';

import { Person } from '../person';
import { CheckDependency } from '../util';

@CheckDependency('Person', Person)
@CheckDependency('lodash', _)
export class Family {
  members: Person[] = [];
  constructor(public familyName) {}

  addMember(p: Person) {
    this.members = _.concat(this.members, p);
  }
}
