const SubmitFunction = (event) => {
    event.preventDefault();
    if (ValidarFormulario()) {
        alert(
            "Los datos enviados fueron: \n" +
            "Nombre: " + document.getElementById("nombre").value + "\n" +
            "Apellido: " + document.getElementById("apellido").value + "\n" +
            "Edad: " + document.getElementById("edad").value + "\n" +
            "Documento: " + document.getElementById("documento").value + "\n" +
            "Email: " + document.getElementById("email").value + "\n" +
            "Actividad: " + document.getElementById("actividad").value + "\n" +
            "Nivel de Estudios: " + document.getElementById("nivelEstudio").value + "\n"
        );
    }
}

document.getElementById("formulario").addEventListener("submit", SubmitFunction);

function ValidarFormulario() {
    let validacionCorrecta = true;

    // Campos de texto
    const campoTexto = document.querySelectorAll("input[type=text], input[type=number], input[type=email]");
    campoTexto.forEach(campo => {
        let errorCampo = document.getElementById("error" + campo.id.charAt(0).toUpperCase() + campo.id.slice(1));
        if (campo.value.length === 0) {
            MostrarError(errorCampo, "*Este campo es requerido.");
            validacionCorrecta = false;
        } else if (campo.value.length > 0 && campo.value.length < 3 && campo.type !== "number") {
            MostrarError(errorCampo, "*Este campo debe tener al menos 3 caracteres.");
            validacionCorrecta = false;
        } else {
            OcultarError(errorCampo);
        }
    });

    // Email
    const email = document.getElementById("email");
    let errorEmail = document.getElementById("errorEmail");
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
        OcultarError(errorEmail);
    } else {
        MostrarError(errorEmail, "*Ingrese un correo electrónico válido.");
        validacionCorrecta = false;
    }

    // Edad
    const edad = document.getElementById("edad");
    let errorEdad = document.getElementById("errorEdad");
    if (edad.value < 18) {
        MostrarError(errorEdad, "*Debe ser mayor de 18 años para registrarse.");
        validacionCorrecta = false;
    } else {
        OcultarError(errorEdad);
    }

    // Actividad
    const actividad = document.getElementById("actividad");
    let errorActividad = document.getElementById("errorActividad");
    if (actividad.value === "") {
        MostrarError(errorActividad, "*Debe ingresar una actividad.");
        validacionCorrecta = false;
    } else {
        OcultarError(errorActividad);
    }

    // Nivel de Estudio
    const nivelEstudios = document.getElementById("nivelEstudio");
    let errorNivelEstudios = document.getElementById("errorNivelEstudios");
    if (nivelEstudios.value === "") {
        MostrarError(errorNivelEstudios, "*Debe ingresar un nivel de estudios.");
        validacionCorrecta = false;
    } else {
        OcultarError(errorNivelEstudios);
    }

    // Términos y Condiciones
    const aceptoTerminos = document.getElementById("aceptoTerminos");
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
    elemento.style.display = "block";
}

const OcultarError = (elemento) => {
    elemento.textContent = "";
    elemento.style.display = "none";
}
