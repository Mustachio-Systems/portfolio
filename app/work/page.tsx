'use client';
import { motion } from "framer-motion";
import { ArrowUpRight, Lock, Info, Layout, Server, Zap } from 'lucide-react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InteractiveBackground from "@/components/InteractiveBackground";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work | Mustachio Systems",
  description: "View selected projects and case studies from Mustachio Systems.",
};

export default function Work() {
  const projects = [
    {
        id: "01",
        title: "Liza Zen Spa",
        category: "Commercial Client",
        year: "2026",
        desc: "A luxury wellness platform for a spa in Paris 15. The client required a 'Golden Serenity' aesthetic with zero framework bloat. I engineered a custom 'Floating Gold Dust' animation engine and a dynamic content injection system using pure JavaScript.",
        stats: ["Custom Particle Engine", "High Performance Score"],
        tech: ["HTML5", "CSS3", "Vanilla JS"],
        link: "#", 
        type: "Client",
        icon: <Layout className="text-indigo-400" />
    },
    {
        id: "02",
        title: "ATS SaaS Platform",
        category: "Internal Engineering",
        year: "2025",
        desc: "A complete rebuild of a legacy Applicant Tracking System. I optimized complex SQL queries to handle thousands of candidate records and built a custom Outlook VBA plugin to automate recruiter workflows.",
        stats: ["99.9% System Uptime", "Fast Recruiting Workflows"],
        tech: ["Angular", "SQL Server", "Azure"],
        link: null,
        type: "Internal",
        icon: <Server className="text-blue-400" />
    },
    {
        id: "03",
        title: "The Cervantes Group",
        category: "Concept Redesign",
        year: "2025",
        desc: "A technical modernization concept for a multi-national consultancy. The goal was to visualize 'Future-Ready' capabilities using a custom 'Defense Grid' preloader and interactive particle networks.",
        stats: ["Custom WebGL Preloader", "Global CMS Architecture"],
        tech: ["React", "Framer Motion", "WebGL"],
        link: "https://concept-thecervantesgroup.pages.dev",
        type: "Concept",
        icon: <Zap className="text-amber-400" />
    },
    {
        id: "04",
        title: "Ciudad LaundroMax",
        category: "Concept Redesign",
        year: "2025",
        desc: "A modern, high-contrast digital experience for Puerto Rico's favorite laundry service. I designed a dark-mode UI that organizes complex service tiers (Airbnb, Commercial, Wash & Fold) into an accessible, mobile-first grid. Features a custom reviews integration to highlight their 4.8-star rating.",
        stats: ["Mobile-First Grid Layout", "Local SEO Optimization"],
        tech: ["HTML5", "CSS Variables", "Vanilla JS"],
        link: "https://laundromax-redesign.pages.dev/",
        type: "Concept",
        icon: <Zap className="text-amber-400" />
    }
  ];

  return (
    <main className="min-h-screen relative selection:bg-indigo-500/30 font-sans text-slate-300">
      <InteractiveBackground />
      <div className="relative z-10">
        <Navbar />

        {/* Header */}
        <section className="pt-40 pb-20 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 border border-indigo-500/30 rounded-full bg-indigo-500/10 backdrop-blur-md">
                     <div className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
                     <span className="text-indigo-300 font-mono text-xs tracking-wider uppercase">Case Archive</span>
                </div>
                <h1 className="text-5xl md:text-8xl font-bold text-white mb-8 tracking-tight">
                    Selected <span className="text-indigo-500">Works</span>.
                </h1>
            </div>
        </section>

        {/* Projects List (Text Only) */}
        <section className="pb-32 px-6">
            <div className="max-w-5xl mx-auto grid grid-cols-1 gap-12">
                
                {projects.map((project, index) => (
                    <motion.div 
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="group relative bg-slate-900/40 border border-white/5 rounded-3xl p-8 md:p-12 hover:border-indigo-500/30 transition-all duration-300 hover:bg-slate-900/60"
                    >
                        <div className="flex flex-col md:flex-row gap-8 md:gap-12">
                            
                            {/* Icon & Year Column */}
                            <div className="flex-shrink-0 flex md:flex-col items-center md:items-start gap-4">
                                <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 group-hover:border-indigo-500/50 transition-colors">
                                    {project.icon}
                                </div>
                                <span className="text-sm font-mono text-slate-500">{project.year}</span>
                            </div>

                            {/* Main Content */}
                            <div className="flex-grow">
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                                    <h2 className="text-2xl md:text-3xl font-bold text-white group-hover:text-indigo-400 transition-colors">
                                        {project.title}
                                    </h2>
                                    <span className={`text-xs font-mono uppercase tracking-widest px-3 py-1 rounded-full border ${
                                        project.type === 'Client' ? 'text-indigo-300 border-indigo-500/30 bg-indigo-500/10' :
                                        project.type === 'Internal' ? 'text-blue-300 border-blue-500/30 bg-blue-500/10' : 
                                        'text-amber-300 border-amber-500/30 bg-amber-500/10'
                                    }`}>
                                        {project.category}
                                    </span>
                                </div>

                                <p className="text-slate-400 leading-relaxed mb-8 text-base md:text-lg max-w-3xl">
                                    {project.desc}
                                </p>

                                {/* Stats & Tech Row */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-6 border-y border-white/5 mb-8">
                                    <div className="space-y-2">
                                        <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-2">Impact</h4>
                                        {project.stats.map((stat, i) => (
                                            <div key={i} className="flex items-center gap-2 text-sm text-slate-300">
                                                <div className="w-1 h-1 bg-indigo-500 rounded-full" />
                                                {stat}
                                            </div>
                                        ))}
                                    </div>
                                    <div className="space-y-2">
                                        <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-2">Architecture</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {project.tech.map((t, i) => (
                                                <span key={i} className="px-2 py-1 text-xs font-mono text-slate-400 bg-slate-950 border border-slate-800 rounded">
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Action */}
                                <div className="flex items-center gap-6">
                                    {project.link ? (
                                        <a 
                                            href={project.link} 
                                            target="_blank"
                                            className="inline-flex items-center gap-2 text-white font-bold text-sm hover:text-indigo-400 transition-colors"
                                        >
                                            View Deployment <ArrowUpRight size={16} />
                                        </a>
                                    ) : (
                                        <div className="inline-flex items-center gap-2 text-slate-600 font-bold text-sm cursor-not-allowed">
                                            <Lock size={16} /> Proprietary Internal Tool
                                        </div>
                                    )}

                                    {project.type === 'Concept' && (
                                        <div className="flex items-center gap-1 text-[10px] text-slate-600">
                                            <Info size={12} />
                                            <span>Concept</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}

            </div>
        </section>
        
        {/* CTA Footer for this page */}
        <section className="py-24 text-center border-t border-white/5 bg-slate-950/50">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to execute your vision?</h2>
            <Link 
                href="/contact" 
                className="inline-block px-10 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-lg transition-all shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40"
            >
                Start a Project
            </Link>
        </section>

        <Footer />
      </div>
    </main>
  );
}