//Ejercicio Strings

/*eslint-enable */

const firstName = "Agustín";
const surName = "Sidler";
let estudiante = `${firstName} ${surName}`;
console.log(estudiante);
let estudianteMayus = estudiante.toUpperCase();
console.log(estudianteMayus);
let estudianteMinus = estudiante.toLowerCase();
console.log(estudianteMinus);
let countSpaces = estudiante.length;
console.log(countSpaces);
let firstLetter = estudiante.charAt(0);
console.log(firstLetter);
let lastLetter = estudiante.charAt(13);
console.log(lastLetter);
let withoutSpace = estudiante.replace(" ","");
console.log(withoutSpace);
let isName = estudiante.includes(`${firstName}`);
console.log(isName);