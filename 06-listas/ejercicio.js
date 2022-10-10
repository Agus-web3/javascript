const shopList = ["agua","jabon","cafe","papa","arroz"];

shopList.push("Aceite de Girsaol");
console.log(shopList);
shopList.pop();
console.log(shopList);

const favoriteMovies = [
    {titulo:"Harry Potter y la pieda filosofal", director:"Chris Columbus",fecha:2001},
    {titulo:"Matrix", director:"Lilly Wachowski and Lana Wachowski",fecha:1999},
    {titulo:"Star Wars", director:"George Lucas",fecha:1977},
]

const newMovies = favoriteMovies.filter(obj => obj.fecha > 2010);
console.log(newMovies)

const directorList = favoriteMovies.map(valor => valor.director);
console.log(directorList);
const titleList = favoriteMovies.map(valor => valor.titulo);
console.log(titleList);

const listConcat = directorList.concat(titleList);
console.log(listConcat);

const listProp = [...directorList,...titleList];
console.log(listProp);