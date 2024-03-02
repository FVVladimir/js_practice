import chalk from "chalk";

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const basicPrice = 10000;
  let finalPrice = 0;
  let priceAdjasment = 0;
  let odo = getRandomIntInclusive(0,200000);
  let age = getRandomIntInclusive(2000,2024);
  let hasAC = getRandomIntInclusive(0,1);
  let hasAirBag = getRandomIntInclusive(0,1);
  let isElectik = getRandomIntInclusive(0,1);

  if(age > 2019){
    
     priceAdjasment = basicPrice * 0.1;
     finalPrice = basicPrice + priceAdjasment;
     
      } 
      
  if(odo >= 50000 && odo <= 100000){
    
         priceAdjasment = basicPrice  * 0.05;
         finalPrice = basicPrice - priceAdjasment;
         
        }
        
  if(hasAC){
    
            priceAdjasment = basicPrice * 0.07;
            finalPrice = basicPrice + priceAdjasment;
            
          }
          
    if(hasAirBag){
    
            priceAdjasment = basicPrice * 0.08;
            finalPrice = basicPrice + priceAdjasment;
            
            }
            
    if(isElectik){
    
                priceAdjasment = basicPrice * 0.15;
                finalPrice = basicPrice + priceAdjasment;
                
  }
//   console.log("age", age)
//   console.log("odo", odo)
//   console.log("hsaAC", !!hasAC)
//   console.log("hasAirBag", !!hasAirBag)
//   console.log("isElectric", !!isElectik)
  console.log("finalPrice is", chalk.bold.bgRed(finalPrice));