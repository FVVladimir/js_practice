import  {arrSum}  from "./task3.js";

function averageGrade (...grade) {
    
    let averageGrade = Math.floor(arrSum(grade) / grade.length);
    console.log(averageGrade)

    if(averageGrade < 50) console.log('Low performans');
    if(averageGrade > 50  && averageGrade < 69) console.log('Medium performans');
    if(averageGrade > 70 && averageGrade < 89) console.log('Good performans');
    if(averageGrade > 90) return console.log('Very good performans');
    
}

averageGrade(99,67,98);
averageGrade(71,67,28);
averageGrade(9,7,8);