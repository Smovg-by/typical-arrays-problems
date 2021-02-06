exports.min = function min(array) {
    if (typeof array == "undefined") {
        return 0;
    }
    let min = Math.min(...array);
    if (min == Infinity || isNaN(min)) {
        return 0;
    } else if (typeof min == "number") {
        return min;
    } else {
        return 0;
    }
};

exports.max = function max(array) {
    if (typeof array == "undefined") {
        return 0;
    }
    let max = Math.max(...array);
    if (max == Infinity || isNaN(max)) {
        return 0;
    } else if (typeof max == "number") {
        return max;
    } else {
        return 0;
    }
};

exports.avg = function avg(array) {
    function avg(array) {
        let arraySum = array.reduce((sum, item) => sum + item, 0);
        let avg = arraySum / array.length;
        if (isNaN(avg)) {
            avg = 0;
        }
        return avg;
    }
};
