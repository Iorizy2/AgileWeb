 const fibonacci = require('./lib/fibonacci')
// console.log(fibonacci(1));
function IsLeapYear(n){
    
    
    if(n % 400==0)
        return true;
    if(n % 100==0)
        return true;
    if(n % 4 ==0)
        return true;
    return false;
    
}

console.log(IsLeapYear(2000));

for(var i=1;i<20;i++){
    console.log(fibonacci(i));
}