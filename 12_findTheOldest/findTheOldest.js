const findTheOldest = function(array) {

    let ageArray = [];

    for (const person of array) {
        let oldestAge = 0;
        if (!person.hasOwnProperty("yearOfDeath")) {
            let today = new Date();
            oldestAge = today.getFullYear() - person.yearOfBirth;
        } else {
            oldestAge = person.yearOfDeath - person.yearOfBirth;
        }

        let personName = person.name;
        ageArray.push({"name": personName, "age": oldestAge});
    }

    ageArray.sort((a,b) => b.age - a.age);

    return ageArray[0];

};

// Do not edit below this line
module.exports = findTheOldest;
