function validarEmail(email){
    return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email)
}
function validarPassword(password){
    return(Boolean(password) && password.length >= 6 && (password.toLowerCase() != password))
}

function validarOperacion(operacion){
    return(operacion === '+' || operacion === '-')
}
function validarNumero(numero){
    return(!isNaN(Number(numero)))
}
function obtenerDato (objeto){
    let dato = prompt(objeto.mensaje)
    while(!objeto.validacion(dato)){ // ESTO ES UN CALLBACK
        dato = prompt(objeto.error)
    }
    return dato
}

const DATOS = { //ESTO ES UN DICCIONARIO DE DATOS para poder solo poner el dato.objeto en vez de todo el objeto a la hora de ejecutar una funcion; para que asi sea mas legible el codigo
    EMAIL:{
        mensaje:'ingrese un mail',
        error:'#ERROR# \n ingrese un mail valido',
        validacion: validarEmail // referenciacion 
    },
    PASSWORD:{
        mensaje:'ingrese su contraseña\nla cual debera tener:\n -minimo 6 caracteres \n -almenos una mayuscula',
        error:'Revise que su contraseña tenga\n-minimo 6 caracteres \n -almenos una mayuscula',
        validacion: validarPassword
    },
    OPERADOR:{
        mensaje:'Que operación va a realizar? + o -',
        error:'Ingrese una opcion valida: + o -',
        validacion: validarOperacion
    },
    NUM:{
        mensaje:'Ingrese un numero',
        error:'Ingrese un numero',
        validacion: validarNumero
    },
}





function login(){
    let email = obtenerDato(DATOS.EMAIL)
    let password = obtenerDato(DATOS.PASSWORD)
    return{email: email, password: password}
}   

function calculadora(){
    let num1 = parseFloat(obtenerDato(DATOS.NUM))
    let operacion = obtenerDato(DATOS.OPERADOR)
    let num2 = parseFloat(obtenerDato(DATOS.NUM))
    if(operacion == '+'){
        resultado = (num1+num2)
    }
    if(operacion == '-'){
        resultado = (num1-num2)
    }
return alert(`el resultado de la operacion ${num1}${operacion}${num2} es ${resultado}`)
}


/* login()
calculadora() */





function renderizarHistorial(){
    let listaStrHistorial = ''
    for(const item of  historial){
        listaStrHistorial = listaStrHistorial + `
        Accion: ${item.accion}
        Operacion: ${item.operacion}
        Numeros: ${item.a},${item.b}
        Resultado: ${item.resultado}
        `
    }
    return listaStrHistorial
}
/* renderizarHistorial(historial)
console.log(renderizarHistorial(historial)) */

/* Crear una funcion llamada 
elementoHistorial = {
    accion: 'CALCULAR',
    operacion: '+',
    a: 1,
    b: 2,
    resultado: 2 
}
agregarAlHistorial(elementoHistorial)
agregar el objeto al array global historial

obtenerHistorial() => retorna el historial global
*/

const elementoHistorial = {
    accion: 'CALCULAR',
    operacion: '+',
    a: 1,
    b: 2,
    resultado: 2 
}


function agregarAlHistorial(elementoHistorial){
    const historial = obtenerHistorial()
    historial.push(elementoHistorial)
    const historialJSON = JSON.stringify(historial)
    localStorage.setItem('historial',historialJSON)
}

function obtenerHistorial(){
   let historialString = localStorage.getItem('historial')
    return JSON.parse(historialString)
}
if(obtenerHistorial() === null){ // Si no hay historial, se guarda como array vacio
    localStorage.setItem('historial', JSON.stringify([]))
}

agregarAlHistorial({
    accion: 'pepe',
    operacion: '*',
    a: 3,
    b: 4,
    resultado: 12 
})

agregarAlHistorial({
    accion: 'CALCULAR',
    operacion: '+',
    a: 1,
    b: 2,
    resultado: 2 
})

/* 
localStorage, sessionStorage

.setItem(key:string, value:string) => guarda/reemplaza un nuevo valor con la key que reciba

.getItem(key:string) => devuelve el valor asociado a una key sino returna null

.removeItem(key) => permite eliminar la key y el value

.clear() => limpia el storage

*/

let datoImportante = 'el mate se toma amargo'

localStorage.setItem('importante',datoImportante)

/* 
JSON => javascript object notation. 
Es una variable global que se usa para acceder a sus metodos
Reglas JSON
array = []
objeto = {}
string = si "" no '' o ``
numeros, null, undefined... como siempre

JSON.parse() => transforma a formato objeto de js
JSON.stringify() => transforma a formato text/string
 */

let string = '{"username":"pepe"}'
let stringComoObjeto = JSON.parse(string)
console.log(stringComoObjeto)

objeto = {
    nombre: 'pipo',
    apellido: 'gonzales'
}

let objetoString = JSON.stringify(objeto)
console.log(objetoString)

/* 
    Transformar el string Historial a string JSON y mostrarlo por consola
*/


/* const historialJSON = JSON.stringify(historial)
alert(historialJSON) */

/* 
En la funcion de agrega ral historial vamos a hacer el .push que veniamos haciendo 
pero ademas vamos a guardar el historial en el localStorage con la key 'historial'
*/

/* 
la funcion obtenerHistorial debe tomar el historial del localStorage y retornarlo como Array.
*/

console.log(renderizarHistorial(obtenerHistorial()))