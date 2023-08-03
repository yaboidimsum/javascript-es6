const person = {
  name: "Max",
  walk() {},
  sleep() {},
};

//Method can be written as a function inside an object, such as walk() and sleep() above.

//Accessing properties of an object with dot notation, useful when you know the name of the property you want to access
person.walk();
person.name = "";

//Accessing properties of an object with bracket notation, useful when you don't know the name of the property you want to access
const targetMember = "name";
person[targetMember.value] = "John";

console.log(person.name);
