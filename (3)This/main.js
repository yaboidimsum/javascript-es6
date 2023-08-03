const person = {
  name: "Max",
  walk() {
    console.log(this.name);
  },
};

person.walk();

//function in JS is an object
//this is a reference to the current object called person
//Bind method returns a new instance of the walk function with this set to the person object
const walk = person.walk.bind(person);
// The new walk variable is now a reference to the walk function with this set to the person object
walk();
