const building = new Object();

building.addres = "brayton beach";
building.flor = "3";
building.squaer = "300 m2";
building.info = function () {
    return `This building located ${this.addres} have a ${this.flor} flor and square ${this.squaer}`
}
const city = new Object();

city.name = "blida";
city.location = "alger";
city.language = "arabic or french";


console.log(building,building.info());

