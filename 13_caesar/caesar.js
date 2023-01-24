const caesar = function(string, key) {

    const regexPattern = /[A-Za-z]/g;
    let unicodeArray = [];

    for (let i = 0; i < string.length; i++) {
        let code = string.charCodeAt(i);

        if (string.charAt(i).match(regexPattern)) {
            let newCode = code + Math.ceil(key % 26);

            if (code >= 97 && newCode > 122) {
                newCode = newCode - 122 + 96;
            }
            if (code >=97 && newCode <97) {
                newCode = newCode - 96 + 122;
            }
            if (code <= 90 && newCode > 90){
                newCode = newCode - 90 + 64;
            }
            if (code<=90 && newCode<65) {
                newCode = newCode - 64 + 90;
            }

            code = newCode;
        }
        
        unicodeArray.push(code);
    }

    let newStringArray = [];

    for (const element of unicodeArray) {
        let char = String.fromCharCode(element);
        newStringArray.push(char);
    }

    const newString = newStringArray.join("");

    return newString;

};

// Do not edit below this line
module.exports = caesar;
