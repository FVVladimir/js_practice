// Використовуючи рекурсію, напишіть функцію, яка приймає два параметри - start та finish.
// За допомогою рекурсії, виведіть всі числа від start до finish.

function printIntervalRec (start, finish) {

  if (start <= finish){
    console.log(start);
    start++;
    printIntervalRec(start, finish);
  }     
    
}

// printIntervalRec(19, 17);
printIntervalRec(19, 23);