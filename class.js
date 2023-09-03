//Atributos
//Métodos de instancias y estáticos
//Herencias

class Greeter {

  name = "unnamed";
  static greetoWord = "Hello";

  constructor( {name}) {
    this.name = name;
  }

  greet() {
    return `${Greeter.greetoWord}, Soy ${this.name}`;
  }
}

class User extends Greeter {
  surname = "";
  constructor({ name, surname }) {
    super({ name });
    this.surname = surname; 
  }

  greet(){
    return `${super.greet()} ${this.surname}`;
  } 
}


class Book {
  author = "Hari";
  publisher = "Apress";
  getPublisher = () => {
    console.log(this.publisher);
  };
}
class ReactBook extends Book {
  name = "Just React";
  publishedYear = 2022;
}
const reactBook = new ReactBook();
console.log(reactBook.name);
reactBook.getPublisher();




const user = new User({ name: "Raphael", surname:"Perez" });

console.log(user.greet());
Greeter.greetoWord = "Hola";
