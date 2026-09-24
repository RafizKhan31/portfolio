import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { jsPDF } from 'jspdf';

const assetsDir = path.resolve('public/assets');
const imagesDir = path.join(assetsDir, 'images');

// Ensure directories
const dirs = [
  path.join(imagesDir, 'profile'),
  path.join(imagesDir, 'projects'),
  path.join(imagesDir, 'research'),
  path.join(imagesDir, 'certificates'),
  path.join(imagesDir, 'general'),
  path.join(assetsDir, 'documents'),
  path.join(assetsDir, 'icons'),
];

dirs.forEach((d) => fs.mkdirSync(d, { recursive: true }));

console.log('Generating images with sharp...');

// 1. Profile image
const profileSvg = fs.readFileSync('public/photos/profile-rafej.svg');
await sharp(profileSvg, { density: 300 })
  .resize(800, 800)
  .jpeg({ quality: 92 })
  .toFile(path.join(imagesDir, 'profile/profile.jpg'));

// 2. Project images
const jarvisSvg = fs.readFileSync('public/photos/jarvis-assistant.svg');
await sharp(jarvisSvg, { density: 300 })
  .resize(1200, 750)
  .jpeg({ quality: 90 })
  .toFile(path.join(imagesDir, 'projects/jarvis.jpg'));

const stockSvg = fs.readFileSync('public/photos/stock-prediction.svg');
await sharp(stockSvg, { density: 300 })
  .resize(1200, 750)
  .jpeg({ quality: 90 })
  .toFile(path.join(imagesDir, 'projects/stock-prediction.jpg'));

const diseaseSvg = fs.readFileSync('public/photos/disease-detection.svg');
await sharp(diseaseSvg, { density: 300 })
  .resize(1200, 750)
  .jpeg({ quality: 90 })
  .toFile(path.join(imagesDir, 'projects/disease-detection.jpg'));

const chatbotSvg = fs.readFileSync('public/photos/customer-support-llm.svg');
await sharp(chatbotSvg, { density: 300 })
  .resize(1200, 750)
  .jpeg({ quality: 90 })
  .toFile(path.join(imagesDir, 'projects/chatbot.jpg'));

const movieSvg = fs.readFileSync('public/photos/movie-recommendation.svg');
await sharp(movieSvg, { density: 300 })
  .resize(1200, 750)
  .jpeg({ quality: 90 })
  .toFile(path.join(imagesDir, 'projects/movie-recommendation.jpg'));

// 3. Research images
const quantumSvg = fs.readFileSync('public/photos/quantum-research.svg');
await sharp(quantumSvg, { density: 300 })
  .resize(1200, 750)
  .jpeg({ quality: 90 })
  .toFile(path.join(imagesDir, 'research/quantum-ai.jpg'));

const researchDiagramSvg = Buffer.from(`
<svg width="1200" height="750" viewBox="0 0 1200 750" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="750" fill="#0B1120"/>
  <defs>
    <linearGradient id="cyanBlue" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#06B6D4"/>
      <stop offset="100%" stop-color="#3B82F6"/>
    </linearGradient>
    <linearGradient id="purplePink" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#8B5CF6"/>
      <stop offset="100%" stop-color="#EC4899"/>
    </linearGradient>
  </defs>

  <text x="600" y="70" font-family="monospace" font-size="24" fill="#38BDF8" font-weight="bold" text-anchor="middle">
    QUANTUM NEURAL NETWORK VS. CLASSICAL BENCHMARK TAXONOMY
  </text>
  <text x="600" y="105" font-family="sans-serif" font-size="14" fill="#94A3B8" text-anchor="middle">
    Empirical Comparison Across 5 Multi-Domain Mathematical Problem Topologies
  </text>

  <!-- Box 1: Classical CNN / RNN -->
  <rect x="80" y="160" width="300" height="480" rx="16" fill="#1E293B" stroke="#334155" stroke-width="2"/>
  <rect x="80" y="160" width="300" height="50" rx="16" fill="#0F172A"/>
  <text x="230" y="192" font-family="sans-serif" font-size="16" fill="#F8FAFC" font-weight="bold" text-anchor="middle">Classical Baselines</text>
  <text x="110" y="240" font-family="sans-serif" font-size="13" fill="#38BDF8">● Convolutional Neural Nets (CNN)</text>
  <text x="125" y="265" font-family="monospace" font-size="11" fill="#94A3B8">Spatial kernels, MaxPool, ReLUs</text>
  <text x="110" y="310" font-family="sans-serif" font-size="13" fill="#38BDF8">● Recurrent LSTM / GRU</text>
  <text x="125" y="335" font-family="monospace" font-size="11" fill="#94A3B8">Sequential gates, Hidden states</text>
  <text x="110" y="380" font-family="sans-serif" font-size="13" fill="#38BDF8">● Optimization Function</text>
  <text x="125" y="405" font-family="monospace" font-size="11" fill="#94A3B8">Adam Optimizer, lr=1e-3, CrossEntropy</text>
  <text x="110" y="450" font-family="sans-serif" font-size="13" fill="#38BDF8">● Parameter Complexity</text>
  <text x="125" y="475" font-family="monospace" font-size="11" fill="#94A3B8">O(N^2) weights, dense tensor graph</text>

  <!-- Center: Comparison Metrics Grid -->
  <rect x="420" y="160" width="360" height="480" rx="16" fill="#0F172A" stroke="#0284C7" stroke-width="2"/>
  <rect x="420" y="160" width="360" height="50" rx="16" fill="url(#cyanBlue)"/>
  <text x="600" y="192" font-family="sans-serif" font-size="16" fill="#FFFFFF" font-weight="bold" text-anchor="middle">Evaluation Metrics</text>
  
  <rect x="440" y="230" width="320" height="60" rx="8" fill="#1E293B"/>
  <text x="455" y="255" font-family="sans-serif" font-size="12" fill="#F8FAFC" font-weight="bold">1. Classification Accuracy</text>
  <text x="455" y="275" font-family="monospace" font-size="11" fill="#38BDF8">MNIST 98.4% vs 97.2% Hybrid</text>

  <rect x="440" y="305" width="320" height="60" rx="8" fill="#1E293B"/>
  <text x="455" y="330" font-family="sans-serif" font-size="12" fill="#F8FAFC" font-weight="bold">2. Computational Efficiency</text>
  <text x="455" y="350" font-family="monospace" font-size="11" fill="#34D399">PQC achieves rapid early convergence</text>

  <rect x="440" y="380" width="320" height="60" rx="8" fill="#1E293B"/>
  <text x="455" y="405" font-family="sans-serif" font-size="12" fill="#F8FAFC" font-weight="bold">3. NISQ Scalability</text>
  <text x="455" y="425" font-family="monospace" font-size="11" fill="#A78BFA">8-Qubit Hilbert state mapping</text>

  <rect x="440" y="455" width="320" height="60" rx="8" fill="#1E293B"/>
  <text x="455" y="480" font-family="sans-serif" font-size="12" fill="#F8FAFC" font-weight="bold">4. Energy Footprint</text>
  <text x="455" y="500" font-family="monospace" font-size="11" fill="#FBBF24">Hybrid Q-C reduces classical FLOPs</text>

  <rect x="440" y="530" width="320" height="90" rx="8" fill="#0284C7" fill-opacity="0.15" stroke="#38BDF8" stroke-width="1"/>
  <text x="455" y="555" font-family="sans-serif" font-size="12" fill="#38BDF8" font-weight="bold">5 Benchmark Topologies:</text>
  <text x="455" y="575" font-family="sans-serif" font-size="11" fill="#E2E8F0">MNIST · Breast Cancer · GPT Tokens</text>
  <text x="455" y="595" font-family="sans-serif" font-size="11" fill="#E2E8F0">MQ9 Weather Regression · NP-Hard TSP</text>

  <!-- Box 3: Quantum PQC Architecture -->
  <rect x="820" y="160" width="300" height="480" rx="16" fill="#1E293B" stroke="#334155" stroke-width="2"/>
  <rect x="820" y="160" width="300" height="50" rx="16" fill="#0F172A"/>
  <text x="970" y="192" font-family="sans-serif" font-size="16" fill="#F8FAFC" font-weight="bold" text-anchor="middle">Quantum Neural Models</text>
  <text x="850" y="240" font-family="sans-serif" font-size="13" fill="#A78BFA">● Parameterized Quantum Circuits</text>
  <text x="865" y="265" font-family="monospace" font-size="11" fill="#94A3B8">Variational Ansatz (Rx, Ry, Rz)</text>
  <text x="850" y="310" font-family="sans-serif" font-size="13" fill="#A78BFA">● Multi-Qubit Entanglement</text>
  <text x="865" y="335" font-family="monospace" font-size="11" fill="#94A3B8">Circular &amp; Full CNOT gates</text>
  <text x="850" y="380" font-family="sans-serif" font-size="13" fill="#A78BFA">● Quantum Measurement</text>
  <text x="865" y="405" font-family="monospace" font-size="11" fill="#94A3B8">Pauli-Z Expectation &lt;Z_i&gt;</text>
  <text x="850" y="450" font-family="sans-serif" font-size="13" fill="#A78BFA">● Hybrid Integration</text>
  <text x="865" y="475" font-family="monospace" font-size="11" fill="#94A3B8">TorchConnector + PennyLane / Qiskit</text>

  <!-- Connectors -->
  <path d="M380 400 L420 400" stroke="#38BDF8" stroke-width="3" stroke-dasharray="6,4"/>
  <path d="M780 400 L820 400" stroke="#A78BFA" stroke-width="3" stroke-dasharray="6,4"/>

  <text x="600" y="700" font-family="sans-serif" font-size="13" fill="#64748B" text-anchor="middle">
    Md. Rafej Khan — Department of Computer Science &amp; Engineering, Eastern University
  </text>
</svg>
`);

await sharp(researchDiagramSvg, { density: 300 })
  .resize(1200, 750)
  .jpeg({ quality: 90 })
  .toFile(path.join(imagesDir, 'research/research-diagram.jpg'));

// 4. Certificates
const qaCertSvg = Buffer.from(`
<svg width="1200" height="850" viewBox="0 0 1200 850" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="850" fill="#F8FAFC"/>
  <rect x="40" y="40" width="1120" height="770" rx="16" fill="#FFFFFF" stroke="#0284C7" stroke-width="4"/>
  <rect x="55" y="55" width="1090" height="740" rx="12" fill="none" stroke="#E2E8F0" stroke-width="2"/>
  
  <!-- Header Logos / Title -->
  <text x="600" y="140" font-family="sans-serif" font-size="20" fill="#0284C7" font-weight="600" letter-spacing="4" text-anchor="middle">
    GOVERNMENT OF THE PEOPLE'S REPUBLIC OF BANGLADESH
  </text>
  <text x="600" y="180" font-family="sans-serif" font-size="16" fill="#64748B" text-anchor="middle">
    Information &amp; Communication Technology (ICT) Division · Bangladesh Computer Council (BCC)
  </text>
  <text x="600" y="210" font-family="sans-serif" font-size="15" fill="#0D9488" font-weight="600" text-anchor="middle">
    Enhancing Digital Government &amp; Economy (EDGE) Project
  </text>

  <line x1="300" y1="240" x2="900" y2="240" stroke="#0284C7" stroke-width="2"/>

  <!-- Certificate title -->
  <text x="600" y="310" font-family="sans-serif" font-size="34" fill="#0F172A" font-weight="bold" text-anchor="middle">
    CERTIFICATE OF COMPLETION
  </text>
  <text x="600" y="355" font-family="sans-serif" font-size="16" fill="#64748B" text-anchor="middle">
    This is proudly presented to
  </text>

  <!-- Recipient Name -->
  <text x="600" y="420" font-family="sans-serif" font-size="40" fill="#0369A1" font-weight="bold" text-anchor="middle">
    Md. Rafej Khan
  </text>

  <!-- Course description -->
  <text x="600" y="475" font-family="sans-serif" font-size="17" fill="#334155" text-anchor="middle">
    for successfully completing the specialized industry training program in
  </text>
  <text x="600" y="525" font-family="sans-serif" font-size="26" fill="#0F172A" font-weight="bold" text-anchor="middle">
    Software Testing &amp; Quality Assurance (QA)
  </text>
  
  <text x="600" y="575" font-family="sans-serif" font-size="15" fill="#475569" text-anchor="middle">
    Covering Automated Testing, Test Case Design, API Validation, Bug Lifecycle Management, and Regression Testing.
  </text>

  <!-- Verification Badge -->
  <g transform="translate(600, 670)">
    <circle r="42" fill="#E0F2FE" stroke="#0284C7" stroke-width="3"/>
    <text y="-8" font-family="sans-serif" font-size="10" fill="#0369A1" font-weight="bold" text-anchor="middle">EDGE / BCC</text>
    <text y="8" font-family="sans-serif" font-size="12" fill="#0284C7" font-weight="bold" text-anchor="middle">VERIFIED</text>
    <text y="22" font-family="sans-serif" font-size="9" fill="#0369A1" text-anchor="middle">ICT DIVISION</text>
  </g>

  <!-- Footer Signatures -->
  <line x1="180" y1="730" x2="420" y2="730" stroke="#94A3B8" stroke-width="1.5"/>
  <text x="300" y="755" font-family="sans-serif" font-size="14" fill="#334155" font-weight="600" text-anchor="middle">Project Director</text>
  <text x="300" y="775" font-family="sans-serif" font-size="12" fill="#64748B" text-anchor="middle">EDGE Project, ICT Division</text>

  <line x1="780" y1="730" x2="1020" y2="730" stroke="#94A3B8" stroke-width="1.5"/>
  <text x="900" y="755" font-family="sans-serif" font-size="14" fill="#334155" font-weight="600" text-anchor="middle">Authorized Signatory</text>
  <text x="900" y="775" font-family="sans-serif" font-size="12" fill="#64748B" text-anchor="middle">Bangladesh Computer Council</text>
</svg>
`);

await sharp(qaCertSvg, { density: 300 })
  .resize(1200, 850)
  .jpeg({ quality: 92 })
  .toFile(path.join(imagesDir, 'certificates/qa-certificate.jpg'));

const mlCertSvg = Buffer.from(`
<svg width="1200" height="850" viewBox="0 0 1200 850" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="850" fill="#0F172A"/>
  <rect x="40" y="40" width="1120" height="770" rx="16" fill="#1E293B" stroke="#6366F1" stroke-width="4"/>
  <rect x="55" y="55" width="1090" height="740" rx="12" fill="none" stroke="#334155" stroke-width="2"/>
  
  <text x="600" y="140" font-family="sans-serif" font-size="24" fill="#A5B4FC" font-weight="bold" letter-spacing="4" text-anchor="middle">
    UDEMY CERTIFICATE OF COMPLETION
  </text>
  <text x="600" y="180" font-family="sans-serif" font-size="15" fill="#94A3B8" text-anchor="middle">
    Official Practical Machine Learning &amp; Deep Learning Curriculum
  </text>

  <line x1="300" y1="210" x2="900" y2="210" stroke="#6366F1" stroke-width="2"/>

  <text x="600" y="280" font-family="sans-serif" font-size="34" fill="#F8FAFC" font-weight="bold" text-anchor="middle">
    CERTIFICATE OF ACCOMPLISHMENT
  </text>
  <text x="600" y="325" font-family="sans-serif" font-size="16" fill="#94A3B8" text-anchor="middle">
    This credential is awarded to
  </text>

  <text x="600" y="390" font-family="sans-serif" font-size="42" fill="#38BDF8" font-weight="bold" text-anchor="middle">
    Md. Rafej Khan
  </text>

  <text x="600" y="445" font-family="sans-serif" font-size="17" fill="#E2E8F0" text-anchor="middle">
    for successfully completing the comprehensive masterclass
  </text>
  <text x="600" y="495" font-family="sans-serif" font-size="28" fill="#F8FAFC" font-weight="bold" text-anchor="middle">
    Machine Learning A-Z: AI, Python &amp; Deep Learning
  </text>
  
  <text x="600" y="545" font-family="sans-serif" font-size="15" fill="#94A3B8" text-anchor="middle">
    Mastered Supervised &amp; Unsupervised Learning, Neural Networks (CNN, RNN/LSTM), Ensemble Methods &amp; Scikit-Learn.
  </text>

  <g transform="translate(600, 640)">
    <circle r="42" fill="#312E81" stroke="#818CF8" stroke-width="3"/>
    <text y="-8" font-family="sans-serif" font-size="10" fill="#C7D2FE" font-weight="bold" text-anchor="middle">AI &amp; ML</text>
    <text y="8" font-family="sans-serif" font-size="12" fill="#818CF8" font-weight="bold" text-anchor="middle">VERIFIED</text>
    <text y="22" font-family="sans-serif" font-size="9" fill="#C7D2FE" text-anchor="middle">COMPLETED</text>
  </g>

  <line x1="200" y1="730" x2="440" y2="730" stroke="#475569" stroke-width="1.5"/>
  <text x="320" y="755" font-family="sans-serif" font-size="14" fill="#F1F5F9" font-weight="600" text-anchor="middle">Instructor Certification</text>
  <text x="320" y="775" font-family="sans-serif" font-size="12" fill="#94A3B8" text-anchor="middle">Udemy Machine Learning Program</text>

  <line x1="760" y1="730" x2="1000" y2="730" stroke="#475569" stroke-width="1.5"/>
  <text x="880" y="755" font-family="sans-serif" font-size="14" fill="#F1F5F9" font-weight="600" text-anchor="middle">Verification Code</text>
  <text x="880" y="775" font-family="sans-serif" font-size="12" fill="#94A3B8" text-anchor="middle">UC-ML-RAFEJ-KHAN-2024</text>
</svg>
`);

await sharp(mlCertSvg, { density: 300 })
  .resize(1200, 850)
  .jpeg({ quality: 92 })
  .toFile(path.join(imagesDir, 'certificates/ml-certificate.jpg'));

// 5. General images (about, contact, og-image)
const aboutSvg = Buffer.from(`
<svg width="1200" height="800" viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="800" fill="#0B132B"/>
  <defs>
    <linearGradient id="abG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#06B6D4"/>
      <stop offset="100%" stop-color="#6366F1"/>
    </linearGradient>
  </defs>
  <circle cx="600" cy="400" r="300" fill="url(#abG)" opacity="0.1" filter="blur(60px)"/>
  <text x="600" y="320" font-family="sans-serif" font-size="38" fill="#F8FAFC" font-weight="bold" text-anchor="middle">Md. Rafej Khan</text>
  <text x="600" y="370" font-family="sans-serif" font-size="22" fill="#38BDF8" text-anchor="middle">Python Developer &amp; AI/ML Engineer</text>
  <text x="600" y="440" font-family="sans-serif" font-size="16" fill="#94A3B8" text-anchor="middle">End-to-End ML Pipelines · Deep Learning Architectures · LLM Integrations · Quantum Research</text>
  <rect x="450" y="490" width="300" height="50" rx="25" fill="#1E293B" stroke="#0284C7" stroke-width="2"/>
  <text x="600" y="522" font-family="monospace" font-size="14" fill="#38BDF8" text-anchor="middle">RESEARCH &amp; PRODUCTION</text>
</svg>
`);

await sharp(aboutSvg, { density: 300 })
  .resize(1200, 800)
  .jpeg({ quality: 90 })
  .toFile(path.join(imagesDir, 'general/about.jpg'));

const contactSvg = Buffer.from(`
<svg width="1200" height="800" viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="800" fill="#070B14"/>
  <defs>
    <linearGradient id="conG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#3B82F6"/>
      <stop offset="100%" stop-color="#10B981"/>
    </linearGradient>
  </defs>
  <text x="600" y="300" font-family="sans-serif" font-size="36" fill="#F8FAFC" font-weight="bold" text-anchor="middle">Get in Touch</text>
  <text x="600" y="360" font-family="sans-serif" font-size="20" fill="#38BDF8" text-anchor="middle">rafezkhan3109@gmail.com · +880 163 5045602</text>
  <text x="600" y="420" font-family="sans-serif" font-size="16" fill="#94A3B8" text-anchor="middle">Savar, Dhaka, Bangladesh · Open for AI/ML &amp; Python Opportunities</text>
</svg>
`);

await sharp(contactSvg, { density: 300 })
  .resize(1200, 800)
  .jpeg({ quality: 90 })
  .toFile(path.join(imagesDir, 'general/contact.jpg'));

const ogSvg = Buffer.from(`
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="630" fill="#070B14"/>
  <text x="600" y="240" font-family="sans-serif" font-size="44" fill="#F8FAFC" font-weight="bold" text-anchor="middle">Md. Rafej Khan</text>
  <text x="600" y="300" font-family="sans-serif" font-size="24" fill="#38BDF8" font-weight="600" text-anchor="middle">Python Developer &amp; AI/ML Engineer</text>
  <text x="600" y="360" font-family="sans-serif" font-size="18" fill="#94A3B8" text-anchor="middle">Deep Learning · LLM Applications · Quantum Neural Networks · Cloud Deployment</text>
  <rect x="420" y="420" width="360" height="50" rx="25" fill="#0F172A" stroke="#0284C7" stroke-width="2"/>
  <text x="600" y="452" font-family="monospace" font-size="14" fill="#38BDF8" text-anchor="middle">PORTFOLIO · 2026 EDITION</text>
</svg>
`);

await sharp(ogSvg, { density: 300 })
  .resize(1200, 630)
  .jpeg({ quality: 92 })
  .toFile(path.join(imagesDir, 'general/og-image.jpg'));

// 6. Favicon
const faviconSvg = `
<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="64" height="64" rx="16" fill="#0F172A"/>
  <rect x="1.5" y="1.5" width="61" height="61" rx="14.5" stroke="#06B6D4" stroke-width="3"/>
  <circle cx="32" cy="24" r="8" fill="#06B6D4"/>
  <circle cx="18" cy="44" r="6" fill="#3B82F6"/>
  <circle cx="46" cy="44" r="6" fill="#8B5CF6"/>
  <line x1="32" y1="24" x2="18" y2="44" stroke="#38BDF8" stroke-width="2"/>
  <line x1="32" y1="24" x2="46" y2="44" stroke="#818CF8" stroke-width="2"/>
  <line x1="18" y1="44" x2="46" y2="44" stroke="#06B6D4" stroke-width="1.5" stroke-dasharray="2,2"/>
</svg>
`;
fs.writeFileSync(path.join(assetsDir, 'icons/favicon.svg'), faviconSvg.trim());

// 7. Generate Real PDF Resume with jsPDF
console.log('Generating official resume.pdf...');
const doc = new jsPDF({
  orientation: 'portrait',
  unit: 'pt',
  format: 'letter'
});

const pageWidth = doc.internal.pageSize.getWidth();
let y = 45;

// Header
doc.setFont('helvetica', 'bold');
doc.setFontSize(22);
doc.setTextColor(15, 23, 42); // slate-900
doc.text('MD. RAFEJ KHAN', 40, y);

y += 18;
doc.setFont('helvetica', 'normal');
doc.setFontSize(12);
doc.setTextColor(2, 132, 199); // sky-600
doc.text('Python Developer | AI/ML Engineer | Deep Learning Researcher', 40, y);

y += 16;
doc.setFontSize(9.5);
doc.setTextColor(71, 85, 105); // slate-600
doc.text('Savar, Dhaka, Bangladesh  |  +880 163 5045602  |  rafezkhan3109@gmail.com  |  github.com/Rafej-Khan', 40, y);

y += 10;
doc.setDrawColor(226, 232, 240); // slate-200
doc.setLineWidth(1);
doc.line(40, y, pageWidth - 40, y);

// Professional Summary
y += 20;
doc.setFont('helvetica', 'bold');
doc.setFontSize(11);
doc.setTextColor(15, 23, 42);
doc.text('PROFESSIONAL SUMMARY', 40, y);

y += 14;
doc.setFont('helvetica', 'normal');
doc.setFontSize(9.5);
doc.setTextColor(51, 65, 85);
const summaryText = 'Passionate, research-driven Python Developer and AI/ML Engineer with extensive experience developing and deploying end-to-end Machine Learning pipelines, Deep Learning architectures (CNN, RNN/LSTM), Natural Language Processing, and LLM applications. Proficient in developing scalable REST APIs, automated intelligent workflows, and cloud deployments on AWS and Google Cloud Platform. Proven track record in quantum computing research comparing Quantum Neural Networks against classical neural networks.';
const splitSummary = doc.splitTextToSize(summaryText, pageWidth - 80);
doc.text(splitSummary, 40, y);
y += splitSummary.length * 12 + 10;

// Technical Skills
doc.setFont('helvetica', 'bold');
doc.setFontSize(11);
doc.setTextColor(15, 23, 42);
doc.text('TECHNICAL SKILLS', 40, y);

y += 14;
doc.setFontSize(9);
doc.setTextColor(51, 65, 85);
const skills = [
  ['Programming:', 'Python, C++, C, SQL, Bash'],
  ['AI & Deep Learning:', 'TensorFlow, PyTorch, scikit-learn, Keras, OpenCV, CNN, RNN, LSTM'],
  ['NLP & LLM:', 'OpenAI API, GPT, RAG, Prompt Engineering, NLTK, spaCy'],
  ['Data Science:', 'Pandas, NumPy, Feature Engineering, Matplotlib, Seaborn'],
  ['Cloud & DevOps:', 'AWS (EC2, Lambda, S3), Google Cloud Platform, Git, GitHub, Docker'],
  ['Web & Databases:', 'Django, REST APIs, PostgreSQL, MySQL, SQLite, HTML5, CSS3, JavaScript']
];

skills.forEach(([cat, val]) => {
  doc.setFont('helvetica', 'bold');
  doc.text(cat, 40, y);
  doc.setFont('helvetica', 'normal');
  doc.text(val, 150, y);
  y += 13;
});

// Professional Experience
y += 8;
doc.setFont('helvetica', 'bold');
doc.setFontSize(11);
doc.setTextColor(15, 23, 42);
doc.text('PROFESSIONAL EXPERIENCE', 40, y);

y += 14;
doc.setFontSize(10);
doc.text('Independent Python & AI/ML Developer', 40, y);
doc.setFont('helvetica', 'normal');
doc.setFontSize(9.5);
doc.setTextColor(100, 116, 139);
doc.text('2022 – Present  |  Self-Employed / Freelance (Remote)', 40, y + 12);

y += 26;
doc.setFontSize(9);
doc.setTextColor(51, 65, 85);
const expPoints = [
  '• Architected and deployed end-to-end ML pipelines for 7+ real-world applications across NLP, computer vision, and time-series forecasting.',
  '• Built and trained deep learning models with TensorFlow and PyTorch, utilizing CNNs for image classification and RNNs/LSTMs for temporal modeling.',
  '• Integrated LLM applications utilizing OpenAI API, prompt engineering, and Retrieval-Augmented Generation (RAG) for conversational agents.',
  '• Deployed containerized models as production REST APIs on AWS (EC2, Lambda) and Google Cloud with sub-second response times.',
  '• Conducted benchmark research on Quantum Neural Networks (QNNs) vs classical models to evaluate scalability and computational latency.'
];

expPoints.forEach((pt) => {
  const lines = doc.splitTextToSize(pt, pageWidth - 80);
  doc.text(lines, 40, y);
  y += lines.length * 11 + 3;
});

// Featured Projects
y += 6;
doc.setFont('helvetica', 'bold');
doc.setFontSize(11);
doc.setTextColor(15, 23, 42);
doc.text('FEATURED PROJECTS', 40, y);

const projects = [
  {
    name: 'JARVIS-Inspired AI Virtual Assistant',
    tech: 'Python, OpenAI API, TensorFlow, NLP, Speech Recognition',
    desc: 'Voice-activated autonomous assistant with speech synthesis, dual-tier intent parsing, and modular system command dispatchers.'
  },
  {
    name: 'Stock Price Prediction with Sentiment Analysis',
    tech: 'Python, TensorFlow, RNN/LSTM, NLP, AWS Lambda',
    desc: 'Hybrid dual-branch neural pipeline fusing historical OHLCV price vectors with real-time news sentiment polarity (+15% directional gain).'
  },
  {
    name: 'Disease Detection & Medicine Recommendation System',
    tech: 'Python, scikit-learn, TensorFlow, Pandas, REST API',
    desc: 'Clinical symptom triage predicting probable pathologies across 130+ indicators with calibrated precaution guidelines (<150ms response).'
  },
  {
    name: 'LLM-Powered Customer Support Chatbot',
    tech: 'Python, OpenAI API, GPT-4, RAG, Prompt Engineering',
    desc: 'Domain-grounded enterprise conversational agent with retrieval-augmented generation and strict guardrail verification (+40% quality gain).'
  },
  {
    name: 'Movie Recommendation Engine',
    tech: 'Python, Django, scikit-learn, TF-IDF, Bootstrap 5',
    desc: 'Vectorized content-based filtering calculating cosine distance over 10,000+ movie records with sub-second search times.'
  }
];

y += 14;
projects.forEach((proj) => {
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.setTextColor(15, 23, 42);
  doc.text(proj.name, 40, y);
  doc.setFont('helvetica', 'italic');
  doc.setFontSize(8.5);
  doc.setTextColor(2, 132, 199);
  doc.text(`[${proj.tech}]`, 40 + doc.getTextWidth(proj.name) + 8, y);
  
  y += 12;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(71, 85, 105);
  doc.text(`• ${proj.desc}`, 45, y);
  y += 14;
});

// Page 2: Research, Education, Certifications
doc.addPage();
let y2 = 45;

doc.setFont('helvetica', 'bold');
doc.setFontSize(11);
doc.setTextColor(15, 23, 42);
doc.text('RESEARCH & PUBLICATIONS', 40, y2);

y2 += 14;
doc.setFontSize(10);
doc.text('Advancing Complex Problem Solving in AI: Quantum Neural Networks vs. Classical Models', 40, y2);
y2 += 12;
doc.setFont('helvetica', 'normal');
doc.setFontSize(9);
doc.setTextColor(100, 116, 139);
doc.text('Undergraduate Research Thesis  |  Eastern University, Dhaka', 40, y2);

y2 += 14;
doc.setFontSize(8.5);
doc.setTextColor(51, 65, 85);
const researchLines = [
  '• Benchmarked Parameterized Quantum Circuits (PQC) against CNN and RNN/LSTM across 5 disparate mathematical problem topologies:',
  '  MNIST digit recognition, Breast Cancer Wisconsin biometrics, GPT text generation, MQ9 Weather forecasting, and Traveling Salesperson Problem (TSP).',
  '• Evaluated empirical performance across Accuracy, Computational Efficiency, Scalability, and Energy Consumption.',
  '• Demonstrated that hybrid quantum-classical architectures yield superior convergence stability under NISQ-era qubit constraints.'
];
researchLines.forEach((l) => {
  doc.text(l, 40, y2);
  y2 += 12;
});

// Education
y2 += 14;
doc.setFont('helvetica', 'bold');
doc.setFontSize(11);
doc.setTextColor(15, 23, 42);
doc.text('EDUCATION', 40, y2);

y2 += 14;
doc.setFontSize(9.5);
doc.text('B.Sc. in Computer Science & Engineering', 40, y2);
doc.setFont('helvetica', 'normal');
doc.setFontSize(9);
doc.setTextColor(100, 116, 139);
doc.text('Eastern University, Dhaka, Bangladesh', 40, y2 + 12);
y2 += 26;
doc.setFont('helvetica', 'bold');
doc.setFontSize(9.5);
doc.setTextColor(15, 23, 42);
doc.text('Higher Secondary Certificate (HSC) — Science', 40, y2);
doc.setFont('helvetica', 'normal');
doc.setFontSize(9);
doc.setTextColor(100, 116, 139);
doc.text('South Asian College, Chittagong, Bangladesh', 40, y2 + 12);

// Certifications
y2 += 30;
doc.setFont('helvetica', 'bold');
doc.setFontSize(11);
doc.setTextColor(15, 23, 42);
doc.text('CERTIFICATIONS & VERIFICATIONS', 40, y2);

y2 += 14;
doc.setFontSize(9.5);
doc.text('• Software Testing & Quality Assurance (QA)', 40, y2);
doc.setFont('helvetica', 'normal');
doc.setFontSize(9);
doc.setTextColor(71, 85, 105);
doc.text('  ICT Division, Bangladesh Computer Council & EDGE Project', 40, y2 + 12);

y2 += 26;
doc.setFont('helvetica', 'bold');
doc.setFontSize(9.5);
doc.setTextColor(15, 23, 42);
doc.text('• Machine Learning A-Z: AI, Python & Deep Learning', 40, y2);
doc.setFont('helvetica', 'normal');
doc.setFontSize(9);
doc.setTextColor(71, 85, 105);
doc.text('  Udemy Credential Verification', 40, y2 + 12);

// Save PDF
const pdfData = doc.output('arraybuffer');
fs.writeFileSync(path.join(assetsDir, 'documents/resume.pdf'), Buffer.from(pdfData));

console.log('Successfully generated all assets and resume.pdf!');
