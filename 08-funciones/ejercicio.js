
// Funciones
function devuelveTrue () {
return true;
};

console.log(devuelveTrue());
//
function asincrona(){};
   const laPromesa = new Promise((resuelve,sale) => {
    if (true) {
        resuelve();
    } else {
        sale();
    }
   });

   laPromesa
   .then(()=>setTimeout(function(){console.log("Hola soy una promesa")},5000));
//

function* generaId (){
    let id = 0;
    while(true){
        id+=2;
        if(id>=20){
            return
        }
        yield id;
    }
}

let id = generaId();
console.log(id.next());
console.log(id.next());
console.log(id.next());