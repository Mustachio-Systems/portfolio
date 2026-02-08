'use client';
import { motion } from "framer-motion";
import { PaintBucket, AppWindow, ShieldCheck, Server, Code2, Database, Globe, Cpu } from 'lucide-react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InteractiveBackground from "@/components/InteractiveBackground";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Expertise | Mustachio Systems",
  description: "Learn more about the technical capabilities of Mustachio Systems.",
};

export default function Expertise() {
  
  const services = [
    {
      title: "Web Design & Redesign",
      icon: <PaintBucket size={32} className="text-pink-400" />,
      desc: "Transforming outdated legacy sites into high-performance digital assets. I focus on UI/UX Modernization and brand consistency to convert visitors into clients.",
      bullets: ["Legacy Site Overhauls", "Conversion Rate Optimization", "Mobile-First Responsive Layouts"]
    },
    {
      title: "Custom Web App Creation",
      icon: <AppWindow size={32} className="text-indigo-400" />,
      desc: "Building robust, scalable applications from scratch. Whether it's a client portal, a dashboard, or a SaaS product, I engineer the full-stack logic required for business operations.",
      bullets: ["React, Next.js & Angular Architecture", "Database Integration (SQL/Postgres)", "Secure User Authentication"]
    },
    {
      title: "QA Automation Engineering",
      icon: <ShieldCheck size={32} className="text-emerald-400" />,
      desc: "Eliminating manual regression testing. I deploy rigorous automated test suites to ensure your software is 99.9% defect-free before every deployment.",
      bullets: ["Selenium & Playwright Frameworks", "End-to-End Test Script Development", "CI/CD Pipeline Integration"]
    },
    {
      title: "IT Infrastructure",
      icon: <Server size={32} className="text-blue-400" />,
      desc: "Bridging the physical and digital. I coordinate network hardware, validate connectivity standards, and manage technical assets for retail and enterprise locations.",
      bullets: ["5G/LTE Network Validation", "POS System Diagnostics", "Hardware Asset Management"]
    }
  ];

  const techStack = [
    { category: "Frontend", items: ["Next.js 14", "React", "Angular", "Tailwind CSS", "Framer Motion", "TypeScript"] },
    { category: "Backend", items: ["Node.js", "PostgreSQL", "Supabase", "Azure Functions", "REST APIs"] },
    { category: "QA & Ops", items: ["Playwright", "Cypress", "Selenium", "Docker", "Vercel", "Cloudflare"] },
  ];

  return (
    <main className="min-h-screen relative selection:bg-indigo-500/30 font-sans text-slate-300">
      <InteractiveBackground />
      <div className="relative z-10">
        <Navbar />

        {/* Header */}
        <section className="pt-40 pb-20 px-6 text-center">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight">
                    Technical <span className="text-indigo-500">Capabilities</span>.
                </h1>
                <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
                    I provide the technical firepower of an agency with the agility of a solo partner. From visual modernizations to complex SaaS logic.
                </p>
            </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                {services.map((service, index) => (
                    <motion.div 
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="p-10 bg-slate-900/40 border border-white/5 rounded-3xl hover:border-indigo-500/30 transition-all hover:bg-slate-900/60"
                    >
                        <div className="mb-6 p-4 bg-slate-950 border border-slate-800 rounded-2xl w-fit">
                            {service.icon}
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                        <p className="text-slate-400 leading-relaxed mb-8 h-20">
                            {service.desc}
                        </p>
                        <ul className="space-y-3 border-t border-white/5 pt-6">
                            {service.bullets.map((bullet, i) => (
                                <li key={i} className="flex items-center gap-3 text-sm text-slate-300">
                                    <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full" />
                                    {bullet}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </section>

        {/* Tech Stack Breakdown */}
        <section className="py-24 border-t border-white/5 bg-slate-950/30">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-white mb-4">The Engineering Stack</h2>
                    <p className="text-slate-400">The tools I use to build scalable, production-ready systems.</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {techStack.map((stack, index) => (
                        <div key={index} className="p-8 rounded-2xl bg-slate-900 border border-slate-800">
                            <h3 className="text-indigo-400 font-mono text-sm uppercase tracking-widest mb-6 border-b border-white/5 pb-4">
                                {stack.category}
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {stack.items.map((item, i) => (
                                    <span key={i} className="px-3 py-1.5 bg-slate-950 border border-slate-700 rounded text-sm text-slate-300">
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* CTA */}
        <section className="py-24 text-center">
            <h2 className="text-3xl font-bold text-white mb-8">Have a complex technical challenge?</h2>
            <Link 
                href="/contact" 
                className="inline-block px-10 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-lg transition-all"
            >
                Discuss Architecture
            </Link>
        </section>

        <Footer />
      </div>
    </main>
  );
}