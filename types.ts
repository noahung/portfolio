export interface NavItem {
  label: string;
  href: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  image?: string;
  link?: string;
}

export interface Experience {
  id: string;
  year: string;
  title: string;
  company: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}