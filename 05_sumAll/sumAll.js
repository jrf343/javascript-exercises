const sumAll = function(firstNum, lastNum) {
    if ( (typeof firstNum !== "number") || (typeof lastNum !== "number") ) {
        return 'ERROR';
    }

    if ( (Math.sign(firstNum) == -1) || (Math.sign(lastNum) == -1)  ) {
        return 'ERROR';
    }

    let sum = 0;
    let start = 0;
    let end = 0;

    if ( firstNum > lastNum ) {
        end = firstNum;
        start = lastNum;
    } else {
        start = firstNum;
        end = lastNum;
    }

    for (let i = start; i <= end; i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
