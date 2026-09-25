# Akshay Pandurang Telore — Full Stack Developer Portfolio

A modern, high-performance developer portfolio built with **Next.js 14**, **TypeScript**, **Tailwind CSS**, and an **Interactive Corner AI Chatbot**, showcasing full-stack production systems, payment gateway integrations, and verified achievements.

---

## 👨‍💻 About Akshay

- **Role:** Full Stack Developer
- **Location:** Karve Nagar, Pune, Maharashtra 411052, India
- **Email:** [teloreakshay1000@gmail.com](mailto:teloreakshay1000@gmail.com)
- **Phone:** [+91 9172925369](tel:+919172925369)
- **LinkedIn:** [linkedin.com/in/akshay-telore-209934251](https://www.linkedin.com/in/akshay-telore-209934251)
- **GitHub:** [github.com/AkshayTelore](https://github.com/AkshayTelore)
- **Education:**
  - **Master of Computer Applications (MCA):** MES Abasaheb Garware College, Pune (2023 – 2025) — **9.18 CGPA** (Distinction)
  - **Bachelor of Science (B.Sc.) in Physics:** New Arts, Commerce and Science College, Shevgaon — **80.42%** | **8.86 CGPA**
  - **Higher Secondary Certificate (HSC - 12th):** New Arts, Commerce and Science College, Shevgaon — **69.85%** (Science Stream)
  - **Secondary School Certificate (SSC - 10th):** Chapadgaon Highschool, Chapadgaon — **88.40%** (Distinction)

---

## 🚀 Key Featured Projects

### 1. Chotubot.com — Full-Stack E-Commerce Platform & Dashboard
- **Company:** Dextop Gadget Pvt. Ltd.
- **Role:** Full Stack Developer / Associate Software Developer
- **Website:** [https://www.chotubot.com](https://www.chotubot.com)
- **Tech Stack:** React, Next.js, TypeScript, Node.js, Supabase, PostgreSQL, REST APIs, Razorpay, PayU, Shiprocket, GitLab, CI/CD.
- **Key Contributions:**
  - **Frontend UI from Figma:** Implemented responsive storefront interfaces for Hero, Buy Now, Chotu Special, Modes, Creativity, Instagram/IG, and checkout across mobile, tablet, and desktop.
  - **Performance Optimization:** Implemented Intersection Observer, lazy-loaded videos, WebP asset compression, and code splitting.
  - **Coupon Code Engine:** Multi-tier discount engine (fixed, percentage, and free shipping) with real-time active/expiry validation and visit tracking.
  - **Affiliate Marketing:** Partner referral tracking, visitor identification (localStorage/sessionStorage), and database attribution.
  - **Payments:** Razorpay (with Magic Checkout) and PayU integrations. Built server-side webhook verification to reliably update orders even when client checkout flows are interrupted.
  - **Logistics & Shipping:** Integrated Shiprocket fulfillment for Indian domestic orders and REST Countries/exchange rate APIs for international multi-currency shipping.
  - **Inventory & Order Management Dashboard:** Internal operations tool managing products, stock levels, orders, and payment verification.
  - **Database & DevOps:** Supabase & PostgreSQL tables with Row-Level Security (RLS) policies, feature branching, and automated GitLab CI/CD pipelines.

### 2. DocuEsign — Digital Document Signing Platform
- **Live Demo:** [https://appyminds.com/products/esignsure](https://appyminds.com/products/esignsure)
- **Tech Stack:** Next.js, React.js, MongoDB, Redux, Bootstrap, NextAuth, REST APIs, Render.
- **Key Features:**
  - Interactive PDF drag-and-drop signature & initials placement with coordinate mapping.
  - Two-factor OTP & email verification before committing signatures.
  - Comprehensive audit trail capturing IP geolocation, device metadata, and chronological event ledger.
  - Organization-level signing credit quota management.
  - Live integration with **AppyMinds LMS** for seamless student & faculty agreement workflows.

### 3. Blog Management Feature — AppyMinds.com
- **Live Demo:** [https://appyminds.com/blog](https://appyminds.com/blog)
- **Tech Stack:** Next.js, Node.js, JWT Authentication, CKEditor HTML WYSIWYG, SEO Meta Engine.
- **Key Features:**
  - Administrative back-office with secure JWT token authentication and role-based access control.
  - Full CRUD operations with draft staging, scheduled publishing, and category filtering.
  - Integrated CKEditor HTML WYSIWYG editor with automated URL slugification and image validation.
  - Connected directly with live production AppyMinds website.

---

## 🤖 Interactive Corner AI Chatbot ("AkshayBot")

Anchored at the bottom-right corner of the website:
- **Intelligent Knowledge Engine:** Answers questions about Akshay's tech stack, DocuEsign, AppyMinds, Dextop experience, education, sports achievements, and contact details.
- **Quick Action Prompts:** Immediate chips for instant inquiries.
- **Direct Action Links:** Live links embedded directly inside chat messages.
- **Resilient Fallback:** Works both via Next.js `/api/chat` and client-side knowledge matcher.

---

## 🛠️ Local Development

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the local development server:**
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🌐 Deploying to Render

This project is pre-configured for seamless deployment on **Render**:

### Option 1: Automatic Blueprint (Recommended)
1. Push this repository to your **GitHub** account (`https://github.com/AkshayTelore/portfolio`).
2. Log in to [Render Dashboard](https://dashboard.render.com/).
3. Click **New +** -> **Blueprint**.
4. Connect your GitHub repository. Render will automatically detect `render.yaml` and configure:
   - **Environment:** Node
   - **Build Command:** `npm install && npm run build`
   - **Start Command:** `npm start`
5. Click **Apply** to deploy!

### Option 2: Manual Web Service Setup
1. On the Render Dashboard, click **New +** -> **Web Service**.
2. Select your repository.
3. Configure the following fields:
   - **Name:** `akshay-portfolio`
   - **Runtime:** `Node`
   - **Build Command:** `npm install && npm run build`
   - **Start Command:** `npm start`
   - **Instance Type:** `Free`
4. Render automatically supplies the `PORT` environment variable, which `server.js` listens on automatically.
5. Click **Deploy Web Service**.
