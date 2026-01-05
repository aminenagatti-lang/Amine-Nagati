import { Project, BlogPost, ExpertiseItem } from './types';

export const ACCENT_COLOR = '#cc5500'; // Burnt Orange

// --------------------------------------------------------------------------
// CONFIGURATION
// --------------------------------------------------------------------------
// Paste your n8n, Make, or Zapier Webhook URL here to receive form submissions.
// Example: 'https://primary.n8n.your-domain.com/webhook/...'
export const LEADS_WEBHOOK_URL = 'https://formspree.io/f/maqnvnqp'; 

export const EXPERTISE: ExpertiseItem[] = [
  {
    category: "AI AGENTS & NLP",
    skills: ["RAG Architecture", "LangChain", "Python ML/DL", "Sentiment Analysis", "Voice AI"]
  },
  {
    category: "AUTOMATION & ORCHESTRATION",
    skills: ["n8n", "Make", "Zapier", "API Integration", "CRM Sync"]
  },
  {
    category: "COMPUTER VISION",
    skills: ["YOLOv8", "CNN", "Real-time Detection", "Image Classification"]
  },
  {
    category: "FULL STACK",
    skills: ["React/TypeScript", "Python Backend", "SaaS Architecture", "Database Design"]
  }
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Voice AI SDR',
    category: 'AI AGENTS',
    description: 'Developed an autonomous sales agent capable of initiating calls, handling objections using RAG on sales playbooks, and qualifying leads in real-time. Achieved sub-800ms latency for near-human response times.',
    stack: ['Python', 'Twilio API', 'OpenAI Realtime', 'Redis Vector Store'],
    metrics: '35% conversion rate improvement',
    featured: true,
    link: 'https://github.com/amine-nagati/voice-sdr-demo'
  },
  {
    id: '2',
    title: 'Smart Retail Cart',
    category: 'COMPUTER VISION',
    description: 'Engineered a theft-prevention system for retail carts using edge-deployed YOLOv8 models. The system detects un-scanned items in the cart stream with 99.2% accuracy under variable lighting conditions.',
    stack: ['YOLOv8', 'NVIDIA Jetson', 'OpenCV', 'MQTT', 'Python'],
    metrics: 'Processed 500k+ frames/day',
    featured: false,
    link: 'https://github.com/amine-nagati/smart-cart-cv'
  },
  {
    id: '3',
    title: 'B2B Lead Enrichment SaaS',
    category: 'SAAS DEVELOPMENT',
    description: 'Full-stack platform that aggregates data from 4 different providers to enrich B2B leads. Built a credit-based consumption system and high-throughput API capable of handling concurrent bulk CSV uploads.',
    stack: ['React', 'Node.js', 'PostgreSQL', 'Docker', 'Stripe'],
    metrics: 'Scaled to 10k monthly active users',
    featured: false,
    link: 'https://github.com/amine-nagati/lead-enricher'
  },
  {
    id: '4',
    title: 'HR Disciplinary Agent',
    category: 'AI AGENTS',
    description: 'An internal tool that automates the drafting of formal HR documentation based on policy violations. It parses employee handbooks via RAG to ensure legal compliance and tone consistency before human review.',
    stack: ['LangChain', 'Pinecone', 'Next.js', 'FastAPI'],
    metrics: 'Reduced HR admin time by 70%',
    featured: true,
    link: 'https://github.com/amine-nagati/hr-agent'
  },
  {
    id: '5',
    title: 'Predictive Lead Scoring',
    category: 'GROWTH AUTOMATION',
    description: 'Implemented a Machine Learning pipeline that scores incoming CRM leads based on firmographic data and behavioral signals. The model re-trains weekly on closed-won data to adapt to changing market trends.',
    stack: ['Scikit-learn', 'Pandas', 'Salesforce API', 'AWS Lambda'],
    metrics: '40% increase in sales velocity',
    featured: false,
    link: 'https://github.com/amine-nagati/predictive-scoring'
  },
  {
    id: '6',
    title: 'Cross-Platform CRM Sync',
    category: 'ORCHESTRATION',
    description: 'Designed a fault-tolerant, bidirectional sync architecture between HubSpot and a legacy ERP. Utilizes n8n for complex routing logic and error handling queues to ensure zero data loss during API outages.',
    stack: ['n8n', 'Webhooks', 'REST APIs', 'Postgres'],
    metrics: 'Zero data conflict errors',
    featured: false,
    link: 'https://github.com/amine-nagati/crm-sync-n8n'
  },
  {
    id: '7',
    title: 'Competitive Intel Sentinel',
    category: 'AI AGENTS',
    description: 'Multi-source monitoring agent that scrapes competitor pricing, changelogs, and news. Uses LLMs to summarize strategic shifts and alerts stakeholders via Slack with actionable insights.',
    stack: ['Python', 'Scrapy', 'OpenAI', 'Slack API'],
    metrics: 'Detected 50+ strategic shifts early',
    featured: true,
    link: 'https://github.com/amine-nagati/intel-sentinel'
  },
  {
    id: '8',
    title: 'DesignGlass Platform',
    category: 'SAAS DEVELOPMENT',
    description: 'High-performance e-commerce storefront for custom glass solutions. Features a 3D configurator and automated quote generation based on user-input dimensions and material selection.',
    stack: ['React', 'Three.js', 'Shopify Headless', 'AWS'],
    metrics: '20% uplift in average order value',
    featured: false,
    link: 'https://github.com/amine-nagati/design-glass'
  },
  {
    id: '9',
    title: 'Automated Resume Screener',
    category: 'OPERATIONS',
    description: 'HR automation pipeline that parses incoming CVs, extracts key skills, and scores candidates against job descriptions. Includes bias-aware prompting to ensure fair evaluation standards.',
    stack: ['Python', 'PyPDF2', 'Claude 3', 'Airtable'],
    metrics: 'Screened 10k+ applications autonomously',
    featured: false,
    link: 'https://github.com/amine-nagati/cv-screener'
  },
  {
    id: '10',
    title: 'App Store Sentiment Analyzer',
    category: 'AI AGENTS',
    description: 'Aggregates reviews from App Store and Play Store. Uses NLP to classify sentiment and cluster common feature requests or bugs for the product team to prioritize.',
    stack: ['Python', 'Pandas', 'BERT', 'Tableau'],
    metrics: 'Identified 3 critical bugs pre-report',
    featured: false,
    link: 'https://github.com/amine-nagati/review-analyzer'
  },
  {
    id: '11',
    title: 'Hyper-Personalized Outreach',
    category: 'GROWTH AUTOMATION',
    description: 'Growth engineering tool generating unique email copy for prospects based on their LinkedIn activity and company news. Integrates seamlessly with HubSpot sequences.',
    stack: ['n8n', 'Clay', 'GPT-4', 'HubSpot'],
    metrics: 'Improved open rates by 2.5x',
    featured: true,
    link: 'https://github.com/amine-nagati/outreach-ai'
  },
  {
    id: '12',
    title: 'Real-Time Ops Dashboard',
    category: 'SAAS DEVELOPMENT',
    description: 'Centralized command center visualizing KPIs across marketing, sales, and support. Aggregates data from 5+ disparate sources into live metrics for C-level decision making.',
    stack: ['Next.js', 'Tremor', 'Supabase', 'Redis'],
    metrics: 'Replaced 15+ manual spreadsheets',
    featured: false,
    link: 'https://github.com/amine-nagati/ops-dashboard'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    date: '2025-02-14',
    title: 'RAG vs Fine-tuning: Decision Matrix',
    readTime: '6 min read',
    excerpt: 'When to inject context and when to retrain weights. A technical breakdown for production systems.',
    content: [
        "In the landscape of Large Language Models (LLMs), the debate between Retrieval-Augmented Generation (RAG) and Fine-tuning is often misunderstood. They are not mutually exclusive, but they solve fundamentally different problems. RAG is about 'knowledge', while Fine-tuning is about 'behavior'.",
        "Fine-tuning adjusts the weights of the model. It is excellent for teaching the model a specific tone of voice, a specific output format (like JSON schema adherence), or domain-specific jargon. However, it is poor at factual recall of rapidly changing data. You cannot fine-tune a model on today's stock prices and expect it to be accurate tomorrow without retraining.",
        "RAG, on the other hand, injects context into the prompt window. It allows the model to access proprietary data, recent news, or specific user documents without retraining. The architecture typically involves a Vector Database (like Pinecone or Weaviate) to store embeddings of your documents.",
        "The Decision Matrix: If you need the model to know *facts* that change often, use RAG. If you need the model to follow a complex *style* or *format*, use Fine-tuning. For enterprise-grade applications, the answer is often a hybrid approach: a lightweight fine-tuned model that is fed context via RAG."
    ]
  },
  {
    id: '2',
    date: '2025-01-28',
    title: 'n8n vs Make vs Zapier: 2025 Benchmark',
    readTime: '8 min read',
    excerpt: 'Performance, cost, and complexity comparison for enterprise-grade automation pipelines.',
    content: [
        "The low-code automation market is saturated, but for serious technical implementations, only a few contenders remain. Zapier is the ubiquitous entry point. It's incredibly easy to use, has the largest library of integrations, but it becomes prohibitively expensive at scale. It also lacks true branching logic and data manipulation capabilities required for complex backend operations.",
        "Make (formerly Integromat) steps up the game. It provides a visual canvas that allows for complex routing, error handling, and data transformation. It's cheaper than Zapier and far more powerful. However, it still runs on a proprietary cloud, which can be a bottleneck for data sovereignty and strict latency requirements.",
        "n8n is the engineer's choice. It is 'source-available' (fair-code), meaning you can self-host it on your own infrastructure (AWS, DigitalOcean). This eliminates the per-execution cost markup. More importantly, n8n nodes allow you to run custom JavaScript. This means if a pre-built integration doesn't exist or is limited, you can simply write the API call yourself.",
        "Verdict: For simple marketing tasks, Zapier is fine. For business logic, Make is great. But for mission-critical, high-volume data pipelines where you need full control over the execution environment and security, n8n is the undisputed winner in 2025."
    ]
  },
  {
    id: '3',
    date: '2025-01-10',
    title: 'Computer Vision: From POC to Prod',
    readTime: '5 min read',
    excerpt: 'Handling edge cases, lighting variations, and hardware constraints in real-world deployment.',
    content: [
        "Building a Computer Vision model in a Jupyter notebook is satisfying. Getting it to run on an edge device in a retail store with fluctuating fluorescent lighting is a nightmare. The gap between Proof of Concept (POC) and Production is defined by robustness.",
        "One major challenge is the 'domain shift'. A model trained on the COCO dataset or high-quality stock images will fail miserably when fed grainy footage from a $20 CCTV camera. Data augmentation is critical here: simulating noise, rotation, and lighting changes during training makes the model resilient.",
        "Hardware constraints are the second hurdle. Running YOLOv8 Large on a cloud GPU is easy but expensive and introduces latency. For a smart cart, we need real-time inference. We utilize quantization (converting 32-bit floating point weights to 8-bit integers) to run models on edge hardware like the NVIDIA Jetson Nano or even Raspberry Pi with an accelerator.",
        "Finally, the 'human in the loop' strategy. No model is 100% accurate. Designing the UI to handle low-confidence predictions—perhaps by asking the user to confirm an item—is just as important as the model architecture itself."
    ]
  },
  {
    id: '4',
    date: '2024-12-15',
    title: 'Architecture of Autonomous Agents',
    readTime: '7 min read',
    excerpt: 'Designing memory systems, tool use, and safety rails for independent AI agents.',
    content: [
        "An 'Agent' differs from a standard Chatbot in its ability to use tools and act autonomously. The core architecture loop is: Observation -> Thought -> Action -> Result.",
        "The brain is the LLM. The hands are the Tools (APIs). But the most critical component is Memory. Short-term memory is the context window. Long-term memory is a Vector Store. Without memory, an agent cannot plan multi-step tasks.",
        "We structure our agents with a 'System Prompt' that strictly defines their persona and constraints. We then give them a toolbox. For example, a Scheduling Agent is given tools to 'check_calendar', 'send_email', and 'find_available_slots'.",
        "The danger of agents is hallucinated function calls. We implement strict schema validation (using Pydantic in Python) on the output of the LLM before any tool is actually executed. This 'guardrail' layer ensures the agent doesn't send an email to 'undefined' or delete a database table by accident."
    ]
  }
];