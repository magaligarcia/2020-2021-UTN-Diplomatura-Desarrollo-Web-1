
/*VALIDACION FORMULARIO DE CONTACTO - ESCRIBINOS!*/
var nombre = document.getElementById("nombre")
var apellido = document.getElementById("apellido")


function validarDatos () {
    nombre.addEventListener('input', validarNombre)
    apellido.addEventListener('input', validarApellido)
    validarNombre()
    validarApellido()
}

function validarNombre() {
    if (nombre.value=='') {
        nombre.style.backgroundColor='#FAD8BC'
        nombre.setCustomValidity('Es necesario que ingreses su nombre')
    }else {
        nombre.style.backgroundColor='#abcec0'
        nombre.setCustomValidity('')
    }
}

function validarApellido () {
    if (apellido.value=='') {
        apellido.style.backgroundColor='#FAD8BC'
        apellido.setCustomValidity('Es necesario que ingreses su apellido')
    }else {
        apellido.style.backgroundColor='#abcec0'
        apellido.setCustomValidity('')
    }
}

window.addEventListener('load', validarDatos)