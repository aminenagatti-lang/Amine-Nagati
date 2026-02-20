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
    category: "AGENTS IA & NLP",
    skills: ["Architecture RAG", "LangChain", "ML/DL Python", "Analyse de Sentiment", "IA Vocale"]
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
    skills: ["React/TypeScript", "Backend Python", "Architecture SaaS", "Conception BDD"]
  }
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'SDR IA Vocal',
    category: 'AGENTS IA',
    description: 'Développement d\'un agent commercial autonome capable d\'initier des appels, de traiter les objections via RAG sur des playbooks de vente, et de qualifier les leads en temps réel. Latence inférieure à 800ms pour des réponses quasi-humaines.',
    stack: ['Python', 'Twilio API', 'OpenAI Realtime', 'Redis Vector Store'],
    metrics: 'Amélioration de 35% du taux de conversion',
    featured: true,
    link: 'https://github.com/amine-nagati/voice-sdr-demo'
  },
  {
    id: '2',
    title: 'Chariot Intelligent',
    category: 'VISION PAR ORDINATEUR',
    description: 'Conception d\'un système antivol pour chariots de supermarché utilisant des modèles YOLOv8 déployés en edge. Le système détecte les articles non scannés avec une précision de 99,2% sous éclairage variable.',
    stack: ['YOLOv8', 'NVIDIA Jetson', 'OpenCV', 'MQTT', 'Python'],
    metrics: 'Plus de 500k images traitées/jour',
    featured: false,
    link: 'https://github.com/amine-nagati/smart-cart-cv'
  },
  {
    id: '3',
    title: 'SaaS d\'Enrichissement B2B',
    category: 'DÉVELOPPEMENT SAAS',
    description: 'Plateforme full-stack agrégeant les données de 4 fournisseurs pour enrichir les leads B2B. Système de consommation par crédits et API haute performance capable de gérer des uploads CSV en masse.',
    stack: ['React', 'Node.js', 'PostgreSQL', 'Docker', 'Stripe'],
    metrics: 'Passage à 10k utilisateurs actifs mensuels',
    featured: false,
    link: 'https://github.com/amine-nagati/lead-enricher'
  },
  {
    id: '4',
    title: 'Agent Disciplinaire RH',
    category: 'AGENTS IA',
    description: 'Outil interne automatisant la rédaction de documents RH formels basés sur les violations de politique. Analyse les manuels employés via RAG pour assurer la conformité légale et la cohérence du ton avant revue humaine.',
    stack: ['LangChain', 'Pinecone', 'Next.js', 'FastAPI'],
    metrics: 'Réduction de 70% du temps admin RH',
    featured: true,
    link: 'https://github.com/amine-nagati/hr-agent'
  },
  {
    id: '5',
    title: 'Scoring Prédictif de Leads',
    category: 'AUTOMATISATION DE CROISSANCE',
    description: 'Mise en place d\'un pipeline ML notant les leads CRM entrants selon les données firmographiques et comportementales. Le modèle se réentraîne chaque semaine sur les données gagnées pour s\'adapter aux tendances.',
    stack: ['Scikit-learn', 'Pandas', 'Salesforce API', 'AWS Lambda'],
    metrics: 'Augmentation de 40% de la vélocité des ventes',
    featured: false,
    link: 'https://github.com/amine-nagati/predictive-scoring'
  },
  {
    id: '6',
    title: 'Synchro CRM Multi-Plateforme',
    category: 'ORCHESTRATION',
    description: 'Architecture de synchronisation bidirectionnelle tolérante aux pannes entre HubSpot et un ERP legacy. Utilise n8n pour le routage complexe et les files d\'attente d\'erreurs pour garantir zéro perte de données.',
    stack: ['n8n', 'Webhooks', 'REST APIs', 'Postgres'],
    metrics: 'Zéro erreur de conflit de données',
    featured: false,
    link: 'https://github.com/amine-nagati/crm-sync-n8n'
  },
  {
    id: '7',
    title: 'Sentinelle de Veille Concurrentielle',
    category: 'AGENTS IA',
    description: 'Agent de surveillance multi-sources scrapant prix, changelogs et actus concurrents. Utilise des LLMs pour résumer les changements stratégiques et alerter via Slack avec des insights actionnables.',
    stack: ['Python', 'Scrapy', 'OpenAI', 'Slack API'],
    metrics: 'Détection précoce de 50+ changements stratégiques',
    featured: true,
    link: 'https://github.com/amine-nagati/intel-sentinel'
  },
  {
    id: '8',
    title: 'Plateforme DesignGlass',
    category: 'DÉVELOPPEMENT SAAS',
    description: 'Boutique e-commerce haute performance pour solutions en verre sur mesure. Configurateur 3D et génération automatique de devis basés sur les dimensions et matériaux choisis par l\'utilisateur.',
    stack: ['React', 'Three.js', 'Shopify Headless', 'AWS'],
    metrics: 'Augmentation de 20% du panier moyen',
    featured: false,
    link: 'https://github.com/amine-nagati/design-glass'
  },
  {
    id: '9',
    title: 'Trieur de CV Automatisé',
    category: 'OPÉRATIONS',
    description: 'Pipeline d\'automatisation RH analysant les CV entrants, extrayant les compétences clés et notant les candidats par rapport aux fiches de poste. Inclut un prompting anti-biais pour une évaluation équitable.',
    stack: ['Python', 'PyPDF2', 'Claude 3', 'Airtable'],
    metrics: 'Plus de 10k candidatures triées de façon autonome',
    featured: false,
    link: 'https://github.com/amine-nagati/cv-screener'
  },
  {
    id: '10',
    title: 'Analyseur de Sentiment App Store',
    category: 'AGENTS IA',
    description: 'Agrège les avis App Store et Play Store. Utilise le NLP pour classer les sentiments et regrouper les demandes de fonctionnalités ou bugs courants pour priorisation produit.',
    stack: ['Python', 'Pandas', 'BERT', 'Tableau'],
    metrics: 'Identification de 3 bugs critiques avant signalement',
    featured: false,
    link: 'https://github.com/amine-nagati/review-analyzer'
  },
  {
    id: '11',
    title: 'Outreach Hyper-Personnalisé',
    category: 'AUTOMATISATION DE CROISSANCE',
    description: 'Outil de growth engineering générant des copies d\'email uniques pour les prospects basés sur leur activité LinkedIn et actus entreprise. S\'intègre parfaitement aux séquences HubSpot.',
    stack: ['n8n', 'Clay', 'GPT-4', 'HubSpot'],
    metrics: 'Taux d\'ouverture améliorés de 2,5x',
    featured: true,
    link: 'https://github.com/amine-nagati/outreach-ai'
  },
  {
    id: '12',
    title: 'Dashboard Ops Temps Réel',
    category: 'DÉVELOPPEMENT SAAS',
    description: 'Centre de commande centralisé visualisant les KPIs marketing, ventes et support. Agrège les données de 5+ sources disparates en métriques live pour la prise de décision C-level.',
    stack: ['Next.js', 'Tremor', 'Supabase', 'Redis'],
    metrics: 'Remplacement de 15+ feuilles de calcul manuelles',
    featured: false,
    link: 'https://github.com/amine-nagati/ops-dashboard'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    date: '2025-02-14',
    title: 'RAG vs Fine-tuning : Matrice de Décision',
    readTime: '6 min de lecture',
    excerpt: 'Quand injecter du contexte et quand réentraîner les poids. Une analyse technique pour les systèmes en production.',
    content: [
        "Dans le paysage des Grands Modèles de Langage (LLMs), le débat entre la Génération Augmentée par Récupération (RAG) et le Fine-tuning est souvent mal compris. Ils ne sont pas mutuellement exclusifs, mais résolvent des problèmes fondamentalement différents. Le RAG concerne la 'connaissance', tandis que le Fine-tuning concerne le 'comportement'.",
        "Le Fine-tuning ajuste les poids du modèle. Il est excellent pour enseigner au modèle un ton de voix spécifique, un format de sortie spécifique (comme le respect d'un schéma JSON), ou un jargon spécifique au domaine. Cependant, il est médiocre pour le rappel factuel de données changeant rapidement. Vous ne pouvez pas fine-tuner un modèle sur les cours de bourse d'aujourd'hui et espérer qu'il soit précis demain sans réentraînement.",
        "Le RAG, en revanche, injecte du contexte dans la fenêtre de prompt. Il permet au modèle d'accéder à des données propriétaires, des nouvelles récentes ou des documents utilisateur spécifiques sans réentraînement. L'architecture implique généralement une Base de Données Vectorielle (comme Pinecone ou Weaviate) pour stocker les embeddings de vos documents.",
        "La Matrice de Décision : Si vous avez besoin que le modèle connaisse des *faits* qui changent souvent, utilisez le RAG. Si vous avez besoin que le modèle suive un *style* ou un *format* complexe, utilisez le Fine-tuning. Pour les applications d'entreprise, la réponse est souvent une approche hybride : un modèle fine-tuné léger alimenté en contexte via RAG."
    ]
  },
  {
    id: '2',
    date: '2025-01-28',
    title: 'n8n vs Make vs Zapier : Benchmark 2025',
    readTime: '8 min de lecture',
    excerpt: 'Comparaison performance, coût et complexité pour les pipelines d\'automatisation d\'entreprise.',
    content: [
        "Le marché de l'automatisation low-code est saturé, mais pour les implémentations techniques sérieuses, seuls quelques concurrents restent. Zapier est le point d'entrée omniprésent. Il est incroyablement facile à utiliser, possède la plus grande bibliothèque d'intégrations, mais devient prohibitif à l'échelle. Il manque également de véritable logique de branchement et de capacités de manipulation de données requises pour les opérations backend complexes.",
        "Make (anciennement Integromat) monte en gamme. Il fournit un canevas visuel permettant un routage complexe, la gestion des erreurs et la transformation des données. C'est moins cher que Zapier et bien plus puissant. Cependant, il tourne toujours sur un cloud propriétaire, ce qui peut être un goulot d'étranglement pour la souveraineté des données et les exigences strictes de latence.",
        "n8n est le choix de l'ingénieur. Il est 'source-available' (fair-code), ce qui signifie que vous pouvez l'héberger vous-même sur votre propre infrastructure (AWS, DigitalOcean). Cela élimine la majoration du coût par exécution. Plus important encore, les nœuds n8n vous permettent d'exécuter du JavaScript personnalisé. Cela signifie que si une intégration pré-construite n'existe pas ou est limitée, vous pouvez simplement écrire l'appel API vous-même.",
        "Verdict : Pour les tâches marketing simples, Zapier convient. Pour la logique métier, Make est excellent. Mais pour les pipelines de données critiques à haut volume où vous avez besoin d'un contrôle total sur l'environnement d'exécution et la sécurité, n8n est le vainqueur incontesté en 2025."
    ]
  },
  {
    id: '3',
    date: '2025-01-10',
    title: 'Vision par Ordinateur : Du POC à la Prod',
    readTime: '5 min de lecture',
    excerpt: 'Gérer les cas limites, variations d\'éclairage et contraintes matérielles en déploiement réel.',
    content: [
        "Construire un modèle de Vision par Ordinateur dans un notebook Jupyter est satisfaisant. Le faire tourner sur un appareil edge dans un magasin de détail avec un éclairage fluorescent fluctuant est un cauchemar. Le fossé entre la Preuve de Concept (POC) et la Production est défini par la robustesse.",
        "Un défi majeur est le 'décalage de domaine'. Un modèle entraîné sur le dataset COCO ou des images stock de haute qualité échouera lamentablement lorsqu'il sera alimenté par des images granuleuses d'une caméra CCTV à 20$. L'augmentation des données est critique ici : simuler le bruit, la rotation et les changements d'éclairage pendant l'entraînement rend le modèle résilient.",
        "Les contraintes matérielles sont le deuxième obstacle. Faire tourner YOLOv8 Large sur un GPU cloud est facile mais coûteux et introduit de la latence. Pour un chariot intelligent, nous avons besoin d'inférence en temps réel. Nous utilisons la quantification (conversion des poids flottants 32-bit en entiers 8-bit) pour faire tourner les modèles sur du matériel edge comme le NVIDIA Jetson Nano ou même un Raspberry Pi avec un accélérateur.",
        "Enfin, la stratégie de 'l'humain dans la boucle'. Aucun modèle n'est précis à 100%. Concevoir l'interface utilisateur pour gérer les prédictions à faible confiance—peut-être en demandant à l'utilisateur de confirmer un article—est tout aussi important que l'architecture du modèle elle-même."
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
        "Le cerveau est le LLM. Les mains sont les Outils (APIs). Mais le composant le plus critique est la Mémoire. La mémoire à court terme est la fenêtre de contexte. La mémoire à long terme est un Vector Store. Sans mémoire, un agent ne peut pas planifier des tâches en plusieurs étapes.",
        "Nous structurons nos agents avec un 'System Prompt' qui définit strictement leur persona et leurs contraintes. Nous leur donnons ensuite une boîte à outils. Par exemple, un Agent de Planification reçoit des outils pour 'vérifier_calendrier', 'envoyer_email' et 'trouver_créneaux_disponibles'.",
        "Le danger des agents réside dans les appels de fonction hallucinés. Nous implémentons une validation de schéma stricte (utilisant Pydantic en Python) sur la sortie du LLM avant qu'un outil ne soit réellement exécuté. Cette couche de 'garde-fou' garantit que l'agent n'envoie pas d'email à 'undefined' ou ne supprime pas une table de base de données par accident."
    ]
  }
];