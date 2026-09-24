/**
 * Centralized Asset Configuration
 * 
 * All media assets, profile photos, PDFs, project screenshots, and certificates
 * are mapped here to provide a single source of truth. Updating files in /public/assets/
 * updates the application components consistently.
 * 
 * Uses import.meta.env.BASE_URL to automatically handle subpath deployment (e.g. GitHub Pages).
 */

const base = import.meta.env.BASE_URL || './';
const p = (path: string) => `${base.replace(/\/$/, '')}/${path.replace(/^\.?\//, '')}`;

export const assets = {
  // Primary Profile Picture
  profile: p('/images/rafiz.jpg'),

  // All 4 user profile photos
  photos: {
    rafiz: p('/images/rafiz.jpg'),
    rafiz1: p('/images/rafiz1.jpg'),
    rafiz2: p('/images/rafiz2.jpg'),
    rafiz3: p('/images/rafiz3.jpg'),
  },

  // Gallery array
  profileGallery: [
    {
      id: 'rafiz',
      src: p('/images/rafiz.jpg'),
      fallback: p('/assets/images/profile/rafiz.jpg'),
      title: 'Md. Rafej Khan',
      tag: 'Executive Portrait',
      label: 'Navy Suit · Skyline',
      caption: 'Professional portrait in tailored navy suit with night city skyline background'
    },
    {
      id: 'rafiz1',
      src: p('/images/rafiz1.jpg'),
      fallback: p('/assets/images/profile/rafiz1.jpg'),
      title: 'Md. Rafej Khan',
      tag: 'Studio Portrait',
      label: 'Black Suit · Keynote',
      caption: 'Modern black tailored suit keynote presentation portrait'
    },
    {
      id: 'rafiz2',
      src: p('/images/rafiz2.jpg'),
      fallback: p('/assets/images/profile/rafiz2.jpg'),
      title: 'Md. Rafej Khan',
      tag: 'Candid Persona',
      label: 'Royal Blue · Campus',
      caption: 'Candid engineering persona in royal blue patterned shirt'
    },
    {
      id: 'rafiz3',
      src: p('/images/rafiz3.jpg'),
      fallback: p('/assets/images/profile/rafiz3.jpg'),
      title: 'Md. Rafej Khan',
      tag: 'Expedition',
      label: 'Trail · Bamboo Cane',
      caption: 'Natural hillside expedition trail portrait with bamboo walking stick'
    }
  ],

  // Resume Document
  resume: p('/assets/documents/resume.pdf'),
  resumeFallback: p('/Md-Rafej-Khan-Resume.pdf'),

  // Machine Learning & AI Projects
  projects: {
    jarvis: p('/assets/images/projects/jarvis.jpg'),
    stockPrediction: p('/assets/images/projects/stock-prediction.jpg'),
    diseaseDetection: p('/assets/images/projects/disease-detection.jpg'),
    chatbot: p('/assets/images/projects/chatbot.jpg'),
    movieRecommendation: p('/assets/images/projects/movie-recommendation.jpg'),
  },

  // Research Visuals
  research: {
    quantumAI: p('/assets/images/research/quantum-ai.jpg'),
    diagram: p('/assets/images/research/research-diagram.jpg'),
  },

  // Certifications & Badges
  certificates: {
    qa: p('/assets/images/certificates/qa-certificate.jpg'),
    machineLearning: p('/assets/images/certificates/ml-certificate.jpg'),
  },

  // Architecture diagrams
  architecture: {
    mlPipeline: p('/assets/images/architecture/ml-pipeline.svg'),
  },

  // General site & social media previews
  general: {
    about: p('/assets/images/general/about.jpg'),
    contact: p('/assets/images/general/contact.jpg'),
    ogImage: p('/assets/images/general/og-image.jpg'),
  },

  // Brand icons
  icons: {
    favicon: p('/assets/icons/favicon.svg'),
  }
};

export default assets;
