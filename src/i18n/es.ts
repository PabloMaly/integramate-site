import { APP_URL } from '@/config';
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
  visuals: {
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
  },
  screens: {
    dashboard: 'El panel de Integramate: métricas de rendimiento, resolución por IA durante el mes y las mejores automatizaciones',
    appShell: 'La app de Integramate, con su navegación y el panel abierto',
    metrics: 'Métricas de rendimiento: 84,3 % respondido por IA, 96,7 % de éxito, 342 contactos captados y 253 horas ahorradas este mes',
    automations: 'Mejores automatizaciones por tasa de éxito: respuestas frecuentes, reserva de turnos, calificación de contactos, recordatorios de pago y bienvenida',
    executions: 'La lista de ejecuciones: cada corrida de una automatización, la más reciente primero, con su resultado',
    inbox: 'Una conversación de WhatsApp en la bandeja compartida, respondida por el bot y lista para contestar',
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
        visual: 'metrics',
        title: 'Resultados que se entienden',
        text: 'Mira conversaciones atendidas, contactos captados y horas ahorradas, sin abrir una sola pantalla técnica.',
      },
      {
        visual: 'chat',
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
    subtitle: 'Cada plan define cuántas automatizaciones puedes tener activas, cuántos chats atienden por mes y cuántas personas entran.',
    includes: 'Incluye:',
    perMonth: '/ mes',
    plans: [
      {
        name: 'Starter',
        description: 'Para equipos pequeños que automatizan sus primeras conversaciones.',
        usd: 'US$ 10',
        ars: 'ARS 15.500',
        cta: 'Hablemos',
        featured: false,
        features: ['3 automatizaciones activas', '300 chats de WhatsApp por mes', '2 personas', 'Bandeja compartida y panel de resultados', 'Soporte por email'],
      },
      {
        name: 'Pro',
        description: 'Para negocios en crecimiento que viven en WhatsApp.',
        usd: 'US$ 30',
        ars: 'ARS 46.500',
        cta: 'Empezar',
        featured: true,
        features: ['10 automatizaciones activas', '1.000 chats de WhatsApp por mes', '10 personas con roles', 'Bandeja compartida y panel de resultados', 'Soporte prioritario'],
      },
      {
        name: 'Business',
        description: 'Para empresas que necesitan más automatizaciones y más control.',
        usd: 'US$ 50',
        ars: 'ARS 77.500',
        cta: 'Hablemos',
        featured: false,
        features: ['25 automatizaciones activas', '5.000 chats de WhatsApp por mes', '25 personas con roles', 'Bandeja compartida y panel de resultados', 'Onboarding dedicado'],
      },
    ],
  },
  benefits: {
    eyebrow: 'Beneficios',
    title: 'Las Ventajas Para Tu Equipo',
    subtitle: 'Integramate es más que un chatbot: es un sistema completo para responder más rápido y vender más.',
    items: [
      { icon: 'chart', title: 'Mejores resultados', text: 'Resuelve más conversaciones sin hacer crecer el equipo.' },
      { icon: 'clock', title: 'Más tiempo libre', text: 'Deja que las automatizaciones atiendan las preguntas repetitivas, de día y de noche.' },
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
          { label: 'Términos', href: `${APP_URL}/terms` },
          { label: 'Privacidad', href: `${APP_URL}/privacy` },
        ],
      },
    ],
    rights: 'Todos los derechos reservados.',
  },
};
