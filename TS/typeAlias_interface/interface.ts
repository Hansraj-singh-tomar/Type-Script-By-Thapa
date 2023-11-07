// Interface

// 1. Interfaces are used to define the shape of objects and classes.
// They are often used to describe the contract that objects must adhere to in terms of their properties and methods.

// 2. Interfaces can only define the structure of objects or classes, and they cannot represent union or intersection types.

// 3. Interfaces are used for declaring the public API of a class or object, making them suitable for defining object shapes
// that will be implemented or extended by other classes or objects.

// interface TS ke new version me introduce kiya gya

// Exp -
// interface Point {
//   x: number;
//   y: number;
// }

// interface Shape {
//   area(): number;
// }

// 1.
// // Using Interface
// interface Person {
//   name: string;
//   age: number;
// }

// function greet(person: Person) {
//   return "hello "+ person.name
// }

// 2.
// // Using TypeAlias
// type Person = {
//   name: string;
//   age: number;
// }

// function greet(person: Person) {
//   return "Hello " + person.name;
// }

// 3. You can extend multiple interfaces with extends, allowing you to compose multiple interface shapes in a single interface.
// interface A {
//   x: number;
// }
// interface B {
//   y: number;
// }

// interface C extends A, B {
//   z: number;
// }

// 4.

// interface Products {
//   name: string;
//   price: number;
//   quantity: number;
// }

// const product1: Products = {
//   name: "vinod",
//   price: 10000,
//   quantity: 5,
// };

// const calculateTotalPric: (Product1: Products) => number = (
//   product1: Products
// ): number => {
//   return product1.price * product1.quantity;
// };

// console.log(calculateTotalPric(product1)); // 50000
