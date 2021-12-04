import IPerson from './IPerson';
import { makePerson } from './person';

const testMakePerson = (): void => {
  let jane: IPerson = makePerson('jane');
  let jack: IPerson = makePerson('Jack');
  console.log(jane, jack);
}

testMakePerson();