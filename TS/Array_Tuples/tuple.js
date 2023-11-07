"use strict";
// Tuple - In TS tuples are a data structure that allows you to store a fixed-size collection of
// elements of different types. They are similar to arrays, but with a key difference: the types of
// elements in a tuple are fixed and declared at the time of creation, whereas arrays can hold
// elements of the same type, and their size can vary.
// Real Life Example
// let's consider a scenario where you want to represent a person's basic information, including
// their name, age and whether they have a driver's license. Using a tuple can be an appropriate
// choice because these three elements have a specific order and type.
// Number of elements are fixed already
// type PersonInfo = readonly [string, number, boolean];
// // Note - readonly iss liye use karte hai taki koi issme value add or delete na kar sake
// // agar readonly nhi use karte hai to tuple ka use karne ka koi fayda hi nhi
// const person1: PersonInfo = ["vinod", 29, true];
// const person2: PersonInfo = ["thapa", 29, false];
// const displayPersonInfo: (person: PersonInfo) => string = (
//   person: PersonInfo
// ): string => {
//   const [name, age, hasDrivingLicense] = person;
//   return `Name: ${name}, Age: ${age}, Driver's License: ${
//     hasDrivingLicense ? "Yes" : "No"
//   }`;
// };
// console.log(displayPersonInfo(person1)); // Name: vinod, Age: 29, Driver's License: Yes
// console.log(displayPersonInfo(person2)); // Name: thapa, Age: 29, Driver's License: No
