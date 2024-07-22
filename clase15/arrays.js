/* ARRAYS */
/* 
array, list, collection, matriz
se usan para listar elementos 
un array es un objeto.
 */

     // index     0, 1, 2
const notasCuatri = [9,10,6]
notasCuatri[2] = 9
console.log('el tercer parcial quitaste: ' + notasCuatri[2])

console.log(typeof[notasCuatri])
// object

/* 
const notas = {
    0: 9,
    1: 10,
    2: 6,
    length: 3
}
 */


const nombres = [
    'pepe',
    'juan',
    'maria',
    'pedro',
    'valentina',
    'alex',
]

/* malas practicas */
/* 
nombres[5] = 'alexis' 
delete nombres[5]  
nombres[7] = 'ezequiel'
*/

/* METODOS DE ARRAYS*/      // ordenar primero nombres y despues ejemplos
// .pop() => elimina el ultimo elemento y lo retorna
/* nombres.pop() */
// .shift() => elimina el primer elemento y lo retorna
/* nombres.shift() */

// .push() => agrega al final
/* let nuevoLength = nombres.push('leonel')
console.log(nuevoLength) */
// .unshift() => agrega al inicio

// .indexOf('string') => busca el elemento en el array y si lo encunetra devuelve la posicion, sino da -1. SOLO ARRAY STRINGS
/* let posMaria = nombres.indexOf('maria')
nombres[posMaria] = 'marianela' */

// .splice(posicion, nro_q_elimino, nvo_elemento) podemos agregar y eliminar
/* let posValentina = nombres.indexOf('valentina')
nombres.splice(posValentina, 1, 'john', 'frank')
console.log(nombres) */

// eliminar a juan y a maria

/* let posJuan = nombres.indexOf('juan')
nombres.splice(posJuan, 2)
console.log(nombres) */


// esta funcion facilita el proceso de eliminar nombres
function borrarNombre(a){
    let nombre = a
    let posNombre = nombres.indexOf(nombre)
    nombres.splice(posNombre, 1)
}

borrarNombre('juan')
console.log(nombres)

