import { actionString } from "./function.js";

function setTimeForConsolString(func, string ,time) {
    
       return setTimeout(func, time, string);
}

setTimeForConsolString(actionString, "hoola evrybody", 2500);