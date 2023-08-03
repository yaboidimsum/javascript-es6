export class Person {
  constructor(name) {
    //"This" is a reference to the current object called person
    this.name = name;
  }

  walk() {
    console.log("walk");
  }
}
