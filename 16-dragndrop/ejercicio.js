const parrafos = document.querySelectorAll(".parrafo");
const secciones = document.querySelectorAll(".seccion");
const seccion_basura = document.querySelectorAll(".seccion-basura")

parrafos.forEach(parrafo => {
    parrafo.addEventListener("dragstart", event=>{
        parrafo.classList.add("dragging");
        event.dataTransfer.setData("id",parrafo.id)

    })
    parrafo.addEventListener("dragend",()=>{
        parrafo.classList.remove("dragging")
    })
});

secciones.forEach(seccion =>{
    seccion.addEventListener("dragover", event =>{
        event.preventDefault();

    })
    seccion.addEventListener("drop", event =>{
        const id_parrafo = event.dataTransfer.getData("id");
        const parrafo = document.getElementById(id_parrafo);
        seccion.appendChild(parrafo)
    })
})

seccion_basura.forEach(seccion =>{
    seccion.addEventListener("dragover", event =>{
        event.preventDefault();

    })
    seccion.addEventListener("drop", event =>{
        const id_parrafo = event.dataTransfer.getData("id");
        const parrafo = document.getElementById(id_parrafo);
        parrafo.setAttribute("hidden","hidden")
    })
    
})

const boton = document.querySelector(".btn");

boton.addEventListener("click", () =>{
    parrafos.forEach(parrafo =>{
        parrafo.removeAttribute("hidden")
    })    
})
