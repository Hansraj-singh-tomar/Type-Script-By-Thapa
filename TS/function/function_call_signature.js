"use strict";
// The third line is an example of function call signature
// export type TodosContext = {
//   todos: Todo[];
//   handleAddToDo: (task: string) => void;
// }
// Implement a function based on the function type
const myFunction = (param1, param2) => {
    return `${param1} ${param2}`;
};
// Usage
const result = myFunction(42, "Hello");
console.log(result); // Outputs "42 Hello"
