// Function overloading in JavaScript is a way to define multiple versions of a function
// with different parameter lists and return types.Although JavaScript itself does not provide
// built -in support for function overloading like some statically - typed languages,
// you can achieve it using a combination of JavaScriptS flexibility and good coding practices.
// Here is an example of function overloading in JavaScript

// function greet(name) {
//   if (typeof name === 'string') {
//     return `Hello, ${name}!`;
//   } else if (Array.isArray(name)) {
//     const names = name.join(', ');
//     return `Hello, ${names}!`;
//   } else {
//     return 'Hello, stranger!';
//   }
// }

// console.log(greet('Alice')); // Output: Hello, Alice!
// console.log(greet(['Alice', 'Bob'])); // Output: Hello, Alice, Bob!
// console.log(greet()); // Output: Hello, stranger!

// Note - But in TS we can achive this functionality using Generics

// // Now we will change it into an generics
// // function add<T, U>(a: T, b: U, c: number): void {
// function add<T, U>(a: T, b: U): void {
//   // type of value U and T can be anything
//   // return a + b; // this +(plus) operator is giving me error
//   console.log(typeof a);
//   console.log(typeof b);
//   //   console.log(typeof c);
// }

// const result1 = add<number, number>(3, 4);
// const result2 = add<number, string>(3, "thapa");
// const result3 = add<string, number>("thapa", 34);
// const result4 = add("hello", "world!");
// const result5 = add("hello", true);
