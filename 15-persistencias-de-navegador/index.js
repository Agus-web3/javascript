const nombre = "Agustin";
const apellido = "Sidler";
let tiempo = Date.now();

const persona = {nombre:nombre,apellido:apellido};

sessionStorage.setItem("dev",JSON.stringify(persona))
localStorage.setItem("dev",JSON.stringify(persona))

document.cookie = "devCookie02=" +JSON.stringify(persona) + + ";expires=" + new Date(tiempo).toUTCString(); 