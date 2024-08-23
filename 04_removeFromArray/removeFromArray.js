/*
const removeFromArray = function(array, ...args) {
    // create a new empty array
    const newArray = [];
    //use forEach to go through the array
    array.forEach((item) => {
        //push every element into the new array
        //UNLESS it is included in the function arguments
        //so we create a new array with every item, expect those that should be removed
        if (!args.includes(item)) {
            newArray.push(item);
        }
    });
    //and return that array
    return newArray;
};
*/

const removeFromArray = function(array, ...arguments) {
    return array.filter((value) => !arguments.includes(value));
};


// Do not edit below this line
module.exports = removeFromArray;