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
//begin:
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

/*
//tweede poging:
function questions (){
var askName = "Please enter your name";
var askGender = "Please enter your gender";
var askCity = "Please enter your city";


var name = prompt (askName);
var gender = prompt (askGender);
var city = prompt (askCity);

var a = `Your name is ${name}, your gender is ${gender} and you live in ${city}`;
alert (a);
}

questions ();

var askConfirm = "Is this correct?";
var saySomething = confirm (askConfirm);


function check() {
    if ( ok ===true) {
        alert ("Thank you");
    }
    else {
        alert ("try again");
        questions ();
        
    }

}

check();
*/



function onMyButtonClicked(){
    console.log("My button was clicked");
}
var askName = "Please enter your name";
var askGender = "Please enter your gender";
var askCity = "Please enter your city";
// variables that are not set with a value yet:
var name;
var gender;
var city;

var a;

var ok = false;

while(ok == false){
    name = prompt (askName);
    gender = prompt (askGender);
    city = prompt (askCity);

    a = `Your name is ${name}, your gender is ${gender} and you live in ${city}`;

    alert(a);

    ok = confirm ("Is this correct?");
    
    check();
}

function check() {
    if ( ok ===true) {
        alert ("Thank you");
    }
    else {
        alert ("try again");
        
    }

}