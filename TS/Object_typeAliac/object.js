"use strict";
// Using type infference
// const person = {
//   name: "hansraj",
//   age: 24,
//   isStudent: true,
//   address: {
//     city: "indore",
//     state: "MP",
//   },
// };
// console.log(person);
// console.log(person.address.city);
// // this line will give us TS error
// // person.address.city = 123;
// console.log(person);
// // Using type annotation
// const person1: {
//   name: string;
//   age: number;
//   isStudent: boolean;
//   address: { city: string; state: string };
// } = {
//   name: "hansraj",
//   age: 24,
//   isStudent: true,
//   address: {
//     city: "indore",
//     state: "MP",
//   },
// };
// console.log(person1);
// console.log(person1.address.city);
// const person2: {
//   name: string;
//   age: number;
//   isStudent: boolean;
//   address: { city: string; state: string };
// } = {
//   name: "hansraj",
//   age: 24,
//   isStudent: true,
//   address: {
//     city: "indore",
//     state: "MP",
//   },
// };
// console.log(person2);
// console.log(person2.address.city);
// yha ek problem ye hai hamara source code bhot bda ho rha hai
// object ke type define karne me har object ke liye
// iss chij ke solution ke liye ham use karenge Type_Alice and Interface
