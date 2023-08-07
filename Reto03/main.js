// Obtener todos los elementos con la clase "check-contenedor"
let contenedoresTareas = document.querySelectorAll(".check-contenedor");

// obtenemos el el value del imput
let nombreInput = document.getElementById("inputNombre");

//traemos el p de la alerta para modificarlo con el saludo

let parrafo = document.getElementById('parrafoAlerta');

//seleccionamos el div a mostrar

let alerta = document.getElementById('alerta')

//seleccionamos el boton para cerrar alerta

let cerrarAlerta = document.getElementById('cerrarAlerta')

nombreInput.focus()

// Iterar sobre cada tarea y agregar el evento a su checkbox
contenedoresTareas.forEach((contenedor, index) => {
  let checkbox = contenedor.querySelector('input[type="checkbox"]');
  let tituloTareas = contenedor.querySelector(".titulo-tareas");
  

  checkbox.addEventListener("click", function () {
    if (checkbox.checked) {
      let nombre = nombreInput.value;
      

      nombreTarea = tituloTareas.innerHTML

      let saludo = "Bien " + nombre + " !! Terminaste la Tarea " + nombreTarea;

      parrafo.textContent = saludo

      alerta.style.display = "block"

      tituloTareas.style.textDecoration = "line-through";
    } else {
      tituloTareas.style.textDecoration = "none";
      alerta.style.display = "none"
    }
  });
});

cerrarAlerta.addEventListener('click', function(){
    alerta.style.display = 'none'
})