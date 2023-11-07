"use strict";
// Inheritance allows a class to reuse the functionality of an existing class
// without rewriting it.
// Inheritance is a machanism in which one class acquire the properties of another class,
// for example, a child innherits the traits of his parents.
// Exp - 1
// class Persons {
//   name: string;
//   age: number;
//   hobbies: string[];
//   constructor(name: string, age: number, hobbies: string[]) {
//     this.name = name;
//     this.age = age;
//     this.hobbies = hobbies;
//   }
//   introduce(): string {
//     return `Hi, I'm  ${this.name} and i'm ${
//       this.age
//     } year old. i love ${this.hobbies.join(",")}`;
//   }
// }
// Exp - 2
// class Student extends Persons {
//   grade: number;
//   constructor(name: string, age: number, hobbies: string[], grade: number) {
//     super(name, age, hobbies);
//     this.grade = grade;
//   }
//   introduce(): string {
//     return `${super.introduce()} and i'm in grade ${this.grade}`;
//   }
// }
// const person1: Persons = new Persons("hasnsraj", 24, ["reading", "painting"]);
// console.log(person1.introduce()); // Hi, I'm  hasnsraj and i'm 24 year old. i love reading,painting
// const student1 = new Student("divyanshi", 24, ["reading", "painting"], 1);
// console.log(student1.introduce()); // Hi, I'm  hasnsraj and i'm in grad 1 and i'm 24 year old. i love reading,painting
// Practice for that
