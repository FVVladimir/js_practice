// Є масив рядків імен.
// Використовуючи .find(), виведіть перше ім'я, з довжиною більше 6 символів.

const names = ["John", "Fernando", "Alexandra", "Anatolii", "Arina", "Elon"];

const findedName = names.find(el => el.length > 6);

console.log(findedName);