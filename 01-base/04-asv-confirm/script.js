/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.


/*
var askName = "Please enter your name";
var askGender = "Please enter your gender";
var askCity = "Please enter your city";

var name = prompt (askName);
var gender = prompt (askGender);
var city = prompt (askCity);

var a = `Your name is ${name}, your gender is ${gender} and you live in ${city}`;

alert (a);

var ok = confirm ("Is this correct?");

if ( ok ===true) {
    alert ("Thank you");
}
else {
    alert ("try again");
}
*/

var askName = "Please enter your name";
var askGender = "Please enter your gender";
var askCity = "Please enter your city";

var name = prompt (askName);
var gender = prompt (askGender);
var city = prompt (askCity);

var a = `Your name is ${name}, your gender is ${gender} and you live in ${city}`;

alert (a);

var ok = confirm ("Is this correct?");

function check() {
    if ( ok ===true) {
        alert ("Thank you");
    }
    else {
        alert ("try again");
        
    }

}

check();

   
