//exports por defecto
//import MyImportedClass from "./module-export";


//exports con nombre
import MyImportedClass, { Hello } from "./export-modules.js"; 
import * as allImports from "./export-modules.js";

console.log(Hello());
//console.log(Goodbye);

const MyClass = new MyImportedClass();
console.log(MyClass.Hello);

console.log(allImports.Hello());
const myClass2 = new allImports.default();
console.log(myClass2.goodbye());
