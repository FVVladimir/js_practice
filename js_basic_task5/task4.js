import  arrSum  from "./task3.js";

function averageGrade (...Grade) {
    
    let averageGrade = arrSum(Grade);
    console.log(averageGrade)

    if(averageGrade < 75) return console.log('Low performans');
    if(averageGrade > 75 && averageGrade < 150) return console.log('Medium performans');
    if(averageGrade > 150 && averageGrade < 250) return console.log('Good performans');
    if(averageGrade > 250) return console.log('Very good performans');
    
}

averageGrade(99,67,98);
averageGrade(11,37,28);
averageGrade(9,7,8);