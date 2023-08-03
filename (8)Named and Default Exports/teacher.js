//Modules are reusable pieces of code that can be exported from one program and imported for use in another program.
//In ES6, modules are declared using the export keyword.
import { Person } from "./person.js";

//Export is used to export multiple classes, functions, or primitives from a script file.
export function Run() {
  console.log("run");
}

//Export default is used to export a single class, function, or primitive from a script file.

export default class Teacher extends Person {
  constructor(name, degree) {
    super(name);
    this.degree = degree;
  }

  teach() {
    console.log("teach");
  }
}
