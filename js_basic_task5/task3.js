const arrSum = (arr) => {
     
    return arr.reduce((acc,el) => acc + el)
}

console.log(arrSum([12,34,67,11,"j"]));

export default arrSum;