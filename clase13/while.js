/* WHILE */
/* 
    Solicitar un nombre al user, si el nombre es 'pepe' seguir solicitantdo el nombre
    cuando sea distinto de pepe, decir, 'ese nombre no lo conozco'

*/


let nombre = prompt('ingrese su nombre')

while(nombre === 'pepe'){
    nombre = prompt('ingrese devuelta un nombre')
}
alert('ese nombre no lo conozco')
