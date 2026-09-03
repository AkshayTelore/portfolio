import os
from reportlab.lib.pagesizes import letter
from reportlab.lib.units import inch
from reportlab.lib import colors
from reportlab.platypus import (
    SimpleDocTemplate,
    Paragraph,
    Spacer,
    Table,
    TableStyle,
    HRFlowable,
    KeepTogether,
)
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_CENTER, TA_LEFT, TA_RIGHT

def create_resume_pdf(output_path):
    doc = SimpleDocTemplate(
        output_path,
        pagesize=letter,
        leftMargin=0.45 * inch,
        rightMargin=0.45 * inch,
        topMargin=0.45 * inch,
        bottomMargin=0.45 * inch,
    )

    styles = getSampleStyleSheet()

    # Custom styles
    header_name_style = ParagraphStyle(
        "HeaderName",
        parent=styles["Normal"],
        fontName="Helvetica-Bold",
        fontSize=20,
        leading=24,
        textColor=colors.HexColor("#0F172A"),
        alignment=TA_CENTER,
    )

    contact_style = ParagraphStyle(
        "Contact",
        parent=styles["Normal"],
        fontName="Helvetica",
        fontSize=8.5,
        leading=12,
        textColor=colors.HexColor("#334155"),
        alignment=TA_CENTER,
    )

    section_title_style = ParagraphStyle(
        "SectionTitle",
        parent=styles["Normal"],
        fontName="Helvetica-Bold",
        fontSize=11,
        leading=15,
        textColor=colors.HexColor("#1E3A8A"), # Cobalt Navy
        spaceBefore=7,
        spaceAfter=2,
    )

    job_title_style = ParagraphStyle(
        "JobTitle",
        parent=styles["Normal"],
        fontName="Helvetica-Bold",
        fontSize=9.5,
        leading=13,
        textColor=colors.HexColor("#0F172A"),
    )

    job_meta_style = ParagraphStyle(
        "JobMeta",
        parent=styles["Normal"],
        fontName="Helvetica-Bold",
        fontSize=8.5,
        leading=12,
        textColor=colors.HexColor("#2563EB"),
        alignment=TA_RIGHT,
    )

    sub_title_style = ParagraphStyle(
        "SubTitle",
        parent=styles["Normal"],
        fontName="Helvetica-Oblique",
        fontSize=8.5,
        leading=12,
        textColor=colors.HexColor("#475569"),
    )

    body_style = ParagraphStyle(
        "Body",
        parent=styles["Normal"],
        fontName="Helvetica",
        fontSize=8.5,
        leading=12,
        textColor=colors.HexColor("#1E293B"),
    )

    bullet_style = ParagraphStyle(
        "Bullet",
        parent=styles["Normal"],
        fontName="Helvetica",
        fontSize=8.2,
        leading=11.5,
        textColor=colors.HexColor("#1E293B"),
        leftIndent=12,
        firstLineIndent=-8,
        spaceBefore=1.5,
    )

    story = []

    # 1. Header Name
    story.append(Paragraph("AKSHAY PANDURANG TELORE", header_name_style))
    story.append(Spacer(1, 3))

    # 2. Contact Line
    contact_line = (
        "Karve Nagar, Pune 411052 | "
        "<a href='tel:+919172925369' color='#2563EB'><b>+91 9172925369</b></a> | "
        "<a href='mailto:teloreakshay1000@gmail.com' color='#2563EB'><b>teloreakshay1000@gmail.com</b></a> | "
        "<a href='https://www.linkedin.com/in/akshay-telore-209934251' color='#2563EB'><b>LinkedIn</b></a> | "
        "<a href='https://github.com/AkshayTelore' color='#2563EB'><b>GitHub</b></a>"
    )
    story.append(Paragraph(contact_line, contact_style))
    story.append(Spacer(1, 4))
    story.append(HRFlowable(width="100%", thickness=1, color=colors.HexColor("#CBD5E1"), spaceBefore=2, spaceAfter=4))

    # 3. ABOUT ME
    story.append(Paragraph("ABOUT ME", section_title_style))
    about_text = (
        "Full Stack Developer with hands-on experience building scalable web and mobile applications using "
        "<b>Next.js, React.js, TypeScript, Node.js, Supabase, Flutter, and Dart</b>. Experienced in architecting and "
        "maintaining production-ready systems including the complete <b>www.chotubot.com</b> platform (built from scratch "
        "from Figma designs), inventory management dashboards, affiliate marketing engines, international shipping workflows, "
        "Razorpay payment integrations, and cryptographic document signing platforms (<b>DocuEsign</b>). Skilled in building "
        "REST APIs, integrating third-party services, row-level security (RLS) databases, and managing agile delivery using "
        "<b>Jira Kanban boards</b> and <b>GitLab CI/CD</b>."
    )
    story.append(Paragraph(about_text, body_style))
    story.append(Spacer(1, 3))

    # 4. WORK EXPERIENCE
    story.append(Paragraph("WORK EXPERIENCE", section_title_style))

    # Job 1: Dextop
    dextop_table_data = [
        [
            Paragraph("<b>Associate Software Developer</b> — Dextop (<a href='https://www.chotubot.com' color='#2563EB'>www.chotubot.com</a>)", job_title_style),
            Paragraph("Dec 2025 - Present", job_meta_style),
        ]
    ]
    t1 = Table(dextop_table_data, colWidths=[5.4 * inch, 1.8 * inch])
    t1.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
        ('TOPPADDING', (0,0), (-1,-1), 0),
        ('BOTTOMPADDING', (0,0), (-1,-1), 0),
    ]))
    story.append(t1)

    dextop_bullets = [
        "Built <b>www.chotubot.com</b> from scratch as lead full-stack developer, translating comprehensive Figma designs into pixel-perfect, responsive Next.js & TypeScript components.",
        "Engineered the enterprise Dashboard featuring <b>Inventory Management</b> for real-time stock tracking, catalog updates, warehouse alerts, and supplier synchronization.",
        "Developed the complete <b>Affiliate Marketing feature</b> with unique referral tracking links, conversion analytics, and automated commission payout pipelines.",
        "Implemented <b>International Delivery</b> workflows supporting cross-border shipping compliance, dynamic currency conversion, and global order tracking checkpoints.",
        "Integrated <b>Razorpay payments</b> including signature verification, webhook state-machine listeners, and automated refund management routines.",
        "Developed the <b>Chotu ESP companion mobile app in Flutter and Dart</b> for smart hardware provisioning, Wi-Fi pairing, and real-time device control.",
        "Employed <b>Jira Kanban boards</b> for agile task management, sprint tracking, bug triage, and continuous delivery cycles via GitLab CI/CD.",
    ]
    for b in dextop_bullets:
        story.append(Paragraph(f"• {b}", bullet_style))

    story.append(Spacer(1, 4))

    # Job 2: SASH Info
    sash_table_data = [
        [
            Paragraph("<b>Full Stack Developer Intern</b> — SASH Info Pvt. Ltd (sashinfo.com | eductrl.com)", job_title_style),
            Paragraph("July 2025 - Oct 2025", job_meta_style),
        ]
    ]
    t2 = Table(sash_table_data, colWidths=[5.4 * inch, 1.8 * inch])
    t2.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
        ('TOPPADDING', (0,0), (-1,-1), 0),
        ('BOTTOMPADDING', (0,0), (-1,-1), 0),
    ]))
    story.append(t2)

    sash_bullets = [
        "Core engineer on flagship product <b>DocuEsign</b> including secure PDF document upload, visual drag-and-drop signature placement, and cryptographic audit ledgers.",
        "Implemented secure <b>OTP/email 2FA verification</b> workflows, user role management, and credit quota system.",
        "Integrated real-time tracking, IP geolocation capture, device fingerprinting, and activity status transitions.",
        "Developed and integrated Next.js REST APIs thoroughly verified with automated Postman collections.",
        "Integrated DocuEsign with <b>AppyMinds LMS</b> platform for seamless document signing and student onboarding flow.",
        "Improved UI/UX using Next.js, React, Bootstrap, Redux Toolkit, and reusable design tokens under Git version control.",
    ]
    for b in sash_bullets:
        story.append(Paragraph(f"• {b}", bullet_style))

    story.append(Spacer(1, 4))

    # 5. KEY PROJECTS
    story.append(Paragraph("PROJECTS", section_title_style))

    # Project 1: DocuEsign
    story.append(Paragraph("<b>DocuEsign — Digital Document Signing Platform</b> | <i>Next.js, React, MongoDB, Redux, Bootstrap, NextAuth</i>", job_title_style))
    story.append(Paragraph("• Built secure PDF upload, coordinate-mapped drag-and-drop signature canvas, and 2FA OTP verification.", bullet_style))
    story.append(Paragraph("• Added real-time tracking, IP/device capture, and integrated with AppyMinds LMS (<a href='https://appyminds.com/products/esignsure' color='#2563EB'>appyminds.com/products/esignsure</a>).", bullet_style))

    story.append(Spacer(1, 2))

    # Project 2: AppyMinds Blog
    story.append(Paragraph("<b>Blog Management Feature — AppyMinds.com</b> (Feb 2025 - Mar 2025) | <i>Next.js, Node.js, JWT, CKEditor</i>", job_title_style))
    story.append(Paragraph("• Built complete blog management admin panel with secure JWT login and role-based access control.", bullet_style))
    story.append(Paragraph("• Implemented full blog CRUD, image upload, category management, SEO/meta fields, and CKEditor WYSIWYG integration.", bullet_style))
    story.append(Paragraph("• Connected admin panel with live website to display published blogs (<a href='https://appyminds.com/blog' color='#2563EB'>appyminds.com/blog</a>).", bullet_style))

    story.append(Spacer(1, 2))

    # Project 3: Chotu ESP App
    story.append(Paragraph("<b>Chotu ESP IoT Companion Application</b> (2025 - Present) | <i>Flutter, Dart, ESP32, REST API, Jira</i>", job_title_style))
    story.append(Paragraph("• Built cross-platform mobile application in Flutter & Dart for wireless ESP device discovery, Wi-Fi provisioning, and hardware control.", bullet_style))

    story.append(Spacer(1, 4))

    # 6. SKILLS
    story.append(Paragraph("TECHNICAL SKILLS", section_title_style))
    skills_lines = [
        ("<b>Programming Languages:</b>", "Next.js, TypeScript, JavaScript (ES6+), Node.js, Express.js, Dart, Python, C/C++, Java"),
        ("<b>Frontend & Mobile:</b>", "React.js, Next.js (App Router), Flutter, Tailwind CSS, Redux Toolkit, Bootstrap, HTML5, CSS3"),
        ("<b>Backend & Databases:</b>", "Node.js, Express.js, Supabase (RLS & Auth), PostgreSQL, MongoDB, RESTful APIs, NextAuth, JWT"),
        ("<b>E-Commerce & Payments:</b>", "Razorpay (Webhooks & Verification), PayU, Inventory Management, Affiliate Marketing, Currency Conversion APIs"),
        ("<b>DevOps, Tools & Agile:</b>", "Git, GitHub, GitLab CI/CD, Render Cloud Deployment, Jira Kanban Boards, Postman, Figma, VS Code"),
    ]
    for label, items in skills_lines:
        story.append(Paragraph(f"{label} {items}", bullet_style))

    story.append(Spacer(1, 4))

    # 7. EDUCATION
    story.append(Paragraph("EDUCATION", section_title_style))
    edu_table_data = [
        [
            Paragraph("<b>Master of Computer Applications (MCA)</b> — MES Abasaheb Garware College, Pune", job_title_style),
            Paragraph("<b>CGPA: 9.18</b> | 2023 - 2025", job_meta_style),
        ]
    ]
    t3 = Table(edu_table_data, colWidths=[5.4 * inch, 1.8 * inch])
    t3.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
        ('TOPPADDING', (0,0), (-1,-1), 0),
        ('BOTTOMPADDING', (0,0), (-1,-1), 0),
    ]))
    story.append(t3)

    story.append(Spacer(1, 4))

    # 8. ACHIEVEMENTS & PERSONAL DETAILS
    story.append(Paragraph("ACHIEVEMENTS & PERSONAL DETAILS", section_title_style))
    story.append(Paragraph("• <b>First Prize in Group Dance Competition</b> — Won 1st place in college cultural competition and received certificate.", bullet_style))
    story.append(Paragraph("• <b>College Cricket Team Player</b> — Represented the college varsity cricket team in the 2nd and 3rd years of degree.", bullet_style))
    story.append(Paragraph("• <b>University Cricket (District Level)</b> — Selected for university under-matches at the district level.", bullet_style))
    story.append(Paragraph("• <b>Personal:</b> Born 2 May 2003 | Nationality: Indian | Languages: Marathi, English, Hindi | Hobbies: Tech, Video Games, Cricket.", bullet_style))

    doc.build(story)
    print(f"Successfully generated resume PDF at: {output_path}")

if __name__ == "__main__":
    os.makedirs("public", exist_ok=True)
    create_resume_pdf("public/Akshay_Telore_Resume.pdf")
