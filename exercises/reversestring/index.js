// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str, rStr = "") {
    if (str.length === 0) {
        return rStr;
    }
    if (str.length > 0) {
        rStr += str[str.length - 1];
        return reverse(str.substr(0, str.length - 1), rStr); 
    }
}

module.exports = reverse;
