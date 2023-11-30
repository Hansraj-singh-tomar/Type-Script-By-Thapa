"use strict";
// Type inference in TS refers to the ability of TS compiler to automatically determine and assign types to variables,
// expressions, and function return values based on their usage and context in the code.
// type inference - yha TS compiler apne aap hi type detect kar ke define kar rha hai
const myName = "Vinod";
// type annotation - jisme ham variable ka type define karte hai
const myName2 = "vinod";
// Best Practices for using type inference in TS
// 1. Use type inference for simple cases where the assigned value clearly indicates the intended type.
// 2. When in doubt, provide explicit type annotation to make your intention clear.
// 3. Avoid relying too heavily on type inference when the assigned value is complex or ambiguous.
// 4. Regularly review and refactor your code to ensure the inferred types align with your intentions.
let age = 23; // The compiler infers the type number for the variable age.
let isValid = true; // The compiler infers the type boolean for the variable isValid.
