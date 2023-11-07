// Default Parameter
// const greet2 = (name: string, id: number = 1): string => {
//   return `My Name is ${name} and ID is ${id}`;
// };
// console.log(greet2("hans", 23)); // My Name is hans and ID is 23

// Optional Parameter

// case - 1
// const greet2 = (name: string, id?: number): string => {
//   return `My Name is ${name}`;
// };
// console.log(greet2("hans")); // My Name is hans

// case - 2
const greet2 = (name: string, id?: number): string => {
  if (id) {
    return `Welcome, ${name} and Your id is ${id}`;
  } else {
    return `Welcome, ${name}`;
  }
};
console.log(greet2("hans", 23)); // Welcome, hans and Your id is 23
console.log(greet2("hans")); // Welcome, Hans
