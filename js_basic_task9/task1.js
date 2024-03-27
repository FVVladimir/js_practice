const stringWithPause = (string,time) => {
    
    return setTimeout(() => console.log(string), time)
};

stringWithPause("hello world", 3000);


