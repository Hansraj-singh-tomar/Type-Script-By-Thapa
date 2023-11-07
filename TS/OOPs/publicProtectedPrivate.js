"use strict";
// Access modifier - Public, Protected and Private
//            | parent class  |  child class  |  Outside class
// public     |  yes          |    yes        |   yes
// Protected  |  yes          |    yes        |   no
// Private    |  yes          |    no         |   no
// Byfault everthing is an public
// Protected keyword
// class Persons {
//   name: string;
//   age: number;
//   protected hobbies: string[];
//   constructor(name: string, age: number, hobbies: string[]) {
//     this.name = name;
//     this.age = age;
//     this.hobbies = hobbies;
//   }
//   introducParent(): string {
//     return `I am ${this.name} and i am ${
//       this.age
//     } year old and my hobbies are ${this.hobbies.join(",")}`;
//   }
// }
// class Student extends Persons {
//   grade: number;
//   constructor(name: string, age: number, hobbies: string[], grade: number) {
//     super(name, age, hobbies);
//     this.grade = grade;
//   }
//   introducStudent(): string {
//     return `${super.introducParent()} and i am in ${this.grade}th grade`;
//   }
// }
// const student1: Student = new Student(
//   "hasnraj",
//   23,
//   ["reading", "cricket", "stairing"],
//   10
// );
// console.log(student1);
// without using protected keyword on hobbies inside the Persons class
// console.log(student1.hobbies); // // [ 'reading', 'cricket', 'stairing' ]
// using protected keyword on hobbies, i won't be able to get this hobbies property
// console.log(student1.hobbies); // Property 'hobbies' is protected and only accessible within class 'Persons' and its subclasses Student.
// private
// private properties only accesible with in that class not inside their subclass or else
// class Persons {
//   name: string;
//   private age: number;
//   hobbies: string[];
//   constructor(name: string, age: number, hobbies: string[]) {
//     this.name = name;
//     this.age = age;
//     this.hobbies = hobbies;
//   }
//   introducParent(): string {
//     return `I am ${this.name} and i am ${
//       this.age
//     } year old and my hobbies are ${this.hobbies.join(",")}`;
//   }
// }
// class Student extends Persons {
//   grade: number;
//   constructor(name: string, age: number, hobbies: string[], grade: number) {
//     super(name, age, hobbies);
//     this.grade = grade;
//   }
//   // Get age private property inside child class
//   getAge(): void {
//     console.log(this.age); // Property 'age' is private and only accessible within class 'Persons'.
//   }
//   introducStudent(): string {
//     return `${super.introducParent()} and i am in ${this.grade}th grade`;
//   }
// }
// const student1: Student = new Student(
//   "hasnraj",
//   23,
//   ["reading", "cricket", "stairing"],
//   10
// );
// console.log(student1);
// console.log(student1.introducStudent()); // I am hasnraj and i am 23 year old and my hobbies are reading,cricket,stairing and i am in 10th grade
// shorthand Properties in classes
// type inference ka use ho rha hai
// ts automatically infer kar rha hai what to do
// class Persons {
//   constructor(
//     public name: string,
//     public age: number,
//     protected hobbies: string[]
//   ) {}
//   introducParent(): string {
//     return `I am ${this.name} and i am ${
//       this.age
//     } year old and my hobbies are ${this.hobbies.join(",")}`;
//   }
// }
// const person1 = new Persons("hansraj", 23, ["reading", "sports"]);
// console.log(person1);
// console.log(person1.introducParent()); // I am hansraj and i am 23 year old and my hobbies are reading,sports
