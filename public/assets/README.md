# Centralized Assets Directory & Image Replacement Guide

This directory (`public/assets/`) contains all media files, documents, and visual assets used across the portfolio website of **Md. Rafej Khan** (Python Developer | AI/ML Engineer | Deep Learning Researcher).

All application components import paths from `src/config/assets.ts`. By maintaining the exact file names and paths detailed below, **you can replace any image or document by simply dropping your new file into the corresponding folder**—no code modifications, TypeScript edits, or rebuilds required!

---

## 📁 Directory Structure

```text
public/assets/
├── documents/
│   └── resume.pdf                     # Resume / CV PDF (downloadable & previewable)
├── icons/
│   └── favicon.svg                    # Browser tab favicon and bookmark icon
└── images/
    ├── architecture/
    │   └── ml-pipeline.svg            # End-to-end ML production pipeline lifecycle diagram
    ├── certificates/
    │   ├── ml-certificate.jpg         # Machine Learning certification credential
    │   └── qa-certificate.jpg         # Software Quality Assurance & Testing certification
    ├── general/
    │   ├── about.jpg                  # Background visual for about section
    │   ├── contact.jpg                # Coordinate visual for contact section
    │   └── og-image.jpg               # OpenGraph social share card (1200x630px)
    ├── profile/
    │   └── profile.jpg                # Primary headshot portrait for Hero, About & Lightbox
    ├── projects/
    │   ├── chatbot.jpg                # LLM Customer Support RAG project visual
    │   ├── disease-detection.jpg      # Disease Detection & Medicine Recommendation visual
    │   ├── jarvis.jpg                 # Jarvis AI Virtual Assistant project visual
    │   ├── movie-recommendation.jpg   # Movie Recommendation Engine visual
    │   └── stock-prediction.jpg       # Stock Price Prediction (Multi-Input LSTM) visual
    └── research/
        ├── quantum-ai.jpg             # Quantum Neural Networks vs Classical Models visual
        └── research-diagram.jpg       # Parameterized Quantum Circuit (PQC) schematic
```

---

## 🛠️ How to Replace Assets (Step-by-Step)

### 1. Profile Photo
To update your personal photo shown in the Hero pill, About card, and Lightbox:
* **Target Path**: `public/assets/images/profile/profile.jpg`
* **Maintain Filename**: `profile.jpg`
* **Recommended Format**: High-resolution JPG or PNG (1:1 square aspect ratio, e.g. 800×800px or 1000×1000px).

---

### 2. Resume / Curriculum Vitae
To update your downloadable and previewable resume:
* **Target Path**: `public/assets/documents/resume.pdf`
* **Maintain Filename**: `resume.pdf`
* **Format**: Standard PDF file (under 5MB recommended).
* **Where It Updates**:
  - The "Resume" navigation button in the top bar.
  - The "Download Resume" action button in the Hero section.
  - The built-in responsive PDF Viewer Modal and fallback web preview.

---

### 3. Project Screenshots & Visuals
To update project preview images, replace files in `public/assets/images/projects/`:
| Filename | Associated Project | Recommended Size |
| :--- | :--- | :--- |
| `jarvis.jpg` | Jarvis AI Desktop Virtual Assistant (Voice NLU & Automation) | 1200×750px (16:10 or 16:9) |
| `stock-prediction.jpg` | Stock Price Prediction (Multi-Input Bidirectional LSTM) | 1200×750px (16:10 or 16:9) |
| `disease-detection.jpg` | Disease Detection & Medicine Recommendation (Clinical Ensemble) | 1200×750px (16:10 or 16:9) |
| `chatbot.jpg` | Enterprise Customer Support LLM Chatbot (RAG & LangChain) | 1200×750px (16:10 or 16:9) |
| `movie-recommendation.jpg` | Content-Based Movie Recommendation Engine (TF-IDF & Cosine) | 1200×750px (16:10 or 16:9) |

* **Maintain Filenames**: Keep the exact filenames (`jarvis.jpg`, `stock-prediction.jpg`, etc.).
* **Where It Updates**: Project cards on the homepage, interactive live view toggles, deep-dive modal banners, and the full-screen Lightbox.

---

### 4. Academic Research & Publications Diagrams
To update research diagrams and schematics, replace files in `public/assets/images/research/`:
* **Quantum Thesis Visual**: `public/assets/images/research/quantum-ai.jpg`
  - Highlighting Quantum Neural Networks vs. Classical Models (Bloch Sphere / Hilbert Space).
  - Recommended size: 1200×800px.
* **Quantum Circuit Schematic**: `public/assets/images/research/research-diagram.jpg`
  - Parameterized Quantum Circuit (PQC) variational ansatz and entangling gate flowchart.
  - Recommended size: 1200×800px.

---

### 5. Verified Certificates & Credentials
To update your professional certificate credentials, replace files in `public/assets/images/certificates/`:
* **QA Credential**: `public/assets/images/certificates/qa-certificate.jpg`
  - Software Quality Assurance, Automated Testing & Verification certificate.
* **Machine Learning Credential**: `public/assets/images/certificates/ml-certificate.jpg`
  - Deep Learning, Python ML & Statistical Modeling specialization certificate.

* **Maintain Filenames**: `qa-certificate.jpg` and `ml-certificate.jpg`.
* **Recommended Format**: Landscape orientation image scan or export (e.g. 1600×1100px).
* **Where It Updates**: Certifications cards and clickable zoomable certificate Lightbox.

---

### 6. Architecture & System Flow Diagrams
* **Target Path**: `public/assets/images/architecture/ml-pipeline.svg`
* **Maintain Filename**: `ml-pipeline.svg`
* **Where It Updates**: Interactive 7-stage "From Data to Intelligence" production pipeline section.

---

## ⚡ Browser Cache Note

Browsers often cache static files. After replacing any image or PDF file:
* **Windows / Linux**: Press `Ctrl + F5` or `Ctrl + Shift + R` to hard reload.
* **macOS**: Press `Cmd + Shift + R` to hard reload.

The application will immediately render your updated media across all components.
