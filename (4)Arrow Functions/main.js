// const square = function(number){
//     return number * number;
// }

//Can be written as

const square = (number) => {
  return number * number;
};
//Arrow function always return a value, so you don't need to use the return keyword.
//Also can be written like this:

//const square = (number) => number * number; //no need to use the return keyword

console.log(square(5));

const jobs = [
  { id: 1, isActive: true },
  { id: 2, isActive: true },
  { id: 3, isActive: false },
];

const activeJobs = jobs.filter((job) => job.isActive);

console.log(activeJobs);

//Arrow functions don't rebind the this keyword, so you can use the this keyword inside an arrow function.
const person = {
  talk() {
    setTimeout(() => {
      console.log("this", this);
    }, 1000);
  },
};

person.talk();
