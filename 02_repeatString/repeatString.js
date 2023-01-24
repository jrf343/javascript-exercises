const repeatString = function(string, number) {
    let output = '';

    if (Math.sign(number) == -1) {
        output += 'ERROR';
    }
    else {
        let i = 0;
        while (i < number) {
            output += string;
            i ++;
        }
    }

    return output;

};

// Do not edit below this line
module.exports = repeatString;
