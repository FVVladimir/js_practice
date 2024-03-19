// Напишіть функцію, яка приймає як параметри два числа та рядок operator(+,-,/,*).
//  Поверніть результат операції.
//  За допомогою if-else зробіть перевірки на корректність передаваємих даних та викидайте помилку(throw new Error() ), якщо дані невірні:

// -Якщо операція ділення("/"), то другий параметр не може бути 0
// -Для всіх операцій перший та другий параметр повинні бути числами
// -Третій параметр повинен бути рядком та дорівнювати одному із 4 значень : +-/*
// -Кількість аргументів не повинна бути більше 3-х
// -Інші перевірки по бажанню

function calculate (oper1, oper2, action) {

        //   action.toString();
            
          switch(action) {

            case '+':
                return oper1 + oper2;
                break;
            case '-':
                if (oper1 < oper2) {
                    console.log('операнд 1 мае бути більше операнда 2')
                } else return oper1 - oper2;
                break;
            case '*':
                return oper1 * oper2;
                break;
            case '/':
                if (oper2 == 0){
                    console.log('на нуль ділити не можна')
                }  else return oper1 / oper2;
                break;
                     
           }           
}

console.log(calculate(3,5,'+'));
console.log(calculate(3,5,'-'));
console.log(calculate(5,3,'-'));
console.log(calculate(14,2,'/'));
console.log(calculate(3,0,'/'))
console.log(calculate(3,6,'*'))