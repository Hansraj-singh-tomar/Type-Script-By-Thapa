// A typeof guard in TS lets you narrow down the type of a variable based on a runtime value.
// In TS, type narrowing allows you to write type-safe code by
// ensuring you only operate on the correct type under certain circumstances. this is
// particularly useful with union types and generic types.

// Exp - 1
const favHobbies = (hobby: string | string[]) => {
  //  return hobby.map(() => {}); // Error - Property 'map' does not exist on type 'string | string[]'.

  // // using type guard - ab hame error dekhne ko nhi milegi
  // if (typeof hobby === "object") {
  //     return hobby.map(() => { })
  // } else {
  //     console.log(hobby);
  // }

  // or depth check bhi kar sakte hai
  if (typeof hobby === "object" && Array.isArray(hobby)) {
    return hobby.map(() => {});
  } else {
    console.log(hobby);
  }
};

favHobbies("coding"); // ye else vale part me chale jayega
favHobbies(["cri", "singing"]);

// isse hi ham type narrowing and type guard kehte hai
