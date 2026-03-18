import { SimulationDef } from '@/components/ui/SimulationEngine'

export const simulationsData: SimulationDef[] = [
  // ── Sesión 1: Biomecánica Intro ────────────────────────────
  {
    classId: 1, title: 'Relación Estructura-Función Muscular', type: 'quiz',
    items: [
      { question: '¿Qué tipo de arquitectura muscular genera MAYOR FUERZA?', options: [
        { label: 'Paralela (fibras largas y alineadas)' },
        { label: 'Peniforme (fibras cortas y oblicuas)', correct: true },
        { label: 'Circular (fibras concéntricas)' },
      ], explanation: 'Los músculos peniformes agrupan más sarcómeros en paralelo gracias a su disposición oblicua, generando mayor fuerza pero menor rango de movimiento.' },
      { question: '¿Cuál es el mecanismo principal de ganancia de fuerza en las primeras 3 semanas de entrenamiento?', options: [
        { label: 'Hipertrofia muscular' },
        { label: 'Adaptación neural (reclutamiento motor)', correct: true },
        { label: 'Síntesis de proteínas miofibrilares' },
      ], explanation: 'Las primeras semanas de entrenamiento mejoran la eficiencia del reclutamiento de unidades motoras, no la masa muscular.' },
      { question: 'Un paciente con esguinces de tobillo recurrentes SIN debilidad muscular tiene un déficit de:', options: [
        { label: 'Fuerza muscular' },
        { label: 'Flexibilidad articular' },
        { label: 'Propiocepción', correct: true },
      ], explanation: 'La inestabilidad funcional sin debilidad indica daño en los mecanorreceptores capsulares, alterando la propiocepción.' },
      { question: '¿Qué modalidad biofísica activa el reflejo de vibración tónica?', options: [
        { label: 'Ultrasonido terapéutico' },
        { label: 'Vibroterapia', correct: true },
        { label: 'Diatermia de onda corta' },
      ], explanation: 'La vibroterapia transmite ondas mecánicas que estimulan los husos musculares, provocando el reflejo de vibración tónica.' },
    ]
  },

  // ── Sesión 2: Principios Biomecánicos ──────────────────────
  {
    classId: 2, title: 'Biomecánica Segmentaria', type: 'matching',
    instruction: 'Haz clic en cada fila para revelar la relación biomecánica correcta.',
    pairs: [
      { left: 'Muñeca en extensión', right: 'Flexión pasiva de dedos (tenodesis) → Máxima fuerza de agarre' },
      { left: 'Muñeca en flexión máxima', right: 'Extensión pasiva de dedos → Mínima fuerza de agarre' },
      { left: 'Contacto de talón', right: 'FRS posterior al tobillo → Momento de flexión plantar' },
      { left: 'Columna neutra + inclinación lateral', right: 'Rotación al lado OPUESTO (Fryette Tipo I)' },
      { left: 'Columna en flexión + inclinación lateral', right: 'Rotación al MISMO lado (Fryette Tipo II)' },
      { left: 'Contracción excéntrica rápida', right: 'Genera la fuerza MÁXIMA (mayor que isométrica y concéntrica)' },
    ]
  },

  // ── Sesión 3: Columna y Marcha ─────────────────────────────
  {
    classId: 3, title: 'Clasificación Postural', type: 'decision_tree',
    steps: [
      { prompt: 'Paciente oficinista de 50 años. Pelvis inclinada hacia delante, abdomen prominente. ¿Qué tipo postural presenta?', choices: [
        { label: 'Postura ideal', feedback: 'Incorrecto. La pelvis en inclinación anterior NO es una postura ideal.' },
        { label: 'Cifosis-Lordosis', feedback: '¡Correcto! Pelvis anterior + lordosis aumentada + abdominales débiles = patrón cifosis-lordosis.', correct: true, nextStep: 1 },
        { label: 'Espalda plana', feedback: 'Incorrecto. La espalda plana tiene pelvis POSTERIOR con lordosis disminuida.' },
      ]},
      { prompt: 'En esta postura, ¿qué músculos están TENSOS y cuáles DÉBILES?', choices: [
        { label: 'Tensos: Abdominales / Débiles: Psoas', feedback: 'Incorrecto. En cifosis-lordosis los abdominales están débiles, no tensos.' },
        { label: 'Tensos: Psoas y erectores / Débiles: Abdominales y glúteos', feedback: '¡Exacto! Los flexores de cadera tensos inclinan la pelvis hacia delante. Los abdominales y glúteos débiles no contrarrestan.', correct: true, nextStep: 2 },
      ]},
      { prompt: 'Este paciente tiene zancada acortada y baja rotación pélvica. ¿Cuál determinante de la marcha está afectado?', choices: [
        { label: '1er determinante: Rotación pélvica horizontal', feedback: '¡Correcto! La rotación pélvica disminuida acorta la zancada y aumenta el desplazamiento vertical del CDG → mayor gasto energético.', correct: true },
        { label: '4to determinante: Flexión precoz de rodilla', feedback: 'Incorrecto. La flexión de rodilla es un mecanismo independiente de la rotación pélvica.' },
      ]},
    ]
  },

  // ── Sesión 4: Ejercicio Terapéutico ────────────────────────
  {
    classId: 4, title: 'Prescripción FITT de Ejercicio', type: 'quiz',
    items: [
      { question: '¿Cuál es la jerarquía correcta de fuerza por tipo de contracción (mayor a menor)?', options: [
        { label: 'Isométrica > Excéntrica > Concéntrica' },
        { label: 'Excéntrica > Isométrica > Concéntrica', correct: true },
        { label: 'Concéntrica > Isométrica > Excéntrica' },
      ], explanation: 'La fuerza máxima se genera durante contracciones excéntricas rápidas, seguidas de isométricas, concéntricas lentas y concéntricas rápidas.' },
      { question: '¿Cuántas semanas de entrenamiento se requieren para hipertrofia muscular real?', options: [
        { label: '1-2 semanas' },
        { label: '6-7 semanas', correct: true },
        { label: '12-16 semanas' },
      ], explanation: 'La hipertrofia muscular verdadera requiere habitualmente entre 6 y 7 semanas de entrenamiento continuo de fuerza.' },
      { question: '¿Qué función cumple el órgano tendinoso de Golgi al mantener un estiramiento >6 segundos?', options: [
        { label: 'Aumenta la contracción muscular refleja' },
        { label: 'Inhibe la contracción, facilitando la relajación', correct: true },
        { label: 'Activa las fibras tipo 2B' },
      ], explanation: 'El OTG inhibe la contracción muscular facilitando la relajación, lo que permite una mayor elongación del músculo.' },
    ]
  },

  // ── Sesión 5: Prescripción de Ejercicio ────────────────────
  {
    classId: 5, title: 'Calculadora DeLorme', type: 'calculator',
    description: 'Ingresa la Repetición Máxima a 10 repeticiones (10-RM) para calcular las cargas del protocolo DeLorme y Oxford.',
    fields: [
      { label: '10-RM del paciente', unit: 'kg', defaultValue: 10 },
    ],
    results: [
      { label: 'DeLorme Serie 1 (50%)', formula: '$0 * 0.5' },
      { label: 'DeLorme Serie 2 (75%)', formula: '$0 * 0.75' },
      { label: 'DeLorme Serie 3 (100%)', formula: '$0 * 1.0' },
      { label: 'Oxford Serie 1 (100%)', formula: '$0 * 1.0' },
      { label: 'Oxford Serie 2 (75%)', formula: '$0 * 0.75' },
      { label: 'Oxford Serie 3 (50%)', formula: '$0 * 0.5' },
    ]
  },

  // ── Sesión 6: Terapias Manuales ────────────────────────────
  {
    classId: 6, title: 'Selección de Técnica Manual', type: 'decision_tree',
    steps: [
      { prompt: 'Paciente con dolor cervical irradiado a C6, Spurling (+). ¿Cuál es su primera evaluación?', choices: [
        { label: 'Hay signos de radiculopatía activa', feedback: 'Correcto. La irradiación dermatómica y Spurling (+) confirman afectación radicular.', correct: true, nextStep: 1 },
        { label: 'Solo es dolor muscular referido', feedback: 'Incorrecto. La distribución dermatómica y Spurling (+) indican compromiso radicular.' },
      ]},
      { prompt: 'Con radiculopatía activa, ¿HVLA (manipulación) está indicada?', choices: [
        { label: 'Sí, es la técnica de elección', feedback: 'Incorrecto. HVLA está CONTRAINDICADA en radiculopatía activa por riesgo de exacerbar la compresión.' },
        { label: 'No, está contraindicada', feedback: '¡Correcto! El riesgo de empeorar la compresión radicular descarta HVLA.', correct: true, nextStep: 2 },
      ]},
      { prompt: '¿Qué técnica INDIRECTA sería la más segura para el espasmo defensivo?', choices: [
        { label: 'Counterstrain (90 s de hiperacortamiento pasivo)', feedback: '¡Exacto! Counterstrain reduce la actividad gamma con un perfil de seguridad excelente.', correct: true },
        { label: 'Energía Muscular con fuerza máxima', feedback: 'La EM es válida pero con contracción SUAVE, no máxima, en presencia de radiculopatía.' },
      ]},
    ]
  },

  // ── Sesión 7: Medios Físicos ───────────────────────────────
  {
    classId: 7, title: 'Selector de Medio Físico', type: 'quiz',
    items: [
      { question: 'Paciente con artroplastia total de rodilla (metal + polietileno). ¿Qué modalidad está PROHIBIDA?', options: [
        { label: 'Crioterapia' },
        { label: 'Onda corta (diatermia)', correct: true },
        { label: 'Paquete caliente' },
      ], explanation: 'La Regla de Oro: "Sin agua ni metal". La onda corta está absolutamente contraindicada con implantes metálicos.' },
      { question: '¿Por qué el ultrasonido es seguro sobre metal pero NO sobre plástico?', options: [
        { label: 'El metal refleja las ondas completamente' },
        { label: 'El metal conduce rápido el calor; el plástico lo concentra peligrosamente', correct: true },
        { label: 'El plástico absorbe toda la energía ultrasónica' },
      ], explanation: 'El metal conduce el calor rápidamente disipándolo. El polietileno (plástico) concentra la energía, generando sobrecalentamiento localizado.' },
      { question: '¿Qué efecto celular produce la microcorriente (MIC)?', options: [
        { label: 'Aumenta síntesis de ATP y activa células satélite', correct: true },
        { label: 'Bloquea la conducción nerviosa completamente' },
        { label: 'Produce cavitación ultrasónica' },
      ], explanation: 'La MIC aumenta la síntesis de ATP hasta 500% y activa células satélite para la regeneración tisular.' },
    ]
  },

  // ── Sesión 8: Integración ──────────────────────────────────
  {
    classId: 8, title: 'Plan Terapéutico Integrador', type: 'decision_tree',
    steps: [
      { prompt: 'Operario con lumbalgia aguda post-hiperflexión. L3 rota e inclina a la derecha. ¿Qué tipo mecánico es?', choices: [
        { label: 'Tipo I (posición neutra)', feedback: 'Incorrecto. En Tipo I la rotación e inclinación son a LADOS OPUESTOS.' },
        { label: 'Tipo II (flexo-extensión)', feedback: '¡Correcto! En Tipo II (tras hiperflexión), rotación e inclinación van al MISMO lado.', correct: true, nextStep: 1 },
      ]},
      { prompt: '¿Cuál es la primera fase del tratamiento?', choices: [
        { label: 'Preparatoria: Paquete caliente 20 min', feedback: '¡Correcto! El calor reduce el espasmo y aumenta la distensibilidad del colágeno, preparando para la corrección.', correct: true, nextStep: 2 },
        { label: 'HVLA directa al segmento', feedback: 'Incorrecto. La manipulación directa sin preparación tisular previa es agresiva en fase aguda.' },
      ]},
      { prompt: '¿Qué técnica correctiva aplicar?', choices: [
        { label: 'Energía Muscular (EM): Barrera → Isométrica → Relajación → Avance', feedback: '¡Perfecto! La EM usa la relajación postisométrica para corregir de forma segura y controlada.', correct: true },
        { label: 'Estiramiento balístico forzado', feedback: 'Incorrecto. Los estiramientos balísticos están contraindicados en dolor agudo lumbar.' },
      ]},
    ]
  },

  // ── Sesión 9: Ortesis ──────────────────────────────────────
  {
    classId: 9, title: 'Prescripción de AFO', type: 'decision_tree',
    steps: [
      { prompt: 'Paciente con pie caído (debilidad de dorsiflexores). ¿Qué nivel ortésico necesita?', choices: [
        { label: 'AFO (Tobillo-Pie)', feedback: '¡Correcto! El AFO controla el tobillo y puede influir en la rodilla.', correct: true, nextStep: 1 },
        { label: 'KAFO (Rodilla-Tobillo-Pie)', feedback: 'No necesariamente. KAFO solo si hay debilidad significativa de cuádriceps además.' },
      ]},
      { prompt: '¿El cuádriceps del paciente es funcional (≥4/5)?', choices: [
        { label: 'Sí, cuádriceps funcional', feedback: 'AFO con articulación libre o resorte para asistir la dorsiflexión sin restringir la rodilla.', correct: true, nextStep: 2 },
        { label: 'No, cuádriceps débil (<3/5)', feedback: 'AFO RÍGIDA: se bloquea la dorsiflexión para forzar la FRS anterior a la rodilla → extensión pasiva.', correct: true, nextStep: 2 },
      ]},
      { prompt: '¿Hay espasticidad en flexores plantares?', choices: [
        { label: 'Sí → AFO rígida con tope de flexión plantar', feedback: '¡Correcto! El tope previene la espasticidad de generar un recurvatum.', correct: true },
        { label: 'No → Fibra de carbono dinámica', feedback: '¡Correcto! Sin espasticidad, la fibra de carbono ofrece respuesta elástica y ligereza.', correct: true },
      ]},
    ]
  },

  // ── Sesión 10: Ortesis de Extremidades ─────────────────────
  {
    classId: 10, title: 'Prescriptor Rápido de Ortesis', type: 'matching',
    instruction: 'Haz clic en cada diagnóstico para revelar la ortesis correcta y su mecanismo.',
    pairs: [
      { left: 'Lumbalgia mecánica aguda', right: 'LSO (corsé) → Aumenta presión intraabdominal → descarga discos' },
      { left: 'Túnel carpiano', right: 'WHO en 0-5° extensión → Evita flexión nocturna → reduce presión en nervio mediano' },
      { left: 'Tendinitis De Quervain', right: 'Espica de pulgar → Inmoviliza 1er compartimento dorsal' },
      { left: 'Epicondilitis lateral', right: 'Cincha antebraquial → Cambia punto de tensión muscular' },
      { left: 'Gonartrosis medial', right: 'KO "unloader" → Valgiza → Descarga compartimento medial' },
      { left: 'Fractura por compresión vertebral', right: 'TLSO Jewett → Hiperextensión por 3 puntos' },
    ]
  },

  // ── Sesión 11: Prótesis ────────────────────────────────────
  {
    classId: 11, title: 'Configurador de Prótesis', type: 'matching',
    instruction: 'Relaciona cada nivel funcional K con los componentes protésicos apropiados.',
    pairs: [
      { left: 'K1 (Hogar)', right: 'Pie SACH + Rodilla mecánica simple + Arnés' },
      { left: 'K2 (Comunidad limitada)', right: 'Pie multiaxial + Rodilla con freno + Pin lock' },
      { left: 'K3 (Cadencia variable)', right: 'Pie respuesta dinámica + Rodilla hidráulica + Vacío' },
      { left: 'K4 (Atletismo)', right: 'Pie de alto rendimiento + Rodilla microprocesador + Succión' },
      { left: 'Encaje transtibial', right: 'PTB (apoyo tendón rotuliano) o TSB (superficie total)' },
      { left: 'Encaje transfemoral', right: 'Contención isquiática → Bloqueo óseo evita abducción' },
    ]
  },

  // ── Sesión 12: Ayudas Técnicas ─────────────────────────────
  {
    classId: 12, title: 'Configurador de Silla de Ruedas', type: 'decision_tree',
    steps: [
      { prompt: 'Paciente con tetraplejia C6 (tenodesis funcional, sin tríceps). ¿Qué tipo de silla necesita?', choices: [
        { label: 'Manual ultraligera', feedback: 'Incorrecto. Sin tríceps, el paciente no puede generar fuerza suficiente para propulsar una manual.' },
        { label: 'Eléctrica con joystick adaptado', feedback: '¡Correcto! La falta de tríceps impide la propulsión manual. El joystick adaptado es funcional con tenodesis.', correct: true, nextStep: 1 },
      ]},
      { prompt: '¿Qué sistema de asiento para redistribuir presión?', choices: [
        { label: 'Inclinación eléctrica (Tilt)', feedback: '¡Correcto! Tilt gira en bloque → redistribuye presión SIN generar cizallamiento.', correct: true, nextStep: 2 },
        { label: 'Reclinación estándar', feedback: 'La reclinación abre el ángulo asiento-respaldo y SÍ genera cizallamiento. No ideal para autodisipación.' },
      ]},
      { prompt: 'El paciente tiene antecedente de úlcera sacra. ¿Qué cojín?', choices: [
        { label: 'Espuma estándar', feedback: 'Insuficiente para alto riesgo de úlcera.' },
        { label: 'Aire (ROHO)', feedback: '¡Correcto! Los cojines de aire ofrecen la mejor redistribución de presión para pacientes de alto riesgo.', correct: true },
        { label: 'Gel básico', feedback: 'Gel es bueno pero inferior al aire para alto riesgo de úlcera recurrente.' },
      ]},
    ]
  },

  // ── Sesión 13: Imagenología ────────────────────────────────
  {
    classId: 13, title: 'Correlación Clínica-Imagen', type: 'quiz',
    items: [
      { question: 'Paciente con clínica de artrosis y RX Grado 1 (K-L). ¿Qué hacer?', options: [
        { label: 'Esperar a que la RX muestre Grado 3 para iniciar tratamiento' },
        { label: 'Iniciar rehabilitación por clínica (el dolor precede a la imagen)', correct: true },
        { label: 'Solicitar RM inmediata' },
      ], explanation: 'Los cambios estructurales óseos tardan meses/años en aparecer. El dolor articular es el primer signo y justifica el inicio de tratamiento.' },
      { question: '¿Cuál es el umbral de área transversal ecográfica para neuropatía cubital?', options: [
        { label: '>5.0 mm²' },
        { label: '>9.8 mm²', correct: true },
        { label: '>15.0 mm²' },
      ], explanation: 'Un área transversal >9.8 mm² en el túnel cubital sugiere neuropatía por atrapamiento del nervio cubital.' },
      { question: '¿Cuál es la principal ventaja de la ecografía sobre la RX?', options: [
        { label: 'Mayor resolución ósea' },
        { label: 'Evaluación en tiempo real sin radiación de tejidos blandos', correct: true },
        { label: 'Mejor penetración en hueso cortical' },
      ], explanation: 'La ecografía permite evaluación dinámica en tiempo real de tendones, nervios y derrames sin exposición a radiación.' },
    ]
  },

  // ── Sesión 14: Imagenología Columna ────────────────────────
  {
    classId: 14, title: 'Analizador de RM Lumbar', type: 'decision_tree',
    steps: [
      { prompt: 'La RM muestra hernia extruida L5-S1 comprimiendo raíz. ¿Qué evalúas primero?', choices: [
        { label: 'Correlación clínica: ¿Hay dolor radicular y/o déficit motor?', feedback: '¡Correcto! Siempre correlacionar imagen con clínica antes de tomar decisiones.', correct: true, nextStep: 1 },
        { label: 'Solicitar cirugía inmediata', feedback: 'Incorrecto. 30-50% de RM lumbares en sanos muestran hernias asintomáticas.' },
      ]},
      { prompt: 'El paciente tiene dolor AXIAL (mecánico). Neurología normal. ¿Operas?', choices: [
        { label: 'No. Es un falso positivo en RM. Tratar dolor axial con ejercicio + terapia manual.', feedback: '¡Correcto! Sin correlación clínica (dolor radicular o déficit motor), la hernia en RM es un hallazgo incidental.', correct: true },
        { label: 'Sí, la hernia en RM justifica cirugía.', feedback: 'Incorrecto. Operar un hallazgo incidental expone al paciente a riesgos innecesarios.' },
      ]},
    ]
  },

  // ── Sesión 15: Electrodiagnóstico ──────────────────────────
  {
    classId: 15, title: 'Señales Electrodiagnósticas', type: 'matching',
    instruction: 'Haz clic para revelar el significado de cada hallazgo electrodiagnóstico.',
    pairs: [
      { left: 'PAMC baja amplitud', right: 'Pérdida AXONAL motora' },
      { left: 'PANS baja amplitud', right: 'Pérdida AXONAL sensitiva' },
      { left: 'Velocidad de conducción lenta', right: 'DESMIELINIZACIÓN segmentaria' },
      { left: 'Fibrilaciones en reposo', right: 'DENERVACIÓN activa (músculo sin inervación)' },
      { left: 'Sonido "bombardero en picado"', right: 'Descarga MIOTÓNICA (no confundir con denervación)' },
      { left: 'Actividad irregular continua', right: 'Placa terminal NORMAL (no patológico)' },
    ]
  },

  // ── Sesión 16: Interpretación Final ────────────────────────
  {
    classId: 16, title: 'Radiculopatía vs Atrapamiento', type: 'quiz',
    items: [
      { question: 'Paciente con hormigueo en dedo meñique. PANS cubital está BAJO. ¿Diagnóstico más probable?', options: [
        { label: 'Radiculopatía C8' },
        { label: 'Atrapamiento del nervio cubital', correct: true },
        { label: 'Miopatía' },
      ], explanation: 'En radiculopatía, el PANS es NORMAL (lesión preganglionar). Un PANS bajo indica lesión postganglionar = atrapamiento.' },
      { question: '¿Por qué la ENG sensitiva es NORMAL en radiculopatía?', options: [
        { label: 'Porque la lesión es preganglionar y el ganglio dorsal preserva el axón periférico', correct: true },
        { label: 'Porque las fibras sensitivas son más resistentes al daño' },
        { label: 'Porque la EMG compensa la señal' },
      ], explanation: 'En radiculopatía, la lesión ocurre antes del ganglio dorsal (preganglionar). El cuerpo neuronal sensitivo en el ganglio mantiene vivo el axón periférico.' },
      { question: '¿Cuál es el hallazgo EMG característico de miopatía?', options: [
        { label: 'PAUM largos y de alta amplitud' },
        { label: 'PAUM pequeños, cortos, polifásicos con reclutamiento precoz', correct: true },
        { label: 'Silencio eléctrico completo' },
      ], explanation: 'En miopatía, las fibras musculares se pierden dentro de las unidades motoras, generando PAUM pequeños. El reclutamiento es precoz: muchas unidades para poco esfuerzo.' },
      { question: '¿Qué hallazgo diferencia atrapamiento cubital en codo de una radiculopatía C8 en la EMG?', options: [
        { label: 'EMG anormal en flexor cubital del carpo y paraspinal C8', correct: true },
        { label: 'EMG anormal solo en primer interóseo dorsal' },
        { label: 'ENG motora completamente normal' },
      ], explanation: 'En radiculopatía C8, la EMG muestra anormalidades en músculos inervados por la raíz C8 pero de nervios DIFERENTES (cubital Y paraspinal), lo que no ocurre en atrapamiento cubital puro.' },
    ]
  },
]
