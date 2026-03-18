import { EvalDef } from '@/components/ui/EvalEngine'

export const sessions15_16: EvalDef[] = [
  // ── Sesión 15 ──────────────────────────────────────────────
  {
    classId: 15, title: 'Evaluación: Electrodiagnóstico',
    questions: [
      // Existing 7
      { question: '¿Qué mide la velocidad de conducción nerviosa (VCN)?', options: [
        { label: 'Fuerza muscular' }, { label: 'Velocidad de propagación del impulso eléctrico por el nervio', correct: true }, { label: 'Flujo sanguíneo' }, { label: 'Flexibilidad articular' },
      ], explanation: 'La VCN mide qué tan rápido viaja el impulso eléctrico a lo largo del nervio.' },
      { question: '¿Qué hallazgo electrodiagnóstico indica desmielinización?', options: [
        { label: 'Potenciales de fibrilación' }, { label: 'Disminución de la velocidad de conducción', correct: true }, { label: 'Ondas agudas positivas' }, { label: 'Agrandamiento de la unidad motora' },
      ], explanation: 'La desmielinización enlentece la conducción nerviosa.' },
      { question: '¿Qué hallazgo de EMG aparece en degeneración axonal?', options: [
        { label: 'VCN reducida' }, { label: 'Potenciales de fibrilación y ondas agudas positivas', correct: true }, { label: 'Aumento de la latencia' }, { label: 'Bloqueo de conducción' },
      ], explanation: 'La degeneración axonal produce actividad espontánea anormal: fibrilaciones y ondas agudas.' },
      { question: '¿Qué estructura evalúa la EMG con aguja?', options: [
        { label: 'Nervio periférico' }, { label: 'Músculo (unidad motora)', correct: true }, { label: 'Médula espinal' }, { label: 'Cerebro' },
      ], explanation: 'La EMG de aguja evalúa la actividad eléctrica del músculo (potenciales de unidad motora).' },
      { question: '¿Qué grado de lesión nerviosa tiene buen pronóstico sin cirugía?', options: [
        { label: 'Neurotmesis' }, { label: 'Neuropraxia', correct: true }, { label: 'Axonotmesis severa' }, { label: 'Lesión de 5to grado' },
      ], explanation: 'La neuropraxia es un bloqueo de conducción con el axón intacto = recuperación espontánea.' },
      { question: '¿Cuántas semanas tarda en aparecer la fibrilación tras denervación?', options: [
        { label: '1 semana' }, { label: '2-3 semanas', correct: true }, { label: '6 semanas' }, { label: '3 meses' },
      ], explanation: 'Las fibrilaciones aparecen 2-3 semanas después de la denervación axonal.' },
      { question: '¿Qué es un bloqueo de conducción?', options: [
        { label: 'Ruptura del nervio' }, { label: 'Falla de transmisión en un segmento con axón intacto', correct: true }, { label: 'Aumento de la velocidad' }, { label: 'Hipertrofia neural' },
      ], explanation: 'El bloqueo de conducción es falla localizada de transmisión con axón preservado.' },
      // New 33
      { question: '¿Qué componentes tiene el estudio electrodiagnóstico completo?', options: [
        { label: 'Solo EMG' }, { label: 'VCN + EMG con aguja', correct: true }, { label: 'Solo VCN' }, { label: 'Solo radiografía' },
      ], explanation: 'El estudio electrodiagnóstico completo incluye VCN (neuroconducción) y EMG con aguja.' },
      { question: '¿Qué parámetro evalúa la VCN motora?', options: [
        { label: 'La fuerza muscular' }, { label: 'Latencia, amplitud y velocidad de conducción del nervio motor', correct: true }, { label: 'El rango articular' }, { label: 'La temperatura cutánea' },
      ], explanation: 'La VCN motora mide la latencia, amplitud del CMAP y velocidad de conducción.' },
      { question: '¿Qué significan las siglas CMAP?', options: [
        { label: 'Central Motor Activity Pattern' }, { label: 'Compound Muscle Action Potential', correct: true }, { label: 'Complete Muscle Atrophy Protocol' }, { label: 'Continuous Motor Assessment Program' },
      ], explanation: 'CMAP = Compound Muscle Action Potential (Potencial de Acción Muscular Compuesto).' },
      { question: '¿Qué significan las siglas SNAP?', options: [
        { label: 'Sensory Nerve Action Potential', correct: true }, { label: 'Spinal Nerve Assessment Protocol' }, { label: 'Standard Neural Activity Pattern' }, { label: 'Systematic Nerve Activation Procedure' },
      ], explanation: 'SNAP = Sensory Nerve Action Potential (Potencial de Acción Nervioso Sensitivo).' },
      { question: '¿Qué indica una amplitud reducida del CMAP?', options: [
        { label: 'Desmielinización pura' }, { label: 'Pérdida de axones motores', correct: true }, { label: 'Aumento de velocidad' }, { label: 'Bloqueo técnico' },
      ], explanation: 'La reducción de amplitud del CMAP indica pérdida de axones motores funcionales.' },
      { question: '¿Qué clasificación de lesión nerviosa usa Seddon?', options: [
        { label: 'Grados I a V' }, { label: 'Neuropraxia, Axonotmesis, Neurotmesis', correct: true }, { label: 'Leve, Moderada, Severa' }, { label: 'A, B, C, D' },
      ], explanation: 'Seddon clasifica las lesiones en neuropraxia, axonotmesis y neurotmesis.' },
      { question: '¿Cuántos grados tiene la clasificación de Sunderland?', options: [
        { label: '3' }, { label: '5', correct: true }, { label: '4' }, { label: '6' },
      ], explanation: 'Sunderland clasifica las lesiones nerviosas en 5 grados, de menor a mayor severidad.' },
      { question: '¿Qué grado de Sunderland corresponde a la neuropraxia?', options: [
        { label: 'Grado 2' }, { label: 'Grado 1', correct: true }, { label: 'Grado 3' }, { label: 'Grado 5' },
      ], explanation: 'Grado 1 de Sunderland = neuropraxia (bloqueo de conducción sin lesión axonal).' },
      { question: '¿Qué grado de Sunderland corresponde a la neurotmesis?', options: [
        { label: 'Grado 3' }, { label: 'Grado 5', correct: true }, { label: 'Grado 1' }, { label: 'Grado 2' },
      ], explanation: 'Grado 5 de Sunderland = neurotmesis (sección completa del nervio).' },
      { question: '¿Qué tipo de lesión nerviosa requiere reparación quirúrgica?', options: [
        { label: 'Neuropraxia' }, { label: 'Neurotmesis', correct: true }, { label: 'Axonotmesis leve' }, { label: 'Todas se recuperan solas' },
      ], explanation: 'La neurotmesis (sección completa del nervio) requiere reparación quirúrgica.' },
      { question: '¿Qué es la fibrilación en EMG?', options: [
        { label: 'Contracción voluntaria normal' }, { label: 'Actividad espontánea de fibras denervadas', correct: true }, { label: 'Artefacto de movimiento' }, { label: 'Señal del nervio' },
      ], explanation: 'Las fibrilaciones son contracciones espontáneas de fibras musculares individuales denervadas.' },
      { question: '¿Qué son las ondas agudas positivas en EMG?', options: [
        { label: 'Actividad voluntaria normal' }, { label: 'Otro tipo de actividad espontánea de denervación', correct: true }, { label: 'Señal de conducción rápida' }, { label: 'Artefacto' },
      ], explanation: 'Las ondas agudas positivas, junto con las fibrilaciones, son signos de denervación axonal.' },
      { question: '¿Qué ocurre con los potenciales de unidad motora en reinervación?', options: [
        { label: 'Se hacen más pequeños' }, { label: 'Se agrandan (mayor amplitud y duración)', correct: true }, { label: 'Desaparecen' }, { label: 'No cambian' },
      ], explanation: 'En reinervación, las unidades motoras aumentan de tamaño por colateral sprouting.' },
      { question: '¿Qué es el "sprouting" colateral?', options: [
        { label: 'Destrucción del axón' }, { label: 'Crecimiento de ramas axonales hacia fibras denervadas', correct: true }, { label: 'Atrofia muscular' }, { label: 'Bloqueo de conducción' },
      ], explanation: 'El sprouting colateral es el crecimiento de ramas de axones sanos hacia fibras musculares denervadas.' },
      { question: '¿Qué nervio se evalúa con VCN para diagnosticar túnel carpiano?', options: [
        { label: 'Cubital' }, { label: 'Mediano', correct: true }, { label: 'Radial' }, { label: 'Musculocutáneo' },
      ], explanation: 'El nervio mediano es el comprimido en el túnel carpiano.' },
      { question: '¿Qué hallazgo de VCN confirma túnel carpiano?', options: [
        { label: 'Velocidad aumentada' }, { label: 'Latencia distal prolongada del nervio mediano', correct: true }, { label: 'SNAP normal' }, { label: 'CMAP aumentado' },
      ], explanation: 'La latencia distal prolongada del nervio mediano en la muñeca confirma neuropatía por atrapamiento.' },
      { question: '¿Qué evalúa la onda F en neuroconducción?', options: [
        { label: 'La contracción voluntaria' }, { label: 'La conducción proximal (raíces nerviosas)', correct: true }, { label: 'La fuerza' }, { label: 'La temperatura' },
      ], explanation: 'La onda F evalúa la conducción proximal del nervio, incluyendo las raíces.' },
      { question: '¿Qué evalúa el reflejo H?', options: [
        { label: 'Fuerza muscular' }, { label: 'La vía refleja medular (equivalente al reflejo miotático)', correct: true }, { label: 'La visión' }, { label: 'La presión arterial' },
      ], explanation: 'El reflejo H evalúa el arco reflejo medular, equivalente eléctrico del reflejo de estiramiento.' },
      { question: '¿Cuándo es más informativo el estudio electrodiagnóstico tras una lesión aguda?', options: [
        { label: 'Inmediatamente' }, { label: 'A las 2-3 semanas (para EMG) y 3-4 semanas (degeneración walleriana)', correct: true }, { label: 'Al año' }, { label: 'No importa el momento' },
      ], explanation: 'Se espera 2-3 semanas para que la fibrilación y la degeneración walleriana sean detectables.' },
      { question: '¿Qué es la degeneración walleriana?', options: [
        { label: 'Regeneración del nervio' }, { label: 'Degeneración del segmento distal del axón tras lesión', correct: true }, { label: 'Crecimiento del axón proximal' }, { label: 'Atrofia cerebral' },
      ], explanation: 'La degeneración walleriana es la degeneración del segmento distal del axón separado del soma.' },
      { question: '¿Qué provoca un bloqueo de conducción en la VCN?', options: [
        { label: 'Pérdida de axones' }, { label: 'Desmielinización focal', correct: true }, { label: 'Hipertrofia muscular' }, { label: 'Aumento de la amplitud' },
      ], explanation: 'El bloqueo de conducción se debe a desmielinización focal que impide la transmisión del impulso.' },
      { question: '¿Cómo se identifica un bloqueo de conducción en VCN motora?', options: [
        { label: 'Velocidad aumentada' }, { label: 'Caída >50% de la amplitud del CMAP al estimular proximal vs. distal', correct: true }, { label: 'Latencia normal' }, { label: 'Amplitud igual en todos los puntos' },
      ], explanation: 'Una caída >50% de amplitud del CMAP entre estímulo distal y proximal indica bloqueo de conducción.' },
      { question: '¿Qué diferencia la neuropatía axonal de la desmielinizante en VCN?', options: [
        { label: 'No se pueden diferenciar' }, { label: 'Axonal: amplitud reducida; Desmielinizante: velocidad reducida', correct: true }, { label: 'Solo la clínica' }, { label: 'Solo la imagen' },
      ], explanation: 'En lesión axonal predomina la reducción de amplitud; en desmielinización, la reducción de velocidad.' },
      { question: '¿Qué indica un patrón de reclutamiento reducido en EMG?', options: [
        { label: 'Miopatía' }, { label: 'Neuropatía (pérdida de unidades motoras)', correct: true }, { label: 'Músculo normal' }, { label: 'Artefacto' },
      ], explanation: 'El reclutamiento reducido indica pérdida de unidades motoras (neuropatía).' },
      { question: '¿Qué indica un patrón de reclutamiento precoz en EMG?', options: [
        { label: 'Neuropatía' }, { label: 'Miopatía (debilidad de fibras individuales)', correct: true }, { label: 'Normal' }, { label: 'Artefacto' },
      ], explanation: 'El reclutamiento precoz indica que se necesitan más unidades motoras para generar fuerza (miopatía).' },
      { question: '¿Qué estudio complementa la VCN para evaluar plexo braquial?', options: [
        { label: 'Radiografía simple' }, { label: 'EMG con aguja + RM de plexo', correct: true }, { label: 'Ecografía abdominal' }, { label: 'Gammagrafía' },
      ], explanation: 'La EMG con aguja identifica el patrón de denervación y la RM visualiza la anatomía del plexo.' },
      { question: '¿Qué es la latencia distal en VCN?', options: [
        { label: 'El tiempo de contracción muscular' }, { label: 'El tiempo desde el estímulo hasta la respuesta al estimular distalmente', correct: true }, { label: 'La frecuencia del CMAP' }, { label: 'La amplitud del SNAP' },
      ], explanation: 'La latencia distal es el tiempo entre el estímulo distal y la aparición de la respuesta eléctrica.' },
    ]
  },
  // ── Sesión 16 ──────────────────────────────────────────────
  {
    classId: 16, title: 'Evaluación: Integración Final',
    questions: [
      // Existing 7
      { question: '¿Qué diferencia la neuropraxia de la axonotmesis?', options: [
        { label: 'El nivel de dolor' }, { label: 'En neuropraxia el axón está intacto; en axonotmesis se degenera', correct: true }, { label: 'El tipo de nervio afectado' }, { label: 'No hay diferencia clínica' },
      ], explanation: 'Neuropraxia = bloqueo transitorio; Axonotmesis = degeneración walleriana con endoneuro intacto.' },
      { question: '¿Cuándo se indica la discografía provocativa?', options: [
        { label: 'Rutina diagnóstica' }, { label: 'Reproducir dolor concordante cuando la RM no es conclusiva', correct: true }, { label: 'Evaluar nervios periféricos' }, { label: 'Medir fuerza muscular' },
      ], explanation: 'La discografía provocativa reproduce el dolor del paciente para confirmar la fuente discal.' },
      { question: '¿Qué nervio se afecta con mayor frecuencia en el síndrome del túnel del carpo?', options: [
        { label: 'Cubital' }, { label: 'Mediano', correct: true }, { label: 'Radial' }, { label: 'Musculocutáneo' },
      ], explanation: 'El nervio mediano es comprimido bajo el retináculo flexor en el STC.' },
      { question: '¿Qué rol tiene la EMG en rehabilitación?', options: [
        { label: 'Solo diagnóstico' }, { label: 'Diagnóstico + pronóstico + guía de tratamiento', correct: true }, { label: 'Solo pronóstico' }, { label: 'Solo investigación' },
      ], explanation: 'La EMG es diagnóstica, pronóstica y orienta la rehabilitación.' },
      { question: '¿Qué hallazgo en RM indica lesión aguda vs. crónica del tendón supraespinoso?', options: [
        { label: 'No es posible diferenciar' }, { label: 'Aguda: edema T2; Crónica: retracción muscular y atrofia grasa', correct: true }, { label: 'Aguda: calcificación; Crónica: edema' }, { label: 'Solo la fuerza clínica da la respuesta' },
      ], explanation: 'La atrofia grasa y la retracción muscular en RM indican lesión crónica con mal pronóstico.' },
      { question: '¿Qué secuencia temporal de imagen es correcta en lumbalgia?', options: [
        { label: 'RM inmediata siempre' }, { label: 'Rx → RM solo si banderas rojas o persistencia > 6 semanas', correct: true }, { label: 'TAC primero, luego Rx' }, { label: 'EMG primero' },
      ], explanation: 'Se inicia con Rx; RM solo si hay banderas rojas o falta de mejoría tras 6 semanas conservadoras.' },
      { question: '¿Qué estructura debe preservar el cirujano para mejorar pronóstico protésico?', options: [
        { label: 'La piel distal' }, { label: 'La mayor longitud ósea posible', correct: true }, { label: 'Solo tejido subcutáneo' }, { label: 'Las uñas' },
      ], explanation: 'Preservar la mayor longitud ósea mejora la palanca, la función protésica y la eficiencia de marcha.' },
      // New 33
      { question: '¿Qué integra la sesión 16 como evaluación final?', options: [
        { label: 'Solo biomecánica' }, { label: 'Todos los contenidos del curso: biomecánica, terapias, ortesis, prótesis, imagen y electrodiagnóstico', correct: true }, { label: 'Solo electrodiagnóstico' }, { label: 'Solo imagen' },
      ], explanation: 'La evaluación final integra todas las unidades del curso para una visión global.' },
      { question: '¿Qué es la discografía provocativa?', options: [
        { label: 'Un tipo de RM' }, { label: 'Inyección intradiscal para reproducir el dolor del paciente', correct: true }, { label: 'Un estudio de VCN' }, { label: 'Una ecografía especializada' },
      ], explanation: 'La discografía inyecta suero en el disco para ver si reproduce el dolor concordante del paciente.' },
      { question: '¿Cuál es un hallazgo de cronicidad en una lesión del manguito rotador?', options: [
        { label: 'Edema peritendinoso' }, { label: 'Atrofia grasa del músculo', correct: true }, { label: 'Inflamación aguda' }, { label: 'Hiperintensidad T2 sin retracción' },
      ], explanation: 'La atrofia grasa muscular es un signo de cronicidad con mal pronóstico quirúrgico.' },
      { question: '¿Qué clasificación de Goutallier evalúa?', options: [
        { label: 'Fracturas vertebrales' }, { label: 'Infiltración grasa del manguito rotador', correct: true }, { label: 'Degeneración discal' }, { label: 'Artrosis de rodilla' },
      ], explanation: 'Goutallier clasifica la infiltración grasa muscular del manguito rotador en grados 0-4.' },
      { question: '¿Qué grado de Goutallier indica que la grasa supera al músculo?', options: [
        { label: 'Grado 1' }, { label: 'Grado 3', correct: true }, { label: 'Grado 0' }, { label: 'Grado 2' },
      ], explanation: 'Goutallier grado 3 = más grasa que músculo en la sección transversal.' },
      { question: '¿Qué pronóstico quirúrgico tiene un manguito con Goutallier 4?', options: [
        { label: 'Excelente' }, { label: 'Pobre (alto riesgo de re-rotura)', correct: true }, { label: 'Normal' }, { label: 'No es relevante' },
      ], explanation: 'Goutallier 4 = músculo casi completamente reemplazado por grasa, mal pronóstico de reparación.' },
      { question: '¿Qué biomecánica aplica el fisioterapeuta para tratar una disfunción L4-L5?', options: [
        { label: 'Solo medicamentos' }, { label: 'Evaluación de leyes de Fryette + corrección manual + estabilización', correct: true }, { label: 'Solo cirugía' }, { label: 'Solo reposo' },
      ], explanation: 'El fisioterapeuta integra la biomecánica espinal (leyes de Fryette) con técnicas correctivas y estabilización.' },
      { question: '¿Qué agente físico prepararía el tejido antes de una movilización?', options: [
        { label: 'Crioterapia' }, { label: 'Calor superficial o ultrasonido', correct: true }, { label: 'TENS' }, { label: 'Hielo' },
      ], explanation: 'El calor o el ultrasonido aumentan la distensibilidad del colágeno antes de la movilización.' },
      { question: '¿Qué ortesis se prescribiría tras una fractura vertebral por compresión estable?', options: [
        { label: 'LSO de tela' }, { label: 'TLSO Jewett', correct: true }, { label: 'Collarín blando' }, { label: 'AFO' },
      ], explanation: 'El TLSO Jewett aplica hiperextensión por 3 puntos para fracturas de compresión estables.' },
      { question: '¿Qué componente protésico se selecciona según el nivel K?', options: [
        { label: 'Solo el encaje' }, { label: 'Rodilla, pie y suspensión', correct: true }, { label: 'Solo los cosméticos' }, { label: 'Solo la suspensión' },
      ], explanation: 'El nivel K determina la selección de rodilla, pie y sistema de suspensión apropiados.' },
      { question: '¿Qué hernia discal comprime la raíz en el receso lateral?', options: [
        { label: 'Central' }, { label: 'Posterolateral', correct: true }, { label: 'Anterior' }, { label: 'Intraósea' },
      ], explanation: 'La hernia posterolateral comprime la raíz nerviosa en el receso lateral.' },
      { question: '¿Qué estudio usaría para evaluar un posible atrapamiento del nervio cubital?', options: [
        { label: 'Solo radiografía' }, { label: 'VCN + EMG', correct: true }, { label: 'Solo TAC' }, { label: 'Solo ecografía' },
      ], explanation: 'La VCN localiza el atrapamiento y la EMG evalúa la severidad de la denervación.' },
      { question: '¿Qué tipo de paciente amputado necesita rodilla con microprocesador?', options: [
        { label: 'K1 (domiciliario)' }, { label: 'K3-K4 (comunidad activa/deportista)', correct: true }, { label: 'Todos los niveles' }, { label: 'Solo cosmético' },
      ], explanation: 'Las rodillas con microprocesador son para K3-K4 que necesitan adaptación a velocidad y terreno variable.' },
      { question: '¿Qué velocidad de crecimiento axonal se espera tras lesión nerviosa?', options: [
        { label: '10 mm/día' }, { label: '1 mm/día', correct: true }, { label: '1 cm/hora' }, { label: '1 m/día' },
      ], explanation: 'La regeneración axonal progresa aproximadamente 1 mm/día.' },
      { question: '¿Qué contribución tiene la ecografía MSK en la evaluación del hombro doloroso?', options: [
        { label: 'Solo evaluación ósea' }, { label: 'Evaluación dinámica de tendones y bursas', correct: true }, { label: 'Solo evaluación vascular' }, { label: 'No es útil en hombro' },
      ], explanation: 'La ecografía MSK permite evaluación dinámica en tiempo real de tendones del manguito y bursas.' },
      { question: '¿Qué secuencia correcta sigue el razonamiento clínico en rehabilitación?', options: [
        { label: 'Tratamiento → Diagnóstico → Evaluación' }, { label: 'Anamnesis → Examen → Imagen → Electrodiagnóstico → Diagnóstico funcional → Plan', correct: true }, { label: 'Cirugía → Rehabilitación → Evaluación' }, { label: 'Imagen → Tratamiento → Alta' },
      ], explanation: 'El razonamiento clínico sigue una secuencia lógica desde la anamnesis hasta el plan de rehabilitación.' },
      { question: '¿Qué evalúa la "funcionalidad" en el contexto de la CIF?', options: [
        { label: 'Solo la anatomía' }, { label: 'Funciones corporales, actividad y participación', correct: true }, { label: 'Solo la fuerza' }, { label: 'Solo la imagen' },
      ], explanation: 'La CIF evalúa funciones corporales, actividad (persona) y participación (sociedad).' },
      { question: '¿Qué banda roja en lumbalgia indica necesidad de imagen urgente?', options: [
        { label: 'Dolor leve matutino' }, { label: 'Síndrome de cauda equina', correct: true }, { label: 'Rigidez post-ejercicio' }, { label: 'Dolor al final del día' },
      ], explanation: 'El síndrome de cauda equina es una urgencia que requiere imagen y evaluación inmediata.' },
      { question: '¿Qué tipo de lesión nerviosa tiene axón intacto pero conducción bloqueada?', options: [
        { label: 'Axonotmesis' }, { label: 'Neuropraxia', correct: true }, { label: 'Neurotmesis' }, { label: 'Grado 4 Sunderland' },
      ], explanation: 'La neuropraxia mantiene el axón intacto con bloqueo transitorio de la conducción.' },
      { question: '¿Qué determina el pronóstico de recuperación en una lesión axonal?', options: [
        { label: 'Solo la edad' }, { label: 'La distancia entre la lesión y el músculo diana', correct: true }, { label: 'Solo el peso del paciente' }, { label: 'El color de la piel' },
      ], explanation: 'A mayor distancia de la lesión al músculo, mayor tiempo de regeneración y peor pronóstico.' },
      { question: '¿Qué beneficio tiene la AFO de fibra de carbono para un paciente con pie caído?', options: [
        { label: 'Solo estético' }, { label: 'Liviana, almacena energía y simula la función del tobillo', correct: true }, { label: 'Inmoviliza completamente' }, { label: 'No hay beneficio' },
      ], explanation: 'La AFO de fibra de carbono es liviana y devuelve energía elástica durante la propulsión.' },
      { question: '¿Qué rol cumple la silla de ruedas en el marco de la CIF?', options: [
        { label: 'Solo transporte' }, { label: 'Facilitador de participación', correct: true }, { label: 'Factor ambiental negativo' }, { label: 'Solo estético' },
      ], explanation: 'La silla de ruedas es un facilitador ambiental que mejora la participación social.' },
      { question: '¿Qué principio fundamental guía la selección de medios físicos?', options: [
        { label: 'El más caro es mejor' }, { label: 'Seleccionar según el objetivo terapéutico y la fase de la lesión', correct: true }, { label: 'Usar siempre todos los disponibles' }, { label: 'Solo los que el paciente prefiere' },
      ], explanation: 'La selección debe basarse en el objetivo terapéutico (calor, frío, corriente) y la fase de la lesión.' },
      { question: '¿Qué sistema de presión de 3 puntos se aplica en las ortesis espinales?', options: [
        { label: 'Presión unidireccional' }, { label: 'Dos fuerzas en una dirección y una en la opuesta', correct: true }, { label: 'Tres fuerzas en la misma dirección' }, { label: 'Una sola fuerza' },
      ], explanation: 'El sistema de 3 puntos aplica dos fuerzas en una dirección y una central opuesta.' },
      { question: '¿Qué examen complementario ayuda a diferenciar radiculopatía cervical de neuropatía periférica?', options: [
        { label: 'Radiografía simple' }, { label: 'Estudios de neuroconducción y EMG', correct: true }, { label: 'TAC simple' }, { label: 'Hemograma' },
      ], explanation: 'La VCN y EMG diferencian el nivel y tipo de lesión (radicular vs. troncular).' },
      { question: '¿Qué hallazgo confirma reinervación en EMG?', options: [
        { label: 'Fibrilaciones persistentes' }, { label: 'Potenciales de unidad motora polifásicos nacientes', correct: true }, { label: 'Silencio eléctrico' }, { label: 'Ondas agudas positivas' },
      ], explanation: 'Los potenciales polifásicos nacientes son signo de reinervación activa en curso.' },
      { question: '¿Qué secuencia de RM es más sensible para detectar edema óseo agudo?', options: [
        { label: 'T1' }, { label: 'STIR', correct: true }, { label: 'TAC' }, { label: 'Rx convencional' },
      ], explanation: 'STIR suprime la señal de grasa y resalta el edema óseo agudo como señal brillante.' },
    ]
  },
]
