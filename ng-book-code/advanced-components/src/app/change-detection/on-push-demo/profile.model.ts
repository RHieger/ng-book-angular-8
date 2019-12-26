/**
 * User Profile object, stores the first and
 * last name as well as a function that gives the time
 **/
export class Profile {
  constructor(public first: string, public last: string) {}

  lastChanged() {
    return new Date();
  }
}
