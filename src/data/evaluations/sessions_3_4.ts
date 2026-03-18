import { EvalDef } from '@/components/ui/EvalEngine'

export const sessions3_4: EvalDef[] = [
  // ── Sesión 3 ───────────────────────────────────────────────
  {
    classId: 3, title: 'Evaluación: Columna y Marcha',
    questions: [
      // Existing 7
      { question: '¿Qué postura presenta pelvis anterior, lordosis aumentada y abdominales débiles?', options: [
        { label: 'Espalda plana' }, { label: 'Cifosis-Lordosis', correct: true }, { label: 'Balanceo atrás' }, { label: 'Postura ideal' },
      ], explanation: 'La cifosis-lordosis combina pelvis anterior con lordosis aumentada y abdominales débiles.' },
      { question: '¿Cuántos determinantes de la marcha describió Saunders?', options: [
        { label: '4' }, { label: '6', correct: true }, { label: '8' }, { label: '3' },
      ], explanation: 'Saunders describió 6 determinantes que minimizan el desplazamiento del CDG.' },
      { question: '¿Qué fase de la marcha ocupa mayor porcentaje del ciclo?', options: [
        { label: 'Balanceo (swing)' }, { label: 'Apoyo (stance)', correct: true }, { label: 'Doble apoyo' }, { label: 'Prebalanceo' },
      ], explanation: 'La fase de apoyo ocupa ~60% del ciclo de marcha.' },
      { question: '¿Qué estructura conforma la "columna media" de estabilidad vertebral?', options: [
        { label: 'Cuerpo vertebral anterior' }, { label: 'Muro posterior del cuerpo y ligamento longitudinal posterior', correct: true }, { label: 'Arco posterior' }, { label: 'Discos intervertebrales solamente' },
      ], explanation: 'La columna media incluye el muro posterior del cuerpo vertebral y el ligamento longitudinal posterior.' },
      { question: '¿Por qué la columna lumbar tiene rotación limitada?', options: [
        { label: 'Músculos muy tensos' }, { label: 'Orientación sagital de las facetas articulares', correct: true }, { label: 'Ligamentos muy gruesos' }, { label: 'Discos muy anchos' },
      ], explanation: 'Las facetas lumbares están orientadas en el plano sagital, limitando la rotación.' },
      { question: '¿Qué músculo está TENSO en la postura cifosis-lordosis?', options: [
        { label: 'Abdominales' }, { label: 'Glúteos' }, { label: 'Flexores de cadera (psoas)', correct: true }, { label: 'Isquiotibiales' },
      ], explanation: 'Los flexores de cadera tensos inclinan la pelvis hacia delante en cifosis-lordosis.' },
      { question: 'La reducción de la rotación pélvica durante la marcha afecta el:', options: [
        { label: '1er determinante', correct: true }, { label: '3er determinante' }, { label: '5to determinante' }, { label: '6to determinante' },
      ], explanation: 'El 1er determinante es la rotación pélvica horizontal; su reducción acorta la zancada.' },
      // New 33
      { question: '¿Cuántas articulaciones conforman cada segmento vertebral?', options: [
        { label: '2' }, { label: '3', correct: true }, { label: '4' }, { label: '1' },
      ], explanation: 'Cada segmento tiene un disco intervertebral y dos articulaciones cigapofisarias.' },
      { question: '¿Dónde ocurre principalmente la rotación axial cervical?', options: [
        { label: 'C3-C4' }, { label: 'Articulación atlantoaxial', correct: true }, { label: 'C6-C7' }, { label: 'Unión cérvico-torácica' },
      ], explanation: 'La mayor parte de la rotación cervical ocurre en la articulación atlantoaxial (C1-C2).' },
      { question: '¿Qué región vertebral tiene movimiento más limitado en general?', options: [
        { label: 'Cervical' }, { label: 'Torácica (dorsal)', correct: true }, { label: 'Lumbar' }, { label: 'Sacra' },
      ], explanation: 'La columna torácica tiene menos movimiento por las costillas y la orientación de sus facetas.' },
      { question: '¿Qué efecto tiene la carga axial sobre el núcleo pulposo?', options: [
        { label: 'Lo comprime' }, { label: 'Aumenta la presión y estira las fibras del anillo', correct: true }, { label: 'Lo vacía' }, { label: 'Lo mineraliza' },
      ], explanation: 'El núcleo incompresible transmite la fuerza radialmente, estirando las fibras del anillo fibroso.' },
      { question: '¿Cuántas columnas de estabilidad vertebral se describen?', options: [
        { label: '2' }, { label: '3', correct: true }, { label: '4' }, { label: '1' },
      ], explanation: 'El modelo de tres columnas (anterior, media y posterior) describe la estabilidad vertebral.' },
      { question: '¿Cuándo existe inestabilidad de la columna?', options: [
        { label: 'Cuando solo la columna anterior está afectada' }, { label: 'Cuando la columna media y la anterior o posterior están afectadas', correct: true }, { label: 'Solo con fractura bilateral' }, { label: 'Solo en la columna cervical' },
      ], explanation: 'La inestabilidad requiere afectación de la columna media más la anterior o la posterior.' },
      { question: '¿Qué tipo postural presenta pelvis posterior e isquiotibiales tensos?', options: [
        { label: 'Cifosis-lordosis' }, { label: 'Espalda plana', correct: true }, { label: 'Postura ideal' }, { label: 'Balanceo atrás' },
      ], explanation: 'La espalda plana presenta pelvis posterior e isquiotibiales tensos que aplanan la lordosis.' },
      { question: '¿Qué factores influyen en la postura? (señale el INCORRECTO)', options: [
        { label: 'Estructura ósea' }, { label: 'Estado de ánimo' }, { label: 'Presión atmosférica', correct: true }, { label: 'Longitud muscular' },
      ], explanation: 'La presión atmosférica no influye directamente en la postura corporal.' },
      { question: '¿Qué es una "zancada" en el ciclo de la marcha?', options: [
        { label: 'Un solo paso' }, { label: 'La actividad entre dos contactos iniciales del mismo pie', correct: true }, { label: 'La fase de balanceo' }, { label: 'El doble apoyo' },
      ], explanation: 'Una zancada/ciclo de marcha va del contacto inicial de un pie al siguiente contacto del mismo pie.' },
      { question: '¿Qué porcentaje del ciclo ocupa la fase de balanceo?', options: [
        { label: '60%' }, { label: '40%', correct: true }, { label: '50%' }, { label: '30%' },
      ], explanation: 'La fase de balanceo ocupa ~40% del ciclo de marcha (apoyo ~60%).' },
      { question: '¿Qué determinante de la marcha corresponde a la inclinación pélvica en el plano frontal?', options: [
        { label: '1er determinante' }, { label: '2do determinante', correct: true }, { label: '4to determinante' }, { label: '6to determinante' },
      ], explanation: 'El 2do determinante es la inclinación pélvica (caída pélvica) en el plano frontal.' },
      { question: '¿Qué consecuencia tiene la debilidad abdominal sobre la postura lumbar?', options: [
        { label: 'Aplana la lordosis' }, { label: 'Permite la inclinación pélvica anterior y aumenta la lordosis', correct: true }, { label: 'No afecta' }, { label: 'Genera cifosis torácica' },
      ], explanation: 'Abdominales débiles no contienen la pelvis, permitiendo inclinación anterior y lordosis aumentada.' },
      { question: '¿Qué músculo está DÉBIL en la postura cifosis-lordosis?', options: [
        { label: 'Psoas ilíaco' }, { label: 'Erectores lumbares' }, { label: 'Glúteos', correct: true }, { label: 'Flexores de cadera' },
      ], explanation: 'Los glúteos están débiles en cifosis-lordosis, junto con los abdominales.' },
      { question: '¿Qué columna vertebral incluye los ligamentos interespinosos y supraespinosos?', options: [
        { label: 'Anterior' }, { label: 'Media' }, { label: 'Posterior', correct: true }, { label: 'Lateral' },
      ], explanation: 'La columna posterior incluye los ligamentos interespinosos, supraespinosos y las articulaciones cigapofisarias.' },
      { question: '¿Qué estructura pertenece a la columna anterior?', options: [
        { label: 'Apófisis espinosas' }, { label: 'Ligamento longitudinal anterior y mitad anterior del cuerpo', correct: true }, { label: 'Pedículos' }, { label: 'Láminas' },
      ], explanation: 'La columna anterior incluye el ligamento longitudinal anterior, el anillo fibroso y la mitad anterior del cuerpo vertebral.' },
      { question: '¿Qué efecto tienen los isquiotibiales tensos sobre la pelvis?', options: [
        { label: 'Inclinación anterior' }, { label: 'Inclinación posterior', correct: true }, { label: 'No afectan' }, { label: 'Rotación lateral' },
      ], explanation: 'Los isquiotibiales tensos traccionan la pelvis hacia atrás (inclinación posterior).' },
      { question: '¿Qué tipo postural muestra lordosis lumbar disminuida?', options: [
        { label: 'Cifosis-lordosis' }, { label: 'Espalda plana', correct: true }, { label: 'Postura ideal' }, { label: 'Lordosis aumentada' },
      ], explanation: 'La espalda plana presenta lordosis lumbar disminuida por inclinación posterior de la pelvis.' },
      { question: '¿Qué favorece la lordosis lumbar fisiológica?', options: [
        { label: 'Reducir la capacidad de carga' }, { label: 'Flexibilidad y absorción de fuerzas', correct: true }, { label: 'Mayor rigidez' }, { label: 'Disminuir el movimiento' },
      ], explanation: 'La lordosis lumbar favorece la flexibilidad y aumenta la capacidad de absorción de fuerzas.' },
      { question: '¿Cómo se llaman las articulaciones que conectan las vértebras posteriores?', options: [
        { label: 'Discoligamentarias' }, { label: 'Cigapofisarias (facetarias)', correct: true }, { label: 'Costovertebrales' }, { label: 'Sacroilíacas' },
      ], explanation: 'Las articulaciones cigapofisarias (facetarias) conectan las apófisis articulares de vértebras adyacentes.' },
      { question: '¿Qué orientación tienen las facetas cervicales inferiores?', options: [
        { label: 'Sagital (como lumbares)' }, { label: 'Oblicua, mirando hacia adelante y atrás', correct: true }, { label: 'Horizontal' }, { label: 'Vertical' },
      ], explanation: 'Las facetas cervicales inferiores están orientadas oblicuamente, permitiendo flexión, extensión e inclinación.' },
      { question: '¿Qué compensación postural genera mayor gasto energético durante la marcha?', options: [
        { label: 'Menor velocidad' }, { label: 'Mayor desplazamiento vertical del CDG', correct: true }, { label: 'Uso de bastón' }, { label: 'Paso más corto' },
      ], explanation: 'Un mayor desplazamiento vertical del CDG incrementa el gasto energético durante la marcha.' },
      { question: '¿Qué determinante incluye la flexión precoz de la rodilla?', options: [
        { label: '2do' }, { label: '4to', correct: true }, { label: '6to' }, { label: '1er' },
      ], explanation: 'El 4to determinante es la flexión precoz de la rodilla en apoyo.' },
      { question: '¿Qué condición aumenta la lordosis lumbar por cambio de biotipo?', options: [
        { label: 'Desnutrición' }, { label: 'Embarazo u obesidad', correct: true }, { label: 'Osteoporosis' }, { label: 'Escoliosis' },
      ], explanation: 'La obesidad y el embarazo desplazan el CDG anterior, aumentando la lordosis compensatoria.' },
      { question: '¿Qué son las compensaciones en la marcha?', options: [
        { label: 'Movimientos normales' }, { label: 'Modificaciones para acomodar lesión, dolor o debilidad', correct: true }, { label: 'Ejercicios terapéuticos' }, { label: 'Reflejos involuntarios' },
      ], explanation: 'Las compensaciones son ajustes del patrón de movimiento para acomodar una limitación.' },
      { question: '¿En qué postura los erectores lumbares están TENSOS?', options: [
        { label: 'Espalda plana' }, { label: 'Cifosis-lordosis', correct: true }, { label: 'Postura ideal' }, { label: 'Balanceo atrás' },
      ], explanation: 'En cifosis-lordosis, los erectores lumbares están acortados/tensos manteniendo la hiperlordosis.' },
      { question: '¿Qué estructura del disco permite el movimiento entre vértebras?', options: [
        { label: 'Apófisis espinosa' }, { label: 'Núcleo pulposo y anillo fibroso', correct: true }, { label: 'Pedículo' }, { label: 'Ligamento amarillo' },
      ], explanation: 'El disco intervertebral (núcleo y anillo) actúa como amortiguador y permite el movimiento intervertebral.' },
      { question: '¿Qué tipo postural presenta la pelvis posterior con flexión de cadera y rodillas?', options: [
        { label: 'Espalda plana' }, { label: 'Balanceo atrás (swayback)', correct: true }, { label: 'Cifosis-lordosis' }, { label: 'Postura ideal' },
      ], explanation: 'La postura de balanceo atrás presenta pelvis posterior con desplazamiento anterior de la cadera.' },
      { question: '¿Qué determinante corresponde al desplazamiento lateral de la pelvis?', options: [
        { label: '1er' }, { label: '3er', correct: true }, { label: '5to' }, { label: '6to' },
      ], explanation: 'El 3er determinante es el desplazamiento lateral de la pelvis (~2-3 cm).' },
      { question: '¿Cuánto desplazamiento vertical del CDG se considera normal en la marcha?', options: [
        { label: '1-2 cm' }, { label: '4-5 cm', correct: true }, { label: '8-10 cm' }, { label: '15 cm' },
      ], explanation: 'El desplazamiento normal del CDG en la marcha es de aproximadamente 5 cm en cada plano.' },
      { question: '¿Qué efecto tiene la debilidad del glúteo medio sobre la marcha?', options: [
        { label: 'Pie caído' }, { label: 'Marcha de Trendelenburg (caída pélvica contralateral)', correct: true }, { label: 'Recurvatum' }, { label: 'Marcha festinante' },
      ], explanation: 'La debilidad del glúteo medio causa caída pélvica contralateral (Trendelenburg).' },
      { question: '¿Qué componente del núcleo pulposo lo hace incompresible?', options: [
        { label: 'Colágeno tipo I' }, { label: 'Alto contenido acuoso (proteoglicanos)', correct: true }, { label: 'Calcificación' }, { label: 'Elastina' },
      ], explanation: 'Los proteoglicanos del núcleo retienen agua, haciéndolo un gel incompresible que distribuye presión.' },
      { question: '¿Qué efecto tiene la enfermedad neurológica sobre la postura?', options: [
        { label: 'Mejora la alineación' }, { label: 'Puede alterar el control postural y generar desviaciones', correct: true }, { label: 'Solo afecta la cognición' }, { label: 'No tiene efecto' },
      ], explanation: 'Las enfermedades neurológicas pueden alterar el tono muscular y el control postural, generando desviaciones.' },
      { question: '¿Qué mecanismo de la marcha corresponde a los movimientos del pie y tobillo?', options: [
        { label: '3er determinante' }, { label: '5to determinante', correct: true }, { label: '1er determinante' }, { label: '2do determinante' },
      ], explanation: 'El 5to determinante incluye los mecanismos del pie y tobillo durante la marcha.' },
    ]
  },
  // ── Sesión 4 ───────────────────────────────────────────────
  {
    classId: 4, title: 'Evaluación: Ejercicio Terapéutico',
    questions: [
      // Existing 7
      { question: '¿Qué significa la "I" en el principio FITT?', options: [
        { label: 'Intervención' }, { label: 'Intensidad', correct: true }, { label: 'Impedancia' }, { label: 'Isocinética' },
      ], explanation: 'FITT = Frecuencia, Intensidad, Tiempo, Tipo.' },
      { question: '¿Cuántos días de fuerza semanales recomienda el ACSM?', options: [
        { label: '1 día' }, { label: '2 días no consecutivos', correct: true }, { label: '5 días' }, { label: '7 días' },
      ], explanation: 'El ACSM recomienda ≥2 días/semana de fuerza en días no consecutivos.' },
      { question: '¿Qué función cumple el órgano tendinoso de Golgi tras 6 segundos de estiramiento?', options: [
        { label: 'Aumenta la contracción' }, { label: 'Inhibe la contracción facilitando relajación', correct: true }, { label: 'Detecta velocidad de estiramiento' }, { label: 'Activa fibras tipo II' },
      ], explanation: 'El OTG inhibe la contracción muscular facilitando el estiramiento tras 6 segundos.' },
      { question: '¿Cuánto tiempo recomienda el ACSM para un estiramiento estático?', options: [
        { label: '5-10 segundos' }, { label: '15-60 segundos', correct: true }, { label: '2-3 minutos' }, { label: '10-15 segundos' },
      ], explanation: 'El ACSM recomienda sostener el estiramiento entre 15 y 60 segundos por 4 repeticiones.' },
      { question: '¿Cuál es la jerarquía correcta de fuerza por tipo de contracción?', options: [
        { label: 'Concéntrica > Isométrica > Excéntrica' }, { label: 'Excéntrica > Isométrica > Concéntrica', correct: true }, { label: 'Isométrica > Excéntrica > Concéntrica' }, { label: 'Todas generan igual fuerza' },
      ], explanation: 'Excéntrica rápida > Isométrica > Concéntrica lenta > Concéntrica rápida.' },
      { question: '¿Qué adaptación predomina después de 6 semanas de entrenamiento de fuerza?', options: [
        { label: 'Adaptación neural' }, { label: 'Hipertrofia muscular', correct: true }, { label: 'Flexibilidad articular' }, { label: 'Resistencia aeróbica' },
      ], explanation: 'Después de 6 semanas, la hipertrofia muscular se convierte en el mecanismo predominante.' },
      { question: '¿Cuántos minutos de ejercicio aeróbico moderado recomienda el ACSM por día?', options: [
        { label: '15 minutos' }, { label: '30 minutos', correct: true }, { label: '60 minutos' }, { label: '90 minutos' },
      ], explanation: 'El ACSM recomienda ≥30 minutos de ejercicio aeróbico moderado ≥5 días/semana.' },
      // New 33
      { question: '¿Qué significa la "F" en FITT?', options: [
        { label: 'Fuerza' }, { label: 'Frecuencia', correct: true }, { label: 'Flexibilidad' }, { label: 'Funcionalidad' },
      ], explanation: 'La F en FITT representa la Frecuencia del ejercicio.' },
      { question: '¿Qué significa la primera "T" en FITT?', options: [
        { label: 'Tipo' }, { label: 'Tiempo (duración)', correct: true }, { label: 'Tensión' }, { label: 'Temperatura' },
      ], explanation: 'La primera T representa el Tiempo o duración del ejercicio.' },
      { question: '¿Qué significa la segunda "T" en FITT?', options: [
        { label: 'Temperatura' }, { label: 'Tipo (modo de ejercicio)', correct: true }, { label: 'Tensión' }, { label: 'Técnica' },
      ], explanation: 'La segunda T representa el Tipo o modo de ejercicio.' },
      { question: '¿Qué principio establece que las adaptaciones son específicas a los músculos y modo de ejercicio?', options: [
        { label: 'Periodización' }, { label: 'Especificidad', correct: true }, { label: 'Sobrecarga' }, { label: 'Reversibilidad' },
      ], explanation: 'El principio de especificidad indica que las adaptaciones son específicas al tipo de ejercicio realizado.' },
      { question: '¿Qué es la periodización del entrenamiento?', options: [
        { label: 'Hacer ejercicio todos los días' }, { label: 'Dividir el entrenamiento en ciclos con reposo entre sesiones intensas', correct: true }, { label: 'Aumentar siempre la carga' }, { label: 'Cambiar de ejercicio cada día' },
      ], explanation: 'La periodización divide el entrenamiento en macrociclos y microciclos con reposo adecuado.' },
      { question: '¿Qué cuantifica el VO2máx?', options: [
        { label: 'La fuerza muscular máxima' }, { label: 'El consumo máximo de oxígeno', correct: true }, { label: 'La frecuencia cardíaca' }, { label: 'La presión arterial' },
      ], explanation: 'El VO2máx mide la capacidad máxima del organismo para extraer, liberar y usar oxígeno.' },
      { question: '¿Qué rango de intensidad define el ejercicio aeróbico moderado?', options: [
        { label: '20-30% VO2máx' }, { label: '40-60% VO2máx', correct: true }, { label: '70-85% VO2máx' }, { label: '90-100% VO2máx' },
      ], explanation: 'La intensidad moderada se define como 40-60% del VO2máx.' },
      { question: '¿Cuántos ejercicios multiarticulares recomienda el ACSM por sesión de fuerza?', options: [
        { label: '3-5' }, { label: '8-10', correct: true }, { label: '15-20' }, { label: '1-2' },
      ], explanation: 'El ACSM recomienda 8-10 ejercicios multiarticulares para los principales grupos musculares.' },
      { question: '¿Cuántas repeticiones por serie recomienda el ACSM para fuerza?', options: [
        { label: '3-5' }, { label: '8-12', correct: true }, { label: '15-20' }, { label: '25-30' },
      ], explanation: 'Se recomiendan 8-12 repeticiones hasta la fatiga muscular.' },
      { question: '¿Qué tipo de fibra muscular depende del metabolismo aeróbico?', options: [
        { label: 'Tipo 2B' }, { label: 'Tipo 1', correct: true }, { label: 'Tipo 2A' }, { label: 'Tipo 2X' },
      ], explanation: 'Las fibras tipo 1 (oxidativas lentas) dependen del metabolismo aeróbico.' },
      { question: '¿Qué factores estáticos modulan la flexibilidad?', options: [
        { label: 'Reflejo de estiramiento' }, { label: 'Propiedades viscoelásticas de la unidad miotendinosa', correct: true }, { label: 'Fuerza muscular máxima' }, { label: 'Frecuencia cardíaca' },
      ], explanation: 'Los factores estáticos de flexibilidad incluyen las propiedades viscoelásticas del tejido miotendinoso.' },
      { question: '¿Cuántas repeticiones de estiramiento recomienda el ACSM?', options: [
        { label: '1-2' }, { label: '4', correct: true }, { label: '8-10' }, { label: '15' },
      ], explanation: 'El ACSM recomienda 4 repeticiones de estiramiento por grupo muscular.' },
      { question: '¿Cuántos días semanales de flexibilidad recomienda el ACSM como mínimo?', options: [
        { label: '1 día' }, { label: '2-3 días', correct: true }, { label: '5 días' }, { label: '7 días' },
      ], explanation: 'El ACSM recomienda un mínimo de 2-3 días/semana de entrenamiento de flexibilidad.' },
      { question: '¿Qué tipo de contracción es más segura para iniciar rehabilitación?', options: [
        { label: 'Excéntrica rápida' }, { label: 'Isométrica', correct: true }, { label: 'Concéntrica rápida' }, { label: 'Pliométrica' },
      ], explanation: 'La contracción isométrica es más segura para iniciar porque no implica movimiento articular.' },
      { question: '¿Qué es el mecanismo de filamento deslizante?', options: [
        { label: 'Ruptura de fibras' }, { label: 'Deslizamiento de actina y miosina para producir contracción', correct: true }, { label: 'Estiramiento del tendón' }, { label: 'Conducción nerviosa' },
      ], explanation: 'La contracción se produce por el deslizamiento de filamentos de actina sobre miosina.' },
      { question: '¿Qué frecuencia de ejercicio aeróbico recomienda el ACSM?', options: [
        { label: '1-2 días/semana' }, { label: '3-5 días/semana', correct: true }, { label: '7 días/semana' }, { label: 'Cada 15 días' },
      ], explanation: 'El ACSM recomienda 3 a 5 días por semana de ejercicio aeróbico.' },
      { question: '¿Cuánto dura idealmente una sesión de ejercicio aeróbico?', options: [
        { label: '5-10 minutos' }, { label: '20-60 minutos', correct: true }, { label: '90-120 minutos' }, { label: 'Menos de 5 minutos' },
      ], explanation: 'La duración óptima es de 20 a 60 minutos por sesión de ejercicio aeróbico.' },
      { question: '¿Qué tipo de fibras recluta el SN primero según el principio de tamaño?', options: [
        { label: 'Tipo 2B (grandes)' }, { label: 'Tipo 1 (pequeñas)', correct: true }, { label: 'Todas simultáneamente' }, { label: 'Aleatoriamente' },
      ], explanation: 'Según Henneman, las unidades motoras pequeñas (tipo 1) se reclutan primero.' },
      { question: '¿Qué define una unidad motora?', options: [
        { label: 'Un solo músculo' }, { label: 'Una motoneurona y todas las fibras que inerva', correct: true }, { label: 'Un nervio completo' }, { label: 'Un tendón y su músculo' },
      ], explanation: 'La unidad motora es una motoneurona alfa y todas las fibras musculares que inerva.' },
      { question: '¿Qué determina la fuerza de contracción según el reclutamiento?', options: [
        { label: 'Solo la velocidad' }, { label: 'El número y tamaño de unidades motoras reclutadas', correct: true }, { label: 'La temperatura' }, { label: 'El pH muscular' },
      ], explanation: 'La fuerza depende del número de unidades motoras reclutadas y su frecuencia de estimulación.' },
      { question: '¿Cuál es el objetivo del principio de sobrecarga progresiva?', options: [
        { label: 'Mantener la carga constante' }, { label: 'Incrementar gradualmente el estímulo para continuar las adaptaciones', correct: true }, { label: 'Reducir el ejercicio' }, { label: 'Evitar la fatiga' },
      ], explanation: 'La sobrecarga progresiva incrementa sistemáticamente el estímulo para promover adaptaciones continuas.' },
      { question: '¿Qué contracción permite controlar la fase de descenso de un peso?', options: [
        { label: 'Concéntrica' }, { label: 'Excéntrica', correct: true }, { label: 'Isométrica' }, { label: 'Isocinética' },
      ], explanation: 'La contracción excéntrica controla el alargamiento muscular durante la fase de descenso.' },
      { question: '¿Qué tipo de ejercicio usa grandes grupos musculares de forma rítmica?', options: [
        { label: 'Isométrico' }, { label: 'Aeróbico dinámico', correct: true }, { label: 'Estático' }, { label: 'Pliométrico' },
      ], explanation: 'El ejercicio aeróbico dinámico usa grandes grupos musculares de forma rítmica y continua.' },
      { question: '¿Cuántas semanas debe mantenerse el entrenamiento para ver hipertrofia?', options: [
        { label: '1-2 semanas' }, { label: '6-7 semanas', correct: true }, { label: '12 semanas mínimo' }, { label: '24 semanas' },
      ], explanation: 'La hipertrofia muscular requiere al menos 6-7 semanas de entrenamiento continuado.' },
      { question: '¿Qué estructura propioceptiva inhibe la contracción muscular excesiva?', options: [
        { label: 'Huso muscular' }, { label: 'Órgano tendinoso de Golgi', correct: true }, { label: 'Corpúsculo de Pacini' }, { label: 'Disco de Merkel' },
      ], explanation: 'El OTG detecta tensión excesiva en el tendón e inhibe la contracción como mecanismo de protección.' },
      { question: '¿Qué intensidad define el ejercicio vigoroso?', options: [
        { label: '<40% VO2máx' }, { label: '>60% VO2máx', correct: true }, { label: '30-40% VO2máx' }, { label: '10-20% VO2máx' },
      ], explanation: 'La intensidad vigorosa se define como >60% del VO2máx.' },
      { question: '¿Qué factores dinámicos regulan la flexibilidad?', options: [
        { label: 'Densidad ósea' }, { label: 'Huso muscular y órgano tendinoso de Golgi', correct: true }, { label: 'Masa muscular' }, { label: 'Temperatura ambiente' },
      ], explanation: 'Los factores dinámicos son neurales: huso muscular y OTG regulan la extensibilidad muscular.' },
      { question: '¿Qué ocurre con la frecuencia de estimulación para generar máxima fuerza?', options: [
        { label: 'Disminuye' }, { label: 'Aumenta (tetanización)', correct: true }, { label: 'Se mantiene constante' }, { label: 'Se hace intermitente' },
      ], explanation: 'Frecuencias de estimulación más altas fusionan las sacudidas musculares produciendo tetanización y mayor fuerza.' },
      { question: '¿Qué tipo de fibra es tipo 2A?', options: [
        { label: 'Oxidativa lenta' }, { label: 'Glucolítica oxidativa rápida', correct: true }, { label: 'Solo glucolítica' }, { label: 'Fibra intrafusal' },
      ], explanation: 'Las tipo 2A son fibras glucolíticas oxidativas rápidas, intermedias entre tipo 1 y tipo 2B.' },
      { question: '¿Cuántos minutos semanales de ejercicio aeróbico moderado recomienda el ACSM?', options: [
        { label: '75 minutos' }, { label: '150 minutos', correct: true }, { label: '300 minutos' }, { label: '60 minutos' },
      ], explanation: 'El ACSM recomienda un mínimo de 150 minutos/semana de ejercicio aeróbico moderado.' },
      { question: '¿Qué es un macrociclo en periodización?', options: [
        { label: 'Una sola sesión de ejercicio' }, { label: 'Un período largo de entrenamiento (meses/año)', correct: true }, { label: 'Un tipo de contracción' }, { label: 'Una repetición máxima' },
      ], explanation: 'Un macrociclo es el período más largo de planificación del entrenamiento (generalmente meses o un año).' },
      { question: '¿Qué contracción mantiene la longitud muscular constante?', options: [
        { label: 'Concéntrica' }, { label: 'Excéntrica' }, { label: 'Isométrica', correct: true }, { label: 'Isocinética' },
      ], explanation: 'En la contracción isométrica, el músculo genera fuerza sin cambiar su longitud.' },
    ]
  },
]
