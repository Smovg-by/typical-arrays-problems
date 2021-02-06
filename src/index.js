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
    let max = Math.max(...array);
    if (max == Infinity) {
        max = 0;
    } else if (isNaN(max)) {
        max = 0;
    }
    return max;
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
