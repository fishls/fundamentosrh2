import { EvalDef } from '@/components/ui/EvalEngine'

export const sessions5_6: EvalDef[] = [
  // ── Sesión 5 ───────────────────────────────────────────────
  {
    classId: 5, title: 'Evaluación: Prescripción de Ejercicio',
    questions: [
      // Existing 7
      { question: '¿Qué porcentaje del 10-RM se usa en la Serie 1 de DeLorme?', options: [
        { label: '25%' }, { label: '50%', correct: true }, { label: '75%' }, { label: '100%' },
      ], explanation: 'DeLorme: Serie 1 = 50%, Serie 2 = 75%, Serie 3 = 100% del 10-RM.' },
      { question: '¿En qué se diferencia Oxford de DeLorme?', options: [
        { label: 'Oxford usa cargas ascendentes' }, { label: 'Oxford usa cargas descendentes', correct: true }, { label: 'Oxford usa más repeticiones' }, { label: 'Son idénticos' },
      ], explanation: 'Oxford invierte el orden: inicia con 100% y reduce a 50% del 10-RM.' },
      { question: '¿Qué herramienta de cribado mínima se requiere antes del ejercicio?', options: [
        { label: 'Electrocardiograma' }, { label: 'PAR-Q', correct: true }, { label: 'VO2 máx' }, { label: 'Hemograma completo' },
      ], explanation: 'El PAR-Q (Physical Activity Readiness Questionnaire) es el cribado mínimo.' },
      { question: '¿Qué maniobra debe evitarse durante el ejercicio de fuerza?', options: [
        { label: 'Exhalar durante el esfuerzo' }, { label: 'Maniobra de Valsalva', correct: true }, { label: 'Respiración rítmica' }, { label: 'Inspiración nasal' },
      ], explanation: 'La maniobra de Valsalva aumenta peligrosamente la presión arterial y torácica.' },
      { question: '¿Cuántas repeticiones define una serie en el método DeLorme?', options: [
        { label: '5' }, { label: '10', correct: true }, { label: '15' }, { label: '20' },
      ], explanation: 'El método DeLorme utiliza 3 series de 10 repeticiones cada una.' },
      { question: '¿Qué escala mide el esfuerzo percibido durante el ejercicio?', options: [
        { label: 'Escala de Glasgow' }, { label: 'Escala de Borg', correct: true }, { label: 'Escala VAS' }, { label: 'Escala de Daniels' },
      ], explanation: 'La escala de Borg (6-20 o 0-10) mide el esfuerzo percibido durante el ejercicio.' },
      { question: '¿Cuál es una contraindicación absoluta para ejercicio vigoroso?', options: [
        { label: 'Hipertensión controlada' }, { label: 'Angina inestable', correct: true }, { label: 'Diabetes tipo 2 controlada' }, { label: 'Artrosis leve' },
      ], explanation: 'La angina inestable es una contraindicación absoluta para ejercicio vigoroso.' },
      // New 33
      { question: '¿Cuántas series tiene el método DeLorme?', options: [
        { label: '2' }, { label: '3', correct: true }, { label: '4' }, { label: '5' },
      ], explanation: 'DeLorme consta de 3 series ascendentes de 10 repeticiones.' },
      { question: '¿Qué porcentaje del 10-RM se usa en la Serie 2 de DeLorme?', options: [
        { label: '50%' }, { label: '75%', correct: true }, { label: '100%' }, { label: '25%' },
      ], explanation: 'DeLorme: Serie 2 = 75% del 10-RM.' },
      { question: '¿Con qué carga inicia el método Oxford?', options: [
        { label: '50% del 10-RM' }, { label: '100% del 10-RM', correct: true }, { label: '25% del 10-RM' }, { label: '75% del 10-RM' },
      ], explanation: 'Oxford inicia con 100% del 10-RM y desciende (100% → 75% → 50%).' },
      { question: '¿Qué riesgo genera la maniobra de Valsalva?', options: [
        { label: 'Hipoglucemia' }, { label: 'Picos de presión arterial', correct: true }, { label: 'Bradicardia' }, { label: 'Hipotermia' },
      ], explanation: 'La maniobra de Valsalva aumenta peligrosamente la presión arterial y la presión torácica.' },
      { question: '¿Qué rango de valores de Borg corresponde a ejercicio moderado?', options: [
        { label: '6-10' }, { label: '12-14', correct: true }, { label: '17-19' }, { label: '20' },
      ], explanation: 'Un RPE de 12-14 en la escala de Borg corresponde a ejercicio de intensidad moderada.' },
      { question: '¿Qué significan las siglas PAR-Q?', options: [
        { label: 'Programa de Actividad Rehabilitadora Quimioprofiláctica' }, { label: 'Physical Activity Readiness Questionnaire', correct: true }, { label: 'Plan de Acondicionamiento y Rehabilitación Quirúrgica' }, { label: 'Prueba de Aptitud para Rehabilitación Quinésica' },
      ], explanation: 'PAR-Q significa Physical Activity Readiness Questionnaire.' },
      { question: '¿Qué es la estenosis aórtica grave en el contexto del ejercicio?', options: [
        { label: 'Una indicación de ejercicio' }, { label: 'Una contraindicación absoluta', correct: true }, { label: 'Una precaución menor' }, { label: 'No es relevante' },
      ], explanation: 'La estenosis aórtica grave es una contraindicación absoluta para ejercicio vigoroso.' },
      { question: '¿Qué protocolo ajusta automáticamente la carga según el rendimiento?', options: [
        { label: 'DeLorme' }, { label: 'DAPRE (Daily Adjustable Progressive Resistive Exercise)', correct: true }, { label: 'Oxford' }, { label: 'Borg' },
      ], explanation: 'El DAPRE ajusta la carga según las repeticiones logradas en la serie de trabajo.' },
      { question: '¿Qué es la insuficiencia cardíaca descompensada?', options: [
        { label: 'Una indicación de ejercicio vigoroso' }, { label: 'Una contraindicación absoluta para ejercicio', correct: true }, { label: 'Una variante normal' }, { label: 'Un hallazgo incidental' },
      ], explanation: 'La IC descompensada impide al corazón tolerar la demanda adicional del ejercicio.' },
      { question: '¿Qué patrón respiratorio es correcto durante el ejercicio de fuerza?', options: [
        { label: 'Contener la respiración' }, { label: 'Exhalar durante el esfuerzo', correct: true }, { label: 'Inhalar durante el esfuerzo' }, { label: 'Respirar por la boca únicamente' },
      ], explanation: 'Se debe exhalar durante la fase concéntrica (esfuerzo) para evitar Valsalva.' },
      { question: '¿Qué objetivo tiene el cribado pre-ejercicio?', options: [
        { label: 'Aumentar la motivación' }, { label: 'Identificar riesgos cardiovasculares antes de iniciar', correct: true }, { label: 'Medir la flexibilidad' }, { label: 'Determinar el peso ideal' },
      ], explanation: 'El cribado identifica condiciones que podrían hacer el ejercicio peligroso.' },
      { question: '¿Qué es la RM (Repetición Máxima)?', options: [
        { label: 'El número de series' }, { label: 'La carga máxima que se puede levantar una vez', correct: true }, { label: 'La velocidad de contracción' }, { label: 'El tiempo de descanso' },
      ], explanation: '1RM es la carga máxima que un individuo puede levantar en una sola repetición completa.' },
      { question: '¿Qué es el 10-RM?', options: [
        { label: 'El peso que se levanta 10 veces cada minuto' }, { label: 'La carga máxima que permite completar exactamente 10 repeticiones', correct: true }, { label: 'El 10% de la fuerza máxima' }, { label: 'La duración de 10 minutos' },
      ], explanation: 'El 10-RM es la carga máxima con la que se completan exactamente 10 repeticiones hasta la fatiga.' },
      { question: '¿Qué objetivo funcional tiene el ejercicio de fuerza en rehabilitación?', options: [
        { label: 'Solo estético' }, { label: 'Mejorar la capacidad de generar tensión muscular', correct: true }, { label: 'Aumentar la frecuencia cardíaca' }, { label: 'Reducir la presión arterial' },
      ], explanation: 'El objetivo principal es mejorar la capacidad de generar tensión para la función.' },
      { question: '¿Qué incrementa el VO2máx?', options: [
        { label: 'Ejercicio de fuerza exclusivamente' }, { label: 'Entrenamiento aeróbico dinámico', correct: true }, { label: 'Estiramientos pasivos' }, { label: 'Reposo en cama' },
      ], explanation: 'El entrenamiento aeróbico dinámico es el principal medio para incrementar el VO2máx.' },
      { question: '¿Cuánto tiempo de ejercicio aeróbico semanal recomienda la OMS para adultos?', options: [
        { label: '75 minutos vigorosos' }, { label: '150 minutos moderados o 75 vigorosos', correct: true }, { label: '300 minutos moderados obligatorios' }, { label: '30 minutos totales' },
      ], explanation: 'La OMS recomienda 150 min/semana moderados o 75 min vigorosos como mínimo.' },
      { question: '¿Qué es la progresión en el ejercicio terapéutico?', options: [
        { label: 'Mantener siempre la misma carga' }, { label: 'Incremento sistemático de frecuencia, intensidad o duración', correct: true }, { label: 'Reducir la actividad gradualmente' }, { label: 'Cambiar de ejercicio cada día' },
      ], explanation: 'La progresión implica incrementar sistemáticamente los parámetros del ejercicio.' },
      { question: '¿Qué escala de Borg modificada usa un rango de 0 a 10?', options: [
        { label: 'Borg original (6-20)' }, { label: 'Borg CR-10', correct: true }, { label: 'Escala VAS' }, { label: 'Escala de Daniels' },
      ], explanation: 'La escala de Borg modificada CR-10 va de 0 (nada) a 10 (máximo esfuerzo).' },
      { question: '¿Qué déficit funcional busca corregir el ejercicio aeróbico?', options: [
        { label: 'Debilidad muscular' }, { label: 'Desacondicionamiento cardiovascular', correct: true }, { label: 'Rigidez articular' }, { label: 'Atrofia cerebral' },
      ], explanation: 'El ejercicio aeróbico busca corregir el desacondicionamiento cardiovascular.' },
      { question: '¿Qué tipo de ejercicio busca ganar amplitud articular sin dolor?', options: [
        { label: 'Fuerza máxima' }, { label: 'Flexibilidad', correct: true }, { label: 'Resistencia anaeróbica' }, { label: 'Pliometría' },
      ], explanation: 'El ejercicio de flexibilidad busca ganar amplitud articular modificando el termostato longitud-tensión.' },
      { question: '¿Qué precaución debe tomarse en pacientes hipertensos durante el ejercicio?', options: [
        { label: 'No hacer ejercicio nunca' }, { label: 'Evitar maniobra de Valsalva y monitorizar PA', correct: true }, { label: 'Solo ejercicio de fuerza máxima' }, { label: 'Duplicar la intensidad' },
      ], explanation: 'Los hipertensos deben evitar Valsalva y monitorizarse durante el ejercicio.' },
      { question: '¿Qué tipo de estiramiento usa la FNP (Facilitación Neuromuscular Propioceptiva)?', options: [
        { label: 'Solo pasivo' }, { label: 'Contracción-relajación', correct: true }, { label: 'Balístico' }, { label: 'Solo activo libre' },
      ], explanation: 'La FNP usa patrones de contracción-relajación para ganar rango articular.' },
      { question: '¿Qué parámetro se mide con la escala de Daniels?', options: [
        { label: 'Esfuerzo percibido' }, { label: 'Fuerza muscular (grados 0-5)', correct: true }, { label: 'Flexibilidad' }, { label: 'Resistencia aeróbica' },
      ], explanation: 'La escala de Daniels valora la fuerza muscular manual en grados de 0 a 5.' },
      { question: '¿En qué serie de DeLorme se usa el 100% del 10-RM?', options: [
        { label: 'Serie 1' }, { label: 'Serie 3', correct: true }, { label: 'Serie 2' }, { label: 'Todas las series' },
      ], explanation: 'En DeLorme, la Serie 3 es la más intensa (100% del 10-RM).' },
      { question: '¿Qué frecuencia semanal de ejercicio aeróbico es mínima para beneficios?', options: [
        { label: '1 día' }, { label: '3 días', correct: true }, { label: '6 días' }, { label: 'Cada 15 días' },
      ], explanation: 'Se requieren al menos 3 días/semana de ejercicio aeróbico para obtener beneficios significativos.' },
      { question: '¿Qué consecuencia tiene la falta de progresión en el ejercicio?', options: [
        { label: 'Mejora continua' }, { label: 'Meseta de adaptación (estancamiento)', correct: true }, { label: 'Lesión inmediata' }, { label: 'Pérdida de peso rápida' },
      ], explanation: 'Sin progresión, el organismo se adapta y deja de mejorar (principio de meseta).' },
      { question: '¿Qué contracción es más recomendable al usar el método Oxford?', options: [
        { label: 'Excéntrica máxima' }, { label: 'Concéntrica con carga descendente', correct: true }, { label: 'Isométrica pura' }, { label: 'Pliométrica' },
      ], explanation: 'Oxford usa contracciones concéntricas con carga descendente (100% → 75% → 50%).' },
      { question: '¿Cuál es el objetivo principal del cribado PAR-Q?', options: [
        { label: 'Medir la fuerza' }, { label: 'Identificar individuos que necesitan evaluación médica antes de ejercitarse', correct: true }, { label: 'Prescribir la intensidad' }, { label: 'Determinar la dieta' },
      ], explanation: 'El PAR-Q identifica personas que requieren evaluación médica adicional antes del ejercicio.' },
      { question: '¿Cuánto reposo entre sesiones de fuerza de un mismo grupo muscular?', options: [
        { label: 'Sin descanso' }, { label: 'Al menos 48 horas', correct: true }, { label: '1 hora' }, { label: '1 semana' },
      ], explanation: 'Se recomiendan días no consecutivos (≥48h) para la recuperación muscular.' },
      { question: '¿Qué valor de Borg RPE indica esfuerzo máximo?', options: [
        { label: '12' }, { label: '20', correct: true }, { label: '15' }, { label: '10' },
      ], explanation: 'En la escala original de Borg (6-20), el valor 20 corresponde al esfuerzo máximo.' },
      { question: '¿Qué tipo de contracción se usa preferentemente en DeLorme?', options: [
        { label: 'Excéntrica' }, { label: 'Concéntrica con resistencia progresiva', correct: true }, { label: 'Isométrica' }, { label: 'Isocinética' },
      ], explanation: 'DeLorme usa contracciones concéntricas con resistencia progresiva ascendente.' },
      { question: '¿Qué diferencia fundamental existe entre DeLorme, Oxford y DAPRE?', options: [
        { label: 'Todos usan la misma secuencia de carga' }, { label: 'DeLorme asciende, Oxford desciende, DAPRE se autoajusta', correct: true }, { label: 'Solo difieren en el número de series' }, { label: 'Son técnicas de estiramiento' },
      ], explanation: 'DeLorme es ascendente, Oxford descendente y DAPRE se ajusta diariamente según rendimiento.' },
    ]
  },
  // ── Sesión 6 ───────────────────────────────────────────────
  {
    classId: 6, title: 'Evaluación: Terapias Manuales',
    questions: [
      // Existing 7
      { question: '¿Qué significan las siglas TART?', options: [
        { label: 'Tensión, Amplitud, Resistencia, Textura' }, { label: 'Textura, Asimetría, Rango alterado, Sensibilidad (Tenderness)', correct: true }, { label: 'Tracción, Articulación, Rotación, Tiempo' }, { label: 'Tono, Alineación, Reflejo, Temperatura' },
      ], explanation: 'TART = Texture, Asymmetry, Range of motion, Tenderness.' },
      { question: '¿Cuál es el mecanismo de Counterstrain?', options: [
        { label: 'Manipulación de alta velocidad' }, { label: 'Hiperacortamiento pasivo 90s para inhibir gamma', correct: true }, { label: 'Tracción axial progresiva' }, { label: 'Fricción transversa profunda' },
      ], explanation: 'Counterstrain posiciona el músculo en acortamiento máximo por 90 segundos para inhibir la actividad gamma.' },
      { question: '¿En qué patología está CONTRAINDICADA la HVLA?', options: [
        { label: 'Contractura muscular leve' }, { label: 'Osteoporosis severa', correct: true }, { label: 'Dolor miofascial' }, { label: 'Rigidez articular post-inmovilización' },
      ], explanation: 'HVLA está contraindicada en osteoporosis severa, fracturas, tumores espinales y anticoagulación.' },
      { question: '¿Qué técnica usa contracción isométrica + relajación para ganar rango?', options: [
        { label: 'HVLA' }, { label: 'Energía Muscular', correct: true }, { label: 'Counterstrain' }, { label: 'Masaje profundo' },
      ], explanation: 'La técnica de Energía Muscular usa la relajación postisométrica para ganar rango articular.' },
      { question: '¿Cuál es la indicación principal de la tracción cervical?', options: [
        { label: 'Contractura muscular' }, { label: 'Radiculopatía cervical', correct: true }, { label: 'Tortícolis aguda' }, { label: 'Vértigo posicional' },
      ], explanation: 'La tracción cervical descomprime mecánicamente las raíces nerviosas en radiculopatía.' },
      { question: '¿En qué condición está contraindicado el masaje?', options: [
        { label: 'Contractura post-ejercicio' }, { label: 'Trombosis venosa profunda (TVP)', correct: true }, { label: 'Dolor miofascial crónico' }, { label: 'Espasmo muscular agudo' },
      ], explanation: 'El masaje está contraindicado en TVP por riesgo de desplazamiento del trombo.' },
      { question: '¿Qué ángulo de tracción cervical se recomienda para radiculopatía?', options: [
        { label: '0-5 grados' }, { label: '20-30 grados', correct: true }, { label: '45-60 grados' }, { label: '90 grados' },
      ], explanation: 'La tracción cervical se aplica generalmente a 20-30° de flexión.' },
      // New 33
      { question: '¿Qué letra del acrónimo TART representa el dolor/sensibilidad?', options: [
        { label: 'Primera T (Textura)' }, { label: 'Última T (Tenderness)', correct: true }, { label: 'A (Asimetría)' }, { label: 'R (Rango)' },
      ], explanation: 'La T final de TART representa Tenderness (sensibilidad/dolor a la palpación).' },
      { question: '¿Las técnicas directas se dirigen hacia o lejos de la barrera restrictiva?', options: [
        { label: 'Lejos de la barrera' }, { label: 'Hacia la barrera', correct: true }, { label: 'Perpendicular a la barrera' }, { label: 'No se relacionan con la barrera' },
      ], explanation: 'Las técnicas directas llevan el tejido HACIA la barrera restrictiva.' },
      { question: '¿Las técnicas indirectas se dirigen hacia o lejos de la barrera?', options: [
        { label: 'Hacia la barrera' }, { label: 'Lejos de la barrera (alejándose)', correct: true }, { label: 'A través de la barrera' }, { label: 'No importa la dirección' },
      ], explanation: 'Las técnicas indirectas alejan el tejido de la barrera restrictiva.' },
      { question: '¿Qué significa HVLA?', options: [
        { label: 'Hidroterapia Vascular de Larga Amplitud' }, { label: 'Alta Velocidad y Baja Amplitud', correct: true }, { label: 'Hiperventilación Lumbar Activa' }, { label: 'Hipotensión Vascular por Longitud Articular' },
      ], explanation: 'HVLA = High Velocity, Low Amplitude (Alta Velocidad, Baja Amplitud).' },
      { question: '¿Cuánto dura un empuje HVLA?', options: [
        { label: '5 segundos' }, { label: 'Menos de 0.5 segundos', correct: true }, { label: '30 segundos' }, { label: '2 minutos' },
      ], explanation: 'El empuje HVLA es rápido, dura menos de 0.5 segundos.' },
      { question: '¿Qué fuerza aproximada se aplica en tracción cervical?', options: [
        { label: '5 kg' }, { label: '12.5 kg', correct: true }, { label: '25 kg' }, { label: '50 kg' },
      ], explanation: 'La tracción cervical utiliza aproximadamente 12.5 kg de fuerza.' },
      { question: '¿Qué porcentaje del peso corporal se requiere como mínimo para tracción lumbar?', options: [
        { label: '25%' }, { label: '50%', correct: true }, { label: '75%' }, { label: '100%' },
      ], explanation: 'La tracción lumbar requiere al menos 50% del peso corporal para distracción intervertebral.' },
      { question: '¿Cuántos segundos dura el posicionamiento en Counterstrain?', options: [
        { label: '30' }, { label: '90', correct: true }, { label: '120' }, { label: '10' },
      ], explanation: 'El posicionamiento en Counterstrain se mantiene durante 90 segundos.' },
      { question: '¿Qué tipo de masaje usa movimientos de rozamiento superficial?', options: [
        { label: 'Pétrissage' }, { label: 'Effleurage', correct: true }, { label: 'Fricción transversa' }, { label: 'Tapotement' },
      ], explanation: 'Effleurage es la técnica de rozamiento superficial que favorece el retorno venoso.' },
      { question: '¿Qué técnica de masaje es ideal para adherencias?', options: [
        { label: 'Effleurage' }, { label: 'Fricción transversa profunda (cruzada)', correct: true }, { label: 'Pétrissage' }, { label: 'Vibración' },
      ], explanation: 'La fricción transversa profunda rompe adherencias en tendones y ligamentos.' },
      { question: '¿Qué es el pétrissage?', options: [
        { label: 'Rozamiento superficial' }, { label: 'Amasamiento profundo', correct: true }, { label: 'Percusión rítmica' }, { label: 'Vibración mecánica' },
      ], explanation: 'Pétrissage es la técnica de amasamiento que moviliza tejidos blandos profundos.' },
      { question: '¿Qué modulan las técnicas manuales en el sistema nervioso?', options: [
        { label: 'El sistema visual' }, { label: 'El sistema motor gamma y los husos musculares', correct: true }, { label: 'El sistema simpático exclusivamente' }, { label: 'Los reflejos posturales estáticos' },
      ], explanation: 'Las técnicas manuales modulan el sistema motor gamma y los husos para reducir la facilitación.' },
      { question: '¿Qué contraindicación comparten la HVLA y la tracción?', options: [
        { label: 'Contractura muscular' }, { label: 'Inestabilidad ósea', correct: true }, { label: 'Dolor miofascial' }, { label: 'Espasmo leve' },
      ], explanation: 'Tanto HVLA como tracción están contraindicadas en inestabilidad ósea y fracturas.' },
      { question: '¿Cuál es una contraindicación de la tracción cervical?', options: [
        { label: 'Radiculopatía' }, { label: 'Mielopatía cervical', correct: true }, { label: 'Cervicalgia mecánica' }, { label: 'Contractura de trapecio' },
      ], explanation: 'La mielopatía cervical es una contraindicación para tracción por riesgo de compresión medular.' },
      { question: '¿Qué riesgo tiene el masaje sobre una TVP?', options: [
        { label: 'Dolor local' }, { label: 'Desplazamiento del trombo (embolia)', correct: true }, { label: 'Hematoma superficial' }, { label: 'Ninguno' },
      ], explanation: 'El masaje sobre TVP puede desplazar el trombo y causar una embolia pulmonar potencialmente mortal.' },
      { question: '¿Qué técnica manual es más segura en presencia de radiculopatía activa?', options: [
        { label: 'HVLA' }, { label: 'Counterstrain', correct: true }, { label: 'Manipulación rápida' }, { label: 'Thrust directo' },
      ], explanation: 'Counterstrain es una técnica indirecta y segura que no agrava la compresión radicular.' },
      { question: '¿Qué es la relajación postisométrica?', options: [
        { label: 'Relajación durante el sueño' }, { label: 'Relajación muscular que ocurre después de una contracción isométrica', correct: true }, { label: 'Relajación por calor' }, { label: 'Relajación por frío' },
      ], explanation: 'Tras una contracción isométrica, el músculo entra en un período refractario de relajación que permite ganar rango.' },
      { question: '¿Cuántas contraindicaciones absolutas principales tiene la HVLA?', options: [
        { label: '1' }, { label: '4 o más (osteoporosis, fractura, tumor, anticoagulación)', correct: true }, { label: 'Ninguna' }, { label: 'Solo 2' },
      ], explanation: 'HVLA tiene al menos 4 contraindicaciones absolutas principales.' },
      { question: '¿Qué efecto tiene la tracción sobre los agujeros intervertebrales?', options: [
        { label: 'Los cierra' }, { label: 'Los amplía', correct: true }, { label: 'No los modifica' }, { label: 'Los inflama' },
      ], explanation: 'La tracción amplía los forámenes intervertebrales, descomprimiendo las raíces nerviosas.' },
      { question: '¿Qué técnica de terapia manual pertenece a las técnicas de tejidos blandos?', options: [
        { label: 'HVLA' }, { label: 'Estiramiento y presión profunda', correct: true }, { label: 'Counterstrain' }, { label: 'Energía Muscular' },
      ], explanation: 'El estiramiento y la presión profunda son técnicas directas de tejidos blandos.' },
      { question: '¿En qué dirección trabaja la Energía Muscular?', options: [
        { label: 'Alejándose de la barrera' }, { label: 'Hacia la barrera (técnica directa)', correct: true }, { label: 'Perpendicular a la barrera' }, { label: 'En cualquier dirección' },
      ], explanation: 'La Energía Muscular es una técnica directa que avanza hacia la barrera restrictiva.' },
      { question: '¿Qué papel cumple el paciente en la técnica de Energía Muscular?', options: [
        { label: 'Totalmente pasivo' }, { label: 'Realiza contracciones isométricas activas', correct: true }, { label: 'Solo respira' }, { label: 'Aplica tracción' },
      ], explanation: 'El paciente participa activamente realizando contracciones isométricas contra la resistencia del terapeuta.' },
      { question: '¿Qué efecto tiene la tracción sobre el espasmo muscular?', options: [
        { label: 'Lo aumenta' }, { label: 'Lo reduce por estiramiento de husos', correct: true }, { label: 'No lo modifica' }, { label: 'Lo cronifica' },
      ], explanation: 'La tracción estira los husos musculares, ayudando a reducir el espasmo.' },
      { question: '¿Qué tipo de proceso infeccioso contraindica el masaje?', options: [
        { label: 'Solo infecciones sistémicas' }, { label: 'Infecciones locales en la zona a tratar', correct: true }, { label: 'Ninguna infección contraindica' }, { label: 'Solo infecciones virales' },
      ], explanation: 'El masaje está contraindicado sobre zonas con infección local activa.' },
      { question: '¿Qué objetivo tiene la HVLA en una articulación hipomóvil?', options: [
        { label: 'Reducir la movilidad' }, { label: 'Restaurar el juego articular normal', correct: true }, { label: 'Aumentar el espasmo' }, { label: 'Producir inestabilidad' },
      ], explanation: 'La HVLA busca restaurar el movimiento normal en articulaciones con restricción de movilidad.' },
      { question: '¿Qué sensación busca el terapeuta al aplicar Counterstrain?', options: [
        { label: 'Aumento del dolor' }, { label: 'Reducción del 70-100% del dolor al palpación del punto sensible', correct: true }, { label: 'Crujido articular' }, { label: 'Espasmo muscular' },
      ], explanation: 'Se busca la posición en la que el punto sensible reduce su dolor en al menos 70%.' },
      { question: '¿Qué concepto explica la restricción segmentaria en osteopatía?', options: [
        { label: 'Fractura' }, { label: 'Disfunción somática', correct: true }, { label: 'Luxación' }, { label: 'Compresión medular' },
      ], explanation: 'La disfunción somática es la restricción de movilidad y los cambios tisulares asociados (TART).' },
      { question: '¿Cuánto tiempo se recomienda la tracción cervical por sesión?', options: [
        { label: '5 minutos' }, { label: '15-25 minutos', correct: true }, { label: '60 minutos' }, { label: '2 horas' },
      ], explanation: 'La tracción cervical se aplica típicamente durante 15 a 25 minutos por sesión.' },
      { question: '¿Qué diferencia fundamental existe entre una técnica directa y una indirecta?', options: [
        { label: 'El tiempo de aplicación' }, { label: 'La dirección respecto a la barrera restrictiva', correct: true }, { label: 'El tipo de paciente' }, { label: 'La fuerza aplicada únicamente' },
      ], explanation: 'La diferencia clave es la dirección: directa va hacia la barrera, indirecta se aleja de ella.' },
      { question: '¿Qué función tiene la movilización de fluidos en el masaje?', options: [
        { label: 'Solo efecto estético' }, { label: 'Mejorar retorno venoso y linfático, reducir edema', correct: true }, { label: 'Aumentar la inflamación' }, { label: 'Romper adherencias óseas' },
      ], explanation: 'El masaje moviliza fluidos para mejorar el retorno venoso/linfático y reducir edema.' },
    ]
  },
]
