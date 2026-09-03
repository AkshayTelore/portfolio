import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#090d16] text-white px-4">
      <div className="text-center space-y-4 max-w-md">
        <h1 className="text-7xl font-mono font-extrabold text-teal-400">404</h1>
        <h2 className="text-2xl font-bold">Page Not Found</h2>
        <p className="text-slate-400 text-sm">
          The requested route does not exist. Return to Akshay Telore&apos;s portfolio.
        </p>
        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-teal-400 text-slate-950 font-bold text-sm hover:bg-teal-300 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
