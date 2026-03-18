import { EvalDef } from '@/components/ui/EvalEngine'

export const sessions7_8: EvalDef[] = [
  // ── Sesión 7 ───────────────────────────────────────────────
  {
    classId: 7, title: 'Evaluación: Medios Físicos',
    questions: [
      // Existing 7
      { question: '¿Cuál es la Regla de Oro de la onda corta?', options: [
        { label: '"Sin agua ni metal"', correct: true }, { label: '"Sin piel ni hueso"' }, { label: '"Sin nervio ni tendón"' }, { label: '"Sin grasa ni músculo"' },
      ], explanation: 'La onda corta está absolutamente contraindicada con implantes metálicos y marcapasos.' },
      { question: '¿Por qué se tolera la parafina a 52°C mejor que el agua a esa temperatura?', options: [
        { label: 'La parafina enfría la piel' }, { label: 'Tiene baja conductividad térmica', correct: true }, { label: 'Es más densa que el agua' }, { label: 'Contiene anestésicos naturales' },
      ], explanation: 'La baja conductividad térmica de la parafina permite tolerar temperaturas más altas sin quemar.' },
      { question: '¿Qué efecto produce el ultrasonido continuo?', options: [
        { label: 'Solo efectos mecánicos' }, { label: 'Calentamiento profundo predominante', correct: true }, { label: 'Solo cavitación' }, { label: 'Enfriamiento tisular' },
      ], explanation: 'El ultrasonido continuo produce predominantemente calentamiento profundo en tejidos.' },
      { question: '¿Por qué el ultrasonido es seguro sobre metal pero NO sobre plástico?', options: [
        { label: 'El metal refleja las ondas' }, { label: 'El metal conduce rápido el calor; el plástico lo concentra', correct: true }, { label: 'El plástico absorbe toda la energía' }, { label: 'No hay diferencia real' },
      ], explanation: 'El metal disipa el calor rápidamente; el polietileno concentra la energía causando sobrecalentamiento.' },
      { question: '¿En qué fase de lesión se indica preferiblemente la crioterapia?', options: [
        { label: 'Fase crónica' }, { label: 'Fase aguda (primeras 48-72h)', correct: true }, { label: 'Fase de remodelación' }, { label: 'Solo post-quirúrgica' },
      ], explanation: 'La crioterapia es más efectiva en fase aguda para controlar inflamación y dolor.' },
      { question: '¿Qué ventaja ofrece la iontoforesis?', options: [
        { label: 'Mayor penetración que inyecciones' }, { label: 'Administración transdérmica no invasiva de fármacos', correct: true }, { label: 'Calentamiento profundo' }, { label: 'Estimulación neural directa' },
      ], explanation: 'La iontoforesis usa corriente eléctrica para introducir fármacos a través de la piel de forma no invasiva.' },
      { question: '¿Cuánto puede aumentar la síntesis de ATP la microcorriente?', options: [
        { label: '50%' }, { label: '500%', correct: true }, { label: '1000%' }, { label: '100%' },
      ], explanation: 'La microcorriente (MIC) puede aumentar la síntesis de ATP hasta un 500%.' },
      // New 33
      { question: '¿Qué efecto produce la crioterapia a nivel vascular?', options: [
        { label: 'Vasodilatación' }, { label: 'Vasoconstricción', correct: true }, { label: 'No afecta los vasos' }, { label: 'Angiogénesis' },
      ], explanation: 'La crioterapia produce vasoconstricción, reduciendo el flujo sanguíneo y el edema.' },
      { question: '¿Qué tipo de termoterapia es el paquete caliente?', options: [
        { label: 'Profunda' }, { label: 'Superficial', correct: true }, { label: 'Diatermia' }, { label: 'Electromagnética' },
      ], explanation: 'El paquete caliente es una modalidad de termoterapia superficial.' },
      { question: '¿Para qué zonas es ideal la parafina?', options: [
        { label: 'Espalda y tronco' }, { label: 'Manos y pies', correct: true }, { label: 'Muslos' }, { label: 'Cuello' },
      ], explanation: 'La parafina es particularmente útil para manos y pies por su conformación a zonas irregulares.' },
      { question: '¿Qué frecuencia mínima define el ultrasonido "terapéutico"?', options: [
        { label: '>100 Hz' }, { label: '>20 kHz', correct: true }, { label: '>1 MHz' }, { label: '>100 MHz' },
      ], explanation: 'El ultrasonido terapéutico usa ondas con frecuencia >20 kHz (típicamente 1-3 MHz).' },
      { question: '¿Qué medio es esencial para aplicar ultrasonido?', options: [
        { label: 'Alcohol' }, { label: 'Gel de conducción', correct: true }, { label: 'Talco' }, { label: 'Aceite mineral' },
      ], explanation: 'El gel es necesario porque el ultrasonido no puede penetrar el aire.' },
      { question: '¿Qué efecto mecánico produce el ultrasonido?', options: [
        { label: 'Magnetización' }, { label: 'Cavitación', correct: true }, { label: 'Ionización' }, { label: 'Sublimación' },
      ], explanation: 'La cavitación es el efecto mecánico del ultrasonido por formación de microburbujas.' },
      { question: '¿Qué diferencia el ultrasonido pulsado del continuo?', options: [
        { label: 'No hay diferencia' }, { label: 'El pulsado minimiza el calentamiento, predominando efectos mecánicos', correct: true }, { label: 'El pulsado calienta más' }, { label: 'Solo la frecuencia' },
      ], explanation: 'El modo pulsado reduce el efecto térmico, priorizando los efectos mecánicos no térmicos.' },
      { question: '¿Qué teoría explica el mecanismo del TENS?', options: [
        { label: 'Teoría de la evolución' }, { label: 'Teoría de la puerta (gate control)', correct: true }, { label: 'Teoría del caos' }, { label: 'Teoría de la relatividad' },
      ], explanation: 'El TENS funciona según la teoría de la puerta, bloqueando la señal de dolor en la médula.' },
      { question: '¿Qué activa la microcorriente (MIC) además de ATP?', options: [
        { label: 'Osteoclastos' }, { label: 'Células satélite para regeneración', correct: true }, { label: 'Adipocitos' }, { label: 'Eritrocitos' },
      ], explanation: 'La MIC activa células satélite que participan en la regeneración muscular.' },
      { question: '¿Qué tipo de láser se usa en rehabilitación?', options: [
        { label: 'Láser de alta potencia quirúrgico' }, { label: 'Láser de baja potencia (LLLT)', correct: true }, { label: 'Láser industrial' }, { label: 'Láser cosmético' },
      ], explanation: 'Se usa el LLLT (Low Level Laser Therapy) que modula la proliferación celular sin calor significativo.' },
      { question: '¿Qué patología es indicación principal de ondas de choque (TOCE)?', options: [
        { label: 'Contractura muscular leve' }, { label: 'Fascitis plantar crónica', correct: true }, { label: 'Fractura aguda' }, { label: 'TVP' },
      ], explanation: 'Las ondas de choque están indicadas especialmente en fascitis plantar refractaria y tendinopatías calcificantes.' },
      { question: '¿En qué está contraindicada la termoterapia superficial?', options: [
        { label: 'Dolor crónico' }, { label: 'Inflamación aguda', correct: true }, { label: 'Contractura muscular' }, { label: 'Rigidez articular' },
      ], explanation: 'El calor está contraindicado en inflamación aguda porque aumentaría el edema y la vasodilatación.' },
      { question: '¿Qué diatermia usa campos electromagnéticos de alta frecuencia?', options: [
        { label: 'Crioterapia' }, { label: 'Onda corta', correct: true }, { label: 'Ultrasonido' }, { label: 'TENS' },
      ], explanation: 'La diatermia de onda corta usa campos electromagnéticos de alta frecuencia para calentar tejidos.' },
      { question: '¿Qué efecto tiene el calor superficial sobre el flujo sanguíneo?', options: [
        { label: 'Lo reduce' }, { label: 'Lo aumenta (vasodilatación)', correct: true }, { label: 'No lo modifica' }, { label: 'Lo invierte' },
      ], explanation: 'El calor produce vasodilatación, aumentando el flujo sanguíneo local.' },
      { question: '¿Qué contraindicación comparten la onda corta y los implantes metálicos?', options: [
        { label: 'Dolor localizado' }, { label: 'Riesgo de quemadura por calentamiento del metal', correct: true }, { label: 'Ninguna' }, { label: 'Solo cosmética' },
      ], explanation: 'El campo electromagnético puede calentar selectivamente el metal, causando quemaduras internas.' },
      { question: '¿En qué patología NO se debe usar calor local?', options: [
        { label: 'Artrosis crónica' }, { label: 'Neoplasia (cáncer)', correct: true }, { label: 'Dolor miofascial' }, { label: 'Rigidez matutina' },
      ], explanation: 'El calor está contraindicado sobre neoplasias porque puede estimular el crecimiento tumoral.' },
      { question: '¿Hay contraindicación de ultrasonido sobre lentes de contacto?', options: [
        { label: 'No' }, { label: 'Sí, sobre los ojos y sus contenidos', correct: true }, { label: 'Solo en modo continuo' }, { label: 'Solo pulsado' },
      ], explanation: 'El ultrasonido está contraindicado sobre los ojos por el riesgo de daño a estructuras delicadas.' },
      { question: '¿Qué efecto tiene la crioterapia sobre la tasa metabólica?', options: [
        { label: 'La aumenta' }, { label: 'La reduce', correct: true }, { label: 'No la modifica' }, { label: 'La duplica' },
      ], explanation: 'La crioterapia reduce la tasa metabólica tisular, disminuyendo la demanda de oxígeno.' },
      { question: '¿Cuánto tiempo se aplica típicamente la crioterapia?', options: [
        { label: '1-3 minutos' }, { label: '15-20 minutos', correct: true }, { label: '60 minutos' }, { label: '5 segundos' },
      ], explanation: 'La crioterapia se aplica típicamente 15-20 minutos para lograr efectos terapéuticos sin riesgo.' },
      { question: '¿Qué medio físico se usa para administrar dexametasona sin inyección?', options: [
        { label: 'Ultrasonido' }, { label: 'Iontoforesis', correct: true }, { label: 'Onda corta' }, { label: 'TENS' },
      ], explanation: 'La iontoforesis permite administrar fármacos como dexametasona a través de la piel usando corriente.' },
      { question: '¿Qué modalidad de termoterapia profunda usa microondas?', options: [
        { label: 'Solo la onda corta' }, { label: 'Diatermia por microondas', correct: true }, { label: 'Parafina' }, { label: 'Infrarrojos' },
      ], explanation: 'Las microondas son otra forma de diatermia (termoterapia profunda) que calienta tejidos superficiales más selectivamente.' },
      { question: '¿Qué ventaja tiene la crioterapia en lesiones post-quirúrgicas?', options: [
        { label: 'Aumenta el sangrado' }, { label: 'Reduce dolor, edema e inflamación', correct: true }, { label: 'Acelera la cicatrización' }, { label: 'Solo estética' },
      ], explanation: 'La crioterapia post-quirúrgica reduce dolor, edema e inflamación controlando la respuesta inflamatoria.' },
      { question: '¿Qué corriente eléctrica se usa para bloquear el dolor?', options: [
        { label: 'Galvánica' }, { label: 'TENS', correct: true }, { label: 'Farádica' }, { label: 'Corriente rusa' },
      ], explanation: 'El TENS (Estimulación Nerviosa Eléctrica Transcutánea) bloquea la señal de dolor.' },
      { question: '¿Qué efecto tiene el ultrasonido sobre la síntesis de colágeno?', options: [
        { label: 'La inhibe' }, { label: 'La estimula', correct: true }, { label: 'No tiene efecto' }, { label: 'La destruye' },
      ], explanation: 'El ultrasonido estimula los fibroblastos y la síntesis de colágeno para la reparación tisular.' },
      { question: '¿Por qué está contraindicada la onda corta en pacientes con marcapasos?', options: [
        { label: 'Dolor' }, { label: 'Interferencia con el funcionamiento del marcapasos', correct: true }, { label: 'Solo molestia cosmética' }, { label: 'No está contraindicada' },
      ], explanation: 'El campo electromagnético puede interferir con el marcapasos, causando arritmias potencialmente letales.' },
      { question: '¿Qué propiedad de la parafina permite su uso a alta temperatura?', options: [
        { label: 'Baja densidad' }, { label: 'Baja conductividad térmica y alto calor específico', correct: true }, { label: 'Alta conductividad' }, { label: 'Aroma terapéutico' },
      ], explanation: 'La baja conductividad térmica de la parafina libera calor gradualmente sin quemar la piel.' },
      { question: '¿Qué indica cuando un paciente con implante de rodilla necesita calor profundo?', options: [
        { label: 'Usar onda corta sobre la rodilla' }, { label: 'No usar onda corta; considerar alternativas que no generen campo EM', correct: true }, { label: 'Duplicar la potencia' }, { label: 'No hay restricción' },
      ], explanation: 'La onda corta está prohibida sobre implantes metálicos; se deben usar alternativas seguras.' },
      { question: '¿Qué tipo de dolor beneficia más el TENS?', options: [
        { label: 'Dolor visceral profundo' }, { label: 'Dolor musculoesquelético localizado', correct: true }, { label: 'Dolor de cabeza' }, { label: 'Dolor fantasma' },
      ], explanation: 'El TENS es más efectivo para dolor musculoesquelético localizado mediante la teoría de la puerta.' },
      { question: '¿La onda corta por inducción es superior para calentar qué tipo de tejido?', options: [
        { label: 'Piel' }, { label: 'Músculo profundo', correct: true }, { label: 'Hueso' }, { label: 'Grasa subcutánea' },
      ], explanation: 'La onda corta por inducción es superior para calentar músculo profundo.' },
      { question: '¿Qué significa LLLT?', options: [
        { label: 'Long Lasting Lumbar Traction' }, { label: 'Low Level Laser Therapy', correct: true }, { label: 'Local Ligament Loading Test' }, { label: 'Lateral Limb Length Test' },
      ], explanation: 'LLLT = Low Level Laser Therapy (Terapia Láser de Baja Potencia).' },
      { question: '¿Qué efecto tiene el LLLT sobre las células?', options: [
        { label: 'Destrucción celular' }, { label: 'Modulación de la proliferación celular', correct: true }, { label: 'Congelación tisular' }, { label: 'Calcificación' },
      ], explanation: 'El LLLT modula la proliferación celular e induce bioestimulación sin generar calor significativo.' },
      { question: '¿Qué significan las siglas TOCE?', options: [
        { label: 'Terapia con Ondas Continuas Eléctricas' }, { label: 'Terapia por Ondas de Choque Extracorpóreas', correct: true }, { label: 'Técnica Osteopática de Corrección Espinal' }, { label: 'Tratamiento Ortopédico Compensatorio Externo' },
      ], explanation: 'TOCE = Terapia por Ondas de Choque Extracorpóreas.' },
    ]
  },
  // ── Sesión 8 ───────────────────────────────────────────────
  {
    classId: 8, title: 'Evaluación: Integración Clínica',
    questions: [
      // Existing 7
      { question: 'En mecánica Tipo II, rotación e inclinación ocurren hacia:', options: [
        { label: 'Lados opuestos' }, { label: 'El mismo lado', correct: true }, { label: 'No se acoplan' }, { label: 'Depende de la velocidad' },
      ], explanation: 'Tipo II (en flexo-extensión): rotación e inclinación van al MISMO lado.' },
      { question: '¿En qué porcentaje de capacidad aeróbica el volumen sistólico alcanza meseta?', options: [
        { label: '25%' }, { label: '50%', correct: true }, { label: '75%' }, { label: '100%' },
      ], explanation: 'El volumen sistólico alcanza su meseta aproximadamente al 50% de la capacidad aeróbica.' },
      { question: '¿Cuál es el motor de la técnica de Energía Muscular?', options: [
        { label: 'Tracción axial' }, { label: 'Relajación postisométrica', correct: true }, { label: 'Manipulación de alta velocidad' }, { label: 'Presión isquémica' },
      ], explanation: 'La Energía Muscular se basa en la relajación postisométrica para ganar rango.' },
      { question: '¿Qué agente físico prepara mejor el colágeno antes de la corrección manual?', options: [
        { label: 'Crioterapia' }, { label: 'Calor superficial (paquete caliente)', correct: true }, { label: 'Corriente interferencial' }, { label: 'Laser de baja potencia' },
      ], explanation: 'El calor aumenta la distensibilidad del colágeno, preparando el tejido para la corrección.' },
      { question: '¿Qué indica la onda corta por inducción como ventaja?', options: [
        { label: 'Calienta piel superficial' }, { label: 'Superior para calentar músculo profundo', correct: true }, { label: 'No genera calor' }, { label: 'Solo para tejido óseo' },
      ], explanation: 'La onda corta por inducción es superior para calentar tejido muscular profundo.' },
      { question: '¿Qué secuencia terapéutica es correcta para lumbalgia aguda?', options: [
        { label: 'Corrección → Calor → Estiramiento' }, { label: 'Calor → Corrección manual → Mantenimiento', correct: true }, { label: 'Estiramiento → HVLA → Hielo' }, { label: 'HVLA directa sin preparación' },
      ], explanation: 'Secuencia: 1° Preparatoria (calor) → 2° Correctiva (EM) → 3° Mantenimiento (estiramientos).' },
      { question: '¿Qué restricción tiene la onda corta con implantes metálicos?', options: [
        { label: 'No tiene restricciones' }, { label: 'Está absolutamente contraindicada', correct: true }, { label: 'Solo se reduce la intensidad' }, { label: 'Se usa con precaución' },
      ], explanation: 'La onda corta está ABSOLUTAMENTE contraindicada con implantes metálicos por riesgo de quemadura.' },
      // New 33
      { question: 'En mecánica Tipo I (Fryette), rotación e inclinación ocurren hacia:', options: [
        { label: 'El mismo lado' }, { label: 'Lados opuestos', correct: true }, { label: 'Solo hay flexión' }, { label: 'No se acoplan' },
      ], explanation: 'Tipo I (posición neutra): rotación e inclinación van a lados OPUESTOS.' },
      { question: '¿Qué técnica se clasifica como DIRECTA?', options: [
        { label: 'Counterstrain' }, { label: 'Energía Muscular (EM)', correct: true }, { label: 'Técnica de relajación indirecta' }, { label: 'Técnica funcional' },
      ], explanation: 'La Energía Muscular es una técnica directa que lleva el tejido hacia la barrera.' },
      { question: '¿Qué técnica se clasifica como INDIRECTA?', options: [
        { label: 'HVLA' }, { label: 'Energía Muscular' }, { label: 'Counterstrain', correct: true }, { label: 'Estiramiento directo' },
      ], explanation: 'Counterstrain es una técnica indirecta que aleja el tejido de la barrera.' },
      { question: '¿Cuál es la fase PREPARATORIA en la secuencia terapéutica?', options: [
        { label: 'Estiramiento activo' }, { label: 'Calor (paquete caliente)', correct: true }, { label: 'HVLA' }, { label: 'Ejercicio de fuerza' },
      ], explanation: 'La fase preparatoria usa calor para reducir espasmo y aumentar la distensibilidad tisular.' },
      { question: '¿Cuál es la fase CORRECTIVA?', options: [
        { label: 'Calor superficial' }, { label: 'Técnica manual (ej: Energía Muscular)', correct: true }, { label: 'Estiramientos de mantenimiento' }, { label: 'Crioterapia' },
      ], explanation: 'La fase correctiva aplica la técnica manual para corregir la disfunción.' },
      { question: '¿Cuál es la fase de MANTENIMIENTO?', options: [
        { label: 'Aplicación de calor' }, { label: 'HVLA' }, { label: 'Estiramientos y ejercicios para prevenir recurrencia', correct: true }, { label: 'Onda corta' },
      ], explanation: 'La fase de mantenimiento incluye estiramientos y ejercicio para prevenir recurrencia.' },
      { question: '¿Qué propiedad del colágeno aumenta con el calor?', options: [
        { label: 'Rigidez' }, { label: 'Distensibilidad', correct: true }, { label: 'Mineralización' }, { label: 'Fragilidad' },
      ], explanation: 'El calor aumenta la distensibilidad del colágeno, facilitando el estiramiento y la corrección.' },
      { question: '¿Qué concepto integra biomecánica, clínica, imagen y electrodiagnóstico?', options: [
        { label: 'Diagnóstico anatómico' }, { label: 'Diagnóstico funcional', correct: true }, { label: 'Diagnóstico genético' }, { label: 'Diagnóstico radiológico' },
      ], explanation: 'El diagnóstico funcional integra todos los pilares para una evaluación integral del paciente.' },
      { question: '¿Cuántas columnas de estabilidad vertebral existen?', options: [
        { label: '2' }, { label: '3', correct: true }, { label: '4' }, { label: '1' },
      ], explanation: 'El modelo de estabilidad vertebral describe 3 columnas: anterior, media y posterior.' },
      { question: 'Un paciente con dolor lumbar y rotación vertebral Tipo II implica que la lesión ocurrió en:', options: [
        { label: 'Posición neutra' }, { label: 'Flexión o extensión', correct: true }, { label: 'Decúbito' }, { label: 'Sedestación pura' },
      ], explanation: 'Tipo II ocurre en flexo-extensión (no en posición neutra).' },
      { question: '¿Qué ocurre con el gasto cardíaco durante el ejercicio?', options: [
        { label: 'Disminuye' }, { label: 'Aumenta (por FC y volumen sistólico)', correct: true }, { label: 'Se mantiene constante' }, { label: 'Solo cambia la FC' },
      ], explanation: 'El gasto cardíaco aumenta durante el ejercicio por incrementos en FC y volumen sistólico.' },
      { question: '¿Por qué no se debe usar onda corta en un paciente sentado en silla de metal?', options: [
        { label: 'Incomodidad' }, { label: 'El campo electromagnético puede concentrarse en el metal causando quemaduras', correct: true }, { label: 'Por ruido' }, { label: 'No hay contraindicación' },
      ], explanation: 'Cualquier metal en el campo de la onda corta puede calentarse y causar quemaduras.' },
      { question: '¿Qué modalidad terapéutica prepara MEJOR el tejido antes de estirar?', options: [
        { label: 'Hielo' }, { label: 'Calor seguido de estiramiento prolongado', correct: true }, { label: 'TENS solo' }, { label: 'Reposo absoluto' },
      ], explanation: 'Calor + estiramiento aprovecha la mayor distensibilidad del colágeno calentado.' },
      { question: '¿Qué tiempo de tracción cervical óptimo se describe en la integración?', options: [
        { label: '10 minutos' }, { label: '25 minutos', correct: true }, { label: '45 minutos' }, { label: '5 minutos' },
      ], explanation: 'La tracción cervical ideal se aplica durante aproximadamente 25 minutos a 24°.' },
      { question: '¿Qué ángulo de tracción cervical se describe como ideal en la integración?', options: [
        { label: '10°' }, { label: '24°', correct: true }, { label: '45°' }, { label: '90°' },
      ], explanation: 'El ángulo ideal de tracción cervical es de 24° de flexión.' },
      { question: '¿Qué técnica usa la FNP para ganar flexibilidad?', options: [
        { label: 'HVLA' }, { label: 'Relajación postisométrica', correct: true }, { label: 'Onda corta' }, { label: 'Crioterapia' },
      ], explanation: 'La FNP utiliza la relajación postisométrica para ganar flexibilidad articular.' },
      { question: '¿Cuál es el primer pilar del diagnóstico funcional?', options: [
        { label: 'Cirugía' }, { label: 'Biomecánica', correct: true }, { label: 'Farmacología' }, { label: 'Genética' },
      ], explanation: 'La biomecánica es el primer pilar que analiza la estructura y función del movimiento.' },
      { question: '¿Qué ocurre si la columna media + posterior están comprometidas?', options: [
        { label: 'Estabilidad normal' }, { label: 'Inestabilidad vertebral', correct: true }, { label: 'Solo dolor' }, { label: 'Mejor movilidad' },
      ], explanation: 'La afectación de dos columnas (media + anterior o posterior) genera inestabilidad.' },
      { question: '¿Qué herramienta evalúa el esfuerzo durante el ejercicio aeróbico?', options: [
        { label: 'Test de Adams' }, { label: 'Escala de Borg (RPE)', correct: true }, { label: 'Goniometría' }, { label: 'Dinamometría' },
      ], explanation: 'La escala de Borg mide el esfuerzo percibido durante el ejercicio.' },
      { question: '¿Qué significa "facilitación medular" en terapia manual?', options: [
        { label: 'Mayor facilidad para caminar' }, { label: 'Hiperactividad segmentaria del sistema nervioso en la zona disfuncional', correct: true }, { label: 'Mejor rendimiento deportivo' }, { label: 'Mayor flexibilidad' },
      ], explanation: 'La facilitación medular es la hiperactividad neuronal segmentaria asociada a la disfunción somática.' },
      { question: '¿Qué efecto tiene el ultrasonido sobre el colágeno?', options: [
        { label: 'Lo destruye' }, { label: 'Aumenta su distensibilidad y síntesis', correct: true }, { label: 'Lo calcifica' }, { label: 'No lo afecta' },
      ], explanation: 'El ultrasonido prepara el tejido aumentando la distensibilidad y estimulando la síntesis de colágeno.' },
      { question: '¿Cuál es la secuencia correcta: calor, corrección, mantenimiento?', options: [
        { label: 'Mantenimiento → Corrección → Calor' }, { label: 'Calor (preparatoria) → Corrección → Mantenimiento', correct: true }, { label: 'Corrección → Calor → Mantenimiento' }, { label: 'No importa el orden' },
      ], explanation: 'La secuencia correcta es: 1° Preparatoria (calor), 2° Correctiva, 3° Mantenimiento.' },
      { question: '¿Qué análisis funcional se relaciona con la evaluación parcial de la sesión 8?', options: [
        { label: 'Solo fuerza muscular' }, { label: 'Integración de agentes físicos y mecánicos para tratar disfunción funcional', correct: true }, { label: 'Solo flexibilidad' }, { label: 'Solo imagen' },
      ], explanation: 'El examen parcial integra el razonamiento clínico para tratar disfunción funcional con agentes físicos y mecánicos.' },
      { question: '¿Qué parámetro fisiológico NO aumenta linealmente con el ejercicio?', options: [
        { label: 'Frecuencia cardíaca' }, { label: 'Volumen sistólico', correct: true }, { label: 'Ventilación minuto' }, { label: 'Consumo de oxígeno' },
      ], explanation: 'El volumen sistólico alcanza una meseta al 50% de la capacidad; la FC sigue aumentando.' },
      { question: '¿Qué estructura del intervertebral es incompresible?', options: [
        { label: 'Anillo fibroso' }, { label: 'Núcleo pulposo', correct: true }, { label: 'Ligamento longitudinal anterior' }, { label: 'Faceta articular' },
      ], explanation: 'El núcleo pulposo es un gel incompresible que distribuye las fuerzas radialmente.' },
      { question: '¿Qué ocurre biomecánicamente cuando un paciente tiene hiperflexión lumbar?', options: [
        { label: 'Las facetas se comprimen' }, { label: 'El disco se desplaza posteriormente', correct: true }, { label: 'El ligamento anterior se tensa' }, { label: 'La lordosis aumenta' },
      ], explanation: 'En hiperflexión, el núcleo pulposo se desplaza hacia posterior, aumentando el riesgo de hernia.' },
      { question: '¿Qué calentamiento previo facilita la corrección manual en un músculo espástico?', options: [
        { label: 'Hielo' }, { label: 'Paquete caliente 20 minutos', correct: true }, { label: 'TENS solo' }, { label: 'Reposo en cama' },
      ], explanation: 'El paquete caliente reduce el espasmo y aumenta la distensibilidad del colágeno antes de la corrección.' },
      { question: '¿Qué ventaja tiene la onda corta por inducción sobre la por capacitancia?', options: [
        { label: 'Calienta mejor la piel' }, { label: 'Calienta más profundamente el músculo', correct: true }, { label: 'Es más segura con metal' }, { label: 'No genera calor' },
      ], explanation: 'La inducción genera corrientes de Foucault en el músculo, calentándolo más profundamente.' },
      { question: '¿Qué diferencia a un diagnóstico funcional de un diagnóstico anatómico?', options: [
        { label: 'Solo considera la imagen' }, { label: 'Integra múltiples dominios (biomecánica, clínica, imagen, electro) para evaluar la función', correct: true }, { label: 'Solo evalúa la anatomía' }, { label: 'No usa pruebas complementarias' },
      ], explanation: 'El diagnóstico funcional es integral, evaluando la capacidad funcional del paciente desde múltiples perspectivas.' },
      { question: '¿En qué situación clínica el calor superficial NO está indicado?', options: [
        { label: 'Contractura crónica de hombro' }, { label: 'Esguince agudo de tobillo (primeras 48h)', correct: true }, { label: 'Rigidez matutina por artrosis' }, { label: 'Antes de estiramiento' },
      ], explanation: 'En lesiones agudas (primeras 48-72h) se indica crioterapia, no calor.' },
      { question: '¿Qué concepto enmarca la sesión 8 como "examen parcial"?', options: [
        { label: 'Solo evaluación de imagen' }, { label: 'Integración de las unidades 1 y 2 (biomecánica + terapias)', correct: true }, { label: 'Solo ejercicio' }, { label: 'Solo electrodiagnóstico' },
      ], explanation: 'La sesión 8 integra los contenidos de las unidades de biomecánica y terapias en rehabilitación.' },
    ]
  },
]
