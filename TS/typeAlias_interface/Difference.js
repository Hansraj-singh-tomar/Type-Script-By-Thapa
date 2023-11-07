"use strict";
// ------------- Difference between type_aliac and interface -----------------
// in class
class BioData {
    constructor(name, age, city, state) {
        this.name = name;
        this.age = age;
        this.city = city;
        this.state = state;
    }
}
const data = new BioData("hasnraj", 23, "indore", "MP");
console.log(data);
// in Object
// const BioData: Data = {
//   name: "hasnraj",
//   age: 23,
//   city: "indore",
//   state: "MP",
// };
// console.log(BioData);
