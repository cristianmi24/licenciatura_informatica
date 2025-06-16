// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Obtener elementos del DOM
    const chatButton = document.getElementById('chat-button');
    const chatWindow = document.getElementById('chat-window');
    const closeButton = document.getElementById('close-chat');
    const chatMessages = document.getElementById('chat-messages');
    const chatInput = document.getElementById('chat-input');
    const sendButton = document.getElementById('send-button');

    // Mostrar/ocultar chat
    chatButton.addEventListener('click', function() {
        chatWindow.classList.toggle('active');
        chatButton.classList.toggle('active');
        
        // Mostrar mensaje inicial y preguntas si el chat está activo
        if (chatWindow.classList.contains('active')) {
            showInitialMessage();
        }
    });

    closeButton.addEventListener('click', function() {
        chatWindow.classList.remove('active');
        chatButton.classList.remove('active');
    });

    // Función para mostrar mensaje inicial y preguntas
    function showInitialMessage() {
        // Limpiar mensajes anteriores
        chatMessages.innerHTML = '';
        
        // Mensaje inicial
        const initialMessage = document.createElement('div');
        initialMessage.className = 'message bot-message';
        initialMessage.innerHTML = `
            <div class="message-content">
                <p>¡Hola! Soy el asistente virtual de la Licenciatura en Informática. ¿En qué puedo ayudarte hoy?</p>
            </div>
        `;
        chatMessages.appendChild(initialMessage);

        // Preguntas frecuentes
        const faqDiv = document.createElement('div');
        faqDiv.className = 'faq-buttons';
        faqDiv.innerHTML = `
            <p>Preguntas frecuentes:</p>
            <button class="faq-btn" data-question="perfil">¿Cuál es el perfil profesional?</button>
            <button class="faq-btn" data-question="duracion">¿Cuánto dura la carrera?</button>
            <button class="faq-btn" data-question="objetivos">¿Cuáles son los objetivos?</button>
            <button class="faq-btn" data-question="campos">¿Dónde puedo trabajar?</button>
            <button class="faq-btn" data-question="competencias">¿Qué competencias desarrollo?</button>
            <button class="faq-btn" data-question="requisitos">¿Cuáles son los requisitos?</button>
        `;
        chatMessages.appendChild(faqDiv);

        // Agregar eventos a los botones
        const faqButtons = faqDiv.querySelectorAll('.faq-btn');
        faqButtons.forEach(button => {
            button.addEventListener('click', function() {
                const question = this.getAttribute('data-question');
                showAnswer(question);
            });
        });
    }

    // Función para mostrar respuestas
    function showAnswer(question) {
        const answers = {
            perfil: "El egresado de la Licenciatura en Informática es un profesional capaz de diseñar, desarrollar e implementar soluciones tecnológicas innovadoras, con habilidades en programación, gestión de proyectos y análisis de sistemas.",
            duracion: "La carrera tiene una duración de 8 semestres (4 años) y se imparte en modalidad presencial.",
            objetivos: "Formar profesionales con conocimientos sólidos en informática, capaces de desarrollar soluciones tecnológicas innovadoras y contribuir al desarrollo de la sociedad.",
            campos: "Puedes trabajar en empresas de desarrollo de software, consultoría tecnológica, departamentos de TI, instituciones educativas, y como emprendedor en el sector tecnológico.",
            competencias: "Desarrollarás competencias en programación, bases de datos, redes, seguridad informática, gestión de proyectos y desarrollo de software.",
            requisitos: "Los requisitos incluyen: certificado de bachillerato, promedio mínimo de 7.0, aprobar el examen de admisión y realizar el proceso de inscripción."
        };

        const answerDiv = document.createElement('div');
        answerDiv.className = 'message bot-message';
        answerDiv.innerHTML = `
            <div class="message-content">
                <p>${answers[question] || "Lo siento, no tengo información sobre esa pregunta."}</p>
            </div>
        `;
        chatMessages.appendChild(answerDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    // Función para enviar mensaje
    function sendMessage() {
        const message = chatInput.value.trim();
        if (message) {
            // Mostrar mensaje del usuario
            const userMessage = document.createElement('div');
            userMessage.className = 'message user-message';
            userMessage.innerHTML = `
                <div class="message-content">
                    <p>${message}</p>
                </div>
            `;
            chatMessages.appendChild(userMessage);

            // Limpiar input
            chatInput.value = '';

            // Mostrar respuesta del bot
            setTimeout(() => {
                const botResponse = getBotResponse(message);
                const botMessage = document.createElement('div');
                botMessage.className = 'message bot-message';
                botMessage.innerHTML = `
                    <div class="message-content">
                        <p>${botResponse}</p>
                    </div>
                `;
                chatMessages.appendChild(botMessage);
                chatMessages.scrollTop = chatMessages.scrollHeight;
            }, 500);
        }
    }

    // Función para obtener respuesta del bot
    function getBotResponse(message) {
        const lowerMessage = message.toLowerCase();
        
        if (lowerMessage.includes('hola') || lowerMessage.includes('buenos días') || lowerMessage.includes('buenas')) {
            return '¡Hola! ¿En qué puedo ayudarte hoy? Puedes seleccionar una de las preguntas frecuentes o escribir tu consulta.';
        }
        else if (lowerMessage.includes('horario') || lowerMessage.includes('clases')) {
            return 'Las clases se imparten de lunes a viernes en horario matutino y vespertino. ¿Te gustaría conocer más detalles sobre algún horario específico?';
        }
        else if (lowerMessage.includes('inscripción') || lowerMessage.includes('inscribir')) {
            return 'El proceso de inscripción se realiza a través de la plataforma de la universidad. ¿Necesitas ayuda con algún paso específico?';
        }
        else if (lowerMessage.includes('costo') || lowerMessage.includes('precio') || lowerMessage.includes('pago')) {
            return 'La carrera tiene un costo por semestre que incluye matrícula y colegiatura. ¿Te gustaría conocer los detalles específicos?';
        }
        else if (lowerMessage.includes('gracias')) {
            return '¡De nada! ¿Hay algo más en lo que pueda ayudarte?';
        }
        else if (lowerMessage.includes('adiós') || lowerMessage.includes('chao') || lowerMessage.includes('hasta luego')) {
            return '¡Hasta luego! Que tengas un excelente día.';
        }
        else {
            return 'Lo siento, no entiendo tu pregunta. ¿Podrías seleccionar una de las preguntas frecuentes o reformular tu consulta?';
        }
    }

    // Eventos para enviar mensajes
    sendButton.addEventListener('click', sendMessage);
    chatInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
}); 