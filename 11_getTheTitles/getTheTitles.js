const getTheTitles = function(array) {

    let titleArray = [];

    for (const book of array) {
        titleArray.push(book["title"]);
    }

    return titleArray;

};

// Do not edit below this line
module.exports = getTheTitles;
