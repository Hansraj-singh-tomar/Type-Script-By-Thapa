// Intersection type allow you to combine multiple types into a singlr type.
// you use the & (ampersand) symbol to define an intersection type
// kisi company ka me employee and vinod dono kehlaunga

type Person = {
  name: string;
  age: number;
};

type Employee = {
  emp_id: number;
  department: string;
};

type EmployeeDetailes = Person & Employee; // isme dono type alias ki type field dena hai

// const employee: EmployeeDetailes = {
//   name: "hansr",
//   age: 23,
//   emp_id: 234,
//   department: "cs",
// };
// console.log(employee); // { name: 'hansr', age: 23, emp_id: 234, department: 'cs' }

// const myPersonalInfo: Person = {
//   name: "hansr",
//   age: 24,
// };
// console.log(myPersonalInfo); // { name: 'hansr', age: 24 }

// this will give us error
// const employee: EmployeeDetailes = {
//   name: "hansr",
//   emp_id: 234,
//   department: "cs",
// };
// console.log(employee);
