// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    // first attempt
    const totals = [];
    for (let s of str) {
        let total = 0;
        str.split("").forEach((char) => {
            if (char === s) {
                return total++;
            }
        });
        totals.push(total);
    }

    const maxValue = Math.max(...totals);
    return str[totals.indexOf(maxValue)];
}

function maxChar_WithCharMap(str) {
    let maxChar = '';
    let values = [];
    let charMap = {};
    let max = 0;

    // first create a char map
    for (let char of str) {
        charMap[char] = charMap[char] + 1 || 1;
    }

    // My first pattern : involved two loop - one to get max values and second to find the max value key
    // for (let char in charMap) {
    //     values.push(charMap[char]);
    // }

    // for (let char in charMap) {
    //     if (charMap[char] === Math.max(...values)) {
    //         maxChar = char;
    //     }
    // }

    // Stephen's second approach: in order to find max from a object or array assign it to a variable and then compare every element to it
    for (let char in charMap) {
        if (max < charMap[char]) {
            max = charMap[char];
            maxChar = char;
        }
    }

    // my thinking flaw in first approach - involves two loops 

    // console.log(maxChar);
    return maxChar;
}


// check number if prime or not
function checkPrime(num) {
    let iter = num;
    while (iter > 2) {
        if (num % (iter - 1) == 0) {
            return false;
        }
        iter = iter - 1;
    }
    return true;
}
console.log(checkPrime(33));

module.exports = maxChar_WithCharMap;
