const SubmitFunction = (event) => {
    event.preventDefault(); // Evita que se recargue la página al enviar el formulario.
    
    if (ValidarFormulario()) {
        alert(
            "Los datos enviados fueron: \n" +
            "Nombre: " + document.getElementById("name").value + "\n" +
            "Apellido: " + document.getElementById("lastName").value + "\n" +
            "Edad: " + document.getElementById("age").value + "\n" +
            "Email: " + document.getElementById("email").value + "\n" +
            "Actividad: " + document.getElementById("actividad").value + "\n" +
            "Nivel de Estudios: " + document.getElementById("nivelEstudio").value + "\n"
        );
    }
};

document.getElementById("formulary").addEventListener("submit", SubmitFunction);

function ValidarFormulario() {
    let validacionCorrecta = true;

    // Campos de texto
    const camposTexto = document.querySelectorAll("input[type=text], input[type=number], input[type=email]");
    camposTexto.forEach(campo => {
        let errorCampo = document.getElementById("error" + campo.id.charAt(0).toUpperCase() + campo.id.slice(1));
        if (campo.value.trim() === "") {
            MostrarError(errorCampo, "*Este campo es requerido.");
            validacionCorrecta = false;
        } else if (campo.value.trim().length < 3 && campo.type !== "number") {
            MostrarError(errorCampo, "*Este campo debe tener al menos 3 caracteres.");
            validacionCorrecta = false;
        } else {
            OcultarError(errorCampo);
        }
    });

    // Validación del email
    const email = document.getElementById("email");
    let errorEmail = document.getElementById("errorMail");
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
        OcultarError(errorEmail);
    } else {
        MostrarError(errorEmail, "*Ingrese un correo electrónico válido.");
        validacionCorrecta = false;
    }

    // Validación de la edad (mayor de 18 años)
    const edad = document.getElementById("age");
    let errorEdad = document.getElementById("errorAge");
    if (edad.value < 18 || edad.value === "") {
        MostrarError(errorEdad, "*Debe ser mayor de 18 años para registrarse.");
        validacionCorrecta = false;
    } else {
        OcultarError(errorEdad);
    }

    // Validación de la actividad
    const actividad = document.getElementById("actividad");
    let errorActividad = document.getElementById("errorActividad");
    if (actividad.value === "") {
        MostrarError(errorActividad, "*Debe seleccionar una actividad.");
        validacionCorrecta = false;
    } else {
        OcultarError(errorActividad);
    }

    // Validación de los términos y condiciones
    const aceptoTerminos = document.getElementById("AceptoTerminos");
    let errorTerminos = document.getElementById("errorTerminos");
    if (!aceptoTerminos.checked) {
        MostrarError(errorTerminos, "*Debe aceptar los términos y condiciones.");
        validacionCorrecta = false;
    } else {
        OcultarError(errorTerminos);
    }

    return validacionCorrecta;
}

const MostrarError = (elemento, mensaje) => {
    elemento.textContent = mensaje;
    elemento.style.display = "block";  // Muestra el mensaje de error.
};

const OcultarError = (elemento) => {
    elemento.textContent = "";
    elemento.style.display = "none";  // Oculta el mensaje de error.
};
