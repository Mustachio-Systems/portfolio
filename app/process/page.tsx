'use client';
import { motion } from "framer-motion";
import { CheckCircle2, Search, PenTool, Code, Server, Zap, X } from 'lucide-react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InteractiveBackground from "@/components/InteractiveBackground";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Process | Mustachio Systems",
  description: "Learn about the engineering process used by Mustachio Systems.",
};

export default function Process() {
  
  const steps = [
    {
      id: "01",
      title: "Discovery & Audit",
      icon: <Search className="text-indigo-400" size={24} />,
      desc: "We skip the sales fluff. We start with a technical deep-dive into your current infrastructure, identifying bottlenecks, security risks, and opportunities for automation.",
      deliverable: "Deliverable: Technical Audit & Strategy Roadmap"
    },
    {
      id: "02",
      title: "Rapid Prototyping",
      icon: <PenTool className="text-pink-400" size={24} />,
      desc: "Before a single line of production code is written, I build a high-fidelity interactive prototype. You see exactly how the final product will look and feel.",
      deliverable: "Deliverable: Clickable Figma/HTML Prototype"
    },
    {
      id: "03",
      title: "Full-Stack Execution",
      icon: <Code className="text-emerald-400" size={24} />,
      desc: "I engineer the solution using type-safe architectures (Next.js/Angular). This isn't just 'making it look good'—it's building a scalable system with optimized SQL databases.",
      deliverable: "Deliverable: Production-Ready Codebase"
    },
    {
      id: "04",
      title: "QA & Automation",
      icon: <Server className="text-blue-400" size={24} />,
      desc: "Rigorous testing protocols. I write automated test scripts (Cypress/Playwright) to ensure that future updates don't break your system. 99.9% uptime is the standard.",
      deliverable: "Deliverable: Automated Test Suite & Deployment"
    }
  ];

  return (
    <main className="min-h-screen relative selection:bg-indigo-500/30 font-sans">
      
      {/* Background Layer */}
      <InteractiveBackground />

      <div className="relative z-10">
        <Navbar />

        {/* Header Section */}
        <section className="pt-32 pb-20 px-6">
            <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                    The Engineering <span className="text-indigo-500">Lifecycle</span>.
                </h1>
                <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                    A linear, transparent workflow designed to cut development time in half. No middle management. No {'"black box"'} delays. Just direct execution.
                </p>
            </div>
        </section>

        {/* The Timeline Steps */}
        <section className="py-20 px-6">
            <div className="max-w-4xl mx-auto">
                <div className="relative border-l border-slate-800 ml-4 md:ml-10 space-y-16">
                    
                    {steps.map((step, index) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative pl-12 md:pl-16"
                        >
                            {/* Number Bubble */}
                            <div className="absolute -left-5 top-0 w-10 h-10 bg-slate-900 border border-slate-700 rounded-full flex items-center justify-center text-slate-500 text-sm font-mono font-bold z-10">
                                {step.id}
                            </div>

                            <div className="bg-slate-900/50 border border-slate-800 p-8 rounded-2xl hover:border-indigo-500/30 transition-colors">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="p-3 bg-slate-950 rounded-lg border border-slate-800">
                                        {step.icon}
                                    </div>
                                    <h3 className="text-2xl font-bold text-white">{step.title}</h3>
                                </div>
                                <p className="text-slate-400 text-lg leading-relaxed mb-6">
                                    {step.desc}
                                </p>
                                <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full">
                                    <CheckCircle2 size={14} className="text-indigo-400" />
                                    <span className="text-indigo-300 text-xs font-mono tracking-wide uppercase">
                                        {step.deliverable}
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}

                </div>
            </div>
        </section>

        {/* The "Why Us" Comparison */}
        <section className="py-24 bg-slate-950/50 border-t border-white/5">
            <div className="max-w-5xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-white mb-4">{'The "Studio of One" Advantage'}</h2>
                    <p className="text-slate-400">Why partnering with an Executive Engineer beats hiring a traditional agency.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    
                    {/* Traditional Agency Card */}
                    <div className="p-8 rounded-2xl border border-red-900/20 bg-red-900/5 opacity-75">
                        <h3 className="text-red-400 font-bold mb-6 flex items-center gap-2">
                            <X size={20} /> Traditional Agencies
                        </h3>
                        <ul className="space-y-4 text-slate-400 text-sm">
                            <li className="flex gap-3">
                                <span className="text-red-900">✖</span>
                                Project managed by junior staff, not experts.
                            </li>
                            <li className="flex gap-3">
                                <span className="text-red-900">✖</span>
                                Bloated timelines (waiting for approvals).
                            </li>
                            <li className="flex gap-3">
                                <span className="text-red-900">✖</span>
                                {'"Black Box" billing and mystery hours.'}
                            </li>
                            <li className="flex gap-3">
                                <span className="text-red-900">✖</span>
                                Generic templates sold as custom code.
                            </li>
                        </ul>
                    </div>

                    {/* Mustachio Systems Card */}
                    <div className="p-8 rounded-2xl border border-emerald-500/30 bg-emerald-900/10 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 blur-3xl" />
                        <h3 className="text-emerald-400 font-bold mb-6 flex items-center gap-2">
                            <Zap size={20} /> Mustachio Systems
                        </h3>
                        <ul className="space-y-4 text-slate-300 text-sm font-medium">
                            <li className="flex gap-3">
                                <span className="text-emerald-500">✔</span>
                                Direct access to the Lead Engineer (Me).
                            </li>
                            <li className="flex gap-3">
                                <span className="text-emerald-500">✔</span>
                                Rapid prototypes in 72 hours.
                            </li>
                            <li className="flex gap-3">
                                <span className="text-emerald-500">✔</span>
                                Transparent, milestone-based pricing.
                            </li>
                            <li className="flex gap-3">
                                <span className="text-emerald-500">✔</span>
                                Custom architecture built for *your* business.
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}