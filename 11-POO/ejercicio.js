class Estudiante {
    nombre = 'Agustin';
    asignaturas = ["Javascript","HTML","CSS"];

    obtenDatos () {
        return `Hola mi nombre es ${this.nombre} y estudié ${this.asignaturas}`
    }
}

const estudiante_1 = new Estudiante;
console.log(estudiante_1.obtenDatos())