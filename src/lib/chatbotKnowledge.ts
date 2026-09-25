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
  text: `👋 **Hi there! I'm Akshay's Assistant.**\n\nI can help you learn more about Akshay's work on **Chotubot.com** (built at Dextop from Figma to production), **DocuEsign SaaS**, his tech stack (**React, Next.js, Node.js, Supabase, Razorpay, PayU, Shiprocket**), his education (**MCA 9.18 CGPA**), or how to get in touch.\n\nWhat would you like to explore?`,
  timestamp: "Just now",
  quickPrompts: [
    "Work at Chotubot.com",
    "Coupon & Affiliate systems",
    "Razorpay & PayU payments",
    "DocuEsign SaaS",
    "Akshay's Tech Stack",
    "Contact Akshay",
  ],
};

export function answerAkshayQuestion(rawQuery: string): {
  text: string;
  quickPrompts?: string[];
  actionLink?: { label: string; url: string; isExternal?: boolean };
} {
  const query = rawQuery.toLowerCase().trim();

  // 0. Resume & CV Download
  if (
    query.includes("resume") ||
    query.includes("cv") ||
    query.includes("pdf") ||
    query.includes("download") ||
    query.includes("biodata")
  ) {
    return {
      text: `📄 **Akshay Telore — Resume (PDF)**\n\nYou can download Akshay's complete professional resume covering:\n\n• **Experience:** Dextop Gadget Pvt. Ltd. (Chotubot.com full-stack e-commerce) & SASH Info (DocuEsign SaaS)\n• **Core Projects:** E-commerce storefront, coupons, affiliate tracking, inventory dashboard, DocuEsign, AppyMinds blog CMS\n• **Tech Stack:** React, Next.js, TypeScript, Node.js, Supabase, PostgreSQL, Razorpay, PayU, Shiprocket, GitLab CI/CD\n• **Education:** MCA from Garware College, Pune with distinction (9.18 CGPA)\n\nClick below to download the PDF:`,
      quickPrompts: ["Work at Chotubot.com", "Razorpay & PayU payments", "DocuEsign SaaS", "Contact Akshay"],
      actionLink: {
        label: "📥 Download Resume (PDF)",
        url: "/Akshay_Telore_Resume.pdf",
        isExternal: true,
      },
    };
  }

  // 1. Chotubot.com / Dextop overall experience
  if (
    query.includes("chotubot") ||
    query.includes("dextop") ||
    query.includes("ecommerce") ||
    query.includes("e-commerce") ||
    query.includes("current role")
  ) {
    return {
      text: `🚀 **Full Stack Developer at Dextop Gadget Pvt. Ltd. — Chotubot.com**\n\nAkshay was involved in Chotubot.com across the entire lifecycle from UI implementation to backend development and production deployment:\n\n• **Figma to Code:** Converted Figma designs into responsive React/Next.js interfaces for Hero, Buy Now, Chotu Special, Modes, Creativity, Instagram/IG, and checkout sections.\n• **Coupon System:** Built multi-tier discount engine (fixed, percentage, free shipping) with real-time validation and visit tracking.\n• **Affiliate Marketing:** Built referral tracking via storage, visitor identification, and database conversion records.\n• **Payments:** Integrated Razorpay (with Magic Checkout) and PayU with server-side webhook verification for interrupted flow reconciliation.\n• **Shipping & Logistics:** Implemented international multi-currency pricing and Shiprocket fulfillment for domestic orders.\n• **Dashboard:** Contributed to internal inventory and order management dashboard.\n• **Backend & DevOps:** Node.js, Supabase/PostgreSQL with RLS, and GitLab CI/CD release pipelines.`,
      quickPrompts: ["Coupon & Affiliate systems", "Razorpay & PayU payments", "DocuEsign SaaS", "Contact Akshay"],
      actionLink: {
        label: "Visit www.chotubot.com",
        url: "https://www.chotubot.com",
        isExternal: true,
      },
    };
  }

  // 2. Frontend Development & Figma to Code
  if (
    query.includes("figma") ||
    query.includes("frontend") ||
    query.includes("ui") ||
    query.includes("responsive") ||
    query.includes("performance") ||
    query.includes("lazy")
  ) {
    return {
      text: `🎨 **Frontend Engineering on Chotubot.com:**\n\nAkshay implemented pixel-accurate responsive web pages directly from Figma:\n\n• **Key Sections Developed:** Hero Section, Buy Now Section, Chotu Special Section, Modes Section, Creativity Section, Instagram/IG Section, and Product/Checkout flows.\n• **Responsive Layouts:** Custom tailored layouts for desktop, tablet, and mobile.\n• **Performance Optimizations:** Intersection Observer, lazy-loaded videos, WebP asset compression, code splitting, and component-based architecture for smooth 60fps rendering.`,
      quickPrompts: ["Work at Chotubot.com", "Coupon & Affiliate systems", "Akshay's Tech Stack", "Contact Akshay"],
    };
  }

  // 3. Coupon Code System & Affiliate Marketing
  if (
    query.includes("coupon") ||
    query.includes("discount") ||
    query.includes("affiliate") ||
    query.includes("referral") ||
    query.includes("commission")
  ) {
    return {
      text: `🎟️ **Coupon Code System & Affiliate Marketing (Chotubot.com):**\n\n• **Coupon System:**\n  - Supported coupon types: Fixed discount, Percentage discount, and Free shipping.\n  - Real-time coupon validation, expiry/active status checks, and discount calculations during checkout.\n  - Database structure, invalid coupon prevention, and coupon visit tracking.\n\n• **Affiliate Marketing:**\n  - Tracks affiliate referrals and attributes customer orders to partners.\n  - Visitor identification using localStorage / sessionStorage.\n  - Coupon-affiliate relationships and database backend processing.`,
      quickPrompts: ["Razorpay & PayU payments", "Shiprocket & International shipping", "Work at Chotubot.com", "Contact Akshay"],
    };
  }

  // 4. Payments: Razorpay, PayU, and Webhook Reconciliation
  if (
    query.includes("payment") ||
    query.includes("razorpay") ||
    query.includes("payu") ||
    query.includes("webhook") ||
    query.includes("checkout")
  ) {
    return {
      text: `💳 **Payment Gateway Integrations (Chotubot.com):**\n\n• **Razorpay:** Order creation, payment initiation, Razorpay Magic Checkout, payment verification, and automated refund handling.\n• **Interrupted Flow Problem Solved:** Rather than relying solely on the client response, Akshay built server-side verification and webhook handling to guarantee order states are updated accurately even if the user drops connection or closes their browser.\n• **PayU Integration:** Payment creation, form submission, backend payment processing, and status handling as an alternate checkout provider.`,
      quickPrompts: ["Shiprocket & International shipping", "Work at Chotubot.com", "Inventory dashboard", "Contact Akshay"],
    };
  }

  // 5. Shipping: Shiprocket & International Currency
  if (
    query.includes("shipping") ||
    query.includes("shiprocket") ||
    query.includes("delivery") ||
    query.includes("international") ||
    query.includes("currency")
  ) {
    return {
      text: `📦 **Logistics, Shiprocket & International Shipping (Chotubot.com):**\n\n• **Shiprocket Integration:** Automated Indian domestic orders, customer address validation, shipping details, shipment creation, and tracking information.\n• **International Checkout:** Country selection, REST Countries API, exchange-rate APIs for live currency conversion, cross-border shipping charges, and final order calculation.`,
      quickPrompts: ["Razorpay & PayU payments", "Inventory dashboard", "Work at Chotubot.com", "Contact Akshay"],
    };
  }

  // 6. Inventory & Order Management Dashboard
  if (
    query.includes("inventory") ||
    query.includes("dashboard") ||
    query.includes("order management") ||
    query.includes("stock")
  ) {
    return {
      text: `📊 **Inventory & Order Management Dashboard:**\n\nContributed to the internal operations tool at Dextop to manage:\n\n• Products and catalog details.\n• Real-time stock counts and inventory updates.\n• Orders, payment verification status, and fulfillment tracking.\n• Customer and shipping details across both frontend UI and backend services.`,
      quickPrompts: ["Work at Chotubot.com", "Supabase & PostgreSQL", "Akshay's Tech Stack", "Contact Akshay"],
    };
  }

  // 7. Supabase, PostgreSQL & GitLab CI/CD
  if (
    query.includes("supabase") ||
    query.includes("postgres") ||
    query.includes("database") ||
    query.includes("gitlab") ||
    query.includes("ci/cd") ||
    query.includes("git")
  ) {
    return {
      text: `🗄️ **Database Architecture & DevOps at Dextop:**\n\n• **Supabase & PostgreSQL:** Designed tables and policies for orders, products, coupons, coupon visits, shipping costs, customer information, and affiliate tracking with Row Level Security (RLS).\n• **GitLab CI/CD:** Feature branching, bug-fix branches, pull/merge requests, code reviews, and automated build/deployment pipelines across dev and prod environments.`,
      quickPrompts: ["Work at Chotubot.com", "Razorpay & PayU payments", "Akshay's Tech Stack", "Contact Akshay"],
    };
  }

  // 8. DocuEsign Project
  if (
    query.includes("docuesign") ||
    query.includes("docu-esign") ||
    query.includes("esign") ||
    query.includes("signature") ||
    query.includes("document signing")
  ) {
    return {
      text: `📄 **DocuEsign — Digital Document Signing Platform:**\n\nBuilt by Akshay during his internship at **SASH Info Pvt. Ltd**:\n\n• **Drag-and-Drop Placement:** Users can drag signatures and initials anywhere onto PDF documents.\n• **Email OTP Verification:** Two-factor verification ensures that only intended recipients can sign.\n• **Audit Trail:** Logs timestamps, IP addresses, and device info for complete legal verification.\n• **LMS Integration:** Linked directly with the AppyMinds LMS platform so agreements are sent automatically upon student enrollment.\n• **Tech Stack:** Next.js, React, MongoDB, Redux Toolkit, and REST APIs.`,
      quickPrompts: ["Work at Chotubot.com", "AppyMinds Blog CMS", "Akshay's Tech Stack", "Contact Akshay"],
      actionLink: {
        label: "Open DocuEsign on AppyMinds",
        url: "https://appyminds.com/products/esignsure",
        isExternal: true,
      },
    };
  }

  // 9. AppyMinds Blog Management
  if (
    query.includes("appyminds") ||
    query.includes("blog") ||
    query.includes("cms") ||
    query.includes("ckeditor")
  ) {
    return {
      text: `✍️ **AppyMinds Blog & Content CMS:**\n\nAkshay built an intuitive blog management portal and public reading experience for **AppyMinds.com**:\n\n• **Admin Portal:** Secure login with role permissions for writers and editors.\n• **Rich Text Writing:** Integrated CKEditor WYSIWYG for formatting, links, and image uploads.\n• **Automated SEO:** Automatic generation of OpenGraph social previews, meta descriptions, and clean URLs.\n• **Live Deployment:** Directly powers the published articles at appyminds.com/blog.`,
      quickPrompts: ["DocuEsign SaaS", "Work at Chotubot.com", "Akshay's Tech Stack", "Contact Akshay"],
      actionLink: {
        label: "Visit AppyMinds Blog",
        url: "https://appyminds.com/blog",
        isExternal: true,
      },
    };
  }

  // 10. Tech Stack & Skills
  if (
    query.includes("skill") ||
    query.includes("tech") ||
    query.includes("stack") ||
    query.includes("programming") ||
    query.includes("language")
  ) {
    return {
      text: `🛠️ **Akshay's Core Technical Stack:**\n\n• **Frontend:** React, Next.js, TypeScript, Tailwind CSS, HTML5, CSS3, Intersection Observer, Lazy Loading, WebP optimization.\n• **Backend & APIs:** Node.js, Express, Supabase, PostgreSQL, REST APIs, NextAuth, JWT.\n• **Payments:** Razorpay (Magic Checkout, server webhooks & refunds), PayU.\n• **E-Commerce & Logistics:** Coupons, Affiliate Tracking, Shiprocket Fulfillment, International Currency & Shipping.\n• **Databases:** PostgreSQL, Supabase Database, MongoDB.\n• **DevOps & Collaboration:** GitLab CI/CD, Git, GitHub, Jira Kanban, Postman.`,
      quickPrompts: ["Work at Chotubot.com", "Razorpay & PayU payments", "DocuEsign SaaS", "Contact Akshay"],
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
    query.includes("study") ||
    query.includes("physics") ||
    query.includes("bsc") ||
    query.includes("bachelor") ||
    query.includes("hsc") ||
    query.includes("12th") ||
    query.includes("ssc") ||
    query.includes("10th") ||
    query.includes("school")
  ) {
    return {
      text: `🎓 **Akshay's Complete Educational Background:**\n\n1. **Master of Computer Applications (MCA):**\n   • **College:** MES Abasaheb Garware College, Pune (2023 – 2025)\n   • **Score:** **9.18 CGPA** (Graduated with distinction!)\n\n2. **Bachelor of Science (B.Sc.) in Physics:**\n   • **College:** New Arts, Commerce and Science College, Shevgaon\n   • **Score:** **80.42%** | **8.86 CGPA**\n\n3. **Higher Secondary Certificate (HSC - 12th):**\n   • **College:** New Arts, Commerce and Science College, Shevgaon\n   • **Score:** **69.85%** (Science Stream)\n\n4. **Secondary School Certificate (SSC - 10th):**\n   • **School:** Chapadgaon Highschool, Chapadgaon\n   • **Score:** **88.40%** (Distinction)\n\n• **Campus Highlights:** College cricket team player for 2 years & 1st prize in university group dance competition.`,
      quickPrompts: ["Work at Chotubot.com", "Akshay's Tech Stack", "Contact Akshay"],
    };
  }

  // 12. Contact & Social Profiles
  if (
    query.includes("contact") ||
    query.includes("email") ||
    query.includes("phone") ||
    query.includes("reach") ||
    query.includes("hire") ||
    query.includes("linkedin") ||
    query.includes("github") ||
    query.includes("location")
  ) {
    return {
      text: `📬 **Contact Akshay Telore:**\n\n• **Email:** [teloreakshay1000@gmail.com](mailto:teloreakshay1000@gmail.com)\n• **Phone:** [+91 9172925369](tel:+919172925369)\n• **Location:** Karve Nagar, Pune, Maharashtra, India\n• **LinkedIn:** [linkedin.com/in/akshay-telore-209934251](https://www.linkedin.com/in/akshay-telore-209934251)\n• **GitHub:** [github.com/AkshayTelore](https://github.com/AkshayTelore)\n\nFeel free to email Akshay directly or connect on LinkedIn!`,
      quickPrompts: ["Download Resume PDF", "Work at Chotubot.com", "Akshay's Tech Stack"],
    };
  }

  // 13. General About Me / Introduction
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
      text: `👋 **Meet Akshay Telore!**\n\n"At Dextop, I worked on Chotubot.com as a Full Stack Developer. I was involved in the project from UI implementation to backend development and production deployment. I converted Figma designs into responsive React/Next.js interfaces, implemented features such as coupon codes and affiliate marketing, integrated Razorpay and PayU payments, worked on international currency and shipping, and contributed to the inventory and order management dashboard. On the backend, I worked with Node.js, Supabase and PostgreSQL, and I also worked with GitLab and CI/CD for managing and deploying the application."\n\nAkshay completed his MCA with a **9.18 CGPA** (Distinction) and is open to full-time software engineering roles!`,
      quickPrompts: ["Work at Chotubot.com", "Razorpay & PayU payments", "DocuEsign SaaS", "Contact Akshay"],
    };
  }

  // Default Fallback
  return {
    text: `Thanks for asking! I can tell you about:\n\n• **Chotubot.com** (Figma to code, coupons, affiliate tracking, Razorpay & PayU, Shiprocket)\n• **DocuEsign** (Digital document signing platform)\n• **AppyMinds Blog** (Custom CMS and editor)\n• **Tech Stack** (React, Next.js, Node.js, TypeScript, Supabase, PostgreSQL)\n• **Academics** (MCA 9.18 CGPA, Garware College)\n• **Contact** (Email, phone, LinkedIn, GitHub)`,
    quickPrompts: [
      "Work at Chotubot.com",
      "Coupon & Affiliate systems",
      "Razorpay & PayU payments",
      "Download Resume PDF",
    ],
  };
}
