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
    title: 'Select the Plan That Fits Your Needs',
    subtitle: 'Each plan sets how many automations you can run at once, how many chats they handle a month and how many people join.',
    includes: 'Includes:',
    perMonth: '/ month',
    plans: [
      {
        name: 'Starter',
        description: 'For small teams automating their first conversations.',
        usd: 'USD 10',
        ars: 'ARS 15,500',
        cta: 'Talk to us',
        featured: false,
        features: ['3 active automations', '300 WhatsApp chats a month', '2 people', 'Shared inbox and results dashboard', 'Email support'],
      },
      {
        name: 'Pro',
        description: 'For growing businesses that live on WhatsApp.',
        usd: 'USD 30',
        ars: 'ARS 46,500',
        cta: 'Get started',
        featured: true,
        features: ['10 active automations', '1,000 WhatsApp chats a month', '10 people with roles', 'Shared inbox and results dashboard', 'Priority support'],
      },
      {
        name: 'Business',
        description: 'For companies that need more automations and more control.',
        usd: 'USD 50',
        ars: 'ARS 77,500',
        cta: 'Talk to us',
        featured: false,
        features: ['25 active automations', '5,000 WhatsApp chats a month', '25 people with roles', 'Shared inbox and results dashboard', 'Dedicated onboarding'],
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
        q: 'How do plans work?',
        a: 'Each plan sets how many automations you can run at once. Tell us about your business and we will recommend one.',
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
