//const libs = ["React", "Vue", "Angular"];
const libs = ["React"];

console.log(`Este curso es sobre ${libs[0]}`); //String del tipo template

console.log("Este curso es sobre ${libs[0]}");

const l = libs.length;

console.log(`
  ${l > 1 ? `Hay ${l} libreria` : "La libreria es"}:
  ${libs.join(",")}...
`)
