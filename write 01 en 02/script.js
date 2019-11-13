const movies = [
    `MARTIN EDEN`,
    `LA BELLE ÉPOQUE`,
    `DOCULATINO GHENT - MINGA: STEMMEN VAN WEERSTAND`,
    `MIJN BIJZONDER RARE WEEK MET TESS`,
    `THE MUSTANG`, 
]

/*
// oefening 1:
const wRap = (content, tagname) => `<${tagname}> ${content} </${tagname}>`;

document.write (`<ol>`);
movies.forEach (movie => document.write (wRap (movie, `li`)));
document.write (`</ol>`);
*/



//oefening 2:
const wRap = (content, tagname) => `<${tagname}> ${content} </${tagname}>`;


const lisT= movies
.reverse ()
.map (movie => wRap (movie.toLowerCase (), `li`))
.join (``);

    
document.write(`<ul>`);
document.write(lisT);
document.write(`</ul>`);