// Navegación entre las tres pantallas.
const botonesNavegacion = document.querySelectorAll(".nav-boton");
const pantallas = document.querySelectorAll(".pantalla");

botonesNavegacion.forEach(function (boton) {
    boton.addEventListener("click", function () {
        // Oculta todas las pantallas.
        pantallas.forEach(function (pantalla) {
            pantalla.classList.remove("activa");
        });

        // Muestra la pantalla seleccionada.
        const pantallaSeleccionada = document.getElementById(
            boton.dataset.pantalla
        );
        pantallaSeleccionada.classList.add("activa");

        // Marca el botón que está seleccionado.
        botonesNavegacion.forEach(function (otroBoton) {
            otroBoton.classList.remove("activo");
        });
        boton.classList.add("activo");
    });
});

// Cambia entre el tema normal y el tema oscuro.
const botonTema = document.getElementById("tema");

botonTema.addEventListener("click", function () {
    document.body.classList.toggle("tema-oscuro");
});
