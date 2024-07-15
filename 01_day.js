// Variables and Datatypes
// Activity 1 : Variable Declaration
// Task 1: Declare a variable using var, assign it a number, and log the value to the console.

var num = 22;
console.log(num);

// Task 2: Declare a variable using let, assign it a string, and log the value to the console.

let str = "hello task2";
console.log(str);

// Activity 2: Constant Declaration
// Task 3: Declare a const, assign it a boolean value, and log the value to the console.

const bool = true;
console.log(bool);

// Activity 3: Data Types
// Task 4: Create variables of idfferent data types (number, string, boolean, object, array) and log each variable's type using the typeof operator.

let num2 = 10;
console.log(typeof(num2));

let str2 = "task4";
console.log(typeof(str2));

let bool2 = false;
console.log(typeof(bool2));

let obj = {name: "Asim", fname: "Ismail", class: "12th"};
console.log(typeof(obj));

let arr = [1, 2, 3, 4, 5];
console.log(typeof(arr));


// Activity 4: Reassigning Variables
// Task 5: Declare a variable using let, assign it an initial value, reassign a new value, and log both values to the console.
let name = "Asim";


console.log(name);
name = "Imtiaz";
console.log(name);

// Activity 5: Understanding const
// Task 6: Try reassigning a variable declared with const and observe the error.
const model = "iphone";
model = "infinix"; // we can't reassign new values to constant.
console.log(model);

// const model = "apple"; // We can't redeclare constant as well


/*
You can declare variables in javascript using var let and const the difference between var let and cosnt are
if you declare a variable using var and assign it a value then we can redeclare and reassign it. It means if
declare a variable using var and assign it a value then you can create a new variable with the same name.
-> Let: If you declare a variable using let and assign it a value then you can reassign it but can't redeclare it
with the same name. You need to use let instead of var.
-> Const: If you declare a variable using const and assign it a value then it can't be redeclared and also can't
be reassigned.
                                 Difference between let and const 
-> If you declare a variable using let you can reassign it but can't redeclare it
but when you are using const nether you can redeclare it not you can reassign it.

*/