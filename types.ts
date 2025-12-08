export interface Batch {
  id: string;
  name: string;
  status: 'active' | 'completed' | 'upcoming';
  date: string;
  companies: Company[];
}

export interface Company {
  name: string;
  description: string;
  url: string;
  founder?: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: number;
}

export interface NavItem {
  label: string;
  href: string;
}