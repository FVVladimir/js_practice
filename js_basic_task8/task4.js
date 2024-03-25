import { Dog } from "./classDog.js";
import { Cat } from "./classCat.js";
import { Animal } from "./classAnimal.js";

const someNewAnimal = new Animal('yello','joe','dog');
console.log(someNewAnimal.sayHallo());
console.log(someNewAnimal.run());

const Pluto = new Dog('20','5','labrador','golden','mike','dog')
console.log(Pluto);
console.log(Pluto.run());
console.log(Pluto.takeBall());
console.log(Pluto.goSwim());

const Tom = new Cat("middle", "long","all", "black","Tom","home cat");
console.log(Tom)
console.log(Tom.sayHallo())
console.log(Tom.eat())
console.log(Tom.slep())