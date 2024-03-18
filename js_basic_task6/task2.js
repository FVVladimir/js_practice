// Використовуючи замикання, створіть функцію divider, яка приймає дільник(число, на яке треба ділити) та повертає іншу функцію,
// яка у свою чергу приймає ділене(число, яке потрібно поділити на дільник) та повертає результат ділення.

const devider = function (dilnik) {
     return function (dilne) {
        return dilne / dilnik
     }
};

const dilemNa5 = devider(5);
const dilemNa7 = devider(7);

console.log(dilemNa5(30));
console.log(dilemNa5(5));
console.log(dilemNa7(35));
console.log(dilemNa7(21));