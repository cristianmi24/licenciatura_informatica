// Variables globales
const subjectsData = {
    // Período 1
    "matematica-logica": {
        title: "Matemática y Lógica",
        description: "Fundamentos de lógica matemática, proposiciones, conectivos lógicos, tablas de verdad y razonamiento deductivo. Base esencial para el pensamiento computacional y la programación.",
        credits: 3,
        prerequisites: "Ninguno",
        image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    "epistemologia-tecnologia": {
        title: "Epistemología de la Tecnología",
        description: "Estudio crítico del conocimiento tecnológico, su naturaleza, desarrollo y impacto social. Análisis de la relación entre ciencia, tecnología y sociedad.",
        credits: 2,
        prerequisites: "Ninguno",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    "epistemologia-comunicacion": {
        title: "Epistemología de la Comunicación",
        description: "Fundamentos teóricos de la comunicación humana, modelos comunicativos y su aplicación en contextos educativos y tecnológicos.",
        credits: 2,
        prerequisites: "Ninguno",
        image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    "psicologia-evolutiva": {
        title: "Psicología Evolutiva",
        description: "Estudio del desarrollo cognitivo, emocional y social del ser humano a lo largo de las diferentes etapas de la vida, con énfasis en procesos de aprendizaje.",
        credits: 3,
        prerequisites: "Ninguno",
        image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    "competencias-comunicativas": {
        title: "Competencias Comunicativas",
        description: "Desarrollo de habilidades de comunicación oral y escrita, comprensión lectora y expresión efectiva en contextos académicos y profesionales.",
        credits: 3,
        prerequisites: "Ninguno",
        image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    "mediaciones-tecnologicas-1": {
        title: "Mediaciones Tecnológicas I",
        description: "Introducción a las tecnologías de la información y comunicación como herramientas mediadoras en procesos educativos y sociales.",
        credits: 3,
        prerequisites: "Ninguno",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },

    // Período 2
    "razonamiento-cuantitativo": {
        title: "Razonamiento Cuantitativo",
        description: "Desarrollo del pensamiento matemático y estadístico aplicado a la resolución de problemas cuantitativos en diversos contextos.",
        credits: 3,
        prerequisites: "Matemática y Lógica",
        image: "https://images.unsplash.com/photo-1543286386-713bdd548da4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    "educacion-tecnologica": {
        title: "Educación Tecnológica",
        description: "Principios y metodologías para la integración de la tecnología en procesos educativos, diseño de ambientes de aprendizaje tecnológico.",
        credits: 2,
        prerequisites: "Epistemología de la Tecnología",
        image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    "liderazgo-gestion": {
        title: "Liderazgo y Gestión",
        description: "Desarrollo de competencias de liderazgo, trabajo en equipo, gestión de proyectos y toma de decisiones en contextos educativos y organizacionales.",
        credits: 2,
        prerequisites: "Ninguno",
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    "teoria-imagen": {
        title: "Teoría de la Imagen",
        description: "Fundamentos teóricos de la comunicación visual, semiótica de la imagen y su aplicación en medios digitales y educativos.",
        credits: 2,
        prerequisites: "Epistemología de la Comunicación",
        image: "https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    "psicologia-aprendizaje": {
        title: "Psicología del Aprendizaje",
        description: "Teorías del aprendizaje, procesos cognitivos, motivación y estrategias para facilitar el aprendizaje significativo.",
        credits: 3,
        prerequisites: "Psicología Evolutiva",
        image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    "lectura-escritura-critica": {
        title: "Lectura y Escritura Crítica",
        description: "Desarrollo de competencias avanzadas de comprensión lectora, análisis crítico de textos y producción de escritos académicos.",
        credits: 2,
        prerequisites: "Competencias Comunicativas",
        image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    "educacion-ciudadania": {
        title: "Educación para la Ciudadanía",
        description: "Formación en valores democráticos, derechos humanos, participación ciudadana y responsabilidad social.",
        credits: 2,
        prerequisites: "Ninguno",
        image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },

    // Período 3
    "fundamentos-algoritmia": {
        title: "Fundamentos de Algoritmia",
        description: "Introducción al pensamiento algorítmico, diseño de algoritmos básicos, estructuras de control y resolución de problemas computacionales.",
        credits: 3,
        prerequisites: "Matemática y Lógica",
        image: "https://images.unsplash.com/photo-1551033406-611cf9a28f67?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    "informatica-educacion": {
        title: "Informática y Educación",
        description: "Integración de la informática en procesos educativos, software educativo, recursos digitales y metodologías de enseñanza mediadas por tecnología.",
        credits: 2,
        prerequisites: "Mediaciones Tecnológicas I",
        image: "https://images.unsplash.com/photo-1581093057305-405f1b0d5c8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    "fotografia": {
        title: "Fotografía",
        description: "Técnicas de composición fotográfica, manejo de equipos, edición digital y narrativa visual aplicada a proyectos educativos y comunicativos.",
        credits: 3,
        prerequisites: "Teoría de la Imagen",
        image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    "sociologia-educacion": {
        title: "Sociología de la Educación",
        description: "Análisis sociológico del sistema educativo, desigualdades, instituciones educativas y su papel en la transformación social.",
        credits: 3,
        prerequisites: "Psicología del Aprendizaje",
        image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    "pra-ped-inv-1": {
        title: "Práctica Pedagógica Investigativa I",
        description: "Introducción a la investigación educativa desde una perspectiva sociológica, metodologías de investigación y análisis de contextos educativos.",
        credits: 2,
        prerequisites: "Sociología de la Educación",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    "ingles-1": {
        title: "Inglés I",
        description: "Desarrollo de competencias básicas en inglés: comprensión auditiva, expresión oral, lectura y escritura en contextos académicos y cotidianos.",
        credits: 3,
        prerequisites: "Ninguno",
        image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },

    // Período 4
    "fundamentos-programacion": {
        title: "Fundamentos de Programación",
        description: "Introducción a la programación usando un lenguaje de alto nivel, estructuras de datos básicas, funciones y desarrollo de programas simples.",
        credits: 3,
        prerequisites: "Fundamentos de Algoritmia",
        image: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    "cognicion-computacion": {
        title: "Cognición y Computación",
        description: "Estudio de la relación entre procesos cognitivos humanos y sistemas computacionales, inteligencia artificial básica y procesamiento de información.",
        credits: 2,
        prerequisites: "Psicología del Aprendizaje",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    "gerencia-educacion": {
        title: "Gerencia de la Educación",
        description: "Principios de administración educativa, planeación estratégica, gestión de recursos y liderazgo en instituciones educativas.",
        credits: 2,
        prerequisites: "Liderazgo y Gestión",
        image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    "narrativa-guionistica": {
        title: "Narrativa y Guionística",
        description: "Técnicas de construcción narrativa, desarrollo de guiones para medios audiovisuales y storytelling digital aplicado a la educación.",
        credits: 2,
        prerequisites: "Fotografía",
        image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    "tendencias-pedagogicas": {
        title: "Tendencias Pedagógicas y Didácticas",
        description: "Análisis de enfoques pedagógicos contemporáneos, metodologías activas de enseñanza y estrategias didácticas innovadoras.",
        credits: 3,
        prerequisites: "Práctica Pedagógica Investigativa I",
        image: "https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    "pra-ped-inv-2": {
        title: "Práctica Pedagógica Investigativa II",
        description: "Profundización en investigación pedagógica, diseño de proyectos educativos y análisis de prácticas pedagógicas.",
        credits: 2,
        prerequisites: "Práctica Pedagógica Investigativa I",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    "ingles-2": {
        title: "Inglés II",
        description: "Desarrollo de competencias intermedias en inglés con énfasis en vocabulario técnico y comunicación académica.",
        credits: 3,
        prerequisites: "Inglés I",
        image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },

    // Período 5
    "tecnicas-programacion": {
        title: "Técnicas Avanzadas de Programación",
        description: "Programación orientada a objetos, estructuras de datos avanzadas, patrones de diseño y desarrollo de aplicaciones de mediana complejidad.",
        credits: 3,
        prerequisites: "Fundamentos de Programación",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    "inteligencia-computacional": {
        title: "Inteligencia Computacional",
        description: "Fundamentos de inteligencia artificial, algoritmos de aprendizaje automático, redes neuronales y sistemas inteligentes.",
        credits: 2,
        prerequisites: "Cognición y Computación",
        image: "https://images.unsplash.com/photo-1677442135136-760c813a743e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    "planificacion-estrategica": {
        title: "Planificación Estratégica e Indicadores de Gestión Educativa",
        description: "Metodologías de planeación educativa, construcción de indicadores de gestión y evaluación de la calidad educativa.",
        credits: 2,
        prerequisites: "Gerencia de la Educación",
        image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    "radio": {
        title: "Radio",
        description: "Producción radiofónica, guionismo para radio, técnicas de locución y desarrollo de contenidos educativos para medios sonoros.",
        credits: 2,
        prerequisites: "Narrativa y Guionística",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    "curriculo-gestion": {
        title: "Currículo y Gestión Escolar",
        description: "Diseño curricular, organización escolar, gestión académica y procesos de mejoramiento institucional.",
        credits: 3,
        prerequisites: "Tendencias Pedagógicas y Didácticas",
        image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    "didactica-general": {
        title: "Didáctica General",
        description: "Principios generales de la didáctica, métodos de enseñanza, estrategias de aprendizaje y evaluación educativa.",
        credits: 3,
        prerequisites: "Tendencias Pedagógicas y Didácticas",
        image: "https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    "pra-ped-inv-3": {
        title: "Práctica Pedagógica Investigativa III",
        description: "Investigación curricular, análisis de propuestas educativas y desarrollo de innovaciones pedagógicas.",
        credits: 2,
        prerequisites: "Práctica Pedagógica Investigativa II",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    "ingles-3": {
        title: "Inglés III",
        description: "Competencias avanzadas en inglés técnico, comprensión de textos especializados y comunicación profesional.",
        credits: 3,
        prerequisites: "Inglés II",
        image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },

    // Período 6
    "redes-computadores": {
        title: "Redes de Computadores",
        description: "Fundamentos de redes de computadores, protocolos de comunicación, arquitecturas de red y administración de sistemas conectados.",
        credits: 3,
        prerequisites: "Técnicas Avanzadas de Programación",
        image: "https://images.unsplash.com/photo-1563770660941-10a63607739e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    "procesos-evaluativos": {
        title: "Procesos Evaluativos",
        description: "Teorías y técnicas de evaluación educativa, construcción de instrumentos de evaluación y análisis de resultados académicos.",
        credits: 3,
        prerequisites: "Didáctica General",
        image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    "didactica-informatica": {
        title: "Didáctica de la Informática",
        description: "Metodologías específicas para la enseñanza de la informática, recursos didácticos digitales y evaluación en informática educativa.",
        credits: 3,
        prerequisites: "Didáctica General",
        image: "https://images.unsplash.com/photo-1581093057305-405f1b0d5c8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    "pra-ped-inv-4": {
        title: "Práctica Pedagógica Investigativa IV",
        description: "Laboratorio de gestión educativa, implementación de proyectos pedagógicos y evaluación de impacto educativo.",
        credits: 2,
        prerequisites: "Práctica Pedagógica Investigativa III",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    "teoria-metodos-investigacion": {
        title: "Teoría y Métodos de Investigación",
        description: "Metodología de la investigación científica, diseño de proyectos de investigación y técnicas de recolección y análisis de datos.",
        credits: 2,
        prerequisites: "Práctica Pedagógica Investigativa III",
        image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    "ingles-4": {
        title: "Inglés IV",
        description: "Competencias superiores en inglés, redacción académica, presentaciones profesionales y comprensión de literatura técnica.",
        credits: 3,
        prerequisites: "Inglés III",
        image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    "produccion-artefactos": {
        title: "Producción de Artefactos Tecnológicos",
        description: "Diseño y desarrollo de objetos tecnológicos educativos, prototipado, testing y documentación de productos tecnológicos.",
        credits: 3,
        prerequisites: "Redes de Computadores",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },

    // Período 7
    "robotica-basica": {
        title: "Robótica Básica",
        description: "Fundamentos de robótica educativa, programación de robots, sensores y actuadores aplicados a proyectos pedagógicos.",
        credits: 3,
        prerequisites: "Producción de Artefactos Tecnológicos",
        image: "https://images.unsplash.com/photo-1581093057927-02e769d7b6b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    "produccion-multimedia": {
        title: "Producción Multimedia",
        description: "Desarrollo de contenidos multimedia interactivos, edición de video y audio, animación y recursos digitales educativos.",
        credits: 3,
        prerequisites: "Radio",
        image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    "politicas-publicas": {
        title: "Políticas Públicas e Identidad Docente",
        description: "Análisis de políticas educativas, legislación educativa colombiana y construcción de la identidad profesional docente.",
        credits: 3,
        prerequisites: "Currículo y Gestión Escolar",
        image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    "didactica-medios": {
        title: "Didáctica de los Medios Audiovisuales",
        description: "Metodologías para la enseñanza con medios audiovisuales, producción de contenidos educativos y narrativas digitales.",
        credits: 3,
        prerequisites: "Didáctica de la Informática",
        image: "https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    "pra-ped-inv-5": {
        title: "Práctica Pedagógica Investigativa V",
        description: "Enseñanza de la programación, metodologías específicas y desarrollo de competencias computacionales en estudiantes.",
        credits: 2,
        prerequisites: "Práctica Pedagógica Investigativa IV",
        image: "https://images.unsplash.com/photo-1581093057305-405f1b0d5c8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    "planeacion-proyectos": {
        title: "Planeación de Proyectos de Investigación",
        description: "Formulación de proyectos de investigación educativa, cronogramas, presupuestos y metodologías de seguimiento.",
        credits: 2,
        prerequisites: "Teoría y Métodos de Investigación",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },

    // Período 8
    "ambientes-educativos": {
        title: "Ambientes Educativos Tecnológicos",
        description: "Diseño de espacios educativos mediados por tecnología, plataformas virtuales de aprendizaje y gestión de entornos digitales.",
        credits: 3,
        prerequisites: "Políticas Públicas e Identidad Docente",
        image: "https://images.unsplash.com/photo-1581093057305-405f1b0d5c8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    "diseño-software-1": {
        title: "Diseño y Desarrollo de Software Educativo I",
        description: "Metodologías de desarrollo de software educativo, análisis de requerimientos, diseño de interfaces y usabilidad.",
        credits: 3,
        prerequisites: "Didáctica de los Medios Audiovisuales",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    "gestion-proyectos": {
        title: "Gestión de Proyectos Educativos",
        description: "Administración de proyectos educativos, metodologías ágiles, gestión de recursos y evaluación de resultados.",
        credits: 3,
        prerequisites: "Planeación de Proyectos de Investigación",
        image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    "realizacion-audiovisual-1": {
        title: "Realización Audiovisual I",
        description: "Producción de contenidos audiovisuales educativos, manejo de equipos, técnicas de grabación y edición básica.",
        credits: 3,
        prerequisites: "Producción Multimedia",
        image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    "pra-ped-inv-6": {
        title: "Práctica Pedagógica Investigativa VI",
        description: "Aplicación de medios audiovisuales en la enseñanza, desarrollo de recursos educativos y evaluación de su efectividad.",
        credits: 2,
        prerequisites: "Práctica Pedagógica Investigativa V",
        image: "https://images.unsplash.com/photo-1581093057305-405f1b0d5c8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    "diseño-intervencion": {
        title: "Diseño de la Intervención Pedagógica",
        description: "Planificación de intervenciones educativas, estrategias de implementación y herramientas de seguimiento pedagógico.",
        credits: 2,
        prerequisites: "Gestión de Proyectos Educativos",
        image: "https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },

    // Período 9
    "diseño-software-2": {
        title: "Diseño y Desarrollo de Software Educativo II",
        description: "Desarrollo avanzado de aplicaciones educativas, testing, implementación y mantenimiento de software educativo.",
        credits: 3,
        prerequisites: "Diseño y Desarrollo de Software Educativo I",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    "realizacion-audiovisual-2": {
        title: "Realización Audiovisual II",
        description: "Producción audiovisual avanzada, postproducción, efectos especiales y narrativas transmedia para la educación.",
        credits: 3,
        prerequisites: "Realización Audiovisual I",
        image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    "practica-docente-1": {
        title: "Práctica Docente I",
        description: "Primera experiencia de práctica pedagógica en instituciones educativas, observación, planeación y ejecución de clases.",
        credits: 2,
        prerequisites: "Práctica Pedagógica Investigativa VI",
        image: "https://images.unsplash.com/photo-1581093057305-405f1b0d5c8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    "aplicacion-validacion": {
        title: "Aplicación y Validación de la Intervención Pedagógica",
        description: "Implementación y evaluación de propuestas pedagógicas, análisis de resultados y ajustes metodológicos.",
        credits: 2,
        prerequisites: "Diseño de la Intervención Pedagógica",
        image: "https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },

    // Período 10
    "diseño-software-3": {
        title: "Diseño y Desarrollo de Software Educativo III",
        description: "Proyecto integrador de desarrollo de software educativo, trabajo en equipo, documentación y presentación de productos finales.",
        credits: 3,
        prerequisites: "Diseño y Desarrollo de Software Educativo II",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    "practica-docente-2": {
        title: "Práctica Docente II",
        description: "Práctica pedagógica avanzada con mayor autonomía, diseño curricular, evaluación y reflexión sobre la práctica docente.",
        credits: 2,
        prerequisites: "Práctica Docente I",
        image: "https://images.unsplash.com/photo-1581093057305-405f1b0d5c8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    "informe-final": {
        title: "Elaboración y Sustentación de Informe Final",
        description: "Sistematización de la experiencia formativa, elaboración del trabajo de grado y sustentación ante jurado evaluador.",
        credits: 2,
        prerequisites: "Aplicación y Validación de la Intervención Pedagógica",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    "requisito-grado": {
        title: "Requisito de Grado",
        description: "Cumplimiento de requisitos adicionales para optar al título profesional según reglamentación académica institucional.",
        credits: 2,
        prerequisites: "Todos los períodos anteriores",
        image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },

    // Electivas
    "electiva-libre-1": {
        title: "Electiva Libre I",
        description: "Materia de libre elección que permite al estudiante profundizar en temas de su interés o explorar áreas complementarias.",
        credits: 2,
        prerequisites: "Ninguno",
        image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    "electiva-libre-2": {
        title: "Electiva Libre II",
        description: "Segunda materia de libre elección para ampliar el perfil profesional del estudiante.",
        credits: 2,
        prerequisites: "Ninguno",
        image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    "electiva-carrera-1": {
        title: "Electiva de Carrera I",
        description: "Materia especializada en el área de informática educativa según la oferta académica del programa.",
        credits: 2,
        prerequisites: "Depende de la materia específica",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    "electiva-carrera-2": {
        title: "Electiva de Carrera II",
        description: "Segunda materia especializada para profundizar en aspectos específicos de la licenciatura en informática.",
        credits: 2,
        prerequisites: "Depende de la materia específica",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2." }

};

// Respuestas predefinidas para el chatbot
const chatbotResponses = [
    "¡Hola! ¿Tienes dudas sobre la carrera?",
    "La Licenciatura en Informática tiene una duración de 10 semestres.",
    "Nuestros laboratorios cuentan con equipamiento de última generación.",
    "Puedes solicitar más información en la oficina de Servicios Escolares o por correo a informatica@universidad.edu.",
    "Ofrecemos becas por excelencia académica y convenios con empresas para prácticas profesionales.",
    "Las inscripciones para el próximo semestre comienzan en dos meses.",
    "Contamos con programas de intercambio con universidades de Europa, Estados Unidos y Asia.",
    "Si deseas más información específica, déjanos tu correo y te contactaremos.",
    "Nuestros egresados trabajan en empresas como Google, Microsoft, Amazon y startups innovadoras.",
    "¡Gracias por tu interés en nuestra licenciatura!"
];

// Respuestas predefinidas para las preguntas frecuentes
const faqResponses = {
    perfil: "El egresado está preparado para integrar tecnología e innovación en la educación. Por ejemplo, diseña ambientes de aprendizaje mediados por tecnologías informáticas; gestiona y lidera procesos de cambio educativo a través de la investigación con TIC; emplea responsablemente la tecnología para fortalecer procesos educativos y sociales; evalúa la eficacia de entornos y recursos tecnológicos de enseñanza; aplica conocimientos de psicología del aprendizaje y pedagogía junto con herramientas digitales; domina la programación de software educativo (especialmente web) y colabora en equipos interdisciplinarios para desarrollar recursos educativos multimedia (objetos virtuales, videojuegos educativos, software educativo, etc.); además, conoce tecnologías emergentes (inteligencia artificial, robótica, internet de las cosas, computación en la nube) aplicadas al contexto educativo.",
    
    duracion: "La duración estimada del programa es de 10 semestres (aproximadamente 5 años). El plan de estudios está diseñado según lo establecido por el Decreto 2450 de 2015, por lo que consta de diez periodos académicos. En cuanto a la modalidad, la carrera se ofrece de forma presencial, jornada diurna, dictada en la sede central de la Universidad de Córdoba en Montería.",
    
    objetivos: "El objetivo general del programa es formar educadores integrales con sólida preparación pedagógica e investigativa, capaces de abordar problemáticas sociales y educativas desde una perspectiva tecnológica. En concreto, se busca que el estudiante aprenda a generar conocimiento que contribuya a la comprensión del fenómeno tecnológico y a la creación de ambientes de aprendizaje innovadores con interactividad, virtualidad y conectividad.",
    
    campos: "La Licenciatura en Informática está orientada principalmente al ámbito educativo y tecnológico. El egresado puede trabajar como docente de informática o de tecnologías en colegios y otras instituciones educativas; puede dedicarse al diseño y desarrollo de sistemas de información educativos; a la gestión del conocimiento en organizaciones; a la solución de problemáticas gerenciales mediante el uso de TIC en instituciones educativas o culturales; y a la creación de recursos didácticos y multimedia.",
    
    competencias: "La carrera promueve el desarrollo de múltiples competencias: diseño de ambientes educativos tecnológicos, liderazgo en innovación educativa, uso ético y responsable de las TIC, evaluación de recursos tecnológicos, programación y desarrollo de software educativo, trabajo en equipos interdisciplinarios, y conocimiento de tecnologías emergentes (inteligencia artificial, robótica, Internet de las cosas, computación en la nube).",
    
    requisitos: "La admisión es semestral, se abre convocatoria dos veces al año. Los aspirantes deben haber obtenido el título de bachiller (certificado de secundaria) y cumplir con los procedimientos de inscripción establecidos por la universidad. Esto implica diligenciar el formulario de inscripción en línea, pagar los derechos de inscripción en las fechas de la convocatoria y presentar la documentación solicitada."
};

// Datos de la autoevaluación
const autoevaluacionData = {
    preguntas: [
        {
            id: 1,
            texto: "¿Cómo te sientes cuando trabajas con tecnología?",
            opciones: [
                { id: "A", texto: "Me emociona explorar nuevas herramientas y posibilidades" },
                { id: "B", texto: "Me gusta usarla para resolver problemas prácticos" },
                { id: "C", texto: "La utilizo principalmente para comunicarme y aprender" },
                { id: "D", texto: "Prefiero usarla solo cuando es necesario" }
            ]
        },
        {
            id: 2,
            texto: "Cuando te enfrentas a un problema tecnológico:",
            opciones: [
                { id: "A", texto: "Investigo y experimento hasta encontrar una solución" },
                { id: "B", texto: "Busco la solución más eficiente y práctica" },
                { id: "C", texto: "Pido ayuda y aprendo de la experiencia" },
                { id: "D", texto: "Espero a que alguien me ayude a resolverlo" }
            ]
        },
        {
            id: 3,
            texto: "En un proyecto grupal, prefieres:",
            opciones: [
                { id: "A", texto: "Liderar la innovación y el desarrollo tecnológico" },
                { id: "B", texto: "Organizar y coordinar las tareas del equipo" },
                { id: "C", texto: "Contribuir con ideas y apoyar al equipo" },
                { id: "D", texto: "Seguir las instrucciones y completar mis tareas" }
            ]
        },
        {
            id: 4,
            texto: "¿Cómo te ves enseñando tecnología a otros?",
            opciones: [
                { id: "A", texto: "Me entusiasma compartir conocimientos y crear materiales didácticos" },
                { id: "B", texto: "Me gusta explicar conceptos de manera clara y práctica" },
                { id: "C", texto: "Disfruto ayudando a otros a aprender" },
                { id: "D", texto: "Prefiero aprender primero antes de enseñar" }
            ]
        },
        {
            id: 5,
            texto: "Ante un nuevo software o herramienta:",
            opciones: [
                { id: "A", texto: "Exploro todas sus funciones y posibilidades" },
                { id: "B", texto: "Aprendo lo necesario para usarlo eficientemente" },
                { id: "C", texto: "Me enfoco en las funciones que necesito" },
                { id: "D", texto: "Espero a que me expliquen cómo usarlo" }
            ]
        }
    ],
    resultados: {
        A: {
            titulo: "Perfil Innovador y Tecnológico",
            descripcion: "Tienes un gran potencial para la innovación y el desarrollo tecnológico. Tu curiosidad y entusiasmo por explorar nuevas posibilidades son características valiosas para la Licenciatura en Informática.",
            areas: [
                "Desarrollo de software y aplicaciones",
                "Innovación tecnológica",
                "Investigación en tecnología educativa",
                "Diseño de soluciones tecnológicas"
            ],
            recomendaciones: [
                "Explora proyectos de desarrollo de software",
                "Participa en hackathons o competencias tecnológicas",
                "Investiga sobre las últimas tendencias en tecnología educativa",
                "Considera especializarte en desarrollo de aplicaciones educativas"
            ]
        },
        B: {
            titulo: "Perfil Práctico y Organizador",
            descripcion: "Tienes una gran capacidad para organizar y resolver problemas de manera eficiente. Tu enfoque práctico y metódico es muy valioso para implementar soluciones tecnológicas en el ámbito educativo.",
            areas: [
                "Gestión de proyectos tecnológicos",
                "Implementación de soluciones educativas",
                "Coordinación de recursos tecnológicos",
                "Optimización de procesos educativos"
            ],
            recomendaciones: [
                "Desarrolla habilidades de gestión de proyectos",
                "Aprende sobre metodologías ágiles",
                "Explora herramientas de gestión educativa",
                "Considera especializarte en gestión de tecnología educativa"
            ]
        },
        C: {
            titulo: "Perfil Colaborativo y Comunicativo",
            descripcion: "Tienes excelentes habilidades para trabajar en equipo y comunicar ideas. Tu capacidad para colaborar y aprender de otros es fundamental para el desarrollo de proyectos educativos tecnológicos.",
            areas: [
                "Trabajo en equipo",
                "Comunicación efectiva",
                "Aprendizaje colaborativo",
                "Soporte y capacitación"
            ],
            recomendaciones: [
                "Participa en proyectos colaborativos",
                "Desarrolla habilidades de comunicación técnica",
                "Explora plataformas de aprendizaje colaborativo",
                "Considera especializarte en tecnología educativa colaborativa"
            ]
        },
        D: {
            titulo: "Perfil Analítico y Reflexivo",
            descripcion: "Tienes un enfoque cuidadoso y analítico hacia la tecnología. Tu capacidad para evaluar y reflexionar sobre el uso de la tecnología es valiosa para el desarrollo de soluciones educativas bien pensadas.",
            areas: [
                "Análisis de necesidades educativas",
                "Evaluación de tecnologías",
                "Diseño de soluciones personalizadas",
                "Investigación educativa"
            ],
            recomendaciones: [
                "Desarrolla habilidades de análisis de sistemas",
                "Aprende sobre metodologías de investigación",
                "Explora herramientas de análisis educativo",
                "Considera especializarte en investigación en tecnología educativa"
            ]
        }
    }
};
    
// Función de inicialización
function init() {
    // Inicializar navegación móvil
    initMobileNav();
    
    // Inicializar scroll suave
    initSmoothScroll();

    // Verificar en qué página estamos
    const isEvaluacionPage = window.location.pathname.includes('evaluacion.html');
    const isIndexPage = window.location.pathname.endsWith('index.html') || window.location.pathname.endsWith('/');

    // Inicializar funcionalidades específicas según la página
    if (isIndexPage) {
        // Inicializar video y audio solo en la página principal
    initVideoAudio();
        // Inicializar visualización de asignaturas solo en la página principal
        initSubjects();
        
        // Inicializar banner de invitación
        initInvitacionBanner();
    } else if (isEvaluacionPage) {
        // Inicializar autoevaluación solo en la página de evaluación
        initAutoevaluacion();
    }
}

// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', init);

// Función para inicializar el chatbot
function initChatbot() {
    const chatbotToggle = document.getElementById('chatbot-toggle');
    const chatbotWindow = document.getElementById('chatbot-window');
    const chatbotMessages = document.getElementById('chatbot-messages');
    const faqQuestions = document.querySelectorAll('.faq-question');

    if (!chatbotToggle || !chatbotWindow || !chatbotMessages) return;

    // Toggle del chatbot
    chatbotToggle.addEventListener('click', function() {
        chatbotWindow.classList.toggle('active');
    });

    // Cerrar el chatbot al hacer clic fuera de él
    document.addEventListener('click', function(event) {
        if (!chatbotWindow.contains(event.target) && !chatbotToggle.contains(event.target)) {
            chatbotWindow.classList.remove('active');
        }
    });

    // Manejar clics en las preguntas
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const questionType = this.getAttribute('data-question');
            const response = faqResponses[questionType];
            
            if (response) {
                const responseElement = document.createElement('div');
                responseElement.className = 'message message-bot';
                responseElement.textContent = response;
                
                chatbotMessages.appendChild(responseElement);
                chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
            }
        });
    });
}

// Función para inicializar la navegación móvil
function initMobileNav() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const navMenu = document.getElementById('nav-menu');

    if (!mobileMenuBtn || !navMenu) return;

    mobileMenuBtn.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });
}

// Función para inicializar el scroll suave
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
                // Cerrar el menú móvil si está abierto
                const navMenu = document.getElementById('nav-menu');
                if (navMenu && navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                }
            }
        });
    });
}

// Función para inicializar el comportamiento del header al hacer scroll
function initHeaderScroll() {
    const header = document.getElementById('header');
    
    if (!header) return;

    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

// Función para inicializar el control de audio del video
function initVideoAudio() {
    console.log('Iniciando initVideoAudio');
    const video = document.getElementById('hero-video');
    const muteButton = document.getElementById('mute-button');
    const playPauseButton = document.getElementById('play-pause-button');
    const progressBar = document.querySelector('.progress');
    const progressContainer = document.querySelector('.progress-container');

    console.log('Elementos encontrados:', {
        video: !!video,
        muteButton: !!muteButton,
        playPauseButton: !!playPauseButton,
        progressBar: !!progressBar,
        progressContainer: !!progressContainer
    });

    if (!video || !muteButton || !playPauseButton || !progressBar || !progressContainer) {
        console.log('No se encontraron todos los elementos necesarios');
        return;
    }

    // Función para actualizar el botón de play/pause
    function updatePlayPauseButton() {
        playPauseButton.innerHTML = video.paused ? 
            '<i class="fas fa-play"></i>' : 
            '<i class="fas fa-pause"></i>';
    }

    // Función para actualizar la barra de progreso
    function updateProgress() {
        const percent = (video.currentTime / video.duration) * 100;
        progressBar.style.width = `${percent}%`;
    }

    // Evento para actualizar la barra de progreso
    video.addEventListener('timeupdate', updateProgress);

    // Evento para actualizar el botón cuando el video termina
    video.addEventListener('ended', () => {
        playPauseButton.innerHTML = '<i class="fas fa-play"></i>';
    });

    // Evento para actualizar el botón cuando el video se pausa
    video.addEventListener('pause', updatePlayPauseButton);
    video.addEventListener('play', updatePlayPauseButton);

    // Manejar clic en la barra de progreso
    progressContainer.addEventListener('click', (e) => {
        const rect = progressContainer.getBoundingClientRect();
        const pos = (e.clientX - rect.left) / rect.width;
        video.currentTime = pos * video.duration;
    });

    // Manejar botón de play/pause
    playPauseButton.addEventListener('click', () => {
        if (video.paused) {
            video.play().catch(error => {
                console.error('Error al reproducir el video:', error);
            });
        } else {
            video.pause();
        }
    });

    // Manejar botón de mute/unmute
    muteButton.addEventListener('click', () => {
        video.muted = !video.muted;
        muteButton.innerHTML = video.muted ? 
            '<i class="fas fa-volume-mute"></i>' : 
            '<i class="fas fa-volume-up"></i>';
    });

    // Asegurarse de que el video comience silenciado
    video.muted = true;
    muteButton.innerHTML = '<i class="fas fa-volume-mute"></i>';

    // Intentar reproducir cuando el video esté listo
    video.addEventListener('loadeddata', () => {
        video.play().catch(error => {
            console.error('Error al reproducir el video:', error);
        });
        updatePlayPauseButton();
    });

    // Inicializar el estado de los controles
    updatePlayPauseButton();
    updateProgress();
}

// Función para inicializar la visualización de asignaturas
function initSubjects() {
    const subjectItems = document.querySelectorAll('.subject-item');
    const modal = document.getElementById('subject-modal');
    const closeModal = document.getElementById('close-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalImage = document.getElementById('modal-image');
    const modalDescription = document.getElementById('modal-description');
    const modalCredits = document.getElementById('modal-credits');
    const modalPrerequisites = document.getElementById('modal-prerequisites');

    if (!subjectItems.length || !modal || !closeModal || !modalTitle || !modalImage || !modalDescription || !modalCredits || !modalPrerequisites) {
        console.log('No se encontraron todos los elementos necesarios para la visualización de asignaturas');
        return;
    }

    // Manejar clic en cada asignatura
    subjectItems.forEach(item => {
        item.addEventListener('click', function() {
            const subjectId = this.getAttribute('data-subject');
            const subjectData = subjectsData[subjectId];

            if (subjectData) {
                modalTitle.textContent = subjectData.title;
                modalImage.src = subjectData.image;
                modalImage.alt = `Imagen representativa de ${subjectData.title}`;
                modalDescription.textContent = subjectData.description;
                modalCredits.textContent = subjectData.credits;
                modalPrerequisites.textContent = subjectData.prerequisites;
                modal.classList.add('active');
            }
        });
    });

    // Cerrar el modal al hacer clic en el botón de cerrar
    closeModal.addEventListener('click', function() {
        modal.classList.remove('active');
    });

    // Cerrar el modal al hacer clic fuera de él
    modal.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.classList.remove('active');
        }
    });
}

// Función para inicializar la autoevaluación
function initAutoevaluacion() {
    // Verificar si estamos en la página de autoevaluación
    const isEvaluacionPage = window.location.pathname.includes('evaluacion.html');
    if (!isEvaluacionPage) return;

    const questionsContainer = document.getElementById('questions-container');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const submitBtn = document.getElementById('submit-btn');
    const resultadosBanner = document.getElementById('resultados-banner');
    const closeBanner = document.querySelector('.close-banner');
    
    let currentQuestion = 0;
    let respuestas = {};

    // Mostrar la primera pregunta automáticamente
    if (questionsContainer) {
        mostrarPregunta(0);
    }

    // Función para mostrar una pregunta
    function mostrarPregunta(index) {
        if (!questionsContainer) return;
        
        const pregunta = autoevaluacionData.preguntas[index];
        const questionHTML = `
            <div class="question" data-question="${pregunta.id}">
                <h4>${pregunta.texto}</h4>
                <div class="options">
                    ${pregunta.opciones.map(opcion => `
                        <label>
                            <input type="radio" name="pregunta${pregunta.id}" value="${opcion.id}" 
                                ${respuestas[pregunta.id] === opcion.id ? 'checked' : ''}>
                            ${opcion.texto}
                        </label>
                    `).join('')}
                </div>
            </div>
        `;
        questionsContainer.innerHTML = questionHTML;

        // Actualizar estado de los botones
        if (prevBtn) prevBtn.style.display = index === 0 ? 'none' : 'block';
        if (nextBtn) nextBtn.style.display = index === autoevaluacionData.preguntas.length - 1 ? 'none' : 'block';
        if (submitBtn) submitBtn.style.display = index === autoevaluacionData.preguntas.length - 1 ? 'block' : 'none';
    }

    // Función para guardar respuesta
    function guardarRespuesta() {
        const preguntaActual = autoevaluacionData.preguntas[currentQuestion];
        const respuesta = document.querySelector(`input[name="pregunta${preguntaActual.id}"]:checked`);
        if (respuesta) {
            respuestas[preguntaActual.id] = respuesta.value;
        }
    }

    // Función para mostrar resultados
    function mostrarResultados() {
        guardarRespuesta();
        
        // Verificar que todas las preguntas tengan respuesta
        const preguntasSinResponder = autoevaluacionData.preguntas.filter(p => !respuestas[p.id]);
        if (preguntasSinResponder.length > 0) {
            alert('Por favor, responde todas las preguntas antes de ver los resultados.');
            return;
        }
        
        // Calcular resultado predominante
        const conteo = { A: 0, B: 0, C: 0, D: 0 };
        Object.values(respuestas).forEach(respuesta => {
            conteo[respuesta]++;
        });
        
        const resultadoPredominante = Object.entries(conteo)
            .reduce((a, b) => a[1] > b[1] ? a : b)[0];
        
        const resultado = autoevaluacionData.resultados[resultadoPredominante];
        
        // Actualizar contenido del banner de resultados
        const resultadoTitulo = document.getElementById('resultado-titulo');
        const resultadoDescripcion = document.getElementById('resultado-descripcion');
        const areasList = document.getElementById('areas-fortaleza-list');
        const recomendacionesList = document.getElementById('recomendaciones-list');

        if (resultadoTitulo) resultadoTitulo.textContent = resultado.titulo;
        if (resultadoDescripcion) resultadoDescripcion.textContent = resultado.descripcion;
        
        if (areasList) {
            areasList.innerHTML = resultado.areas
                .map(area => `<li>${area}</li>`)
                .join('');
        }
        
        if (recomendacionesList) {
            recomendacionesList.innerHTML = resultado.recomendaciones
                .map(rec => `<li>${rec}</li>`)
                .join('');
        }

        // Mostrar banner de resultados
        if (resultadosBanner) {
            resultadosBanner.style.display = 'block';
            // Pequeño retraso para asegurar que el display: block se aplique antes de la animación
            setTimeout(() => {
                resultadosBanner.classList.add('active');
            }, 10);
        }
    }

    // Event Listeners
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            guardarRespuesta();
            currentQuestion--;
            mostrarPregunta(currentQuestion);
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            guardarRespuesta();
            currentQuestion++;
            mostrarPregunta(currentQuestion);
        });
    }

    if (submitBtn) {
        submitBtn.addEventListener('click', mostrarResultados);
    }

    if (closeBanner) {
        closeBanner.addEventListener('click', () => {
            if (resultadosBanner) {
                resultadosBanner.classList.remove('active');
                // Esperar a que termine la animación antes de ocultar
                setTimeout(() => {
                    resultadosBanner.style.display = 'none';
                }, 300);
            }
        });
    }
}

function initInvitacionBanner() {
    const banner = document.getElementById('invitacion-banner');
    const closeBtn = document.querySelector('.close-invitacion');
    const dontShowAgain = document.getElementById('dontShowAgain');

    if (!banner || !closeBtn) return;

    // Verificar si el banner debe mostrarse
    const bannerClosed = localStorage.getItem('bannerClosed');
    const dontShowAgainChecked = localStorage.getItem('dontShowAgain');

    if (bannerClosed && dontShowAgainChecked === 'true') {
        banner.style.display = 'none';
        return;
    } else {
        // Mostrar el banner después de un breve retraso
        setTimeout(() => {
            banner.classList.add('active');
        }, 1000);

        // Manejar el cierre del banner
        closeBtn.addEventListener('click', () => {
            banner.classList.remove('active');
            setTimeout(() => {
                banner.style.display = 'none';
            }, 300);

            // Guardar el estado de "No mostrar más"
            if (dontShowAgain && dontShowAgain.checked) {
                localStorage.setItem('dontShowAgain', 'true');
            }
            localStorage.setItem('bannerClosed', 'true');
        });

        // Manejar el checkbox de "No mostrar más"
        if (dontShowAgain) {
            dontShowAgain.addEventListener('change', (e) => {
                if (e.target.checked) {
                    localStorage.setItem('dontShowAgain', 'true');
                } else {
                    localStorage.removeItem('dontShowAgain');
                }
            });
        }
    }
}
