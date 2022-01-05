/* DECLARACION DE VARIABLES*/ 
var nombre;
var paisesConocidos;
var paisesTotales = 193;

/* CARGO VALOR A LAS VARIABLES */
nombre = prompt('Ingresa tu nombre');

/*VALIDACION DE DATOS INGRESADOS */
paisesConocidos = prompt ('Ingresa el número de países a los que has viajado: ');
     if (isNaN(paisesConocidos) || paisesConocidos == " " || paisesConocidos > 193 || paisesConocidos <0)
        {
        alert ("Ingresaste una respuesta invalida, asegurate que sea un numero entre 0 y 193. Segun la ONU, 193 es el número de países reconocidos");
        paisesConocidos = prompt ('Ingresa el número de países a los que has viajado: ');
        }

/* TOMO ELEMENTOS POR ID */
var cajaNombre = document.getElementById('nombreUsuario');
var cajaPaisesConocidos = document.getElementById('paisesConocidos');

var cajaPaisesDesconocidos = parseInt ( paisesTotales) - parseInt( paisesConocidos);

nombreUsuario.innerHTML = 'Bienvenid@ ' + nombre;
paisesDesconocidos.innerHTML = 'Aún le falta visitar ' + cajaPaisesDesconocidos + ' países! A continuación te dejamos algunos de los paises que mejor reciben a los viajeros y sus campers';

/* USO DOM PARA MODIFICAR H3 EN LA CAJA DE BIENVENIDA DE LA SECCION NOMADA FRIENDLY */
var paisesRecomendados = document.getElementsByTagName ('h3')

paisesRecomendados[0].style.fontFamily = 'Arial'
paisesRecomendados[0].style.color = '#4a5164'
paisesRecomendados[1].style.fontFamily = 'Arial'
paisesRecomendados[1].style.color = '#4a5164'

/* USO DOM PARTA MODIFICAR LOS H4 DE PAISES RECOMENDADOS Y SUS PARRAFOS EN LA SECCION NOMADA FRIENDLY*/
var tituloPaisesRecomendados = document.getElementsByTagName('h4')

tituloPaisesRecomendados[0].style.color = '#94bfae'
tituloPaisesRecomendados[1].style.color = '#8aa4b3'
tituloPaisesRecomendados[2].style.color = '#94bfae'
tituloPaisesRecomendados[3].style.color = '#8aa4b3'
tituloPaisesRecomendados[4].style.color = '#94bfae'
tituloPaisesRecomendados[5].style.color = '#8aa4b3'

var parrafosPaisesRecomendados = document.getElementsByTagName('p')

parrafosPaisesRecomendados[0].style.fontFamily = 'Arial'
parrafosPaisesRecomendados[1].style.fontFamily = 'Arial'
parrafosPaisesRecomendados[2].style.fontFamily = 'Arial'
parrafosPaisesRecomendados[3].style.fontFamily = 'Arial'
parrafosPaisesRecomendados[4].style.fontFamily = 'Arial'
parrafosPaisesRecomendados[5].style.fontFamily = 'Arial'


/* CONDICIONAL SOBRE VISADOS  */
var infoVisado = confirm("Deseas incluir información sobre visados requeridos?")

if(infoVisado){
    var infoVisado = document.getElementById('visa')
    infoVisado.style.display = 'block'
}



