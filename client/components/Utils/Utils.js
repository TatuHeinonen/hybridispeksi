function isBoolean(a) {
    return typeof(a) === "boolean";
}

function parseBooleanIfBoolean(a) {
    if(isBoolean) {
        return a === 'true';
    } else {
        return a;
    }
}

function isNumber(a) {
    return !isNaN(a);
}

function parseNumberIfNumber(a) {
    if (isNumber(a)) {
        return Number.parseInt(a)
    } else {
        return a;
    }
}

module.exports.isBoolean = isBoolean;
module.exports.parseBooleanIfBoolean = parseBooleanIfBoolean;
module.exports.isNumber = isNumber;
module.exports.parseNumberIfNumber = parseNumberIfNumber;