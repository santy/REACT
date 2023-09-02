const user = {
  name: "Alvaro",
  surname: "Estrada",
  courses: ["Introduction to AWS", "Introuction to React", "Introduction to Sprin Security"]
};

//Extraer atributos del usuario con funcion flecha

const getFullName = ({ name, surname}) => `${name} ${surname}`;
console.log("getFullName:", getFullName(user));

//lo que es lo mismo con variables

const {name, surname} = user;
console.log(name);

//Desestructuracion en otro objeto

const newUser = {
  ...user, //la varialbe que viene despues se va a extender
  name: "Raquel",
  courses: ["Introduction to AWS", "Introuction to React", "Introduction to Sprin Security"]
}

console.log(newUser); 


//Extraer items de arrays

const [firstCourse, ...otherCourses] = newUser.courses;
console.log("firstCourses:", firstCourse);
console.log("otherCourses:", otherCourses)


//Extraer y renombrar atributos
const { name: newName } = newUser;

//Asignar clave de objeto 

const newObject = {newName, firstCourse};
console.log("newObject:", newObject);

let a = 1;
let b = 2;
let c = [3, 4, 5];
console.log(a, b, ...c);
