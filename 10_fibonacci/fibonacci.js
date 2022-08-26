const fibonacci = function(num) {

    let firstNum = 0;
    let secNum = 1;

    if(num < 0) {
        return "OOPS"
    }
    else if (num === 1) {
        return 1
    } else {
        for(let i = 0; i < num; i++) {
            let sum = firstNum + secNum
            firstNum = secNum
            secNum = sum
            
        }
      return firstNum
    }
};

//console.log(fibonacci(6))
// Do not edit below this line
module.exports = fibonacci;
