import { EvalDef } from '@/components/ui/EvalEngine'

export const sessions13_14: EvalDef[] = [
  // ── Sesión 13 ──────────────────────────────────────────────
  {
    classId: 13, title: 'Evaluación: Imagenología Básica',
    questions: [
      // Existing 7
      { question: '¿Qué tejido se ve MÁS BLANCO en una radiografía convencional?', options: [
        { label: 'Aire' }, { label: 'Hueso cortical', correct: true }, { label: 'Grasa' }, { label: 'Músculo' },
      ], explanation: 'El hueso absorbe más rayos X = se ve blanco (radioopaco).' },
      { question: '¿Qué hernia discal NO toca la raíz nerviosa?', options: [
        { label: 'Foraminal' }, { label: 'Central (mediana)', correct: true }, { label: 'Posterolateral' }, { label: 'Extraforaminal' },
      ], explanation: 'La hernia central no comprime una raíz específica, sino que afecta la médula espinal.' },
      { question: '¿Cuál es el gold standard para evaluar lesiones ligamentarias de rodilla?', options: [
        { label: 'Radiografía' }, { label: 'RM', correct: true }, { label: 'TAC' }, { label: 'Ecografía' },
      ], explanation: 'La RM es el gold standard para tejidos blandos: ligamentos, meniscos y cartílago.' },
      { question: '¿Qué ventaja tiene la ecografía sobre la RM?', options: [
        { label: 'Mayor resolución ósea' }, { label: 'Evaluación dinámica en tiempo real', correct: true }, { label: 'Mejor visualización de médula espinal' }, { label: 'Mayor penetración en hueso' },
      ], explanation: 'La ecografía permite evaluar estructuras en movimiento y tiempo real.' },
      { question: '¿Qué hernia discal es responsable de la mayoría de las radiculopatías?', options: [
        { label: 'Central' }, { label: 'Posterolateral', correct: true }, { label: 'Anterior' }, { label: 'Intraósea' },
      ], explanation: 'La hernia posterolateral es la más común y comprime la raíz nerviosa en el receso lateral.' },
      { question: '¿Qué estudio requiere inyección de contraste intratecal?', options: [
        { label: 'RM estándar' }, { label: 'Mielografía', correct: true }, { label: 'Ecografía' }, { label: 'Radiografía simple' },
      ], explanation: 'La mielografía inyecta contraste en el canal espinal para evaluar compresión neural.' },
      { question: '¿Qué imagen es hiperintensa en T2?', options: [
        { label: 'Hueso cortical' }, { label: 'Líquido (edema, líquido sinovial)', correct: true }, { label: 'Tendón normal' }, { label: 'Calcificación' },
      ], explanation: 'El líquido se ve brillante (hiperintenso) en secuencias T2 de RM.' },
      // New 33
      { question: '¿Qué tipo de radiación usa la radiografía convencional?', options: [
        { label: 'Ultrasonido' }, { label: 'Rayos X', correct: true }, { label: 'Ondas de radio' }, { label: 'Infrarrojos' },
      ], explanation: 'La radiografía convencional usa rayos X (radiación ionizante).' },
      { question: '¿Qué tejido se ve NEGRO en radiografía?', options: [
        { label: 'Hueso' }, { label: 'Aire', correct: true }, { label: 'Metal' }, { label: 'Grasa' },
      ], explanation: 'El aire no absorbe rayos X y se ve negro (radiolúcido) en la placa.' },
      { question: '¿Qué orden de densidad siguen los tejidos en radiografía (de blanco a negro)?', options: [
        { label: 'Aire → Grasa → Hueso → Metal' }, { label: 'Metal → Hueso → Agua/Músculo → Grasa → Aire', correct: true }, { label: 'Grasa → Músculo → Hueso → Aire' }, { label: 'Hueso → Aire → Metal → Grasa' },
      ], explanation: 'De radio-opaco a radio-lúcido: metal > hueso > agua/músculo > grasa > aire.' },
      { question: '¿Para qué patología es superior la TAC sobre la RM?', options: [
        { label: 'Lesiones de menisco' }, { label: 'Fracturas óseas complejas', correct: true }, { label: 'Desgarro de ligamentos' }, { label: 'Lesiones musculares' },
      ], explanation: 'La TAC es superior para evaluar el detalle óseo en fracturas complejas.' },
      { question: '¿Qué es la señal T1 en RM?', options: [
        { label: 'Secuencia que resalta el líquido' }, { label: 'Secuencia que muestra la anatomía con grasa brillante', correct: true }, { label: 'Secuencia de difusión' }, { label: 'Secuencia con contraste' },
      ], explanation: 'En T1, la grasa se ve brillante y el agua se ve oscura (buena para anatomía).' },
      { question: '¿Qué es la señal T2 en RM?', options: [
        { label: 'Muestra la anatomía ósea' }, { label: 'Resalta el líquido (agua se ve brillante)', correct: true }, { label: 'Solo muestra grasa' }, { label: 'Solo muestra metal' },
      ], explanation: 'En T2, el líquido se ve brillante (ideal para detectar edema, inflamación, derrames).' },
      { question: '¿Qué secuencia de RM detecta mejor el edema óseo?', options: [
        { label: 'T1' }, { label: 'STIR (Short Tau Inversion Recovery)', correct: true }, { label: 'TAC' }, { label: 'Radiografía' },
      ], explanation: 'STIR suprime la señal de la grasa y resalta el edema óseo.' },
      { question: '¿Qué gradación se usa para las lesiones de los tendones?', options: [
        { label: 'Grado I a III (leve a completa)', correct: true }, { label: 'Solo normal o roto' }, { label: 'Por color' }, { label: 'Por tamaño' },
      ], explanation: 'Las lesiones tendinosas se gradan: grado I (leve), II (parcial), III (rotura completa).' },
      { question: '¿Qué tipo de hernia discal es la más frecuente?', options: [
        { label: 'Central' }, { label: 'Posterolateral', correct: true }, { label: 'Foraminal' }, { label: 'Anterior' },
      ], explanation: 'La hernia posterolateral es la más frecuente por la debilidad del anillo fibroso en esa zona.' },
      { question: '¿Qué ventaja tiene la TAC sobre la RM?', options: [
        { label: 'No usa radiación' }, { label: 'Mayor velocidad y mejor resolución ósea', correct: true }, { label: 'Mejor para tejidos blandos' }, { label: 'Es más barata siempre' },
      ], explanation: 'La TAC es más rápida y ofrece mejor resolución ósea que la RM.' },
      { question: '¿Qué señal tiene el tendón normal en RM?', options: [
        { label: 'Hiperintenso en T2' }, { label: 'Hipointenso (oscuro) en todas las secuencias', correct: true }, { label: 'Brillante en T1' }, { label: 'Variable' },
      ], explanation: 'El tendón normal se ve oscuro (hipointenso) en todas las secuencias de RM.' },
      { question: '¿Qué estructura es mejor evaluada por ecografía MSK?', options: [
        { label: 'Hueso profundo' }, { label: 'Tendones superficiales', correct: true }, { label: 'Médula espinal' }, { label: 'Cartílago articular profundo' },
      ], explanation: 'La ecografía MSK es excelente para tendones superficiales y bursas.' },
      { question: '¿Qué es la clasificación de Modic?', options: [
        { label: 'Clasificación de fracturas' }, { label: 'Clasificación de cambios degenerativos en los platillos vertebrales', correct: true }, { label: 'Clasificación de escoliosis' }, { label: 'Clasificación de estenosis' },
      ], explanation: 'Modic clasifica los cambios de señal en los platillos vertebrales en grado I, II y III.' },
      { question: '¿Qué indica Modic I?', options: [
        { label: 'Degeneración grasa' }, { label: 'Edema/inflamación aguda', correct: true }, { label: 'Esclerosis ósea' }, { label: 'Normal' },
      ], explanation: 'Modic I indica inflamación aguda con edema en los platillos vertebrales.' },
      { question: '¿Qué indica Modic II?', options: [
        { label: 'Edema agudo' }, { label: 'Degeneración grasa (infiltración grasa)', correct: true }, { label: 'Fractura' }, { label: 'Infección' },
      ], explanation: 'Modic II indica degeneración grasa (infiltración grasa crónica) en los platillos.' },
      { question: '¿Qué indica Modic III?', options: [
        { label: 'Edema agudo' }, { label: 'Degeneración grasa' }, { label: 'Esclerosis ósea', correct: true }, { label: 'Normal' },
      ], explanation: 'Modic III indica esclerosis ósea (calcificación) subcondral.' },
      { question: '¿Qué contraindicación tiene la RM?', options: [
        { label: 'Alergias' }, { label: 'Implantes metálicos ferromagnéticos (marcapasos, algunos clips)', correct: true }, { label: 'Obesidad' }, { label: 'Claustrofobia' },
      ], explanation: 'Los implantes ferromagnéticos son contraindicación absoluta por el campo magnético.' },
      { question: '¿Qué estudio de imagen NO usa radiación ionizante?', options: [
        { label: 'Radiografía' }, { label: 'RM', correct: true }, { label: 'TAC' }, { label: 'Mielografía' },
      ], explanation: 'La RM usa campos magnéticos y radiofrecuencia, sin radiación ionizante.' },
      { question: '¿Qué tipo de hernia comprime la raíz en el foramen?', options: [
        { label: 'Central' }, { label: 'Foraminal', correct: true }, { label: 'Anterolateral' }, { label: 'Intraósea' },
      ], explanation: 'La hernia foraminal comprime la raíz nerviosa dentro del agujero de conjunción.' },
      { question: '¿En qué patología NO es necesario hacer imagen de rutina?', options: [
        { label: 'Fractura vertebral sospechada' }, { label: 'Lumbalgia mecánica simple < 6 semanas', correct: true }, { label: 'Déficit neurológico progresivo' }, { label: 'Sospecha de tumor' },
      ], explanation: 'La lumbalgia mecánica simple no requiere imagen en las primeras 6 semanas si no hay banderas rojas.' },
      { question: '¿Qué "bandera roja" en lumbalgia indica necesidad de imagen?', options: [
        { label: 'Dolor que mejora con actividad' }, { label: 'Déficit neurológico progresivo,fiebre, pérdida de peso', correct: true }, { label: 'Rigidez matutina leve' }, { label: 'Dolor de inicio gradual' },
      ], explanation: 'Banderas rojas como déficit neurológico, fiebre o pérdida de peso requieren imagen urgente.' },
      { question: '¿Qué imagen muestra mejor el manguito rotador?', options: [
        { label: 'Radiografía simple' }, { label: 'RM o ecografía', correct: true }, { label: 'TAC simple' }, { label: 'Mielografía' },
      ], explanation: 'La RM y la ecografía MSK son las mejores para evaluar el manguito rotador.' },
      { question: '¿Qué hallazgo en RM sugiere desgarro del manguito rotador?', options: [
        { label: 'Señal hipointensa uniforme' }, { label: 'Señal hiperintensa en T2 dentro del tendón', correct: true }, { label: 'Calcificación' }, { label: 'Señal normal' },
      ], explanation: 'Una señal hiperintensa en T2 dentro del tendón sugiere edema o desgarro.' },
      { question: '¿Para evaluar la estenosis del canal raquídeo, qué estudio es preferible?', options: [
        { label: 'Radiografía simple' }, { label: 'RM', correct: true }, { label: 'Ecografía' }, { label: 'Gammagrafía' },
      ], explanation: 'La RM es el estudio de elección para evaluar estenosis del canal raquídeo y compresión neural.' },
      { question: '¿Qué secuencia de RM es mejor para anatomía detallada sin patología?', options: [
        { label: 'T2' }, { label: 'T1', correct: true }, { label: 'STIR' }, { label: 'Difusión' },
      ], explanation: 'T1 ofrece el mejor contraste anatómico con grasa brillante y buena definición de estructuras.' },
      { question: '¿Qué estudio de imagen usa transductores para generar imagen?', options: [
        { label: 'TAC' }, { label: 'Ecografía (ultrasonido diagnóstico)', correct: true }, { label: 'Radiografía' }, { label: 'RM' },
      ], explanation: 'La ecografía usa transductores piezoeléctricos que emiten y reciben ondas de ultrasonido.' },
      { question: '¿Qué desventaja tiene la ecografía MSK?', options: [
        { label: 'Uso de radiación' }, { label: 'Es operador-dependiente', correct: true }, { label: 'No puede ver tendones' }, { label: 'Requiere contraste' },
      ], explanation: 'La ecografía es altamente operador-dependiente; la calidad depende de la experiencia del operador.' },
    ]
  },
  // ── Sesión 14 ──────────────────────────────────────────────
  {
    classId: 14, title: 'Evaluación: Imagenología Avanzada',
    questions: [
      // Existing 7
      { question: '¿Cuál es el signo más precoz de OA de rodilla en Rx?', options: [
        { label: 'Osteofitos' }, { label: 'Pinzamiento del espacio articular', correct: true }, { label: 'Esclerosis subcondral' }, { label: 'Geodos' },
      ], explanation: 'La reducción del espacio articular (pérdida de cartílago) es el primer signo radiográfico.' },
      { question: '¿Qué región de la rodilla se afecta más por OA?', options: [
        { label: 'Patelofemoral' }, { label: 'Compartimento medial', correct: true }, { label: 'Compartimento lateral' }, { label: 'Todas por igual' },
      ], explanation: 'La gonartrosis afecta más al compartimento medial por mayor carga mecánica.' },
      { question: '¿Cómo se clasifica una osteoartritis de rodilla KL grado II?', options: [
        { label: 'Sin signos radiográficos' }, { label: 'Osteofitos definidos con posible pinzamiento', correct: true }, { label: 'Osteofitos grandes con pinzamiento completo' }, { label: 'Solo sospecha' },
      ], explanation: 'KL II: osteofitos definidos con posible reducción parcial del espacio articular.' },
      { question: '¿Qué signo diferencia artrosis de artritis en imagen?', options: [
        { label: 'Ambas lucen igual' }, { label: 'Artrosis: osteofitos; Artritis: erosiones', correct: true }, { label: 'Artrosis tiene erosiones' }, { label: 'Artritis tiene osteofitos' },
      ], explanation: 'La artrosis produce osteofitos (formación ósea); la artritis produce erosiones (destrucción ósea).' },
      { question: '¿Qué región del menisco tiene mayor potencial de cicatrización?', options: [
        { label: 'Zona blanca (central)' }, { label: 'Zona roja-roja (periférica)', correct: true }, { label: 'Toda es igual' }, { label: 'El menisco no cicatriza' },
      ], explanation: 'La zona roja-roja (periférica) tiene irrigación sanguínea que permite la cicatrización.' },
      { question: '¿Qué clasificación se usa para artrosis de rodilla en Rx?', options: [
        { label: 'Frankel' }, { label: 'Kellgren-Lawrence', correct: true }, { label: 'AO/OTA' }, { label: 'Pfirrmann' },
      ], explanation: 'La clasificación de Kellgren-Lawrence (KL I-IV) es el estándar para artrosis de rodilla en Rx.' },
      { question: '¿Dónde se produce la mayoría de las lesiones del manguito rotador?', options: [
        { label: 'Inserción del subescapular' }, { label: 'Inserción del supraespinoso', correct: true }, { label: 'Tendón del bíceps' }, { label: 'Infraespinoso' },
      ], explanation: 'La gran mayoría de las lesiones del manguito ocurren en la inserción del supraespinoso.' },
      // New 33
      { question: '¿Qué es la escala de Kellgren-Lawrence?', options: [
        { label: 'Clasificación de fracturas' }, { label: 'Clasificación radiográfica de artrosis (grados 0-IV)', correct: true }, { label: 'Clasificación de escoliosis' }, { label: 'Clasificación neurológica' },
      ], explanation: 'KL clasifica la artrosis en radiografía de 0 (normal) a IV (severa).' },
      { question: '¿Qué describe KL grado 0?', options: [
        { label: 'Osteofitos mínimos' }, { label: 'Radiografía normal, sin cambios', correct: true }, { label: 'Pinzamiento moderado' }, { label: 'Destrucción total' },
      ], explanation: 'KL 0 = radiografía normal sin signos de artrosis.' },
      { question: '¿Qué describe KL grado IV?', options: [
        { label: 'Solo osteofitos mínimos' }, { label: 'Osteofitos grandes, espacio articular abolido, deformidad', correct: true }, { label: 'Sin cambios' }, { label: 'Solo pinzamiento leve' },
      ], explanation: 'KL IV = artrosis severa con osteofitos grandes, espacio abolido y deformidad ósea.' },
      { question: '¿Qué son los geodos en la artrosis?', options: [
        { label: 'Osteofitos' }, { label: 'Quistes subcondrales', correct: true }, { label: 'Calcificaciones de menisco' }, { label: 'Derrames articulares' },
      ], explanation: 'Los geodos son quistes subcondrales que aparecen en la artrosis avanzada.' },
      { question: '¿Qué hallazgo radiográfico indica artrosis y no artritis?', options: [
        { label: 'Erosiones periarticulares' }, { label: 'Osteofitos marginales', correct: true }, { label: 'Osteopenia yuxtaarticular' }, { label: 'Anquilosis' },
      ], explanation: 'Los osteofitos son hallazgo de artrosis; las erosiones son hallazgo de artritis.' },
      { question: '¿Qué zona del menisco carece de irrigación?', options: [
        { label: 'Zona roja-roja' }, { label: 'Zona blanca-blanca (central)', correct: true }, { label: 'Zona roja-blanca' }, { label: 'Todo el menisco' },
      ], explanation: 'La zona blanca-blanca (central) no tiene irrigación sanguínea y no cicatriza.' },
      { question: '¿Qué tendón del manguito rotador se lesiona con más frecuencia?', options: [
        { label: 'Subescapular' }, { label: 'Supraespinoso', correct: true }, { label: 'Teres menor' }, { label: 'Infraespinoso' },
      ], explanation: 'El supraespinoso es el tendón del manguito más frecuentemente lesionado.' },
      { question: '¿Cómo se ve un desgarro completo de tendón en RM T2?', options: [
        { label: 'Oscuro' }, { label: 'Señal hiperintensa (brillante) con discontinuidad', correct: true }, { label: 'Normal' }, { label: 'Calcificado' },
      ], explanation: 'Un desgarro completo muestra señal hiperintensa en T2 con interrupción de las fibras.' },
      { question: '¿Qué es la zona rojo-blanca del menisco?', options: [
        { label: 'Zona totalmente avascular' }, { label: 'Zona de transición con irrigación parcial', correct: true }, { label: 'Zona totalmente vascular' }, { label: 'No existe tal zona' },
      ], explanation: 'La zona rojo-blanca tiene irrigación parcial y potencial de cicatrización variable.' },
      { question: '¿Qué signo radiográfico indica esclerosis subcondral?', options: [
        { label: 'Hueso más oscuro' }, { label: 'Hueso más denso (más blanco) bajo la superficie articular', correct: true }, { label: 'Hueso ausente' }, { label: 'Fractura' },
      ], explanation: 'La esclerosis subcondral se ve como aumento de densidad (radiopacidad) del hueso debajo del cartílago.' },
      { question: '¿Qué articulación se evalúa con la vista AP en carga?', options: [
        { label: 'Hombro' }, { label: 'Rodilla', correct: true }, { label: 'Muñeca' }, { label: 'Tobillo' },
      ], explanation: 'La radiografía AP en carga de rodilla muestra el verdadero espacio articular funcional.' },
      { question: '¿Por qué es importante la radiografía en carga para la rodilla?', options: [
        { label: 'Solo por estética' }, { label: 'Porque muestra el espacio articular real bajo estrés funcional', correct: true }, { label: 'No es importante' }, { label: 'Solo para fracturas' },
      ], explanation: 'La carga muestra el verdadero pinzamiento articular, que se subestima en radiografías sin carga.' },
      { question: '¿Qué clasificación se usa para degeneración discal en RM?', options: [
        { label: 'Kellgren-Lawrence' }, { label: 'Pfirrmann', correct: true }, { label: 'AO/OTA' }, { label: 'Frankel' },
      ], explanation: 'La clasificación de Pfirrmann graúa la degeneración discal en RM en grados I a V.' },
      { question: '¿Qué describe Pfirrmann grado I?', options: [
        { label: 'Disco destruido' }, { label: 'Disco normal (hiperintenso homogéneo en T2)', correct: true }, { label: 'Disco deshidratado' }, { label: 'Hernia franca' },
      ], explanation: 'Pfirrmann I = disco normal con señal hiperintensa homogénea en T2.' },
      { question: '¿Qué describe Pfirrmann grado V?', options: [
        { label: 'Disco normal' }, { label: 'Disco colapsado con espacio perdido', correct: true }, { label: 'Disco con leve deshidratación' }, { label: 'Disco con hernia lateral' },
      ], explanation: 'Pfirrmann V = disco colapsado con pérdida total del espacio discal e hipointenso en T2.' },
      { question: '¿Qué representan los osteofitos?', options: [
        { label: 'Inflamación aguda' }, { label: 'Formación ósea reparativa en los márgenes articulares', correct: true }, { label: 'Destrucción ósea' }, { label: 'Edema' },
      ], explanation: 'Los osteofitos son formaciones óseas marginales como respuesta reparativa en la artrosis.' },
      { question: '¿Cuál es la diferencia entre protrusión y extrusión discal?', options: [
        { label: 'No hay diferencia' }, { label: 'En la protrusión la base es más ancha que el fragmento; en la extrusión es al revés', correct: true }, { label: 'Solo la ubicación' }, { label: 'La extrusión es más pequeña' },
      ], explanation: 'La protrusión tiene base amplia; en la extrusión, el fragmento es mayor que la base.' },
      { question: '¿Qué tipo de desgarro meniscal es más frecuente?', options: [
        { label: 'Radial' }, { label: 'Horizontal', correct: true }, { label: 'Vertical longitudinal' }, { label: 'En asa de balde' },
      ], explanation: 'Los desgarros horizontales (clivaje) son los más frecuentes, especialmente en meniscos degenerativos.' },
      { question: '¿Qué hallazgo de imagen en hombro sugiere impingement subacromial?', options: [
        { label: 'Fractura humeral' }, { label: 'Reducción del espacio subacromial y señal anormal en supraespinoso', correct: true }, { label: 'Luxación glenohumeral' }, { label: 'Calcificación humeral' },
      ], explanation: 'La reducción del espacio subacromial con cambio de señal en el supraespinoso sugiere impingement.' },
      { question: '¿Qué estudio inicial se usa para dolor de hombro?', options: [
        { label: 'RM directamente' }, { label: 'Radiografía simple (AP y lateral)', correct: true }, { label: 'TAC' }, { label: 'Mielografía' },
      ], explanation: 'La radiografía simple es el estudio inicial para evaluar estructuras óseas del hombro.' },
      { question: '¿Qué clasificación usa grados I a IV para lesiones condrales?', options: [
        { label: 'Kellgren-Lawrence' }, { label: 'Outerbridge', correct: true }, { label: 'Pfirrmann' }, { label: 'Modic' },
      ], explanation: 'La clasificación de Outerbridge graúa las lesiones condrales de I (reblandecimiento) a IV (pérdida completa).' },
      { question: '¿Qué desventaja tiene la RM como estudio de imagen?', options: [
        { label: 'Usa radiación' }, { label: 'Costo elevado y tiempo de estudio prolongado', correct: true }, { label: 'No muestra tejidos blandos' }, { label: 'Necesita contraste siempre' },
      ], explanation: 'La RM es costosa y requiere tiempos de adquisición prolongados.' },
      { question: '¿Qué hallazgo en Rx de hombro sugiere rotura del manguito?', options: [
        { label: 'Espacio articular aumentado' }, { label: 'Migración proximal de la cabeza humeral', correct: true }, { label: 'Fractura de clavícula' }, { label: 'Todo normal' },
      ], explanation: 'La migración proximal de la cabeza humeral en Rx sugiere rotura crónica del manguito rotador.' },
      { question: '¿KL grado I se describe como?', options: [
        { label: 'Normal' }, { label: 'Dudoso: osteofitos mínimos posibles', correct: true }, { label: 'Artrosis moderada' }, { label: 'Artrosis severa' },
      ], explanation: 'KL I = dudoso, con posibles osteofitos mínimos sin clara reducción del espacio.' },
      { question: '¿KL grado III se describe como?', options: [
        { label: 'Dudoso' }, { label: 'Moderada: osteofitos múltiples, pinzamiento definitivo, esclerosis', correct: true }, { label: 'Leve' }, { label: 'Normal' },
      ], explanation: 'KL III = moderada con osteofitos múltiples, pinzamiento articular definido y esclerosis.' },
      { question: '¿Qué prueba de imagen confirma secuestro de fragmento discal?', options: [
        { label: 'Radiografía simple' }, { label: 'RM', correct: true }, { label: 'Ecografía' }, { label: 'Gammagrafía' },
      ], explanation: 'La RM es la prueba definitiva para confirmar un fragmento de disco secuestrado.' },
    ]
  },
]
