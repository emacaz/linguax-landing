
export interface User {
  name: string;
  company: string;
  role: 'user' | 'manager';
}

export interface Metric {
  title: string;
  value: string;
  change?: string;
  changeType?: 'increase' | 'decrease';
}

export interface TeamMember {
  id: number;
  name: string;
  team: string;
  brs: number; // Business Readiness Score
  confidence: 'red' | 'yellow' | 'green';
  practiceHours: number;
}
