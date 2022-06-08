const sumAll = function (arg1, arg2) {
    let sum = 0;
    if (typeof arg1 !== typeof arg2 || typeof arg1 !== "number")
        return "ERROR";
    else if (arg1 < 0 || arg2 < 0)
        return "ERROR";
    else if (arg1 > arg2)
        [arg1, arg2] = [arg2, arg1];
    for (let i = arg1; i <= arg2; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
