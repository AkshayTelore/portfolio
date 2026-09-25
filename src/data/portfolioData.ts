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
  category: "Full Stack" | "Frontend" | "Backend / Integration" | "E-Commerce";
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
  skills: { name: string; level?: number; highlight?: boolean }[];
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Akshay Pandurang Telore",
    shortName: "Akshay Telore",
    role: "Full Stack Developer",
    tagline: "Building scalable e-commerce platforms, payment gateways & reliable web applications.",
    bio: "Hi, I'm Akshay! I'm a Full Stack Developer based in Pune, India. I hold a Master's in Computer Applications (MCA) with distinction (9.18 CGPA). At Dextop, I worked on Chotubot.com as a Full Stack Developer across the entire lifecycle—from translating Figma designs into responsive React/Next.js interfaces to implementing coupon codes, affiliate marketing, Razorpay and PayU payments, Shiprocket and international shipping, and internal inventory management dashboards with Supabase and PostgreSQL.",
    email: "teloreakshay1000@gmail.com",
    phone: "+91 9172925369",
    rawPhone: "+919172925369",
    location: "Karve Nagar, Pune, Maharashtra 411052, India",
    city: "Pune, India",
    linkedin: "https://www.linkedin.com/in/akshay-telore-209934251",
    github: "https://github.com/AkshayTelore",
    status: "Open to Full-time Opportunities",
    dateOfBirth: "2 May 2003",
    nationality: "Indian",
    languages: ["English", "Marathi", "Hindi"],
    hobbies: ["Exploring New Tech & AI", "Watching Tech Cinema", "Playing Video Games", "Competitive Cricket"],
  },

  education: {
    degree: "Master of Computer Applications (MCA)",
    institution: "MES Abasaheb Garware College, Pune",
    period: "2023 - 2025",
    cgpa: "9.18",
    status: "Completed (Distinction)",
    highlights: [
      "Graduated with distinction (9.18 CGPA)",
      "Played for the college cricket team for 2 consecutive years",
      "Won 1st prize in university-level group dance competition",
    ],
    qualifications: [
      {
        id: "mca",
        degree: "Master of Computer Applications (MCA)",
        institution: "MES Abasaheb Garware College, Pune",
        period: "2023 - 2025",
        score: "9.18 CGPA",
        badge: "Post Graduation • Distinction",
        details: "Full stack engineering, database architectures, and distributed web platforms.",
      },
      {
        id: "bsc-physics",
        degree: "Bachelor of Science (B.Sc.) in Physics",
        institution: "New Arts, Commerce and Science College, Shevgaon",
        score: "80.42% (8.86 CGPA)",
        badge: "Graduation",
        details: "Analytical mechanics, optics, mathematical modeling, and experimental physics.",
      },
      {
        id: "hsc",
        degree: "Higher Secondary Certificate (HSC - 12th)",
        institution: "New Arts, Commerce and Science College, Shevgaon",
        score: "69.85%",
        badge: "Higher Secondary",
        details: "Science stream with Physics, Chemistry, Mathematics, and Biology.",
      },
      {
        id: "ssc",
        degree: "Secondary School Certificate (SSC - 10th)",
        institution: "Chapadgaon Highschool, Chapadgaon",
        score: "88.40%",
        badge: "Secondary School",
        details: "Distinction with excellence in Mathematics, Science, and Languages.",
      },
    ],
  },

  experiences: [
    {
      id: "dextop",
      role: "Full Stack Developer / Associate Software Developer",
      company: "Dextop Gadget Pvt. Ltd.",
      website: "https://www.chotubot.com",
      period: "Dec 2025 - Present",
      location: "Pune, India",
      badge: "Current Role",
      points: [
        "Implemented the Chotubot.com e-commerce platform in react, supabase, nodejs,based on Figma designs, crafting responsive interfaces for Hero, Buy Now, Chotu Special, Modes, Creativity, Instagram/IG, and checkout sections across desktop, tablet, and mobile.",
        "Engineered an end-to-end Coupon Code System supporting fixed discounts, percentage discounts, and free shipping with real-time validation, expiry checks, and visit tracking.",
        "Built the Affiliate Marketing functionality to track referral visits via localStorage/sessionStorage, manage affiliate-coupon relationships, and record conversion attributions in the database.",
        "Integrated Razorpay (including Magic Checkout) and PayU payment gateways; built server-side verification and webhook handling to guarantee order updates even when client payment flows are interrupted.",
        "Implemented International Currency & Shipping workflows using REST Countries and exchange-rate APIs for dynamic conversion, country detection, and cross-border shipping calculations.",
        "Integrated Shiprocket fulfillment APIs for domestic Indian shipments, handling address validation, shipment creation, and tracking information.",
        "Contributed to the internal Inventory & Order Management Dashboard to monitor product stock, order statuses, payments, and fulfillment updates.",
        "Designed and maintained Supabase and PostgreSQL tables for orders, coupons, visits, shipping costs, and customer data with Row Level Security (RLS) policies.",
        "Collaborated with the team via GitLab using feature branches, merge requests, code reviews, and automated CI/CD deployment pipelines.",
        "Optimized web performance using Intersection Observer, lazy-loaded videos, WebP image compression, and code splitting.",
      ],
      skills: [
        "React.js",
        "Next.js",
        "TypeScript",
        "Node.js",
        "Supabase",
        "PostgreSQL",
        "REST APIs",
        "Razorpay",
        "PayU",
        "Shiprocket",
        "GitLab CI/CD",
        "Figma to Code",
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
        "Core engineer on 'DocuEsign'—a digital document signing web application with drag-and-drop signature placement directly onto PDFs.",
        "Implemented secure two-step email/OTP verification and an organization credit quota system to keep document signing safe and controlled.",
        "Built detailed audit trails capturing timestamps, IP addresses, and device info for complete legal verification.",
        "Created clean Next.js REST APIs and thoroughly tested them with automated Postman collections.",
        "Integrated DocuEsign directly with AppyMinds LMS to automatically send agreements when students enroll.",
        "Rebuilt key UI components using React, Bootstrap, and Redux Toolkit under Git version control.",
      ],
      skills: ["Next.js", "React.js", "MongoDB", "Redux Toolkit", "Bootstrap", "NextAuth", "REST APIs", "Postman", "Git"],
    },
  ] as ExperienceItem[],

  projects: [
    {
      id: "chotubot-platform",
      title: "Chotubot.com — Full-Stack E-commerce Platform",
      subtitle: "Production storefront from Figma, coupon engine, affiliate tracking, Razorpay/PayU & inventory dashboard",
      category: "Full Stack",
      period: "Dec 2025 - Present",
      description:
        "At Dextop, I worked on Chotubot.com as a Full Stack Developer from UI implementation to backend development and production deployment. I converted Figma designs into responsive React/Next.js interfaces, implemented features such as coupon codes and affiliate marketing, integrated Razorpay and PayU payments, worked on international currency and shipping, and contributed to the inventory and order management dashboard. On the backend, I worked with Node.js, Supabase and PostgreSQL, and managed deployments using GitLab CI/CD.",
      highlights: [
        "Converted Figma designs into responsive react js interfaces (Hero, Buy Now, Chotu Special, Modes, Creativity, Instagram, and checkout).",
        "Engineered a Coupon System supporting fixed, percentage, and free shipping discounts with active validation and visit tracking.",
        "Implemented Affiliate Marketing referral tracking using storage and database records to attribute customer conversions.",
        "Integrated Razorpay (with Magic Checkout) and PayU payments with server-side webhook handlers to ensure order reliability.",
        "Built International Currency & Shipping flows with exchange rates and Shiprocket for domestic fulfillment.",
        "Contributed to the internal Inventory & Order Management Dashboard for tracking stock, orders, and payment states.",
        "Designed Supabase/PostgreSQL database structures with Row Level Security (RLS) policies.",
        "Optimized frontend performance with Intersection Observer, lazy loading, WebP assets, and code splitting.",
      ],
      tags: [
        "React.js",
        "Next.js",
        "TypeScript",
        "Node.js",
        "Supabase",
        "PostgreSQL",
        "Razorpay",
        "PayU",
        "Shiprocket",
        "GitLab CI/CD",
      ],
      liveUrl: "https://www.chotubot.com",
      githubUrl: "https://github.com/AkshayTelore",
      featured: true,
      metrics: [
        { label: "Role", value: "Full Stack Developer" },
        { label: "Payments", value: "Razorpay & PayU" },
        { label: "Fulfillment", value: "Shiprocket & Global" },
      ],
    },
    {
      id: "docuesign",
      title: "DocuEsign — Digital Document Signing",
      subtitle: "E-signature web platform with drag-and-drop PDF placement, OTP verification, and audit trails",
      category: "Full Stack",
      period: "July 2025 - Oct 2025",
      description:
        "A secure e-signature web platform that lets users upload PDFs, place signatures and initials anywhere on the page, and send documents out for signing. Built with two-factor email OTP verification to keep sign-offs authentic, and linked directly with the AppyMinds LMS platform for student onboarding agreements.",
      highlights: [
        "Built interactive drag-and-drop signature and initials placement directly onto PDF pages.",
        "Added email OTP verification so signers confirm their identity before signing.",
        "Recorded clear audit trails with timestamps, IP addresses, and device info for legal traceability.",
        "Created an organization credit system to monitor and manage signing quotas.",
        "Integrated with AppyMinds LMS to automatically send agreements when students enroll.",
      ],
      tags: ["Next.js", "React.js", "MongoDB", "Redux", "Bootstrap", "NextAuth", "REST APIs", "Render"],
      liveUrl: "https://appyminds.com/products/esignsure",
      githubUrl: "https://github.com/AkshayTelore",
      featured: true,
      metrics: [
        { label: "Signature Flow", value: "Drag & Drop Canvas" },
        { label: "Verification", value: "Email OTP (2FA)" },
        { label: "Compliance", value: "Audit Trail & IP Tracking" },
      ],
    },
    {
      id: "appyminds-blog",
      title: "AppyMinds Blog & Content CMS",
      subtitle: "Publishing platform and admin editor powering articles on appyminds.com/blog",
      category: "Full Stack",
      period: "Feb 2025 - Mar 2025",
      description:
        "A custom blog management tool created for the AppyMinds marketing and content team. It gives writers and editors an intuitive WYSIWYG editor, draft staging, scheduled publishing, and automatic SEO tag generation so articles rank well on search engines.",
      highlights: [
        "Private admin portal with secure login and role permissions for writers and editors.",
        "Integrated rich text editor (CKEditor) with image uploading and clean HTML generation.",
        "Automated SEO meta tags, social share previews (OpenGraph), and clean URL slugs.",
        "Connected directly with the live website at appyminds.com/blog for instant publishing.",
      ],
      tags: ["Next.js", "Node.js", "JWT Auth", "CKEditor", "SEO Tools", "REST API", "Tailwind CSS"],
      liveUrl: "https://appyminds.com/blog",
      githubUrl: "https://github.com/AkshayTelore",
      featured: true,
      metrics: [
        { label: "Live On", value: "appyminds.com/blog" },
        { label: "Editor", value: "CKEditor WYSIWYG" },
        { label: "SEO", value: "Automated Metadata" },
      ],
    },
  ] as ProjectItem[],

  skills: {
    categories: [
      {
        title: "Frontend Development",
        description: "Pixel-perfect, accessible, and high-performance user interfaces",
        skills: [
          { name: "Next.js", highlight: true },
          { name: "React.js", highlight: true },
          { name: "TypeScript", highlight: true },
          { name: "Tailwind CSS", highlight: true },
          { name: "Figma to Responsive Code", highlight: true },
          { name: "Intersection Observer & Lazy Loading", highlight: true },
          { name: "Image & Video Optimization (WebP)", highlight: true },
          { name: "Component-Based Architecture", highlight: true },
        ],
      },
      {
        title: "Backend & Databases",
        description: "Secure APIs, database schema design, and server-side logic",
        skills: [
          { name: "Node.js & Express", highlight: true },
          { name: "Supabase (Auth & Database)", highlight: true },
          { name: "PostgreSQL", highlight: true },
          { name: "Row Level Security (RLS)", highlight: true },
          { name: "MongoDB", highlight: true },
          { name: "RESTful API Design", highlight: true },
          { name: "NextAuth & JWT Security" },
        ],
      },
      {
        title: "Payments & Checkout Systems",
        description: "Resilient online payment flows, webhooks & order reconciliation",
        skills: [
          { name: "Razorpay Gateway & Magic Checkout", highlight: true },
          { name: "Server-side Webhook Verification", highlight: true },
          { name: "Interrupted Flow Reconciliation", highlight: true },
          { name: "PayU Payment Integration", highlight: true },
          { name: "Automated Refunds & Failure Recovery", highlight: true },
        ],
      },
      {
        title: "E-Commerce & Logistics",
        description: "Coupons, affiliates, international currency, and shipping",
        skills: [
          { name: "Coupon Code System (Fixed / % / Free Shipping)", highlight: true },
          { name: "Affiliate Referral Tracking & Attribution", highlight: true },
          { name: "Shiprocket Fulfillment Integration", highlight: true },
          { name: "International Currency & Shipping APIs", highlight: true },
          { name: "Inventory & Order Management Dashboard", highlight: true },
        ],
      },
      {
        title: "DevOps & Team Collaboration",
        description: "Version control, CI/CD pipelines, and agile workflows",
        skills: [
          { name: "GitLab (Merge Requests & Branches)", highlight: true },
          { name: "GitLab CI/CD Pipelines", highlight: true },
          { name: "Git & GitHub", highlight: true },
          { name: "Jira Kanban Boards", highlight: true },
          { name: "Postman API Testing", highlight: true },
          { name: "Vercel & Render Deployment", highlight: true },
        ],
      },
    ] as SkillCategory[],
  },

  achievements: [
    {
      id: "academics",
      title: "Master of Computer Applications (MCA) – 9.18 CGPA",
      organization: "MES Abasaheb Garware College, Pune",
      period: "2023 - 2025",
      description: "Graduated with top academic distinction (9.18 CGPA), focusing on advanced software engineering, cloud databases, and web architectures.",
      badge: "Academic Distinction",
      icon: "trophy",
    },
    {
      id: "college-cricket",
      title: "College Cricket Team Player",
      organization: "MES Abasaheb Garware College",
      period: "2023 - 2025",
      description: "Represented the college varsity cricket team in inter-collegiate tournaments for two consecutive years as an all-round contributor.",
      badge: "Varsity Cricket",
      icon: "activity",
    },
    {
      id: "dance",
      title: "1st Prize in University Group Dance",
      organization: "College Annual Cultural Fest",
      period: "Degree Cultural Fest",
      description: "Led and performed with the college group dance team to secure first prize among competing institutions across Pune.",
      badge: "Teamwork & Arts",
      icon: "award",
    },
  ],
};
