// English — for international and German tourism boards, PR agencies and brand managers.
import type { Accent, Dictionary, Format, ServiceIcon } from "./es";

export const en: Dictionary = {
  locale: "en",
  path: "/en/",
  meta: {
    title: "Macarena (@maca.deviaje) · Latina travel creator based in Germany",
    description:
      "Argentine travel creator living in northern Germany. Destination, tourism board and brand campaigns for Spanish-speaking travellers across Reels, TikTok, YouTube and long-form storytelling.",
    keywords: [
      "Latina creator Europe",
      "tourism influencer Germany",
      "Spanish-speaking travel influencer",
      "Argentine influencer Germany",
      "travel creator Hamburg",
      "influencer argentina Alemania",
      "Schleswig-Holstein",
    ],
    ogTitle: "Argentine travel creator in Germany",
    ogOverline: "Travel · Life in Germany",
  },

  skip: "Skip to content",
  nav: {
    links: [
      { href: "#sobre-mi", label: "About" },
      { href: "#contenido", label: "Content" },
      { href: "#colaboraciones", label: "Collaborations" },
      { href: "#curso", label: "Course" },
      { href: "#contacto", label: "Contact" },
    ],
    cta: "Work with me",
    menu: "Menu",
    close: "Close",
    switchLabel: "Español",
    switchShort: "ES",
    switchHref: "/",
  },

  hero: {
    overline: "Content creator · Buenos Aires → Schleswig-Holstein",
    name: "Macarena",
    title: "Traveller in Germany",
    lead: "I tell Europe's story through Latin American eyes. Honest, cross-cultural stories that help destinations and brands earn the trust of Spanish-speaking travellers.",
    primary: "Work with me",
    secondary: "See my German course",
    languages: "Content in Spanish · collaborations also in German and English",
    note: "¡te lo cuento todo, che!",
    photo: {
      src: "/photos/hero.jpg",
      alt: "Macarena on the dike, windswept, in afternoon light",
      caption: "Maca on the dike, afternoon light",
    },
  },

  proof: {
    label: "Community",
    items: [
      { key: "instagram", label: "Instagram followers" },
      { key: "tiktok", label: "TikTok followers" },
      { key: "youtube", label: "YouTube subscribers" },
      { key: "engagement", label: "avg. engagement (90 days)" },
    ],
    base: "Based in Schleswig-Holstein · near Hamburg · available for travel across Europe",
  },

  about: {
    number: "01",
    overline: "About",
    title: "An Argentine in northern Germany, telling it like it is — with love.",
    story: [
      "I'm Maca, from Buenos Aires. I arrived in Schleswig-Holstein with two suitcases and a bag of yerba mate, and started sharing what nobody tells you: the Anmeldung, the first winter, Sundays when everything is closed, and the joy of a rapeseed field in May.",
      "My community follows me because I don't sell perfect postcards. I show places as they really are — which is exactly why they trust me when I recommend a destination, a hotel or a product.",
    ],
    whyTitle: "Why brands work with me",
    why: [
      {
        title: "An authentic Latina voice in Europe",
        text: "A warm, funny, Spanish-speaking perspective on destinations your Latin American audience hasn't discovered yet.",
      },
      {
        title: "A cultural bridge",
        text: "I translate Europe for Latin America: customs, prices, transport and the small details that make a trip feel possible.",
      },
      {
        title: "Real trust",
        text: "I only recommend what I'd use myself. My audience knows it, so they save, share and ask questions.",
      },
      {
        title: "Real life + travel",
        text: "Everyday life mixed with getaways. Your destination appears inside a story, not in an ad.",
      },
    ],
    audienceTitle: "Who follows me",
    audienceIntro:
      "Spanish speakers dreaming of travelling to or moving to Europe, Argentines abroad, and people curious about European life. An audience that researches before it books.",
    audience: [
      { key: "countries", label: "Top countries" },
      { key: "age", label: "Main age group" },
      { key: "women", label: "Women" },
    ],
    languagesLabel: "Languages",
    languages: "Rioplatense Spanish · also German and English",
    mediaKit: "Need the full media kit? Ask and I'll send it over.",
  },

  content: {
    number: "02",
    overline: "Content",
    title: "Stories people save for their next trip.",
    intro: "Five pillars, one voice: close, honest and full of details that are genuinely useful.",
    pillars: [
      { label: "Life in Germany", accent: "celeste" as Accent },
      { label: "Getaways", accent: "nordsee" as Accent },
      { label: "Family & culture", accent: "mate" as Accent },
      { label: "Food from home", accent: "dulce" as Accent },
      { label: "Practical tips", accent: "backstein" as Accent },
    ],
    cards: [
      {
        pillar: "Life in Germany",
        accent: "celeste" as Accent,
        format: "YouTube" as Format,
        title: "My first winter up north (and how I survived it)",
        meta: "8 min · mate in hand",
        photo: { src: "/photos/invierno.jpg", caption: "the dike at sunset" },
      },
      {
        pillar: "Getaways",
        accent: "nordsee" as Accent,
        format: "Reel" as Format,
        title: "A Sunday in Lübeck",
        meta: "Red brick, marzipan and the Baltic 20 minutes away",
        photo: { src: "/photos/luebeck.jpg", caption: "red-brick façade, Lübeck" },
      },
      {
        pillar: "Food from home",
        accent: "dulce" as Accent,
        format: "Reel" as Format,
        title: "Empanadas with whatever Edeka has",
        meta: "45 min · 12 pieces · easy",
        photo: { src: "/photos/empanadas.jpg", caption: "hands, flour and empanadas" },
      },
      {
        pillar: "Practical tips",
        accent: "backstein" as Accent,
        format: "Carousel" as Format,
        title: "How to do your Anmeldung without losing your mind",
        meta: "Step-by-step guide · 10 slides",
        photo: { src: "/photos/anmeldung.jpg", caption: "official German letter" },
      },
      {
        pillar: "Family & culture",
        accent: "mate" as Accent,
        format: "TikTok" as Format,
        title: "Sunday video call with Argentina",
        meta: "What you miss and what you gain",
        photo: { src: "/photos/familia.jpg", caption: "video call with family" },
      },
      {
        pillar: "Getaways",
        accent: "nordsee" as Accent,
        format: "Reel" as Format,
        title: "May in Schleswig-Holstein: rapeseed to the horizon",
        meta: "Bike route · 1 day",
        photo: { src: "/photos/raps.jpg", caption: "rapeseed field in May" },
      },
    ],
    cardCta: "See it on my channels",
    more: "See everything on Instagram",
  },

  collabs: {
    number: "03",
    overline: "Collaborations",
    title: "Ways we can work together",
    intro:
      "Clear formats, my own scripts and an audience that shows up wanting to travel. Everything adapts to your campaign goals.",
    from: "from",
    onRequest: "on request",
    services: [
      {
        icon: "destination" as ServiceIcon,
        title: "Destination campaigns",
        text: "Multi-platform coverage of a city, region or route: Reels, Stories, carousels and long-form video of the full experience.",
        price: "",
      },
      {
        icon: "tourism" as ServiceIcon,
        title: "Tourism board partnerships",
        text: "Long-term series that position your destination in the Spanish-speaking market, season after season.",
        price: "",
      },
      {
        icon: "youtube" as ServiceIcon,
        title: "YouTube storytelling",
        text: "A 60–90 s integration or a dedicated video, scripted by me, with your destination woven into the story.",
        price: "youtube",
      },
      {
        icon: "social" as ServiceIcon,
        title: "Reels, TikTok & Stories",
        text: "30–90 s vertical video with my own script and 1 revision, or a pack of 3–5 Stories with a link.",
        price: "reel",
      },
      {
        icon: "brand" as ServiceIcon,
        title: "Brand integrations",
        text: "Natural product placement in my everyday life: hotels, transport, apps, luggage and food.",
        price: "",
      },
    ],
    tourismTitle: "Why it works for tourism",
    tourism: [
      "I show a destination the way a real person experiences it: how to get there, what it costs, what weather to expect and where to eat.",
      "My audience looks for practical information before booking, and saves content to plan their trip.",
      "I live in northern Germany, so I can reach anywhere in Europe quickly — no long-haul flights.",
      "Content in Spanish, with German or English versions if your campaign needs them.",
    ],
    cta: "Let's talk about your campaign",
    ctaNote: "Tell me your idea and I'll send you a tailored proposal.",
  },

  process: {
    number: "04",
    overline: "How we work",
    title: "Simple, clear, and with results you can measure.",
    steps: [
      { title: "Brief", text: "You share goals, audience, dates and budget." },
      { title: "Proposal", text: "I send ideas, formats and a publishing calendar." },
      { title: "Production", text: "I travel, film and edit in my style. You review before anything goes live." },
      { title: "Report", text: "You get real metrics: reach, saves, clicks and comments." },
    ],
    partnersTitle: "Brands and destinations I've worked with",
    testimonialsTitle: "What partners say",
  },

  course: {
    overline: "Another project by Maca",
    badge: "Separate product · online course",
    title: "German from scratch, for Spanish speakers.",
    text: "The course I wish I'd had when I arrived: practical, everyday German, explained in Spanish, no fluff.",
    benefits: [
      { title: "Built for Spanish speakers", text: "Explained in Spanish, with comparisons that make it click." },
      { title: "For real life", text: "Supermarket, doctor, paperwork, work and small talk with the neighbours." },
      { title: "From zero, at your pace", text: "Never studied German? This is where you start." },
    ],
    wordsLabel: "Words you'll use from week one",
    words: ["Anmeldung", "Termin", "Feierabend", "Kaffee und Kuchen", "Tschüss"],
    route: "ES → DE",
    cta: "Tell me about the course",
    mailSubject: "German course for beginners",
  },

  contact: {
    number: "05",
    overline: "Contact",
    title: "Let's tell your destination's story in Spanish.",
    lead: "If your brand, hotel or tourism board wants to reach Spanish-speaking travellers with stories that build trust, get in touch. I answer every message myself.",
    direct: "Prefer email?",
    follow: "Follow me",
    form: {
      name: "Name",
      company: "Brand / company",
      email: "Email",
      typeLegend: "I'm a…",
      types: ["Brand", "Tourism board / destination", "Agency"],
      budget: "Budget (optional)",
      budgets: ["Prefer not to say", "Up to €1,000", "€1,000 – €3,000", "€3,000 – €7,500", "€7,500+"],
      message: "Tell me about your campaign",
      messagePlaceholder: "Destination or product, dates, goals…",
      submit: "Send enquiry",
      sending: "Sending…",
      success: "Thank you! I'll get back to you in the next few days.",
      mailtoNote: "Your email app will open with everything ready to send.",
      required: "Please fill in this field.",
      invalidEmail: "Hmm, that email looks incomplete.",
      error: "Something went wrong. Email me directly at",
      subject: "Collaboration",
    },
  },

  footer: {
    tagline: "Your Argentine friend in Germany, telling it like it is — with love.",
    rights: "All rights reserved.",
    top: "Back to top",
  },
};
