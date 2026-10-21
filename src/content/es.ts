// Spanish (rioplatense, "vos") — the default language of the site.
// Brand voice: warm, a little funny, honest. Headlines in sentence case with ¿ ¡.

export type Accent = "celeste" | "nordsee" | "dulce" | "backstein" | "mate";
export type Format = "Reel" | "TikTok" | "YouTube" | "Carrusel" | "Carousel" | "Stories";
export type ServiceIcon = "destination" | "tourism" | "youtube" | "social" | "brand";

export const es = {
  locale: "es",
  path: "/",
  meta: {
    title: "Macarena (@maca.deviaje) · Creadora de contenido de viajes en Alemania",
    description:
      "Influencer argentina en Alemania. Campañas para destinos, oficinas de turismo y marcas que quieren llegar a viajeros hispanohablantes con reels, TikTok, YouTube y storytelling real.",
    keywords: [
      "influencer argentina Alemania",
      "creadora de contenido latina en Europa",
      "influencer de viajes Alemania",
      "influencer hispanohablante Europa",
      "colaboraciones turismo influencer",
      "Latina creator Europe",
      "tourism influencer Germany",
      "Schleswig-Holstein",
      "Hamburgo",
    ],
    ogTitle: "Viajera argentina en Alemania",
    ogOverline: "Viajes · Vida en Alemania",
  },

  skip: "Saltar al contenido",
  nav: {
    links: [
      { href: "#sobre-mi", label: "Sobre mí" },
      { href: "#contenido", label: "Contenido" },
      { href: "#colaboraciones", label: "Colaboraciones" },
      { href: "#curso", label: "Curso" },
      { href: "#contacto", label: "Contacto" },
    ],
    cta: "Trabajá conmigo",
    menu: "Menú",
    close: "Cerrar",
    switchLabel: "English",
    switchShort: "EN",
    switchHref: "/en/",
  },

  hero: {
    overline: "Creadora de contenido · Buenos Aires → Schleswig-Holstein",
    name: "Macarena",
    title: "Viajera en Alemania",
    lead: "Cuento Europa con ojos latinos. Historias reales entre Argentina y Alemania que ayudan a destinos y marcas a ganarse la confianza de viajeros hispanohablantes.",
    primary: "Trabajá conmigo",
    secondary: "Ver mi curso de alemán",
    languages: "Contenido en español · colaboraciones también en alemán e inglés",
    note: "¡te lo cuento todo, che!",
    photo: {
      src: "/photos/hero.jpg",
      alt: "Macarena en el Deich, con viento y luz de tarde",
      caption: "Maca en el Deich, luz de tarde",
    },
  },

  proof: {
    label: "Comunidad",
    items: [
      { key: "instagram", label: "seguidores en Instagram" },
      { key: "tiktok", label: "seguidores en TikTok" },
      { key: "youtube", label: "suscriptores en YouTube" },
      { key: "tiktokLikes", label: "me gusta en TikTok" },
    ],
    base: "Base en Schleswig-Holstein · cerca de Hamburgo · disponible para viajes en Europa",
  },

  about: {
    number: "01",
    overline: "Sobre mí",
    title: "Una argentina en el norte de Alemania, contando la verdad con cariño.",
    story: [
      "Soy Maca, porteña. Llegué a Schleswig-Holstein con dos valijas y un paquete de yerba, y empecé a contar lo que nadie te cuenta: la Anmeldung, el primer invierno, los domingos con todo cerrado y la alegría de un campo de Raps en mayo.",
      "Mi comunidad me sigue porque no le vendo postales perfectas. Le muestro los lugares como son, y por eso confía cuando le recomiendo un destino, un hotel o un producto.",
    ],
    whyTitle: "Por qué las marcas trabajan conmigo",
    why: [
      {
        title: "Voz latina auténtica en Europa",
        text: "Una mirada hispanohablante, cercana y con humor, sobre destinos que tu audiencia latina todavía no conoce.",
      },
      {
        title: "Puente cultural",
        text: "Traduzco Europa para Latinoamérica: costumbres, precios, transporte y esos detalles que hacen que un viaje se sienta posible.",
      },
      {
        title: "Confianza real",
        text: "Recomiendo solo lo que usaría yo. Mi audiencia lo sabe, y por eso guarda, comparte y pregunta.",
      },
      {
        title: "Vida real + viajes",
        text: "Mezclo el día a día con escapadas. Tu destino aparece dentro de una historia, no en un anuncio.",
      },
    ],
    audienceTitle: "Quién me sigue",
    audienceIntro:
      "Hispanohablantes que sueñan con viajar o mudarse a Europa, argentinos en el exterior y curiosos de la vida europea. Gente que investiga antes de reservar.",
    audience: [
      { key: "countries", label: "Países principales" },
      { key: "age", label: "Edad principal" },
      { key: "women", label: "Mujeres" },
    ],
    languagesLabel: "Idiomas",
    languages: "Español rioplatense · también alemán e inglés",
    mediaKit: "¿Necesitás el media kit completo? Pedímelo y te lo mando.",
  },

  content: {
    number: "02",
    overline: "Contenido",
    title: "Historias que la gente guarda para su próximo viaje.",
    intro: "Cinco pilares, un mismo tono: cercano, honesto y con detalles que sirven de verdad.",
    pillars: [
      { label: "Vida en Alemania", accent: "celeste" as Accent },
      { label: "Escapadas", accent: "nordsee" as Accent },
      { label: "Familia y cultura", accent: "mate" as Accent },
      { label: "Comida de casa", accent: "dulce" as Accent },
      { label: "Trámites y tips", accent: "backstein" as Accent },
    ],
    cards: [
      {
        pillar: "Vida en Alemania",
        accent: "celeste" as Accent,
        format: "YouTube" as Format,
        title: "Mi primer invierno en el norte (y cómo sobreviví)",
        meta: "8 min · con mate en mano",
        photo: { src: "/photos/invierno.jpg", caption: "Deich al atardecer" },
      },
      {
        pillar: "Escapadas",
        accent: "nordsee" as Accent,
        format: "Reel" as Format,
        title: "Un domingo en Lübeck",
        meta: "Ladrillo, mazapán y el Báltico a 20 minutos",
        photo: { src: "/photos/luebeck.jpg", caption: "fachada de ladrillo, Lübeck" },
      },
      {
        pillar: "Comida de casa",
        accent: "dulce" as Accent,
        format: "Reel" as Format,
        title: "Empanadas con lo que hay en el Edeka",
        meta: "45 min · 12 unidades · fácil",
        photo: { src: "/photos/empanadas.jpg", caption: "manos, harina y empanadas" },
      },
      {
        pillar: "Trámites y tips",
        accent: "backstein" as Accent,
        format: "Carrusel" as Format,
        title: "Cómo hacer la Anmeldung sin morir en el intento",
        meta: "Guía paso a paso · 10 slides",
        photo: { src: "/photos/anmeldung.jpg", caption: "carta oficial alemana, ¿y esto?" },
      },
      {
        pillar: "Familia y cultura",
        accent: "mate" as Accent,
        format: "TikTok" as Format,
        title: "Videollamada de domingo con Argentina",
        meta: "Lo que extrañás y lo que ganás",
        photo: { src: "/photos/familia.jpg", caption: "videollamada con la familia" },
      },
      {
        pillar: "Escapadas",
        accent: "nordsee" as Accent,
        format: "Reel" as Format,
        title: "Mayo en Schleswig-Holstein: Raps hasta el horizonte",
        meta: "Ruta en bici · 1 día",
        photo: { src: "/photos/raps.jpg", caption: "campo de Raps en mayo" },
      },
    ],
    cardCta: "Ver en mis redes",
    more: "Mirá todo en Instagram",
  },

  collabs: {
    number: "03",
    overline: "Colaboraciones",
    title: "Cómo podemos trabajar juntos",
    intro:
      "Formatos claros, guion propio y una audiencia que llega con ganas de viajar. Todo se adapta a los objetivos de tu campaña.",
    from: "desde",
    onRequest: "a consultar",
    services: [
      {
        icon: "destination" as ServiceIcon,
        title: "Campañas de destino",
        text: "Cobertura multiplataforma de una ciudad, región o ruta: reels, stories, carrusel y video largo con la experiencia completa.",
        price: "",
      },
      {
        icon: "tourism" as ServiceIcon,
        title: "Alianzas con oficinas de turismo",
        text: "Series de largo plazo para posicionar tu destino en el mercado hispanohablante, temporada a temporada.",
        price: "",
      },
      {
        icon: "youtube" as ServiceIcon,
        title: "Storytelling en YouTube",
        text: "Integración de 60–90 s o video dedicado, con guion propio y tu destino como parte de la historia.",
        price: "youtube",
      },
      {
        icon: "social" as ServiceIcon,
        title: "Reels, TikTok y Stories",
        text: "Video vertical de 30–90 s con guion propio y 1 revisión, o pack de 3–5 stories con link.",
        price: "reel",
      },
      {
        icon: "brand" as ServiceIcon,
        title: "Integraciones de marca",
        text: "Product placement natural en mi día a día: hoteles, transporte, apps, equipaje y gastronomía.",
        price: "",
      },
    ],
    tourismTitle: "Por qué funciona para turismo",
    tourism: [
      "Muestro el destino como lo vive una persona real: cómo llegar, cuánto cuesta, qué clima esperar y dónde comer.",
      "Mi audiencia busca información práctica antes de reservar y guarda el contenido para planear.",
      "Vivo en el norte de Alemania: llego rápido a cualquier punto de Europa, sin vuelos largos.",
      "Contenido en español, con versiones en alemán o inglés si tu campaña las necesita.",
    ],
    cta: "Hablemos de tu campaña",
    ctaNote: "Contame tu idea y te mando una propuesta a medida.",
  },

  process: {
    number: "04",
    overline: "Cómo trabajamos",
    title: "Simple, claro y con resultados que podés medir.",
    steps: [
      { title: "Brief", text: "Me contás objetivos, público, fechas y presupuesto." },
      { title: "Propuesta", text: "Te mando ideas, formatos y un calendario de publicación." },
      { title: "Producción", text: "Viajo, grabo y edito con mi estilo. Revisás antes de publicar." },
      { title: "Reporte", text: "Te comparto métricas reales: alcance, guardados, clics y comentarios." },
    ],
    partnersTitle: "Marcas y destinos con los que trabajé",
    testimonialsTitle: "Lo que dicen",
  },

  course: {
    overline: "Otro proyecto de Maca",
    badge: "Producto aparte · curso online",
    title: "Alemán desde cero, para hispanohablantes.",
    text: "El curso que me hubiera gustado tener al llegar: alemán práctico para el día a día, explicado en español y sin vueltas.",
    benefits: [
      { title: "Pensado para hispanohablantes", text: "Explicado en español, con las comparaciones que te hacen clic." },
      { title: "Para la vida real", text: "Supermercado, médico, trámites, trabajo y charla con los vecinos." },
      { title: "Desde cero, a tu ritmo", text: "Si nunca estudiaste alemán, empezás acá." },
    ],
    wordsLabel: "Palabras que vas a usar desde la primera semana",
    words: ["Anmeldung", "Termin", "Feierabend", "Kaffee und Kuchen", "Tschüss"],
    route: "ES → DE",
    cta: "Quiero saber más del curso",
    mailSubject: "Curso de alemán para principiantes",
  },

  contact: {
    number: "05",
    overline: "Contacto",
    title: "Hagamos que tu destino se cuente en español.",
    lead: "Si tu marca, hotel u oficina de turismo quiere llegar a viajeros hispanohablantes con historias que generan confianza, escribime. Respondo yo, personalmente.",
    direct: "¿Preferís mail directo?",
    follow: "Seguime",
    form: {
      name: "Nombre",
      company: "Marca / empresa",
      email: "Mail",
      typeLegend: "Soy…",
      types: ["Marca", "Oficina de turismo / destino", "Agencia"],
      budget: "Presupuesto (opcional)",
      budgets: ["Prefiero no decir", "Hasta €1.000", "€1.000 – €3.000", "€3.000 – €7.500", "Más de €7.500"],
      message: "Contame sobre tu campaña",
      messagePlaceholder: "Destino o producto, fechas, objetivos…",
      submit: "Enviar consulta",
      sending: "Enviando…",
      success: "¡Gracias! Te escribo en estos días.",
      mailtoNote: "Se abre tu programa de mail con todo listo para enviar.",
      required: "Completá este campo.",
      invalidEmail: "Uy, a ese mail le falta algo.",
      error: "Algo falló. Escribime directo a",
      subject: "Colaboración",
    },
  },

  footer: {
    tagline: "Tu amiga argentina que vive en Alemania y te cuenta la verdad con cariño.",
    rights: "Todos los derechos reservados.",
    top: "Volver arriba",
  },
};

export type Dictionary = typeof es;
