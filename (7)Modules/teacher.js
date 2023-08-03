//Modules are reusable pieces of code that can be exported from one program and imported for use in another program.
//In ES6, modules are declared using the export keyword.
import { Person } from "./person.js";

export class Teacher extends Person {
  constructor(name, degree) {
    super(name);
    this.degree = degree;
  }

  teach() {
    console.log("teach");
  }
}
