'use client';
import { motion } from "framer-motion";
import { PaintBucket, AppWindow, ShieldCheck, Server, ArrowUpRight } from 'lucide-react';

export default function Services() {
  return (
    // CHANGED: bg-slate-950 -> bg-transparent
    <section id="expertise" className="py-32 relative border-t border-white/5 bg-transparent">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Technical <span className="text-indigo-500">Capabilities</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
                From visual modernizations to complex SaaS logic. I offer a complete digital lifecycle service for businesses ready to scale.
            </p>
        </div>

        {/* 4-Column Grid for Specific Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* 1. Web Design & Redesign */}
            <motion.div 
                whileHover={{ y: -5 }} 
                className="group p-8 bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 hover:border-indigo-500/50 rounded-2xl transition-all"
            >
                <div className="flex justify-between items-start mb-6">
                    <div className="p-3 bg-pink-500/10 rounded-lg text-pink-400">
                        <PaintBucket size={28} />
                    </div>
                    <ArrowUpRight className="text-slate-600 group-hover:text-indigo-400 transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Web Design & Redesign</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                    Transforming outdated legacy sites into high-performance digital assets. I focus on <strong>UI/UX Modernization</strong> and brand consistency to convert visitors into clients.
                </p>
                <ul className="text-xs text-slate-500 font-mono space-y-1">
                    <li>• Legacy Site Overhauls</li>
                    <li>• Conversion Rate Optimization</li>
                    <li>• Mobile-First Responsive Layouts</li>
                </ul>
            </motion.div>

            {/* 2. Web Application Creation */}
            <motion.div 
                whileHover={{ y: -5 }} 
                className="group p-8 bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 hover:border-indigo-500/50 rounded-2xl transition-all"
            >
                <div className="flex justify-between items-start mb-6">
                    <div className="p-3 bg-indigo-500/10 rounded-lg text-indigo-400">
                        <AppWindow size={28} />
                    </div>
                    <ArrowUpRight className="text-slate-600 group-hover:text-indigo-400 transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Custom Web App Creation</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                    Building robust, scalable applications from scratch. Whether it&apos;s a client portal, a dashboard, or a SaaS product, I engineer the <strong>full-stack logic</strong> required for business operations.
                </p>
                <ul className="text-xs text-slate-500 font-mono space-y-1">
                    <li>• React, Next.js & Angular Architecture</li>
                    <li>• Database Integration (SQL/Postgres)</li>
                    <li>• Secure User Authentication</li>
                </ul>
            </motion.div>

            {/* 3. QA Automation */}
            <motion.div 
                whileHover={{ y: -5 }} 
                className="group p-8 bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 hover:border-indigo-500/50 rounded-2xl transition-all"
            >
                <div className="flex justify-between items-start mb-6">
                    <div className="p-3 bg-emerald-500/10 rounded-lg text-emerald-400">
                        <ShieldCheck size={28} />
                    </div>
                    <ArrowUpRight className="text-slate-600 group-hover:text-indigo-400 transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">QA Automation Engineering</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                    Eliminating manual regression testing. I deploy rigorous automated test suites to ensure your software is <strong>99.9% defect-free</strong> before every deployment.
                </p>
                <ul className="text-xs text-slate-500 font-mono space-y-1">
                    <li>• Selenium & Playwright Frameworks</li>
                    <li>• End-to-End Test Script Development</li>
                    <li>• Manual Testing & Validation</li>
                    <li>• API Testing & Validation</li>
                    <li>• CI/CD Pipeline Integration</li>
                </ul>
            </motion.div>

            {/* 4. IT Infrastructure */}
            <motion.div 
                whileHover={{ y: -5 }} 
                className="group p-8 bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 hover:border-indigo-500/50 rounded-2xl transition-all"
            >
                <div className="flex justify-between items-start mb-6">
                    <div className="p-3 bg-blue-500/10 rounded-lg text-blue-400">
                        <Server size={28} />
                    </div>
                    <ArrowUpRight className="text-slate-600 group-hover:text-indigo-400 transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">IT Infrastructure</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                    Bridging the physical and digital. I coordinate network hardware, validate connectivity standards, and manage technical assets for <strong>retail and enterprise</strong> locations.
                </p>
                <ul className="text-xs text-slate-500 font-mono space-y-1">
                    <li>• 5G/LTE Network Validation</li>
                    <li>• POS System Diagnostics</li>
                    <li>• Hardware Asset Management</li>
                </ul>
            </motion.div>

        </div>
      </div>
    </section>
  );
}