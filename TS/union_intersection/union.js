"use strict";
// Unnion
// Union type allow you to specify that a variable can hold values of
//  multiple types.you use the | (pipe) symbol to define a union type.
// Exp - 1
// const userInput: (value: string | number) => string | number = (
//   value: string | number
// ): string | number => {
//   if (typeof value === "number") {
//     return value * 2;
//   } else if (typeof value === "string") {
//     return value.toUpperCase();
//   } else {
//     throw new Error("Invalid input data");
//   }
// };
// console.log(userInput(10)); // 20
// console.log(userInput("hello")); // "HELLO"
// Exp - 2
// type Person = {
//   name: string;
//   age: number;
// };
// type Employee = {
//   emp_id: number;
//   department: string;
// };
// type EmployeeDetailes = Person | Employee; // kisi ek type alias ki puri type field honi hi chahiye
// isme koi issue nhi hai
// const employee: EmployeeDetailes = {
//   name: "hasnrj",
//   age: 24,
// };
// isme bhi koi issue nhi hai
// const employee: EmployeeDetailes = {
//     name: "hasnrj",
//     age: 24,
//     department: "cs"
// };
// isme bhi koi issue nhi hai
// const employee: EmployeeDetailes = {
//   name: "hasnrj",
//   age: 24,
//   emp_id: 111,
// };
// isme bhi koi issue nhi hai
// const employee: EmployeeDetailes = {
//   age: 24,
//   emp_id: 111,
//   department: "cs",
// };
// isme bhi koi issue nhi hai
// const employee: EmployeeDetailes = {
//     name: "ajs",
//     emp_id: 111,
//     department: "cs",
// };
// isme error show ho rhi hai
// const employee: EmployeeDetailes = {
//   name: "hasnrj",
//   department: "cs"
// };
// isme error show ho rhi hai
// const employee: EmployeeDetailes = {
//   name: "hasnrj",
//   emp_id: 111,
// };
// isme koi issue nhi hai
// const employee: EmployeeDetailes = {
//   emp_id: 111,
//   department: "cs",
// };
