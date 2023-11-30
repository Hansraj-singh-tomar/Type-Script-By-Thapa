// Any Type - The any type is the most flexible type in TS.
// It essentially turns off all type checking for the variables or expressions it is applied to.
// if you are using any it means you are writing code in js

// Exp:-
// let myFavNum: any = 5;
// myFavNum = "20";
// myFavNum = true;

// UseCases
// 1. Working with dynamic data: when dealing with data from dynamic sources like user inputs, network responses, or deserialized JSON objects, the any type can be useful.
// 2. Migration from js: when migrating an existing js codebase to typescript, using the any type can be a convenient way to quickly annotate variables and functions without immediately specifying their precise type.

// Unknown Type
// 1. The known type is a safer alternative to any because it still enforces type checking and type safety.
// 2. Variables of type unknown can hold values of any type, but you must perform type checks or type assertions before using them in specific ways.

// Type Checking
// let myFavNum = 55;
// myFavNum = true; // Type 'boolean' is not assignable to type 'number'

// Type Safety - ye jo variable hai is par me koi property or method use kar sakta hu ya nhi
// myFavNum.map(() => {}); // Property 'map' does not exist on type 'number'

// 1.
let num2: unknown;
num2 = 5;
num2 = "thapa";
num2 = true;

// type checking and type safety kar sakte hai using unknown
if (typeof num2 === "number") {
  console.log(num2 + 5); // abhi mera num2 = true hai isliye output nhi aa rha hai
} else {
  console.log("Type is not an number"); // type is not an number
}

// 2. While getting json data using fetch in that case we will use unknown

// async function fetchData(): Promise<unknown> {
//   const response = await fetch("https://api.example.com/data");
//   const data = await response.json();
//   return data;
// }

// async function processData() {
//   const response = await fetchData();
//   if (typeof response === "object") {
//     // perform operations on the response object
//   }
// }
// processData();
