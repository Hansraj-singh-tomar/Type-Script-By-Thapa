// Void =>
// void: It is used as the return type of a function that doesn't return any value. For example:
// A variable of type void can only be assigned undefined or null.

function exampleFunction(): void {
  console.log("This function doesn't return any value.");
}

// Never =>
// never: It is used to indicate that a function will never return normally.
// This is often used in functions that throw errors, infinite loops, or have other infinite processing:
// A function of type never is expected to never have a reachable end point.
function throwError(message: string): never {
  throw new Error(message);
}

function infiniteLoop(): never {
  while (true) {
    console.log("This is an infinite loop!");
  }
}

// In summary, void is used when a function intentionally doesn't return any value, while never is used when a function is not expected to return normally (e.g., it throws an error or enters an infinite loop).
