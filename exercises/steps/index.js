// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// My First approrach :)
// function steps(n) {

//     for (let i = 1; i <= n; i++) {
//         let str = "";
//         for (let j = 0; j < i; j++) {
//             str += "#";
//         }
//         for (let k = i; k < n; k++) {
//             str += " ";
//         }
//         console.log(str);
//     }
// }


// using stairs algo
function steps(n) {
    for (let i = 0; i < n; i++) {
        let stairs = "";
        for (let j = 0; j < n; j++) {
            if (j <= i) {
                stairs += "#";
            } else {
                stairs += " ";
            }
        }
        console.log(stairs);
    }
}

// using recursion
function steps(n) {

}

module.exports = steps;
