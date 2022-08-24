const reverseString = function (string) {
  //first we need to add it to array
  // let addToArray = string.split("");
  // // reverse the array
  // let reverseArray = addToArray.reverse()
  // //join back
  // let joinTheString = reverseArray.join("")

  // shorter
  return string.split('').reverse().join('')
}

// Do not edit below this line
module.exports = reverseString
