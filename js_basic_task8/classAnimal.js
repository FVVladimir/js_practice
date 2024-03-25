export  class Animal{
    constructor(color, name, type){
        this.color = color;
        this.name = name;
        this.type = type;
    }

    sayHallo(){
          return `hallo my name is ${this.name}`;
    }

    run(){
        return `${this.name} let is go to run`;
    }
};