// ------------- Difference between type_aliac and interface -----------------

// Using Type_alias
// type stud = {
//   name: string;
//   age: number;
// };

// type studArr = {
//   city: string;
//   state: string;
// };

// type Data = stud & studArr; // isme dono type_alias ki properties hona hi chahiye
// // type Data = stud | studArr; // isme kisi ek ki puri hi hona chahiye

// const BioData: Data = {
//   name: "hansraj",
//   age: 23,
//   city: "indore",
//   state: "MP",
// };

// console.log(BioData); // { name: 'hansraj', age: 23, city: 'indore', state: 'MP' }

// Using Interface - we will achive this functionality
interface Stud {
  name: string;
  age: number;
}

// interface StudArr {
//   city: string;
//   state: string;
// }

// yha ham dono interface ka name same rakh sakte hai
// in type_alias it didn't work
interface Stud {
  city: string;
  state: string;
}

// interface Data extends Stud, StudArr { }

// dono interface ka name same rakhne ke baad we can do this
interface Data extends Stud {}

// in class
class BioData implements Data {
  constructor(
    public name: string,
    public age: number,
    public city: string,
    public state: string
  ) {}
}
const data: BioData = new BioData("hasnraj", 23, "indore", "MP");
console.log(data); // BioData { name: 'hasnraj', age: 23, city: 'indore', state: 'MP' }

// in Object
// const BioData: Data = {
//   name: "hasnraj",
//   age: 23,
//   city: "indore",
//   state: "MP",
// };
// console.log(BioData);
