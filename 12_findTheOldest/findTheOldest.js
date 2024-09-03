const getAge = function (birth, death) {
    if(!death) {
        death = new Date().getFullYear();
    }
    return death - birth
}


const findTheOldest = function (people) {
    return people.reduce((oldest, currentPerson) => {
        const oldestPerson = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
        const nextPerson = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);
        return oldestPerson > nextPerson ? oldest : currentPerson;
    });
};
// npm test findTheOldest.spec.js
// Do not edit below this line
module.exports = findTheOldest;
