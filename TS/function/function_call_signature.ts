// The third line is an example of function call signature
// export type TodosContext = {
//   todos: Todo[];
//   handleAddToDo: (task: string) => void;
// }

// The function call signature refers to the declaration or definition of a function, which
// includes the function's name, parameter and return type. It defines the structure and type
// information of a function without including the function's implementation or body.

// Note - Call signatures are typically used inside object type notation to describe the shape of functions within object types.

// // Exp - 1
// type Student = {
//   name: string;
//   age: number;
//   gender?: string;
//   // first way (we have to use this way)
//   greet: (country: string) => string; // this is our method call signature

//   // second way
//   // (country: string):string; // pure call signature
//   //   console.log(student2("Nepal")); // isse iss tarah se call karna hai
// };

// const student1: Student = {
//   name: "hans",
//   age: 23,
//   greet: (country): string => {
//     return `Welcome My name is ${student1.name}, I am ${student1.age}yrs old and i am from ${country}`;
//   },
// };

// const student2: Student = {
//   name: "thapa",
//   age: 30,
//   greet: (country): string => {
//     return `Welcome My name is ${student2.name}, I am ${student2.age}yrs old and i am from ${country}`;
//   },
// };

// const introduction: (student1: Student) => string = (
//   student1: Student
// ): string => {
//   const { name, age } = student1;
//   return `Welcome My name is ${name}, I am ${age}yrs old`;
// };

// console.log(introduction(student1));
// console.log(student1.greet("India"));
// console.log(student2.greet("Nepal"));

// From chatGPT

// Define a function type using a call signature
type MyFunctionType = (param1: number, param2: string) => string;

// Implement a function based on the function type
const myFunction: MyFunctionType = (param1, param2) => {
  return `${param1} ${param2}`;
};

// Usage
const result = myFunction(42, "Hello");
console.log(result); // Outputs "42 Hello"
