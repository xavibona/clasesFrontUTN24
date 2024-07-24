### calculadora

Funcionalidades:

    CALCULADORA
    - Soporte para + y -
        - '+'
        - '-'

    HISTORIAL
    - Historial

    LOGIN
    - Crear usuario (esto se ejecuta al entrar  la calculadora)
        email -> debe estar validado

Utilidades:
-validacion 
-opcion de cancelar

Ingreso de datos:
-prompt

Egreso de datos:
-alert


LOGIN:
1. prompt solicita al usuario un mail
2. validar que el mail sea un mail
    RegEx / expresion regular: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(emailAVerificar) retorna boolean
    si no es mail no vuelve a salicitar
    en caso de q sea vlido dira email registrado
3. Solicitar el password
    Validaremos q tenga una mayuscula
    Que no sea null o ''
    que tenga almenos 6 caracteres




Reglas:
TOdo el login debe estar dentro de una funcion
login() debe retornar un objeto 
usuario = {
    email: value,
    password: value
}
Se pueden hacer todas las funciones que se crean necesarias




CALCULADORA
-tener soporte para las sig operacion: +, -
    -'+'
    -'-'

operacionesValidas = ['+', '-']

Solicitar una operacion:
La operacion es valida si es alguna de las operaciones validas 
Vamos a solicitar un numero 1: 
Validar que sea un numero
Vamos a solcitar un numero 2:
validar que sea un numero


En caso de elegir una '+'
Aca sumamos
Mostrar por alerta 'el resultado de {numero1} {operacion} {numero2} es {resultado}

En caso de elegir una '-'
Aca restamos
Mostrar por alerta 'el resultado de {numero1} {operacion} {numero2} es {resultado}


HISTORIAL:
El historial debera tener el siguiente formato

Dado el siguiente array
historial = [
    {
        accion: 'CALCULAR',
        operacion: '+',
        a: 1,
        b: 2,
        resultado: 2 
    },
    {
        accion: 'CALCULAR',
        operacion: '+',
        a: 1,
        b: 2,
        resultado: 2 
    },
]


Crear una funcion llamada: renderizarHistorial(historial)

La funcion debera crear un string a partir del array con el siguiente formato y retornarlo:

'
El historial es:

Accion: CALCULAR
operacion: {operacion}
numeros: {a}, {b}
resultado: {resultado}

Accion: CALCULAR
operacion: {operacion}
numeros: {a}, {b}
resultado: {resultado}
'
Luego mostar el string resultante por alerta

Recuerda: puedes usar `` (template string para hacer saltos de linea) o '\n'
Ejemplo:
'El historial es:\n-hola' 
se vera como:
El historial es
-hola

o con template string:
`
El historial es
-hola
`
se vera como:
El historial es
-hola