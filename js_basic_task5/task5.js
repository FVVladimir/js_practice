function filterString (arr) {
  let filteredArr =[];
    for(let i = 0;i < arr.length; i++ ) {
        if(typeof(arr[i])!== "string") {
                filteredArr.push(arr[i])
        }        
    }

    console.log(filteredArr);
}

filterString([1,56,"q",12, "row", "17", 11,0]);