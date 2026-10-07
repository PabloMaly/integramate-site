import type { Dictionary } from './en';

export const es: Dictionary = {
  meta: {
    title: 'Integramate · Automatizaciones con IA para WhatsApp',
    description:
      'Activa automatizaciones con IA para WhatsApp, atiende a tus clientes las 24 horas y mira los resultados en un panel simple.',
  },
  nav: {
    label: 'Principal',
    features: 'Funciones',
    pricing: 'Precios',
    faq: 'Preguntas',
    contact: 'Contacto',
    login: 'Ingresar',
    getStarted: 'Empezar',
    language: 'Idioma',
    menu: 'Menú',
  },
  hero: {
    badge: 'La mejor forma de usar IA en WhatsApp',
    titleLine1: 'Atiende a Cada Cliente. Crece',
    titleLine2: 'Más Rápido.',
    text: 'Integramate es la forma simple y potente de ejecutar automatizaciones con IA en WhatsApp: responde, capta clientes potenciales y hace seguimiento las 24 horas, para que tu equipo venda mejor y gane más sin el caos.',
    emailLabel: 'Email de trabajo',
    emailPlaceholder: 'Ingresa tu email de trabajo',
    submit: 'Solicitar acceso',
    note: 'El acceso es por invitación. Te respondemos en menos de un día.',
  },
  mockup: {
    tabs: ['Panel', 'Automatizaciones', 'Bandeja', 'Ejecuciones', 'Equipo'],
    title: 'Panel',
    subtitle: 'Cómo rindieron tus automatizaciones este mes.',
    conversations: 'Conversaciones atendidas',
    resolved: 'Resueltas por IA',
    hours: 'Horas ahorradas',
    chart: 'Ejecuciones por mes',
    months: ['Ene', 'Mar', 'May', 'Jul', 'Sep', 'Nov'],
    valueConversations: '2.418',
    valueResolved: '84,3%',
  },
  visuals: {
    automations: ['Atención al cliente', 'Captación de contactos', 'Asistente interno'],
    active: 'Activa',
    paused: 'Pausada',
    conversations: 'Conversaciones',
    thisMonth: 'Este mes',
    chat: {
      contact: 'Laura',
      status: 'en línea',
      placeholder: 'Escribe un mensaje',
      messages: [
        { fromCustomer: true, text: '¡Hola! ¿Abren los sábados?', time: '10:41' },
        { fromCustomer: false, text: 'Sí, de 9 a 14 h. ¿Quieres reservar un turno?', time: '10:41' },
        { fromCustomer: true, text: 'Sí, a las 10 por favor.', time: '10:42' },
        { fromCustomer: false, text: '¡Listo! Te reservé el sábado a las 10.', time: '10:42' },
      ],
    },
    executions: 'Ejecuciones',
  },
  features: {
    eyebrow: 'Funciones',
    title: 'Automatiza Mejor y Haz Crecer Tu Negocio',
    subtitle: 'Todo lo que necesitas para hablar con tus clientes y cerrar ventas más rápido.',
    items: [
      {
        visual: 'automations',
        title: 'Automatizaciones listas para usar',
        text: 'Elige un paquete, como atención al cliente o un asistente interno, responde unas preguntas y actívalo.',
      },
      {
        visual: 'conversations',
        title: 'Resultados que se entienden',
        text: 'Mira conversaciones atendidas, contactos captados y horas ahorradas, sin abrir una sola pantalla técnica.',
      },
      {
        visual: 'inbox',
        title: 'WhatsApp primero',
        text: 'Tus clientes siguen chateando donde ya están. Cada conversación llega a una bandeja compartida.',
      },
      {
        visual: 'executions',
        title: 'Siempre activo',
        text: 'Las automatizaciones responden a cualquier hora: ningún mensaje espera al lunes y ningún contacto se enfría.',
      },
    ],
  },
  pricing: {
    eyebrow: 'Planes y precios',
    title: 'Elige el Plan Que Se Adapta a Tu Negocio',
    subtitle: 'Cada plan define cuántas automatizaciones puedes tener activas a la vez.',
    includes: 'Incluye:',
    plans: [
      {
        name: 'Starter',
        description: 'Para equipos pequeños que automatizan sus primeras conversaciones.',
        price: 'A medida',
        cta: 'Hablemos',
        featured: false,
        features: ['Un primer conjunto de automatizaciones', 'Bandeja compartida', 'Panel de resultados', 'Soporte por email'],
      },
      {
        name: 'Pro',
        description: 'Para negocios en crecimiento que viven en WhatsApp.',
        price: 'A medida',
        cta: 'Empezar',
        featured: true,
        features: ['Hasta 10 automatizaciones activas', 'Bandeja compartida', 'Panel de resultados', 'Miembros del equipo y roles', 'Soporte prioritario'],
      },
      {
        name: 'Business',
        description: 'Para empresas que necesitan más automatizaciones y más control.',
        price: 'A medida',
        cta: 'Hablemos',
        featured: false,
        features: ['Más automatizaciones activas', 'Bandeja compartida', 'Panel de resultados', 'Miembros del equipo y roles', 'Onboarding dedicado'],
      },
    ],
  },
  benefits: {
    eyebrow: 'Beneficios',
    title: 'Las Ventajas Para Tu Equipo',
    subtitle: 'Integramate es más que un chatbot: es un sistema completo para responder más rápido y vender más.',
    items: [
      { icon: 'chart', title: 'Mejores resultados', text: 'Resuelve más conversaciones sin hacer crecer el equipo.' },
      { icon: 'clock', title: 'Tiempo de vuelta', text: 'Deja que las automatizaciones atiendan las preguntas repetitivas, de día y de noche.' },
      { icon: 'heart', title: 'Clientes más contentos', text: 'Respuestas rápidas y consistentes en el canal que ya usan.' },
    ],
  },
  channels: {
    eyebrow: 'Canales',
    title: 'Encuentra a Tus Clientes Donde Están',
    subtitle: 'WhatsApp está activo hoy. Vienen más canales.',
    live: 'Activo',
    soon: 'Próximamente',
    items: [
      { name: 'WhatsApp', live: true },
      { name: 'Instagram', live: false },
      { name: 'Email', live: false },
    ],
  },
  showcase: {
    eyebrow: 'Tu panel',
    title: 'Hecho para Negocios Que Crecen',
    primary: 'Solicitar acceso',
    secondary: 'Ver precios',
    app: {
      search: 'Buscar',
      groups: [
        {
          label: 'Operación diaria',
          items: [
            { icon: 'dashboard', label: 'Panel' },
            { icon: 'automations', label: 'Automatizaciones' },
            { icon: 'inbox', label: 'Bandeja' },
            { icon: 'executions', label: 'Ejecuciones' },
          ],
        },
        {
          label: 'Cuenta',
          items: [
            { icon: 'team', label: 'Equipo' },
            { icon: 'settings', label: 'Configuración' },
          ],
        },
      ],
      title: 'Panel',
      chartTitle: 'Conversaciones atendidas',
      value: '274',
      change: '12%',
      comparison: 'vs. semana pasada',
      days: ['Domingo', 'Lunes', 'Martes', 'Miércoles'],
    },
  },
  faq: {
    eyebrow: 'Preguntas',
    title: 'Tus Preguntas, Respondidas',
    subtitle: 'Respuestas rápidas a las dudas más comunes.',
    items: [
      {
        q: '¿Necesito conocimientos técnicos?',
        a: 'No. Eliges un paquete, respondes unas preguntas simples sobre tu negocio y lo activas.',
      },
      {
        q: '¿Qué canales están disponibles?',
        a: 'WhatsApp hoy. Instagram y Email llegan pronto.',
      },
      {
        q: '¿Dónde veo lo que hacen las automatizaciones?',
        a: 'En tu panel: conversaciones atendidas, contactos captados y horas ahorradas, además de una bandeja compartida con cada conversación.',
      },
      {
        q: '¿Cómo obtengo acceso?',
        a: 'El acceso es por invitación. Déjanos tu email y te respondemos en menos de un día.',
      },
      {
        q: '¿Cómo funcionan los planes?',
        a: 'Cada plan define cuántas automatizaciones puedes tener activas a la vez. Cuéntanos sobre tu negocio y te recomendamos uno.',
      },
    ],
  },
  cta: {
    title: 'Construye Relaciones Más Sólidas Con Tus Clientes',
    text: 'Súmate a los negocios que atienden a cada cliente, a cualquier hora, sin el caos.',
    button: 'Solicitar acceso',
  },
  footer: {
    tagline: 'Automatizaciones con IA para negocios que viven en WhatsApp.',
    columns: [
      {
        title: 'Producto',
        links: [
          { label: 'Funciones', href: '#features' },
          { label: 'Precios', href: '#pricing' },
          { label: 'Preguntas', href: '#faq' },
        ],
      },
      { title: 'Empresa', links: [{ label: 'Contacto', href: '#contact' }] },
      {
        title: 'Legal',
        links: [
          { label: 'Términos', href: 'terms' },
          { label: 'Privacidad', href: 'privacy' },
        ],
      },
    ],
    rights: 'Todos los derechos reservados.',
  },
};
