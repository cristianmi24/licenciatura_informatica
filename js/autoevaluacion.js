document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('autoevaluacionForm');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Obtener todas las respuestas
        const respuestas = {
            pregunta1: document.querySelector('input[name="pregunta1"]:checked')?.value,
            pregunta2: document.querySelector('input[name="pregunta2"]:checked')?.value,
            pregunta3: document.querySelector('input[name="pregunta3"]:checked')?.value,
            pregunta4: document.querySelector('input[name="pregunta4"]:checked')?.value,
            pregunta5: document.querySelector('input[name="pregunta5"]:checked')?.value
        };

        // Verificar si todas las preguntas fueron respondidas
        if (Object.values(respuestas).some(valor => !valor)) {
            alert('Por favor, responde todas las preguntas antes de enviar.');
            return;
        }

        // Calcular puntuación total
        const puntuacionTotal = Object.values(respuestas).reduce((total, valor) => total + parseInt(valor), 0);
        
        // Determinar el resultado
        let mensaje = '';
        if (puntuacionTotal <= 8) {
            mensaje = '¡Excelente! Tu perfil se alinea muy bien con la carrera de Licenciatura en Informática.';
        } else if (puntuacionTotal <= 12) {
            mensaje = 'Buen perfil. La carrera podría ser una buena opción para ti, pero considera investigar más sobre el campo.';
        } else {
            mensaje = 'Considera explorar otras carreras que se alineen mejor con tus intereses y habilidades.';
        }

        // Mostrar resultado
        alert(mensaje);
    });
}); 