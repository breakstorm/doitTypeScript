import IPerson from './IPerson';
import { makeRandomNumber } from './utils/makeRandomNumber';

class Person implements IPerson {
  constructor(public name: string, public age: number) {}
}
export const makePerson = (name: string,
  age:number = makeRandomNumber()) => ({name, age});
