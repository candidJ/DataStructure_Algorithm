// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// function anagrams(stringA, stringB) {
//     let argsArray = [];
//     for (let args = 0; args < arguments.length; args++) {
//         let argsMap = {};
//         for (let a of arguments[args].replace(/\W*/gi, "").toLowerCase()) {
//             if (!argsMap[a]) {
//                 argsMap[a] = argsMap[a] + 1 || 1;
//             }
//         }
//         argsArray.push(argsMap);
//     }

//     if (Object.keys(argsArray[0]).length !== Object.keys(argsArray[1]).length) {
//         return false;
//     }

//     for (let a in argsArray[0]) {
//         if (argsArray[0][a] !== argsArray[1][a]) {
//             return false;
//         }
//     }
//     return true;
// }


function anagrams(stringA, stringB) {

    function compare(characters) {
        return characters.replace(/\W*/gi, "").toLowerCase().split("").sort().join();
    }

    return compare(stringA) === compare(stringB);


}

module.exports = anagrams;
