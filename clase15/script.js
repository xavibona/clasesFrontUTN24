/* OBJETOS */
/* 
    los objetos siempre usamos con const, porque con let se puede cambiar totalmente el objeto (sin querer) a un string, boolean, etc...
    y con const solo podes cambiar/agregar propiedades.
    Usar let funciona, PERO, const es mas reliable
*/

/* 
let edadUser = 90
let nombreUser = 'pepe'
let dineroUser = 7000
 */


/* modelo key value */
let usuario = {
    edad: 90,
    nombre: 'pepe',
    dinero: 7000
}
console.log(usuario.dinero)

/* Crear un objeto llamado producto que tenga precio, nombre, descripcion y marca */

let producto ={
    precio: 10000,
    nombre: 'asadito',
    descripcion: 'brocheta de carne buenarda',
    marca: 'ochsi'
}


/* objeto llamado persona, q tenga nombre, edad y mejorAmigo
    mejorAmigo debe ser otro objeto que solo tenga nombre y edad
*/

const persona ={
    nombre: 'pepe',
    'nombre completo':'Pipo Suarez',
    edad: 22,
    mejorAmigo:{
        nombre: 'juan',
        edad: 29
    }
}

persona.edad = 40 // sobreescribe la edad anterior
persona.dni = 12345678 // crea una nueva propiedad
console.log(persona)
conseole.log(persona['nombre completo']) //asi se hace cuando la propiedad es un string 

const auto ={
    marca: 'Honda',
    modelo: 'Civic Ex',
    anio: 2001
}

{   // podemos usar el mismo nombre para otro scope
    const auto = 'juan'
}

 