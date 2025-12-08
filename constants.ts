import { Batch, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'MANIFESTO', href: '#manifesto' },
  { label: 'BATCHES', href: '#batches' },
  { label: 'FAQ', href: '#faq' },
  { label: 'APPLY', href: '#apply' },
];

export const MANIFESTO_TEXT = `We believe the next generation of global giants will be built by engineers in Singapore. 

Singapore Hackers Fund is not a traditional VC. We are a residency for the most obsessive technical founders. We provide a house, food, funding, and a community of peers who operate at the bleeding edge.

No pitch decks. No warm intros. Just code.`;

export const BATCHES: Batch[] = [
  {
    id: 'sg-01',
    name: 'SG // BATCH 01',
    status: 'upcoming',
    date: 'H1 2026',
    companies: [],
  },
];

export const FAQS = [
  {
    question: "Who is this for?",
    answer: "Technical founders. Hackers. Builders. If you spend your weekends shipping code, this is for you."
  },
  {
    question: "Do I need an idea?",
    answer: "No. You need an obsession. The idea will evolve."
  },
  {
    question: "What is the deal?",
    answer: "$XXXk funding. We handle housing, food, and logistics so you can focus on building."
  },
];