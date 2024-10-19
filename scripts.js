// Función para mostrar la sección de tareas
function irATareas() {
    document.getElementById("inicio").style.display = "none"; // Oculta la página de inicio
    document.getElementById("tareas").style.display = "block"; // Muestra la sección de tareas
}

// Función para volver a la página principal
function volverAPrincipal() {
    document.getElementById("tareas").style.display = "none"; // Oculta la sección de tareas
    document.getElementById("inicio").style.display = "block"; // Muestra la página de inicio
}

// Código para los botones colapsables
document.addEventListener("DOMContentLoaded", function() {
    var coll = document.getElementsByClassName("collapsible");
    
    for (let i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
    }
});
