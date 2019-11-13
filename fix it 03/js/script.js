const tvshows = [
  `legion`,
  `sneaky pete`,
  `santa clarita diet`,
  `riverdale`,
  `the young pope`,
  `a series of unfortunate events`,
  `taboo`,
  `colony`,
  `24: legacy`,
  `speechless`,
  `scherlock`,
  `stranger things`,
  `this is us`,
  `timeless`,
  `the oa`,
];
/*lijst in gewone volgorde
document.write(`<ol>`);
for (let i = 0; i < tvshows.length; i++) {
  console.log (i);
  document.write(`<li>${tvshows[i]}</li>`);
}
document.write(`</ol>`);
*/


/* zet de laatste titel bovenaan, maar dat is ook alles
document.write(`<ol>`);
if (i = tvshows.length) {
  i = i-1;
  console.log (i);
  document.write (`<li> ${tvshows [i]} </li>`);
  }
document.write(`</ol>`);
*/

/* doet hetzelfde als vorige
let i = 15;
document.write(`<ol>`);
if (i <= tvshows.length) {
  i = i-1;
  console.log (i);
  document.write (`<li> ${tvshows [i]} </li>`);
  }
document.write(`</ol>`);
*/


// juiste oplossing:
document.write(`<ol>`);
for (let i = 14; i >= 0; i--) {
  console.log (i);
  document.write (`<li> ${tvshows [i]} </li>`);
  }
document.write(`</ol>`);

/*
// geeft de juiste resultaten, maar met endless loop (tenzij toevoeging && i>0, dan is het ook juist)
//toch niet juist???
document.write(`<ol>`);
while (i = tvshows.length && i>0) {
  document.write (`<li> ${tvshows [i]} </li>`);
  i--;
  }
document.write(`</ol>`);

*/