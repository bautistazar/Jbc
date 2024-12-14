document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");
    const formResponse = document.getElementById("formResponse");

    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Evitar la recarga de la página

        // Capturar los valores del formulario
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        // Configurar los parámetros para EmailJS
        const templateParams = {
            name: name,
            email: email,
            message: message,
        };

        // Enviar el correo
        emailjs.send("service_ov3o0ta", "template_bfmsjwg", templateParams)
            .then(() => {
                form.reset(); // Limpiar el formulario
                formResponse.textContent = "¡Mensaje enviado exitosamente!";
                formResponse.style.display = "block";

                // Ocultar el mensaje después de unos segundos
                setTimeout(() => {
                    formResponse.style.display = "none";
                }, 3000);
            })
            .catch((error) => {
                console.error("Error al enviar el mensaje:", error);
                formResponse.textContent = "Hubo un error al enviar el mensaje. Inténtalo de nuevo.";
                formResponse.style.display = "block";
            });
    });
});

