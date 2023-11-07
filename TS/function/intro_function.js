"use strict";
// 1. in this example void bydefault rehta jo hame dikhta nhi hai but hai uthar
// function greet(name: string, id: number): void {
//   console.log(`welcome ${name} and your id is ${id}`); // welcome vinod and your id is 12
// }
// greet("vinod", 12);
// 2. Function return type
function greet(name, id) {
    return `welcome ${name} and your id is ${id}`; // welcome vinod and your id is 12
}
console.log(greet("vinod", 12));
