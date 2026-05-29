export interface Benefit {
  id: string;
  icon: string; // Will match Lucide icon names dynamically
  title: string;
  description: string;
}

export interface ProcessStep {
  stepNumber: number;
  title: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  rating: number;
  comment: string;
  image: string;
}

export interface Partner {
  name: string;
  logo: string;
}

export interface BlogArticle {
  id: string;
  category: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  readTime: string;
  content: string;
}

export interface FAQItemData {
  id: string;
  question: string;
  answer: string;
}

export const benefitsData: Benefit[] = [
  {
    id: "tasas",
    icon: "Percent",
    title: "Tasas Competitivas",
    description: "Ofrecemos tasas de interés estructuradas a tu medida, diseñadas para que puedas cumplir tus metas sin sobrecargar tu presupuesto mensual."
  },
  {
    id: "desembolso",
    icon: "Zap",
    title: "Desembolso Rápido",
    description: "Entendemos que el tiempo es dinero. Por eso, agilizamos el proceso para entregarte el capital que necesitas en tiempo récord."
  },
  {
    id: "infocorp",
    icon: "CheckCircle",
    title: "Aprobación con Infocorp",
    description: "Evaluamos tu situación actual y el valor de tu propiedad, no solo tu historial crediticio pasado. Tu garantía es tu respaldo."
  },
  {
    id: "seguridad",
    icon: "ShieldCheck",
    title: "Seguridad Garantizada",
    description: "Operamos bajo el marco legal peruano con total transparencia, firmas notariales y asesoría legal personalizada durante todo el proceso."
  }
];

export const processSteps: ProcessStep[] = [
  {
    stepNumber: 1,
    title: "Envía tu Solicitud",
    description: "Completa nuestro formulario web con tus datos básicos y la información de la propiedad en menos de 2 minutos."
  },
  {
    stepNumber: 2,
    title: "Avalúo Profesional",
    description: "Coordinamos una tasación rápida de tu inmueble para determinar el monto máximo del préstamo al que puedes acceder."
  },
  {
    stepNumber: 3,
    title: "Aprobación Rápida",
    description: "Te presentamos una oferta formal con tasas transparentes y plazos flexibles que se adapten a tu capacidad de pago."
  },
  {
    stepNumber: 4,
    title: "Desembolso Seguro",
    description: "Firmamos la escritura pública en notaría y procedemos con la transferencia del capital directamente a tu cuenta bancaria."
  }
];

export const testimonialsData: Testimonial[] = [
  {
    id: "t1",
    name: "Carlos Mendoza",
    role: "Empresario - Lima",
    rating: 5,
    comment: "Gracias a Intercapital pude inyectar capital de trabajo a mi empresa cuando los bancos tradicionales me cerraban las puertas por estar en Infocorp. El trato fue transparente y el desembolso muy rápido.",
    image: "/img/cliente1.webp"
  },
  {
    id: "t2",
    name: "Ana Sofía Benavides",
    role: "Profesional Independiente - Arequipa",
    rating: 5,
    comment: "El préstamo con garantía hipotecaria me permitió consolidar todas mis deudas y pagar una sola cuota mensual mucho menor. El soporte legal y notarial me dio mucha tranquilidad.",
    image: "/img/cliente2.webp"
  },
  {
    id: "t3",
    name: "Eduardo Romero",
    role: "Emprendedor - Trujillo",
    rating: 5,
    comment: "Lo que más valoro es la rapidez. En menos de una semana ya tenía el financiamiento aprobado para la remodelación de mi local comercial. Excelente asesoría de principio a fin.",
    image: "/img/cliente3.webp"
  },
  {
    id: "t4",
    name: "Milagros Huamán",
    role: "Propietaria de Negocio - Callao",
    rating: 5,
    comment: "Excelente servicio. Fueron muy claros desde el primer día con los intereses y las condiciones. No hay cobros ocultos ni sorpresas, 100% recomendados.",
    image: "/img/cliente4.webp"
  }
];

export const partnersData: Partner[] = [
  { name: "CAENE", logo: "/img/LOGO-CAENE.png" },
  { name: "DPI 1080", logo: "/img/LOGO-DPI-1080-AL-LIMITE.png" },
  { name: "ELE", logo: "/img/LOGO-ELE.png" },
  { name: "NOBILITY", logo: "/img/LOGO-NOBILITY.png" },
  { name: "NOTARIA LEYTON", logo: "/img/LOGO-NOTARIALEYTON.png" },
  { name: "SENTINEL", logo: "/img/LOGO-SENTINEL.png" }
];

export const blogArticles: BlogArticle[] = [
  {
    id: "art1",
    category: "Educación Financiera",
    title: "Cómo funciona un préstamo con garantía hipotecaria en el Perú",
    excerpt: "Conoce todos los detalles legales, requisitos y el paso a paso para acceder a liquidez utilizando tu propiedad como respaldo.",
    image: "/img/articulo1.jpg",
    date: "15 Mayo, 2026",
    readTime: "5 min de lectura",
    content: `
      <p class="text-lg text-slate-700 leading-relaxed mb-6 font-semibold">
        ¿Necesitas financiamiento y tu banco tradicional te ha cerrado las puertas? En el Perú, los préstamos con garantía hipotecaria se han convertido en una de las herramientas de financiamiento más potentes y ágiles para obtener liquidez inmediata utilizando un inmueble como respaldo.
      </p>

      <h2 class="text-2xl font-bold text-navy-secondary mt-8 mb-4">¿Qué es un préstamo con garantía hipotecaria?</h2>
      <p class="text-slate-600 leading-relaxed mb-6">
        A diferencia de un crédito hipotecario tradicional (diseñado para la compra de una vivienda), el préstamo con garantía hipotecaria es un <strong>crédito de libre disponibilidad</strong>. Esto significa que el dinero obtenido puede ser utilizado para cualquier finalidad: inyección de capital en tu negocio, consolidación de deudas acumuladas, remodelación de inmuebles o educación. El solicitante pone su propiedad (inscrita en SUNARP) como respaldo de pago.
      </p>

      <h2 class="text-2xl font-bold text-navy-secondary mt-8 mb-4">El Paso a Paso del Proceso en el Perú</h2>

      <h3 class="text-xl font-semibold text-navy-secondary mt-6 mb-3">1. Tasación Comercial de la Propiedad</h3>
      <p class="text-slate-600 leading-relaxed mb-6">
        El proceso inicia con un avalúo o tasación comercial realizado por un perito colegiado. Este especialista determina el valor real de tu inmueble en el mercado actual. En <strong>Intercapital Perú</strong>, otorgamos financiamiento de entre el <strong>30% y el 40% del valor comercial</strong> de la propiedad, garantizando cuotas realistas y un proceso transparente.
      </p>

      <h3 class="text-xl font-semibold text-navy-secondary mt-6 mb-3">2. Estudio de Títulos en SUNARP</h3>
      <p class="text-slate-600 leading-relaxed mb-6">
        Es indispensable validar la seguridad jurídica del inmueble. El área legal verifica la Partida Registral en la <strong>Superintendencia Nacional de los Registros Públicos (SUNARP)</strong> para confirmar que la propiedad se encuentra libre de cargas, embargos o gravámenes insalvables. Debe estar a nombre del solicitante o de un aval de la operación.
      </p>

      <h3 class="text-xl font-semibold text-navy-secondary mt-6 mb-3">3. Evaluación de Capacidad de Pago</h3>
      <p class="text-slate-600 leading-relaxed mb-6">
        Aunque en Intercapital evaluamos solicitudes de personas reportadas de manera negativa en centrales de riesgo (como Infocorp), es fundamental estructurar un plan de pago cómodo. Revisamos tus ingresos (formales o informales) para asegurar que el pago mensual no comprometa tu estabilidad financiera.
      </p>

      <h3 class="text-xl font-semibold text-navy-secondary mt-6 mb-3">4. Firma de Escritura Pública en Notaría</h3>
      <p class="text-slate-600 leading-relaxed mb-6">
        Una vez aprobado el crédito, se redacta la minuta y se firma una escritura pública de constitución de hipoteca ante un <strong>notario público colegiado</strong>. Este paso garantiza la legalidad del contrato bajo la legislación peruana y protege los derechos de ambas partes.
      </p>

      <h3 class="text-xl font-semibold text-navy-secondary mt-6 mb-3">5. Desembolso del Préstamo</h3>
      <p class="text-slate-600 leading-relaxed mb-6">
        Tras la inscripción del bloqueo registral en SUNARP, se procede con el desembolso directo de los fondos mediante transferencia bancaria segura o cheque de gerencia. ¡Y listo! Tienes la liquidez que necesitabas con plazos cómodos de pago de 12 a 60 meses.
      </p>

      <h2 class="text-2xl font-bold text-navy-secondary mt-8 mb-4">Ventajas sobre los préstamos personales comunes</h2>
      <ul class="list-disc pl-6 text-slate-600 flex flex-col gap-3 mb-6">
        <li><strong>Tasas de interés más bajas</strong>: Al contar con un respaldo real (la propiedad), las tasas son considerablemente menores a las de un préstamo personal o una tarjeta de crédito.</li>
        <li><strong>Montos de capital elevados</strong>: Puedes acceder a sumas desde S/. 20,000 hasta montos de seis dígitos, dependiendo directamente del valor de tu inmueble.</li>
        <li><strong>Plazos flexibles</strong>: Estructuración de cuotas a largo plazo para que la carga mensual sea mínima.</li>
      </ul>
    `
  },
  {
    id: "art2",
    category: "Empresas",
    title: "Financiamiento para PYMES: ¿Garantía hipotecaria o préstamo bancario?",
    excerpt: "Analizamos las ventajas, plazos y flexibilidad de amortización para tomar la mejor decisión de crecimiento empresarial.",
    image: "/img/articulo2.png",
    date: "10 Mayo, 2026",
    readTime: "7 min de lectura",
    content: `
      <p class="text-lg text-slate-700 leading-relaxed mb-6 font-semibold">
        El crecimiento de una micro, pequeña o mediana empresa (MIPYME) en el Perú exige un flujo constante de capital de trabajo. Sin embargo, cuando se busca financiamiento externo, surge la duda: ¿es mejor optar por un préstamo bancario tradicional o por financiamiento con garantía hipotecaria a través de fintechs?
      </p>

      <h2 class="text-2xl font-bold text-navy-secondary mt-8 mb-4">La realidad del financiamiento PYME en la banca tradicional</h2>
      <p class="text-slate-600 leading-relaxed mb-6">
        Para muchas empresas peruanas, conseguir un crédito en un banco comercial representa un proceso sumamente burocrático. Los bancos tradicionales exigen:
      </p>
      <ul class="list-disc pl-6 text-slate-600 flex flex-col gap-2 mb-6">
        <li>Declaraciones juradas anuales con utilidades netas positivas consecutivas.</li>
        <li>Flujos de caja proyectados complejos y firmados por contadores colegiados.</li>
        <li>Un historial crediticio intachable, tanto de la empresa como de los socios principales.</li>
        <li>Ratios de apalancamiento conservadores.</li>
      </ul>
      <p class="text-slate-600 leading-relaxed mb-6">
        Cualquier alteración en estas variables resulta en un rechazo inmediato o en la asignación de tasas de interés extremadamente altas.
      </p>

      <h2 class="text-2xl font-bold text-navy-secondary mt-8 mb-4">¿Por qué la Garantía Hipotecaria es la aliada del crecimiento comercial?</h2>
      <p class="text-slate-600 leading-relaxed mb-6">
        Los préstamos respaldados con una propiedad surgen como una opción flexible, segura y rápida. Utilizar un inmueble de la empresa (local comercial, oficina, almacén) o un predio personal de los fundadores permite eludir las trabas burocráticas del scoring bancario tradicional.
      </p>

      <h2 class="text-2xl font-bold text-navy-secondary mt-8 mb-4">Comparativa Directa: Préstamo Bancario vs. Garantía Hipotecaria</h2>
      <div class="overflow-x-auto my-6 border border-slate-200 rounded-2xl">
        <table class="w-full text-left border-collapse text-sm">
          <thead>
            <tr class="bg-slate-100 border-b border-slate-200">
              <th class="p-4 font-bold text-navy-secondary">Factor de Evaluación</th>
              <th class="p-4 font-bold text-navy-secondary">Crédito Bancario Tradicional</th>
              <th class="p-4 font-bold text-navy-secondary">Préstamo con Garantía Hipotecaria</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-200 text-slate-600">
            <tr>
              <td class="p-4 font-semibold">Tiempos de Aprobación</td>
              <td class="p-4">De 30 a 90 días útiles</td>
              <td class="p-4 font-medium text-cyan-primary text-cyan-500">En menos de 72 horas hábiles</td>
            </tr>
            <tr>
              <td class="p-4 font-semibold">Historial en Infocorp</td>
              <td class="p-4">Rechazo absoluto si hay reporte negativo</td>
              <td class="p-4 text-slate-700">Aprobado mediante el valor de la propiedad</td>
            </tr>
            <tr>
              <td class="p-4 font-semibold">Burocracia y Requisitos</td>
              <td class="p-4">Altos estándares de facturación e IGV</td>
              <td class="p-4">Documentación básica y escrituras en notaría</td>
            </tr>
            <tr>
              <td class="p-4 font-semibold">Destino de Fondos</td>
              <td class="p-4">Sujeto a justificación comercial estricta</td>
              <td class="p-4 font-medium text-slate-700">Libre disponibilidad (Capital o Deudas)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 class="text-2xl font-bold text-navy-secondary mt-8 mb-4">Estrategias de inversión con garantía inmobiliaria</h2>
      <p class="text-slate-600 leading-relaxed mb-6">
        Las empresas más competitivas del Perú utilizan esta liquidez rápida para:
      </p>
      <ul class="list-decimal pl-6 text-slate-600 flex flex-col gap-2 mb-6">
        <li><strong>Comprar mercadería por volumen</strong>: Negociando descuentos significativos con proveedores al pagar al contado.</li>
        <li><strong>Remodelar locales comerciales</strong>: Incrementando la afluencia y valor de venta del punto físico.</li>
        <li><strong>Consolidar deudas tributarias o financieras</strong>: Sustituyendo múltiples acreedores de tasas altas por una sola cuota mensual más barata y estructurada a largo plazo.</li>
      </ul>
    `
  },
  {
    id: "art3",
    category: "Historial Crediticio",
    title: "Estar en Infocorp: ¿Es realmente un impedimento para obtener capital?",
    excerpt: "Descubre cómo las fintechs evalúan alternativas de financiamiento seguro a través de garantías reales, mitigando el historial negativo.",
    image: "/img/articulo3.png",
    date: "02 Mayo, 2026",
    readTime: "4 min de lectura",
    content: `
      <p class="text-lg text-slate-700 leading-relaxed mb-6 font-semibold">
        En el Perú, existe la creencia generalizada de que tener un reporte negativo en centrales de riesgo como Equifax, Sentinel o Infocorp significa el fin de cualquier oportunidad de financiamiento comercial. ¿Es esto verdad? Aquí te explicamos cómo las fintechs han revolucionado la evaluación de riesgo.
      </p>

      <h2 class="text-2xl font-bold text-navy-secondary mt-8 mb-4">¿Por qué los bancos tradicionales te cierran la puerta si estás en Infocorp?</h2>
      <p class="text-slate-600 leading-relaxed mb-6">
        La banca tradicional opera bajo un sistema de <strong>scoring automatizado</strong>. Estos sistemas evalúan el historial de comportamiento de pago de los últimos 2 o 5 años. Si tienes deudas pendientes de pago, castigos financieros o simplemente un score bajo, la computadora rechaza la solicitud de inmediato. No importa si tu situación actual ha mejorado o si tienes capacidad de pago demostrable hoy.
      </p>

      <h2 class="text-2xl font-bold text-navy-secondary mt-8 mb-4">La Garantía Hipotecaria como puente de reinserción financiera</h2>
      <p class="text-slate-600 leading-relaxed mb-6">
        A diferencia del crédito personal de consumo, el préstamo con garantía hipotecaria cuenta con un respaldo tangible: **un inmueble saneado**. Al existir esta garantía real inscrita ante la SUNARP, el nivel de riesgo de impago disminuye considerablemente para el prestamista. Esto permite a fintechs reguladas como <strong>Intercapital Perú</strong> evaluar las solicitudes de una manera mucho más flexible y humana.
      </p>

      <h2 class="text-2xl font-bold text-navy-secondary mt-8 mb-4">¿Cómo funciona la evaluación flexible?</h2>
      <ul class="list-disc pl-6 text-slate-600 flex flex-col gap-3 mb-6">
        <li><strong>Valor de la Propiedad</strong>: Evaluamos el valor de tasación del inmueble. El préstamo se aprueba en función de este colateral, no de tu reporte.</li>
        <li><strong>Capacidad de Pago Actual</strong>: Revisamos tus flujos de efectivo presentes (sean boletas, facturas, estados de cuenta bancarios o ingresos por negocios independientes no formalizados). Lo importante es que puedas pagar la cuota mensual cómodamente.</li>
        <li><strong>Destino Estratégico</strong>: Te asesoramos sobre cómo utilizar el capital. Muchos clientes emplean parte del préstamo para saldar las deudas pendientes en Infocorp, "limpiando" su historial crediticio al instante.</li>
      </ul>

      <h2 class="text-2xl font-bold text-navy-secondary mt-8 mb-4">Consolidación de Deudas y Reinserción Financiera</h2>
      <p class="text-slate-600 leading-relaxed mb-6">
        Consolidar deudas es el proceso de agrupar todos tus compromisos financieros (tarjetas de crédito, préstamos rápidos y facturas vencidas) en una sola cuenta de menor tasa de interés. Al saldar estas deudas antiguas, las entidades reportan el pago a las centrales de riesgo y tu score crediticio comenzará a recuperarse progresivamente. En pocos meses, estarás listo para reinsertarte de lleno en el sistema bancario comercial con mejores condiciones.
      </p>
    `
  }
];

export const faqsData: FAQItemData[] = [
  {
    id: "faq1",
    question: "¿Qué requisitos debe cumplir mi propiedad?",
    answer: "La propiedad (casa, departamento, local comercial o terreno) debe estar inscrita en SUNARP, libre de cargas o gravámenes insalvables, y ubicada en zonas urbanas de cobertura. Debe estar a nombre del solicitante o de un avalista que participe en la firma."
  },
  {
    id: "faq2",
    question: "¿Qué documentos necesito para solicitar un préstamo?",
    answer: "Documentos básicos: identificación oficial, comprobante de domicilio y escrituras de la propiedad. Un asesor te indicará si necesitas algún documento adicional."
  },
  {
    id: "faq3",
    question: "¿Cuánto tiempo tarda el proceso de aprobación?",
    answer: "Nuestro proceso es uno de los más rápidos del mercado. Después de recibir tu solicitud completa, normalmente damos respuesta en 24 horas y el desembolso puede realizarse en menos de 72 horas hábiles."
  },
  {
    id: "faq4",
    question: "¿Puedo pagar anticipadamente sin penalización?",
    answer: "Sí, todos nuestros préstamos permiten pagos anticipados a partir de la tercera cuota sin ningún tipo de penalización, dándote la flexibilidad que necesitas en tu plan financiero."
  },
  {
    id: "faq5",
    question: "¿Puedo acceder al préstamo si estoy reportado en Infocorp?",
    answer: "Sí, definitivamente. Evaluamos tu capacidad de pago actual y la solidez de la garantía inmobiliaria. Entendemos que un bache financiero en el pasado no define tu presente comercial, por lo que adaptamos el crédito a tu perfil actual."
  },
  {
    id: "faq6",
    question: "¿Cuáles son los plazos de pago que ofrecen?",
    answer: "Ofrecemos plazos flexibles desde 1 hasta 5 años (12 a 60 meses), con opción de amortización anticipada sin penalidades o estructuraciones de cuota que incluyan periodos de gracia según el proyecto."
  },
  {
    id: "faq7",
    question: "¿El trámite se realiza ante notario público?",
    answer: "Sí. Toda operación se formaliza mediante una escritura pública inscrita en SUNARP ante un notario público colegiado. Esto garantiza la seguridad jurídica y legal absoluta tanto para ti como propietario como para nosotros como entidad."
  }
];
