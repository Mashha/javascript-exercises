const sumAll = function (startNum, endNum) {
  let sum = 0

  if (startNum < 0 || typeof(startNum) !== "number" || isNaN(startNum)) {
    return 'ERROR'
  } else if (endNum < 0 || typeof(endNum) !== "number" || isNaN(endNum)) {
    return 'ERROR'
  } 
  else if (startNum > 0 && endNum > 0) {
  for (let i = startNum; i <= endNum; i++) {
    sum += i
  }
  for (let j = endNum; j <= startNum; j++) {
    sum += j
  }}
   
 //console.log( typeof startNum)
  return sum
}

//console.log(sumAll("1", 4))

// Do not edit below this line
module.exports = sumAll
