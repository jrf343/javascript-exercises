const palindromes = function (string) {

    const regexPattern = /[^A-Za-z]/g;

    const lettersOnly = string.replace(regexPattern, '');
    const lowerLettersOnly = lettersOnly.toLowerCase();

    let lettersArray = lowerLettersOnly.split("");
    let reversedArray = lettersArray.reverse();

    const reversedArrayString = reversedArray.toString();
    const reversedString = reversedArrayString.replaceAll(",", "");

    if ( lowerLettersOnly.localeCompare(reversedString) == 0 ) {
        return true;
    } else { 
        return false;
    }

};

// Do not edit below this line
module.exports = palindromes;
