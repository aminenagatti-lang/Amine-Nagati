import { Project, BlogPost, ExpertiseItem } from './types';

interface TranslationData {
  navigation: {
    projects: string;
    stack: string;
    blogs: string;
    contact: string;
  };
  hero: {
    role: string;
    roleValue: string;
    base: string;
    baseValue: string;
    stack: string;
    stackValue: string;
    description: string;
    scroll: string;
  };
  expertise: {
    number: string;
    title: string;
    items: ExpertiseItem[];
  };
  projects: {
    number: string;
    title: string;
    items: Project[];
  };
  blog: {
    number: string;
    title: string;
    readMore: string;
    closeTerminal: string;
    items: BlogPost[];
  };
  leadMagnet: {
    stayConnected: string;
    joinNetwork: string;
    description: string;
    joinCount: string;
    detailsRecorded: string;
    addedToDatabase: string;
    businessEmail: string;
    companyName: string;
    requestAccess: string;
    processing: string;
  };
  footer: {
    role: string;
    rights: string;
  };
}

export const TRANSLATIONS: Record<'en' | 'fr', TranslationData> = {
  en: {
    navigation: {
      projects: "PROJECTS",
      stack: "STACK",
      blogs: "BLOGS",
      contact: "CONTACT"
    },
    hero: {
      role: "Role",
      roleValue: "AI & Automation Engineer",
      base: "Base",
      baseValue: "Available Remote / Worldwide",
      stack: "Stack",
      stackValue: "Python • n8n • React • YOLO",
      description: "I transform complex manual processes into intelligent, autonomous systems. Expert in AI engineering and workflow automation.",
      scroll: "Scroll"
    },
    expertise: {
      number: "01 //",
      title: "Technical Architecture",
      items: [
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
      ]
    },
    projects: {
      number: "02 //",
      title: "Selected Works",
      items: [
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
      ]
    },
    blog: {
      number: "03 //",
      title: "Intelligence Logs",
      readMore: "Read more",
      closeTerminal: "Close Terminal",
      items: [
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
      ]
    },
    leadMagnet: {
      stayConnected: "Stay Connected",
      joinNetwork: "Join the Intelligence Network",
      description: "Leave your email and company details. I will notify you about technical deep-dives, automation tools, and consulting availability.",
      joinCount: "// Join 500+ engineers & founders",
      detailsRecorded: "DETAILS RECORDED",
      addedToDatabase: "You have been added to the database.",
      businessEmail: "Business Email",
      companyName: "Company Name",
      requestAccess: "REQUEST ACCESS",
      processing: "PROCESSING..."
    },
    footer: {
      role: "AI & Automation Engineer.",
      rights: "© 2026. SYSTEM.ALL_RIGHTS_RESERVED"
    }
  },
  fr: {
    navigation: {
      projects: "PROJETS",
      stack: "STACK",
      blogs: "BLOGS",
      contact: "CONTACT"
    },
    hero: {
      role: "Rôle",
      roleValue: "Ingénieur IA & Automatisation",
      base: "Base",
      baseValue: "Disponible à distance / Monde entier",
      stack: "Stack",
      stackValue: "Python • n8n • React • YOLO",
      description: "Je transforme des processus manuels complexes en systèmes intelligents et autonomes. Expert en ingénierie IA et automatisation de flux de travail.",
      scroll: "Défiler"
    },
    expertise: {
      number: "01 //",
      title: "Architecture Technique",
      items: [
        {
          category: "AGENTS IA & NLP",
          skills: ["Architecture RAG", "LangChain", "Python ML/DL", "Analyse de Sentiment", "IA Vocale"]
        },
        {
          category: "AUTOMATISATION & ORCHESTRATION",
          skills: ["n8n", "Make", "Zapier", "Intégration API", "Synchro CRM"]
        },
        {
          category: "VISION PAR ORDINATEUR",
          skills: ["YOLOv8", "CNN", "Détection Temps Réel", "Classification d'Images"]
        },
        {
          category: "FULL STACK",
          skills: ["React/TypeScript", "Backend Python", "Architecture SaaS", "Conception Base de Données"]
        }
      ]
    },
    projects: {
      number: "02 //",
      title: "Travaux Sélectionnés",
      items: [
        {
          id: '1',
          title: 'SDR IA Vocal',
          category: 'AGENTS IA',
          description: 'Développement d\'un agent commercial autonome capable d\'initier des appels, de traiter les objections via RAG sur des playbooks de vente, et de qualifier les leads en temps réel. Latence inférieure à 800ms pour des réponses quasi-humaines.',
          stack: ['Python', 'API Twilio', 'OpenAI Realtime', 'Redis Vector Store'],
          metrics: 'Amélioration de 35% du taux de conversion',
          featured: true,
          link: 'https://github.com/amine-nagati/voice-sdr-demo'
        },
        {
          id: '2',
          title: 'Chariot Retail Intelligent',
          category: 'VISION PAR ORDINATEUR',
          description: 'Conception d\'un système antivol pour chariots de supermarché utilisant des modèles YOLOv8 déployés en edge. Le système détecte les articles non scannés avec une précision de 99,2% sous éclairage variable.',
          stack: ['YOLOv8', 'NVIDIA Jetson', 'OpenCV', 'MQTT', 'Python'],
          metrics: 'Plus de 500k frames traitées/jour',
          featured: false,
          link: 'https://github.com/amine-nagati/smart-cart-cv'
        },
        {
          id: '3',
          title: 'SaaS d\'Enrichissement B2B',
          category: 'DÉVELOPPEMENT SAAS',
          description: 'Plateforme full-stack agrégeant les données de 4 fournisseurs pour enrichir les leads B2B. Système de consommation par crédits et API haute performance capable de gérer des uploads CSV massifs.',
          stack: ['React', 'Node.js', 'PostgreSQL', 'Docker', 'Stripe'],
          metrics: 'Scalé à 10k utilisateurs actifs mensuels',
          featured: false,
          link: 'https://github.com/amine-nagati/lead-enricher'
        },
        {
          id: '4',
          title: 'Agent Disciplinaire RH',
          category: 'AGENTS IA',
          description: 'Outil interne automatisant la rédaction de documentation RH formelle basée sur les violations de politique. Analyse les manuels employés via RAG pour assurer la conformité légale et le ton avant révision humaine.',
          stack: ['LangChain', 'Pinecone', 'Next.js', 'FastAPI'],
          metrics: 'Réduction de 70% du temps admin RH',
          featured: true,
          link: 'https://github.com/amine-nagati/hr-agent'
        },
        {
          id: '5',
          title: 'Scoring Prédictif de Leads',
          category: 'AUTOMATISATION CROISSANCE',
          description: 'Mise en œuvre d\'un pipeline ML notant les leads CRM entrants selon les données firmographiques et comportementales. Le modèle se réentraîne chaque semaine sur les données gagnées pour s\'adapter au marché.',
          stack: ['Scikit-learn', 'Pandas', 'API Salesforce', 'AWS Lambda'],
          metrics: 'Augmentation de 40% de la vélocité des ventes',
          featured: false,
          link: 'https://github.com/amine-nagati/predictive-scoring'
        },
        {
          id: '6',
          title: 'Synchro CRM Cross-Plateforme',
          category: 'ORCHESTRATION',
          description: 'Architecture de synchronisation bidirectionnelle tolérante aux pannes entre HubSpot et un ERP legacy. Utilise n8n pour le routage complexe et les files d\'attente d\'erreurs assurant zéro perte de données.',
          stack: ['n8n', 'Webhooks', 'API REST', 'Postgres'],
          metrics: 'Zéro erreur de conflit de données',
          featured: false,
          link: 'https://github.com/amine-nagati/crm-sync-n8n'
        },
        {
          id: '7',
          title: 'Sentinelle Intel Concurrentielle',
          category: 'AGENTS IA',
          description: 'Agent de surveillance multi-sources scrapant les prix, changelogs et actualités des concurrents. Utilise des LLM pour résumer les changements stratégiques et alerter les parties prenantes via Slack.',
          stack: ['Python', 'Scrapy', 'OpenAI', 'API Slack'],
          metrics: 'Détection précoce de 50+ changements stratégiques',
          featured: true,
          link: 'https://github.com/amine-nagati/intel-sentinel'
        },
        {
          id: '8',
          title: 'Plateforme DesignGlass',
          category: 'DÉVELOPPEMENT SAAS',
          description: 'Vitrine e-commerce haute performance pour solutions en verre sur mesure. Configurateur 3D et génération automatique de devis basés sur les dimensions et matériaux saisis par l\'utilisateur.',
          stack: ['React', 'Three.js', 'Shopify Headless', 'AWS'],
          metrics: 'Hausse de 20% du panier moyen',
          featured: false,
          link: 'https://github.com/amine-nagati/design-glass'
        },
        {
          id: '9',
          title: 'Screener de CV Automatisé',
          category: 'OPÉRATIONS',
          description: 'Pipeline d\'automatisation RH analysant les CV entrants, extrayant les compétences clés et notant les candidats par rapport aux fiches de poste. Inclut un prompting conscient des biais pour une évaluation équitable.',
          stack: ['Python', 'PyPDF2', 'Claude 3', 'Airtable'],
          metrics: 'Filtrage autonome de 10k+ candidatures',
          featured: false,
          link: 'https://github.com/amine-nagati/cv-screener'
        },
        {
          id: '10',
          title: 'Analyseur de Sentiment App Store',
          category: 'AGENTS IA',
          description: 'Agrège les avis App Store et Play Store. Utilise le NLP pour classer les sentiments et regrouper les demandes de fonctionnalités ou bugs courants pour priorisation par l\'équipe produit.',
          stack: ['Python', 'Pandas', 'BERT', 'Tableau'],
          metrics: 'Identification de 3 bugs critiques avant signalement',
          featured: false,
          link: 'https://github.com/amine-nagati/review-analyzer'
        },
        {
          id: '11',
          title: 'Outreach Hyper-Personnalisé',
          category: 'AUTOMATISATION CROISSANCE',
          description: 'Outil de growth engineering générant des emails uniques pour les prospects basés sur leur activité LinkedIn et actualités d\'entreprise. S\'intègre parfaitement aux séquences HubSpot.',
          stack: ['n8n', 'Clay', 'GPT-4', 'HubSpot'],
          metrics: 'Taux d\'ouverture amélioré de 2.5x',
          featured: true,
          link: 'https://github.com/amine-nagati/outreach-ai'
        },
        {
          id: '12',
          title: 'Dashboard Ops Temps Réel',
          category: 'DÉVELOPPEMENT SAAS',
          description: 'Centre de commandement centralisé visualisant les KPI marketing, ventes et support. Agrège les données de 5+ sources disparates en métriques live pour la prise de décision C-level.',
          stack: ['Next.js', 'Tremor', 'Supabase', 'Redis'],
          metrics: 'Remplacement de 15+ feuilles de calcul manuelles',
          featured: false,
          link: 'https://github.com/amine-nagati/ops-dashboard'
        }
      ]
    },
    blog: {
      number: "03 //",
      title: "Journaux d'Intelligence",
      readMore: "Lire la suite",
      closeTerminal: "Fermer le Terminal",
      items: [
        {
          id: '1',
          date: '2025-02-14',
          title: 'RAG vs Fine-tuning : Matrice de Décision',
          readTime: '6 min de lecture',
          excerpt: 'Quand injecter du contexte et quand réentraîner les poids. Une analyse technique pour les systèmes en production.',
          content: [
              "Dans le paysage des Grands Modèles de Langage (LLM), le débat entre la Génération Augmentée par Récupération (RAG) et le Fine-tuning est souvent mal compris. Ils ne sont pas mutuellement exclusifs, mais résolvent des problèmes fondamentalement différents. Le RAG concerne la 'connaissance', tandis que le Fine-tuning concerne le 'comportement'.",
              "Le Fine-tuning ajuste les poids du modèle. Il est excellent pour enseigner au modèle un ton de voix spécifique, un format de sortie précis (comme le respect d'un schéma JSON) ou un jargon spécifique au domaine. Cependant, il est médiocre pour le rappel factuel de données changeant rapidement. Vous ne pouvez pas affiner un modèle sur les cours de bourse d'aujourd'hui et espérer qu'il soit précis demain sans réentraînement.",
              "Le RAG, en revanche, injecte du contexte dans la fenêtre de prompt. Il permet au modèle d'accéder à des données propriétaires, des nouvelles récentes ou des documents utilisateur spécifiques sans réentraînement. L'architecture implique généralement une base de données vectorielle (comme Pinecone ou Weaviate) pour stocker les embeddings de vos documents.",
              "La Matrice de Décision : Si vous avez besoin que le modèle connaisse des *faits* qui changent souvent, utilisez le RAG. Si vous avez besoin que le modèle suive un *style* ou un *format* complexe, utilisez le Fine-tuning. Pour les applications d'entreprise, la réponse est souvent une approche hybride : un modèle affiné léger alimenté en contexte via RAG."
          ]
        },
        {
          id: '2',
          date: '2025-01-28',
          title: 'n8n vs Make vs Zapier : Benchmark 2025',
          readTime: '8 min de lecture',
          excerpt: 'Comparaison de performance, coût et complexité pour les pipelines d\'automatisation d\'entreprise.',
          content: [
              "Le marché de l'automatisation low-code est saturé, mais pour les implémentations techniques sérieuses, seuls quelques concurrents restent. Zapier est le point d'entrée omniprésent. Il est incroyablement facile à utiliser, possède la plus grande bibliothèque d'intégrations, mais devient prohibitif à l'échelle. Il manque également de véritable logique de branchement et de capacités de manipulation de données requises pour les opérations backend complexes.",
              "Make (anciennement Integromat) monte d'un cran. Il fournit un canevas visuel permettant un routage complexe, la gestion des erreurs et la transformation des données. C'est moins cher que Zapier et bien plus puissant. Cependant, il fonctionne toujours sur un cloud propriétaire, ce qui peut être un goulot d'étranglement pour la souveraineté des données et les exigences strictes de latence.",
              "n8n est le choix de l'ingénieur. Il est 'source-available' (fair-code), ce qui signifie que vous pouvez l'héberger vous-même sur votre propre infrastructure (AWS, DigitalOcean). Cela élimine la majoration du coût par exécution. Plus important encore, les nœuds n8n vous permettent d'exécuter du JavaScript personnalisé. Cela signifie que si une intégration pré-construite n'existe pas ou est limitée, vous pouvez simplement écrire l'appel API vous-même.",
              "Verdict : Pour les tâches marketing simples, Zapier convient. Pour la logique métier, Make est excellent. Mais pour les pipelines de données critiques à haut volume où vous avez besoin d'un contrôle total sur l'environnement d'exécution et la sécurité, n8n est le vainqueur incontesté en 2025."
          ]
        },
        {
          id: '3',
          date: '2025-01-10',
          title: 'Vision par Ordinateur : Du POC à la Prod',
          readTime: '5 min de lecture',
          excerpt: 'Gestion des cas limites, variations d\'éclairage et contraintes matérielles dans le déploiement réel.',
          content: [
              "Construire un modèle de Vision par Ordinateur dans un notebook Jupyter est satisfaisant. Le faire fonctionner sur un appareil edge dans un magasin de détail avec un éclairage fluorescent fluctuant est un cauchemar. L'écart entre la Preuve de Concept (POC) et la Production est défini par la robustesse.",
              "Un défi majeur est le 'domain shift'. Un modèle entraîné sur le jeu de données COCO ou des images stock de haute qualité échouera misérablement lorsqu'il sera alimenté par des images granuleuses d'une caméra CCTV à 20$. L'augmentation des données est critique ici : simuler le bruit, la rotation et les changements d'éclairage pendant l'entraînement rend le modèle résilient.",
              "Les contraintes matérielles sont le deuxième obstacle. Exécuter YOLOv8 Large sur un GPU cloud est facile mais coûteux et introduit de la latence. Pour un chariot intelligent, nous avons besoin d'une inférence en temps réel. Nous utilisons la quantification (conversion des poids flottants 32 bits en entiers 8 bits) pour exécuter des modèles sur du matériel edge comme le NVIDIA Jetson Nano ou même un Raspberry Pi avec un accélérateur.",
              "Enfin, la stratégie 'humain dans la boucle'. Aucun modèle n'est précis à 100%. Concevoir l'interface utilisateur pour gérer les prédictions à faible confiance—peut-être en demandant à l'utilisateur de confirmer un article—est tout aussi important que l'architecture du modèle elle-même."
          ]
        },
        {
          id: '4',
          date: '2024-12-15',
          title: 'Architecture des Agents Autonomes',
          readTime: '7 min de lecture',
          excerpt: 'Conception de systèmes de mémoire, utilisation d\'outils et garde-fous pour agents IA indépendants.',
          content: [
              "Un 'Agent' diffère d'un Chatbot standard par sa capacité à utiliser des outils et à agir de manière autonome. La boucle d'architecture centrale est : Observation -> Pensée -> Action -> Résultat.",
              "Le cerveau est le LLM. Les mains sont les Outils (API). Mais le composant le plus critique est la Mémoire. La mémoire à court terme est la fenêtre de contexte. La mémoire à long terme est une Base de Données Vectorielle. Sans mémoire, un agent ne peut pas planifier des tâches en plusieurs étapes.",
              "Nous structurons nos agents avec un 'System Prompt' qui définit strictement leur persona et leurs contraintes. Nous leur donnons ensuite une boîte à outils. Par exemple, un Agent de Planification reçoit des outils pour 'vérifier_calendrier', 'envoyer_email' et 'trouver_créneaux_disponibles'.",
              "Le danger des agents est l'hallucination des appels de fonction. Nous implémentons une validation de schéma stricte (utilisant Pydantic en Python) sur la sortie du LLM avant qu'un outil ne soit réellement exécuté. Cette couche de 'garde-fou' garantit que l'agent n'envoie pas d'email à 'undefined' ou ne supprime pas une table de base de données par accident."
          ]
        }
      ]
    },
    leadMagnet: {
      stayConnected: "Restez Connecté",
      joinNetwork: "Rejoignez le Réseau d'Intelligence",
      description: "Laissez votre email et les détails de votre entreprise. Je vous informerai sur les analyses techniques approfondies, les outils d'automatisation et la disponibilité pour le conseil.",
      joinCount: "// Rejoignez 500+ ingénieurs & fondateurs",
      detailsRecorded: "DÉTAILS ENREGISTRÉS",
      addedToDatabase: "Vous avez été ajouté à la base de données.",
      businessEmail: "Email Professionnel",
      companyName: "Nom de l'Entreprise",
      requestAccess: "DEMANDER L'ACCÈS",
      processing: "TRAITEMENT..."
    },
    footer: {
      role: "Ingénieur IA & Automatisation.",
      rights: "© 2026. SYSTÈME.TOUS_DROITS_RÉSERVÉS"
    }
  }
};
