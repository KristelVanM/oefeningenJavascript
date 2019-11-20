/* becode/javascript
 *
 * /02-maths/04-sort-numbers/script.js - 2.4: classer des nombres
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

/*
(function() {

    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("run").addEventListener("click", function() {

        // your code here

    });

})();

function uniform (arr) {
    var first = arr[0];
    for(let i = 1; i < arr.length;  i++ ) {
    if (arr[i] !== first){
    return false;
        }
    else {
    return true;
    }
    }
    uniform ([1, 1, 1]);
*/

const lisArray = Array.from(document.getElementById("element-id"));

console.log(Array.isArray(lisArray));


/* array ascending order:
const alpha = document.getElementById("element-id").value;

    ascOrder = alpha.sort((a, b) => a > b ? 1 : -1);
  alert(ascOrder);

  
  
  // I assume that you have created unorder list of items in our html file.

  const lis = document.querySelectorAll('li');
  const lisArray = Array.from(document.querySelectorAll('li'));

  // is true array?
  console.log(Array.isArray(lis)); // output: false
  console.log(Array.isArray(lisArray));  // output: true
  */