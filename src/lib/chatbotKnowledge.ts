import { PORTFOLIO_DATA } from "@/data/portfolioData";

export interface BotMessage {
  id: string;
  sender: "user" | "bot";
  text: string;
  timestamp: string;
  quickPrompts?: string[];
  actionLink?: {
    label: string;
    url: string;
    isExternal?: boolean;
  };
}

export const INITIAL_BOT_MESSAGE: BotMessage = {
  id: "welcome",
  sender: "bot",
  text: `👋 **Hi there! I'm Akshay's AI Assistant.**\n\nI can tell you everything about Akshay's background, production platforms (**Chotubot.com built from scratch**, **DocuEsign**, **AppyMinds Blog Engine**), mobile development in **Flutter & Dart (Chotu ESP)**, tech stack (**Next.js, Supabase, Razorpay**), agile workflows (**Jira Kanban**), or how to contact him!\n\nWhat would you like to explore?`,
  timestamp: "Just now",
  quickPrompts: [
    "Work at Chotubot.com",
    "Tell me about DocuEsign",
    "Chotu ESP App (Flutter/Dart)",
    "Inventory & Affiliate features",
    "What is Akshay's tech stack?",
    "Jira Kanban & Agile",
  ],
};

export function answerAkshayQuestion(rawQuery: string): {
  text: string;
  quickPrompts?: string[];
  actionLink?: { label: string; url: string; isExternal?: boolean };
} {
  const query = rawQuery.toLowerCase().trim();

  // 1. Chotubot.com / Dextop experience
  if (
    query.includes("chotubot") ||
    query.includes("dextop") ||
    query.includes("from scratch") ||
    query.includes("figma") ||
    query.includes("current role")
  ) {
    return {
      text: `🚀 **Associate Software Developer at Dextop — www.chotubot.com (Dec 2025 - Present)**\n\nAkshay has made substantial engineering contributions at Dextop:\n\n• **Built from Scratch:** Developed the entire **www.chotubot.com** web platform from scratch as lead full-stack developer.\n• **Figma to Code:** Translated complex, intricate Figma UI/UX designs into pixel-perfect, responsive Next.js & TypeScript components.\n• **Inventory Management Dashboard:** Engineered a real-time inventory management system for product stock levels, warehouse alerts, and catalog sync.\n• **Affiliate Marketing Feature:** Built complete affiliate marketing architecture with custom referral tracking links, conversion analytics, and commission ledgers.\n• **International Delivery:** Implemented international shipping compliance, cross-border fulfillment, dynamic currency conversion, and global tracking checkpoints.\n• **Payment Gateways:** Integrated **Razorpay** with HMAC SHA256 webhook state verification and automated refund routines.\n• **Chotu ESP Mobile App:** Developed the companion mobile app in **Flutter and Dart** for smart ESP/IoT hardware management.\n• **Agile Delivery:** Leveraged **Jira Kanban boards** for sprint planning, task tracking, and iterative releases.`,
      quickPrompts: ["Chotu ESP Flutter App", "Inventory & Affiliate details", "DocuEsign platform", "Contact Akshay"],
      actionLink: {
        label: "Visit www.chotubot.com",
        url: "https://www.chotubot.com",
        isExternal: true,
      },
    };
  }

  // 2. Chotu ESP App / Flutter / Dart / Mobile / IoT
  if (
    query.includes("flutter") ||
    query.includes("dart") ||
    query.includes("esp") ||
    query.includes("mobile") ||
    query.includes("iot") ||
    query.includes("app")
  ) {
    return {
      text: `📱 **Chotu ESP Mobile Application (Flutter & Dart)**\n\nAkshay engineered the companion mobile application for Chotu's smart hardware ecosystem:\n\n• **Tech Stack:** Flutter & Dart cross-platform mobile development for iOS & Android.\n• **Hardware Provisioning:** Seamless Wi-Fi credential provisioning, Bluetooth/AP device discovery, and hardware configuration for ESP32/ESP microcontrollers.\n• **Real-time Telemetry:** Live telemetry monitoring, sensor status, switch controls, and cloud state synchronization.\n• **Agile Management:** Maintained feature delivery and sprints using **Jira Kanban boards**.`,
      quickPrompts: ["Chotubot.com details", "DocuEsign details", "Tech stack", "Contact Akshay"],
      actionLink: {
        label: "Visit Chotubot.com",
        url: "https://www.chotubot.com",
        isExternal: true,
      },
    };
  }

  // 3. Inventory Management & Affiliate Marketing
  if (
    query.includes("inventory") ||
    query.includes("affiliate") ||
    query.includes("referral") ||
    query.includes("commission") ||
    query.includes("stock")
  ) {
    return {
      text: `📦 **Inventory Management & Affiliate Marketing Systems:**\n\nBuilt by Akshay for **chotubot.com**:\n\n• **Inventory Management Dashboard:**\n  - Real-time stock level monitoring and low-inventory alerts.\n  - Multi-warehouse fulfillment routing and product catalog synchronization.\n  - Automated restock notifications and inventory audits.\n\n• **Affiliate Marketing Engine:**\n  - Unique affiliate referral URL and code generation.\n  - Real-time click tracking, conversion attribution, and cookie-based tracking.\n  - Commission calculation ledger, affiliate analytics dashboard, and payout workflows.`,
      quickPrompts: ["International delivery", "Built Chotubot from scratch", "Tech stack", "Contact Akshay"],
    };
  }

  // 4. International Delivery / Shipping / Global Logistics
  if (
    query.includes("international") ||
    query.includes("delivery") ||
    query.includes("shipping") ||
    query.includes("logistics")
  ) {
    return {
      text: `🌍 **International Delivery & Logistics Engine:**\n\nEngineered by Akshay for **chotubot.com**:\n\n• **Cross-Border Delivery:** Implemented international shipping rules, customs compliance fields, and multi-carrier API integration.\n• **Dynamic Currency Conversion:** Real-time exchange rate conversion allowing international customers to pay in their localized currencies.\n• **Live Tracking:** Checkpoint tracking from warehouse dispatch to customs clearance and final doorstep delivery.`,
      quickPrompts: ["Razorpay & Payments", "Chotubot Platform", "Contact Akshay"],
    };
  }

  // 5. Jira / Kanban / Agile Task Management
  if (
    query.includes("jira") ||
    query.includes("kanban") ||
    query.includes("agile") ||
    query.includes("sprint") ||
    query.includes("task management")
  ) {
    return {
      text: `📋 **Agile & Task Management with Jira Kanban:**\n\nAkshay is well-versed in professional agile delivery workflows:\n\n• **Jira Kanban Boards:** End-to-end task lifecycle management, WIP (Work In Progress) limits, backlog grooming, and sprint tracking.\n• **Bug Triage & Releases:** Milestone planning, issue prioritization, and automated status syncing with Git/GitLab commits.\n• **Collaborative Workflows:** Coordinating cross-functional deliverables between design (Figma), hardware engineering, and backend services.`,
      quickPrompts: ["Work at Chotubot", "Tech Stack", "Contact Akshay"],
    };
  }

  // 6. DocuEsign Project
  if (
    query.includes("docuesign") ||
    query.includes("docu-esign") ||
    query.includes("esign") ||
    query.includes("signature") ||
    query.includes("drag-drop") ||
    query.includes("document signing")
  ) {
    return {
      text: `📄 **DocuEsign — Digital Document Signing Platform**\n\nAkshay built this during his Full Stack Developer Internship at **SASH Info Pvt. Ltd**:\n\n• **Core Features:** Interactive drag-and-drop PDF signature & initials placement with coordinate mapping.\n• **Security & Verification:** Two-Factor OTP & email verification before committing signatures.\n• **Audit Trail & Forensics:** Captures IP geolocation, browser/device metadata, and chronological activity ledger for legal compliance.\n• **Credit Quota System:** Organization-level signing credit deduction.\n• **AppyMinds LMS Integration:** Direct bridge with AppyMinds LMS for auto-generating agreements upon student enrollment.\n• **Tech Stack:** Next.js, React.js, MongoDB, Redux, Bootstrap, NextAuth, REST APIs.`,
      quickPrompts: ["Open DocuEsign Live", "Tell me about AppyMinds Blog", "Akshay's tech stack", "Contact Akshay"],
      actionLink: {
        label: "Open DocuEsign on AppyMinds",
        url: "https://appyminds.com/products/esignsure",
        isExternal: true,
      },
    };
  }

  // 7. AppyMinds Blog Management
  if (
    query.includes("appyminds") ||
    query.includes("blog") ||
    query.includes("cms") ||
    query.includes("ckeditor") ||
    query.includes("admin panel")
  ) {
    return {
      text: `✍️ **Blog Management Feature — AppyMinds.com**\n\nAkshay architected a complete blog management admin panel and public-facing engine for **AppyMinds.com** (Feb 2025 – Mar 2025):\n\n• **Admin Panel:** Secure JWT login with role-based access control (RBAC).\n• **Full CRUD Engine:** Staging drafts, publishing, archiving, category tagging, and scheduled unpublishing.\n• **HTML Editor:** Integrated CKEditor WYSIWYG with automatic slug generation and featured image validations.\n• **SEO Optimization:** Dynamic OpenGraph tags, meta descriptions, image alt tags, and sitemap synchronization.\n• **Live Site Integration:** Directly connected the admin panel to the live production AppyMinds website at appyminds.com/blog.`,
      quickPrompts: ["View Live Blog", "Tell me about Chotubot.com", "What skills does Akshay have?", "Contact Akshay"],
      actionLink: {
        label: "Visit Live AppyMinds Blog",
        url: "https://appyminds.com/blog",
        isExternal: true,
      },
    };
  }

  // 8. SASH Info Internship
  if (query.includes("sash") || query.includes("intern") || query.includes("internship")) {
    return {
      text: `🏢 **Full Stack Developer Intern at SASH Info Pvt. Ltd (July 2025 – Oct 2025)**\n\n• Worked on flagship products: **DocuEsign**, **eductrl.com**, and **clientctrl.app**.\n• Built secure document upload, signature coordinates, OTP/email verification, and credit tracking.\n• Implemented device/IP logging and real-time activity status transitions.\n• Integrated DocuEsign into AppyMinds LMS.\n• Used Next.js, React, Bootstrap, Redux Toolkit, and tested endpoints thoroughly with Postman.`,
      quickPrompts: ["DocuEsign details", "AppyMinds Blog", "Tech Stack", "Contact Akshay"],
    };
  }

  // 9. Tech Stack & Skills
  if (
    query.includes("skill") ||
    query.includes("tech") ||
    query.includes("stack") ||
    query.includes("programming") ||
    query.includes("frontend") ||
    query.includes("backend") ||
    query.includes("language")
  ) {
    return {
      text: `🛠️ **Akshay's Core Technical Arsenal:**\n\n• **Frontend & Mobile:** Next.js (App Router), React.js, TypeScript, **Flutter & Dart (Mobile/IoT)**, Tailwind CSS, Figma to Code, Redux Toolkit, Bootstrap.\n• **Backend & Distributed Systems:** Node.js, Express.js, Supabase (with RLS), RESTful API Architecture, NextAuth, JWT, Python, C/C++.\n• **E-Commerce & Enterprise:** Inventory Management Dashboards, Affiliate Marketing Engines, International Delivery Workflows.\n• **Databases:** PostgreSQL, MongoDB, Supabase Database.\n• **Payments:** Razorpay (Signature Verification, Webhooks & Automated Refunds), PayU, Currency Conversion APIs.\n• **DevOps & Agile:** Jira Kanban Boards, Git, GitHub, GitLab CI/CD, Render, Postman, VS Code.`,
      quickPrompts: ["Built Chotubot from scratch", "Chotu ESP Flutter App", "DocuEsign", "Contact Akshay"],
    };
  }

  // 10. Payments / Razorpay / Webhooks
  if (
    query.includes("payment") ||
    query.includes("razorpay") ||
    query.includes("payu") ||
    query.includes("webhook")
  ) {
    return {
      text: `💳 **Payments & Gateway Engineering:**\n\nAkshay has deep production experience with:\n\n• **Razorpay:** Full checkout integration, HMAC SHA256 signature verification, webhook processing for payment captured / failed events, and automated refunds on chotubot.com.\n• **Multi-Currency:** Dynamic currency conversion for international cross-border transactions.\n• **Order Management:** Real-time synchronization between payment states, inventory deductions, and shipping status.`,
      quickPrompts: ["Chotubot Platform", "Inventory & Affiliate", "Contact Akshay"],
    };
  }

  // 11. Education & Academic Background
  if (
    query.includes("education") ||
    query.includes("college") ||
    query.includes("degree") ||
    query.includes("mca") ||
    query.includes("cgpa") ||
    query.includes("university") ||
    query.includes("study")
  ) {
    return {
      text: `🎓 **Education & Academics:**\n\n• **Degree:** Master of Computer Applications (MCA)\n• **Institution:** MES Abasaheb Garware College, Pune\n• **Timeline:** 2023 – 2025\n• **Academic Record:** CGPA **9.18** (Graduated with distinction!)\n• **Highlights:** College Cricket Team (2 years) & Winner of 1st Prize in Group Dance Competition.`,
      quickPrompts: ["Sports & Achievements", "Work experience", "DocuEsign", "Contact Akshay"],
    };
  }

  // 12. Contact & Social Profiles
  if (
    query.includes("contact") ||
    query.includes("email") ||
    query.includes("phone") ||
    query.includes("mobile") ||
    query.includes("reach") ||
    query.includes("hire") ||
    query.includes("linkedin") ||
    query.includes("github") ||
    query.includes("location") ||
    query.includes("where")
  ) {
    return {
      text: `📬 **Connect with Akshay Telore:**\n\n• **Email:** [teloreakshay1000@gmail.com](mailto:teloreakshay1000@gmail.com)\n• **Phone:** [+91 9172925369](tel:+919172925369)\n• **Location:** Karve Nagar, Pune, Maharashtra 411052, India\n• **LinkedIn:** [linkedin.com/in/akshay-telore-209934251](https://www.linkedin.com/in/akshay-telore-209934251)\n• **GitHub:** [github.com/AkshayTelore](https://github.com/AkshayTelore)\n\n✨ Feel free to send a message via the Contact section below!`,
      quickPrompts: ["Open GitHub", "Open LinkedIn", "Akshay's Projects", "Tech Stack"],
      actionLink: {
        label: "Visit Akshay's GitHub Profile",
        url: "https://github.com/AkshayTelore",
        isExternal: true,
      },
    };
  }

  // 13. Deployment on Render
  if (
    query.includes("render") ||
    query.includes("deploy") ||
    query.includes("deployment") ||
    query.includes("host") ||
    query.includes("server")
  ) {
    return {
      text: `🚀 **Render Deployment Setup:**\n\nThis portfolio and Akshay's applications are configured specifically for **Render**:\n\n• **Web Service:** Configured via \`render.yaml\` with dynamic port binding (\`PORT\` env variable).\n• **Build Command:** \`npm install && npm run build\`\n• **Start Command:** \`npm start\`\n• **Production-Optimized:** Next.js standalone caching and asset compression.`,
      quickPrompts: ["Tech Stack", "DocuEsign", "AppyMinds Blog", "Contact Akshay"],
    };
  }

  // 14. Achievements & Hobbies
  if (
    query.includes("achievement") ||
    query.includes("cricket") ||
    query.includes("dance") ||
    query.includes("hobby") ||
    query.includes("sports") ||
    query.includes("personal")
  ) {
    return {
      text: `🏆 **Achievements & Personal Life:**\n\n• 🥇 **1st Prize in Group Dance Competition:** Won first place in college annual festival with official merit certificate.\n• 🏏 **College Cricket Team Player:** Represented MES Abasaheb Garware College in the 2nd & 3rd years.\n• 🏅 **University Cricket – District Level:** Selected for university under-matches at district level.\n• 🎮 **Hobbies:** Watching tech cinema & talks, playing video games, and competitive cricket.\n• 🗣️ **Languages:** Marathi, English, Hindi.`,
      quickPrompts: ["Education & CGPA", "Work experience", "Tech Stack", "Contact Akshay"],
    };
  }

  // 15. General About Me / Introduction
  if (
    query.includes("who is") ||
    query.includes("about") ||
    query.includes("introduce") ||
    query.includes("hello") ||
    query.includes("hi") ||
    query.includes("hey") ||
    query.includes("akshay")
  ) {
    return {
      text: `👋 **Meet Akshay Pandurang Telore!**\n\nAkshay is a Pune-based **Full Stack Developer** specializing in **Next.js, React.js, TypeScript, Node.js, Supabase, Flutter, and Dart**.\n\nHe has built:\n1. **www.chotubot.com from scratch**: Complete web platform, Figma design implementation, Inventory Management dashboard, Affiliate Marketing, International Delivery, and the Chotu ESP IoT mobile app in Flutter.\n2. **DocuEsign**: Secure digital signing platform with drag-drop signatures and OTP 2FA.\n3. **AppyMinds Blog Engine**: Enterprise CMS with CKEditor and live publishing.\n\nHe uses **Jira Kanban boards** for agile delivery, completed his MCA with a **9.18 CGPA**, and is open to high-impact opportunities!`,
      quickPrompts: ["Tell me about Chotubot.com", "Chotu ESP Flutter App", "DocuEsign", "Contact Akshay"],
    };
  }

  // Default Fallback
  return {
    text: `Thanks for asking! I'm trained on Akshay Telore's full background. You can ask me about:\n\n• **www.chotubot.com** (Built from scratch, Inventory & Affiliate dashboards, International delivery)\n• **Chotu ESP App** (Flutter & Dart IoT companion app)\n• **DocuEsign** (Digital document signing platform)\n• **AppyMinds.com** (Blog management feature & admin suite)\n• **Agile Delivery** (Jira Kanban boards)\n• **Technical Skills** (Next.js, TypeScript, Supabase, Flutter, Razorpay)\n• **Education** (MCA, MES Garware College, 9.18 CGPA)\n• **Contact Details** (Email, Phone, Pune location, LinkedIn, GitHub)`,
    quickPrompts: [
      "Work at Chotubot.com",
      "Chotu ESP Flutter App",
      "Tell me about DocuEsign",
      "Inventory & Affiliate features",
    ],
  };
}
