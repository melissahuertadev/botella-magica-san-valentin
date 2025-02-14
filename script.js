const mensajes = [
    "Mi amor, nuestra conexión es como un sistema perfectamente optimizado. No importa cuántos bugs se presenten, siempre encontramos la forma de resolverlos juntos. ¡Feliz primer mes, mi mejor algoritmo!",
    "Si nuestra relación fuera un código, tú serías el lenguaje de programación que hace que todo funcione sin errores. Este primer mes ha sido solo el inicio de lo que será un sistema lleno de amor y aventura.",
    "Entre planos y códigos, el universo hizo un commit perfecto para unirnos. Este mes, la compuerta de mi corazón se cerró solo para ti. Sigamos construyendo juntos nuestro software de amor.",
    "En este universo que conspiró para que nos encontráramos, cada día que pasa refuerza nuestra conexión. Como una estructura bien pensada, nuestra relación tiene cimientos fuertes. ¡Te amo!",
    "Nuestro amor es como un proyecto bien diseñado: cada etapa está perfectamente alineada, y el universo hace que todo encaje a la perfección. Hoy celebramos el primer mes de una obra maestra."
];

document.addEventListener("DOMContentLoaded", () => {
    const botella = document.getElementById("botella");
    const mensajeInicial = document.getElementById("mensaje-inicial");
    const mensajeSecreto = document.getElementById("mensaje-secreto");
    const firma = mensajeSecreto.querySelector(".firma");
    const shakeSound = document.getElementById("shakeSound");


    const musicButton = document.getElementById("musicButton");
    const bgMusic = document.getElementById("bgMusic");
    const musicIcon = document.getElementById("musicIcon");

    // Inicializa el estado del botón (música apagada)
    musicButton.classList.add("off");
    
    // Evento para reproducir la música al hacer clic
    musicButton.addEventListener("click", () => {
        if (bgMusic.paused) {
            // Reproducir música
            bgMusic.play().catch((error) => {
                alert("Error al intentar reproducir la música:");
            });
            // Cambiar el ícono y el estado del botón
            musicButton.classList.remove("off");
        } else {
            // Pausar música
            bgMusic.pause();
            // Cambiar el ícono y el estado del botón
            musicButton.classList.add("off");
        }
    });
    
    botella.addEventListener("click", () => {
        // Reproducir sonido
        shakeSound.play();

        // Agregar animación de agitación
        botella.classList.add("shake");


        // Mostrar un mensaje aleatorio después de la animación
        setTimeout(() => {
            botella.classList.remove("shake");
            const randomIndex = Math.floor(Math.random() * mensajes.length);
            const mensajeTexto = mensajes[randomIndex];

            // Limpiar solo los mensajes anteriores sin eliminar la firma
            mensajeSecreto.innerHTML = ""; // Borra todo el contenido
            mensajeSecreto.appendChild(firma); // Vuelve a agregar la firma

            // Crear un nuevo párrafo con el mensaje
            const nuevoMensaje = document.createElement("p");
            nuevoMensaje.textContent = mensajeTexto;

            // Insertar el mensaje antes de la firma
            mensajeSecreto.insertBefore(nuevoMensaje, firma);

            // Mostrar el mensaje secreto y ocultar el mensaje inicial
            mensajeSecreto.classList.add("mensaje-visible");
        }, 500);
    });
})