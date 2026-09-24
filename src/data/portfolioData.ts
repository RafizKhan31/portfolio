import { Project, SkillCategory, ExperienceItem, Certification, EducationItem, ResearchPaper } from '../types';
import { assets } from '../config/assets';

export const PERSONAL_INFO = {
  name: 'Md. Rafej Khan',
  title: 'Python Developer | AI/ML Engineer | Deep Learning Researcher',
  photo: assets.profile,
  shortBio: 'Building intelligent systems with Python, Machine Learning, Deep Learning, NLP, LLMs, and scalable cloud technologies.',
  longBio: `Experienced Python Developer and AI/ML Engineer with a proven track record architecting and deploying end-to-end machine learning pipelines. Specializes in designing robust deep-learning architectures (CNNs, RNNs/LSTMs), integrating Large Language Models (LLMs) with RAG pipelines, and deploying containerized models onto AWS and Google Cloud Platform. Additionally engaged in quantum machine learning research benchmarking Quantum Neural Networks (QNNs) against classical models.`,
  location: 'Savar, Dhaka, Bangladesh',
  email: 'rafezkhan3109@gmail.com',
  phone: '+880 163 5045602',
  languages: ['English', 'Bengali'],
  rotatingTitles: [
    'AI/ML Engineer',
    'Python Developer',
    'Deep Learning Researcher',
    'LLM Engineer',
    'AI Application Developer',
    'Machine Learning Engineer'
  ],
  socials: {
    github: 'https://github.com/RafizKhan31',
    linkedin: 'https://www.linkedin.com/in/mdrafejkhan/',
    email: 'mailto:rafezkhan3109@gmail.com'
  }
};

export const QUICK_STATS = [
  {
    value: '7+',
    numeric: 7,
    suffix: '+',
    label: 'Real-world ML Applications',
    subtext: 'Architected and deployed end-to-end'
  },
  {
    value: '2022–Present',
    numeric: 4,
    suffix: ' Yrs',
    label: 'Python & AI/ML Development',
    subtext: 'Continuous production engineering'
  },
  {
    value: 'AWS + GCP',
    numeric: 2,
    suffix: ' Clouds',
    label: 'Cloud Deployment',
    subtext: 'Lambda, EC2, Vertex & Cloud Run'
  },
  {
    value: 'AI Research',
    numeric: 5,
    suffix: ' Datasets',
    label: 'Quantum Neural Networks',
    subtext: 'QNNs vs Classical Deep Learning'
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'programming',
    name: 'Programming',
    description: 'Core languages for algorithm design, ML workflows, and backend systems.',
    skills: [
      { name: 'Python', level: 'Primary', description: 'AsyncIO, NumPy, OOP, packaging, ML ecosystem' },
      { name: 'C++', level: 'Core', description: 'Data structures, algorithms, performant computing' },
      { name: 'C', level: 'Core', description: 'Low-level memory management, systems fundamentals' },
      { name: 'SQL', level: 'Relational', description: 'Complex joins, indexing, query optimization' },
      { name: 'Bash', level: 'Tooling', description: 'Linux automation, CLI pipelines, shell scripting' }
    ]
  },
  {
    id: 'ai-ml',
    name: 'AI / Machine Learning',
    description: 'Deep neural architectures and statistical learning frameworks.',
    skills: [
      { name: 'TensorFlow', level: 'Framework', description: 'Graph execution, Keras APIs, distributed training' },
      { name: 'PyTorch', level: 'Framework', description: 'Autograd, custom tensor layers, dynamic compute graphs' },
      { name: 'scikit-learn', level: 'Library', description: 'Ensemble methods, SVMs, clustering, cross-validation' },
      { name: 'Keras', level: 'API', description: 'Rapid sequential & functional deep neural modeling' },
      { name: 'OpenCV', level: 'Vision', description: 'Computer vision preprocessing, filters, spatial transforms' },
      { name: 'CNN', level: 'Architecture', description: 'Convolutional networks for spatial pattern extraction' },
      { name: 'RNN / LSTM', level: 'Architecture', description: 'Recurrent networks for sequential & temporal dependencies' }
    ]
  },
  {
    id: 'nlp-llm',
    name: 'NLP & Large Language Models',
    description: 'Natural language processing, tokenization, semantic search, and generative models.',
    skills: [
      { name: 'OpenAI API', level: 'Integration', description: 'Function calling, embeddings, streaming structured outputs' },
      { name: 'GPT Models', level: 'Inference', description: 'Few-shot prompting, system steering, task automation' },
      { name: 'RAG', level: 'Architecture', description: 'Retrieval-Augmented Generation, vector contexts, chunking' },
      { name: 'Prompt Engineering', level: 'Technique', description: 'Structured schemas, chain-of-thought, validation guardrails' },
      { name: 'NLTK', level: 'Toolkit', description: 'Corpora processing, stemming, POS tagging, tokenization' },
      { name: 'spaCy', level: 'Library', description: 'Industrial-strength Named Entity Recognition & pipelines' }
    ]
  },
  {
    id: 'data-science',
    name: 'Data Science & Analytics',
    description: 'Data transformation, statistical feature engineering, and matrix operations.',
    skills: [
      { name: 'Pandas', level: 'Data Wrangling', description: 'Multi-index aggregations, time series, missing data imputation' },
      { name: 'NumPy', level: 'Vectorization', description: 'N-dimensional arrays, linear algebra, broadcasting' },
      { name: 'Feature Engineering', level: 'Methodology', description: 'Standardization, one-hot encoding, PCA, outlier mitigation' }
    ]
  },
  {
    id: 'cloud-devops',
    name: 'Cloud & DevOps',
    description: 'Infrastructure, deployment pipelines, and version control.',
    skills: [
      { name: 'AWS', level: 'Cloud Provider', description: 'EC2, Lambda serverless, S3 data lakes, IAM security' },
      { name: 'Google Cloud', level: 'Cloud Provider', description: 'Compute Engine, Cloud Run, Vertex AI workflows' },
      { name: 'Git', level: 'Version Control', description: 'Branching strategies, rebase, interactive staging' },
      { name: 'GitHub', level: 'Collaboration', description: 'CI/CD workflows, issue tracking, open-source repositories' }
    ]
  },
  {
    id: 'web-apis',
    name: 'Web & APIs',
    description: 'Robust server architectures and client interfaces for model serving.',
    skills: [
      { name: 'Django', level: 'Backend', description: 'Full-stack Python web framework, ORM, authentication' },
      { name: 'REST APIs', level: 'Architecture', description: 'Stateless endpoints, JSON serialization, OpenAPI schemas' },
      { name: 'HTML5 & CSS3', level: 'Interface', description: 'Semantic markup, modern layout models, responsive UI' }
    ]
  },
  {
    id: 'databases',
    name: 'Databases',
    description: 'Persistent relational data stores for application states and ML metadata.',
    skills: [
      { name: 'PostgreSQL', level: 'RDBMS', description: 'ACID transactions, relational schema design, JSONB storage' },
      { name: 'MySQL', level: 'RDBMS', description: 'Relational data management, indexing, relational modeling' }
    ]
  }
];

export const EXPERIENCE_ITEMS: ExperienceItem[] = [
  {
    role: 'Independent Python & AI/ML Developer',
    company: 'Self-Employed / Freelance',
    type: 'Full-Cycle Engineering',
    period: '2022 – Present',
    location: 'Dhaka, Bangladesh · Remote',
    description: 'Leading the architecture, model development, and cloud deployment of custom machine learning, deep learning, and intelligent automation systems.',
    highlights: [
      'Architected and deployed end-to-end ML pipelines for 7+ real-world applications spanning NLP, computer vision, time-series forecasting, and healthcare diagnostics.',
      'Trained and fine-tuned deep learning architectures with TensorFlow and PyTorch, utilizing CNNs for feature representation and RNNs/LSTMs for temporal modeling.',
      'Integrated Large Language Models (LLMs) and OpenAI APIs with Retrieval-Augmented Generation (RAG) and custom prompt engineering to build high-accuracy conversational systems.',
      'Packaged and deployed models as scalable REST APIs on AWS (EC2, Lambda) and Google Cloud, ensuring low-latency inference and high reliability.',
      'Conducted benchmarking research on Quantum Neural Networks (QNNs) vs. classical deep learning models to evaluate scalability and near-term computational advantage.'
    ],
    technologies: ['Python', 'TensorFlow', 'PyTorch', 'scikit-learn', 'OpenAI API', 'RAG', 'AWS', 'Google Cloud', 'Django', 'PostgreSQL']
  }
];

export const EXPERIENCE_DATA = EXPERIENCE_ITEMS;

export const PROJECTS: Project[] = [
  {
    id: 'jarvis-virtual-assistant',
    title: 'JARVIS-Inspired AI Virtual Assistant',
    subtitle: 'Voice-Activated Autonomous NLU & Automation System',
    category: 'NLP & LLM',
    photo: assets.projects.jarvis,
    technologies: ['Python', 'OpenAI API', 'TensorFlow', 'NLP', 'Speech Recognition', 'REST APIs'],
    summary: 'A voice-activated autonomous AI assistant delivering natural-language understanding, real-time web search, task automation, and modular plugin execution.',
    problem: 'Standard desktop assistants suffer from rigid command syntaxes, high latency, and lack contextual recall during multi-step spoken workflows.',
    solution: 'Engineered a modular Python-based autonomous agent combining speech-to-text, deep intent parsing with TensorFlow, and contextual dialog generation with OpenAI APIs, backed by a plugin-based command dispatcher.',
    architecture: [
      'Audio capture stream with noise reduction & SpeechRecognition pipeline',
      'Dual-tier intent classifier: local TensorFlow model for fast routing + OpenAI API for nuanced reasoning',
      'Context state engine managing multi-turn dialog history and session variables',
      'Plugin execution manager dispatching tasks to system automation, web scrapers, and external APIs',
      'Text-to-speech synthesis generating natural conversational audio responses'
    ],
    keyFeatures: [
      'Voice-activated hands-free conversational interface',
      'Natural-language understanding and dynamic intent disambiguation',
      'Extensible plugin architecture supporting OS tasks, system monitoring, and email drafting',
      'Live external API integrations for real-time weather, news, and search queries',
      'Persistent memory tracking conversational context across sequential commands'
    ],
    results: 'Demonstrated sub-800ms intent classification latency and seamless hands-free multi-turn automation across desktop environments.',
    githubUrl: 'https://github.com',
    liveUrl: 'https://github.com',
    metrics: [
      { label: 'Latency', value: '< 800ms' },
      { label: 'Intent Accuracy', value: '94.2%' },
      { label: 'Modular Plugins', value: '12+ Tools' }
    ],
    accentColor: '#06B6D4'
  },
  {
    id: 'stock-price-prediction-lstm',
    title: 'Stock Price Prediction with Sentiment Analysis',
    subtitle: 'Hybrid Multi-Input LSTM & Financial News NLP Pipeline',
    category: 'Deep Learning & Time Series',
    photo: assets.projects.stockPrediction,
    technologies: ['Python', 'TensorFlow', 'RNN / LSTM', 'NLP', 'REST APIs', 'AWS Lambda'],
    summary: 'A hybrid deep-learning forecasting engine integrating historical OHLCV pricing with real-time financial news sentiment embeddings.',
    problem: 'Conventional quantitative stock models rely solely on past price action and fail to account for abrupt market movements caused by breaking financial news sentiment.',
    solution: 'Designed a dual-branch neural architecture: one branch processes sequential OHLCV price vectors using a stacked LSTM; the second branch processes financial headlines via NLP sentiment scoring, merging into a dense regression head.',
    architecture: [
      'Automated data ingestion pipeline collecting real-time ticker quotes and financial news feeds',
      'Text preprocessing, tokenization, and VADER/transformer-based polarity scoring',
      'MinMax normalization and rolling window sliding sequences (60-day lag)',
      'Multi-input neural network with Bidirectional LSTM layers and dropout regularization',
      'Serverless inference deployment via AWS Lambda and containerized REST endpoints'
    ],
    keyFeatures: [
      'Multi-input fusion combining quantitative timeseries with qualitative NLP sentiment',
      'Bidirectional LSTM layers capturing bidirectional temporal price trends',
      'Automated daily retraining and sliding evaluation metric calculations (RMSE, MAE, MAPE)',
      'Interactive financial charting visualizing historical prices against predicted trajectories',
      'Production deployment on AWS serverless compute with low operating overhead'
    ],
    results: 'Achieved a 15% improvement in directional forecasting accuracy over baseline single-stream LSTM models, validated on historical S&P 500 equities.',
    githubUrl: 'https://github.com',
    liveUrl: 'https://github.com',
    metrics: [
      { label: 'Over Baseline', value: '+15%' },
      { label: 'Model Architecture', value: 'Dual LSTM' },
      { label: 'Cloud Deployment', value: 'AWS Lambda' }
    ],
    accentColor: '#3B82F6'
  },
  {
    id: 'disease-detection-medicine',
    title: 'Disease Detection & Medicine Recommendation',
    subtitle: 'Ensemble Machine Learning & Clinical Triage System',
    category: 'Healthcare AI',
    photo: assets.projects.diseaseDetection,
    technologies: ['Python', 'scikit-learn', 'TensorFlow', 'Pandas', 'REST API', 'NumPy'],
    summary: 'An intelligent diagnostic system that predicts probable conditions from patient symptoms and provides calibrated medicine and precaution guidance.',
    problem: 'Preliminary healthcare triage is often inaccessible or delayed, leading to patient anxiety and improper self-medication.',
    solution: 'Built an ensemble diagnostic pipeline utilizing Support Vector Machines (SVM), Decision Trees, and a deep neural classifier, integrated with a symptom-medicine knowledge graph accessible via REST API.',
    architecture: [
      'Sparse binary symptom matrix encoding over 130 discrete clinical presentations',
      'Ensemble voting classifier weighting SVM, Random Forest, and Deep Neural probabilities',
      'Cross-validation and confidence scoring threshold preventing false-positive escalations',
      'Clinical ontology lookup mapping predicted pathologies to approved medications and lifestyle precautions',
      'Fast REST API endpoints delivering sub-150ms triage assessments with disclaimer metadata'
    ],
    keyFeatures: [
      'Multi-class disease categorization across dozens of clinical pathologies',
      'Calibrated probability confidence scores for predicted diagnoses',
      'Symptom-based medicine recommendations paired with precautionary medical advice',
      'Robust handling of ambiguous and multi-symptom input queries',
      'Modular REST API architecture ready for telemedicine integrations'
    ],
    results: 'Ensemble model achieved superior F1-score across benchmark medical symptom datasets while maintaining transparent decision thresholds.',
    githubUrl: 'https://github.com',
    liveUrl: 'https://github.com',
    metrics: [
      { label: 'Symptom Vectors', value: '130+' },
      { label: 'Ensemble Models', value: 'SVM + DNN' },
      { label: 'API Response', value: '< 150ms' }
    ],
    accentColor: '#10B981'
  },
  {
    id: 'llm-customer-support-chatbot',
    title: 'LLM-Powered Customer Support Chatbot',
    subtitle: 'Domain-Grounded Contextual Conversational Agent',
    category: 'NLP & LLM',
    photo: assets.projects.chatbot,
    technologies: ['Python', 'OpenAI API', 'GPT Models', 'NLP', 'Prompt Engineering', 'RAG'],
    summary: 'A production-grade contextual support agent powered by GPT architectures, strict prompt guardrails, and knowledge retrieval.',
    problem: 'Traditional rule-based and early RNN chatbots suffer from brittle intent parsing, frequent hallucinations, and inability to resolve complex customer queries.',
    solution: 'Engineered an intelligent conversational workflow combining system prompt engineering, vector-based retrieval augmented generation (RAG), and fallback escalation triggers.',
    architecture: [
      'Knowledge base ingestion and semantic chunking with metadata tags',
      'Hybrid lexical and semantic search retrieving verified enterprise documentation',
      'System prompt guardrails enforcing tone, persona, policy constraints, and format contracts',
      'Contextual conversation memory tracking resolving pronouns and follow-up clarifications',
      'Automated confidence evaluation and human agent handoff logic'
    ],
    keyFeatures: [
      'Grounded domain-specific question answering with zero hallucinated policies',
      'Multi-turn context retention across lengthy customer support sessions',
      'Intelligent clarification prompts when customer intent is ambiguous',
      'JSON-structured output parsing for automated ticket creation and status updates',
      'Comprehensive logging and latency optimization'
    ],
    results: 'Demonstrated a 40%+ improvement in contextual response quality and intent resolution during human evaluation compared with traditional RNN baselines.',
    githubUrl: 'https://github.com',
    liveUrl: 'https://github.com',
    metrics: [
      { label: 'Quality Gain', value: '+40%' },
      { label: 'vs. Baseline', value: 'RNN Bench' },
      { label: 'Architecture', value: 'RAG + GPT' }
    ],
    accentColor: '#8B5CF6'
  },
  {
    id: 'movie-recommendation-engine',
    title: 'Movie Recommendation Engine',
    subtitle: 'Content-Based Cosine Similarity Filtering Platform',
    category: 'Recommendation Systems',
    photo: assets.projects.movieRecommendation,
    technologies: ['Python', 'Django', 'scikit-learn', 'HTML5 / CSS3', 'JavaScript', 'Bootstrap 5'],
    summary: 'A high-throughput recommendation system analyzing multi-dimensional metadata across 10,000+ film titles with sub-second response times.',
    problem: 'Users spend excessive time browsing streaming catalogs due to poor relevance ranking and opaque recommendation algorithms.',
    solution: 'Built a vectorized content-based filtering system using TF-IDF vectorization and cosine similarity over cast, crew, genres, keywords, and plot overviews, deployed on Django.',
    architecture: [
      'Data preprocessing pipeline cleaning 10,000+ movie metadata records',
      'Weighted feature engineering combining director, lead actors, genres, and storyline vectors',
      'Sparse matrix TF-IDF vectorization with n-gram linguistic tokenization',
      'Optimized pairwise cosine similarity index with cached distance lookups',
      'Responsive Django web application rendering dynamic poster grids and match scores'
    ],
    keyFeatures: [
      'Sub-second query response over a catalog of 10,000+ movie records',
      'Weighted multi-attribute similarity calculation (genres, keywords, cast, and synopsis)',
      'Interactive web interface with instant visual feedback and metadata expansion',
      'Dynamic recommendation explanation highlighting common themes and shared cast',
      'Scalable database storage for user viewing history and rating tracking'
    ],
    results: 'Maintained sub-second query latency and high user relevance scores across extensive multi-genre catalog queries.',
    githubUrl: 'https://github.com',
    liveUrl: 'https://github.com',
    metrics: [
      { label: 'Catalog Size', value: '10,000+' },
      { label: 'Query Latency', value: '< 200ms' },
      { label: 'Algorithm', value: 'Cosine Sim' }
    ],
    accentColor: '#F59E0B'
  }
];

export const RESEARCH_DATA: ResearchPaper = {
  title: 'Advancing Complex Problem Solving in AI: A Study of Quantum Neural Networks vs. Classical Models',
  thesisType: 'Undergraduate Research Thesis',
  institution: 'Department of Computer Science & Engineering, Eastern University',
  photo: assets.research.quantumAI,
  diagram: assets.research.diagram,
  abstract: 'An empirical investigation benchmarking Quantum Neural Networks (QNNs), Parameterized Quantum Circuits (PQCs), and Classical Deep Learning architectures (CNNs, RNNs/LSTMs) across classification, regression, text generation, and combinatorial optimization benchmarks.',
  datasets: [
    'MNIST (Handwritten digit recognition)',
    'Breast Cancer Wisconsin (Diagnostic binary classification)',
    'GPT Text Generation (Sequential token modeling)',
    'MQ9 Weather (Multi-variable meteorological regression)',
    'Traveling Salesperson Problem / TSP (Combinatorial NP-hard optimization)'
  ],
  dimensions: [
    'Model Accuracy & Convergence Rate',
    'Computational Efficiency & Training Epochs',
    'Scalability under Qubit / Parameter Constraints',
    'Energy Consumption & Hardware Footprint'
  ],
  keyFinding: 'Empirical results indicate that hybrid quantum-classical architectures—pairing classical feature extractors with quantum variational layers—consistently achieve the most favorable trade-off between convergence stability and computational efficiency on Noisy Intermediate-Scale Quantum (NISQ) hardware.',
  methodology: [
    'Design of Parameterized Quantum Circuits (PQC) with variational rotation gates (Rx, Ry, Rz) and CNOT entangling layers.',
    'Classical convolutional and recurrent baselines configured with identical feature dimensionality for rigorous comparative fairness.',
    'Evaluation across disparate mathematical problem topologies (Euclidean images, tabular biometrics, temporal sequences, non-Euclidean graphs).',
    'Quantitative measurement of loss trajectories, parameter counts, and simulation FLOPs.'
  ]
};

export const CERTIFICATIONS_DATA: Certification[] = [
  {
    id: 'edge-qa',
    title: 'Software Testing & Quality Assurance (QA)',
    issuer: 'ICT Division, Bangladesh Computer Council & EDGE Project',
    issueDate: 'Verified',
    photo: assets.certificates.qa,
    credentials: 'Credential verified by Government of Bangladesh ICT Division',
    skills: ['Test Automation', 'Test Case Design', 'Regression Testing', 'Bug Lifecycle', 'API Validation']
  },
  {
    id: 'udemy-ml',
    title: 'Machine Learning A-Z: AI, Python & Deep Learning',
    issuer: 'Udemy',
    issueDate: 'Completed',
    photo: assets.certificates.machineLearning,
    credentials: 'Comprehensive practical curriculum covering Supervised, Unsupervised & Deep Learning',
    skills: ['Regression', 'Classification', 'Clustering', 'Deep Neural Networks', 'Dimensionality Reduction']
  }
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    degree: 'B.Sc. in Computer Science & Engineering',
    institution: 'Eastern University',
    location: 'Dhaka, Bangladesh',
    period: 'Completed',
    focus: 'Artificial Intelligence, Machine Learning, Deep Learning, Algorithm Design & Research Thesis on Quantum Neural Networks.'
  },
  {
    degree: 'Higher Secondary Certificate (HSC) — Science',
    institution: 'South Asian College',
    location: 'Chittagong, Bangladesh',
    period: 'Completed',
    focus: 'Higher Mathematics, Physics, Chemistry, and Information Technology fundamentals.'
  }
];

export const ML_PIPELINE_STAGES = [
  {
    number: '01',
    title: 'Data Ingestion',
    subtitle: 'Raw Data & Streaming',
    description: 'Ingesting structured tabular records, time-series market ticks, clinical metrics, audio streams, and unstructured text corpora via automated collectors.',
    tools: ['Python', 'Pandas', 'Requests', 'WebSockets'],
    metric: '10K+ Records Batch'
  },
  {
    number: '02',
    title: 'Preprocessing',
    subtitle: 'Cleaning & Normalization',
    description: 'Handling null distributions, outlier trimming, audio noise reduction, tokenization, text normalization, and train-validation-test stratified partitioning.',
    tools: ['NumPy', 'Pandas', 'NLTK', 'spaCy'],
    metric: 'Stratified Splits'
  },
  {
    number: '03',
    title: 'Feature Engineering',
    subtitle: 'Representation & Embeddings',
    description: 'Synthesizing rolling statistical windows, NLP sentiment polarity vectors, TF-IDF lexical matrices, and sparse clinical one-hot indicators.',
    tools: ['scikit-learn', 'OpenCV', 'Embeddings'],
    metric: 'High-Density Vectors'
  },
  {
    number: '04',
    title: 'Model Training',
    subtitle: 'Deep Learning & Ensembles',
    description: 'Training deep neural networks, CNNs, Bidirectional LSTMs, ensemble voting estimators, and fine-tuning prompt-augmented LLM architectures.',
    tools: ['PyTorch', 'TensorFlow', 'Keras'],
    metric: 'Multi-Input Networks'
  },
  {
    number: '05',
    title: 'Evaluation',
    subtitle: 'Validation & Diagnostics',
    description: 'Validating against holdout sets via RMSE, MAPE, ROC-AUC, precision-recall curves, and human evaluation audits for conversational agents.',
    tools: ['scikit-learn', 'Cross-Validation'],
    metric: '+15% to +40% Gains'
  },
  {
    number: '06',
    title: 'Cloud Deployment',
    subtitle: 'Containerization & Scaling',
    description: 'Packaging inference logic into lightweight containers, configuring serverless AWS Lambda microservices, EC2 instances, and Google Cloud Run services.',
    tools: ['AWS Lambda', 'EC2', 'Google Cloud'],
    metric: 'Sub-second SLAs'
  },
  {
    number: '07',
    title: 'Production API',
    subtitle: 'REST Serving & Monitoring',
    description: 'Exposing authenticated, low-latency REST endpoints for real-time web applications, desktop clients, and autonomous agent loops.',
    tools: ['REST APIs', 'Django', 'PostgreSQL'],
    metric: 'Production Ready'
  }
];
