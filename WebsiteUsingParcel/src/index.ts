// Firstly we need a package.json file
// For that we will write - npm init -y
// now we need TS config file - tsc -init => it will provide us tsconfig.json file

// console.log("i am .ts file");

const buttonElem = document.querySelector(".clickMe") as HTMLButtonElement;
const bodyElem: HTMLElement = document.body;
let isWhite = false;

buttonElem.addEventListener("click", () => {
  console.log("I am clicked");
  if (isWhite) {
    bodyElem.style.backgroundColor = "";
  } else {
    bodyElem.style.backgroundColor = "#CEDEBD";
  }
  isWhite = !isWhite;
});
