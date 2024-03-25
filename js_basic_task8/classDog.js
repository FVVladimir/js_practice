import {Animal} from "./classAnimal.js";


export class Dog extends Animal {
      constructor(weigth, age, breed,color, name, type){
          super(color, name, type);
            this.weigth = weigth,
            this.age = age,
            this.breed = breed,        
            this.color = color,
            this.name = name,
            this.type = type
      }
      
      takeBall(){
         return `${this.name} common let is play with ball`;
      }
      goSwim(){
         return `${this.name} go to swim is there nice wether`;
      }
};