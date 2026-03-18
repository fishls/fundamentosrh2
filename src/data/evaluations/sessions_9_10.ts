import { EvalDef } from '@/components/ui/EvalEngine'

export const sessions9_10: EvalDef[] = [
  // ── Sesión 9 ───────────────────────────────────────────────
  {
    classId: 9, title: 'Evaluación: Ortesis Básica',
    questions: [
      // Existing 7
      { question: '¿Cómo clasifica la ISO las ortesis?', options: [
        { label: 'Por material de fabricación' }, { label: 'Por las articulaciones que abarcan', correct: true }, { label: 'Por el fabricante' }, { label: 'Por el peso del paciente' },
      ], explanation: 'La ISO clasifica las ortesis según las articulaciones que abarcan (AFO, KAFO, etc.).' },
      { question: '¿Qué principio biomecánico usa una AFO?', options: [
        { label: 'Palanca de primer orden' }, { label: 'Sistema de 3 puntos de presión', correct: true }, { label: 'Tracción axial' }, { label: 'Compresión neumática' },
      ], explanation: 'Las ortesis usan un sistema de 3 puntos de presión para controlar el eje articular.' },
      { question: '¿Qué tipo de AFO se indica si el cuádriceps es débil?', options: [
        { label: 'AFO con articulación libre' }, { label: 'AFO rígida', correct: true }, { label: 'AFO dinámica de fibra de carbono' }, { label: 'AFO con resorte posterior' },
      ], explanation: 'La AFO rígida bloquea la dorsiflexión para forzar la FRS anterior a la rodilla → extensión pasiva.' },
      { question: '¿Qué efecto busca un AFO al mover la FRS anterior a la rodilla?', options: [
        { label: 'Flexión de rodilla' }, { label: 'Extensión pasiva de rodilla', correct: true }, { label: 'Rotación de cadera' }, { label: 'Abducción de tobillo' },
      ], explanation: 'Al mover la FRS anterior a la rodilla, se genera un momento de extensión pasiva.' },
      { question: '¿Qué material ofrece respuesta elástica en AFOs dinámicas?', options: [
        { label: 'Acero inoxidable' }, { label: 'Fibra de carbono', correct: true }, { label: 'Polipropileno rígido' }, { label: 'Aluminio' },
      ], explanation: 'La fibra de carbono almacena energía elástica y la devuelve durante la propulsión.' },
      { question: '¿Qué tipo de AFO se indica con espasticidad en flexores plantares?', options: [
        { label: 'AFO articulada libre' }, { label: 'AFO rígida con tope de flexión plantar', correct: true }, { label: 'AFO de fibra de carbono' }, { label: 'Plantilla termoconformada' },
      ], explanation: 'El tope de flexión plantar previene que la espasticidad genere recurvatum.' },
      { question: '¿Cuál es la definición de ortesis según la ISPO?', options: [
        { label: 'Un implante quirúrgico permanente' }, { label: 'Dispositivo externo que modifica las fuerzas sobre el cuerpo', correct: true }, { label: 'Un aparato de medición articular' }, { label: 'Una prótesis temporal' },
      ], explanation: 'La ISPO define ortesis como dispositivo externo que modifica las características estructurales y funcionales del sistema neuromuscular.' },
      // New 33
      { question: '¿Qué significan las siglas AFO?', options: [
        { label: 'Aparato Fijador Ortopédico' }, { label: 'Ankle-Foot Orthosis (Ortesis Tobillo-Pie)', correct: true }, { label: 'Articulación Funcional Operativa' }, { label: 'Asistente de Flexión Ortésica' },
      ], explanation: 'AFO = Ankle-Foot Orthosis (Ortesis de Tobillo-Pie).' },
      { question: '¿Qué objetivos tiene una ortesis? (señale el INCORRECTO)', options: [
        { label: 'Protección (estabilizar)' }, { label: 'Alineación/corrección' }, { label: 'Asistencia al movimiento' }, { label: 'Reemplazar permanentemente la articulación', correct: true },
      ], explanation: 'La ortesis no reemplaza la articulación; protege, alinea y asiste.' },
      { question: '¿Qué tipo de ortesis inmoviliza sin permitir movimiento?', options: [
        { label: 'Dinámica' }, { label: 'Estática', correct: true }, { label: 'Articulada libre' }, { label: 'De resorte' },
      ], explanation: 'Las ortesis estáticas inmovilizan la articulación sin permitir movimiento.' },
      { question: '¿Qué tipo de ortesis proporciona fuerza elástica para asistir al movimiento?', options: [
        { label: 'Estática' }, { label: 'Dinámica', correct: true }, { label: 'Rígida' }, { label: 'De yeso' },
      ], explanation: 'Las ortesis dinámicas proporcionan fuerza elástica para asistir al movimiento articular.' },
      { question: '¿Qué diferencia una ortesis estática progresiva de una estática simple?', options: [
        { label: 'No hay diferencia' }, { label: 'La progresiva usa tornillos/tensores para avanzar gradualmente', correct: true }, { label: 'La simple es más cara' }, { label: 'La progresiva es electrónica' },
      ], explanation: 'La estática progresiva incorpora mecanismos (tornillos/tensores) para ajustar gradualmente la posición.' },
      { question: '¿Cuántos puntos de presión usa el sistema ortésico básico?', options: [
        { label: '2' }, { label: '3', correct: true }, { label: '4' }, { label: '1' },
      ], explanation: 'El sistema fundamental usa 3 puntos de presión: dos en una dirección y uno central opuesto.' },
      { question: '¿Qué debe ser el ángulo de tracción ortésica para máxima eficiencia?', options: [
        { label: 'Paralelo al hueso' }, { label: 'Perpendicular al eje óseo', correct: true }, { label: '45 grados' }, { label: 'Variable' },
      ], explanation: 'El ángulo perpendicular al eje óseo maximiza el componente de fuerza útil.' },
      { question: '¿Qué es la FRS en el contexto ortésico?', options: [
        { label: 'Fuerza de Resistencia Superficial' }, { label: 'Fuerza de Reacción al Suelo', correct: true }, { label: 'Frecuencia de Respuesta Sensitiva' }, { label: 'Factor de Riesgo Sistémico' },
      ], explanation: 'FRS = Fuerza de Reacción al Suelo, la fuerza que el suelo ejerce sobre el pie durante el apoyo.' },
      { question: '¿Cómo genera extensión de rodilla una AFO que bloquea la dorsiflexión?', options: [
        { label: 'Empujando la rodilla directamente' }, { label: 'Desplazando la FRS anterior al eje de la rodilla', correct: true }, { label: 'Contrayendo el cuádriceps' }, { label: 'Estirando los isquiotibiales' },
      ], explanation: 'Al bloquear la dorsiflexión, la FRS se desplaza anterior al eje de la rodilla, generando extensión pasiva.' },
      { question: '¿Qué es el recurvatum de rodilla?', options: [
        { label: 'Flexión excesiva' }, { label: 'Hiperextensión de rodilla', correct: true }, { label: 'Rotación de rodilla' }, { label: 'Valgismo' },
      ], explanation: 'El recurvatum es la hiperextensión patológica de la rodilla (genu recurvatum).' },
      { question: '¿Qué función cumple un tope de dorsiflexión en una AFO?', options: [
        { label: 'Permitir mayor dorsiflexión' }, { label: 'Limitar la dorsiflexión para asistir al cuádriceps débil', correct: true }, { label: 'Aumentar la flexión plantar' }, { label: 'Solo estética' },
      ], explanation: 'El tope de dorsiflexión mantiene la FRS anterior al eje de la rodilla, asistiendo al cuádriceps.' },
      { question: '¿Qué tipo de AFO es más liviana y devuelve energía?', options: [
        { label: 'AFO metálica bilateral' }, { label: 'AFO dinámica de fibra de carbono', correct: true }, { label: 'AFO de yeso' }, { label: 'AFO de polipropileno rígido' },
      ], explanation: 'La AFO de fibra de carbono es liviana y almacena/devuelve energía elástica.' },
      { question: '¿Qué patología puede causar "pie caído" que requiere AFO?', options: [
        { label: 'Fascitis plantar' }, { label: 'Lesión del nervio peroneo', correct: true }, { label: 'Espolón calcáneo' }, { label: 'Hallux valgus' },
      ], explanation: 'La lesión del nervio peroneo causa debilidad de dorsiflexores (pie caído).' },
      { question: '¿Qué significan las siglas KAFO?', options: [
        { label: 'Kinematic Ankle Foot Orthosis' }, { label: 'Knee-Ankle-Foot Orthosis', correct: true }, { label: 'Kinesio Articular Functional Orthosis' }, { label: 'Kinetic Assistive Foot Orthosis' },
      ], explanation: 'KAFO = Knee-Ankle-Foot Orthosis (Ortesis de Rodilla-Tobillo-Pie).' },
      { question: '¿Cuándo se indica una KAFO en lugar de una AFO?', options: [
        { label: 'Solo debilidad de tobillo' }, { label: 'Debilidad de tobillo Y rodilla (cuádriceps)', correct: true }, { label: 'Solo para deportistas' }, { label: 'Solo en niños' },
      ], explanation: 'La KAFO se indica cuando hay debilidad tanto de tobillo como de rodilla.' },
      { question: '¿Qué estructura de 3 puntos controla una AFO?', options: [
        { label: 'Cadera, rodilla y tobillo' }, { label: 'Pantorrilla, tibia anterior y planta', correct: true }, { label: 'Muslo, rótula y pie' }, { label: 'Solo el talón' },
      ], explanation: 'Los 3 puntos de presión típicos son: pantorrilla posterior, tibia anterior y planta.' },
      { question: '¿Qué tipo de ortesis "en serie" se usa para contracturas articulares?', options: [
        { label: 'Dinámica con resorte' }, { label: 'Estática en serie (cambio progresivo de yesos)', correct: true }, { label: 'AFO articulada' }, { label: 'Ortesis deportiva' },
      ], explanation: 'La ortesis estática en serie usa cambios progresivos de posición (ej: yesos seriados) para contracturas.' },
      { question: '¿Qué propiedad de la fibra de carbono la hace ideal para AFOs dinámicas?', options: [
        { label: 'Es más pesada' }, { label: 'Almacena y devuelve energía elástica', correct: true }, { label: 'Es más barata' }, { label: 'Es más rígida que el acero' },
      ], explanation: 'La fibra de carbono almacena energía durante la carga y la devuelve en la propulsión.' },
      { question: '¿Qué significan las siglas WHO en ortesis?', options: [
        { label: 'World Health Organization' }, { label: 'Wrist-Hand Orthosis (Ortesis Muñeca-Mano)', correct: true }, { label: 'Wide Hip Orthosis' }, { label: 'Weight Holding Orthosis' },
      ], explanation: 'WHO = Wrist-Hand Orthosis (Ortesis de Muñeca-Mano).' },
      { question: '¿Qué objetivo tiene la ortesis correctiva?', options: [
        { label: 'Solo inmovilizar' }, { label: 'Prevenir o corregir deformidades', correct: true }, { label: 'Aumentar la fuerza' }, { label: 'Solo cosmética' },
      ], explanation: 'Las ortesis correctivas buscan prevenir o corregir deformidades progresivas.' },
      { question: '¿Qué efecto tiene una AFO con articulación libre sobre la marcha?', options: [
        { label: 'Bloquea completamente el tobillo' }, { label: 'Permite flexión dorsal y plantar controlada', correct: true }, { label: 'Solo permite flexión plantar' }, { label: 'Inmoviliza la rodilla' },
      ], explanation: 'Una AFO articulada libre permite el movimiento de tobillo con control dentro de los rangos.' },
      { question: '¿Qué evalúa el vector de FRS en la prescripción ortésica?', options: [
        { label: 'La temperatura de la ortesis' }, { label: 'La dirección de la fuerza respecto al eje articular', correct: true }, { label: 'El peso de la ortesis' }, { label: 'El color del material' },
      ], explanation: 'El vector de FRS determina si se genera un momento de flexión o extensión en la articulación.' },
      { question: '¿Qué tipo de paciente se beneficia más de una AFO con resorte posterior?', options: [
        { label: 'Paciente con espasticidad severa' }, { label: 'Paciente con debilidad de dorsiflexores y cuádriceps funcional', correct: true }, { label: 'Paciente en silla de ruedas' }, { label: 'Paciente con fractura de tobillo' },
      ], explanation: 'El resorte posterior asiste la dorsiflexión deficiente cuando el cuádriceps puede controlar la rodilla.' },
      { question: '¿Qué tipo de ortesis se nombra según las articulaciones que controla?', options: [
        { label: 'Por marca comercial' }, { label: 'Por nomenclatura ISO funcional', correct: true }, { label: 'Por color' }, { label: 'Por el médico que la prescribe' },
      ], explanation: 'La clasificación ISO nombra las ortesis por las articulaciones que abarcan (ej: AFO, KAFO, TLSO).' },
      { question: '¿Qué hace una ortesis de asistencia?', options: [
        { label: 'Solo inmoviliza' }, { label: 'Compensa la debilidad muscular', correct: true }, { label: 'Solo protege' }, { label: 'Solo alinea' },
      ], explanation: 'Las ortesis de asistencia compensan la debilidad muscular para permitir la función.' },
      { question: '¿Qué ocurre si la FRS pasa posterior al eje de la rodilla en un paciente con cuádriceps débil?', options: [
        { label: 'Extensión de rodilla' }, { label: 'Flexión de rodilla (colapso)', correct: true }, { label: 'Rotación' }, { label: 'No hay efecto' },
      ], explanation: 'Si la FRS pasa posterior al eje de la rodilla sin cuádriceps funcional, la rodilla se flexiona (colapso).' },
      { question: '¿Qué determina la selección entre AFO rígida y articulada?', options: [
        { label: 'Solo la estética' }, { label: 'El estado funcional del cuádriceps y la presencia de espasticidad', correct: true }, { label: 'La edad del paciente' }, { label: 'El costo' },
      ], explanation: 'La fuerza del cuádriceps y la presencia de espasticidad determinan el tipo de AFO prescrita.' },
    ]
  },
  // ── Sesión 10 ──────────────────────────────────────────────
  {
    classId: 10, title: 'Evaluación: Ortesis por Región',
    questions: [
      // Existing 7
      { question: '¿Qué ortesis se indica para túnel carpiano?', options: [
        { label: 'Espica de pulgar' }, { label: 'WHO en 0-5° extensión', correct: true }, { label: 'Cincha antebraquial' }, { label: 'Ortesis dinámica de extensión' },
      ], explanation: 'La WHO en extensión leve evita la flexión nocturna que aumenta la presión en el canal carpiano.' },
      { question: '¿Cómo funciona una KO "unloader"?', options: [
        { label: 'Comprime la articulación uniformemente' }, { label: 'Valgiza para descargar el compartimento medial', correct: true }, { label: 'Inmoviliza la rodilla completamente' }, { label: 'Aumenta la flexión' },
      ], explanation: 'La KO unloader aplica una fuerza de valgización para descargar el compartimento articular medial.' },
      { question: '¿Qué mecanismo usa el LSO para aliviar la lumbalgia?', options: [
        { label: 'Tracción vertebral' }, { label: 'Aumento de presión intraabdominal', correct: true }, { label: 'Calentamiento profundo' }, { label: 'Estimulación eléctrica' },
      ], explanation: 'El corsé aumenta la presión intraabdominal, lo que descarga los discos intervertebrales.' },
      { question: '¿Cuándo debe retirarse el LSO?', options: [
        { label: 'Nunca, usar 24 horas' }, { label: 'Para dormir y reposo', correct: true }, { label: 'Solo durante actividad física' }, { label: 'Después de 6 meses automáticamente' },
      ], explanation: 'El LSO se usa durante la carga y se retira para dormir para evitar atrofia por dependencia.' },
      { question: '¿Qué TLSO usa hiperextensión por 3 puntos?', options: [
        { label: 'Collarín Philadelphia' }, { label: 'TLSO Jewett', correct: true }, { label: 'LSO de tela' }, { label: 'Halo cervical' },
      ], explanation: 'El TLSO Jewett aplica hiperextensión por 3 puntos para fracturas por compresión vertebral.' },
      { question: '¿Qué ortesis se indica para tendinitis De Quervain?', options: [
        { label: 'WHO de muñeca' }, { label: 'Espica de pulgar', correct: true }, { label: 'Cincha antebraquial' }, { label: 'KO de rodilla' },
      ], explanation: 'La espica de pulgar inmoviliza el primer compartimento dorsal afectado en De Quervain.' },
      { question: '¿Qué ortesis cervical proporciona restricción MÁXIMA?', options: [
        { label: 'Collarín blando' }, { label: 'Philadelphia' }, { label: 'Halo', correct: true }, { label: 'Minerva' },
      ], explanation: 'El halo proporciona la máxima restricción de movimiento cervical de todas las ortesis.' },
      // New 33
      { question: '¿Qué posición de muñeca se usa para el WHO en túnel carpiano?', options: [
        { label: 'Flexión máxima' }, { label: '0-5 grados de extensión', correct: true }, { label: '30 grados de extensión' }, { label: 'Desviación cubital' },
      ], explanation: 'Se usa 0-5° de extensión para minimizar la presión en el canal carpiano.' },
      { question: '¿Qué collarín tiene función principalmente cinestésica (recordar postura)?', options: [
        { label: 'Halo' }, { label: 'Collarín blando', correct: true }, { label: 'Philadelphia' }, { label: 'SOMI' },
      ], explanation: 'El collarín blando tiene función principalmente cinestésica, recordando al paciente limitar el movimiento.' },
      { question: '¿Qué ortesis cervical rígida se usa después de fracturas estables?', options: [
        { label: 'Collarín blando' }, { label: 'Philadelphia', correct: true }, { label: 'Banda de tela' }, { label: 'Ninguna' },
      ], explanation: 'El collarín Philadelphia proporciona restricción rígida para fracturas cervicales estables.' },
      { question: '¿Qué riesgo tiene el uso prolongado del LSO sin retirarlo?', options: [
        { label: 'Aumento de fuerza' }, { label: 'Atrofia por dependencia', correct: true }, { label: 'Mejora de la postura' }, { label: 'Aumento de la flexibilidad' },
      ], explanation: 'El uso continuo del LSO puede causar atrofia de la musculatura paravertebral por dependencia.' },
      { question: '¿Qué TLSO tiene forma similar al Jewett pero con placa posterior?', options: [
        { label: 'LSO de tela' }, { label: 'CASH (Cruciform Anterior Spinal Hyperextension)', correct: true }, { label: 'Philadelphia' }, { label: 'Halo' },
      ], explanation: 'El CASH es similar al Jewett, usando hiperextensión por 3 puntos con diseño cruciforme.' },
      { question: '¿Qué compartimento de la rodilla descarga una KO "unloader" valguizante?', options: [
        { label: 'Lateral' }, { label: 'Medial', correct: true }, { label: 'Anterior' }, { label: 'Posterior' },
      ], explanation: 'La KO valguizante descarga el compartimento medial afectado en gonartrosis medial.' },
      { question: '¿Qué patología se trata con cincha antebraquial?', options: [
        { label: 'Túnel carpiano' }, { label: 'Epicondilitis (codo de tenista)', correct: true }, { label: 'De Quervain' }, { label: 'Fractura de muñeca' },
      ], explanation: 'La cincha antebraquial cambia el punto de tensión muscular en epicondilitis.' },
      { question: '¿Qué material se usa para ortesis de mano personalizadas?', options: [
        { label: 'Acero inoxidable' }, { label: 'Termoplástico de baja temperatura', correct: true }, { label: 'Fibra de vidrio' }, { label: 'Madera' },
      ], explanation: 'Los termoplásticos de baja temperatura se moldean fácilmente para ortesis de mano.' },
      { question: '¿Qué material se usa para ortesis que soportan carga (KAFO)?', options: [
        { label: 'Termoplástico de baja temperatura' }, { label: 'Termoplástico de alta temperatura o metal', correct: true }, { label: 'Papel' }, { label: 'Silicona blanda' },
      ], explanation: 'Las ortesis de carga requieren materiales de alta temperatura o metálicos para resistencia.' },
      { question: '¿Qué efecto biomecánico tiene un tope de flexión plantar en AFO?', options: [
        { label: 'Permite más flexión plantar' }, { label: 'Previene el recurvatum al limitar el momento de extensión excesiva', correct: true }, { label: 'Aumenta la dorsiflexión' }, { label: 'No tiene efecto' },
      ], explanation: 'El tope de flexión plantar evita que la espasticidad lleve la rodilla a hiperextensión.' },
      { question: '¿Qué posición es "funcional" para la muñeca?', options: [
        { label: 'Flexión máxima' }, { label: 'Ligera extensión (20-30°)', correct: true }, { label: 'Posición neutra exacta' }, { label: 'Desviación radial' },
      ], explanation: 'La posición funcional de la muñeca es de ligera extensión (20-30°) que optimiza la función de la mano.' },
      { question: '¿Por qué está indicada la WHO nocturna en túnel carpiano?', options: [
        { label: 'Para aumentar la fuerza' }, { label: 'Para evitar la flexión de muñeca durante el sueño que comprime el nervio', correct: true }, { label: 'Para calentar la muñeca' }, { label: 'Solo por comodidad' },
      ], explanation: 'La flexión nocturna de muñeca aumenta la presión en el canal carpiano; la WHO la previene.' },
      { question: '¿Qué estructura inmovilizan las ortesis espica de pulgar?', options: [
        { label: 'Muñeca solamente' }, { label: 'Articulación carpometacarpiana (CMC) y/o metacarpofalángica del pulgar', correct: true }, { label: 'Todos los dedos' }, { label: 'Codo' },
      ], explanation: 'La espica de pulgar inmoviliza la articulación CMC y/o MF del primer dedo.' },
      { question: '¿Qué significa LSO?', options: [
        { label: 'Lateral Spinal Orthosis' }, { label: 'Lumbo-Sacral Orthosis', correct: true }, { label: 'Long Standing Orthosis' }, { label: 'Low Support Orthosis' },
      ], explanation: 'LSO = Lumbo-Sacral Orthosis (Ortesis Lumbo-Sacra).' },
      { question: '¿Qué significa TLSO?', options: [
        { label: 'Total Limb Support Orthosis' }, { label: 'Thoraco-Lumbo-Sacral Orthosis', correct: true }, { label: 'Therapeutic Long Standing Orthosis' }, { label: 'Trunk Lateral Support Orthosis' },
      ], explanation: 'TLSO = Thoraco-Lumbo-Sacral Orthosis (Ortesis Toraco-Lumbo-Sacra).' },
      { question: '¿Qué patología se trata con TLSO Jewett?', options: [
        { label: 'Escoliosis idiopática' }, { label: 'Fractura vertebral por compresión', correct: true }, { label: 'Hernia discal' }, { label: 'Esguince cervical' },
      ], explanation: 'El Jewett se usa en fracturas por compresión vertebral estables para mantener hiperextensión.' },
      { question: '¿Qué ventaja tiene el aluminio como material ortésico?', options: [
        { label: 'Mayor rigidez que el acero' }, { label: 'Ligereza con resistencia adecuada', correct: true }, { label: 'Es más barato' }, { label: 'Es más resistente al impacto' },
      ], explanation: 'El aluminio ofrece buena resistencia con menor peso comparado con el acero.' },
      { question: '¿Qué mecanismo usa la cincha antebraquial para epicondilitis?', options: [
        { label: 'Inmovilización del codo' }, { label: 'Cambia el punto de inserción funcional de la tensión muscular', correct: true }, { label: 'Genera calor' }, { label: 'Estimulación eléctrica' },
      ], explanation: 'La cincha cambia el punto de mayor tensión muscular, aliviando el epicóndilo.' },
      { question: '¿Qué ortesis se indica para artrosis CMC del pulgar?', options: [
        { label: 'WHO' }, { label: 'Espica de pulgar', correct: true }, { label: 'Cincha antebraquial' }, { label: 'TLSO' },
      ], explanation: 'La espica de pulgar inmoviliza la articulación CMC afectada por rizartrosis.' },
      { question: 'Para lumbalgia mecánica aguda, ¿qué tipo de LSO se usa?', options: [
        { label: 'TLSO rígido' }, { label: 'Corsé de tela flexible', correct: true }, { label: 'Halo cervical' }, { label: 'KO de rodilla' },
      ], explanation: 'Un corsé de tela flexible proporciona soporte y aumento de presión intraabdominal para lumbalgia mecánica.' },
      { question: '¿Qué aplica un collar cervical tipo Minerva?', options: [
        { label: 'Tracción activa' }, { label: 'Restricción cervical y torácica alta', correct: true }, { label: 'Solo calor' }, { label: 'Estimulación eléctrica' },
      ], explanation: 'La Minerva restringe el movimiento cervical y torácico alto, más que el Philadelphia.' },
      { question: '¿Qué tipo de KO se usa para proteger ligamentos tras cirugía?', options: [
        { label: 'KO unloader' }, { label: 'KO funcional con control de rangos', correct: true }, { label: 'Solo vendaje' }, { label: 'Ortesis de tobillo' },
      ], explanation: 'Las KO funcionales con control de rangos protegen los ligamentos reparados post-quirúrgicamente.' },
      { question: '¿Qué efecto tiene un tope de dorsiflexión en una AFO?', options: [
        { label: 'Permite mayor dorsiflexión' }, { label: 'Limita la dorsiflexión para asistir al cuádriceps', correct: true }, { label: 'Aumenta la pronación' }, { label: 'Solo cosmético' },
      ], explanation: 'El tope de dorsiflexión mantiene la FRS anterior a la rodilla, compensando debilidad de cuádriceps.' },
      { question: '¿Qué indicación tiene la KO "unloader" varruizante?', options: [
        { label: 'Artrosis del compartimento medial' }, { label: 'Artrosis del compartimento lateral', correct: true }, { label: 'Lesión de LCA' }, { label: 'Fractura de rótula' },
      ], explanation: 'La KO varrizante descarga el compartimento lateral en gonartrosis lateral.' },
      { question: '¿Cuál es el mayor riesgo de una ortesis cervical rígida mal ajustada?', options: [
        { label: 'Dolor muscular' }, { label: 'Úlceras por presión cutánea', correct: true }, { label: 'Mejora excesiva' }, { label: 'Flexibilidad aumentada' },
      ], explanation: 'Las ortesis cervicales rígidas mal ajustadas pueden causar úlceras por presión en mentón, occipucio o esternón.' },
      { question: '¿Cuándo se indica un halo como ortesis cervical?', options: [
        { label: 'Cervicalgia leve' }, { label: 'Fractura cervical inestable que requiere máxima inmovilización', correct: true }, { label: 'Contractura muscular' }, { label: 'Tortícolis' },
      ], explanation: 'El halo se indica en fracturas cervicales inestables o post-quirúrgicas que requieren máxima restricción.' },
    ]
  },
]
