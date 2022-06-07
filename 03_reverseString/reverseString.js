const reverseString = function (str) {
    var reversed_str = '';
    for (let index = (str.length - 1); index >= 0; index--) {
        distance = index + 1;
        reversed_str += str.slice(index, distance);
    }
    return reversed_str;
};

// Do not edit below this line
module.exports = reverseString;
