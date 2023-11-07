"use strict";
// Task - 1 (Check Even)
function isEven(a) {
    return a % 2 === 0;
}
console.log(isEven(5)); // false
// BigInt Number = 2^53 = c
let bigNumber = Number.MAX_SAFE_INTEGER;
console.log(bigNumber); // 9007199254740991;
let maxNumber = 9007199254740992n;
console.log(maxNumber); // 9007199254740992n
let anotherBigNumber = BigInt("900719925474099256");
console.log(anotherBigNumber); // 900719925474099256n
let sum2 = maxNumber + anotherBigNumber;
console.log("sum " + sum2); // 909727124728840248 // why n is not coming in that
let difference = maxNumber - anotherBigNumber;
console.log(difference); // -891712726219358264n
let product2 = maxNumber * anotherBigNumber;
console.log(product2); // 8112963841460668673982058779901952n
let division = maxNumber / anotherBigNumber;
console.log(division); // 0n
