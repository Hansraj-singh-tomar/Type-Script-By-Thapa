"use strict";
// In TS classes, you can use getter and setter methods to control the access and modification of class properties.
// Getter methods allow you to retrieve the value of a properties, while
// Setter methods allow you to set the value of a properties with additional logic or validation.
// class Persons {
//   constructor(
//     private name: string,
//     private age: number,
//     private hobbies: string[]
//   ) {}
//   set personAge(age: number) {
//     if (age > 512 || age < 0) {
//       throw new Error("Age is not valid");
//     }
//     this.age = age;
//   }
//   get personAge(): number {
//     return this.age;
//   }
//   introPerson(): string {
//     return `I am ${this.name} and i am ${
//       this.age
//     } year old and my hobbies are ${this.hobbies.join(",")}`;
//   }
// }
// const person1 = new Persons("hasnr", 122, ["reading", "singing"]);
// console.log(person1);
// person1.personAge = 32;
// console.log(person1.personAge);
