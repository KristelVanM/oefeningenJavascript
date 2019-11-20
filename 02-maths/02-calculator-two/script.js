/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

function test() {
    return true;
}

(function () {
    console.log("I'm here");
    document
        .getElementById("addition")
        .addEventListener(
            "click",
            function () {
                startCalculation("add");

            });

    document
        .getElementById("substraction")
        .addEventListener(
            "click",
            function () {
                startCalculation("substract");

            });

    document
        .getElementById("multiplication")
        .addEventListener(
            "click",
            function () {
                startCalculation("multiply");

            });

    document
        .getElementById("division")
        .addEventListener(
            "click",
            function () {
                startCalculation("divide");
            })


})();

function startCalculation(type) {
    console.log(type);
    var numOne = getFirstValue();
    var numTwo = getSecondValue();
    var result;

    switch (type) {
        case "add":
            console.log("trying to add");
            result = numOne + numTwo;


            break;
        case "substract":
            console.log("trying to sub");
            result = numOne - numTwo;


            break;
        case "multiply":
            console.log("trying to mult");
            result = numOne * numTwo;


            break;
        case "divide":
            console.log("trying to div");
            result = numOne / numTwo;


            break;
        default:
            result ="wrong type";
            break;
    }
    setResult(result);
}


function getFirstValue(){
    return parseFloat(document.getElementById("op-one").value);
}

function getSecondValue(){
    return parseFloat(document.getElementById("op-two").value);
}

function setResult (result) {
    document.getElementById("result").value = result;
}