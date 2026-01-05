export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  stack: string[];
  metrics?: string;
  featured?: boolean;
  link?: string;
}

export interface BlogPost {
  id: string;
  date: string;
  title: string;
  readTime: string;
  excerpt: string;
  content: string[]; // Array of paragraphs for simplicity
}

export interface ExpertiseItem {
  category: string;
  skills: string[];
}
