import { APP_URL } from '@/config';

export const en = {
  meta: {
    title: 'Integramate · AI automations for WhatsApp',
    description:
      'Activate ready-made AI automations for WhatsApp, answer customers around the clock and see the results in one simple dashboard.',
  },
  nav: {
    label: 'Main',
    features: 'Features',
    pricing: 'Pricing',
    faq: 'FAQ',
    contact: 'Contact us',
    login: 'Log in',
    getStarted: 'Get started',
    language: 'Language',
    menu: 'Menu',
  },
  hero: {
    badge: 'Best way to run AI on WhatsApp',
    titleLine1: 'Answer Every Customer. Grow',
    titleLine2: 'Revenue Faster.',
    text: 'Integramate is the simple, powerful way to run AI automations on WhatsApp: it replies, captures leads and follows up around the clock, so your team sells smarter and wins more without the chaos.',
    emailLabel: 'Work email',
    emailPlaceholder: 'Enter your work email',
    submit: 'Request access',
    trial: 'Try it free for 7 days',
    trialNote: 'No card needed. Cancel anytime.',
    secondary: 'Show me how it would answer my WhatsApp',
    states: {
      sending: 'Sending…',
      sent: 'Thanks! We will get back to you within a day.',
      invalid_payload: 'Check the email address and try again.',
      captcha_failed: 'We could not confirm you are a person. Please try again.',
      over_request_rate_limit: 'Too many requests. Try again in a minute.',
      error: 'Something went wrong. Please try again in a moment.',
    },
  },
  visuals: {
    chat: {
      contact: 'Laura',
      status: 'online',
      placeholder: 'Type a message',
      messages: [
        { fromCustomer: true, text: 'Hi! Are you open on Saturday?', time: '10:41' },
        { fromCustomer: false, text: 'Yes, from 9 am to 2 pm. Want to book a slot?', time: '10:41' },
        { fromCustomer: true, text: 'Yes, at 10 please.', time: '10:42' },
        { fromCustomer: false, text: "Done! You're booked for Saturday at 10 am.", time: '10:42' },
      ],
    },
  },
  screens: {
    dashboard: 'The Integramate dashboard: performance metrics, AI resolution over the month and the top automations',
    appShell: 'The Integramate app, with its navigation and the dashboard open',
    metrics: 'Performance metrics: 84.3% answered by AI, 96.7% success rate, 342 leads captured and 253 hours saved this month',
    automations: 'Top automations ranked by success: frequent answers, appointment booking, lead qualification, payment reminders and customer welcome',
    executions: 'The executions list: every run of an automation, newest first, with its result',
    inbox: 'A WhatsApp conversation in the shared inbox, answered by the bot and open for a reply',
  },
  features: {
    eyebrow: 'Features',
    title: 'Smarter Automations to Grow Your Business',
    subtitle: 'Everything you need to talk to customers and close sales faster.',
    items: [
      {
        visual: 'automations',
        title: 'Ready-made automations',
        text: 'Pick a package such as customer service or an internal assistant, answer a few questions and switch it on.',
      },
      {
        visual: 'metrics',
        title: 'Results you can read',
        text: 'See conversations handled, leads captured and hours saved, without opening a single technical screen.',
      },
      {
        visual: 'chat',
        title: 'WhatsApp first',
        text: 'Your customers keep chatting where they already are. Every conversation lands in one shared inbox.',
      },
      {
        visual: 'executions',
        title: 'Always on',
        text: 'Automations answer at any hour, so no message waits until Monday and no lead goes cold.',
      },
    ],
  },
  pricing: {
    eyebrow: 'Pricing plans',
    title: 'Clear pricing. No hidden fees.',
    titleArs: null as string | null,
    subtitle: 'Try any plan for 7 days. No card needed.',
    includes: 'Includes:',
    perMonth: '/ month',
    extra: {
      before: 'Need more chats? Add 500 extra chats for ',
      usd: '7 USD',
      ars: '9.900 ARS',
      after:
        '. We warn you at 80% and 100% of your limit, and you choose whether to add a block. We never charge without notice.',
    },
    meta: 'WhatsApp messages are billed by Meta directly to your card at its official rate. Integramate adds nothing on top.',
    cancel: 'Cancel anytime. You keep using the service until the end of the month you paid for.',
    plans: [
      {
        name: 'Starter',
        usd: '15 USD',
        ars: '21.900 ARS',
        custom: null,
        cta: 'Try it free for 7 days',
        featured: false,
        badge: null,
        features: ['1,000 chats per month', '2 team members', '3 automations'],
      },
      {
        name: 'Pro',
        usd: '29 USD',
        ars: '44.900 ARS',
        custom: null,
        cta: 'Try it free for 7 days',
        featured: true,
        badge: 'Most popular',
        features: ['3,000 chats per month', '10 team members', '10 automations'],
      },
      {
        name: 'Business',
        usd: '65 USD',
        ars: '99.900 ARS',
        custom: null,
        cta: 'Try it free for 7 days',
        featured: false,
        badge: null,
        features: ['10,000 chats per month', '25 team members', '25 automations'],
      },
      {
        name: 'Enterprise',
        usd: '',
        ars: '',
        custom: 'Custom',
        cta: 'Book a call',
        featured: false,
        badge: null,
        features: ['Custom setup, limits and support.'],
      },
    ],
  },
  benefits: {
    eyebrow: 'Benefits',
    title: 'The Powerful Advantages for Your Team',
    subtitle: 'Integramate is more than a chatbot: it is a complete system to answer faster and sell more.',
    items: [
      { icon: 'chart', title: 'Better results', text: 'Resolve more conversations without growing the team.' },
      { icon: 'clock', title: 'Time back', text: 'Let automations take the repetitive questions, all day and night.' },
      { icon: 'heart', title: 'Happier customers', text: 'Fast, consistent answers on the channel they already use.' },
    ],
  },
  channels: {
    eyebrow: 'Channels',
    title: 'Meet Your Customers Where They Are',
    subtitle: 'WhatsApp is live today. More channels are on the way.',
    live: 'Live',
    soon: 'Coming soon',
    items: [
      { name: 'WhatsApp', live: true },
      { name: 'Instagram', live: false },
      { name: 'Email', live: false },
    ],
  },
  showcase: {
    eyebrow: 'Your dashboard',
    title: 'Built for Businesses That Want Results',
    primary: 'Request access',
    secondary: 'See pricing',
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'Your Questions Answered',
    subtitle: 'Find quick answers to the most common questions.',
    items: [
      {
        q: 'Do I need technical knowledge?',
        a: 'No. You choose a package, answer a few plain questions about your business and switch it on.',
      },
      {
        q: 'Which channels are supported?',
        a: 'WhatsApp today. Instagram and Email are coming soon.',
      },
      {
        q: 'Where do I see what the automations are doing?',
        a: 'In your dashboard: conversations handled, leads captured and hours saved, plus a shared inbox with every conversation.',
      },
      {
        q: 'How do I get access?',
        a: 'Sign up with your email in the form above and we will send you your access.',
      },
      {
        q: 'Am I paying twice?',
        a: 'No. Meta bills the messages WhatsApp sends: the first 1,000 per month per number are free, and after that your company pays Meta directly. Integramate charges for the platform and the chats your bot handles. They are two different things and we add no markup.',
      },
      {
        q: 'What is a chat?',
        a: "A customer your bot handles within a 24-hour window. If they write again within those 24 hours it doesn't count again; after that it's a new chat.",
      },
      {
        q: 'What happens if I reach the chat limit?',
        a: 'We warn you at 80% and at 100%. If you hit the cap, the bot pauses until next month, or you can add 500 chats with one click.',
      },
      {
        q: 'Can I change plans?',
        a: 'Yes, whenever you want. If you run short, moving up a plan is a better deal than buying extra chat blocks.',
      },
      {
        q: 'Can I cancel?',
        a: 'Yes. You can cancel whenever you want and you keep using the service until the end of the month you paid for. There are no partial refunds.',
      },
    ],
  },
  cta: {
    title: 'Build Stronger Customer Relationships',
    text: 'Join the businesses answering every customer, at any hour, without the chaos.',
    button: 'Request access',
  },
  footer: {
    tagline: 'AI automations for businesses that live on WhatsApp.',
    columns: [
      {
        title: 'Product',
        links: [
          { label: 'Features', href: '#features' },
          { label: 'Pricing', href: '#pricing' },
          { label: 'FAQ', href: '#faq' },
        ],
      },
      { title: 'Company', links: [{ label: 'Contact us', href: '#contact' }] },
      {
        title: 'Legal',
        links: [
          { label: 'Terms', href: `${APP_URL}/terms` },
          { label: 'Privacy', href: `${APP_URL}/privacy` },
        ],
      },
    ],
    rights: 'All rights reserved.',
  },
};

export type Dictionary = typeof en;
