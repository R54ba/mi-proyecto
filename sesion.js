// Contraseña definida (puedes cambiarla aquí)
const correctPassword = "1234";

function checkPassword() {
    const input = document.getElementById('password').value;
    const error = document.getElementById('error');

    if (input === correctPassword) {
        // Redirigir a la página de contenido
        window.location.href = "contenido.html"; // Asegúrate de tener la página contenido.html
    } else {
        error.textContent = "Contraseña incorrecta. Inténtalo de nuevo.";
    }
}
