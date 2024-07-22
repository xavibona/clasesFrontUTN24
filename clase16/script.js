/*  Mostrar un console.log que diga Hola y el nombre de c/u de los nombres del array
const nombres = ['pepe', 'juan', 'fran']

for(let index=0; index<nombres.length; index++){
    console.log('hola ' + nombres[index])
}

for(let index=0; index<nombres.length; index++){
    let nombre = nombres[index]
    console.log('hola ' + nombre)
} 
*/


const carrito = [
    {
       nombre: 'tv samsung',
       precio: 300,
       cantidad: 3 
    },
    {
        nombre: 'computadora',
        precio: 220,
        cantidad: 1 
     }
]

/* 
    Por c/ elemento del carrito mostrar por consola:
    Haz comprado el producto {nombre} x {cantidad} a un precio unitario de ${precio}
 */

  /*   for(let index = 0; index < carrito.length; index++){
        const producto = carrito[index]
        console.log('Haz comprado el producto "' + carrito[index].nombre + '" x ' + producto.cantidad + ' a un precio unitario de $' + producto.precio)
    } */
// usar carrito[index].nombre no esta mal pero, es mas descriptivo con producto.nombre !!!


/* const personajes = [
    {
        nombre: 'shakespeare',
        apellido: 'william',
        edad: 2
    },
    {
        nombre: 'Ronaldo',
        apellido: 'Nazario',
        edad: 2
    },
    {
        nombre: 'Leo',
        apellido: 'Messi',
        edad: 2
    },
    {
        nombre: 'Colt',
        apellido: 'Bs',
        edad: 2
    },
] */

/* 
    Por cada personaje mostrar el sgte mensaje por consola:
    'hola mi nombre es (nombre) (apellido) y tengo (edad) años.'
    Al finalizar el recorrido mostrar x consola 'total de edades: sumatoria_de_edades'
*/

/* let sumatoria = 0
for(let index = 0; index < personajes.length; index++){
    const persona = personajes[index]
    sumatoria = sumatoria + persona.edad 
    console.log('Hola, mi nombre es ' + persona.nombre + ' ' + persona.apellido + ' y tengo ' + persona.edad + ' años')
}
console.log(sumatoria) */


// for of 
// sirve para recorrer todas los elementos de un array
/* for(const persona of personajes){
    console.log('Hola, mi nombre es ' + persona.nombre + ' ' + persona.apellido + ' y tengo ' + persona.edad + ' años')
}
 */

/* const nombres = ['pipo', 'juan', 'roman', 'rico']
for(const nombre of nombres){
    console.log(nombre)
} */


// for in 

/* const datos = {
    nombre: 'pepe',
    apellido:'suarez',
    dni: '1234567'
}

for(let key in datos){  // muestra las propiedades del objeto
    console.log(key)
} */

// ejemplo practico de uso
/* let resultado = ''
for(let propiedad in datos){
    resultado = resultado + '\n' + propiedad + ': ' + datos[propiedad]
}

console.log(resultado) */


/* METODOS AVANZADOS de Arrays */
const personajes = [
    {
        nombre: 'shakespeare',
        apellido: 'william',
        edad: 2
    },
    {
        nombre: 'Ronaldo',
        apellido: 'Nazario',
        edad: 2
    },
    {
        nombre: 'Leo',
        apellido: 'Messi',
        edad: 20
    },
    {
        nombre: 'Colt',
        apellido: 'Bs',
        edad: 2
    },
]
// FOR EACH... recorre todo 
/* personajes.forEach(function(personaje){
    console.log(personaje)
}) */

/*  FILTER
Un metodo avanzado es un metodo que recibe un callback    
Filter es un metodo avanzado que recibe un callback, la callback recibe a el elemento
Si el valor de retorno es truthy entonces el elemento se agregara al array resultante
Si el valor de retorno de callback es falsy entonces se ignora
FILTER SIEMPRE RETORNA ARRAY        
 */
/* const personsMayores = personajes.filter(function(personaje){
    return personaje.edad >= 18
})
console.log(personsMayores) */



/* FIND
Un metodo avanzado es un metodo que recibe un callback    
Filter es un metodo avanzado que recibe un callback, la callback recibe a el elemento
Si el valor de retorno es truthy entonces el elemento se retorna y se corta el find (si hay 2 o 3 pepes solo devuelve el primero)
Si el valor de retorno de callback es falsy entonces se ignora
FIND retorna el elemento o undefined(si no encuentra nada)
 */
const leo = personajes.find(function(personaje){
    return personaje.nombre.toLowerCase() === 'leo'
})

console.log(leo)


const productos = [
    {
        nombre: 'tv samsung',
        marca: 'samsung',
        id: 1,
        precio: 3000
    },
    {
        nombre: 'celular samsung',
        marca: 'samsung',
        id: 2,
        precio: 800
    },
    {
        nombre: 'tv LG',
        marca: 'LG',
        id: 3,
        precio: 2900
    },
    {
        nombre: 'tv noblex',
        marca: 'noblex',
        id: 4,
        precio: 2300
    },
]
/* 
    Traer los productos que sean de precio inferior a 2950
    Traer los productos de marca noblex
    Traer los productos q en su nombre incluyab el string 'tv'
*/

/* const menor2950 = productos.filter(function(product){
    return product.precio < 2950
})
console.log(menor2950) */

/* const marcaNoblex = productos.filter(function(product){
   return product.marca.toLowerCase() === 'noblex'.toLowerCase()
})
console.log(marcaNoblex)

const tvs = productos.filter(function(product){
    return product.nombre.toLowerCase().includes('tv'.toLowerCase())
})
console.log(tvs) */


/* MAP 
Sirve para crear un array a partir de otro array
Va a recorrer el array y por cada elemento la callback se ejecuta
El valor de retorno de la callback es el valor del nuevo elemento que se agregara al array resultante

RETORNA UN ARRAY
*/

const objetardos = [
    {
        nombre: 'vaso',
    },
    {
        nombre: 'tornillo',
    },
    {
        nombre: 'computadora',
    },
]

/* quiero un nuevo array que sea asi
[
    '<div>vaso</div>',
    '<div>tornillo</div>',
    '<div>computadora</div>',
]
*/

const listaHTML = objetardos.map(function(obj){
    return '<div>'+ obj.nombre +'</div>'
})
console.log(listaHTML)

const resultadoX = objetardos.map(function(obj){
    return 'pepe'
})
console.log(resultadoX)


/* 
TAREA:
.some() => sirve p saber si un elemetno cumple con x condicion
.every() => sirve p saber si todos los elemetnos cumple con x condicion
.findIndex() => sirve p buscar el index/indice de x elemento
*/