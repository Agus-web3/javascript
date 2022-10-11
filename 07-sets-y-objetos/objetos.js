//Objetos

const yoSoy = {
    nombre:"Agustín",
    apellido:"Sidler",
    edad:25,
    altura:186,
    eresDesarrollador: true,    
}

const miAge = yoSoy.edad;
console.log(miAge);

const listYoSoy = {...yoSoy};
console.log(listYoSoy);
const bestFriends = [{
    nombre:"Ezequiel",
    apellido:"Fasciolo",
    edad:25,
    altura:176,
    eresDesarrollador: false,    
},{
    nombre:"Ignacio",
    apellido:"Ferrari",
    edad:26,
    altura:176,
    eresDesarrollador: false,    
},
{
    nombre:"Agustín",
    apellido:"Sidler",
    edad:25,
    altura:186,
    eresDesarrollador: true,    
}];

console.log(bestFriends.sort((a,b) => b.edad - a.edad));