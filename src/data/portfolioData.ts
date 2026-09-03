export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  website?: string;
  period: string;
  location: string;
  badge?: string;
  points: string[];
  skills: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: "Full Stack" | "Frontend" | "Backend / Integration" | "Mobile / IoT";
  period: string;
  description: string;
  highlights: string[];
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  metrics?: { label: string; value: string }[];
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: { name: string; level: number; iconName?: string; highlight?: boolean }[];
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Akshay Pandurang Telore",
    shortName: "Akshay Telore",
    role: "Full Stack Developer",
    tagline: "Building scalable web applications, payment systems & real-time digital experiences.",
    bio: "Full Stack Developer with hands-on experience building scalable, production-ready web and mobile applications using Next.js, React.js, TypeScript, Node.js, Supabase, Flutter, and Dart. Built www.chotubot.com from scratch from Figma designs, engineered inventory management and affiliate marketing dashboards, international delivery pipelines, and the Chotu ESP IoT mobile app. Strong practitioner of agile development using Jira Kanban boards.",
    email: "teloreakshay1000@gmail.com",
    phone: "+91 9172925369",
    rawPhone: "+919172925369",
    location: "Karve Nagar, Pune, Maharashtra 411052, India",
    city: "Pune, India",
    linkedin: "https://www.linkedin.com/in/akshay-telore-209934251",
    github: "https://github.com/AkshayTelore",
    status: "Available for Full-time Roles & High-Impact Projects",
    dateOfBirth: "2 May 2003",
    nationality: "Indian",
    languages: ["English", "Marathi", "Hindi"],
    hobbies: ["Exploring Modern Tech & AI", "Watching Tech Cinema", "Playing Video Games", "Competitive Cricket"],
  },

  education: {
    degree: "Master of Computer Applications (MCA)",
    institution: "MES Abasaheb Garware College, Pune",
    period: "2023 - 2025",
    cgpa: "9.18",
    status: "Completed",
    highlights: [
      "Graduated with distinction (9.18 CGPA)",
      "Represented college cricket team for 2 consecutive years",
      "Won 1st prize in university-level group dance competition",
    ],
  },

  experiences: [
    {
      id: "dextop",
      role: "Associate Software Developer",
      company: "Dextop",
      website: "https://www.chotubot.com",
      period: "Dec 2025 - Present",
      location: "Pune, India",
      badge: "Current Role",
      points: [
        "Built www.chotubot.com from scratch as lead full-stack developer, translating comprehensive Figma UI/UX designs into pixel-perfect, responsive Next.js and TypeScript components.",
        "Engineered the enterprise Dashboard featuring Inventory Management for real-time stock tracking, catalog updates, warehouse alerts, and supplier sync.",
        "Developed the complete Affiliate Marketing system with unique tracking links, referral conversion metrics, and automated commission payout pipelines.",
        "Implemented International Delivery workflows supporting cross-border shipping compliance, dynamic currency conversion, and global order tracking checkpoints.",
        "Integrated Razorpay payment gateway with cryptographic HMAC SHA256 webhook state verification and automated refund management routines.",
        "Developed the Chotu ESP companion mobile application using Flutter and Dart for real-time ESP hardware provisioning, Wi-Fi pairing, and device control.",
        "Employed Jira Kanban boards for agile task management, sprint tracking, bug triage, and continuous delivery cycles.",
        "Constructed row-level security (RLS) authentication and role authorization via Supabase with automated GitLab CI/CD pipelines.",
      ],
      skills: [
        "Next.js",
        "React.js",
        "TypeScript",
        "Flutter",
        "Dart",
        "Supabase",
        "Razorpay",
        "Inventory Systems",
        "Affiliate Marketing",
        "Figma to Code",
        "Jira (Kanban)",
        "GitLab CI/CD",
      ],
    },
    {
      id: "sash-info",
      role: "Full Stack Developer Intern",
      company: "SASH Info Pvt. Ltd",
      website: "https://sashinfo.com",
      period: "July 2025 - Oct 2025",
      location: "Pune, India",
      badge: "Internship",
      points: [
        "Core engineer on flagship product 'DocuEsign' featuring secure PDF uploads, visual drag-and-drop signature canvas, and cryptographic timestamping.",
        "Implemented secure OTP/email 2FA verification workflows, credit-based signing quota system, and multi-tenant user permission tiers.",
        "Integrated comprehensive audit trails: IP geolocation capture, device fingerprint tracking, real-time status transitions, and tamper-evident activity logs.",
        "Engineered and documented Next.js REST APIs thoroughly verified with automated Postman collections.",
        "Seamlessly integrated DocuEsign with AppyMinds LMS platform for zero-friction student and faculty document verification.",
        "Modernized UI/UX architecture utilizing Next.js, React, Bootstrap, Redux Toolkit, and reusable design tokens under Git version control.",
      ],
      skills: ["Next.js", "React.js", "MongoDB", "Redux Toolkit", "Bootstrap", "NextAuth", "REST APIs", "Postman", "Git"],
    },
  ] as ExperienceItem[],

  projects: [
    {
      id: "chotubot-platform",
      title: "Chotubot.com & Enterprise Commerce Dashboard",
      subtitle: "Built from scratch: Inventory management, affiliate marketing, international shipping & Razorpay payments",
      category: "Full Stack",
      period: "Dec 2025 - Present",
      description:
        "Engineered the flagship web platform www.chotubot.com from scratch, implementing Figma design systems into responsive Next.js. Architected advanced back-office dashboard modules for inventory control, affiliate referral commissions, and international multi-currency delivery.",
      highlights: [
        "Built www.chotubot.com from scratch translating intricate Figma mockups into accessible, pixel-perfect UI",
        "Engineered comprehensive Inventory Management dashboard with live stock alerts, catalog sync, and warehouse logs",
        "Developed full-featured Affiliate Marketing engine with unique referral links, commission ledgers, and analytics",
        "Implemented International Delivery fulfillment with cross-border shipping workflows and dynamic currency conversion",
        "Integrated Razorpay payment gateway with cryptographically verified webhooks and auto-reconciliation routines",
        "Managed agile delivery via Jira Kanban boards and deployed via automated GitLab CI/CD pipelines",
      ],
      tags: [
        "Next.js",
        "TypeScript",
        "Figma to Code",
        "Supabase",
        "Razorpay",
        "Inventory System",
        "Affiliate Engine",
        "Jira Kanban",
        "GitLab CI/CD",
      ],
      liveUrl: "https://www.chotubot.com",
      githubUrl: "https://github.com/AkshayTelore",
      featured: true,
      metrics: [
        { label: "Origin", value: "Built from Scratch" },
        { label: "Dashboard", value: "Inventory & Affiliates" },
        { label: "Logistics", value: "International Delivery" },
      ],
    },
    {
      id: "docuesign",
      title: "DocuEsign — Digital Document Signing Platform",
      subtitle: "Secure enterprise e-signature SaaS with drag-and-drop coordinates, OTP 2FA, and credit management",
      category: "Full Stack",
      period: "July 2025 - Oct 2025",
      description:
        "Engineered a production-grade digital document signing platform replicating enterprise-grade DocuSign functionality. Supports PDF rendering, drag-and-drop signature placement, tamper-evident audit logs, and integrated with AppyMinds LMS.",
      highlights: [
        "Interactive drag-and-drop signature & initials placement with coordinate mapping on PDF canvases",
        "Two-factor OTP/email verification before signers can commit signatures",
        "Granular audit trails: client IP tracking, browser & device metadata logging, and chronological event ledger",
        "Credit deduction system controlling organization-level signing quotas",
        "Live integration with AppyMinds LMS enabling automated agreement dispatch upon student enrollment",
      ],
      tags: ["Next.js", "React.js", "MongoDB", "Redux", "Bootstrap", "NextAuth", "REST APIs", "Render"],
      liveUrl: "https://appyminds.com/products/esignsure",
      githubUrl: "https://github.com/AkshayTelore",
      featured: true,
      metrics: [
        { label: "Security", value: "OTP + 2FA" },
        { label: "Sign Placement", value: "Drag & Drop" },
        { label: "Audit Log", value: "IP & Device Tracked" },
      ],
    },
    {
      id: "appyminds-blog",
      title: "Blog Management Engine & Admin Suite",
      subtitle: "Enterprise headless CMS & content publishing system for AppyMinds.com",
      category: "Full Stack",
      period: "Feb 2025 - Mar 2025",
      description:
        "Architected a comprehensive blog management admin portal and public-facing content publishing engine for AppyMinds. Features secure JWT authentication, rich WYSIWYG editing, SEO meta tagging, and category classification.",
      highlights: [
        "Built administrative back-office with secure JWT token authentication and role-based privilege levels",
        "Full CRUD engine supporting draft staging, live publishing, archiving, and scheduled unpublishing",
        "Integrated full HTML WYSIWYG editor (CKEditor) paired with automatic URL slugification and asset validation",
        "Automated SEO optimization tools: custom OpenGraph tags, meta descriptions, image alt tags, and sitemap sync",
        "Directly bridged with the live AppyMinds website delivering lightning-fast server-rendered blog feeds",
      ],
      tags: ["Next.js", "Node.js", "JWT Auth", "CKEditor", "SEO Tools", "REST API", "Tailwind CSS"],
      liveUrl: "https://appyminds.com/blog",
      githubUrl: "https://github.com/AkshayTelore",
      featured: true,
      metrics: [
        { label: "Editor", value: "CKEditor + HTML" },
        { label: "Auth", value: "JWT & Roles" },
        { label: "Live Deployment", value: "appyminds.com" },
      ],
    },
    {
      id: "chotu-esp-app",
      title: "Chotu ESP IoT Companion Application",
      subtitle: "Cross-platform mobile application in Flutter & Dart for ESP hardware management",
      category: "Mobile / IoT",
      period: "2025 - Present",
      description:
        "Engineered the Chotu ESP mobile application using Flutter and Dart to provide zero-friction hardware provisioning, Wi-Fi pairing, real-time telemetry monitoring, and smart device configurations for ESP/IoT devices.",
      highlights: [
        "Built cross-platform responsive mobile user interfaces using Flutter and Dart",
        "Engineered ESP device discovery, Wi-Fi network credential provisioning, and socket telemetry",
        "Designed real-time control dashboards for device status, toggles, and sensor readouts",
        "Managed agile task tracking and milestone delivery using Jira Kanban boards",
      ],
      tags: ["Flutter", "Dart", "ESP32 / IoT", "Mobile App", "REST API", "Jira Kanban"],
      liveUrl: "https://www.chotubot.com",
      githubUrl: "https://github.com/AkshayTelore",
      featured: true,
      metrics: [
        { label: "Framework", value: "Flutter & Dart" },
        { label: "Hardware", value: "ESP Device Control" },
        { label: "Agile Tool", value: "Jira Kanban" },
      ],
    },
  ] as ProjectItem[],

  skills: {
    categories: [
      {
        title: "Frontend & Mobile",
        description: "Modern web interfaces & cross-platform mobile applications",
        skills: [
          { name: "Next.js", level: 95, highlight: true },
          { name: "React.js", level: 95, highlight: true },
          { name: "TypeScript", level: 92, highlight: true },
          { name: "Flutter & Dart (Mobile/IoT)", level: 88, highlight: true },
          { name: "Tailwind CSS", level: 95, highlight: true },
          { name: "Figma to Responsive Code", level: 94, highlight: true },
          { name: "Redux / Redux Toolkit", level: 86 },
          { name: "HTML5 / CSS3", level: 95 },
        ],
      },
      {
        title: "Backend & Systems",
        description: "Scalable REST APIs, databases, authentication & enterprise features",
        skills: [
          { name: "Node.js & Express.js", level: 90, highlight: true },
          { name: "Supabase (Backend/Auth/RLS)", level: 92, highlight: true },
          { name: "Inventory Management Engines", level: 92, highlight: true },
          { name: "Affiliate Marketing Architecture", level: 90, highlight: true },
          { name: "RESTful API Design", level: 94, highlight: true },
          { name: "NextAuth / JWT Auth", level: 90 },
          { name: "Python", level: 80 },
          { name: "C / C++", level: 78 },
        ],
      },
      {
        title: "Databases & Storage",
        description: "Relational, document, and cloud-native databases with RLS & migrations",
        skills: [
          { name: "PostgreSQL", level: 90, highlight: true },
          { name: "MongoDB", level: 88, highlight: true },
          { name: "Supabase Database", level: 92, highlight: true },
          { name: "Database Schema Modeling", level: 88 },
        ],
      },
      {
        title: "Fintech & Logistics",
        description: "Payment gateways, state webhooks, international delivery & automated emails",
        skills: [
          { name: "Razorpay Gateway & Webhooks", level: 95, highlight: true },
          { name: "International Delivery Workflows", level: 92, highlight: true },
          { name: "Dynamic Currency Conversion", level: 90 },
          { name: "PayU Integration", level: 85 },
          { name: "Transactional Email Systems", level: 88 },
        ],
      },
      {
        title: "Project Management & DevOps",
        description: "Agile delivery, cloud hosting, CI/CD pipelines & version control",
        skills: [
          { name: "Jira Kanban Boards & Agile", level: 94, highlight: true },
          { name: "Git & GitHub", level: 95, highlight: true },
          { name: "GitLab CI/CD", level: 88, highlight: true },
          { name: "Render Cloud Deployment", level: 92, highlight: true },
          { name: "Postman API Testing", level: 92 },
          { name: "VS Code", level: 95 },
        ],
      },
    ] as SkillCategory[],
  },

  achievements: [
    {
      id: "dance",
      title: "1st Prize in Group Dance Competition",
      organization: "MES Garware College Annual Cultural Fest",
      period: "3rd Year Degree",
      description: "Secured first position competing against top college teams, recognized with trophy and official certificate of merit.",
      badge: "Cultural Excellence",
      icon: "trophy",
    },
    {
      id: "college-cricket",
      title: "College Cricket Team Player",
      organization: "MES Abasaheb Garware College",
      period: "2nd & 3rd Years",
      description: "Represented the varsity cricket squad in inter-collegiate tournaments as an all-round contributor.",
      badge: "Varsity Sports",
      icon: "activity",
    },
    {
      id: "district-cricket",
      title: "University Cricket – District Level Selection",
      organization: "University Sports Board",
      period: "District Tournaments",
      description: "Selected to compete in high-stakes university under-matches at the district level for competitive cricket.",
      badge: "District Athlete",
      icon: "award",
    },
  ],

  renderDeployment: {
    serviceType: "Web Service",
    runtime: "Node",
    buildCommand: "npm install && npm run build",
    startCommand: "npm start",
    envVars: [
      { key: "NODE_VERSION", value: "20.x or 22.x" },
      { key: "PORT", value: "Render dynamic port assigned automatically" },
    ],
  },
};
