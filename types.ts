import React from 'react';

export interface Project {
  id: number;
  title: string;
  category: 'Fashion' | 'Commercial' | 'Social' | 'Event';
  orientation?: 'landscape' | 'portrait'; // New property for aspect ratio control
  client: string;
  year: string;
  image: string; // Static Cover Image (Poster)
  videoUrl?: string; // Optional Video Source
  description: string; // One liner summary
  problem: string; // Previously challenge
  solution: string; // The "How" (lighting, casting, tone)
  result: string; // The ROI/Outcome
  credits: { role: string; name: string }[];
  gallery: string[]; // Additional images
}

export interface Service {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  capabilities: string[];
}

export enum PageState {
  HOME = 'HOME',
  WORK = 'WORK',
  ABOUT = 'ABOUT',
  CONTACT = 'CONTACT',
  PROJECT_DETAIL = 'PROJECT_DETAIL',
  SERVICE_DETAIL = 'SERVICE_DETAIL'
}

export interface AIGeneratedConcept {
  conceptTitle: string;
  visualDirection: string;
  colorPalette: string[];
  suggestedShotList: string[];
}