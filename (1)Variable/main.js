//Var -> function scope, so it is accessible outside the block
//Let and Const -> block scope, so it is not accessible outside the block

function sayHello() {
  for (var i = 0; i < 5; i++) {
    console.log(i);
  }
}

sayHello();

//Explanation between let and const, const is not reassignable but let is reassignable
const x = 1;
x = 2; //Error: Assignment to constant variable

let y = 1;
y = 2; //No Error
