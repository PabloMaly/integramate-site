import { APP_URL } from '@/config';
import type { Dictionary } from './en';

export const es: Dictionary = {
  meta: {
    title: 'Integramate · Automatizaciones para WhatsApp',
    description:
      'Activá automatizaciones para WhatsApp, atendé a tus clientes las 24 horas y mirá los resultados en un panel simple.',
  },
  nav: {
    label: 'Principal',
    features: 'Funciones',
    pricing: 'Precios',
    faq: 'Preguntas',
    contact: 'Contacto',
    login: 'Iniciar sesión',
    getStarted: 'Empezar',
    language: 'Idioma',
    menu: 'Menú',
  },
  hero: {
    badge: 'La mejor forma de automatizar WhatsApp',
    titleLine1: 'Atendé a Cada Cliente. Crecé',
    titleLine2: 'Más Rápido.',
    text: 'Integramate es la forma simple y potente de ejecutar automatizaciones en WhatsApp: responde, capta clientes potenciales y hace seguimiento las 24 horas, para que tu equipo venda mejor y gane más sin el caos.',
    emailLabel: 'Email de trabajo',
    emailPlaceholder: 'Ingresá tu email de trabajo',
    submit: 'Solicitar acceso',
    trial: 'Probalo gratis 7 días',
    trialNote: 'Sin tarjeta. Cancelá cuando quieras.',
    secondary: 'Mostrame cómo respondería mi WhatsApp',
    states: {
      sending: 'Enviando…',
      sent: '¡Gracias! Te respondemos en menos de un día.',
      invalid_payload: 'Revisá el email e intentalo de nuevo.',
      captcha_failed: 'No pudimos confirmar que sos una persona. Intentalo de nuevo.',
      over_request_rate_limit: 'Demasiados intentos. Probá otra vez en un minuto.',
      error: 'Algo salió mal. Intentalo de nuevo en un momento.',
    },
  },
  visuals: {
    chat: {
      contact: 'Laura',
      status: 'en línea',
      placeholder: 'Escribí un mensaje',
      messages: [
        { fromCustomer: true, text: '¡Hola! ¿Abren los sábados?', time: '10:41' },
        { fromCustomer: false, text: 'Sí, de 9 a 14 h. ¿Querés reservar un turno?', time: '10:41' },
        { fromCustomer: true, text: 'Sí, a las 10 por favor.', time: '10:42' },
        { fromCustomer: false, text: '¡Listo! Te reservé el sábado a las 10.', time: '10:42' },
      ],
    },
  },
  screens: {
    dashboard: 'El panel de Integramate: métricas de rendimiento, resolución del bot durante el mes y las mejores automatizaciones',
    appShell: 'La app de Integramate, con su navegación y el panel abierto',
    metrics: 'Métricas de rendimiento: 84,3 % respondido por el bot, 96,7 % de éxito, 342 contactos captados y 253 horas ahorradas este mes',
    automations: 'Mejores automatizaciones por tasa de éxito: respuestas frecuentes, reserva de turnos, calificación de contactos, recordatorios de pago y bienvenida',
    executions: 'La lista de ejecuciones: cada corrida de una automatización, la más reciente primero, con su resultado',
    inbox: 'Una conversación de WhatsApp en la bandeja compartida, respondida por el bot y lista para contestar',
  },
  features: {
    eyebrow: 'Funciones',
    title: 'Automatizá Mejor y Hacé Crecer Tu Negocio',
    subtitle: 'Todo lo que necesitás para hablar con tus clientes y cerrar ventas más rápido.',
    items: [
      {
        visual: 'automations',
        title: 'Automatizaciones listas para usar',
        text: 'Elegí un paquete, como atención al cliente o un asistente interno, respondé unas preguntas y activalo.',
      },
      {
        visual: 'metrics',
        title: 'Resultados que se entienden',
        text: 'Mirá conversaciones atendidas, contactos captados y horas ahorradas, sin abrir una sola pantalla técnica.',
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
    title: 'Precios claros. Sin letra chica.',
    titleArs: 'Precios en pesos. Sin dólar y sin letra chica.',
    subtitle: 'Probá cualquier plan 7 días. Sin tarjeta.',
    includes: 'Incluye:',
    perMonth: '/ mes',
    extra: {
      before: '¿Necesitás más chats? Sumá 500 chats extra por ',
      usd: '7 USD',
      ars: '9.900 ARS',
      after:
        '. Te avisamos al llegar al 80% y al 100% del límite, y vos elegís si sumás un bloque. Nunca se cobra sin aviso.',
    },
    meta: 'Los mensajes de WhatsApp los cobra Meta directo a tu tarjeta, a su tarifa oficial. Integramate no les suma nada.',
    cancel: 'Cancelá cuando quieras. Seguís usando el servicio hasta el fin del mes que pagaste.',
    plans: [
      {
        name: 'Starter',
        usd: '15 USD',
        ars: '21.900 ARS',
        custom: null,
        cta: 'Probalo gratis 7 días',
        featured: false,
        badge: null,
        features: ['1.000 chats atendidos por mes', '2 integrantes del equipo', '3 automatizaciones'],
      },
      {
        name: 'Pro',
        usd: '29 USD',
        ars: '44.900 ARS',
        custom: null,
        cta: 'Probalo gratis 7 días',
        featured: true,
        badge: 'Más elegido',
        features: ['3.000 chats atendidos por mes', '10 integrantes del equipo', '10 automatizaciones'],
      },
      {
        name: 'Business',
        usd: '65 USD',
        ars: '99.900 ARS',
        custom: null,
        cta: 'Probalo gratis 7 días',
        featured: false,
        badge: null,
        features: ['10.000 chats atendidos por mes', '25 integrantes del equipo', '25 automatizaciones'],
      },
      {
        name: 'Enterprise',
        usd: '',
        ars: '',
        custom: 'A medida',
        cta: 'Agendá una llamada',
        featured: false,
        badge: null,
        features: ['Configuración, límites y soporte a medida.'],
      },
    ],
  },
  benefits: {
    eyebrow: 'Beneficios',
    title: 'Las Ventajas Para Tu Equipo',
    subtitle: 'Integramate es más que un chatbot: es un sistema completo para responder más rápido y vender más.',
    items: [
      { icon: 'chart', title: 'Mejores resultados', text: 'Resolvé más conversaciones sin hacer crecer el equipo.' },
      { icon: 'clock', title: 'Más tiempo libre', text: 'Dejá que las automatizaciones atiendan las preguntas repetitivas, de día y de noche.' },
      { icon: 'heart', title: 'Clientes más contentos', text: 'Respuestas rápidas y consistentes en el canal que ya usan.' },
    ],
  },
  channels: {
    eyebrow: 'Canales',
    title: 'Encontrá a Tus Clientes Donde Están',
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
        a: 'No. Elegís un paquete, respondés unas preguntas simples sobre tu negocio y lo activás.',
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
        a: 'Registrate con tu email en el formulario y te enviamos el acceso.',
      },
      {
        q: '¿Pago dos veces?',
        a: 'No. Meta cobra los mensajes que envía WhatsApp: los primeros 1.000 por mes y por número son gratis y después paga tu empresa a Meta, directo en su plataforma. Integramate cobra la plataforma y los chats que atiende tu bot. Son dos cosas distintas y no hay recargo nuestro.',
      },
      {
        q: '¿Qué es un chat?',
        a: 'Una conversación con un cliente que tu bot respondió al menos una vez durante el mes. Si ese cliente vuelve a escribir en el mismo mes, no suma otro chat.',
      },
      {
        q: '¿Qué pasa si llego al límite de chats?',
        a: 'Te avisamos al 80% y al 100%. Si llegás al tope, el bot sigue atendiendo a los clientes que ya hablaron con vos este mes y se pausa solo para conversaciones nuevas hasta el mes siguiente. También podés sumar 500 chats.',
      },
      {
        q: '¿Puedo cambiar de plan?',
        a: 'Sí, cuando quieras. Si te quedás corto, subir de plan conviene más que comprar bloques de chats extra.',
      },
      {
        q: '¿Puedo cancelar?',
        a: 'Sí. Cancelás cuando quieras y seguís usando el servicio hasta el fin del mes que pagaste. No hay reembolsos parciales.',
      },
    ],
  },
  cta: {
    title: 'Construí Relaciones Más Sólidas Con Tus Clientes',
    text: 'Sumate a los negocios que atienden a cada cliente, a cualquier hora, sin el caos.',
    button: 'Solicitar acceso',
  },
  footer: {
    brand: 'Automatizaciones',
    tagline: 'Automatizaciones para negocios que viven en WhatsApp.',
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
