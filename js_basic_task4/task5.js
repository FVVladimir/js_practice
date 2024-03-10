// Є масив із числами.
// За допомогою .every() перевірити, чи всі елементи масиву менше 50.

const numbers = [150, 23, 1, -53, 49];

const checkNumber = numbers.every(el => el < 50);

console.log(checkNumber);