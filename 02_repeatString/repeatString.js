const repeatString = function(word, times) {
    if (times < 0) return "ERROR"//returns ERROR with negative numbers
    let string = "";//create a variables to hold the string to return
    for (let i = 0; i < times; i++) {
        string = string + word;
    }//create a loop to repeats the given number of times and 
    return string;//add the given string to the result on each loop
};

// Do not edit below this line
module.exports = repeatString;