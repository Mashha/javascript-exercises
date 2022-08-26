const palindromes = function (palindrome) {

    let reg = /[\W_]/g
    let word = palindrome.toLowerCase().replace(reg, "")
    let reverseWord = word.split("").reverse().join("")

    console.log(word)
    console.log(reverseWord)

    if(word === reverseWord) {
        return true
    } else {
        return false
    }
};


// Do not edit below this line
module.exports = palindromes;
