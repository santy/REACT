let extLet = 1; //Acabará sustituyendo el uso de var
var extVar = 1;

if (true) {
let intLet = 2; //sólo disponible hasta que acaba el bloque


console.log("Inside Function -----");
console.log("extLet: ",extLet);
console.log("extVar: ",extVar);
console.log("intLet: ",intLet);
console.log("intVar: ",intVar);
var intVar = 2; //la inicializa al inicio del bloque
}

console.log("Outite Function -----");
console.log("extLet: ",extLet);
console.log("extVar: ",extVar);
//console.log("intLet: ",intLet);
console.log("intVar: ",intVar);

const a = 1; //permite inicializar una variable de sólo lectura no es mutable
