/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Project {
  id: string;
  title: string;
  category: string;
  tags: string[];
  tech: string[];
  description: string;
  image: string;
  details: {
    challenge: string;
    solution: string;
    metrics: string[];
    architecture: string[];
  };
  demoUrl?: string;
  githubUrl?: string;
}

export interface SkillCategory {
  id: string;
  name: string;
  icon: string;
  skills: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  text: string;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  message: string;
  timestamp: string;
}

export enum Language {
  VN = 'VN',
  EN = 'EN',
}
