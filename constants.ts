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
    id: 'sg-03',
    name: 'SG // BATCH 03',
    status: 'upcoming',
    date: 'Q3 2025',
    companies: [],
  },
  {
    id: 'sg-02',
    name: 'SG // BATCH 02',
    status: 'active',
    date: 'Q1 2025',
    companies: [
      { name: 'Nexus', description: 'Decentralized compute grid for AI inference.', url: '#' },
      { name: 'Void', description: 'Privacy-first browser based on Chromium.', url: '#' },
      { name: 'Synapse', description: 'Neural interface bridging simplified.', url: '#' },
      { name: 'FlowState', description: 'IDE for flow-based programming.', url: '#' },
      { name: 'Kopi.js', description: 'A lightweight JS runtime optimized for IoT.', url: '#' },
    ],
  },
  {
    id: 'sg-01',
    name: 'SG // BATCH 01',
    status: 'completed',
    date: 'Q3 2024',
    companies: [
      { name: 'MerlionDB', description: 'High-performance time-series database.', url: '#' },
      { name: 'Straits', description: 'Automated maritime logistics OS.', url: '#' },
      { name: 'RedDot', description: 'Quantum encryption for fintech.', url: '#' },
    ],
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
    answer: "$100k for 7%. We handle housing, food, and logistics so you can focus on building."
  },
];