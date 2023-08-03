//Class is a blueprint for creating objects with pre-defined properties and methods
//Naming convention for classes is Pascal Notation

class Person {
  constructor(name) {
    //"This" is a reference to the current object called person
    this.name = name;
  }

  walk() {
    console.log("walk");
  }
}

const person = new Person("Awanish");
person.walk();

//Inheritance using extends keyword and inside the constructor of the child class,
//we need to call the constructor of the parent class using the super() method

class Teacher extends Person {
  constructor(name, degree) {
    super(name);
    this.degree = degree;
  }

  teach() {
    console.log("teach");
  }
}

const teacher = new Teacher("Awanish", "MCA");
teacher.teach();
