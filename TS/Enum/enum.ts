// Enum

// We use enum in mongoose/MongoBD while using Data Modeling

// Enum in Ts are commonly used when you want to represent a set of related values
// and choose one value from multiple options. Enum provide a convenient way to define a set of
// named values and associate them with specific meanings.

// Note - In TS, when enum constants are not explicitly assigned numeric values, they are
// automatically assigned incremental numeric values starting from 0. The default numeric value for
// the first enum constant is 0, and subsequent enum constants receive values incremented by 1.

// user1 -> login -> normal user(isse admin ka option nhi show karna hai)
// user2 -> login -> admin user(isse admin ka option dikhana hai navbar me)

enum Roles {
  user = "user",
  admin = "admin",
}

type LoginDetailes = {
  name?: string;
  email: string;
  password: string;
  // role: [admin, user]
  role: Roles;
};

const user1: LoginDetailes = {
  name: "hans",
  email: "tomar033@gmail.com",
  password: "dsfd",
  role: Roles.admin,
};

const user2: LoginDetailes = {
  name: "thapa",
  email: "thapa@gmail.com",
  password: "fgrds",
  role: Roles.user,
};

const isAdmin: (user1: LoginDetailes) => string = (
  user1: LoginDetailes
): string => {
  const { name, role } = user1;
  if (role === "admin") {
    return `${name} is allow to edit the website`;
  } else {
    return `${name} is not allow to edit the website`;
  }
};

console.log(isAdmin(user1)); // hans is allow to edit the website
console.log(isAdmin(user2)); // thapa is not allow to edit the website
