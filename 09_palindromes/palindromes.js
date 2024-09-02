const palindromes = function (string) {
    
    const withoutSymbols = "abcdefghijklmnopqrstuvwxyz0123456789";
    
    const cleanedString = string
    .toLowerCase()
    .split("")
    .filter((char) => withoutSymbols.includes(char))
    .join("");

    const ReversedString = cleanedString.split("").reverse().join("");

    return cleanedString === ReversedString;

}
// npm test palindromes.spec.js

// Do not edit below this line
module.exports = palindromes;
