"use strict";
// Tpye Alias
// 1. Type aliases allow you to create custom names for any data type, including primitive types, union types, intersection types, and more.
// 2. They are created using the "type" keyword, and you can give them descriptive names.
// 3. Type aliases are often used for defining complex types, especially when you want to create reusable types that may combine existing types.
// 4. Type aliases support union and intersection types, making it easier to define complex types by combining other types.
// Exp :-
// 1.
// type Point = {
//   x: number;
//   y: number;
// };
// 2.
// type Coordinate = Point | string;
// 3.
// type Callback = (result: string) => void;
// Exp - 4
// type Person = {
//   name: string;
//   age: number;
//   isStudent: boolean;
//   class?: string;
//   address: { city: string; state: string };
// };
// const person: Person = {
//   name: "hansraj",
//   age: 24,
//   isStudent: true,
//   address: {
//     city: "indore",
//     state: "MP",
//   },
// };
// console.log(person);
// Exp - 2
// type Product = {
//   name: string;
//   price: number;
//   qty: number;
// };
// const product: Product = {
//   name: "laptop",
//   price: 10000,
//   qty: 5,
// };
// Calculate Total Price
// const calculateTotalPrice = (product: Product) => {
//   return `${product.name} total cost ${product.price * product.qty}`;
// };
// console.log(calculateTotalPrice(product)); // laptop total cost 50000
// Note - Type aliases can represent any data type, not just object shapes. They are more flexible and can define primitive types, union types, and more.
// // Define a type alias for a primitive type (string)
// type MyString = string;
// // Define a type alias for a union type
// type Result = number | string;
// // Define a type alias for a function
// type Calculator = (x: number, y: number) => number;
// // Define a type alias for an array of numbers
// type NumberArray = number[];
// // Define a type alias for a tuple
// type Point2D = [number, number];
// // Define a type alias with an intersection type
// type Person = {
//   name: string;
// } & {
//   age: number;
// };
// // Use the type aliases
// const greeting: MyString = "Hello, TypeScript!";
// const outcome: Result = Math.random() > 0.5 ? "Success" : 42;
// const add: Calculator = (a, b) => a + b;
// const numbers: NumberArray = [1, 2, 3, 4, 5];
// const point: Point2D = [10, 20];
// const person: Person = { name: "Alice", age: 30 };
