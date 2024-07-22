/* 
    Quiero un progrma q dado un nombre me muestre una alerta con el nombre 3 veces
*/

/* let nombre = 'pepe' */

/*  asi no :P
alert(nombre)
alert(nombre)
alert(nombre) 
*/

/* we need a bucle para no escribir tanto al pedo  */


// FOR 
// se usa para repetir algo "x" cantidad de veces
/* 
    Sintaxis 
    for(let iterador = valor_inicial; limite; actualizacion)

    limite => cuantas veces se va a ejecutar
    actulizacion => se pone el aumento del iterador


*/
/* 
for(let iterador = 1; iterador <= 3; iterador = iterador + 1){
    console.log(nombre+iterador)
} 
 */
/* 
    mostrar por alerta el conteo del 1 al 10 (se deben ejecutar 10 alertas)

    for(let i=1; i<=10; i=i+1){
    alert(i)
}
*/


/* 
    Solicitar al usuario un numero 3 veces, al final mostrar una alerta con la sumatoria de los 3 numeros
 */
   /*  let suma = 0
    for(let j=1; j <= 3; j=j+1){
        let numero = prompt('ingrese un numero')
        while(!numero || isNaN(numero)){ // verifica que sea un valor que quiero
            numero = prompt('dato no valido, ingrese un numero')
        }

        suma = suma + Number(numero)
    }
    alert(suma) */

/* \n => esto hace un salto de linea en los console.log o alert() 
*/

/* TAREA
    Solicitar al usuario la cantidad de personas de la clase
    dependiendo de la cant de alumnos de la clase se va a solicitar a c/u el nombre
    Mostrarlo en el sgte formato:
    Lista de alumnos:
    - juan 
    - pepe .....
*/ 

/* let n = prompt('nro de personas')
while(!n || isNaN(n) || n<=0){
    n = prompt('ingrese un nro valido')
}
lista_alum = 'Lista de alummnos:'
for(i=1; i<=n; i=i+1){
    let nombre = prompt('ingrese el nombre')
    while(!nombre){
        nombre = prompt('ingrese un nombre valido')
    }
    lista_alum = lista_alum + '\n- ' + nombre
}
alert(lista_alum)
 */
/* FUNCIONES */
/* 
SinTAXIS
    function nombreDeFuncion(a,b){       a y b son variables que se utilizan en el codigo y despues se pueden reemplazar al invocarlo
        return codigo                    sin return sale undefined. 
    }                                    en el codigo se pone lo que hace la funsao.
*/


/* declaro lafuncion
function sumar2mas2(){
    console.log(2+2)
}

invocacion o llamada a lafuncion
sumar2mas2() */


/*  DRY. ESTO ESTA  MAL PORQUE SE REPITE.... QUE PODEMOS HACER? FUNCIONES.
let suma = 0
let repes = prompt('ingrese cuantos nros vs a sumar')
while(!repes || isNaN(repes)){ // verifica que sea un valor que quiero
    repes = prompt('dato no valido, ingrese un numero')
}

    for(let j=1; j <= repes; j=j+1){
        let numero = prompt('ingrese un numero')
        while(!numero || isNaN(numero)){ 
            numero = prompt('dato no valido, ingrese un numero')
        }

        suma = suma + Number(numero)
    }
    alert(suma) */


// aca usamos la funcion para no repetir logica.
    /* function check4number(a){
        while(!a || isNaN(a)){ // que no sea un falsy o un NaN 
            a = prompt('dato no valido, ingrese un numero')
        }
    }

    let suma = 0
    let repes = prompt('ingrese cuantos nros vs a sumar')
    check4number(repes)
   
    for(let j=1; j <= repes; j=j+1){
        let numero = prompt('ingrese un numero')
        check4number(numero)
        suma = suma + Number(numero)
    }
    alert(suma)
 */

    /* 
    EJERCICIO
    calcularIva(precio) => el valor del iva
    calcularIva(100) => 21

     function calcularIva(precio){
        return precio * 0.21
    }
    alert(calcularIva(2000))
    */

    /* MAS EJERCICIOS FUNCTION*/
    /* 
        calcularMinutos(horas) => cantidad de minutos
        calcularMinutos(1) => 60


        obtenerNumero()
        Va a solicitar un nro y valida que el dato sea un numero
        Sino deb volver a solicitarlo
        Cuando termine de validar se retornara el numero
    
    */

   /*  function calcularMinutos(hs){
        return hs * 60
    }

    function obtenerNumero(){
        let num = prompt('ingrese un numero')
        while(!num || isNaN(num)){
            num = prompt('ingrese un valor valido') 
        }
        num = Number(num)
        return num
    } */
   
   /* 
    strings:

    propertys
    string.length => muestra los caracteres del string
    ej.: 'pepe'.length = 4

    metodos
    string.toLowerCase() => pasa a minusculas
    string.toUpperCase() => pasa a Mayusculas
    string.trim() => elimina los espacios
    string.includes(string_buscado) => verifica que el string buscado esta dentro del string (booleano)
    string.replaceAll(string_a_reemplazar, valor_nuevo) => reemplaza partes de un string
    string.repeat(numero)
   */
    
