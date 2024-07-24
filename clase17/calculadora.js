function validarEmail(email){
    return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email)
}
function validarPassword(password){
    return(Boolean(password) && password.length >= 6 && (password.toLowerCase() != password))
}

function validarOperacion(operacion){
    return('+' || '-')
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
    let num1 = obtenerDato(DATOS.NUM)
    let operacion = obtenerDato(DATOS.OPERADOR)
    let num2 = obtenerDato(DATOS.NUM)
    if(operacion == '+'){
        resultado = (num1+num2)
    }
    if(operacion == '-'){
        resultado = (num1-num2)
    }
return alert(`el resultado de la operacion ${num1}${operacion}${num2} es ${resultado}`)
}


login()
calculadora()
