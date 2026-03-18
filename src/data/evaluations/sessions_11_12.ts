import { EvalDef } from '@/components/ui/EvalEngine'

export const sessions11_12: EvalDef[] = [
  // ── Sesión 11 ──────────────────────────────────────────────
  {
    classId: 11, title: 'Evaluación: Prótesis',
    questions: [
      // Existing 7
      { question: '¿Qué encaje transfemoral evita la abducción excesiva?', options: [
        { label: 'Cuadrilateral' }, { label: 'Contención isquiática', correct: true }, { label: 'PTB' }, { label: 'TSB' },
      ], explanation: 'El encaje de contención isquiática bloquea el hueso isquion dentro del encaje, previniendo abducción.' },
      { question: '¿Qué nivel funcional K corresponde a "cadencia variable"?', options: [
        { label: 'K1' }, { label: 'K2' }, { label: 'K3', correct: true }, { label: 'K4' },
      ], explanation: 'K3 = capacidad de variar la velocidad de marcha en la comunidad.' },
      { question: '¿Qué rodilla protésica se indica para nivel K3?', options: [
        { label: 'Mecánica simple' }, { label: 'Hidráulica o microprocesador', correct: true }, { label: 'Solo mecánica con freno' }, { label: 'Sin rodilla (rígida)' },
      ], explanation: 'K3 requiere rodilla hidráulica o microprocesador para ajuste automático de velocidad.' },
      { question: '¿Qué tipo de pie protésico almacena energía elástica?', options: [
        { label: 'SACH' }, { label: 'Respuesta dinámica', correct: true }, { label: 'Articulado simple' }, { label: 'Multiaxial' },
      ], explanation: 'El pie de respuesta dinámica almacena energía elástica durante el apoyo y la libera en la propulsión.' },
      { question: '¿Qué sistema de suspensión controla los cambios de volumen del muñón?', options: [
        { label: 'Arnés' }, { label: 'Vacío (succión)', correct: true }, { label: 'Cinturón silesiano' }, { label: 'Correa supracondílea' },
      ], explanation: 'El vacío se adapta a los cambios de volumen del muñón manteniendo la suspensión constante.' },
      { question: '¿Qué encaje transtibial apoya en el tendón rotuliano?', options: [
        { label: 'TSB' }, { label: 'PTB', correct: true }, { label: 'Contención isquiática' }, { label: 'Cuadrilateral' },
      ], explanation: 'PTB (Patellar Tendon Bearing) distribuye carga principalmente sobre el tendón rotuliano.' },
      { question: '¿Qué tipo de prótesis de miembro superior usa señales mioeléctricas?', options: [
        { label: 'Mecánica (corporal)' }, { label: 'Mioeléctrica', correct: true }, { label: 'Cosmética' }, { label: 'Híbrida' },
      ], explanation: 'Las prótesis mioeléctricas usan señales EMG de los músculos residuales para controlar la mano.' },
      // New 33
      { question: '¿Cuál es la filosofía moderna de la amputación?', options: [
        { label: 'Es una cirugía destructiva' }, { label: 'Es cirugía reconstructiva para mejorar función', correct: true }, { label: 'Es siempre evitable' }, { label: 'Solo se hace por trauma' },
      ], explanation: 'La amputación se considera cirugía reconstructiva orientada a mejorar la función del paciente.' },
      { question: '¿Qué significan las siglas PTB?', options: [
        { label: 'Post-Traumatic Brace' }, { label: 'Patellar Tendon Bearing', correct: true }, { label: 'Proximal Tibial Bearing' }, { label: 'Progressive Tension Band' },
      ], explanation: 'PTB = Patellar Tendon Bearing (Apoyo en el Tendón Rotuliano).' },
      { question: '¿Qué significan las siglas TSB?', options: [
        { label: 'Total Surface Bearing', correct: true }, { label: 'Tibial Support Band' }, { label: 'Therapeutic Suspension Belt' }, { label: 'Terminal Swing Base' },
      ], explanation: 'TSB = Total Surface Bearing (Superficie Total de Apoyo).' },
      { question: '¿Qué diferencia el encaje PTB del TSB?', options: [
        { label: 'No hay diferencia' }, { label: 'PTB concentra carga en el tendón rotuliano; TSB distribuye uniformemente', correct: true }, { label: 'TSB es más pesado' }, { label: 'PTB no tiene encaje' },
      ], explanation: 'PTB concentra la carga en el tendón rotuliano; TSB distribuye la presión en toda la superficie.' },
      { question: '¿Qué nivel funcional K describe al paciente confinado al hogar?', options: [
        { label: 'K0' }, { label: 'K1', correct: true }, { label: 'K3' }, { label: 'K4' },
      ], explanation: 'K1 describe al paciente que deambula en interiores sobre superficies planas a ritmo fijo.' },
      { question: '¿Qué nivel K corresponde a deambulación comunitaria limitada?', options: [
        { label: 'K1' }, { label: 'K2', correct: true }, { label: 'K3' }, { label: 'K4' },
      ], explanation: 'K2 = deambulación comunitaria limitada con capacidad de superar barreras bajas.' },
      { question: '¿Qué nivel K corresponde al deportista activo?', options: [
        { label: 'K2' }, { label: 'K3' }, { label: 'K4', correct: true }, { label: 'K1' },
      ], explanation: 'K4 = capacidad funcional para deporte y alto rendimiento.' },
      { question: '¿Qué tipo de pie protésico es el más básico?', options: [
        { label: 'Respuesta dinámica' }, { label: 'SACH', correct: true }, { label: 'Microprocesador' }, { label: 'Multiaxial' },
      ], explanation: 'El SACH (Solid Ankle Cushion Heel) es el pie más básico con talón amortiguado.' },
      { question: '¿Qué significan las siglas SACH?', options: [
        { label: 'Solid Ankle Cushion Heel', correct: true }, { label: 'Semi-Articular Carbon Hull' }, { label: 'Standard Active Control Handler' }, { label: 'Supportive Ankle Control Housing' },
      ], explanation: 'SACH = Solid Ankle Cushion Heel (Tobillo Sólido con Talón Amortiguado).' },
      { question: '¿Qué tipo de rodilla protésica es la más simple?', options: [
        { label: 'Hidráulica' }, { label: 'Mecánica simple', correct: true }, { label: 'Microprocesador' }, { label: 'Neumática' },
      ], explanation: 'La rodilla mecánica simple es la más básica, adecuada para K1.' },
      { question: '¿Qué ventaja tiene la rodilla con microprocesador?', options: [
        { label: 'Menor costo' }, { label: 'Ajuste automático instantáneo a velocidad y terreno', correct: true }, { label: 'Mayor peso' }, { label: 'No necesita mantenimiento' },
      ], explanation: 'El microprocesador ajusta la resistencia automáticamente según velocidad y terreno.' },
      { question: '¿Qué sistema de prótesis usa cables y arneses?', options: [
        { label: 'Impulsado por el cuerpo (body-powered)', correct: true }, { label: 'Mioeléctrico' }, { label: 'Cosmético' }, { label: 'Robótico' },
      ], explanation: 'Las prótesis impulsadas por el cuerpo usan cables Bowden y arneses para transmitir el movimiento.' },
      { question: '¿Qué nivel de amputación se llama "Syme"?', options: [
        { label: 'A nivel de rodilla' }, { label: 'Desarticulación de tobillo', correct: true }, { label: 'A nivel de cadera' }, { label: 'Transhumeral' },
      ], explanation: 'La amputación de Syme es una desarticulación a nivel del tobillo.' },
      { question: '¿Qué tipo de amputación es "transtibial"?', options: [
        { label: 'Por encima de la rodilla' }, { label: 'Por debajo de la rodilla (a través de la tibia)', correct: true }, { label: 'A nivel del tobillo' }, { label: 'A nivel del pie' },
      ], explanation: 'Transtibial = amputación a través de la tibia (debajo de la rodilla).' },
      { question: '¿Qué tipo de amputación es "transfemoral"?', options: [
        { label: 'Por debajo de la rodilla' }, { label: 'Por encima de la rodilla (a través del fémur)', correct: true }, { label: 'A nivel del pie' }, { label: 'Del brazo' },
      ], explanation: 'Transfemoral = amputación a través del fémur (por encima de la rodilla).' },
      { question: '¿Qué encaje protésico bloquea el isquion dentro del encaje?', options: [
        { label: 'PTB' }, { label: 'Contención isquiática', correct: true }, { label: 'SACH' }, { label: 'TSB' },
      ], explanation: 'La contención isquiática atrapa el hueso isquion dentro del encaje para control rotacional.' },
      { question: '¿Qué prótesis tiene mejor apariencia cosmética pero sin función activa?', options: [
        { label: 'Mioeléctrica' }, { label: 'Cosmética (pasiva)', correct: true }, { label: 'Body-powered' }, { label: 'Híbrida' },
      ], explanation: 'Las prótesis cosméticas tienen apariencia realista pero no función prensil activa.' },
      { question: '¿Qué sistema combina componentes mecánicos y mioeléctricos?', options: [
        { label: 'Solo corporal' }, { label: 'Híbrido', correct: true }, { label: 'Solo mioeléctrico' }, { label: 'Solo cosmético' },
      ], explanation: 'Las prótesis híbridas combinan componentes mecánicos y mioeléctricos.' },
      { question: '¿Qué es el "socket" en una prótesis?', options: [
        { label: 'El pie protésico' }, { label: 'El encaje que conecta el muñón al dispositivo', correct: true }, { label: 'La rodilla' }, { label: 'El sistema de suspensión' },
      ], explanation: 'El socket (encaje) es la interfaz entre el muñón y el resto de la prótesis.' },
      { question: '¿Qué tipo de suspensión usa un pin con bloqueo mecánico?', options: [
        { label: 'Succión' }, { label: 'Pin lock', correct: true }, { label: 'Arnés' }, { label: 'Cinturón' },
      ], explanation: 'El sistema pin lock usa un pin que se enclava mecánicamente en el encaje.' },
      { question: '¿Cuál es la ventaja del encaje TSB sobre el PTB?', options: [
        { label: 'Mayor concentración de presión' }, { label: 'Distribución más uniforme de la presión', correct: true }, { label: 'Mayor peso' }, { label: 'Menor ajuste' },
      ], explanation: 'El TSB distribuye la presión uniformemente sobre toda la superficie del muñón.' },
      { question: '¿Qué amputación es "transradial"?', options: [
        { label: 'Del muslo' }, { label: 'Del antebrazo (a través del radio)', correct: true }, { label: 'De la pierna' }, { label: 'Del pie' },
      ], explanation: 'Transradial = amputación a través del antebrazo (nivel debajo del codo).' },
      { question: '¿Qué amputación es "transhumeral"?', options: [
        { label: 'Del antebrazo' }, { label: 'Del brazo (a través del húmero)', correct: true }, { label: 'De la pierna' }, { label: 'Del pie' },
      ], explanation: 'Transhumeral = amputación a través del húmero (nivel por encima del codo).' },
      { question: '¿Qué factor determina el nivel de componentes protésicos?', options: [
        { label: 'Solo la edad' }, { label: 'El nivel funcional K del paciente', correct: true }, { label: 'Solo el costo' }, { label: 'Solo la estética' },
      ], explanation: 'El nivel funcional K determina los componentes apropiados para el paciente.' },
      { question: '¿Qué rodilla se indica para nivel K2?', options: [
        { label: 'Microprocesador' }, { label: 'Mecánica con freno', correct: true }, { label: 'Hidráulica avanzada' }, { label: 'Sin rodilla' },
      ], explanation: 'Para K2 (comunidad limitada), se indica una rodilla mecánica con freno de seguridad.' },
      { question: '¿Qué suspensión es más discreta y cómoda para amputados transtibiales?', options: [
        { label: 'Arnés de hombro' }, { label: 'Liner de silicona con pin lock', correct: true }, { label: 'Cinturón supracondíleo' }, { label: 'Correa de cuero' },
      ], explanation: 'El liner de silicona con pin lock es discreto, cómodo y proporciona buena suspensión.' },
      { question: '¿Qué señales usa una prótesis mioeléctrica para funcionar?', options: [
        { label: 'Ondas cerebrales' }, { label: 'Señales electromiográficas (EMG) de músculos residuales', correct: true }, { label: 'Voz' }, { label: 'GPS' },
      ], explanation: 'Las prótesis mioeléctricas captan señales EMG de los músculos residuales del muñón.' },
      { question: '¿Qué es el cinturón silesiano?', options: [
        { label: 'Un tipo de encaje' }, { label: 'Un sistema de suspensión para prótesis transfemorales', correct: true }, { label: 'Un pie protésico' }, { label: 'Un tipo de rodilla' },
      ], explanation: 'El cinturón silesiano es una alternativa de suspensión para prótesis transfemorales.' },
      { question: '¿Qué tipo de pie se recomienda para deportes de alto rendimiento?', options: [
        { label: 'SACH' }, { label: 'Fibra de carbono de alto rendimiento', correct: true }, { label: 'Articulado simple' }, { label: 'Madera' },
      ], explanation: 'Los pies de fibra de carbono de alto rendimiento (como "running blades") son ideales para K4/deporte.' },
    ]
  },
  // ── Sesión 12 ──────────────────────────────────────────────
  {
    classId: 12, title: 'Evaluación: Ayudas Técnicas',
    questions: [
      // Existing 7
      { question: '¿Cuál es la diferencia entre Tilt y Reclinación?', options: [
        { label: 'Son lo mismo' }, { label: 'Tilt gira en bloque; Reclinación abre el ángulo asiento-respaldo', correct: true }, { label: 'Reclinación gira en bloque' }, { label: 'Tilt es solo para sillas eléctricas' },
      ], explanation: 'Tilt = giro en bloque sin cizallamiento. Reclinación = abre ángulo asiento-respaldo CON cizallamiento.' },
      { question: '¿Qué cojín ofrece la mejor redistribución de presión?', options: [
        { label: 'Espuma estándar' }, { label: 'Aire (ROHO)', correct: true }, { label: 'Gel básico' }, { label: 'Viscoelástico' },
      ], explanation: 'Los cojines de aire ofrecen la mejor redistribución para pacientes de alto riesgo de úlcera.' },
      { question: '¿Por qué un paciente con tetraplejia C6 necesita silla eléctrica?', options: [
        { label: 'Preferencia estética' }, { label: 'Sin tríceps = no puede propulsar manual', correct: true }, { label: 'Mayor velocidad' }, { label: 'Mejor postura' },
      ], explanation: 'Sin tríceps, el paciente no genera fuerza de extensión de codo suficiente para propulsar una silla manual.' },
      { question: '¿Qué tecnología permite control ambiental desde la silla?', options: [
        { label: 'GPS' }, { label: 'AEVD (adaptación electrónica a la vida diaria)', correct: true }, { label: 'Bluetooth estándar' }, { label: 'Control remoto universal' },
      ], explanation: 'AEVD permite controlar luces, puertas, computadores y otros dispositivos desde la silla.' },
      { question: '¿Qué genera cizallamiento: Tilt o Reclinación?', options: [
        { label: 'Tilt' }, { label: 'Reclinación', correct: true }, { label: 'Ambos' }, { label: 'Ninguno' },
      ], explanation: 'La reclinación abre el ángulo asiento-respaldo, generando fuerzas de cizallamiento en la piel.' },
      { question: '¿Qué patrón de propulsión es más eficiente en silla manual?', options: [
        { label: 'Empuje corto y rápido' }, { label: 'Arco semicircular largo', correct: true }, { label: 'Empuje recto hacia abajo' }, { label: 'Movimiento circular completo' },
      ], explanation: 'El arco semicircular largo maximiza el impulso y minimiza la frecuencia de empujes.' },
      { question: '¿Qué sigla describe la comunicación aumentativa y alternativa?', options: [
        { label: 'AEVD' }, { label: 'CAA', correct: true }, { label: 'TA' }, { label: 'AVD' },
      ], explanation: 'CAA = Comunicación Aumentativa y Alternativa (dispositivos de voz y símbolos).' },
      // New 33
      { question: '¿Qué tipo de tracción tiene una silla eléctrica con motor central?', options: [
        { label: 'Tracción delantera' }, { label: 'Tracción central', correct: true }, { label: 'Tracción trasera' }, { label: 'Sin tracción' },
      ], explanation: 'Las sillas eléctricas con motor central ofrecen mejor maniobrabilidad en espacios reducidos.' },
      { question: '¿Qué ventaja tiene la silla ultraligera sobre la estándar?', options: [
        { label: 'Solo estética' }, { label: 'Menor peso, mayor eficiencia de propulsión, configurable', correct: true }, { label: 'Mayor durabilidad' }, { label: 'Menor costo' },
      ], explanation: 'Las sillas ultraligeras son más livianas, eficientes y configurables para el usuario.' },
      { question: '¿Qué tipo de cojín usa aire para redistribución de presión?', options: [
        { label: 'Espuma simple' }, { label: 'ROHO', correct: true }, { label: 'Madera' }, { label: 'Gel estándar' },
      ], explanation: 'ROHO es una marca de cojines de celdas de aire interconectadas para redistribución de presión.' },
      { question: '¿Cuándo está indicado un cojín de aire?', options: [
        { label: 'Solo por comodidad' }, { label: 'Alto riesgo de úlceras por presión', correct: true }, { label: 'Solo en sillas eléctricas' }, { label: 'Solo para paraplejia' },
      ], explanation: 'Los cojines de aire están indicados para pacientes con alto riesgo de úlceras por presión.' },
      { question: '¿Qué nivel de lesión medular pierde la función del tríceps?', options: [
        { label: 'T1' }, { label: 'C6 y superior', correct: true }, { label: 'L1' }, { label: 'C8' },
      ], explanation: 'El tríceps es inervado por C7; lesiones C6 y superiores pierden esta función.' },
      { question: '¿Qué efecto tiene la función de Tilt?', options: [
        { label: 'Abre el ángulo asiento-respaldo' }, { label: 'Redistribuye presión sin cizallamiento', correct: true }, { label: 'Genera cizallamiento' }, { label: 'Solo estético' },
      ], explanation: 'El Tilt gira en bloque redistribuyendo la presión sin generar fuerzas de cizallamiento.' },
      { question: '¿De qué lado se debe usar un bastón?', options: [
        { label: 'Del mismo lado de la lesión' }, { label: 'Del lado opuesto a la lesión', correct: true }, { label: 'No importa' }, { label: 'En ambas manos' },
      ], explanation: 'El bastón se usa en el lado opuesto para reducir la carga sobre la extremidad afectada.' },
      { question: '¿Qué tipo de muleta permite uso sin manos?', options: [
        { label: 'Axilar' }, { label: 'Lofstrand (canadiense)', correct: true }, { label: 'Bastón simple' }, { label: 'Andador' },
      ], explanation: 'La muleta Lofstrand tiene un brazalete que permite soltar la empuñadura sin perder la muleta.' },
      { question: '¿Qué riesgo tiene la muleta axilar mal ajustada?', options: [
        { label: 'Solo dolor muscular' }, { label: 'Parálisis del nervio radial/plexo braquial', correct: true }, { label: 'Fractura' }, { label: 'Ninguno' },
      ], explanation: 'Una muleta axilar que presiona la axila puede dañar el plexo braquial o el nervio radial.' },
      { question: '¿Qué es un rollator?', options: [
        { label: 'Un tipo de silla de ruedas' }, { label: 'Un andador con ruedas y asiento', correct: true }, { label: 'Una muleta especial' }, { label: 'Un tipo de prótesis' },
      ], explanation: 'El rollator es un andador con ruedas, frenos y generalmente un asiento incorporado.' },
      { question: '¿Cuál es la principal causa de abandono de tecnología de asistencia?', options: [
        { label: 'Costo' }, { label: 'Falta de participación del usuario en la selección', correct: true }, { label: 'Color del dispositivo' }, { label: 'Peso del dispositivo' },
      ], explanation: 'La falta de participación del usuario en la selección y el entrenamiento es la principal causa de abandono.' },
      { question: '¿Qué proceso debe seguirse para prescribir una silla de ruedas?', options: [
        { label: 'Solo medir al paciente' }, { label: 'Valoración interdisciplinaria → Cribado → Prueba → Financiación → Entrenamiento', correct: true }, { label: 'Solo elegir por el catálogo' }, { label: 'Solo considerar el costo' },
      ], explanation: 'La prescripción requiere un proceso completo: valoración, cribado, prueba, financiación y entrenamiento.' },
      { question: '¿Qué evalúa la AEVD?', options: [
        { label: 'La postura' }, { label: 'Control electrónico del ambiente (luces, puertas, etc.)', correct: true }, { label: 'La marcha' }, { label: 'La fuerza muscular' },
      ], explanation: 'AEVD permite controlar electrónicamente el entorno del usuario (luces, puertas, computadores).' },
      { question: '¿Qué sistema de control de silla eléctrica usa un paciente con C4?', options: [
        { label: 'Joystick manual convencional' }, { label: 'Control por sorbido/soplo (sip-and-puff) o mentón', correct: true }, { label: 'Pedales' }, { label: 'Control por voz únicamente' },
      ], explanation: 'Con tetraplejia C4 (sin función de mano), se usa control por soplo/succión o mentón.' },
      { question: '¿Qué tipo de tracción es mejor para terrenos irregulares en silla eléctrica?', options: [
        { label: 'Central' }, { label: 'Trasera', correct: true }, { label: 'Delantera' }, { label: 'No hay diferencia' },
      ], explanation: 'La tracción trasera es más estable en terrenos irregulares y pendientes.' },
      { question: '¿Qué cojín combina espuma y gel?', options: [
        { label: 'ROHO' }, { label: 'Cojín combinado (hybrid)', correct: true }, { label: 'Espuma simple' }, { label: 'Aire puro' },
      ], explanation: 'Los cojines combinados integran diferentes materiales (espuma + gel) para balance de soporte y redistribución.' },
      { question: '¿Qué patrón de propulsión es más lesivo para el hombro?', options: [
        { label: 'Arco semicircular largo' }, { label: 'Empuje corto y rápido con alta frecuencia', correct: true }, { label: 'Propulsión asistida' }, { label: 'Propulsión eléctrica' },
      ], explanation: 'Los empujes cortos y frecuentes sobrecargan el hombro, aumentando el riesgo de lesión.' },
      { question: '¿Qué significan las siglas TA en rehabilitación?', options: [
        { label: 'Tensión Arterial' }, { label: 'Tecnología de Asistencia', correct: true }, { label: 'Terapia Acuática' }, { label: 'Tracción Axial' },
      ], explanation: 'TA = Tecnología de Asistencia (dispositivos que mejoran la independencia funcional).' },
      { question: '¿Qué componente de la silla de ruedas afecta la maniobrabilidad?', options: [
        { label: 'El color' }, { label: 'La posición del eje trasero', correct: true }, { label: 'El material del apoyabrazos' }, { label: 'El tipo de freno' },
      ], explanation: 'La posición del eje trasero determina la estabilidad y maniobrabilidad de la silla.' },
      { question: '¿Qué función cumple la tenodesis en relación con la tecnología asistiva?', options: [
        { label: 'Solo un principio biomecánico' }, { label: 'Permite agarre funcional sin músculos de la mano en C6', correct: true }, { label: 'No tiene relación' }, { label: 'Solo en prótesis' },
      ], explanation: 'La tenodesis permite que pacientes C6 realicen agarre funcional sin musculatura intrínseca de la mano.' },
      { question: '¿Qué tipo de silla se recomienda para paraplejía completa?', options: [
        { label: 'Eléctrica siempre' }, { label: 'Manual ultraligera (conserva función de mmss)', correct: true }, { label: 'Estándar hospitalaria' }, { label: 'Solo andador' },
      ], explanation: 'Con miembros superiores funcionales, la silla manual ultraligera promueve independencia.' },
      { question: '¿Qué característica debe tener una silla para uso deportivo?', options: [
        { label: 'Pesada y estable' }, { label: 'Ultraligera, rígida y con ángulo de camber', correct: true }, { label: 'Reclinable completamente' }, { label: 'Con motor auxiliar' },
      ], explanation: 'Las sillas deportivas son ultraligeras, rígidas y tienen ruedas con camber para giros rápidos.' },
      { question: '¿Qué es CAA?', options: [
        { label: 'Control Automático de Asistencia' }, { label: 'Comunicación Aumentativa y Alternativa', correct: true }, { label: 'Centro de Atención Ambulatoria' }, { label: 'Circuito de Acondicionamiento Aeróbico' },
      ], explanation: 'CAA = Comunicación Aumentativa y Alternativa (sistemas de comunicación para personas con limitaciones del habla).' },
      { question: '¿Qué ventaja tiene el Tilt sobre la reclinación para prevenir úlceras?', options: [
        { label: 'Mayor rango de movimiento' }, { label: 'No genera cizallamiento al redistribuir presión', correct: true }, { label: 'Es más barato' }, { label: 'Es más cómodo siempre' },
      ], explanation: 'El Tilt redistribuye presión sin las fuerzas de cizallamiento que genera la reclinación.' },
      { question: '¿Qué tipo de andador ofrece mayor estabilidad?', options: [
        { label: 'Bastón simple' }, { label: 'Andador fijo (sin ruedas)', correct: true }, { label: 'Muleta axilar' }, { label: 'Muleta Lofstrand' },
      ], explanation: 'El andador fijo (sin ruedas) ofrece máxima estabilidad pero requiere levantar para avanzar.' },
      { question: '¿Para qué paciente está indicada la CAA?', options: [
        { label: 'Solo sordos' }, { label: 'Personas con limitaciones significativas del habla', correct: true }, { label: 'Solo ciegos' }, { label: 'Solo amputados' },
      ], explanation: 'La CAA es para personas con limitaciones del habla por ELA, parálisis cerebral, ACV, etc.' },
    ]
  },
]
