import { EvalDef } from '@/components/ui/EvalEngine'

export const sessions1_2: EvalDef[] = [
  // ── Sesión 1 ───────────────────────────────────────────────
  {
    classId: 1, title: 'Evaluación: Biomecánica en Rehabilitación',
    questions: [
      // Existing 7
      { question: '¿Qué tipo de fibra muscular genera mayor fuerza?', options: [
        { label: 'Paralela' }, { label: 'Peniforme', correct: true }, { label: 'Circular' }, { label: 'Fusiforme' },
      ], explanation: 'Las fibras peniformes agrupan más sarcómeros en paralelo, generando mayor fuerza.' },
      { question: '¿Cuál es la unidad funcional contráctil del músculo?', options: [
        { label: 'Miofibrilla' }, { label: 'Sarcómero', correct: true }, { label: 'Fascículo' }, { label: 'Endomisio' },
      ], explanation: 'El sarcómero es la unidad contráctil básica entre dos líneas Z.' },
      { question: '¿Qué estructura detecta los cambios de longitud muscular?', options: [
        { label: 'Órgano tendinoso de Golgi' }, { label: 'Huso muscular', correct: true }, { label: 'Corpúsculo de Pacini' }, { label: 'Disco de Merkel' },
      ], explanation: 'El huso muscular detecta cambios de longitud y velocidad de estiramiento.' },
      { question: '¿En qué consiste la diatermia de onda corta?', options: [
        { label: 'Aplicación de corriente directa' }, { label: 'Conversión de energía electromagnética en calor profundo', correct: true }, { label: 'Vibración mecánica de alta frecuencia' }, { label: 'Radiación ultravioleta terapéutica' },
      ], explanation: 'La diatermia convierte energía electromagnética en térmica mediante oscilación de campos.' },
      { question: '¿Qué mecanismo produce la ganancia de fuerza en las primeras 3 semanas de entrenamiento?', options: [
        { label: 'Hipertrofia muscular' }, { label: 'Adaptación neural', correct: true }, { label: 'Hiperplasia' }, { label: 'Angiogénesis' },
      ], explanation: 'Las primeras semanas mejoran el reclutamiento de unidades motoras, no la masa muscular.' },
      { question: '¿Qué reflejo activa la vibroterapia?', options: [
        { label: 'Reflejo miotático inverso' }, { label: 'Reflejo de vibración tónica', correct: true }, { label: 'Reflejo de retirada' }, { label: 'Reflejo H' },
      ], explanation: 'La vibroterapia estimula husos musculares provocando el reflejo de vibración tónica.' },
      { question: 'La inestabilidad funcional de tobillo SIN debilidad indica déficit de:', options: [
        { label: 'Fuerza muscular' }, { label: 'Flexibilidad' }, { label: 'Propiocepción', correct: true }, { label: 'Resistencia aeróbica' },
      ], explanation: 'Inestabilidad sin debilidad = daño en mecanorreceptores capsulares = déficit propioceptivo.' },
      // New 33
      { question: '¿Qué tipo de fibra muscular es más resistente a la fatiga?', options: [
        { label: 'Tipo 2B', correct: false }, { label: 'Tipo 1', correct: true }, { label: 'Tipo 2A' }, { label: 'Tipo 2X' },
      ], explanation: 'Las fibras tipo 1 (oxidativas lentas) dependen del metabolismo aeróbico y son altamente resistentes a la fatiga.' },
      { question: '¿Qué filamentos forman la base del mecanismo de contracción muscular?', options: [
        { label: 'Actina y miosina', correct: true }, { label: 'Troponina y tropomiosina' }, { label: 'Colágeno y elastina' }, { label: 'Titina y nebulina' },
      ], explanation: 'El deslizamiento de filamentos de actina y miosina produce la contracción muscular.' },
      { question: '¿Qué ocurre con la tensión activa si el músculo se estira excesivamente antes de contraerse?', options: [
        { label: 'Aumenta linealmente' }, { label: 'Disminuye', correct: true }, { label: 'Se mantiene constante' }, { label: 'Se duplica' },
      ], explanation: 'Al estirar más allá de la longitud de reposo, la superposición de filamentos disminuye y la tensión activa cae.' },
      { question: '¿En qué longitud del músculo se produce la fuerza máxima de contracción?', options: [
        { label: 'Máximo acortamiento' }, { label: 'Longitud de reposo', correct: true }, { label: 'Máximo estiramiento' }, { label: 'Doble de la longitud de reposo' },
      ], explanation: 'La fuerza máxima se genera en la longitud normal de reposo por superposición óptima de filamentos.' },
      { question: '¿Qué estructura regula la sensibilidad del huso muscular?', options: [
        { label: 'Motoneurona alfa' }, { label: 'Motoneurona gamma', correct: true }, { label: 'Interneurona inhibitoria' }, { label: 'Célula de Schwann' },
      ], explanation: 'Las motoneuronas gamma ajustan la sensibilidad del huso muscular a los cambios de longitud.' },
      { question: '¿Qué promueve el ultrasonido terapéutico a nivel tisular?', options: [
        { label: 'Destrucción de osteoblastos' }, { label: 'Proliferación de fibroblastos y síntesis de colágeno', correct: true }, { label: 'Inhibición de la angiogénesis' }, { label: 'Desmineralización ósea' },
      ], explanation: 'El ultrasonido promueve la proliferación de fibroblastos y la síntesis de colágeno para reparación tisular.' },
      { question: '¿Qué tipo de energía emite el ultrasonido terapéutico?', options: [
        { label: 'Electromagnética' }, { label: 'Acústica (mecánica)', correct: true }, { label: 'Térmica directa' }, { label: 'Ionizante' },
      ], explanation: 'El ultrasonido emite ondas de presión sonora (energía acústica/mecánica) de alta frecuencia.' },
      { question: '¿Cómo inhibe el dolor la electroterapia a nivel medular?', options: [
        { label: 'Destruyendo nociceptores' }, { label: 'Bloqueando señales en el asta dorsal (teoría de la puerta)', correct: true }, { label: 'Aumentando la conducción nerviosa' }, { label: 'Liberando ácido láctico' },
      ], explanation: 'La electroterapia inhibe señales de dolor segmentariamente en el asta dorsal de la médula espinal.' },
      { question: 'Las fibras musculares tipo 2B dependen principalmente del metabolismo:', options: [
        { label: 'Aeróbico' }, { label: 'Anaeróbico', correct: true }, { label: 'Mixto' }, { label: 'Lipídico' },
      ], explanation: 'Las fibras tipo 2B (glucolíticas rápidas) dependen del sistema anaeróbico para generar energía rápidamente.' },
      { question: '¿Qué determina que un músculo paralelo tenga mayor amplitud de movimiento?', options: [
        { label: 'Mayor número de sarcómeros en paralelo' }, { label: 'Fibras alineadas con la longitud del músculo', correct: true }, { label: 'Mayor densidad de tejido conectivo' }, { label: 'Mayor irrigación sanguínea' },
      ], explanation: 'Las fibras paralelas alineadas longitudinalmente permiten mayor desplazamiento funcional.' },
      { question: '¿Qué reflejo protege al músculo de elongación excesiva?', options: [
        { label: 'Reflejo de vibración tónica' }, { label: 'Reflejo de estiramiento monosináptico', correct: true }, { label: 'Reflejo de retirada' }, { label: 'Reflejo consensual' },
      ], explanation: 'El reflejo de estiramiento monosináptico protege al músculo contrayéndolo ante elongación rápida.' },
      { question: '¿Qué componente del sistema nervioso mejora primero con el entrenamiento?', options: [
        { label: 'Masa muscular' }, { label: 'Reclutamiento de unidades motoras', correct: true }, { label: 'Densidad ósea' }, { label: 'Flexibilidad articular' },
      ], explanation: 'El reclutamiento neural más eficiente es la primera adaptación al entrenamiento de fuerza.' },
      { question: '¿Qué son las fibras intrafusales?', options: [
        { label: 'Fibras del tendón' }, { label: 'Fibras del huso muscular', correct: true }, { label: 'Fibras nerviosas motoras' }, { label: 'Fibras del endomisio' },
      ], explanation: 'Las fibras intrafusales son las fibras especializadas dentro del huso muscular que detectan cambios de longitud.' },
      { question: '¿Qué efecto tiene la atenuación sobre la penetración del ultrasonido?', options: [
        { label: 'Mayor frecuencia = mayor penetración' }, { label: 'Mayor frecuencia = menor penetración', correct: true }, { label: 'La frecuencia no afecta la penetración' }, { label: 'Menor frecuencia = menor penetración' },
      ], explanation: 'La atenuación aumenta con la frecuencia, por lo que frecuencias más altas penetran menos.' },
      { question: '¿Qué objetivo tiene la rehabilitación más allá de corregir deficiencias anatómicas?', options: [
        { label: 'Solo restaurar la anatomía normal' }, { label: 'Mejorar la capacidad funcional global del individuo', correct: true }, { label: 'Eliminar completamente el dolor' }, { label: 'Sustituir tejidos dañados' },
      ], explanation: 'El objetivo es mejorar la capacidad funcional global, no solo la anatomía.' },
      { question: '¿Qué nivel de función comprende la "participación" según la CIF?', options: [
        { label: 'Estructura o sistema del cuerpo' }, { label: 'Persona (actividad)' }, { label: 'Integración en la sociedad', correct: true }, { label: 'Órgano' },
      ], explanation: 'La participación se refiere a la integración del individuo en la sociedad.' },
      { question: '¿Qué tipo de unidades motoras se reclutan primero durante el ejercicio?', options: [
        { label: 'Grandes (alto umbral)' }, { label: 'Pequeñas (bajo umbral)', correct: true }, { label: 'Intermedias' }, { label: 'Se reclutan todas simultáneamente' },
      ], explanation: 'Según el principio de tamaño de Henneman, las unidades motoras pequeñas se reclutan primero.' },
      { question: '¿Qué efecto tiene la vibroterapia sobre las unidades motoras?', options: [
        { label: 'Inhibe todas las unidades motoras' }, { label: 'Mejora la activación de unidades motoras de alto umbral', correct: true }, { label: 'Solo activa fibras tipo 1' }, { label: 'Reduce la frecuencia de descarga' },
      ], explanation: 'La vibroterapia mejora la activación neuromuscular de las unidades motoras de alto umbral.' },
      { question: '¿Qué propiedad de los tejidos determina la atenuación del ultrasonido?', options: [
        { label: 'Color del tejido' }, { label: 'Composición y densidad del tejido', correct: true }, { label: 'Temperatura ambiente' }, { label: 'pH tisular' },
      ], explanation: 'La atenuación depende del tipo de tejido; cada tejido tiene un coeficiente de atenuación diferente.' },
      { question: '¿Qué información transmiten los mecanorreceptores articulares al SNC?', options: [
        { label: 'Temperatura articular' }, { label: 'Posición y movimiento del cuerpo', correct: true }, { label: 'Nivel de pH sinovial' }, { label: 'Presión osmótica' },
      ], explanation: 'Los mecanorreceptores transmiten información propioceptiva sobre posición y movimiento.' },
      { question: 'Un músculo peniforme tiene menor desplazamiento funcional porque sus fibras son:', options: [
        { label: 'Más largas y delgadas' }, { label: 'Más cortas y en disposición oblicua', correct: true }, { label: 'Circulares' }, { label: 'Paralelas al tendón' },
      ], explanation: 'Las fibras oblicuas más cortas generan más fuerza pero menor rango de movimiento.' },
      { question: '¿Qué mecanismo usa la diatermia para calentar tejidos profundos?', options: [
        { label: 'Conducción directa de calor' }, { label: 'Oscilación de campos eléctricos y magnéticos', correct: true }, { label: 'Radiación infrarroja' }, { label: 'Convección por aire caliente' },
      ], explanation: 'La diatermia mueve iones y rota moléculas polares mediante campos electromagnéticos de alta frecuencia.' },
      { question: '¿Cuál es la función del endomisio en la estructura muscular?', options: [
        { label: 'Conectar músculos al hueso' }, { label: 'Envolver cada fibra muscular individualmente', correct: true }, { label: 'Transmitir impulsos nerviosos' }, { label: 'Almacenar glucógeno' },
      ], explanation: 'El endomisio es la capa de tejido conectivo que envuelve cada fibra muscular individual.' },
      { question: '¿Qué lesión articular puede alterar la propiocepción?', options: [
        { label: 'Solo fracturas óseas' }, { label: 'Lesiones de cápsula y ligamentos articulares', correct: true }, { label: 'Solo lesiones musculares' }, { label: 'Lesiones cutáneas superficiales' },
      ], explanation: 'Las lesiones capsulares y ligamentarias dañan los mecanorreceptores, alterando la propiocepción.' },
      { question: '¿Por qué es vital el entrenamiento propioceptivo en rehabilitación?', options: [
        { label: 'Para aumentar la masa muscular' }, { label: 'Para restaurar la capacidad de ejecutar tareas motoras de forma segura', correct: true }, { label: 'Para reducir el peso corporal' }, { label: 'Para mejorar la visión' },
      ], explanation: 'El entrenamiento propioceptivo restaura la información sensorial necesaria para el control motor seguro.' },
      { question: '¿Qué tipo de contracción genera la mayor fuerza absoluta?', options: [
        { label: 'Concéntrica lenta' }, { label: 'Isométrica' }, { label: 'Excéntrica rápida', correct: true }, { label: 'Concéntrica rápida' },
      ], explanation: 'La fuerza máxima se genera durante contracciones excéntricas rápidas.' },
      { question: '¿Qué estimulan las ondas de presión sonora del ultrasonido en tendones?', options: [
        { label: 'La desmineralización' }, { label: 'La reparación mediante fibroblastos', correct: true }, { label: 'La atrofia tisular' }, { label: 'La calcificación' },
      ], explanation: 'El ultrasonido promueve la reparación de ligamentos y tendones mediante estimulación de fibroblastos.' },
      { question: '¿Qué velocidad de estiramiento detecta principalmente el huso muscular?', options: [
        { label: 'Solo estiramiento estático' }, { label: 'Cambios rápidos de longitud y velocidad', correct: true }, { label: 'Solo acortamiento muscular' }, { label: 'Vibración de alta frecuencia exclusivamente' },
      ], explanation: 'El huso muscular detecta tanto cambios de longitud como la velocidad del estiramiento.' },
      { question: '¿Qué tipo de fibra muscular se especializa en movimientos rápidos y potentes?', options: [
        { label: 'Tipo 1' }, { label: 'Tipo 2B', correct: true }, { label: 'Fibras intrafusales' }, { label: 'Fibras del tejido conectivo' },
      ], explanation: 'Las fibras tipo 2B (glucolíticas rápidas) generan contracciones rápidas y potentes.' },
      { question: '¿Qué estructura muscular conecta los filamentos a la línea Z?', options: [
        { label: 'Tropomiosina' }, { label: 'Titina', correct: true }, { label: 'Miosina' }, { label: 'Endomisio' },
      ], explanation: 'La titina es una proteína elástica que conecta los filamentos gruesos a la línea Z del sarcómero.' },
      { question: '¿Cuál es el rol de la troponina en la contracción muscular?', options: [
        { label: 'Generar fuerza directamente' }, { label: 'Regular la interacción actina-miosina al unirse al calcio', correct: true }, { label: 'Almacenar energía' }, { label: 'Conducir el impulso nervioso' },
      ], explanation: 'La troponina se une al calcio y permite la exposición de los sitios de unión en la actina.' },
      { question: '¿Cuántas semanas de entrenamiento se necesitan típicamente para observar hipertrofia real?', options: [
        { label: '1-2 semanas' }, { label: '6-7 semanas', correct: true }, { label: '12-16 semanas' }, { label: '24 semanas' },
      ], explanation: 'La hipertrofia muscular real requiere habitualmente entre 6 y 7 semanas de entrenamiento continuado.' },
      { question: '¿Qué nivel de función comprende la "actividad" según la CIF?', options: [
        { label: 'Órgano o tejido' }, { label: 'Nivel de la persona', correct: true }, { label: 'Participación social' }, { label: 'Estructura celular' },
      ], explanation: 'La actividad se refiere a la capacidad funcional a nivel de la persona completa.' },
    ]
  },
  // ── Sesión 2 ───────────────────────────────────────────────
  {
    classId: 2, title: 'Evaluación: Principios Biomecánicos',
    questions: [
      // Existing 7
      { question: '¿Cuántos planos cardinales de movimiento existen?', options: [
        { label: '2' }, { label: '3', correct: true }, { label: '4' }, { label: '5' },
      ], explanation: 'Sagital (flexo-extensión), frontal (abd-aducción) y transversal (rotaciones).' },
      { question: '¿Dónde se localiza el centro de gravedad en bipedestación?', options: [
        { label: '2-3 cm anterior a S1', correct: true }, { label: '5 cm posterior a L3' }, { label: 'En el ombligo' }, { label: 'En la articulación de la cadera' },
      ], explanation: 'El CDG se ubica 2-3 cm por delante del cuerpo vertebral de S1.' },
      { question: '¿Qué contracción genera la fuerza máxima?', options: [
        { label: 'Concéntrica rápida' }, { label: 'Isométrica' }, { label: 'Excéntrica rápida', correct: true }, { label: 'Concéntrica lenta' },
      ], explanation: 'La fuerza máxima se genera en contracciones excéntricas rápidas.' },
      { question: 'En posición neutra, la inclinación lateral se acopla con rotación al:', options: [
        { label: 'Mismo lado' }, { label: 'Lado opuesto', correct: true }, { label: 'No se acoplan' }, { label: 'Depende del nivel vertebral' },
      ], explanation: 'Ley de Fryette Tipo I: en posición neutra, inclinación y rotación van a lados opuestos.' },
      { question: '¿Qué efecto produce la extensión activa de muñeca sobre los dedos?', options: [
        { label: 'Extensión pasiva de dedos' }, { label: 'Flexión pasiva de dedos (tenodesis)', correct: true }, { label: 'No hay efecto' }, { label: 'Abducción de dedos' },
      ], explanation: 'La extensión de muñeca produce flexión pasiva de los dedos = efecto tenodesis.' },
      { question: '¿Qué tipo de cadena cinética mantiene el segmento distal FIJO?', options: [
        { label: 'Abierta' }, { label: 'Cerrada', correct: true }, { label: 'Mixta' }, { label: 'Reactiva' },
      ], explanation: 'En cadena cerrada el segmento distal está fijo o en carga (ej: sentadilla).' },
      { question: '¿Qué ángulo de tracción maximiza la eficiencia biomecánica?', options: [
        { label: 'Paralelo al eje óseo' }, { label: 'Perpendicular al eje óseo', correct: true }, { label: '45 grados' }, { label: 'Variable según el músculo' },
      ], explanation: 'La tracción perpendicular al eje óseo maximiza el componente rotatorio de la fuerza.' },
      // New 33
      { question: '¿Qué describe la cinemática articular?', options: [
        { label: 'Las fuerzas que causan el movimiento' }, { label: 'El movimiento sin considerar las fuerzas', correct: true }, { label: 'La resistencia de los tejidos' }, { label: 'La composición muscular' },
      ], explanation: 'La cinemática describe el movimiento (ángulos, posiciones) sin considerar las fuerzas que lo causan.' },
      { question: '¿Qué describe la cinética articular?', options: [
        { label: 'Los ángulos articulares' }, { label: 'Las fuerzas que actúan sobre las articulaciones', correct: true }, { label: 'La velocidad de movimiento' }, { label: 'La amplitud de movimiento pasivo' },
      ], explanation: 'La cinética describe las fuerzas (como FRS) que crean momentos sobre las articulaciones.' },
      { question: '¿Cuánto se desplaza aproximadamente el CDG durante la marcha normal?', options: [
        { label: '1 cm' }, { label: '5 cm', correct: true }, { label: '10 cm' }, { label: '15 cm' },
      ], explanation: 'El CDG sigue una trayectoria sinusoidal con desplazamiento de ~5 cm en cada plano.' },
      { question: '¿Qué plano divide el cuerpo en mitades izquierda y derecha?', options: [
        { label: 'Frontal' }, { label: 'Sagital', correct: true }, { label: 'Transversal' }, { label: 'Oblicuo' },
      ], explanation: 'El plano sagital divide el cuerpo en mitades izquierda y derecha.' },
      { question: '¿Qué plano divide el cuerpo en partes superior e inferior?', options: [
        { label: 'Sagital' }, { label: 'Frontal' }, { label: 'Transversal', correct: true }, { label: 'Coronal' },
      ], explanation: 'El plano transversal divide el cuerpo en partes superior e inferior.' },
      { question: '¿Qué otro nombre recibe el plano frontal?', options: [
        { label: 'Sagital' }, { label: 'Coronal', correct: true }, { label: 'Axial' }, { label: 'Mediano' },
      ], explanation: 'El plano frontal también se llama plano coronal.' },
      { question: '¿Qué movimientos ocurren en el plano sagital?', options: [
        { label: 'Abducción y aducción' }, { label: 'Flexión y extensión', correct: true }, { label: 'Rotación interna y externa' }, { label: 'Inclinación lateral' },
      ], explanation: 'La flexión y extensión ocurren en el plano sagital.' },
      { question: '¿Qué sistemas interactúan para mantener el equilibrio?', options: [
        { label: 'Solo el vestibular' }, { label: 'Visual, somatosensitivo y vestibular', correct: true }, { label: 'Solo proprioceptivo y visual' }, { label: 'Auditivo y táctil' },
      ], explanation: 'El equilibrio depende de la integración de los sistemas visual, somatosensitivo y vestibular.' },
      { question: '¿Qué es un momento de fuerza (torque)?', options: [
        { label: 'La velocidad de contracción' }, { label: 'El producto de la fuerza por la distancia al eje de rotación', correct: true }, { label: 'La masa del segmento' }, { label: 'La aceleración angular' },
      ], explanation: 'El torque es la fuerza multiplicada por el brazo de palanca (distancia al eje de rotación).' },
      { question: '¿Qué ocurre cuando un cambio en una articulación de la cadena cinética afecta articulaciones adyacentes?', options: [
        { label: 'Compensación', correct: true }, { label: 'Luxación' }, { label: 'Fractura' }, { label: 'Atrofia' },
      ], explanation: 'Los cambios en una articulación de la cadena generan compensaciones en articulaciones adyacentes.' },
      { question: '¿Qué contracción aplica menos fuerza absoluta?', options: [
        { label: 'Excéntrica rápida' }, { label: 'Isométrica' }, { label: 'Concéntrica lenta' }, { label: 'Concéntrica rápida', correct: true },
      ], explanation: 'La concéntrica rápida genera la menor fuerza en la jerarquía de contracciones.' },
      { question: 'La sentadilla es un ejemplo de ejercicio de cadena cinética:', options: [
        { label: 'Abierta' }, { label: 'Cerrada', correct: true }, { label: 'Mixta' }, { label: 'Pasiva' },
      ], explanation: 'En la sentadilla, los pies están fijos en el suelo = cadena cerrada.' },
      { question: '¿Qué es la Fuerza de Reacción al Suelo (FRS)?', options: [
        { label: 'La fuerza muscular del cuádriceps' }, { label: 'La fuerza que el suelo ejerce sobre el cuerpo en contacto', correct: true }, { label: 'La gravedad' }, { label: 'La presión atmosférica' },
      ], explanation: 'La FRS es la fuerza de reacción del suelo sobre el cuerpo durante el apoyo.' },
      { question: '¿Qué posición de muñeca maximiza la fuerza de agarre?', options: [
        { label: 'Flexión máxima' }, { label: 'Ligera extensión (posición funcional)', correct: true }, { label: 'Desviación cubital' }, { label: 'Posición neutra exacta' },
      ], explanation: 'La ligera extensión de muñeca (posición funcional) maximiza la fuerza de agarre por tenodesis.' },
      { question: '¿Qué debilidad causa el "pie caído" durante la marcha?', options: [
        { label: 'Flexores plantares' }, { label: 'Dorsiflexores', correct: true }, { label: 'Eversores' }, { label: 'Inversores' },
      ], explanation: 'La debilidad de dorsiflexores impide levantar el pie durante la fase de balanceo.' },
      { question: '¿Qué ejercicio de cadena cerrada activa preferentemente el vasto medial oblicuo?', options: [
        { label: 'Extensión de rodilla en máquina' }, { label: 'Sentadilla con aducción', correct: true }, { label: 'Curl de isquiotibiales' }, { label: 'Patada de glúteo' },
      ], explanation: 'La sentadilla con aducción activa preferentemente el vasto medial oblicuo.' },
      { question: 'En Mecánica Tipo II (Fryette), inclinación y rotación van al:', options: [
        { label: 'Lado opuesto' }, { label: 'Mismo lado', correct: true }, { label: 'Solo hay rotación' }, { label: 'No se acoplan' },
      ], explanation: 'En Tipo II (flexo-extensión), inclinación y rotación van al mismo lado.' },
      { question: '¿Qué tipo de palanca tiene el fulcro entre la fuerza y la carga?', options: [
        { label: 'Primera clase', correct: true }, { label: 'Segunda clase' }, { label: 'Tercera clase' }, { label: 'Cuarta clase' },
      ], explanation: 'En la palanca de primera clase, el fulcro (punto de apoyo) está entre la fuerza y la carga.' },
      { question: '¿Qué trayectoria sigue el CDG durante una marcha eficiente?', options: [
        { label: 'Línea recta horizontal' }, { label: 'Sinusoidal suave', correct: true }, { label: 'Zigzag irregular' }, { label: 'Circular' },
      ], explanation: 'El CDG sigue una trayectoria sinusoidal suave para minimizar el gasto energético.' },
      { question: '¿Qué componente de la fuerza muscular es útil para la rotación articular?', options: [
        { label: 'Componente translatorio' }, { label: 'Componente rotatorio', correct: true }, { label: 'Componente estabilizador' }, { label: 'Componente compresivo' },
      ], explanation: 'El componente rotatorio es la porción de la fuerza que produce movimiento angular articular.' },
      { question: '¿La flexión de muñeca produce qué efecto en los dedos?', options: [
        { label: 'Flexión pasiva' }, { label: 'Extensión pasiva', correct: true }, { label: 'Abducción' }, { label: 'Ningún efecto' },
      ], explanation: 'La flexión de muñeca produce extensión pasiva de dedos (tenodesis inversa).' },
      { question: '¿Qué mide la goniometría?', options: [
        { label: 'Fuerza muscular' }, { label: 'Ángulos articulares', correct: true }, { label: 'Velocidad de conducción nerviosa' }, { label: 'Presión arterial' },
      ], explanation: 'La goniometría mide los ángulos de movimiento articular en los diferentes planos.' },
      { question: '¿Qué ocurre cuando la FRS pasa posterior a la rodilla?', options: [
        { label: 'Momento de extensión' }, { label: 'Momento de flexión', correct: true }, { label: 'No genera momento' }, { label: 'Momento de rotación' },
      ], explanation: 'Cuando la FRS pasa posterior al eje de la rodilla, genera un momento de flexión.' },
      { question: '¿Qué principio establece que las fuerzas internas y externas deben equilibrarse para mantener la postura?', options: [
        { label: 'Ley de Wolff' }, { label: 'Equilibrio estático', correct: true }, { label: 'Ley de Hooke' }, { label: 'Principio de Pascal' },
      ], explanation: 'El equilibrio estático requiere que la suma de todas las fuerzas y momentos sea cero.' },
      { question: '¿Qué movimientos se producen en el plano frontal?', options: [
        { label: 'Flexión y extensión' }, { label: 'Abducción y aducción', correct: true }, { label: 'Rotaciones' }, { label: 'Circunducción' },
      ], explanation: 'La abducción y aducción ocurren en el plano frontal.' },
      { question: '¿En un ejercicio de cadena abierta, qué caracteriza al segmento distal?', options: [
        { label: 'Está fijo contra el suelo' }, { label: 'Está libre en el espacio', correct: true }, { label: 'Está bajo carga axial' }, { label: 'Está inmovilizado' },
      ], explanation: 'En cadena abierta, el segmento distal queda libre en el espacio.' },
      { question: '¿Qué se necesita para que las ortesis funcionen biomecánicamente?', options: [
        { label: 'Fuerza unidireccional' }, { label: 'Sistemas de palancas y presiones de tres puntos', correct: true }, { label: 'Corrientes eléctricas' }, { label: 'Tracción axial continua' },
      ], explanation: 'Las ortesis aplican sistemas de palancas y presiones de tres puntos para controlar el movimiento.' },
      { question: '¿Qué define la posición "segura" de la mano?', options: [
        { label: 'Flexión completa de dedos' }, { label: 'Muñeca en ligera extensión con dedos semiflexionados', correct: true }, { label: 'Extensión máxima de todos los dedos' }, { label: 'Puño cerrado' },
      ], explanation: 'La posición segura o funcional incluye muñeca en ligera extensión con dedos en semiflexión.' },
      { question: '¿Qué ley de Fryette aplica en posición neutra de la columna?', options: [
        { label: 'Tipo II' }, { label: 'Tipo I', correct: true }, { label: 'Tipo III' }, { label: 'No aplica' },
      ], explanation: 'Fryette Tipo I: en posición neutra, inclinación y rotación van a lados opuestos.' },
      { question: '¿Qué sucede con el gasto energético si aumenta el desplazamiento del CDG?', options: [
        { label: 'Disminuye' }, { label: 'Aumenta', correct: true }, { label: 'No cambia' }, { label: 'Se vuelve negativo' },
      ], explanation: 'Mayor desplazamiento del CDG implica mayor gasto energético durante la locomoción.' },
    ]
  },
]
