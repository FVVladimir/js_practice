// Створити метод який перевіря чі є рядок повністю з великих літер

let strUpperCase = 'HOLLA 555 EVERYBODY';
let strLowerCase = 'holla evrybody';
let strMix = 'HollA eVryBody';



function checkCAPS(str){
   return str === str.toUpperCase();
};

console.log(checkCAPS(strUpperCase));
console.log(checkCAPS(strLowerCase));
console.log(checkCAPS(strMix));