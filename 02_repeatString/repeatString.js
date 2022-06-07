
const repeatString = function (str, n_of_times) {
    newStr = "";
    if (n_of_times < 0)
        return "ERROR";
    for (let i = 0; i < n_of_times; i++) {
        newStr += str;
    }
    return newStr;
};

// Do not edit below this line
module.exports = repeatString;
