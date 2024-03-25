import {Animal} from "./classAnimal.js";


export class Cat extends Animal {
    constructor(size,animalHair,food,color,name,type){
        super(color, name ,type);
            this.size = size,
            this.animalHair = animalHair,
            this.food = food,
            this.color = color,
            this.name = name,
            this.type = type
    }

    eat(){
         return 'hello i am eat a lot';
    }

    slep(){
        return ' hello i slep all day and activity all night';
    }
};