"use strict";
// Static properties and methods
// In TS, static methods and properties belong to the class itself rather than to instances of the class.
// By making methods and properties static, we can access them directly from the class without needing to
// create an instance of the class. this is useful for utility functions or properties that don't rely on instances-specific data.
// Exp - Math operations utility - creating a utility class to perform various mathematical operations.
// class MathOperation {
//   public static PI: number = Math.PI;
//   public static add(num1: number, num2: number): number {
//     return num1 + num2;
//   }
// }
// console.log(MathOperation.PI); // 3.141592653589793
// console.log(MathOperation.add(5, 4)); // 9
