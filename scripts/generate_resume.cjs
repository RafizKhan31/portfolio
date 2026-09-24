const { jsPDF } = require('jspdf');
const fs = require('fs');
const path = require('path');

function generateResume() {
  const doc = new jsPDF({
    unit: 'pt',
    format: 'letter',
    orientation: 'portrait'
  });

  const pageWidth = doc.internal.pageSize.getWidth(); // 612
  const pageHeight = doc.internal.pageSize.getHeight(); // 792

  // Left col: x = 36 to 190 (width ~ 154)
  // Right col: x = 205 to 576 (width ~ 371)
  const leftX = 36;
  const leftWidth = 154;
  const rightX = 205;
  const rightWidth = 371;

  // --- PAGE 1 ---
  // Optional Photo on top-left
  const photoPath = path.join(__dirname, '../public/photos/rafiz1.jpg');
  if (fs.existsSync(photoPath)) {
    try {
      const imgData = fs.readFileSync(photoPath).toString('base64');
      doc.addImage(`data:image/jpeg;base64,${imgData}`, 'JPEG', leftX, 36, 68, 82);
    } catch (e) {
      console.warn('Could not embed photo:', e.message);
    }
  }

  // Left Column Content
  let leftY = 135;

  function drawLeftSectionHeader(title) {
    doc.setFont('times', 'bold');
    doc.setFontSize(10);
    doc.setTextColor(20, 20, 20);
    doc.text(title, leftX, leftY);
    leftY += 3;
    doc.setDrawColor(120, 120, 120);
    doc.setLineWidth(0.6);
    doc.line(leftX, leftY, leftX + leftWidth, leftY);
    leftY += 10;
  }

  // Contact
  drawLeftSectionHeader('CONTACT');
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(50, 50, 50);

  const contactItems = [
    '+880 163 5045602',
    'rafezkhan3109@gmail.com',
    'Portfolio: rafejkhan.dev',
    'LinkedIn: /in/mdrafejkhan',
    'Savar, Dhaka, Bangladesh-1216'
  ];
  contactItems.forEach(item => {
    doc.text(item, leftX, leftY);
    leftY += 11;
  });
  leftY += 6;

  // Core Skills
  drawLeftSectionHeader('CORE SKILLS');
  
  const skillGroups = [
    { category: 'Programming Languages', items: 'Python, C++, C, SQL, Bash' },
    { category: 'AI / ML Frameworks', items: 'TensorFlow, PyTorch, scikit-learn, Keras, OpenCV, CNNs, RNNs' },
    { category: 'NLP & LLMs', items: 'NLTK, spaCy, Prompt Engineering' },
    { category: 'Data Science', items: 'Pandas, NumPy, Feature Engineering' },
    { category: 'Cloud & DevOps', items: 'AWS, Google Cloud, Git, GitHub' },
    { category: 'Web & APIs', items: 'Django, REST APIs, HTML/CSS' },
    { category: 'Databases', items: 'PostgreSQL, MySQL' }
  ];

  skillGroups.forEach(grp => {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.setTextColor(30, 30, 30);
    doc.text(grp.category, leftX, leftY);
    leftY += 10;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(60, 60, 60);
    const splitItems = doc.splitTextToSize(grp.items, leftWidth);
    doc.text(splitItems, leftX, leftY);
    leftY += (splitItems.length * 9.5) + 3;
  });
  leftY += 4;

  // Education
  drawLeftSectionHeader('EDUCATION');
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.setTextColor(30, 30, 30);
  doc.text('B.Sc. in CSE', leftX, leftY);
  leftY += 10;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.setTextColor(70, 70, 70);
  doc.text('Eastern University, Dhaka', leftX, leftY);
  leftY += 13;

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.setTextColor(30, 30, 30);
  doc.text('HSC — Science', leftX, leftY);
  leftY += 10;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.setTextColor(70, 70, 70);
  doc.text('South Asian College, Chittagong', leftX, leftY);
  leftY += 16;

  // Certifications
  drawLeftSectionHeader('CERTIFICATIONS');
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.setTextColor(30, 30, 30);
  doc.text('Software Testing & QA', leftX, leftY);
  leftY += 9.5;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.5);
  doc.setTextColor(70, 70, 70);
  const cert1 = doc.splitTextToSize('ICT Division, Bangladesh Computer Council & EDGE', leftWidth);
  doc.text(cert1, leftX, leftY);
  leftY += (cert1.length * 8.5) + 4;

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.setTextColor(30, 30, 30);
  doc.text('Machine Learning', leftX, leftY);
  leftY += 9.5;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.5);
  doc.setTextColor(70, 70, 70);
  doc.text('Udemy', leftX, leftY);

  // --- RIGHT COLUMN PAGE 1 ---
  let rightY = 48;

  // Header Title
  doc.setFont('times', 'bold');
  doc.setFontSize(22);
  doc.setTextColor(20, 20, 20);
  doc.text('Md. Rafej Khan', rightX, rightY);
  rightY += 15;

  doc.setFont('times', 'italic');
  doc.setFontSize(10.5);
  doc.setTextColor(70, 70, 70);
  doc.text('Python Developer  |  AI/ML Engineer  |  Deep Learning Researcher', rightX, rightY);
  rightY += 20;

  function drawRightSectionHeader(title) {
    doc.setFont('times', 'bold');
    doc.setFontSize(11);
    doc.setTextColor(15, 23, 42);
    doc.text(title, rightX, rightY);
    rightY += 3.5;
    doc.setDrawColor(20, 20, 20);
    doc.setLineWidth(0.8);
    doc.line(rightX, rightY, rightX + rightWidth, rightY);
    rightY += 12;
  }

  // Professional Summary
  drawRightSectionHeader('PROFESSIONAL SUMMARY');
  doc.setFont('times', 'normal');
  doc.setFontSize(9.5);
  doc.setTextColor(40, 40, 40);
  const summaryText = 'Results-driven Python Developer and AI/ML Engineer with hands-on experience building production-ready machine learning systems, deep learning architectures, and intelligent automation tools. Proficient across the full ML pipeline — from data preprocessing and feature engineering to model deployment on AWS and Google Cloud. Published researcher in Quantum Neural Networks and contributor to open-source AI projects. Passionate about solving real-world problems with clean, scalable Python code.';
  const splitSummary = doc.splitTextToSize(summaryText, rightWidth);
  doc.text(splitSummary, rightX, rightY, { align: 'justify', maxWidth: rightWidth });
  rightY += (splitSummary.length * 12) + 10;

  // Work Experience
  drawRightSectionHeader('WORK EXPERIENCE');
  doc.setFont('times', 'bold');
  doc.setFontSize(10);
  doc.setTextColor(20, 20, 20);
  doc.text('Independent Python & AI/ML Developer', rightX, rightY);
  rightY += 11;

  doc.setFont('times', 'italic');
  doc.setFontSize(9);
  doc.setTextColor(60, 60, 60);
  doc.text('Self-Employed / Freelance  \u2022  2022 \u2013 Present  \u2022  Full Time', rightX, rightY);
  rightY += 12;

  const expBullets = [
    'Architected and deployed end-to-end ML pipelines (data ingestion \u2192 training \u2192 serving) for 7+ real-world applications, hosted on AWS and Google Cloud.',
    'Engineered deep learning models using TensorFlow and PyTorch \u2014 CNNs, RNNs \u2014 achieving strong performance on classification and NLP tasks, NLP, and forecasting tasks.',
    'Built and fine-tuned LLM-based chatbots using OpenAI API and GPT architectures with RAG patterns for domain-specific knowledge retrieval.',
    'Conducted published research comparing Quantum Neural Networks vs. Classical ML models across multiple benchmarks including MNIST, healthcare datasets, and TSP.',
    'Contributed to the open-source AI community via GitHub repositories, research blogs, and documented Python packages.'
  ];

  doc.setFont('times', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(40, 40, 40);

  expBullets.forEach(b => {
    doc.text('\u2022', rightX + 4, rightY);
    const splitB = doc.splitTextToSize(b, rightWidth - 14);
    doc.text(splitB, rightX + 14, rightY);
    rightY += (splitB.length * 10.5) + 3;
  });
  rightY += 6;

  // Key Projects
  drawRightSectionHeader('KEY PROJECTS');

  function renderProject(title, techStack, bullets) {
    doc.setFont('times', 'bold');
    doc.setFontSize(9.5);
    doc.setTextColor(20, 20, 20);
    doc.text(title, rightX, rightY);
    rightY += 10;

    doc.setFont('times', 'italic');
    doc.setFontSize(8.5);
    doc.setTextColor(70, 70, 70);
    doc.text(techStack, rightX, rightY);
    rightY += 11;

    doc.setFont('times', 'normal');
    doc.setFontSize(9);
    doc.setTextColor(40, 40, 40);

    bullets.forEach(b => {
      doc.text('\u2022', rightX + 4, rightY);
      const splitB = doc.splitTextToSize(b, rightWidth - 14);
      doc.text(splitB, rightX + 14, rightY);
      rightY += (splitB.length * 10.5) + 2.5;
    });
    rightY += 5;
  }

  renderProject(
    'JARVIS-Inspired AI Virtual Assistant',
    'Python, OpenAI API, TensorFlow, NLP, Speech Recognition',
    [
      'Built a voice-activated AI assistant capable of natural language understanding, web search, task automation, and real-time API integrations.',
      'Integrated speech-to-text and TTS modules; leveraged OpenAI API for contextual conversation management.',
      'Modular Python architecture with plugin-based command system \u2014 extensible to new skills without code refactoring.'
    ]
  );

  renderProject(
    'Stock Price Prediction with Sentiment Analysis',
    'Python, TensorFlow, RNN/LSTM, NLP, REST APIs',
    [
      'Designed a multi-input LSTM model combining historical OHLCV data with NLP-extracted sentiment scores from real-time financial news.',
      'Improved prediction accuracy by 15% over baseline models by fusing price signals with news sentiment embeddings.',
      'Deployed on AWS Lambda with scheduled data ingestion from financial APIs.'
    ]
  );

  renderProject(
    'Disease Detection & Medicine Recommendation System',
    'Python, scikit-learn, TensorFlow, Pandas',
    [
      'Built two companion ML models: a disease predictor (SVM + Decision Trees + Deep Learning ensemble) and a symptom-based medicine recommender.',
      'Trained on real-world healthcare datasets; packaged as a clean Python REST API consumable by frontend or mobile clients.'
    ]
  );

  renderProject(
    'LLM-Powered Customer Support Chatbot',
    'Python, OpenAI API, GPT, NLP, RNN',
    [
      'Developed a production-grade chatbot using GPT-based models with custom prompt engineering for domain-specific support workflows.',
      'Benchmarked against RNN baseline \u2014 GPT integration improved contextual response quality by 40%+ on human evaluation.'
    ]
  );

  // Movie recommendation part on Page 1
  doc.setFont('times', 'bold');
  doc.setFontSize(9.5);
  doc.setTextColor(20, 20, 20);
  doc.text('Movie Recommendation Engine', rightX, rightY);
  rightY += 10;

  doc.setFont('times', 'italic');
  doc.setFontSize(8.5);
  doc.setTextColor(70, 70, 70);
  doc.text('Python, Django, scikit-learn, HTML/CSS/JS, Bootstrap-5', rightX, rightY);
  rightY += 11;

  doc.setFont('times', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(40, 40, 40);
  doc.text('\u2022', rightX + 4, rightY);
  const movieBullet1 = doc.splitTextToSize('Built a full-stack recommendation system with Django backend and responsive Bootstrap frontend.', rightWidth - 14);
  doc.text(movieBullet1, rightX + 14, rightY);

  // --- PAGE 2 ---
  doc.addPage();

  // Page 2 Left Column
  let p2LeftY = 48;
  doc.setFont('times', 'bold');
  doc.setFontSize(10);
  doc.setTextColor(20, 20, 20);
  doc.text('LANGUAGES', leftX, p2LeftY);
  p2LeftY += 3;
  doc.setDrawColor(120, 120, 120);
  doc.setLineWidth(0.6);
  doc.line(leftX, p2LeftY, leftX + leftWidth, p2LeftY);
  p2LeftY += 12;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(50, 50, 50);
  doc.text('English \u2014 Fluent', leftX, p2LeftY);
  p2LeftY += 12;
  doc.text('Bengali \u2014 Native', leftX, p2LeftY);

  // Page 2 Right Column
  let p2RightY = 48;

  // Movie recommendation remaining bullet
  doc.setFont('times', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(40, 40, 40);
  doc.text('\u2022', rightX + 4, p2RightY);
  const movieBullet2 = doc.splitTextToSize('Implemented content-based filtering with cosine similarity; system handles 10,000+ movie records with sub-second response.', rightWidth - 14);
  doc.text(movieBullet2, rightX + 14, p2RightY);
  p2RightY += (movieBullet2.length * 10.5) + 16;

  // Research & Publications
  doc.setFont('times', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(15, 23, 42);
  doc.text('RESEARCH & PUBLICATIONS', rightX, p2RightY);
  p2RightY += 3.5;
  doc.setDrawColor(20, 20, 20);
  doc.setLineWidth(0.8);
  doc.line(rightX, p2RightY, rightX + rightWidth, p2RightY);
  p2RightY += 14;

  doc.setFont('times', 'bold');
  doc.setFontSize(9.5);
  doc.setTextColor(20, 20, 20);
  const thesisTitle = doc.splitTextToSize('Thesis: \u201cAdvancing Complex Problem Solving in AI: A Study of Quantum Neural Networks vs. Classical Models\u201d', rightWidth);
  doc.text(thesisTitle, rightX, p2RightY);
  p2RightY += (thesisTitle.length * 11) + 4;

  const researchBullets = [
    'Benchmarked QNNs against CNNs, RNNs, and hybrid models on MNIST, Breast Cancer, GPT text generation, MQ9 Weather, and TSP datasets.',
    'Evaluated models across accuracy, computational efficiency, scalability, and energy consumption \u2014 demonstrating hybrid models as optimal for near-term quantum advantage.'
  ];

  doc.setFont('times', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(40, 40, 40);

  researchBullets.forEach(b => {
    doc.text('\u2022', rightX + 4, p2RightY);
    const splitB = doc.splitTextToSize(b, rightWidth - 14);
    doc.text(splitB, rightX + 14, p2RightY);
    p2RightY += (splitB.length * 10.5) + 4;
  });

  const targetPath = path.join(__dirname, '../public/assets/documents/resume.pdf');
  const buffer = Buffer.from(doc.output('arraybuffer'));
  fs.writeFileSync(targetPath, buffer);
  console.log('Successfully generated resume.pdf at', targetPath, 'size:', buffer.length);
}

generateResume();
