const reverseString = function(string) {
    let stringArray = string.split("");
    stringArray.reverse();
    let reversedString = stringArray.join('');

    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
