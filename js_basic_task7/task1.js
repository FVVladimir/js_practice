const phone = {
    tradeMarck: "Nokia",
    screeen: "5\"",
    memory: "5GB",
    call: function (){
        console.log('please input number')
    },
    break: function (){
        console.log('call is over')
    },
};
const car = {
    marck: "kia",
    seats: "5",
    engen: "2.4",
    start: function (){
        return `Please check the full and start engen`
    },
    about: function (){
        return `This car ${this.marck} have a ${this.seats} seats and engen ${this.engen} liter`
    },
};
const person = {
    name: "Johe",
    age: "35",
    edukation: "master",
    sayHello: function (){
        return `Hello ${this.name}`
    },
    askMe: function (){
        return `Hello i have a degry ${this. edukation} you can ask me something`
    },
};
phone.break();
console.log(car.about());
console.log(person.askMe());
