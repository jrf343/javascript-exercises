const fibonacci = function(number) {

    let int = 0;
    if ((typeof number) == "string") {
        int = parseInt(number, 10);
    } else {
        int = number;
    }

    if (Math.sign(int) == -1) {
        return 'OOPS';
    }

    let fibArray = [1];
    let fibNum = 1;

    for (let i = 1; i < int; i++) {
        fibArray.push(fibNum);
        fibNum = fibNum + fibArray[i-1];
    }

    return fibArray[int - 1];

};

// Do not edit below this line
module.exports = fibonacci;
