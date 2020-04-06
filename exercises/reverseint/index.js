// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {

    // solution - first attempt
    // if (!isNaN(n)) {
    //     if (n >= 0) {
    //         return parseInt(Number(n).toString().split("").reverse().join(""));
    //     } else {
    //         return -parseInt(Number(-n).toString().split("").reverse().join(""));
    //     }
    // }
    // instead of thinking --=+; think multiplication with -1 to convert - to +

    // second one
    const reversed = parseInt(Number(n).toString().split("").reverse().join(""));
    return reversed * Math.sign(n);
}

module.exports = reverseInt;
