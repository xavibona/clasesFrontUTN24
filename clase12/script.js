
/*  OPERADORES LOGICOS */
/* 
    !: NOT o negacion  => valor booleano opuesto al valor que estoy negando
    console.log(!true) => false
    falsys => true
*/
console.log(!true)

/* 
    ||: OR o O  => Selecciona 2 valores
    Si el primer valor es falsy, selecciona el segundo valor
    Si el primer valor es true, selecciona el primero
*/
console.log('pepe' || 0)
console.log('' || true)

/* 
    &&: AND o Y  => 
    Evalua si el primer valor es truthy or falsy
    Si es false => devuelve primer valor
    Si es true => devuelve el segundo valor 
*/ 
console.log(true && 7)


/* VARIABLES */
/* 
    Es un espacio reservado que almacena un dato (referencia), este debe tener un identificador el cual usaremos para obtener el dato.  
    Reasignar es ponerle un nuevo valor a una variable

    VAR
    LET 
    CONST
*/
var edad = 14
edad = 'pepe14'

/* 
    Declaracion: es cuando se crea la variable
    Hoisting : puedo llamar a la variable antes de su declaracion


    EcmaScript

    VAR (..ES5)
    Tiene hoisting? no
    Se puede reasginar? si 
    Se puede redeclarar? si
    Valor implicito en undefined? si

    LET 
    (ES6+)
    Tiene hoisting? no
    Se puede reasginar? si
    Se puede redeclarar? si pero en otro blockscope
    Valor implicito en undefined? si

    CONST 
    (ES6+)
    Tiene hoisting? NO 
    Se puede reasginar? NO 
    Se puede redeclarar? NO 
    Valor implicito en undefined? NO
*/

let nombre = 'pepe'
{
    let nombre = 'juan'
    nombre = 'julieta'
    console.log(nombre)
}
console.log(nombre)
