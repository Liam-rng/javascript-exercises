const leapYears = function (arg1) {
    if (arg1 % 400 === 0)
        return true;
    else if (arg1 % 100 === 0)
        return false;
    else if (arg1 % 4 === 0)
        return true;
    else return false;
};

// Do not edit below this line
module.exports = leapYears;
