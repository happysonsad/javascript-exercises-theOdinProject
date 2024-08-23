const sumAll = function (min, max) {
    
    //return ERROR if -ve numbers
    if (min < 0 || max < 0) return "ERROR"


    //return ERROR if non-integer parameters
    if (!Number.isInteger(min) || !Number.isInteger(max)) return "ERROR"

    //work w/larger number first
    /*
    if (min > max) {
        const largerOne = min; //create new variables to store the larger numbers
        min = max; //change the min to max
        max = largerOne; //assign back the larger number
    }
    */
    
    if (min > max) [min, max] = [max, min];

    let totalSum = 0;
    for (let i = min; i <= max; i++) {
        totalSum += i;
    } return totalSum;
};

// Do not edit below this line
module.exports = sumAll;