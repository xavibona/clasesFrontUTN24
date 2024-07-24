/* function validador(a){

}


let operacion = prompt('Que operación va a realizar? \n suma = 1 \n resta = 2')
while(operacion!= 1 || operacion != 2 ){
    let operacion = prompt('Ingrese una opcion valida: \n suma = 1 \n resta = 2')
}

let num1 = prompt('Ingrese')
while(num1){
    let operacion = prompt('Ingrese una opcion valida: \n suma = 1 \n resta = 2')
}

let num2 = prompt('Ingrese el segundo numero')
while(num2){
    let operacion = prompt('Ingrese una opcion valida: \n suma = 1 \n resta = 2')
}
 */




// LOGIN mas feo 
/* function login(){
    let emailVerificar = prompt('ingrese su mail');
    let emailChecked = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(emailVerificar);

    while(!emailChecked){
        emailVerificar = prompt('ingrese un mail valido');
        emailChecked = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(emailVerificar);
    }
    alert('email registrado: ' + emailVerificar)
    return emailVerificar
}

let email = login() */


// LOGIN  parte de email
// Mejorado con mejores practicas
function validarEmail(email){
    return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email)
}

function correo(){
    let email = prompt('ingrese un mail')

    while(!emailValidator(email)){
        email = prompt('#ERROR# \n ingrese un mail valido')
    }
    alert('email registrado: ' + email)
    return email
}

let email = correo()



// parte de password, OK pero voy a usar lo del prof.
/* function validPassword(){
    let password = prompt('ingrese su contraseña\nla cual debera tener:\n -minimo 6 caracteres \n -almenos una mayuscula')
    while(password.length < 6 || (password.toLowerCase() === password) || !password){
       password = prompt('Revise que su contraseña tenga\n-minimo 6 caracteres \n -almenos una mayuscula')
    }
    return password
}

let password = validPassword()
 */

function validarPassword(password){
    return(password.length >= 6 && (password.toLowerCase() != password) && Boolean(password))
}
function password(){
}

/* function login(){
    const usuario = {
        email: email,
        password: password
    }
    return usuario
} */

let usuario = login()
alert(`Usuario registrado:\nEmail: ${usuario.email}\nContraseña: ${usuario.password}`);


function obtenerDato (objeto){
    let dato = prompt(objeto.mensaje)
    while(!objeto.validacion(dato)){ // ESTO ES UN CALLBACK
        dato = prompt(objeto.error)
    }
    return dato
}


function login(){
    let email = obtenerDato ( //obtiene el mail
        {
            mensaje:'ingrese un mail',
            error:'#ERROR# \n ingrese un mail valido',
            validacion: validarEmail
        }
    )
    let password = obtenerDato ( //obtiene la contraseña
        {
            mensaje:'ingrese su contraseña\nla cual debera tener:\n -minimo 6 caracteres \n -almenos una mayuscula',
            error:'Revise que su contraseña tenga\n-minimo 6 caracteres \n -almenos una mayuscula',
            validacion: validarPassword
        }
    )
    return{email: email, password: password}
}   

