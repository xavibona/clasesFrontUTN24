/* 
Funciones Nativas

isNaN(dato) 
es una funcion que recibe un dato y devuelve un booleano con true o false

alert(string) 
recibe un string y lo muestra en pop-up en la pag (no retorna nada, undefined)

typeof(dato)
indidca que tipo de dato es

prompt()
muestra una alerta pero con un input de texto, recibe el mensaje y lo guarda como string

number()
convierte el dato a numero

parseInt() => trunca numeros (corta el decimal, no redondea) , transforma a enteros
parseFloat() => transforma a su valor numerico
*/

/*  IF  */
/* 
Sintaxis:

if(condicion){
    bloque de codigo
}

*/
/*
let edad = prompt('ingrese su edad')

if(edad >= 18){
    alert('podes pasar')
}
else{
    alert('no podes pasar')
}
 */


// ejercicios //

/* 
Crea una variable llamada "tiene hijos" y asignale "true" si tiene hijos o "false" si no tiene hijos. 
A continuación escribe una linea de codigo para mostrar elvalor de la variable en una alerta

Crea una variable llamada "salario" y solicita un salario actual como valor. 
A continuación escribe una línea de codigo que calcule el saluario anual y muestre el resultado en una alerta

Escribe una condicional que verifique si una variable llamda "edad" es mayor o igual a 18.
Si es mayor o igual a 18, imprime eres mayor de edad en una alerta
sino eres menor de edad 
*/

/* let tieneHijos = false 
alert(tieneHijos)

let salario = prompt('ingrese su salario')
let salarioAnual = salario * 12
alert('su salario anual es de: ' + salarioAnual)

let edad = prompt('ingrese su edad')
if(edad >= 18){
    alert('eres mayor de edad')
}
else{
    alert('eres menor')
} */

/* 
De un empleado se sabe su sueldo y los años de antiguedad. El sector de contabilidad nos pide hacer un programa que lea los datos y nos muestgre.
1) Si el sueldo es inferior a 500 y su antiguedad es igual o superior a 10 años, otorgarle un aumento del 20%, mostrar el sueldo a pagar-
2) Si el sueldo es inerior a 500 pero su antiguedad es menor a 10 años, otorgarle un aumento del 5%
3) Si el sueldo es mayor o igual a 500 moestrar el sueldo en la página sin cambios.
*/

let sueldo = prompt('ingrese su sueldo')
let antiguedad = prompt('ingrese sus años de antiguedad')
let sueldoNew = 0

if(sueldo < 500 || antiguedad >= 10){
    alert('su nuevo sueldo es ' + sueldo * 1.2)
}
else if(sueldo < 500 || antiguedad < 10){
    alert('su nuevo sueldo es ' + sueldo * 1.05)
}
else{
    alert('su sueldo es ' + sueldo)
}