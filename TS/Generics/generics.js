"use strict";
// Generics in TS allow you to create reusable components or
// functions that can work with multiple data types.
// if we are using more than two data type on union it get stuck or get confuse for that we will use generics
// Passing arguments normal way using union
// function logAndReturn(value: string | number | boolean): number | string | boolean {
//   console.log(value);
//   return value;
// }
// const numberResult: number = logAndReturn(42);
// const stringResult: string = logAndReturn("hello world");
// const booleanResult: boolean = logAndReturn(true);
// console.log(numberResult);
// console.log(stringResult);
// console.log(booleanResult);
// Now using Generics
// function logAndReturn<T>(value: T): T {
//   //   console.log(value);
//   return value;
// }
// const numberResult = logAndReturn<number>(42);
// const stringResult = logAndReturn<string>("hello world");
// const booleanResult = logAndReturn<boolean>(true);
// console.log(numberResult);
// console.log(stringResult);
// console.log(booleanResult);
// Function overLoading
// function add(a: number, b: number): number; // this is an function call signature
// function add(a: string, b: string): string; // this is also an function call signature
// function add(a: any, b: any): any {
//   // this is an our normal function call
//   return a + b;
// }
// Now we will change it into an generics
// function add<T, U>(a: T, b: U, c: number): void {
function add(a, b) {
    // type of value U and T can be anything
    // return a + b; // this +(plus) operator is giving me error
    console.log(typeof a);
    console.log(typeof b);
    //   console.log(typeof c);
}
const result1 = add(3, 4);
const result2 = add(3, "thapa");
const result3 = add("thapa", 34);
const result4 = add("hello", "world!");
const result5 = add("hello", true);
// const result6 = add<string, boolean>("hello", true, 6);
// // me isse esse bhi kar sakta hu like normal function
// function add(a: number, b: string) {
//     console.log(typeof a);
//     console.log(typeof b);
// }
// const result1 = add(5, "thapa"); // this will work fine
// const result2 = add("thapa", 4); // in this case it will get fail for that we will use generics
