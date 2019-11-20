/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    // to get the value of an input: document.getElementById("element-id").value

    /* waarom de eerste haakjes rond de functie: 
    It is a self-executing anonymous function. 
    The first set of parentheses contain the expressions to be executed,
    and the second set of parentheses executes those expressions.
    The parenthesis are only required in this context because function in JavaScript can be both a statement or an expression, depending upon context. 
    The parenthesis force it to be an expression.*/
   
    document.getElementById("addition").addEventListener("click", function() {
        // perform an addition
        var result = getFirstNum() + getSecondNum();
        document.getElementById("result").value = result;
                                                        });

    document.getElementById("substraction").addEventListener("click", function() {
        // perform an substraction
        var result = getFirstNum() - getSecondNum();
        document.getElementById("result").value = result;
    });

    document.getElementById("multiplication").addEventListener("click", function() {
        // perform an multiplication
        var result = getFirstNum() * getSecondNum();
        document.getElementById("result").value = result;
    });

    document.getElementById("division").addEventListener("click", function() {
        // perform an division
        var result = getFirstNum() / getSecondNum();
        document.getElementById("result").value = result;
    });
})();


//toegevoegd:
function getFirstNum() {
    return parseFloat(document.querySelector("#op-one").value);
}

function getSecondNum() {
    return parseFloat(document.getElementById("op-two").value);
}

/*
function getResult () {
    return number(document.getElementById("result").value );
}
*/