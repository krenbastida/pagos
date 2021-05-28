//Importar el select
let select_usr = document.getElementById('usuario');

 //Importar div que contienen las preguntas por categorías
 let extranjero = document.getElementById('extranjero-quest');
 let comunidad = document.getElementById('comunidad-quest');
 let estudiante_ex = document.getElementById('estudiante-ext-quest');
 let publico = document.getElementById('publico-quest');

 //Ocultar las preguntas hasta que se seleccione un tipo de usuario  
 extranjero.style.display = 'none'
 comunidad.style.display = 'none'
 estudiante_ex.style.display = 'none'
 publico.style.display = 'none'

select_usr.addEventListener('change', (event) => {
    let form_value = event.target.value

    //Condicional para desplegar la parte del formulario que corresponde a 
    //cada categoría
    switch(form_value) {

        case 'extranjero':  
            extranjero.style.display = 'block'
            comunidad.style.display = 'none'
            estudiante_ex.style.display = 'none'
            publico.style.display = 'none'
        break
        
        case 'comunidad-unam':
            comunidad.style.display = 'block'
            extranjero.style.display = 'none'
            estudiante_ex.style.display = 'none'
            publico.style.display = 'none'
        break
            
        case 'estudiante-extranjero': 
            estudiante_ex.style.display = 'block'
            comunidad.style.display = 'none'
            extranjero.style.display = 'none'
            publico.style.display = 'none'
        break
            
        case 'publico-general':  
            publico.style.display = 'block'
            extranjero.style.display = 'none'
            comunidad.style.display = 'none'
            estudiante_ex.style.display = 'none'
        break

    }
})

