import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Akshay Pandurang Telore | Full Stack Developer",
  description:
    "Portfolio of Akshay Pandurang Telore — Full Stack Developer specialized in Next.js, React, TypeScript, Supabase, DocuEsign, AppyMinds Blog Engine, and Razorpay payment systems.",
  keywords: [
    "Akshay Pandurang Telore",
    "Akshay Telore",
    "Full Stack Developer",
    "Next.js Developer",
    "React Developer",
    "TypeScript",
    "Supabase",
    "DocuEsign",
    "AppyMinds",
    "Razorpay",
    "Pune Developer",
    "Render Deployment",
  ],
  authors: [{ name: "Akshay Pandurang Telore", url: "https://github.com/AkshayTelore" }],
  openGraph: {
    title: "Akshay Pandurang Telore | Full Stack Developer",
    description:
      "Full Stack Developer building scalable applications with Next.js, TypeScript, Supabase, and Razorpay. Featured projects: DocuEsign, AppyMinds Blog Engine, Dextop Order & Shipping Dashboard.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-[#090d16] text-slate-100 antialiased selection:bg-teal-500/30 selection:text-teal-200">
        {children}
      </body>
    </html>
  );
}
