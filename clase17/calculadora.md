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