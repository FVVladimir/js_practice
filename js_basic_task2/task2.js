import chalk from "chalk";

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const basicPrice = 10000;
  let finalPrice = 0;
  let temp = 0;
  let odo = getRandomIntInclusive(0,200000);
  let age = getRandomIntInclusive(2000,2024);
  let AC = getRandomIntInclusive(0,1);
  let airBag = getRandomIntInclusive(0,1);
  let electik = getRandomIntInclusive(0,1);

  if(age > 2019){
    
     temp = basicPrice * 0.1;
     finalPrice = basicPrice + temp;
     
      } else if(odo >= 50000 && odo <= 100000){
    
         temp = basicPrice  * 0.05;
         finalPrice = basicPrice - temp;
         
        } else if(AC){
    
            temp = basicPrice * 0.07;
            finalPrice = basicPrice + temp;
            
          } else if(airBag){
    
            temp = basicPrice * 0.08;
            finalPrice = basicPrice + temp;
            
            } else if(electik){
    
                temp = basicPrice * 0.15;
                finalPrice = basicPrice + temp;
                
  }
//   console.log("age", age)
//   console.log("odo", odo)
//   console.log("AC", !!AC)
//   console.log("airBag", !!airBag)
//   console.log("electric", !!electik)
  console.log("fialPrice is", chalk.bold.bgRed(finalPrice));