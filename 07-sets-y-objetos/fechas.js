//fechas

const today = new Date();
console.log(today);
const myBirthday = new Date(1996,11,20) ;
console.log(myBirthday);

const isLate = today > myBirthday;
console.log(isLate);

const myDay = myBirthday.getDate();
console.log(myDay);
const myMonth = myBirthday.getMonth();
console.log(myMonth+1);
const myYear = myBirthday.getFullYear();
console.log(myYear);