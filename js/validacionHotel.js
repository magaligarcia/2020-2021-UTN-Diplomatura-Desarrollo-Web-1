/*FUNCIONES*/

function hotelCanada (){
   
var cant_noches = document.getElementById('cantNoches').value
var cant_personas = document.getElementById('cantPersonas').value
var precioXnoche = 250

var calcular = (cant_noches * precioXnoche) * cant_personas


if (cant_noches == "1" && cant_personas == "1"){
   alert('Airbnb cabaña en los bosques de Canadá:\nEl precio por noche para una persona es de: USD ' + calcular )
}
if (cant_noches > "1" && cant_personas >"1"){
   alert('Airbnb cabaña en los bosques de Canadá:\nEl precio por '+cant_noches+ ' noches para ' + cant_personas + ' personas es de: USD ' + calcular )
   }

if (cant_noches > "1" && cant_personas =="1" ){
    alert('Airbnb cabaña en los bosques de Canadá:\nEl precio por '+cant_noches+ ' noches para una persona es de: USD ' + calcular )
} 

if (cant_noches == "1" && cant_personas > "1"){
   alert('Airbnb cabaña en los bosques de Canadá:\nEl precio por una noche para ' + cant_personas+ ' personas es de: USD ' + calcular )
}
}

function hotelIslandia (){
   
   var cant_noches = document.getElementById('cantNoches').value
   var cant_personas = document.getElementById('cantPersonas').value
   var precioXnoche = 700
   
   var calcular = (cant_noches * precioXnoche) * cant_personas
   
   
   if (cant_noches == "1" && cant_personas == "1"){
      alert('Airbnb campsulas de cristal en Islandia:\nEl precio por noche para una persona es de: USD ' + calcular )
   }
   if (cant_noches > "1" && cant_personas >"1"){
      alert('Airbnb campsulas de cristal en Islandia:\nEl precio por '+cant_noches+ ' noches para ' + cant_personas + ' personas es de: USD ' + calcular )
      }
   
   if (cant_noches > "1" && cant_personas =="1" ){
       alert('Airbnb campsulas de cristal en Islandia:\nEl precio por '+cant_noches+ ' noches para una persona es de: USD ' + calcular )
   } 
   
   if (cant_noches == "1" && cant_personas > "1"){
      alert('Airbnb campsulas de cristal en Islandia:\nEl precio por una noche para ' + cant_personas+ ' personas es de: USD ' + calcular )
   }
}

function hotelEstadosUnidos (){
   
      var cant_noches = document.getElementById('cantNoches').value
      var cant_personas = document.getElementById('cantPersonas').value
      var precioXnoche = 500
      
      var calcular = (cant_noches * precioXnoche) * cant_personas
      
      
      if (cant_noches == "1" && cant_personas == "1"){
         alert('Airbnb en las costas de California:\nEl precio por noche para una persona es de: USD ' + calcular )
      }
      if (cant_noches > "1" && cant_personas >"1"){
         alert('Airbnb en las costas de California:\nEl precio por '+cant_noches+ ' noches para ' + cant_personas + ' personas es de: USD ' + calcular )
         }
      
      if (cant_noches > "1" && cant_personas =="1" ){
          alert('Airbnb en las costas de California:\nEl precio por '+cant_noches+ ' noches para una persona es de: USD ' + calcular )
      } 
      
      if (cant_noches == "1" && cant_personas > "1"){
         alert('Airbnb en las costas de California:\nEl precio por una noche para ' + cant_personas+ ' personas es de: USD ' + calcular )
      }
}

function hotelTailandia (){
   
         var cant_noches = document.getElementById('cantNoches').value
         var cant_personas = document.getElementById('cantPersonas').value
         var precioXnoche = 425
         
         var calcular = (cant_noches * precioXnoche) * cant_personas
         
         
         if (cant_noches == "1" && cant_personas == "1"){
            alert('Airbnb Tailandia:\nEl precio por noche para una persona es de: USD ' + calcular )
         }
         if (cant_noches > "1" && cant_personas >"1"){
            alert('Airbnb Tailandia:\nEl precio por '+cant_noches+ ' noches para ' + cant_personas + ' personas es de: USD ' + calcular )
            }
         
         if (cant_noches > "1" && cant_personas =="1" ){
             alert('Airbnb Tailandia:\nEl precio por '+cant_noches+ ' noches para una persona es de: USD ' + calcular )
         } 
         
         if (cant_noches == "1" && cant_personas > "1"){
            alert('Airbnb Tailandia:\nEl precio por una noche para ' + cant_personas+ ' personas es de: USD ' + calcular )
         }
}

