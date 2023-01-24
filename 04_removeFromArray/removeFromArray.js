const removeFromArray = function(array, ...values) {
    const valueArray = values;

    for ( const value of valueArray ) {
        if ( array.includes(value) ) {
            let valueIndex = array.indexOf(value);
            array.splice(valueIndex, 1);
        }
    }

    return array;

};

// Do not edit below this line
module.exports = removeFromArray;
