// Abstract classe provide a way to define common properties and methods that multiple derived classes can share.
// this promotes code reuse and helps establish a common interface for related classes.
// abstract class cannot be instantiated(abstract class ka ham kabhi bhi instance create nhi kar sakte hai)

// abstract classes focus on class inheritance and sharing common functionality,
// whereas the useContext hook in React focuses on managing global state and allowing components to consume that state.

// Exp - 1
// abstract class PerObj {
//     name: string;
//     age: number;

// }

// iss Person, Person1, Person2 classes ke andar name and age properties hona hi chahiye
// class Person: PerObj = {
//     name: 'hansraj',
//     age: 23,
// }

// class Person1: PerObj = {
//     name: "thapa",
//     age: 30,
// }

// class Person3: PerObj = {
//     name: "vinod",
//     age: 22,
// }

// Exp - 2

abstract class Shape {
  constructor(protected color: string) {}
  abstract calculateArea(): number;
  abstract displayArea: () => void;
}

// iss Circle class me calculateArea and displayArea method ko define and use karna hi padega
// otherwise hame error milegi - Non-abstract class 'Circle' does not implement all abstract members of 'Shape'
class Circle extends Shape {
  constructor(protected color: string, protected radius: number) {
    super(color);
  }

  public calculateArea(): number {
    return Math.PI * this.radius * this.radius;
  }

  displayArea = (): void => {
    console.log(`This is a ${this.color} circle with radius ${this.radius}.`);
  };
}

const circle = new Circle("red", 2);
console.log(circle.calculateArea()); // 12.3893421169302
circle.displayArea(); // This is a red circle with radius 12.
