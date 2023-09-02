/*
function double(a) {
  return a * 2;
}
*/

const double = a => a * 2; //Es lo mismo que la función anterior

//const doube = (a) => a * 2; // Es lo mismo pero con paréntesis

//const doube = (a) => {a * 2};

const sum = (a, b) => a + b; 

const factorial = a => {
  if (a <= 1){
    return 1;
  }
  return a * factorial(a-1);
}

console.log("double:", double(2));
console.log("sum:", sum(1,2));
console.log("factoria:", factorial(4));
